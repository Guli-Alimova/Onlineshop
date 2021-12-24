const productsEl = document.getElementById('products');
const favFroductsEl = document.getElementById('favFroducts');
const selectCategoryEl = document.getElementById('selectCategory');
const searchInpEl = document.getElementById('searchInput');
const searchBtnEl = document.getElementById('searchBtn');
const savatchaEl = document.getElementById('savatcha');

let productArray = [{
        name: 'Shirt',
        price: '25$',
        category: 3,
        image: 'img/images1.jpeg'
    },
    {
        name: 'Wedding Shirt',
        price: '80$',
        category: 3,
        image: 'img/images2.jpg'
    },
    {
        name: 'Jacket',
        price: '150$',
        category: 3,
        image: 'img/images3.jpg'
    },
    {
        name: 'Suit',
        price: '25$',
        category: 3,
        image: 'img/images4.jpg'
    },
    {
        name: 'Jeans Jacket',
        price: '80$',
        category: 2,
        image: 'img/images5.jpg'
    },
    {
        name: 'Jeans Jacket',
        price: '150$',
        category: 1,
        image: 'img/images6.jpeg'
    },
    {
        name: 'shirt and trousers',
        price: '25$',
        category: 2,
        image: 'img/images7.jpg'
    },
    {
        name: 'Pink dress',
        price: '80$',
        category: 2,
        image: 'img/images8.jpg'
    },
    {
        name: 'Balet',
        price: '150$',
        category: 4,
        image: 'img/images9.jpg'
    },
    {
        name: 'Bracelet',
        price: '25$',
        category: 5,
        image: 'img/images10.jpg'
    },
    {
        name: 'Mini bag',
        price: '80$',
        category: 5,
        image: 'img/images11.jpg'
    },
    {
        name: 'Scraf',
        price: '150$',
        category: 5,
        image: 'img/images12.jpg'
    },
    {
        name: 'Blouse',
        price: '25$',
        category: 1,
        image: 'img/images14.jpg'
    },
    {
        name: 'Earrings',
        price: '80$',
        category: 5,
        image: 'img/images15.jpg'
    },
    {
        name: 'Dress',
        price: '150$',
        category: 1,
        image: 'img/images17.jpg'
    },
    {
        name: 'Dress',
        price: '25$',
        category: 1,
        image: 'img/images18.jpg'
    },
    {
        name: 'Pink balet',
        price: '80$',
        category: 4,
        image: 'img/images8.jpeg'
    },
    {
        name: 'Sneakers',
        price: '150$',
        category: 4,
        image: 'img/images7.jpeg'
    }
];

let categories = ['Barchasi', 'Ayollar kiyimi', 'Bolalar kiyimi', 'Erkaklar kiyimi', 'Oyoq kiyimlar', 'Aksessuarlar'];

function createProductHtml(el, index) {

    const col = document.createElement('div');
    col.className = 'col-3 ' + index;

    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = el.image;
    image.setAttribute('alt', el.name); // element attributiga qiymat berish

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.innerText = el.name;

    const cat = document.createElement('h6');
    cat.className = 'card-subtitle mb-2 text-muted';
    cat.innerText = categories[el.category];

    const price = document.createElement('p');
    price.className = 'card-text';
    price.innerText = el.price;

    const btnCart = document.createElement('button');
    btnCart.className = 'btn btn-primary add-to-bas';
    btnCart.innerHTML = '<i class="bi bi-cart add-to-bas"></i>';

    const btnFav = document.createElement('button');
    btnFav.className = 'btn btn-warning add-to-fav';
    btnFav.innerHTML = '<i class="bi bi-heart add-to-fav"></i>';


    col.appendChild(card);

    card.appendChild(image);
    card.appendChild(body);

    body.appendChild(title);
    body.appendChild(cat);
    body.appendChild(price);
    body.appendChild(btnCart);
    body.appendChild(btnFav);

    if (productsEl) {
        productsEl.appendChild(col);
    } else if (favFroductsEl) {
        favFroductsEl.appendChild(col);
    } 

}
function createProducBasket(el, index){
    const basket = document.createElement('div');
    basket.className = 'basket__tovar d-flex' ;
   const images = document.createElement('img');
    images.className = 'basketimg ';
    images.src = el.image;
    images.setAttribute('alt', el.name); 
    basket.appendChild(images); 
   
    const cart = document.createElement('div');
    cart.className = 'basket-name';
    basket.appendChild(cart)

    
    const bstitle = document.createElement('h3');
    bstitle.className = 'products-name';
    bstitle.innerText = el.name;
    cart.appendChild(bstitle);

    const cat = document.createElement('h6');
    cat.className = 'card-subtitle mb-2 text-muted';
    cat.innerText = categories[el.category];
    cart.appendChild(cat);
    
    const span = document.createElement('div');
    span.className = 'basket-span';
  console.log(span)
    basket.appendChild(span);
   
  
    const prices = document.createElement('span');
    console.log(prices)
    prices.className = 'products-price'; 
    span.appendChild(prices);
   
    const spanss = document.createElement('div');
    spanss.className = 'basket-span';
    prices.innerText = el.price;
    basket.appendChild(spanss);
    
    const minus = document.createElement('button');
    minus.className = 'minus';
    minus.innerHTML = '<i class="bi bi-dash"></i>';
    spanss.appendChild(minus);
    
    const quantity = document.createElement('span');
    quantity.className = 'quantity';
    quantity.innerText = '1';
    spanss.appendChild(quantity);

 

    const plus = document.createElement('button');
    plus.className = 'plus';
    plus.innerHTML = '<i class="bi bi-plus"></i>';
    spanss.appendChild(plus);
    
    const basketBtn = document.createElement('div')
    basketBtn.className = 'basket-btn'
    
    basket.appendChild(basketBtn);  
    
    const btncard = document.createElement('button');
    btncard.className = ' update';
    btncard.innerHTML = '<i class="bi bi-arrow-clockwise"></i>';
    basketBtn.appendChild(btncard);
    
    const btncash =document.createElement('button');
    btncash.className = ' cash';
    btncash.innerHTML = '<i class ="bi bi-trash"></i>';
    basketBtn.appendChild(btncash);


    
    if (savatchaEl) {
        savatchaEl.appendChild(basket);
    }
    
}


