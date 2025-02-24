 <script>
        let index = 0;
        const reviews = document.querySelectorAll('.review-item');
        const bars = document.querySelectorAll('.bar');
        function showReview() {
            reviews.forEach((review, i) => {
                review.classList.toggle('active', i === index);
            });
            bars.forEach((bar, i) => {
                bar.classList.toggle('active', i === index);
            });
        }
        setInterval(() => {
            index = (index + 1) % reviews.length;
            showReview();
        }, 3000);
    </script>
