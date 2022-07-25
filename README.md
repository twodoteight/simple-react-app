# Simple Announcement Board React App

Users can add announcements to a board and let everybody know what is on their mind. The app uses a mock backend that stores the list of announcements as a JSON file.

## Usage

### Install dependencies

```
npm install
```

### Run React dev server (http://localhost:3000)

```
npm start
```

Runs the app in the development mode.\
Open http://localhost:3000 to view it in your browser.

### Run the JSON server (http://localhost:5000)

```
npm run server
```

Due to time constraints, json-server, a REST API backend emulator was used.\
End-points can be accessed using the url http://localhost:5000 like so:

http://localhost:5000/posts

http://localhost:5000/posts/${id}

### To build for production

```
npm run build
```

### Disclaimers

- A simple in-memory json file, "db.jason" acts as the database. It can be manipulated to test the system.

- Could not find time to include tests and a full fledged back-end. I was going to use Express.js or Spring Boot.
