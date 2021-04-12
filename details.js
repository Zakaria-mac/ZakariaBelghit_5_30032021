
/* Récupération de la chaine de requête dans l'URL
 * Objectif : cliquer sur un produit du site et être directement renvoyé  à la page détail
*/

// Récupération de l'iD, sans le "?"//
const queryString_url_id = window.location.search;

const urlSearchParams = new URLSearchParams(queryString_url_id)

const id = urlSearchParams.get("id")

const loadData = async () => {
    return await (await fetch("http://localhost:3000/api/cameras/" + id)).json()
}

const displayDetail = async () => {

    const idChosenProduct = await loadData() 

    const containerListDetail = document.getElementById('detail')
    console.log(containerListDetail )
    
    const detailMainContainer = document.createElement("div")
    containerListDetail.appendChild(detailMainContainer)
    
    const detailName = document.createElement("h2")
    detailMainContainer.appendChild(detailName)
    
    const detailImageContainer = document.createElement("div")
    const detailImageUrl = document.createElement("img")
    detailMainContainer.appendChild(detailImageContainer)
    detailImageContainer.appendChild(detailImageUrl)    
    
    const detailDescription = document.createElement("p")
    detailMainContainer.appendChild(detailDescription)
    
    const detailPrice = document.createElement("p")
    detailMainContainer.appendChild(detailPrice)
    
    
    detailName.innerHTML = idChosenProduct.name
    detailImageUrl.innerHTML = idChosenProduct.imageUrl
    detailDescription.innerHTML =idChosenProduct.description
    detailPrice.innerHTML = idChosenProduct.price/100 + " € "

     // Donne le rôle et la classe de chaque élément créé
     containerListDetail.setAttribute("class", "card card-body col-12 text-left")
     detailName.setAttribute("class", "card-title text-center")
     detailImageUrl.setAttribute("src", idChosenProduct.imageUrl)
     detailImageUrl.setAttribute("class", "card-img")
     detailDescription.setAttribute("class", "card-text")

    
    //récupération id formulaire pour choix option + mise en place Bootstrap
    
    const selectionOption = idChosenProduct.lenses
    console.log(selectionOption)
    
    for (let i in selectionOption){
        const select = document.getElementById("select")
        containerListDetail.appendChild(select)

        select.setAttribute("class", "card-text w-25")

        const detailObject = document.createElement("option")
        select.appendChild(detailObject)
    
        detailObject.setAttribute("value", `${selectionOption[i]}`)
        detailObject.innerHTML = idChosenProduct.lenses[i]
    }
    
    //vérification des values
    let checking = document.querySelector("select");
        checking.addEventListener("change", function(){
        console.log("value => "+this.value)
    })

    /* Envoi du produit au panier via localstorage : 
    - Récupération des données de la page détail
    */   
    const boutonEnvoi = document.querySelector("button")
    containerListDetail.appendChild(boutonEnvoi)
    boutonEnvoi.setAttribute("class", "card-link w-25")

    boutonEnvoi.addEventListener("click", function(){

        productChosen = JSON.stringify(idChosenProduct)
        localStorage.setItem("idChosenProduct", productChosen)
    
        let newProduct = JSON.parse(localStorage.getItem('idChosenProduct'))
    
        //Envoi au panier 
        let myNewArray = new Array()
    
        myNewArray.push(newProduct)
    
        productArray = JSON.stringify(myNewArray)
    
        localStorage.setItem("product", productArray)
        myNewArray = JSON.parse(localStorage.getItem('product'))
    })
}
displayDetail()

