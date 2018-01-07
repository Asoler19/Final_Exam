module.exports = function (app) {
  
    var Note = require('../models/note');

    app.get('/', function (req, res) {
        Note.find({}, function(err,notes){
            if(err) console.log(err);

            console.log(notes);
            return res.render('index.ejs',{
                notes: notes
            });
        });
    });
    
    app.post('/create-note', function (req, res) {
        var newNote = new Note();

        newNote.author = req.body.author;
        newNote.date = req.body.date;
        newNote.description = req.body.description; 
        
        newNote.save();
        console.log("working ", req.body);
        res.redirect('/');
    });
}