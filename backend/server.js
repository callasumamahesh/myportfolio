const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const ConnectDB = require('./dataBase');
dotenv.config();
const User = require('./models/newUserModel')
ConnectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (req,res) => {
    console.log(req.query)
    try {
        const data = await User.findOne(req.query)
        if(data){
            res.status(200).json({data:data})
        }
        else{
            res.status(200).json({data:'User Not Found'})
        }
    } catch (error) {
        console.log(error)
    }
})

app.listen(8000,() => console.log('Server listening'))