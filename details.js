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

const loadDetail = () => {
    return mockDataDetail
}

const displayListDetail = () => {
    const listDetail = loadDetail()
    const containerListElement = document.getElementById("detail")

    for (let i in listDetail){
        const containerListDetail = document.createElement("div")
        containerListElement.appendChild(containerListDetail)

        const detailName = document.createElement("h2")
        containerListDetail.appendChild(detailName)

        const detailImageUrl = document.createElement("img")
        containerListDetail.appendChild(detailImageUrl)

        detailImageUrl.setAttribute("src", listDetail[i].imageUrl)

        const detailDescription = document.createElement("p")
        containerListDetail.appendChild(detailDescription)

        const detailPrice = document.createElement("p")
        containerListDetail.appendChild(detailPrice)

        const detailOption = document.createElement("p")
        containerListDetail.appendChild(detailOption)

        detailName.innerHTML = listDetail[i].name
        detailImageUrl.innerHTML = listDetail[i].imageUrl
        detailDescription.innerHTML = listDetail[i].description
        detailPrice.innerHTML = listDetail[i].price + " € "
        detailOption.innerHTML = listDetail[i].options
    }
}

displayListDetail()

    




    