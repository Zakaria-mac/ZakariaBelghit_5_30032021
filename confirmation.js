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

    numOfOrder = document.createElement("strong")
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
