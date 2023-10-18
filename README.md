# NewsCravers

NewsCravers is a web application that allows users to explore the latest news articles from various sources. It is powered by the News API from newsapi.org and built with Node.js, React.js, and styled with Bootstrap for a modern and responsive user experience.

![NewsCravers Screenshot](https://github.com/yashsonisde2003/NewsCravers-React/blob/main/src/components/images/demo.png)

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse and search for the latest news articles from various sources.
- Filter news articles by category.
- View detailed information about each news article.
- User-friendly and responsive design.
- Powered by the News API from newsapi.org.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.
- API key from [newsapi.org](https://newsapi.org) for accessing their API create a .env.local file in root directory and store api key in this REACT_APP_API_KEY .

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/news-cravers.git
   ```

2. Navigate to the project directory:

   ```bash
   cd news-cravers
   ```

3. Install the dependencies for the Node.js server:

   ```bash
   npm install
   ```
4. Create a `.env` file in the server directory and add your API key:

   ```plaintext
   REACT_APP_API_KEY=your-api-key-here
   ```

5. Start the React.js client:

   ```bash
   cd ../client
   npm start
   ```

The application will be running locally at `http://localhost:3000`.

## Usage

1. Browse the latest news articles on the homepage.
2. Use the navigation menu to filter news articles by category.
3. Click on more info in any article to view detailed information.

## API Documentation

For detailed information on the API endpoints and responses provided by [newsapi.org](https://newsapi.org), please refer to their [official documentation](https://newsapi.org/docs).

## Technologies Used

- Node.js for the server-side logic.
- React.js for the client-side user interface.
- Bootstrap for styling the application.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the project.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them.
4. Submit a pull request with a clear description of your changes.
