// Google Sheets CSV URL (replace with your actual URL)
const googleSheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHkcihZDIxeRRmtfyEv37W3hGQhkTYyPAh7K1ebVrGHB6YIEZbu3EoFX_vjTMYNvYFHePX9UMVM9ai/pub?gid=758914046&single=true&output=csv";

// Function to fetch and display responses dynamically
async function fetchGoogleFormResponses() {
    try {
        const response = await fetch(googleSheetURL);
        const data = await response.text();
        const rows = data.split("\n").slice(1); // Skip header row

        const reviewsContainer = document.getElementById("reviews-container");
        reviewsContainer.innerHTML = ""; // Clear old data

        rows.forEach(row => {
            const columns = row.split(",");
            const name = columns[1]; // Adjust index based on Google Sheet structure
            const review = columns[2]; 

            const reviewDiv = document.createElement("div");
            reviewDiv.className = "review-item";
            reviewDiv.innerHTML = `
                <h3>${name}</h3>
                <p>${review}</p>
            `;
            reviewsContainer.appendChild(reviewDiv);
        });
    } catch (error) {
        console.error("Error fetching form responses:", error);
    }
}

// Load reviews on page load
document.addEventListener("DOMContentLoaded", fetchGoogleFormResponses);

document.addEventListener("DOMContentLoaded", function() {
    const backgroundContainer = document.querySelector(".background-container");
function createMovingElement() {
        const element = document.createElement("div");
        element.classList.add("moving-element");
        
        const size = Math.random() * 50 + 20;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`;
        element.style.position = "absolute";
        element.style.top = `${Math.random() * 100}vh`;
        element.style.left = `${Math.random() * 100}vw`;
        element.style.borderRadius = Math.random() > 0.5 ? "50%" : "0%";
        element.style.animation = `move ${Math.random() * 10 + 5}s linear infinite alternate, fadeInOut 4s ease-in-out infinite alternate`;
        
        backgroundContainer.appendChild(element);
    }
    
    for (let i = 0; i < 15; i++) {
        createMovingElement();
    }
});

/* Additional CSS for animations */
@keyframes move {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-20px);
    }
}

@keyframes fadeInOut {
    from {
        opacity: 0.3;
    }
    to {
        opacity: 1;
    }
}
