const functions = require('firebase-functions');

const app = require('express')();

const { getAllBooks, postOneBook } = require("./handlers/books")

// Book Routes
app.get('/books', getAllBooks)
app.post('/book', postOneBook)

// Endorsement Routes

// People Routes

// Tag Routes

exports.api = functions.https.onRequest(app)