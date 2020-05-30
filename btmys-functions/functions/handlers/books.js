const { db } = require("../util/admin")

exports.getAllBooks = (req, res) => {
	db.collection('books').orderBy('createdAt', 'desc').get().then(data => {
		const books = [];
		data.forEach(doc => {
			books.push({
				id: doc.id,
				amazonLink: doc.data().amazonLink,
				imageUrl: doc.data().imageUrl,
				twitterImageUrl: doc.data().twitterImageUrl,
				authorIds: doc.data().authorIds,
				createdAt: doc.data().createdAt,
				description: doc.data().description,
				dateId: doc.data().dateId,
				tagIds: doc.data().tagIds,
				title: doc.data().title
			})
		})
		return res.json(books)
	})
	.catch(err => console.log(err))
}

exports.postOneBook = (req, res) => {
	if(req.method !== 'POST'){
		return res.status(400).json({error: 'method not allowed'});
	}
	const newBook = {
		amazonLink: req.body.amazonLink,
		authorIds: req.body.authorIds,
		createdAt: new Date().toISOString(),
		imageUrl: req.body.imageUrl,
		twitterImageUrl: req.body.twitterImageUrl,
		description: req.body.description,
		dateId: req.body.dateId,
		tagIds: req.body.tagIds,
		title: req.body.title,
	}
	db.collection('books').add(newBook).then(doc => {
		res.json({message: `document ${doc.id} created successfully`})
	}).catch(err => {
		res.status(500).json({error: "something went wrong"});
		console.log(err)
	})
}