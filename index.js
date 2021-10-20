const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require ('dotenv')
const routers = require('./routes/api')



const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use('/api',routers)
dotenv.config()






//databse config
const PORT = 5000 ;
const CONNECTION_URL = process.env.CONNECTION_URL ; 

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true , useUnifiedTopology : true})
    .then(() => app.listen(PORT , () => console.log(`Server running on port : ${PORT} `)))
    .catch((eroor) => console.log(eroor));


