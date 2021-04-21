const dataPhotos = new XMLHttpRequest()
dataPhotos.onreadystatechange = function() {
    if (dataPhotos.readyState === 4 && dataPhotos.status === 200) {
        let dataResults = JSON.parse(dataPhotos.responseText)   

        for (let i = 0; i < dataResults.length; i++) {
            const listContainer = document.getElementById('container')
            const productContainer = document.createElement('div')
            const productList = document.createElement('ul')
            const productListLenses = document.createElement('li')
            const productName = document.createElement('h2')
            const productImageUrl = document.createElement('img')
            const productDescription = document.createElement('p')
            const productPrice = document.createElement('strong')
            const productId = document.createElement('a')
        
            
            listContainer.appendChild(productContainer)
            listContainer.appendChild(productName)
            listContainer.appendChild(productImageUrl)
            listContainer.appendChild(productDescription)
            listContainer.appendChild(productPrice)
            listContainer.appendChild(productList)
            listContainer.appendChild(productId)

            productList.appendChild(productListLenses)

            productImageUrl.setAttribute('src',  dataResults[i].imageUrl)
            listContainer.setAttribute('href', `details.html?id=${ dataResults[i].id}`)
            
          
            productName.innerHTML = dataResults[i].name
            productDescription.innerHTML = dataResults[i].description
            productPrice.innerHTML = dataResults[i].price
            productPrice.textContent = dataResults[i].price + " € "
            productImageUrl.innerHTML = dataResults[i].imageUrl
            productListLenses.innerHTML = dataResults[i].lenses
            productId.innerHTML = dataResults[i]._id
        }
    
    } 

}
dataPhotos.open('GET', 'http://localhost:3000/api/cameras', true)
dataPhotos.send()


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


    

let selectedOption = document.getElementById("select"),
arr = mockDataDetail.optionsList["bleu", "rouge"];

for (let i = 0; i < arr.length; i++) {
    
    let option = document.createElement("option"),
    txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    selectedOption.insertBefore(option,selectedOption.lastChild);
}

//************************* */
const boutonEnvoi = document.getElementById("btn_envoiPanier")
boutonEnvoi.addEventListener("click", function(){
    const essaiFonction = () => {
        return displayDetail()
    }
 
    let newArrayShopping = [];
    newArrayShopping = JSON.parse(localStorage.getItem('product'))
    localStorage.setItem('product', JSON.stringify(newArrayShopping))
 
    newArrayShopping.push(essaiFonction())
    
})


displayDetail()


const shoppingCart = async () => {
    return localStorage.getItem('product')
}
console.log(shoppingCart)

const shoppingCartDisplay = async () => {
    const storage = await shoppingCart()
    const primaryContainer = document.getElementById("productSelected")

    for (i = 0; i < storage.length; i++){
        const nameOfProduct = document.createElement("div")
        primaryContainer.appendChild(nameOfProduct)

     
        console.log(nameOfProduct)
    }
}
shoppingCartDisplay()


deleteProduct.addEventListener('click', function(event){
    let buttonDeletedClicked = event.target 
    buttonDeletedClicked.parentElement.remove()
})        

const loadShoppingPrice = async () => {
    return await shoppingCartDisplay() }

    const totalPriceShoppingDisplay = async () => {
        const pricesInShoppingCart = await loadShoppingPrice()
        const totalPrice = document.getElementById("totalPrice")
        const total = 0
    
        for (let i in pricesInShoppingCart){
            const prixTotal = document.createElement('p')
            totalPrice.appendChild(prixTotal)
            
            prixTotal.innerHTML = 
           
            prixTotal.innerHtml = total += parseInt(pricesInShoppingCart[i].priceOfProduct);
    
            return prixTotal          
        }
}
function getTheTotalPrice(){

    const totalPrice = document.getElementById("totalPrice")
    firstContainer.appendChild(totalPrice)
 
    let totalPriceShoppingCart = storage[i].price

        const reducer = (accumulator, currentValue) => accumulator + currentValue
        const total = totalPriceShoppingCart.reduce(reducer, 0)

        const totalOfThePrices = document.createElement("strong")
        totalPrice.appendChild(totalOfThePrices)
        totalOfThePrices.innerHTML = " Total = " + total + " € "
}
getTheTotalPrice()        


event.preventDefault()
const formData = new FormData(this)

const searchParams = new URLSearchParams()
for (const pair of formData){
    searchParams.append(pair[0], pair[1], pair[2], pair[3], pair[4], pair[5], pair[6], pair[7])
}
const storage = shoppingCart()

fetch("http://localhost:3000/api/cameras/order", {
    method: "post",
    body: searchParams, storage
}).then(function(response){
    return response.json()
}).catch(function(error){
    console.log(error)
})
})