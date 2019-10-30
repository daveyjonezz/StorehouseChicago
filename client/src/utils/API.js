import axios from "axios";

export default {
//Saves Note of Encouragement
createNote: function(noteData){
  console.log(noteData)
  return axios.post("/api/notes", noteData)
},
email: function(email){
  console.log(email)
  return axios.post("/api/email", email)
}
};
