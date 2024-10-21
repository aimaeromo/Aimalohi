async function getProduct() {
    try {

        const response = await fetch('https://fakestoreapi.com/products');

        console.log('initial response:', response);

        //convert the returned promise to a javascript object

        const productData = await response.json();
        console.log('productData:', productData);

        //grab an empty cointainer from the DOM

        const productCard = document.getElementById('product-card');

        //create a vairable and initialize it with an empty string

        let myCards ="";

        //Loop through the array of products fetched
        productData.map((item) =>{
           myCards += 
            `
                        <div class="card">
                              <img src=${item.image} />

                              <h3>title</h3>
                              <p>${item.title}</p>

                            <div class="amount">
                              <h5>Price:</h5>
                              <p>${item.price}</p>
                            </div>

                            <div class="category">
                             <h5>Category:</h5>
                             <p>${item.category}</p>
                            </div>

                            <p>${item.description}</p>
                        </div>
            `
                    
         });

    productCard.innerHTML = myCards;

    }

    catch (error) {
        console.log('product error:', error)
    }
    
};

getProduct();