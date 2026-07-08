# Daily APOD

A small project I built using JavaScript and the NASA Astronomy Picture of the Day (APOD) API.

Every day NASA publishes a new astronomy image (or sometimes a video!) along with an explanation written by astronomers. This website automatically fetches the latest APOD and displays it in a clean interface.

It was a fun way to learn how to work with APIs, asynchronous JavaScript, environment variables, and deploying a Vite project to GitHub Pages.

---

## Features

- Fetches NASA's Astronomy Picture of the Day
- Displays both images and videos
- Shows the title and full explanation
- Loading state while data is being fetched
- Basic error handling if something goes wrong
- Responsive layout 

---

## Built With

- HTML
- CSS
- JavaScript
- Vite
- NASA APOD API

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/Theuser1211/DailyAPOD.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_NASA_API_KEY=YOUR_API_KEY
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal.

---

## Deployment

This project is deployed using GitHub Pages.

Build the project with:

```bash
npm run build
```

Then deploy the generated `dist` folder (or use GitHub Actions).

## What I Learned

This project helped me understand:

- Making API requests with `fetch()`
- Working with Promises using `.then()`
- Reading environment variables with Vite
- Updating the DOM using JavaScript
- Handling different API responses (images vs videos)
- Deploying a frontend project to GitHub Pages

---

## API

This project uses NASA's public Astronomy Picture of the Day API.

https://api.nasa.gov/

---

## Acknowledgements

Thanks to NASA for providing the APOD API and making space data freely available for developers and students to build with.