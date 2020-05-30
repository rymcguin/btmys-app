const { db } = require("../util/admin")

exports.postOneTag = (req, res) => {
	if(req.method !== 'POST'){
		return res.status(400).json({error: 'method not allowed'});
	}
	const newTag = {
		name: req.body.name,
	}
	db.collection('tags').add(newTag).then(doc => {
		res.json({message: `document ${doc.id} created successfully`})
	}).catch(err => {
		res.status(500).json({error: "something went wrong"});
		console.log(err)
	})
}