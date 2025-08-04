document.querySelector("#searchbar").addEventListener("mouseover", function () {
    let wides = document.getElementsByClassName("searchwide");
    for (let i = 0; i < wides.length; i++) {
        wides[i].style.display = "block";
    }
    document.querySelector("#searchinput").style.display = "none";
});

document.querySelector("#searchbar").addEventListener("mouseout", function () {
    document.querySelector("#place").style.display = "block";
    document.querySelector("#busdriver").style.display = "block";
    document.querySelector("#busnumber").style.display = "block";
    if (document.querySelector("#place").value != "") {
        document.querySelector("#place").style.display = "block";
        document.querySelector("#busdriver").style.display = "none";
        document.querySelector("#busnumber").style.display = "none";
        document.querySelector("#searchinput").style.display = "none";
    } else if (document.querySelector("#busdriver").value != "") {
        document.querySelector("#place").style.display = "none";
        document.querySelector("#busdriver").style.display = "block";
        document.querySelector("#busnumber").style.display = "none";
        document.querySelector("#searchinput").style.display = "none";
    } else if (document.querySelector("#busnumber").value != "") {
        document.querySelector("#place").style.display = "none";
        document.querySelector("#busdriver").style.display = "none";
        document.querySelector("#busnumber").style.display = "block";
        document.querySelector("#searchinput").style.display = "none";
    } else {
        document.querySelector("#place").style.display = "none";
        document.querySelector("#busdriver").style.display = "none";
        document.querySelector("#busnumber").style.display = "none";
        document.querySelector("#searchinput").style.display = "flex";
    }
});

document.querySelector("#bushbtn").addEventListener("click", function () {
    fetch("buses.json")
        .then(response => response.json())
        .then(data => {
            addbuses(data.buses);
        });
});

function addbuses(data) {
    let container = document.querySelector("#cardcontainer");
    container.innerHTML = "";
    data.forEach(bus => {
        const card = document.createElement("div");
        card.className = "box-card";
        card.innerHTML = `
            <img src="${bus.image}" alt="Bus Image">
            <h3>${bus.name}</h3>
            <p>Route: ${bus.route}</p>
            <p>Bus Number: ${bus.busnumber}</p>
            <a href="#">Track</a>
        `;
        container.appendChild(card);
    });
}

document.querySelector("#driverhbtn").addEventListener("click", function () {
    fetch("buses.json")
        .then(response => response.json())
        .then(data => {
            adddrivers(data.drivers);
        });
});

function adddrivers(data) {
    let container = document.querySelector("#cardcontainer");
    container.innerHTML = "";
    data.forEach(driver => {
        const card = document.createElement("div");
        card.className = "box-card";
        card.innerHTML = `
            <img src="${driver.image}" alt="Driver Image">
            <h3>${driver.name}</h3>
            <p>Route: ${driver.route}</p>
            <p>Phone Number: ${driver.mnumber}</p>
        `;
        container.appendChild(card);
    });
}

document.querySelector("#place").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    fetch("buses.json")
        .then(response => response.json())
        .then(data => {
            addbusesperplace(data.buses, searchValue);
        });
});

function addbusesperplace(data, searchValue) {
    let container = document.querySelector("#cardcontainer");
    container.innerHTML = "";
    data.forEach(bus => {
        if (bus.places.some(place => place.toLowerCase().includes(searchValue.toLowerCase()))) {
            const card = document.createElement("div");
            card.className = "box-card";
            card.innerHTML = `
                <img src="${bus.image}" alt="Bus Image">
                <h3>${bus.name}</h3>
                <p>Route: ${bus.route}</p>
                <p>Bus Number: ${bus.busnumber}</p>
                <a href="#">Track</a>
        `   ;
            container.appendChild(card);
        }

    });
}

document.querySelector("#busdriver").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    fetch("buses.json")
        .then(response => response.json())
        .then(data => {
            adddriverspername(data.drivers, searchValue);
        });
});

function adddriverspername(data, searchValue) {
    let container = document.querySelector("#cardcontainer");
    container.innerHTML = "";
    data.forEach(driver => {
        if (driver.name.toLowerCase().includes(searchValue.toLowerCase())) {
            const card = document.createElement("div");
            card.className = "box-card";
            card.innerHTML = `
                <img src="${driver.image}" alt="Driver Image">
                <h3>${driver.name}</h3>
                <p>Route: ${driver.route}</p>
                <p>Mobile Number: ${driver.mnumber}</p>
        `   ;
            container.appendChild(card);
        }

    });
}

document.querySelector("#busnumber").addEventListener("input", function () {
    let searchValue = this.value;
    fetch("buses.json")
        .then(response => response.json())
        .then(data => {
            adddbusespernum(data.buses, searchValue);
        });
});

function adddbusespernum(data, searchValue) {
    let container = document.querySelector("#cardcontainer");
    container.innerHTML = "";
    data.forEach(bus => {
        if (bus.busnumber.includes(searchValue)) {
            const card = document.createElement("div");
            card.className = "box-card";
            card.innerHTML = `
                <img src="${bus.image}" alt="Driver Image">
                <h3>${bus.name}</h3>
                <p>Route: ${bus.route}</p>
                <p>Bus Number: ${bus.busnumber}</p>
                <a href="#">Track</a>
        `   ;
            container.appendChild(card);
        }

    });
}

document.querySelector("#loginbtn").addEventListener("click", function () {
    window.location.href = "login.html";
})



document.querySelector("#registerform").addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    alert(`Username: ${username}\nPassword: ${password}`);
    window.location.href = "index.html";
})