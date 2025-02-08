// Google Sheets CSV URL (replace with your actual URL)
const googleSheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHkcihZDIxeRRmtfyEv37W3hGQhkTYyPAh7K1ebVrGHB6YIEZbu3EoFX_vjTMYNvYFHePX9UMVM9ai/pub?gid=758914046&single=true&output=csv";

// Function to fetch and display responses dynamically
async function fetchGoogleFormResponses() {
    try {
        const response = await fetch(googleSheetURL);
        const data = await response.text();
        const rows = data.split("\n").slice(1); // Skip header row

        const reviewsContainer = document.getElementById("reviews-container");
        reviewsContainer.innerHTML = ""; // **Clear old reviews before adding new ones**

        rows.forEach(row => {
            const columns = row.split(",");
            const name = columns[1]?.trim(); // Adjust index based on Google Sheet structure
            const review = columns[2]?.trim();

            if (name && review) { // Ensure both fields are valid
                const reviewDiv = document.createElement("div");
                reviewDiv.className = "review-item";
                reviewDiv.innerHTML = `
                    <h3>${name}</h3>
                    <p>${review}</p>
                `;
                reviewsContainer.appendChild(reviewDiv);
            }
        });
    } catch (error) {
        console.error("Error fetching form responses:", error);
    }
}

// Refresh reviews every 30 seconds to keep it updated
setInterval(fetchGoogleFormResponses, 30000);

// Load reviews on page load
document.addEventListener("DOMContentLoaded", fetchGoogleFormResponses);
