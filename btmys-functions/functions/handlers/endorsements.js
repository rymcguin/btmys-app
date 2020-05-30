const { db } = require("../util/admin")

exports.postOneEndorsement = (req, res) => {
	if(req.method !== 'POST'){
		return res.status(400).json({error: 'method not allowed'});
	}
	const newEndorsement = {
		body: req.body.body,
		bookId: req.body.bookId,
		createdAt: new Date().toISOString(),
		isMain: req.body.isMain,
		personId: req.body.personId,
	}
	db.collection('endorsements').add(newEndorsement).then(doc => {
		res.json({message: `document ${doc.id} created successfully`})
	}).catch(err => {
		res.status(500).json({error: "something went wrong"});
		console.log(err)
	})
}