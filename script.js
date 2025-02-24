
    <script>
        let index = 0;
        function showReview() {
            document.getElementById('reviewSlider').style.transform = `translateX(${-index * 100}%)`;
            document.querySelectorAll('.bar').forEach((bar, i) => {
                bar.classList.toggle('active', i === index);
            });
        }
        setInterval(() => {
            index = (index + 1) % 2;
            showReview();
        }, 3000);
    </script>
