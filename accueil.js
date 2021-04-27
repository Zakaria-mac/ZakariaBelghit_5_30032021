
//Récupérer les données de l'API via Fetch 

const loadMockData = async () => {
    return await (await fetch("http://localhost:3000/api/cameras/")).json()
}

//Affichage dans le HTML de la fonction retournant les objets provenant de l'APIs

const displayListCameras = async () => {
    const listCameras = await loadMockData()
    const listContainer = document.getElementById('container')

    for (let i in listCameras) {
        
        // Création des éléments qui vont recuillir les data de l'API

        const firstContainer = document.createElement("div")
        listContainer.appendChild(firstContainer)

        const camerasContainerElement = document.createElement("a")
        firstContainer.appendChild(camerasContainerElement)

        const camerasImage = document.createElement("img")
        camerasContainerElement.appendChild(camerasImage)
        
        const containerCardBody = document.createElement("div")
        camerasContainerElement.appendChild(containerCardBody)
        
        const camerasName = document.createElement("h2")
        containerCardBody.appendChild(camerasName)
   
        const camerasListDescription = document.createElement('ul')
        containerCardBody.appendChild(camerasListDescription)

        const camerasDescription = document.createElement("li")
        camerasListDescription.appendChild(camerasDescription)

        const camerasPrice = document.createElement("strong")
        camerasListDescription.appendChild(camerasPrice)

        // Donne le rôle et la classe de chaque élément créé + mise en place Bootstrap

        firstContainer.setAttribute("class","card-deck col-12 col-sm-6 col-md-4 my-3")
        firstContainer.setAttribute("title", "Cliquez pour en savoir plus !")

        camerasContainerElement.setAttribute("href", `details.html?id=${listCameras[i]._id}`)
        camerasContainerElement.setAttribute("class", "card")

        camerasImage.setAttribute("src", listCameras[i].imageUrl)
        camerasImage.setAttribute("class", "card-img-top p-2")
        camerasImage.setAttribute("alt", "Image de l'appareil photo")
        
        containerCardBody.setAttribute("class", "card-body")
        
        camerasName.setAttribute("class", "card-title text-center")

        camerasListDescription.setAttribute("class", "card-text list-unstyled text-left")

        // On applique sur HTML les éléments créé
        
        camerasName.innerHTML = listCameras[i].name 
        camerasImage.innerHTML = listCameras[i].imageUrl 
        camerasPrice.innerHTML = listCameras[i].price/100 + " € "
        camerasDescription.innerHTML = listCameras[i].description
    }
}
displayListCameras()

