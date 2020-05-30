const { db } = require("../util/admin")

exports.postOnePerson = (req, res) => {
	if(req.method !== 'POST'){
		return res.status(400).json({error: 'method not allowed'});
	}
	const newPerson = {
		name: req.body.name,
		title: req.body.title,
		bio: req.body.bio,
	}
	db.collection('people').add(newPerson).then(doc => {
		res.json({message: `document ${doc.id} created successfully`})
	}).catch(err => {
		res.status(500).json({error: "something went wrong"});
		console.log(err)
	})
}