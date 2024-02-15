const ads_cards = document.querySelector(".ads__cards");
const showProduct = document.querySelector(".showProduct");
const content__tab = document.querySelector(".content__tab");
const content__product = document.querySelector(".content__product");
const input = document.querySelector(".input");
const search__products = document.querySelector(".search__products");

let arrData = [];

const getDATA = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=3");
    const data = await res.json();
    return data;
  } catch (error) {}
};

const ads_cards_render = async () => {
  const data = await getDATA();
  // console.log(data);
  ads_cards.innerHTML = data
    ?.map(
      (item) => `
        <div class="ads_card">
            <div class="ads_card_main_title">
                <h2 class="ads_card_title">${item.title}</h2>
            </div>
            <div class="ads_card_main_img">
                <img class="ads_card_img" src="${item.image}" alt="img" />
            </div>
            <div class="ads_card_content">
                <p class="ads_card_content_paragraph">$534,33</p>
                <p class="ads_card_content_discount">24% Off</p>
                <p class="ads_card_price">${item.price}</p>
            </div>
        </div>
    `
    )
    .join("");
};
ads_cards_render();

const renderProductBest = async () => {
  try {
    const urlData = await fetch("https://fakestoreapi.com/products?limit=8");
    // console.log(urlData);
    const data = await urlData.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const showRenderProduct = async () => {
  try {
    const data1 = await renderProductBest();
    console.log(data1);

    showProduct.innerHTML = data1
      ?.map(
        (item) => `
        <div class="show_card">
          <img class="show_card_img" src="${item.image}">
          <div class="main_show_card_content">
            <h3 class="main_card_title">${item.title}</h3>
            <img class="show_card_stars" src="../img/stars.svg" alt="img" />
            <div class="main_card_content">
              <p class="main_card_price">${item.price}</p>
              <p class="main_card_discount">$534,33</p>
              <p class="main_card_percentage">24% Off</p>
            </div>
            <div class="main_card_basket_detail">
            <a href="http://127.0.0.1:5500/basket.html?id=${item.id}"><img src="../img/basket.png" alt="icon"/></a>
            <a href="http://127.0.0.1:5500/detail.html?id=${item.id}"><img src="../img/detail.png" alt="icon"/></a>
            </div>
          </div>
        </div>
        `
      )
      .join("");
  } catch (error) {
    console.log(error);
  }
};
showRenderProduct();

// ----------------------- Categories -------------------------//

const productUrl = "https://fakestoreapi.com/products";

const getTabName = async (url) => {
  try {
    const buttons = document.querySelectorAll(".content__tab > button");
    console.log(buttons);
    const res = await fetch(`${productUrl}/${url}`);
    const data3 = await res.json();
    console.log(data3);
    content__tab.innerHTML = data3
      ?.map(
        (item) => `
        <a class="tab_categories_link">
          <button class="tab_categories_btn">
            <p class="tab_categories_paragraph">${item}</p>
          </button>
        </a>
      `
      )
      .join(" ");
  } catch (error) {
    console.log(error);
  }
};

getTabName("categories");


// --------------------------  Search -----------------------------//

const baceSearchUrl = "https://fakestoreapi.com/products";

const getSearched = async () => {
  try {
    const response = await fetch(baceSearchUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API dan ma\'lumot olishda xatolik:', error);
  }
};

input.addEventListener("input", async (e) => {
  const data = await getSearched();
  const searchTerm = e.target.value.toLowerCase();

  search__products.innerHTML = data
    ?.filter(item => item.title.toLowerCase().includes(searchTerm))
    ?.map(item => `
      <div>
        <img class="bacesearch__img" src="${item.image}" alt="" />
      </div>
      <p class="bacesearch__paragraph">${item.title}</p>
    `)
    .join("");
    search__products.style.height = "400px"
    if(!e.target.value){
      search__products.style.height = "0px"
      search__products.innerHTML= ""
    }
});


