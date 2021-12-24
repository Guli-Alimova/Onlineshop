"use strict";

var productsEl = document.getElementById('products');
var favFroductsEl = document.getElementById('favFroducts');
var selectCategoryEl = document.getElementById('selectCategory');
var searchInpEl = document.getElementById('searchInput');
var searchBtnEl = document.getElementById('searchBtn');
var savatchaEl = document.getElementById('savatcha');
var productArray = [{
  name: 'Shirt',
  price: '25$',
  category: 3,
  image: 'img/images1.jpeg'
}, {
  name: 'Wedding Shirt',
  price: '80$',
  category: 3,
  image: 'img/images2.jpg'
}, {
  name: 'Jacket',
  price: '150$',
  category: 3,
  image: 'img/images3.jpg'
}, {
  name: 'Suit',
  price: '25$',
  category: 3,
  image: 'img/images4.jpg'
}, {
  name: 'Jeans Jacket',
  price: '80$',
  category: 2,
  image: 'img/images5.jpg'
}, {
  name: 'Jeans Jacket',
  price: '150$',
  category: 1,
  image: 'img/images6.jpeg'
}, {
  name: 'shirt and trousers',
  price: '25$',
  category: 2,
  image: 'img/images7.jpg'
}, {
  name: 'Pink dress',
  price: '80$',
  category: 2,
  image: 'img/images8.jpg'
}, {
  name: 'Balet',
  price: '150$',
  category: 4,
  image: 'img/images9.jpg'
}, {
  name: 'Bracelet',
  price: '25$',
  category: 5,
  image: 'img/images10.jpg'
}, {
  name: 'Mini bag',
  price: '80$',
  category: 5,
  image: 'img/images11.jpg'
}, {
  name: 'Scraf',
  price: '150$',
  category: 5,
  image: 'img/images12.jpg'
}, {
  name: 'Blouse',
  price: '25$',
  category: 1,
  image: 'img/images14.jpg'
}, {
  name: 'Earrings',
  price: '80$',
  category: 5,
  image: 'img/images15.jpg'
}, {
  name: 'Dress',
  price: '150$',
  category: 1,
  image: 'img/images17.jpg'
}, {
  name: 'Dress',
  price: '25$',
  category: 1,
  image: 'img/images18.jpg'
}, {
  name: 'Pink balet',
  price: '80$',
  category: 4,
  image: 'img/images8.jpeg'
}, {
  name: 'Sneakers',
  price: '150$',
  category: 4,
  image: 'img/images7.jpeg'
}];
var categories = ['Barchasi', 'Ayollar kiyimi', 'Bolalar kiyimi', 'Erkaklar kiyimi', 'Oyoq kiyimlar', 'Aksessuarlar'];

