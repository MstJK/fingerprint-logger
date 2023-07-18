<!DOCTYPE html>
<html>
<head>
  <title>Loading...</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Style for loading message */
    #loading-message {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-size: 2rem;
      font-weight: bold;
      color: #333;
    }
  </style>
</head>
<body>
  <div id="loading-message">Loading...</div>

  <!-- Load log.js file -->
  <script src="log.js"></script>

  <script>
    // Hide loading message after log.js is loaded
    document.addEventListener("DOMContentLoaded", () => {
      document.getElementById("loading-message").style.display = "none";
    });
  </script>
</body>
</html>
