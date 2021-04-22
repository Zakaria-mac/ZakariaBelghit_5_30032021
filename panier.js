// Récupérer le localStorage sur panier.js 
const shoppingCart = () => {
    return JSON.parse(localStorage.getItem('product'))
}

// Affichage du panier

const shoppingCartDisplay = async () => {
    const storage = shoppingCart()
    const primaryContainer = document.getElementById("productSelected")

    for (let i in storage) {

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
        firstContainerShoppingCard.setAttribute("title", "Produit sélectionné")

        imageOfProduct.setAttribute("src", storage[i].image)
        imageOfProduct.setAttribute("class", "card-img-top d-flex imageOfProduct justify-content-md-start")
        imageOfProduct.setAttribute("alt", "Image de l'appareil photographique sélectionné")

        containerOfProduct.setAttribute("class", "card-body")

        nameOfProduct.setAttribute("class", "card-title d-flex justify-content-center justify-content-md-start")

        optionOfProduct.setAttribute("class", "card-text d-flex justify-content-center  justify-content-md-start")

        priceOfProduct.setAttribute("class", "priceOfProduct card-text d-flex justify-content-center justify-content-md-end")

        imageOfProduct.innerHTML = storage[i].image
        nameOfProduct.innerHTML = storage[i].name
        optionOfProduct.innerHTML = " Option : " + storage[i].lenses
        priceOfProduct.innerHTML = storage[i].price + " € "
    }
}
shoppingCartDisplay()


//création du total des couts 

const reducer = (accumulator, currentValue) => accumulator + currentValue
const displayTotal = () => {

    const storage = shoppingCart()
    const totalPriceArray = new Array()

    const totalPrice = document.getElementById("totalPrice")
    for (let m = 0; m < storage.length; m++) { 
        let totalPriceShoppingCart = storage[m].price
        totalPriceArray.push(totalPriceShoppingCart)
    }
    const total = totalPriceArray.reduce(reducer, 0)
    
        const totalOfThePrices = document.createElement("strong")
        totalPrice.appendChild(totalOfThePrices)
        totalOfThePrices.innerHTML = " Total = " + total + " € "
}
displayTotal()


//Création du bouton pour supprimer tout le panier

const deleteAllProducts = document.querySelector(".principalContainer button.deleteShoppingCart")

deleteAllProducts.addEventListener('click', function (event) {
    let buttonDeletedAll = event.target
    buttonDeletedAll.parentElement.parentElement.remove()
    localStorage.removeItem('product')
})

deleteAllProducts.addEventListener('click', function () {
    alert("Votre panier a bien été vidé")
})


//Envoi des datas à la page confirmation

const formResult = document.getElementById("formInfoRepository");

formResult.addEventListener("submit", async function (event) {

    event.preventDefault()

    console.log(event.target.lastName.value)
    
    const contact = {
        lastName : event.target.lastName.value,
        firstName : event.target.firstName.value,
        address : event.target.address.value,
        city : event.target.address.value,
        email : event.target.email.value
    }

    const products = shoppingCart().map((item) => item._id)

    const orderResponse = await fetch("http://localhost:3000/api/cameras/order", {
        method: "POST",
        body: JSON.stringify({contact, products}),
        headers: new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        })
    })
    const orderJson = await orderResponse.json()
    console.log(orderJson)
    localStorage.setItem("currentOrder", JSON.stringify(orderJson))
    window.location.href = "confirmation.html" 
    localStorage.removeItem('product')
})