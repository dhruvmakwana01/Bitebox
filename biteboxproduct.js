const products = [
    {
        id: 101,
        name: "Laptop",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        price: 55000,
        description: "High-performance laptop suitable for work and development."
    },
    {
        id: 102,
        name: "Smartphone",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        price: 25000,
        description: "Modern smartphone with a powerful processor and good camera."
    },
    {
        id: 103,
        name: "Wireless Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        price: 3500,
        description: "Comfortable wireless headphones with clear sound."
    },
    {
        id: 104,
        name: "Smart Watch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        price: 4500,
        description: "Smart watch with fitness tracking and notifications."
    },
    {
        id: 105,
        name: "Bluetooth Speaker",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        price: 2200,
        description: "Portable Bluetooth speaker with powerful sound."
    },
    {
        id: 106,
        name: "Keyboard",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        price: 1800,
        description: "Comfortable keyboard suitable for everyday typing."
    },
    {
        id: 107,
        name: "Wireless Mouse",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        price: 900,
        description: "Smooth and responsive wireless mouse."
    },
    {
        id: 108,
        name: "Monitor",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 14500,
        description: "Full HD monitor suitable for work and entertainment."
    },
    {
        id: 109,
        name: "Tablet",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
        price: 18000,
        description: "Lightweight tablet suitable for learning and entertainment."
    },
    {
        id: 110,
        name: "Power Bank",
        image: "https://images.unsplash.com/photo-1609592424433-5c6b5b6e9a8e",
        price: 1500,
        description: "High-capacity power bank for charging devices on the go."
    },
    {
        id: 111,
        name: "USB-C Cable",
        image: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
        price: 500,
        description: "Durable USB-C cable for charging and data transfer."
    },
    {
        id: 112,
        name: "Webcam",
        image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da",
        price: 3200,
        description: "HD webcam suitable for online meetings and classes."
    },
    {
        id: 113,
        name: "External Hard Drive",
        image: "https://images.unsplash.com/photo-1531492746076-161ca9b9c7f1",
        price: 6500,
        description: "Portable storage device for backup and data storage."
    },
    {
        id: 114,
        name: "Gaming Chair",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
        price: 12000,
        description: "Comfortable ergonomic chair for long working sessions."
    },
    {
        id: 115,
        name: "Laptop Stand",
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
        price: 1800,
        description: "Adjustable laptop stand for better viewing comfort."
    },
    {
        id: 116,
        name: "Mechanical Keyboard",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212",
        price: 4500,
        description: "Mechanical keyboard with responsive keys."
    }
];


let cart = [];

showProducts(products);

function showProducts(productList) {

    const productcontainer =
            document.getElementById("product_container");
        productcontainer.innerHTML = "";

        
    productList.forEach(function (product) {

        const card = document.createElement("div");
        card.classList.add("card1");


        const section1 = document.createElement("section");
        section1.classList.add("product_logo1");


        const productimage = document.createElement("img");
        productimage.src = product.image;
        productimage.alt = product.name;


        section1.appendChild(productimage);


        const section2 = document.createElement("section");
        section2.classList.add("product_details1");


        const productname = document.createElement("p");
        productname.textContent = product.name;


        const productprice = document.createElement("p");
        productprice.textContent = product.price;


        const addtocart = document.createElement("button");
        addtocart.textContent = "Add";


        addtocart.addEventListener("click", addBasketItems);


        function addBasketItems() {

            const existingproduct = cart.find(function (prod) {
                return prod.id === product.id;
            });


            if (existingproduct) {

                existingproduct.quantity++;

            } else {

                const item = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1
                };

                cart.push(item);
                document.getElementById("qty").firstChild.textContent = cart.length;
                console.log(cart);
            }


            let totalQuantity = 0;


            cart.forEach(function (item) {
                totalQuantity = totalQuantity + item.quantity;
            });


            // document.getElementById("qty").textContent = totalQuantity;


            console.log(cart);
        }


        section2.appendChild(productname);
        section2.appendChild(productprice);
        section2.appendChild(addtocart);


        card.appendChild(section1);
        card.appendChild(section2);


        

        productcontainer.appendChild(card);

        search.addEventListener("input", searchProducts);
        // const searchInput = document.getElementById("searchInput");
        // searchInput.addEventListener("input", searchProducts (product));

    });
}


// Get the Bootstrap modal

const cartModal = document.getElementById("exampleModal");


// Run showCart whenever the modal is opened

cartModal.addEventListener("show.bs.modal", function () {

    showCart();

});


// Display cart

function showCart() {

    const billTable = document.getElementById("billing");

    let subTotal = 0;
    let tablecode = "";


    // If cart is empty

    if (cart.length === 0) {

        billTable.innerHTML = "Your cart is empty.";

        return;
    }


    // Table opening

    tablecode += `
        <table class="table table-bordered table-striped">

            <tr>
                <th>Product Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
    `;


    // Add cart items

    cart.forEach(function (item) {

        let total = item.price * item.quantity;


        subTotal = subTotal + total;


        tablecode += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td class="text-center">
                <button class="btn btn-outline-danger btn-sm" onclick="decreaseQty(${item.id})">-</button>
                <span>${item.quantity}</span>
                <button class="btn btn-outline-success btn-sm" onclick="increaseQty(${item.id})">+</button>
                </td>
                <td>${total}</td>
                <td>
                    <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${item.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `;

    });


    // Total billing row

    tablecode += `
        <tr>

            <td colspan="4" class="text-end">
                <strong>Total Billing</strong>
            </td>

            <td colspan="2" class="text-start">
                <strong>${subTotal}</strong>
            </td>

        </tr>
    `;


    // Close table

    tablecode += `</table>`;


    // Put table inside modal

    billTable.innerHTML = tablecode;
}

// Increase and decrease quantity functions

function increaseQty(productId) {
    const existingproduct = cart.find(function (prod) {
        return prod.id === productId;
    });
    existingproduct.quantity++;
    showCart();
}

function decreaseQty(productId) {
    const existingproduct = cart.find(function (prod) {
        return prod.id === productId;
    });



    let checkqty = existingproduct.quantity - 1;
    if (checkqty > 1) {
        existingproduct.quantity--;
    }
    else {

        existingproduct.quantity = 1;


    };
    showCart();

}

// Remove item from cart

function removeItem(productId) {
    cart = cart.filter(function (prod) {
        return prod.id !== productId;
    });
    showCart();
    document.getElementById("qty").firstChild.textContent = cart.length;
}

// Search functionality

function searchProducts() {
    console.log("Hello");
    let searchtext = document.getElementById("searchInput").value;
    console.log(searchtext);
    const filteredProducts = products.filter(function (prod) {
        return prod.name.toLowerCase().includes(searchtext.toLowerCase());
    });
    console.log(filteredProducts);
    showProducts(filteredProducts);
}


//     const searchInput = document.getElementById("searchInput");
//     let value = searchInput.value;
//     const filteredProducts = productlist.filter(function (product) {
//         return product.name.includes(value);
//     });
//     console.log(filteredProducts);
// }



















// function removeItem(productId) {
//     const index = cart.findIndex(function (prod) {
//         return prod.id === productId;
//     });
//     if (index !== -1) {
//         cart.splice(index, 1);
//     }
//     showCart();
// }
