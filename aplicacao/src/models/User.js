const { Schema, model } =  require('mongoose');

const UserSchema = new Schema({

    name: {
        type: String,
        require: true,
    },
    task:[{
        type: Schema.Types.ObjectId,
        ref: 'tasks'
    }],
    createAt: {
        type: Date,
        default: Date.now,
    }

});

<<<<<<< HEAD
module.exports = model('User', UserSchema);
=======
const User = mongoose.model('User', UserSchema);

module.exports = User;
>>>>>>> e2b303c331814f711f8747c14cf5ebf73552f43a
