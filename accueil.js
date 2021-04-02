const mockDataCamera = [
    {
        id : "_id_1",
        name : "Zurss 50S",
        imageUrl : "https://images-na.ssl-images-amazon.com/images/I/718sJMJwrhL._AC_SL1500_.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price : "49900"
    }, 
    {
        id : "_id_2",
        name : "Hirsch 400DTS",
        imageUrl : "https://images-na.ssl-images-amazon.com/images/I/71f0odyTK9L._AC_SL1300_.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price : "309900"
    }, 
    {
        id : "_id_3",
        name : "Franck JS 105",
        imageUrl : "https://images-na.ssl-images-amazon.com/images/I/41E%2BHkyJTfL._AC_.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price : "209900"
    },
    {
        id : "_id_4",
        name : "Kuros TTS",
        imageUrl : "https://images-na.ssl-images-amazon.com/images/I/71-TflfsYEL._AC_SL1500_.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price : "159900"
    }, 
    {
        id : "_id_5",
        name : "Katatone",
        imageUrl : "https://images-na.ssl-images-amazon.com/images/I/619Qes9U8aL._AC_SL1000_.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price : "59900"
    } 
]
console.log(mockDataCamera)

const loadMockData = () => {
    return mockDataCamera
}
//Affichage dans le HTML de la fonction retournant les objets
const displayListCameras = () => {
    const listCameras = loadMockData()
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

        camerasContainerElement.setAttribute('href', `details.html?id=${listCameras[i].id}`)
        camerasImage.setAttribute("src", listCameras[i].imageUrl)

        camerasName.innerHTML = listCameras[i].name
        camerasImage.innerHTML = listCameras[i].imageUrl
        camerasPrice.innerHTML = listCameras[i].price + " € "
        camerasDescription.innerHTML = listCameras[i].description
    }
}

displayListCameras()

