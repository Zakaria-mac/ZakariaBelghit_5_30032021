
/* Récupération de la chaine de requête dans l'URL
 * Objectif : cliquer sur un produit du site et être directement renvoyé  à la page détail
*/

// Récupération de l'iD, sans le "?"//

const queryString_url_id = window.location.search;

const urlSearchParams = new URLSearchParams(queryString_url_id)

const id = urlSearchParams.get("id")


//Récupérer les données de l'API via Fetch en prenant en compte l'id

const loadData = async () => {
    return await (await fetch("http://localhost:3000/api/cameras/" + id)).json()
}


//Affichage dans le HTML de la fonction retournant les objets provenant de l'APIs

const displayDetail = async () => {

    // Création des éléments qui vont recuillir les data de l'API

    const idChosenProduct = await loadData() 

    const containerListDetail = document.getElementById('detail')
    
    const detailMainContainer = document.createElement("div")
    containerListDetail.appendChild(detailMainContainer)
    
    const detailName = document.createElement("h1")
    detailMainContainer.appendChild(detailName) 
    
    const detailImageUrl = document.createElement("img")
    detailMainContainer.appendChild(detailImageUrl)    
    
    const detailDescription = document.createElement("p")
    detailMainContainer.appendChild(detailDescription)
    
    const detailPrice = document.createElement("strong")
    detailMainContainer.appendChild(detailPrice)
    
    
    detailName.innerHTML = idChosenProduct.name
    detailImageUrl.innerHTML = idChosenProduct.imageUrl
    detailDescription.innerHTML =idChosenProduct.description
    detailPrice.innerHTML = idChosenProduct.price/100 + " € "

     // Donne le rôle et la classe de chaque élément créé

     containerListDetail.setAttribute("class", "card containerListDetail")

     detailMainContainer.setAttribute("class", "card-body d-flex flex-column text-left")

     detailName.setAttribute("class", "card-title text-center")

     detailImageUrl.setAttribute("src", idChosenProduct.imageUrl)
     detailImageUrl.setAttribute("class", "card-img")
     detailImageUrl.setAttribute("alt","Image de l'appareil photographique sélectionné")
     detailImageUrl.setAttribute("title","Image de l'appareil photographique sélectionné")

     detailDescription.setAttribute("class", "card-text mt-3")

     detailPrice.setAttribute("class", "card-text mb-3")
    
    //récupération id formulaire pour choix option + mise en place Bootstrap
    
    const selectionOption = idChosenProduct.lenses
    
    for (let i in selectionOption){
        const select = document.getElementById("select")
        detailMainContainer.appendChild(select)

        select.setAttribute("class", "card-text w-50 cursor")

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
    detailMainContainer.appendChild(boutonEnvoi)
    boutonEnvoi.setAttribute("class", "card-link w-50 mt-2 buttonEnvoi")

    boutonEnvoi.setAttribute("action", "panier.html")
    
    boutonEnvoi.addEventListener("click", function(){
        const selectedOption = document.getElementById("select").value
        const chosenProduct = {
            name : idChosenProduct.name,
            image :  idChosenProduct.imageUrl,
            description : idChosenProduct.description,
            price : idChosenProduct.price/100,
            lenses : selectedOption,
            _id : idChosenProduct._id
        }
       
        localStorage.setItem("chosenProduct", JSON.stringify(chosenProduct))
        JSON.parse(localStorage.getItem('chosenProduct')) 
        
        //Envoi au panier 
    
        let myNewArray = new Array()
        myNewArray = JSON.parse(localStorage.getItem('product')) ||[]
    
        myNewArray.push(JSON.parse(localStorage.getItem('chosenProduct'))) 
       
        localStorage.setItem("product", JSON.stringify(myNewArray))   
        })

        //Alerte envoyée pour confirmer l'envoi au Panier
        
        boutonEnvoi.addEventListener("click", function(){
            confirm("Votre produit à bien été ajouté au panier")
        })
    }
displayDetail()




    
    
