# Portfolio Website

This is a personal portfolio website built with React.

## Deployment Instructions

### Netlify Deployment

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. The site will automatically deploy using the configuration in `netlify.toml`

### Render Deployment

1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Set the following:
   - Build Command: `cd frontend && npm install && npm run build`
   - Publish Directory: `frontend/build`

## Local Development

1. Install dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```
