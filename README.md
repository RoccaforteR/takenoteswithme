# Note Taker Application

This application allows users to write and save notes, helping them organize thoughts and keep track of tasks.

## User Story

As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Bonus](#bonus)
- [File Structure](#file-structure)
- [License](#license)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://example.com/your-repo.git

2. Navigate to the project directory:
   ```bash
   cd your-repo

3. Install dependencies:
   ```bash
   npm i

4. Create an empty db.json file in the root directory:
   ```bash
   touch db.json

5. Start the application:
   ```bash
   npm start

6. Open your browser and go to http://localhost:3001.

## Usage

* Open the Note Taker application in your browser.
* Click on the "Get Started" button to navigate to the notes page.
* Existing notes are listed on the left, and you can enter a new note title and text on the right.
* Click the "Save Note" button to save a new note.
* Click an existing note to view or edit it.
* Use the "New Note" button to enter a new note.

## API Routes

* 'GET /api/notes': Retrieve all saved notes.
* 'POST /api/notes': Save a new note.
* 'DELETE /api/notes/:id': Delete a note by ID (Bonus).

## Bonus

The application includes a DELETE route:

* 'DELETE /api/notes/:id': Delete a note by ID.

## File Structure

* 'assets/': Contains CSS and JavaScript files.
* 'node_modules/': Node.js dependencies.
* 'public/': Public assets and HTML files.
* 'server.js: Express.js server file.
* 'db.json': JSON file for storing and retrieving notes.
* '.gitignore': Specifies files/directories to be ignored by Git.
* 'README.md': Documentation for the project.