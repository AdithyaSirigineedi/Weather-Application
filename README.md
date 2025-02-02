# 🌦️ Weather Application

A simple and responsive weather application built using **HTML, CSS, and JavaScript**. This frontend-only project fetches real-time weather data from an external API and displays it in an elegant UI.

---

## ✨ Features
✅ Search for weather by city name  
✅ Displays temperature, humidity, wind speed, and weather conditions  
✅ Dynamic background changes based on weather conditions  
✅ Responsive design for mobile and desktop users  

---

## 🛠️ Technologies Used
- **HTML** → Structure of the app  
- **CSS** → Styling and responsiveness  
- **JavaScript** → Fetching and displaying weather data  

---

## 🚀 Getting Started

### 1️⃣ Clone the repository  
 https://github.com/AdithyaSirigineedi/Weather-Application.git
 
# 🌍 API Information
This app fetches weather data from OpenWeatherMap API. Below is how it works:

🔑 Get Your API Key
Go to OpenWeatherMap.
Sign up for a free account.
Generate your API key from the dashboard.


# 🚧 Challenges Faced & Solutions

🌍 1. CORS Policy Issue
Problem: When making API requests, the browser blocked them due to CORS restrictions.
Solution:
Ensured the API request used https:// instead of http://.
Used OpenWeatherMap's proper API endpoint, which includes correct CORS headers.
🏙️ 2. Incorrect City Name Display
Problem: Sometimes, the API returned unexpected city names or incorrect locations.
Solution:
Used latitude & longitude instead of relying only on the city name.
Implemented reverse geocoding to accurately map coordinates to city names.
📱 3. Responsive Design Issues
Problem: The weather app broke on smaller screens due to text and layout issues.
Solution:
Used CSS media queries to make the app mobile-friendly.
Adjusted font sizes, margins, and grid layouts for better responsiveness.
🌐 4. API Rate Limits
Problem: OpenWeatherMap has a rate limit on free accounts, causing temporary failures.
Solution:
Added a loading message and an error handling function to notify users.
Suggested users create their own API keys to avoid exceeding limits.
⚡ 5. Delay in Fetching Data
Problem: Sometimes, weather data took too long to appear after searching.
Solution:
Used async/await in JavaScript to ensure the UI waits for the response.
Implemented a loading animation while fetching data.

