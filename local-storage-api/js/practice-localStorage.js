const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = productQuantity.value;

    productField.value = '';
    productQuantity.value = '';

    // console.log(product, quantity);
    displayProducts(product, quantity);
    setValueToLocalStorage(product, quantity);
}

const displayProducts = (product, quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    ul.appendChild(li);
}

const getValueFromLocalStorage = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;

}

const setValueToLocalStorage = (product, quantity) =>{
    const cart = getValueFromLocalStorage();
    cart[product] = quantity;

    const productStringify = JSON.stringify(cart);
    localStorage.setItem('cart', productStringify)
    console.log(productStringify);
}

const displayProductsFromLocalStorage = () =>{
    const savedCart = getValueFromLocalStorage()

    for(const product in savedCart){
        const quantity = savedCart[product]

        displayProducts(product, quantity)
    }
}

displayProductsFromLocalStorage()