//importing required modules
const fs = require("fs");
const path = require("path");

//initialize a noteArray array for instantiation when dealing with promises
let noteArray = [];

//this function returns a promise, since reading a file takes some time to do
//if there is data in the JSON db, it will be parsed and returned
//if there is nothing in the db or invalid data, an empty array is returned
function parseNotes() {
    return new Promise(resolve => {
        fs.readFile("./db.json", "utf-8", (err, data) => {
            try {
                resolve(JSON.parse(data));
            } catch (err) {
                resolve([]);
            }
        })
    })
}

//async function to read saved notes
async function readNotes(){
    return await parseNotes();
}

//async function to add a note object to JSON db
async function addNote(note) {
    //gets stored notes and adds new note to array
    noteArray = await readNotes();
    noteArray.push(note);

    //writes new array to file
    fs.writeFile(path.join(__dirname, "./db.json"), JSON.stringify(noteArray), (err) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = {readNotes, addNote}
