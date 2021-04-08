
/*
const loadMockData = () => {
    return mockDataCamera
}
*/
const loadMockData = async () => {
    return await (await fetch("https://ab-p5-api.herokuapp.com/api/cameras")).json()
}

//Affichage dans le HTML de la fonction retournant les objets
const displayListCameras = async () => {
    const listCameras = await loadMockData()
    const listContainer = document.getElementById('container')

    for (let i in listCameras) {

        const camerasContainerElement = document.createElement("a")
        listContainer.appendChild(camerasContainerElement)
        console.log(camerasContainerElement)
        
        const camerasName = document.createElement("h2")
        camerasContainerElement.appendChild(camerasName)


        const camerasImage = document.createElement("img")
        camerasContainerElement.appendChild(camerasImage)
        
        const camerasListDescription = document.createElement('ul')
        camerasContainerElement.appendChild(camerasListDescription)


        const camerasDescription = document.createElement("li")
        camerasListDescription.appendChild(camerasDescription)

        
        const camerasPrice = document.createElement("li")
        camerasListDescription.appendChild(camerasPrice)

        camerasContainerElement.setAttribute('href', `details.html?id=${listCameras[i]._id}`)
        camerasImage.setAttribute("src", listCameras[i].imageUrl)

        camerasName.innerHTML = listCameras[i].name 
        camerasImage.innerHTML = listCameras[i].imageUrl 
        camerasPrice.innerHTML = listCameras[i].price/100 + " € "
        camerasDescription.innerHTML = listCameras[i].description
    }
}

displayListCameras()