function showProducts(arr) {
    productsEl.innerHTML = '';
    arr.forEach((el, index) => {
        createProductHtml(el, index);
    });
}

if (productsEl) {
    showProducts(productArray);
}

if (selectCategoryEl) {
    selectCategoryEl.addEventListener('change', filterCategory);
}

function filterCategory(event) {
    let filteredProducts;
    if (event.target.value == 0) {
        filteredProducts = productArray;
    } else {
        filteredProducts = productArray.filter((el) => {
            return el.category == event.target.value;
        });
    }
    showProducts(filteredProducts);
}

searchBtnEl.addEventListener('click', () => {

    let filteredProducts = productArray.filter((el) => {
        return el.name.toLowerCase().includes(searchInpEl.value.toLowerCase());
    });

    showProducts(filteredProducts);
});

// Tovarlarni tanlanganlarga qo'shish
const selected = document.getElementsByClassName('selected')[0];
const basketseEl = document.getElementsByClassName('basselect')[0];
let storageArr = localStorage.getItem('favArr');


let  favProducts = storageArr ? JSON.parse(storageArr) : []

if (productsEl) {
    productsEl.addEventListener('click', (event) => {
        let bosilganElement = event.target;
        if (bosilganElement.className.includes('add-to-fav')) {
            let shuElementningOtasi = bosilganElement.closest('.col-3');
            let shuElementningOtasiningClasslari = shuElementningOtasi.classList;
            let classlariSoni = shuElementningOtasiningClasslari.length;
            let elIndex = shuElementningOtasiningClasslari[classlariSoni - 1];
            if (!favProducts.includes(elIndex)) {
                favProducts.push(elIndex);
                selected.innerText = favProducts.length; 
            }
            let stringJSON = JSON.stringify(favProducts);
            localStorage.setItem('favArr', stringJSON);
        }

        if (bosilganElement.className.includes('add-to-bas')) {
            let shuElementningOtasi = bosilganElement.closest('.col-3');
            let shuElementningOtasiningClasslari = shuElementningOtasi.classList;
            let classlariSoni = shuElementningOtasiningClasslari.length;
            let elIndex = shuElementningOtasiningClasslari[classlariSoni - 1];
            if (!karzinaProducts.includes(elIndex)) {
                karzinaProducts.push(elIndex);
                basketseEl.innerText = karzinaProducts.length;
            }
            let stringJSON = JSON.stringify(karzinaProducts);
            localStorage.setItem('karArr', stringJSON);
        }

        // console.log(favProducts);

    });
}

// Tanlangan tovarlar soni

// sinf ishi

// Tanlanganlar sahifasi

if (favFroductsEl) {
    let massiv = localStorage.getItem('favArr');
    if (massiv) {
        let parsedArr = JSON.parse(massiv);
        showFavProducts(parsedArr);
    }
}

function showFavProducts(arr) {
    favFroductsEl.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        createProductHtml(productArray[arr[i]], arr[i]);
    }
}

function showBasketProducts(arr) {
    savatchaEl.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        createProducBasket(productArray[arr[i]], arr[i]);
    }
}
// Tovarlarni korzinaga qo'shish



let karzinkaArr = localStorage.getItem('karArr');
let karzinaProducts;
if (karzinkaArr) {
    karzinaProducts = JSON.parse(karzinkaArr);
} else {
    karzinaProducts = [];
}
   

if (savatchaEl) {
    let massiv = localStorage.getItem('karArr');
    if (massiv) {
        let parsedArr = JSON.parse(massiv);
        showBasketProducts(parsedArr);
    }
}

basketseEl.innerText = karzinaProducts.length;
selected.innerText = favProducts.length; 
