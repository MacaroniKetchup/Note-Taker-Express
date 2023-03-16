const router = require('express').Router();
const {createNewNote, updateDb} = require("../../lib/notes");
const { v4: uuidv4 } = require('uuid');
const {notes} = require("../../db/db.json");

// GET notes
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
});
// POST notes
router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});
// DELETE notes
router.delete("/notes/:id", (req, res) => {
    const params = req.params.id
    updateDb(params, notes);
    res.redirect('');
});

module.exports = router;