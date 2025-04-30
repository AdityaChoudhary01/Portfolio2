# MERN Portfolio
# LIVE DEMO https://adityachoudharyyportfolio.netlify.app/
This is a full animated, colorful MERN portfolio project with backend (Node.js, Express, MongoDB) and frontend (React with animations).

## Project Structure

```
mern-portfolio/
  backend/
    models/
    routes/
    server.js
    .env
  frontend/
    src/
      components/
      App.js
      index.js
    package.json
  README.md
```

## How to Run

### Backend

1. Setup MongoDB (local or MongoDB Atlas).
2. Add your `.env` file in `/backend` with your `MONGO_URI`.
3. From `/backend`, run:
   ```
   npm install
   node server.js
   ```
   Default port: 5000

### Frontend

1. From `/frontend`, run:
   ```
   npm install
   npm start
   ```
   Typically runs on [localhost:3000](http://localhost:3000).

## Features

- Animated particles background
- Projects listing fetched from backend
- Contact form posting to backend
- Colorful, animated UI with styled-components and framer-motion

## Next Steps

- Add your own projects via POST to `/api/projects`
- Customize animations, colors, add more pages
- Deploy to your favorite hosting platform

Enjoy building your animated MERN portfolio!
