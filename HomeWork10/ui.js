var x = 1,
  allMarket = [],
  shopAdd,
  productAdd=[];

allMarket.push(new Market('galileo'));
allMarket.push(new Market('qwerty'));
allMarket.push(new Market('dfgh'));



function Product(nameProduct, type, cost, year, month, day) {
  this.id = x;
  x++;
  this.name = nameProduct;
  this.type = type;
  this.cost = cost;
  this.date = new Date(year, month, day);
}

function WareProduct(nameProduct, type, cost, year, month, day, year2, month2, day2) {
  Product.call(this, nameProduct, type, cost, year, month, day);
  this.date2 = new Date(year2, month2, day2);
  //this.date3 =
}

WareProduct.prototype = Product.prototype;

function Shop(nameShop, address, extraCharge, income) {
  this.name = nameShop;
  this.address = address;
  this.product = [];
  this.extraCharge = extraCharge;
  this.income = 0;
}

function Market(nameMarket) {
  this.name = nameMarket;
  this.shop = [];
}

Shop.prototype.add = function(x, n) {
  for (var i = 0; i < n; i++) {
    this.product.push(x);
  }
}

Shop.prototype.sum = function() {
  var res = 0;
  this.product.forEach(function(i) {
    res += i.cost;
  });
  return res;
}

Market.prototype.add = function(x) { // добавление магазинов в рынок
  this.shop.push(x);
}

function createMarket() {
  allMarket.push(new Market(prompt('enter'))); ////////////////////////////////////////////////
}

addmarket.addEventListener('click', function() {
  createMarket();
  showAllMarkets();
})

showmarkets.addEventListener('click', function() {
  showAllMarkets();
})

function showAllMarkets() {
  showallmarkets1.innerHTML = '';
  allMarket.forEach(function(elem, ind) {
    var div = document.createElement("div");
    div.setAttribute('id', "market_" + ind);
    div.setAttribute('class', "market");
    div.innerHTML = '<span class="marketName">' + elem.name + '</span><span class="marketShops"><span>' + elem.shop.length + ' shops </span><button class="save" type="button">+</button></span>'
    showallmarkets1.appendChild(div);
    showallmarkets1.appendChild(document.createElement("br"));
    div.children[1].children[1].addEventListener('click', function () {
      shopAdd = ind;
    })
    div.children[1].children[0].addEventListener('click', function () {
      showShopofMarket(ind);
    })
  })
}



function showShopofMarket(x) {
  showallmarkets1.innerHTML = '';
  allMarket[x].shop.forEach(function(elem, ind) {
    var div = document.createElement("div");
    div.setAttribute('id', "shop_" + ind);
    div.setAttribute('class', "shop");
    div.innerHTML = '<span class="shopName">' + elem.name + '</span><span class="shopAddress">' + elem.address + '</span><span class="shopExtra">↑' + elem.extraCharge + '%</span><span class="shopIncome">' + elem.income + '$</span><span class="shopProduct"><span>' + elem.product.length + ' products </span><button class="save" type="button">+</button></span>'
    showallmarkets1.appendChild(div);
    showallmarkets1.appendChild(document.createElement("br"));
    div.children[4].children[1].addEventListener('click', function () {
      productAdd[0]=x;
      productAdd[1]=ind;
    })
    div.children[4].children[0].addEventListener('click', function () {
      showAllProduct(ind,x);
    })
  })
}




function showAllProduct(x,y) {
  showallmarkets1.innerHTML = '';
  allMarket[y].shop[x].product.forEach(function(elem, i) {
    var div = document.createElement("div");
    div.setAttribute('id', "product_" + i);
    div.setAttribute('class', "product");
    div.innerHTML = '<span class="productName">' + elem.name + '</span><span class="productType">' + elem.type + '</span><span class="productCost">' + elem.cost + '$</span><span class="productDate">' + elem.date + '</span>'
    showallmarkets1.appendChild(div);
    showallmarkets1.appendChild(document.createElement("br"));

  })
}

allMarket[0].add(new Shop('Hugo', 352352, 20, 400));


saveshop.addEventListener('click', function() {
  allMarket[shopAdd].add(new Shop(shopname.value, shopaddress.value, shopextra.value, shopincome.value));
})

saveProduct.addEventListener('click', function() {
  var arr = productDate.value.split('-');
allMarket[productAdd[0]].shop[productAdd[1]].add(new Product(productName.value, productType.value, productCost.value, arr[0], arr[1], arr[2]), productCount.value);
})

/*Shop.prototype.showInformation = function () {

}*/


//var hugo = new Shop("hugo boss", "nezavisimosti 12", 250, 15000);
//hugo.add(new Product("name", 1, 123, 2017, 10, 20, 2017, 2, 16), 19);
//hugo.add(new Product("name", 1, 123, 2017, 10, 20, 2017, 2, 16));
//hugo.add(new Product("name", 1, 123, 2017, 10, 20, 2017, 2, 16));


/*function getElemChildByClass(x, y) {
  Array.from(y.children).forEach(function (e) {
    if(e.ClassName == x)return e;
  })
}*/
