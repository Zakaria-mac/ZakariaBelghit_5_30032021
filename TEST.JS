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

            productImageUrl.setAttribute('src', i.imageUrl)
            listContainer.setAttribute('href', `details.html?id=${i.id}`)
            
          
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