var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet her at the bus station',
	compleated: false
	},
	{
	id: 2,
	description: 'return home',
	compleated: false
	},
	{
	id: 3,
	description: 'Goto sleep',
	compleated: false
	}];


app.get('/',function (req,res) {
	res.send('Todo API Root');
});

app.listen(PORT,function(){
	console.log('Express listining on PORT: '+ PORT + '!');
});  


// app.get('/todos/:id',function (req, res) {
// 	var todoId = req.params.id;
// 	var matchedId;

// 	res.send('Asking for todo with id of '+ req.params.id);
// });

// app.get('/todos',function (res, req) {
// 	res.json(todos);
// });
