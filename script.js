// Google Sheets CSV URL (Replace with your actual published link)
const googleSheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHkcihZDIxeRRmtfyEv37W3hGQhkTYyPAh7K1ebVrGHB6YIEZbu3EoFX_vjTMYNvYFHePX9UMVM9ai/pub?gid=758914046&single=true&output=csv";

// Function to fetch and display latest reviews dynamically
async function fetchGoogleFormResponses() {
    try {
        const response = await fetch(https://docs.google.com/spreadsheets/d/e/2PACX-1vTHkcihZDIxeRRmtfyEv37W3hGQhkTYyPAh7K1ebVrGHB6YIEZbu3EoFX_vjTMYNvYFHePX9UMVM9ai/pub?output=csv);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.text();
        const rows = data.split("\n").slice(1); // Skip the header row

        const reviewsContainer = document.getElementById("reviews-container");
        reviewsContainer.innerHTML = ""; // ✅ Clear previous reviews before adding new ones

        rows.forEach(row => {
            const columns = row.split(",");
            if (columns.length < 3) return; // ✅ Prevents errors if data is missing

            const name = columns[1]?.trim();  // Adjust index based on your Sheet structure
            const review = columns[2]?.trim();

            if (name && review) {
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

// Load reviews when the page loads
document.addEventListener("DOMContentLoaded", fetchGoogleFormResponses);

// Refresh reviews every 30 seconds to keep them updated
setInterval(fetchGoogleFormResponses, 30000);
