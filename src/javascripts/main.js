//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'

let initial_cards = [
    {
        place: "Salt Lake City, Utah",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas atque itaque quod facere vel nostrum, quae illo alias consequatur voluptatem. Laboriosam quod possimus nulla sequi dolorem expedita aut voluptatibus asperiores!",
        poster: "https://images.unsplash.com/photo-1597778602022-f2d97b8c1493?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80"
    }, {
        place: "Ancient Cathedral, Salt Lake City, Utah",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dignissimos fugiat aperiam, doloribus eius deleniti dicta labore repellendus, eaque odit ut nam? Id autem est voluptatem, dicta dolores voluptates nisi.",
        poster: "https://images.unsplash.com/photo-1603937372023-251acb738be8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80"
    }
]

function displayCards() {

    let cards = initial_cards
    let cards_html = ""
    let ndx = 0
    for (let c of cards) {
        cards += `
            <div class="card col mb-3" data - ndx = "${ndx}">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${c.poster}" class="img-fluid rounded-start" alt="${c.place}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${c.place}</h5>
                            <p class="card-text">${c.description}</p>
                            <p class="card-text">
                                <button> class="btn btn-danger to-delete">Delete</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `

        ndx++ 
    }

    document.querySelector("#cards").innerHTML = cards_html
}

displayCards()