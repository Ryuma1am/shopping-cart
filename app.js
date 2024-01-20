let CARTPRODUCTS = document.querySelector(".cart__products");
let Total = document.querySelector(".cart__total")
const products = [
  {
    id: 0,
    name: "Redmi Note 12",
    price: 400,
    imgUrl: "images/redmi12.png",
  },
  {
    id: 1,
    name: "Redmi Note 12 Pro",
    price: 450,
    imgUrl: "images/redminote12pro.png",
  },
];
let cartProducts = [];
let productsTotalPrice = 0
const productsContainer = document.querySelector(".products__container");
products.forEach((element) => {
  let product = document.createElement("article");
  let productFigure = document.createElement("figure");
  let productImg = document.createElement("img");
  let productName = document.createElement("h2");
  let productPrice = document.createElement("p");
  let productButton = document.createElement("button");
  productButton.textContent = "Add to Cart";
  productImg.src = element.imgUrl;
  productName.textContent = element.name;
  productPrice.textContent = `$ ${element.price}`;
  productFigure.appendChild(productImg);
  productButton.classList.add("product__button");
  productImg.classList.add("product__img");
  product.classList.add("product");
  product.id = element.id;
  productButton.value = element.id;
  product.append(productFigure, productName, productPrice, productButton);
  productsContainer.appendChild(product);
  productButton.addEventListener("click", () => {
    let counter = 1;
    let productTotalPrice = 0
    if (cartProducts[element.id] == null) {
      let cartProduct = document.createElement("article");
      let cartFigure = document.createElement("figure");
      let cartImg = document.createElement("img");
      let cartName = document.createElement("h2");
      let cartDiv = document.createElement("div");
      let cartSubstract = document.createElement("button");
      let cartSum = document.createElement("button");
      let cartTotal = document.createElement("span");
      let cartSimbol = document.createElement("span")
      let cartTotalContainer = document.createElement("p")
      let deleteButton = document.createElement("button");
      let cartQuantity = document.createElement("p");
      cartImg.src = element.imgUrl;
      cartImg.classList.add("product__img");
      cartFigure.appendChild(cartImg);
      cartQuantity.textContent = counter;
      cartName.textContent = element.name;
      cartSubstract.textContent = "-";
      cartSubstract.classList.add("cart__button");
      cartSimbol.textContent = "$ "
      cartTotalContainer.append(cartSimbol, cartTotal)
      cartSum.textContent = "+";
      cartSum.classList.add("cart__button");
      cartTotal.textContent = element.price * counter;
      cartTotal.classList.add("price__total")
      deleteButton.textContent = "X";
      deleteButton.classList.add("delete__button");
      deleteButton.value = element.id;
      cartDiv.append(cartSubstract, cartQuantity, cartSum);
      cartDiv.classList.add("cart__buttons");
      cartProduct.append(
        cartFigure,
        cartName,
        cartDiv,
        cartTotalContainer,
        deleteButton
      );
      cartProduct.classList.add("cart__product");
      cartProduct.id = element.id;
      CARTPRODUCTS.appendChild(cartProduct);
      cartProducts[element.id] = true;
      productTotalPrice = element.price * counter;
      productsTotalPrice += productTotalPrice
      Total.textContent = `$ ${productsTotalPrice}`
      productButton.addEventListener("click", () => {
        counter++;
        cartQuantity.textContent = counter;
        cartTotal.textContent = element.price * counter;
        productsTotalPrice += productTotalPrice
        Total.textContent = `$ ${productsTotalPrice}`
      });
      deleteButton.addEventListener("click", () => {
        productTotalPrice = element.price * counter;
        productsTotalPrice -= productTotalPrice
        productTotalPrice = 0
        Total.textContent = `$ ${productsTotalPrice}`
        CARTPRODUCTS.removeChild(cartProduct);
        cartProducts[element.id] = null;
      });
      if(counter > 0){
        cartSum.addEventListener("click",()=>{
          counter++;
          cartQuantity.textContent = counter;
          cartTotal.textContent = element.price * counter;
          productsTotalPrice += productTotalPrice
          Total.textContent = `$ ${productsTotalPrice}`
        })
        cartSubstract.addEventListener("click",()=>{
          counter--;
          if (counter == 0){
            productsTotalPrice -= productTotalPrice
            productTotalPrice = 0
            Total.textContent = `$ ${productsTotalPrice}`
            CARTPRODUCTS.removeChild(cartProduct);
            cartProducts[element.id] = null;
          }else{
            cartQuantity.textContent = counter;
            cartTotal.textContent = element.price * counter;
            productsTotalPrice -= productTotalPrice
            Total.textContent = `$ ${productsTotalPrice}`
          }
        })}
      }
    }
    )})