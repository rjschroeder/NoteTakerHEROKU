const router = require("express").Router();
const { readNotes, addNote} = require("../db/dbHandler");

//standard routes code
router.get("/notes", (req, res) => {
    readNotes()
    .then((response) => {
        return res.json(response)
    })
    .catch((err) => {
        res.status(500).json(err)
    });
})

router.post("/notes", (req, res) => {
    addNote(req.body)
    .then((response) => {
        res.json(response)
    })
    .catch((err) => {
        res.status(500).json(err)
    });
})

module.exports = router