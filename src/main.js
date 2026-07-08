import "./style.css";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

const app = document.querySelector("#app");

app.innerHTML = "<p>Loading today's astronomy picture...</p>";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    let media;

    if (data.media_type === "image") {
      media = `
        <img
          src="${data.url}"
          alt="${data.title}"
          style="max-width:100%; border-radius:10px;"
        >
      `;
    } else if (data.url.includes("youtube")) {
      media = `
        <iframe
          src="${data.url}"
          width="800"
          height="450"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `;
    } else {
      media = `
        <video controls style="max-width:100%;">
          <source src="${data.url}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;
    }

    app.innerHTML = `
      <h2>${data.title}</h2>
      ${media}
      <p>${data.explanation}</p>
    `;
  })
  .catch(error => {
    app.innerHTML = `
      <h2>Something went wrong</h2>
      <p>${error.message}</p>
    `;
  });