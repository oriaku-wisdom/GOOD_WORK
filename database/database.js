const  mongoose = require('mongoose');
require('dotenv').config()
const URI = process.env.MONGODB_URI
mongoose.connect(URI)
  .then(()=> {
   console.log('connection to database successfully')
})
.catch((error) => {
    console.log('connection to database failed: ', error.message);
});