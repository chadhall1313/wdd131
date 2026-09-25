document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear()

const button = document.querySelector("#menu")
const navigation = document.querySelector(".navigation")

button.addEventListener("click", function () {
    navigation.classList.toggle("show")
    button.classList.toggle("show")
})



const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Pocatello Idaho",
        location: "Pocatello, Idaho, United States",
        dedicated: "2021, November, 7",
        area: 71125,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/pocatello-idaho-temple/pocatello-idaho-temple-23415.jpg"
    },
    {
        templeName: "Columbus Ohio",
        location: "Columbus, Ohio, United States",
        dedicated: "2023, June, 3",
        area: 11745,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/columbus-ohio-temple/columbus-ohio-temple-34814.jpg"
    },
    {
        templeName: "Red Cliffs",
        location: "St. George, Utah, United States",
        dedicated: "2024, March, 24",
        area: 96277,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/red-cliffs-utah-temple/red-cliffs-utah-temple-44661.jpg"

    }
];

const allTemplesLink = document.querySelector("#all");
allTemplesLink.addEventListener("click", () => {
    createTemplateCard(temples)
})

const oldTemplesLink = document.querySelector("#old");
oldTemplesLink.addEventListener("click", () => {
    createTemplateCard(temples.filter((temple) => parseFloat(temple.dedicated.split(",")[0]) < 1900))
});

const newTemplesLink = document.querySelector("#new");
newTemplesLink.addEventListener("click", () => {
    createTemplateCard(temples.filter((temple) => parseFloat(temple.dedicated.split(",")[0]) > 2000))
})

const largeTemplesLink = document.querySelector("#large");
largeTemplesLink.addEventListener("click", () => {
    createTemplateCard(temples.filter((temple) => temple.area > 90000))
});

const smallTemplesLink = document.querySelector("#small");
smallTemplesLink.addEventListener("click", () => {
    createTemplateCard(temples.filter((temple) => temple.area < 10000))
});


function createTemplateCard(filteredTemples)
{
    document.querySelector(".grid").innerHTML = ""
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");
        name.textContent = temple.templeName;
        location.innerHTML = `<span>Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span>Dedication: </span> ${temple.dedicated}`;
        area.innerHTML = `<span>Square Feet: </span> ${temple.area}`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `Image of the ${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector(".grid").appendChild(card)
    });
}


