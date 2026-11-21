const express = require('express');
require('dotenv').config()
 require('./database/database')
const PORT = process.env.PORT || 1000;
const departmentRouter = require('./routes/departmentRouter')
const courseRouter = require('./routes/courseRouter')
const app = express();
app.use(express.json());
 
app.use(departmentRouter)
app.use(courseRouter)
 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})