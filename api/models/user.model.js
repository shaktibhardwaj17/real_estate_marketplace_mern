import mongoose from 'mongoose';
import { type } from 'os';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROEyLi3omde4r4e9WNp7g-S6G1dP3R3H384o3F9BtSFLzlxxJdSwa93z3wNQ&s",
    },
},{timestamps: true}); 

const User = mongoose.model('User', userSchema);

export default User;