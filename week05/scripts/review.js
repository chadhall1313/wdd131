
let reviewCount = localStorage.getItem("reviewCount");

if (reviewCount === null) {
    reviewCount = 1
}
else {
    reviewCount = parseFloat(reviewCount);
    reviewCount += 1;
}

localStorage.setItem("reviewCount", reviewCount)
document.getElementById("review-count").textContent = reviewCount;