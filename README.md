# Epic Journeys Travel Blog Project

![Epic Journeys Blog](./screenshot.png)

Welcome to the Epic Journeys Travel Blog Project! This project aims to provide a platform where travel enthusiasts can share their experiences, adventures, and tips with the community.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [License](#license)

## Introduction

Welcome to the Epic Journeys Travel Blog, your ultimate destination for travel enthusiasts seeking inspiration, tips, and firsthand experiences from around the globe. Whether you're a seasoned traveler or someone planning their first adventure, our blog is designed to ignite your wanderlust and provide valuable insights into destinations near and far.

## Features

1. Blog Posts
Inspiring Travel Stories: Share captivating narratives and personal experiences from your travels.
Destination Guides: Provide comprehensive guides to popular and off-the-beaten-path destinations.
Travel Tips and Advice: Offer practical tips on packing, budgeting, safety, and more.

2. Interactive Community
User Comments and Feedback: Allow readers to engage by leaving comments and sharing their own travel stories.
Discussion Forums: Host forums where travelers can ask questions, seek recommendations, and connect with fellow adventurers.

3. Multimedia Content
Stunning Photography: Showcase high-quality images of landscapes, landmarks, and cultural experiences.
Video Content: Include travel vlogs, destination highlights, and interviews with travelers.

4. Search and Navigation
Search Functionality: Enable users to search for articles by keywords, destinations, or categories.
Tagging and Categorization: Organize content using tags and categories for easy navigation.

5. Newsletter Subscription
Email Updates: Offer a newsletter to keep subscribers informed about new blog posts, travel deals, and updates.

6. Responsive Design
Mobile-Friendly: Ensure the website is optimized for various devices, providing a seamless experience on smartphones, tablets, and desktops.

7. About Section
Mission Statement: Explain the purpose and vision of your travel blog.
Team Introduction: Introduce the creators and contributors behind the blog.

## Technologies Used

### Frontend Side
- **HTML**: Standard markup language for creating web pages
- **CSS**: Style sheet language for styling HTML elements
- **JavaScript**: Functionality and interactiveness of the website

### Backend Side
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework for Node.js
- **Sequelize**: Promise-based Node.js ORM for PostgreSQL
- **bcrypt**: Library for hashing passwords
- **jsonwebtoken**: Library for generating JSON Web Tokens (JWTs)
- **MySQL**: Relational database management system


## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- MySQL installed locally or access to a MySQL server
- npm or yarn package manager

### Backend Setup

1. **Clone the repository**

   ```bash
   git clone the github link
   cd github repository

2. **Install dependancies**
    ``` 
    cd backend   # Navigate to the backend directory
    npm install  # Install backend dependencies

3. **Database Configuration**
    ```
    Create a MySQL database for the project.
    Configure your database credentials:
    DB_HOST=localhost
    DB_USER=(your_username)
    DB_PASSWORD=(your_password)
    DB_DATABASE=(Database name)


4. **Run Migrations**
    ```
    npx sequelize-cli db:migrate

5. **Start Backend Server**
    ```
    node app.js
    The backend server should now be running on http://localhost:3800.

## License

Specify the license under which your project is distributed. For example:
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.