/* Item Data */

const items = [

    {
        name: "Wireless Earbuds",
        category: "Electronics",
        location: "Computer Lab",
        status: "Found"
    },

    {
        name: "Blue Notebook",
        category: "Stationery",
        location: "Library",
        status: "Lost"
    },

    {
        name: "Black Wallet",
        category: "Personal",
        location: "Canteen",
        status: "Found"
    },

    {
        name: "College ID Card",
        category: "Accessories",
        location: "Main Gate",
        status: "Lost"
    },

    {
        name: "Water Bottle",
        category: "Personal",
        location: "Sports Ground",
        status: "Found"
    },

    {
        name: "Scientific Calculator",
        category: "Electronics",
        location: "Room 204",
        status: "Lost"
    }

];


/* Display Items */

function render(list = items) {

    const grid =
        document.getElementById("itemGrid");

    grid.innerHTML = "";


    list.forEach((item, index) => {

        const card =
            document.createElement("div");

        card.className = "card";


        card.innerHTML = `

            <h3>
                ${item.name}
            </h3>

            <p>
                <b>Category:</b>
                ${item.category}
            </p>

            <p>
                <b>Location:</b>
                ${item.location}
            </p>

            <span class="tag ${item.status.toLowerCase()}">
                ${item.status}
            </span>

            <br>

            <button
                class="btn"
                onclick="claim(${index})"
            >
                Claim / View
            </button>

        `;


        grid.appendChild(card);

    });

}


/* Search and Filter */

function filterItems() {

    const text =
        document
        .getElementById("search")
        .value
        .toLowerCase();


    const category =
        document
        .getElementById("category")
        .value;


    const result =
        items.filter(item => {

            const matchText =
                item.name
                .toLowerCase()
                .includes(text)

                ||

                item.location
                .toLowerCase()
                .includes(text);


            const matchCategory =
                category === "all"

                ||

                item.category === category;


            return matchText && matchCategory;

        });


    render(result);

}


/* Claim Item */

function claim(index) {

    document
        .getElementById("modalTitle")
        .textContent =
        "Claim Request Submitted!";


    document
        .getElementById("modalText")
        .textContent =
        "Your request has been recorded. Please contact the campus office for verification.";


    document
        .getElementById("modal")
        .style.display = "flex";

}


/* Report Item */

function reportItem(event) {

    event.preventDefault();


    const name =
        document
        .getElementById("itemName")
        .value;


    const type =
        document
        .getElementById("itemType")
        .value;


    document
        .getElementById("modalTitle")
        .textContent =
        "Report Submitted!";


    document
        .getElementById("modalText")
        .textContent =
        `Your ${type.toLowerCase()} item "${name}" has been reported successfully.`;


    document
        .getElementById("modal")
        .style.display = "flex";


    event.target.reset();

}


/* Close Modal */

function closeModal() {

    document
        .getElementById("modal")
        .style.display = "none";

}


/* Scroll to Items */

function scrollItems() {

    document
        .getElementById("items")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* Load Items */

render();