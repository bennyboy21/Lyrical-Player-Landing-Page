// document.addEventListener('DOMContentLoaded', () => {
//     // Select both CTA buttons
//     const connectButtons = [
//         document.getElementById('connectSpotifyBtn'),
//         document.getElementById('cardConnectSpotifyBtn')
//     ];

//     // --- SPOTIFY OAUTH CONFIGURATION ---
//     // IMPORTANT: Replace these placeholders with your actual application credentials
//     const CLIENT_ID = 'YOUR_SPOTIFY_CLIENT_ID'; 
//     const REDIRECT_URI = 'http://localhost:8080/callback'; // Your actual callback URL
//     // Scopes needed for displaying the current song and its lyrics
//     const SCOPES = 'user-read-currently-playing user-read-playback-state'; 
//     // You may need additional scopes if you intend to control playback (e.g., user-modify-playback-state)

//     /**
//      * Constructs and redirects to the Spotify Authorization URL.
//      */
//     function redirectToSpotifyAuthorize() {
//         const authUrl = 'https://accounts.spotify.com/authorize?' +
//             'client_id=' + encodeURIComponent(CLIENT_ID) +
//             '&response_type=code' +
//             '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
//             '&scope=' + encodeURIComponent(SCOPES);

//         window.location = authUrl;
//     }

//     // Attach the function to the click events of the buttons
//     connectButtons.forEach(button => {
//         if (button) {
//             button.addEventListener('click', redirectToSpotifyAuthorize);
//         }
//     });

//     // --- Basic Feature/Scroll Logic (Optional) ---
//     // Smooth scrolling for navigation links
//     document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });

// --- Custom Cursor Logic (New Addition for Movement and Hover Effect) ---
const customCursor = document.getElementById('custom-cursor'); 

// 1. Movement Logic: Follow the mouse
document.addEventListener('mousemove', (e) => {
    // Updates the position of the cursor element
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});


// 2. Hover Logic: Change cursor appearance over interactive elements

// Select all elements that should trigger a cursor change (links, buttons, headers, cards)
const targets = document.querySelectorAll(
    'a, button, h1, h2, h3, .chrome-card'
);

// Add event listeners to each target element
targets.forEach(target => {
    // When the mouse hovers over the target
    target.addEventListener('mouseover', () => {
        // Add the 'hover-target' class to the custom cursor
        customCursor.classList.add('hover-target');
    });

    // When the mouse leaves the target
    target.addEventListener('mouseout', () => {
        // Remove the 'hover-target' class from the custom cursor
        customCursor.classList.remove('hover-target');
    });
});