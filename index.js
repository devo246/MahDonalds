// menu buttons start
function remove_style_btn() {
    for (let i of document.getElementsByClassName('section-btn')) {
        i.style.backgroundColor = "transparent"
        i.style.color = "black"
    }
}

function sort_products() {
    for (let i of document.getElementsByClassName('product')) {
        i.style.display = "none"
    }
}


function showProducts(category) {
    remove_style_btn();
    sort_products();

    let button = document.getElementById(category);
    button.style.backgroundColor = "#222831";
    button.style.color = "#ffffff";

    let products = document.getElementsByClassName(category);
    for (let i of products) {
        i.style.display = "block";
    }
}

// Specific functions for each category
function all_1() {
    remove_style_btn();
    document.getElementById('all').style.backgroundColor = "#222831";
    document.getElementById('all').style.color = "#ffffff";

    for (let i of document.getElementsByClassName('product')) {
        i.style.display = "block";
    }
}

function burger() {
    showProducts('burger');
}

function pizza() {
    showProducts('pizza');
}

function pasta() {
    showProducts('pasta');
}

function fries() {
    showProducts('fries');
}

// menu buttons end

// offer start
function showOffer(category) {
    location.href = '#menu';
    remove_style_btn();
    sort_products();

    let button = document.getElementById(category);
    button.style.backgroundColor = "#222831";
    button.style.color = "#ffffff";

    let products = document.getElementsByClassName(category);
    for (let i of products) {
        i.style.display = "block";
    }
}

function offrt_burger() {
    showOffer('burger');
}

function offrt_pizza() {
    showOffer('pizza');
}

// offer end


// read more start
function read_more() {
    document.getElementById('read-more').style.display = 'block'
}
// read more end

// book start
function book() {
    let d = document.getElementById('date').value

    if (d.length < 1) {
        document.getElementById('error').innerHTML = ''
    }
    else {
        alert("A table has been booked on " + d)
    }
}
// book end

// my account start


// my account end