function createProductHtml(el, index) {
  var col = document.createElement('div');
  col.className = 'col-3 ' + index;
  var card = document.createElement('div');
  card.className = 'card';
  var image = document.createElement('img');
  image.className = 'card-img-top';
  image.src = el.image;
  image.setAttribute('alt', el.name); // element attributiga qiymat berish

  var body = document.createElement('div');
  body.className = 'card-body';
  var title = document.createElement('h5');
  title.className = 'card-title';
  title.innerText = el.name;
  var cat = document.createElement('h6');
  cat.className = 'card-subtitle mb-2 text-muted';
  cat.innerText = categories[el.category];
  var price = document.createElement('p');
  price.className = 'card-text';
  price.innerText = el.price;
  var btnCart = document.createElement('button');
  btnCart.className = 'btn btn-primary add-to-bas';
  btnCart.innerHTML = '<i class="bi bi-cart add-to-bas"></i>';
  var btnFav = document.createElement('button');
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

function createProducBasket(el, index) {
  var basket = document.createElement('div');
  basket.className = 'basket__tovar d-flex';
  var images = document.createElement('img');
  images.className = 'basketimg ';
  images.src = el.image;
  images.setAttribute('alt', el.name);
  basket.appendChild(images);
  var cart = document.createElement('div');
  cart.className = 'basket-name';
  basket.appendChild(cart);
  var bstitle = document.createElement('h3');
  bstitle.className = 'products-name';
  bstitle.innerText = el.name;
  cart.appendChild(bstitle);
  var cat = document.createElement('h6');
  cat.className = 'card-subtitle mb-2 text-muted';
  cat.innerText = categories[el.category];
  cart.appendChild(cat);
  var span = document.createElement('div');
  span.className = 'basket-span';
  console.log(span);
  basket.appendChild(span);
  var prices = document.createElement('span');
  console.log(prices);
  prices.className = 'products-price';
  span.appendChild(prices);
  var spanss = document.createElement('div');
  spanss.className = 'basket-span';
  prices.innerText = el.price;
  basket.appendChild(spanss);
  var minus = document.createElement('button');
  minus.className = 'minus';
  minus.innerHTML = '<i class="bi bi-dash"></i>';
  spanss.appendChild(minus);
  var quantity = document.createElement('span');
  quantity.className = 'quantity';
  quantity.innerText = '1';
  spanss.appendChild(quantity);
  var plus = document.createElement('button');
  plus.className = 'plus';
  plus.innerHTML = '<i class="bi bi-plus"></i>';
  spanss.appendChild(plus);
  var basketBtn = document.createElement('div');
  basketBtn.className = 'basket-btn';
  basket.appendChild(basketBtn);
  var btncard = document.createElement('button');
  btncard.className = ' update';
  btncard.innerHTML = '<i class="bi bi-arrow-clockwise"></i>';
  basketBtn.appendChild(btncard);
  var btncash = document.createElement('button');
  btncash.className = ' cash';
  btncash.innerHTML = '<i class ="bi bi-trash"></i>';
  basketBtn.appendChild(btncash);

  if (savatchaEl) {
    savatchaEl.appendChild(basket);
  }
}

function showProducts(arr) {
  productsEl.innerHTML = '';
  arr.forEach(function (el, index) {
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
  var filteredProducts;

  if (event.target.value == 0) {
    filteredProducts = productArray;
  } else {
    filteredProducts = productArray.filter(function (el) {
      return el.category == event.target.value;
    });
  }

  showProducts(filteredProducts);
}

searchBtnEl.addEventListener('click', function () {
  var filteredProducts = productArray.filter(function (el) {
    return el.name.toLowerCase().includes(searchInpEl.value.toLowerCase());
  });
  showProducts(filteredProducts);
}); // Tovarlarni tanlanganlarga qo'shish

var selected = document.getElementsByClassName('selected')[0];
var basketseEl = document.getElementsByClassName('basselect')[0];
var storageArr = localStorage.getItem('favArr');
var favProducts = storageArr ? JSON.parse(storageArr) : [];

if (productsEl) {
  productsEl.addEventListener('click', function (event) {
    var bosilganElement = event.target;

    if (bosilganElement.className.includes('add-to-fav')) {
      var shuElementningOtasi = bosilganElement.closest('.col-3');
      var shuElementningOtasiningClasslari = shuElementningOtasi.classList;
      var classlariSoni = shuElementningOtasiningClasslari.length;
      var elIndex = shuElementningOtasiningClasslari[classlariSoni - 1];

      if (!favProducts.includes(elIndex)) {
        favProducts.push(elIndex);
        selected.innerText = favProducts.length;
      }

      var stringJSON = JSON.stringify(favProducts);
      localStorage.setItem('favArr', stringJSON);
    }

    if (bosilganElement.className.includes('add-to-bas')) {
      var _shuElementningOtasi = bosilganElement.closest('.col-3');

      var _shuElementningOtasiningClasslari = _shuElementningOtasi.classList;
      var _classlariSoni = _shuElementningOtasiningClasslari.length;
      var _elIndex = _shuElementningOtasiningClasslari[_classlariSoni - 1];

      if (!karzinaProducts.includes(_elIndex)) {
        karzinaProducts.push(_elIndex);
        basketseEl.innerText = karzinaProducts.length;
      }

      var _stringJSON = JSON.stringify(karzinaProducts);

      localStorage.setItem('karArr', _stringJSON);
    } // console.log(favProducts);

  });
} // Tanlangan tovarlar soni
// sinf ishi
// Tanlanganlar sahifasi


if (favFroductsEl) {
  var massiv = localStorage.getItem('favArr');

  if (massiv) {
    var parsedArr = JSON.parse(massiv);
    showFavProducts(parsedArr);
  }
}

function showFavProducts(arr) {
  favFroductsEl.innerHTML = '';

  for (var i = 0; i < arr.length; i++) {
    createProductHtml(productArray[arr[i]], arr[i]);
  }
}

function showBasketProducts(arr) {
  savatchaEl.innerHTML = '';

  for (var i = 0; i < arr.length; i++) {
    createProducBasket(productArray[arr[i]], arr[i]);
  }
} // Tovarlarni korzinaga qo'shish


var karzinkaArr = localStorage.getItem('karArr');
var karzinaProducts;

if (karzinkaArr) {
  karzinaProducts = JSON.parse(karzinkaArr);
} else {
  karzinaProducts = [];
}

if (savatchaEl) {
  var _massiv = localStorage.getItem('karArr');

  if (_massiv) {
    var _parsedArr = JSON.parse(_massiv);

    showBasketProducts(_parsedArr);
  }
}

basketseEl.innerText = karzinaProducts.length;
selected.innerText = favProducts.length;