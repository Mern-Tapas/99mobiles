import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    userType: {
        type: String,
    },
    image: {
        type: String,
    },
    tokens: [{
        token: { type: String }
    }]
});


// UserSchema.methods.genToken = async function (next) {
//     const token = sign({ _id: this._id.toString() }, 'thesecratekeyforjwt')

//     this.tokens = this.tokens.concat({ token })
//     await this.save()

//     return token


// }


const userModel = mongoose.models.usermodel || mongoose.model('usermodel', UserSchema);

export default userModel