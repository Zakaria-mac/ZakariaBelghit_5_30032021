// Récupération des données envoyés à l'API depuis le panier

const loadDataconfirmationOrder = () => {
    return JSON.parse(localStorage.getItem('currentOrder'))
}

// Création de la fonction qui fera apparaitre le numéro de commande et le prix total

const confirmationDisplay = () => {
    const confirmationStored = loadDataconfirmationOrder()
    const confirmationPrincipalContainer = document.getElementById("containerConfirmation") 

    const confirmationBodyText = document.createElement("div")
    confirmationPrincipalContainer.appendChild(confirmationBodyText)

    const confirmationTitle = document.createElement("h2")
    confirmationPrincipalContainer.appendChild(confirmationTitle)

    const numOfOrder = document.createElement("strong")
    confirmationPrincipalContainer.appendChild(numOfOrder)

    // Assignation des rôles des balises créées

    confirmationPrincipalContainer.setAttribute("class", "card containerListDetail mx-3 mx-md-0 mt-4 px-2")
    confirmationBodyText.setAttribute("class", "card-body")
    confirmationTitle.setAttribute("class", "card-title text-center mt-0")
    numOfOrder.setAttribute("class", "card-text text-center my-4")

    // Affichage des éléments sur la page HTML

    confirmationTitle.innerText = "Confirmation de votre Commande"
    numOfOrder.innerHTML = " Numéro de votre commande : " + confirmationStored.orderId
}
confirmationDisplay()


// Afficher le total du produit

const displayTotalPrice = () => {

    const storage = loadDataconfirmationOrder()
    const getThePrice = storage.products
    const confirmationPrincipalContainer = document.getElementById("containerConfirmation") 

    const totalPriceArray = new Array()

    const totalPrice = document.createElement("div")
    confirmationPrincipalContainer.appendChild(totalPrice)
    totalPrice.setAttribute("class","card-text text-center mb-4")

    for (let i = 0; i < getThePrice.length; i++){
        priceOfProduct = getThePrice[i].price
        totalPriceArray.push(priceOfProduct)
    }

    const total = totalPriceArray.reduce(
        (accumulateur, currentValue) => accumulateur + currentValue);

        const totalOfThePrices = document.createElement("strong")
        totalPrice.appendChild(totalOfThePrices)
        totalOfThePrices.innerHTML = " Total = " + total/100 + " € "
}
displayTotalPrice()

