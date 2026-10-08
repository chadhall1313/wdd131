document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();

const comments = document.getElementById("comments");
const form = document.querySelector("form");
let commentList = JSON.parse(localStorage.getItem("comments")) || [];
displayComments();

form.addEventListener("submit", function () {
    const name = document.getElementById("name").value;
    const insight = document.getElementById("insight").value;
    commentList.push(`${name}|${insight}`);
    localStorage.setItem("comments", JSON.stringify(commentList));
    displayComments();
})

function displayComments() {
    commentList.forEach(function (comment) {
        const parts = comment.split("|");

        const article = document.createElement("article");
        article.setAttribute("class", "comment");

        const name = document.createElement("h3");
        name.textContent = parts[0];

        const insight = document.createElement("p");
        insight.textContent = parts[1];

        article.appendChild(name);
        article.appendChild(insight);

        comments.appendChild(article);
    });
}

