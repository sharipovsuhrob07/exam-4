const item = document.querySelector(".item");

let params = new URLSearchParams(document.location.search);

const siteURL = "https://fakestoreapi.com/products";

const id = params.get("id");

const renderProductDetail = async () => {
  try {
    const res = await fetch(`${siteURL}/${id}`);
    const data = await res.json();  
    item.innerHTML = `
        <div class="main_card_basket">
            <div class="basket_img_title">
            <button class="basket_img_title_delete">x</button>
            <div class="main_card_basket_div">
            <img class="main_card_basket_img" src="${data.image}" alt="img"/>
            <p class=" main_card_basket_title">${data.title}</p>
            </div>
            </div>

            <div class="main_card_basket_content">
            <span class="main_card_basket_total_price">0</span>
            <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
            </div>
            <p class="main_card_basket_price">${data.price}$</p>
            </div>
        </div>
        `; 
  } catch (error) {
    console.error("Ma'lumotlarni olishda xatolik:", error);
  }
};

renderProductDetail();