import 'dotenv';
import 'dotenv/config';
import mongoose from 'mongoose';

const connect = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(
            "mongodb+srv://mrain00:Lacaverna1@cluster0.ghzsz.mongodb.net/ArgentinaPrograma?retryWrites=true&w=majority",
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        );
        console.log('Connected to database');
    } catch (error) {
        console.log(error.message);
    }
};

connect();