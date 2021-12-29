const express = require('express');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const app = express( );
const authRouter = require('./authRouter')

app.use(express.json());
app.use('/auth', authRouter)
const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://tchirkoov:789456as789@auth.bpurv.mongodb.net/frontstage?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`server started on port:${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()