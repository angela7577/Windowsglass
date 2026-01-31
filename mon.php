<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reddy Book - Contact Us</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #000;
      overflow: hidden;
    }

    .image-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .clickable-link {
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }

    .responsive-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      cursor: pointer;
    }

    /* For mobile devices - ensure image fits properly */
    @media (max-width: 768px) {
      body {
        height: 100vh;
      }
      
      .responsive-image {
        max-width: 100%;
        max-height: 100vh;
      }
    }

    /* For tablets */
    @media (min-width: 769px) and (max-width: 1024px) {
      .responsive-image {
        max-width: 100%;
        max-height: 100vh;
      }
    }

    /* For desktop */
    @media (min-width: 1025px) {
      .responsive-image {
        max-width: 100%;
        max-height: 100vh;
      }
    }
  </style>
</head>
<body>
  <div class="image-container">
    <a href="https://wa.link/99exch1" class="clickable-link" target="_blank" rel="noopener noreferrer">
      <img src="reddybook.jpg" alt="Reddy Book - Click to WhatsApp" class="responsive-image">
    </a>
  </div>
</body>
</html>
