
import headerFunc from "./header.js";
import productsFunc from "./products.js";
import searchFunc from "./search.js";




//! add product to localStorage başlama

(async function(){
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)): [];
  productsFunc(data);
  searchFunc(data);
})()
//! add product to localStorage bitiş



//! add cartItems to localStorage başlama

const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";

  //! add cartItems to localStorage bitişi

  
