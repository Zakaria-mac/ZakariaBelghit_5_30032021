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
        
        const imageOfProduct = document.createElement("img")
        firstContainerShoppingCard.appendChild(imageOfProduct)

        const containerOfProduct = document.createElement("div")
        firstContainerShoppingCard.appendChild(containerOfProduct)

        const nameOfProduct = document.createElement("h2")
        containerOfProduct.appendChild(nameOfProduct)

        const optionOfProduct = document.createElement("p")
        containerOfProduct.appendChild(optionOfProduct)

        const priceOfProduct = document.createElement("strong")
        containerOfProduct.appendChild(priceOfProduct)

         // Donne le rôle et la classe de chaque élément créé

        firstContainerShoppingCard.setAttribute("class", "card d-flex flex-md-row mb-4") 
        firstContainerShoppingCard.setAttribute("title","Produit sélectionné")

        imageOfProduct.setAttribute("src", storage[i].image)
        imageOfProduct.setAttribute("class", "card-img-top d-flex imageOfProduct justify-content-md-start")
        imageOfProduct.setAttribute("alt", "Image de l'appareil photographique sélectionné")

        containerOfProduct.setAttribute("class", "card-body")

        nameOfProduct.setAttribute("class", "card-title d-flex justify-content-center justify-content-md-start")

        optionOfProduct.setAttribute("class", "card-text d-flex justify-content-center  justify-content-md-start")

        priceOfProduct.setAttribute("class", "card-text d-flex justify-content-center justify-content-md-end")
    
        imageOfProduct.innerHTML = storage[i].image
        nameOfProduct.innerHTML = storage[i].name
        optionOfProduct.innerHTML = " Option : " +storage[i].lenses
        priceOfProduct.innerHTML = storage[i].price

        // création du bouton pour supprimer un produit 

        const deleteProduct = document.createElement("button")
        firstContainerShoppingCard.appendChild(deleteProduct)
        deleteProduct.setAttribute("class", "btn btn-danger")
        deleteProduct.setAttribute("type", "button")
        deleteProduct.setAttribute("title", "Supprimer le produit de votre panier")
        
        deleteProduct.innerHTML = "Supprimer"

        deleteProduct.addEventListener('click', function(event){
            let buttonDeletedClicked = event.target 
            buttonDeletedClicked.parentElement.remove()
        })

        // addition du bouton total des prix





    }
       
}
shoppingCartDisplay()


