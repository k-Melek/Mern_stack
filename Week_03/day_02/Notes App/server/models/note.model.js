const mongoose = require ("mongoose")


const NoteSchema = new mongoose.Schema( {
    title:{
        type:String,
        required:[true,"Note Title is required ❌❌❌"],
        minLength: [3,"Note title must be greater than 3 characters!"]
    },
    content:{
        type:String,
        required:[true,"Note content is required ❌❌❌"],
        minLength: [10,"Note content must be greater than 10 characters!"]
    },
    isImportant:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

// const Note = mongoose.model('Note', NoteSchema);
// module.exports = Note

module.exports = mongoose.model('Note', NoteSchema);