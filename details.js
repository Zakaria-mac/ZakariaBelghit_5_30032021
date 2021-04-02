const mockDataDetail = [{
    id : "_id_1",
    name : "Zurss 50S",
    imageUrl : "https://images-na.ssl-images-amazon.com/images/I/718sJMJwrhL._AC_SL1500_.jpg",
    description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price : "49900",
    options : [
        "blue",
        "rouge"
    ]},
{
    id : "_id_2",
    name : "Hirsch 400DTS",
    imageUrl : "https://images-na.ssl-images-amazon.com/images/I/71f0odyTK9L._AC_SL1300_.jpg",
    description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price : "309900",
    options : [
        "blue",
        "rouge"
    ]
}, 
{
    id : "_id_3",
    name : "Franck JS 105",
    imageUrl : "https://images-na.ssl-images-amazon.com/images/I/41E%2BHkyJTfL._AC_.jpg",
    description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price : "209900",
    options : [
        "blue",
        "rouge"
    ]},
{
    id : "_id_4",
    name : "Kuros TTS",
    imageUrl : "https://images-na.ssl-images-amazon.com/images/I/71-TflfsYEL._AC_SL1500_.jpg",
    description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price : "159900",
    options : [
        "blue",
        "rouge"
    ]},
{
    id : "_id_5",
        name : "Katatone",
        imageUrl : "https://images-na.ssl-images-amazon.com/images/I/619Qes9U8aL._AC_SL1000_.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price : "59900",
    options : [
        "blue",
        "rouge"
    ]}]
console.log(mockDataDetail)
 

/* Récupération de la chaine de requête dans l'URL
 * Objectif : cliquer sur un produit du site et être directement renvoyé  à la page détail
*/

const queryString_url_id = window.location.search;
console.log(queryString_url_id);


// Récupération de l'iD, sans le "?"//

 const urlSearchParams = new URLSearchParams(queryString_url_id)
 console.log(urlSearchParams)

 const id = urlSearchParams.get("id")
 console.log(id)

 // Récupération grâce à l'id du produit dans détail.html //
const idChosenProduct = mockDataDetail.find(element => element.id === id)
console.log(idChosenProduct)


const containerListDetail = document.getElementById('detail')
console.log(containerListDetail )

const detailMainContainer = document.createElement("div")
containerListDetail.appendChild(detailMainContainer)

const detailName = document.createElement("h2")
detailMainContainer.appendChild(detailName)

const detailImageUrl = document.createElement("img")
detailMainContainer.appendChild(detailImageUrl)

detailImageUrl.setAttribute("src", idChosenProduct.imageUrl)

const detailDescription = document.createElement("p")
detailMainContainer.appendChild(detailDescription)

const detailPrice = document.createElement("p")
detailMainContainer.appendChild(detailPrice)

const detailOption = document.createElement("p")
detailMainContainer.appendChild(detailOption)

detailName.innerHTML = idChosenProduct.name
detailImageUrl.innerHTML = idChosenProduct.imageUrl
detailDescription.innerHTML = idChosenProduct.description
detailPrice.innerHTML = idChosenProduct.price/100 + " € "
detailOption.innerHTML = idChosenProduct.options

