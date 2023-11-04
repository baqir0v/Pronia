const productsData = [
    {
        id: 1,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
        title: "American Marigold",
        price: 23
    },
    {
        id: 2,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-3-270x300.jpg",
        title: "Black Eyed Susan",
        price: 25
    },
    {
        id: 3,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-5-270x300.jpg",
        title: "Bleeding Heart",
        price: 30
    },
    {
        id: 4,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-7-270x300.jpg",
        title: "Bloody Cranesbill",
        price: 45
    },
    {
        id: 5,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-8-270x300.jpg",
        title: "Butterfly Weed",
        price: 50
    },
    {
        id: 6,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-6-270x300.jpg",
        title: "Common Yarrow",
        price: 65
    },
    {
        id: 7,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg",
        title: "Doublefile Viburnum",
        price: 67
    },
    {
        id: 8,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-8-270x300.jpg",
        title: "Feather Reed Grass",
        price: 20
    },
];


const flowers = document.getElementById("flowers");

productsData.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img src="${product.image}" alt="">
        <div class="product-basket">
            <i class="fa-regular fa-heart" style="color: #000000; width: 30px; height: 30px; background-color: #fff; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; padding: 7px;"></i>
            <i class="fa-regular fa-eye" style="color: #000000; width: 30px; height: 30px; background-color: #fff; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; padding: 7px;"></i>
            <i class="fa-solid fa-cart-shopping" style="color: #000000; width: 30px; height: 30px; background-color: #fff; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; padding: 7px;"></i>
        </div>
        <div class="product-info">
            <a href="#">${product.title}</a>
            <span>$${product.price}.00</span>
            <div class="star">
                <i class="fa-solid fa-star" style="color: #ffe24d;"></i>
                <i class="fa-solid fa-star" style="color: #ffe24d;"></i>
                <i class="fa-solid fa-star" style="color: #ffe24d;"></i>
                <i class="fa-solid fa-star" style="color: #ffe24d;"></i>
                <i class="fa-solid fa-star" style="color: #ffe24d;"></i>
            </div>
        </div>`;

    flowers.append(productCard);
});