const fs = require("fs");
const path = require("path");

module.exports = app => {

    fs.readFile("db/db.json", "utf8", (err,data) => {
        if (err) throw err;

        var notes = JSON.parse(data);

        // API =======================================================================
        // Setting up the GET API route
        app.get('/api/notes', function(req,res) {
            res.json(notes);
        });
        // Setting up the POST API route
        app.post('/api/notes', function(req,res) {
            let noteNew = req.body;
            notes.push(noteNew);
            updateDb();
            return console.log("Added you new note!! (-^_^-); : "+noteNew.title);
        });
        // GET a note with id
        app.get('/api/notes/:id', function(req,res) {
            res.json(notes[req.params.id]);
        });
        // DELETE a note with id
        app.delete('api/notes:id', function(req,res) {
            notes.splice(req.params.id, 1);
            updateDb;
            console.log("Deleted a note with the id "+req.params.id);
        });
        // API END ===================================================================
        
        // ROUTES ====================================================================
        
        // GET notes.html to display
        app.get('/notes', function (req,res) {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });
        
        // GET index.html to display
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        // updating db.json when a new note is added / deleted
        function updateDb() {
            fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err =>{
                if (err) throw err;
                return true;
            });
        }
        
        // ROUTES END ================================================================
    });

}