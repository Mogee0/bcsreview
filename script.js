<script>
        // Example reviews data. Replace with API call to fetch real reviews.
        const reviews = [
            {
                name: "Dinesh",
                quality: "Nice service ",
                recommend: "Very Likely",
                liked: "Soup.",
            
            },
            {
                name: "DHANUNJAYA ",
                quality: "Good Tasty and Healthy Snacks",
                recommend: "Yes",
                liked: "Sundal.",
                
            }
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
                  
                `;
                reviewsContainer.appendChild(reviewDiv);
            });
        }

        document.addEventListener('DOMContentLoaded', displayReviews);
    </script>
