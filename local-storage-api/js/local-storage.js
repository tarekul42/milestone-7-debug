function freeInputField(inputId){
    document.getElementById(inputId).addEventListener('keyup', function(){
        const productField = document.getElementById(inputId);
        const product = productField.value ;
        if(product === ' '){
            document.getElementById(inputId).value = '';
        }
    })
}
freeInputField('product-name')
freeInputField('product-quantity')


const addProduct = () =>{
    const productField = document.getElementById('product-name')
    const productQuantity = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = productQuantity.value;

    productField.value = '';
    productQuantity.value = '';

    displayProducts(product, quantity); 
    saveProductToLocalStorage(product, quantity); 
}

const displayProducts = (product, quantity) => {
    const ul = document.getElementById('product-container')
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    ul.appendChild(li)
    
}

const getStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart()
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
}

const displayProductsFromLocalStorage = () =>{
    const savedCart = getStoredShoppingCart();

    for(const product in savedCart){
        const quantity = savedCart[product]

        displayProducts(product, quantity)
    }
}

displayProductsFromLocalStorage() 