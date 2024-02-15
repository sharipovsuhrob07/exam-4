const item = document.querySelector(".item");

let params = new URLSearchParams(document.location.search);

const siteURL = "https://fakestoreapi.com/products";

const id = params.get("id");

const renderProductDetail = async () => {
    try {
        const res = await fetch(`${siteURL}/${id}`);
        const data = await res.json();
        item.innerHTML = `
        <div class="main_card_detail">
            <img class="main_card_detail_img" src="${data.image}" alt="img"/>
            <div class="main_card_detail_content">
                <p class=" main_card_detail_title">${data.title}</p>
                <p class="main_card_detail_paragraph"><span class="main_card_detail_des">Description: </span>${data.description}</p>
                <p class="main_card_detail_price"><span class="main_card_detail_price_title">Price: </span>${data.price}$</p>
                <p class="main_card_detail_percentage"><span class="main_card_detail_discount">$534,33</span>24% Off</p>
            </div>
        </div>
        `;
    } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik:", error);
    }
};

renderProductDetail();
