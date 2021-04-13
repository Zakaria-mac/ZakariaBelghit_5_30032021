/* Récupérer le localStorage sur panier.js */
const shoppingCart = async () => {
    return JSON.parse(localStorage.getItem('product'))
}
console.log(shoppingCart)

const shoppingCartDisplay = async () => {
    const storage = await shoppingCart()
    const primaryContainer = document.getElementById("productSelected")

    for (let i in storage){

        const containerOfProduct = document.createElement("div")
        primaryContainer.appendChild(containerOfProduct)

        const nameOfProduct = document.createElement("h3")
        containerOfProduct.appendChild(nameOfProduct)

        const imageofProduct = document.createElement("img")
        containerOfProduct.appendChild(imageofProduct)
        imageofProduct.setAttribute("src", storage[i].image)

        nameOfProduct.innerHTML = storage[i].name
        imageofProduct.innerHTML = storage[i].image
    }
}
shoppingCartDisplay()


/* création du bouton pour supprimer un produit*/

const deleteProduct = document.getElementsByClassName("btn-danger")

for (let i = 0; i < deleteProduct.length; i++) {
    let button = deleteProduct[i]
    button.addEventListener('click', function(event){
       let buttonDeletedClicked = event.target 
       buttonDeletedClicked.parentElement.parentElement.parentElement.remove()
    })
}

/* addition du bouton total des prix*/