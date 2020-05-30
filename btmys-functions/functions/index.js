const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.getBooks = functions.https.onRequest((req, res) => {
	admin.firestore().collection('books').get().then(data => {
		const books = [];
		data.forEach(doc => {
			books.push(doc.data())
		})
		return res.json(books)
	})
	.catch(err => console.log(err))
})