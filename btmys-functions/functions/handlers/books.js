const { db } = require("../util/admin")

exports.getAllBooks = (req, res) => {
	const books = []
	const people = []
	const endorsements = []
	const tags = []
	db.collection('books').orderBy('createdAt', 'desc').get().then(data => {
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
		return db.collection('people').get()
	})
	.then(data => {
		data.forEach(doc => {
			people.push({
				id: doc.id,
				bio: doc.data().bio,
				name: doc.data().name,
				title: doc.data().title
			})
		})
		return db.collection('endorsements').get()
	}).then(data => {
		data.forEach(doc => {
			endorsements.push({
				id: doc.id,
				body: doc.data().body,
				bookId: doc.data().bookId,
				isMain: doc.data().isMain,
				personId: doc.data().personId
			})
		})
		return db.collection('tags').get()
	}).then(data => {
		data.forEach(doc => {
			tags.push({
				id: doc.id,
				name: doc.data().name
			})
		})
		books.map(book => {
			return {
				id: book.id,
				amazonLink: book.amazonLink,
				imageUrl: book.imageUrl,
				twitterImageUrl: book.twitterImageUrl,
				authors: people.filter(person => book.authorIds.includes(person.id)),
				createdAt: book.createdAt,
				description: book.description,
				dateId: book.dateId,
				title: book.title,
				tags: tags.filter(tag => book.tagIds.includes(tag.id)),
				endorsements: endorsements.filter(endorsement => endorsement.bookId === book.id)
			}
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