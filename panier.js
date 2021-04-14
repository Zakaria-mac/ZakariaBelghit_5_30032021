// Récupérer le localStorage sur panier.js 
const shoppingCart = async () => {
    return JSON.parse(localStorage.getItem('product'))
}


// Affichage du panier

const shoppingCartDisplay = async () => {
    const storage = await shoppingCart()
    const primaryContainer = document.getElementById("productSelected")

    for (let i in storage){

        const firstContainerShoppingCard = document.createElement("div")
        primaryContainer.appendChild(firstContainerShoppingCard)
        firstContainerShoppingCard.setAttribute("class", "card d-flex flex-row")
        
        const imageOfProduct = document.createElement("img")
        firstContainerShoppingCard.appendChild(imageOfProduct)

        const containerOfProduct = document.createElement("div")
        firstContainerShoppingCard.appendChild(containerOfProduct)

        const nameOfProduct = document.createElement("h2")
        containerOfProduct.appendChild(nameOfProduct)

        const optionOfProduct = document.createElement("p")
        containerOfProduct.appendChild(optionOfProduct)

        const priceOfProduct = document.createElement("p")
        containerOfProduct.appendChild(priceOfProduct)

         // Donne le rôle et la classe de chaque élément créé

        imageOfProduct.setAttribute("src", storage[i].image)
        imageOfProduct.setAttribute("class", "card-img shoppingCartImg")
        containerOfProduct.setAttribute("class", "card-body")
        nameOfProduct.setAttribute("class", "card-title")
        optionOfProduct.setAttribute("class", "card-text")
        priceOfProduct.setAttribute("class", "card-text d-flex justify-content-end")

        
        imageOfProduct.innerHTML = storage[i].image
        nameOfProduct.innerHTML = storage[i].name
        optionOfProduct.innerHTML = " Option : " +storage[i].lenses
        priceOfProduct.innerHTML = storage[i].price

        /* création du bouton pour supprimer un produit*/
        const deleteProduct = document.getElementsByClassName("btn-danger")

        for (let i = 0; i < deleteProduct.length; i++) {
        let button = deleteProduct[i]
        button.addEventListener('click', function(event){
        let buttonDeletedClicked = event.target 
        buttonDeletedClicked.firstContainerShoppingCard.remove()
        })
        }

    }
       
}
shoppingCartDisplay()


/* addition du bouton total des prix*/