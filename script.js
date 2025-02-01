const reviews = [
    {
        name: "Amit Kumar",
        quality: "Delicious",
        recommend: "Highly Recommended",
        liked: "Amazing flavors and quick service.",
        suggestions: "Would love more dessert options."
    },
];

function displayReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review-item';
        reviewDiv.innerHTML = `
            <h3>${review.name}</h3>
            <p><strong>Quality:</strong> ${review.quality}</p>
            <p><strong>Recommend:</strong> ${review.recommend}</p>
            <p><strong>Liked:</strong> ${review.liked}</p>
            <p><strong>Suggestions:</strong> ${review.suggestions}</p>
        `;
        reviewsContainer.appendChild(reviewDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayReviews);
