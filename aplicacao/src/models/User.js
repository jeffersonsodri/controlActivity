const { Schema, model } =  require('mongoose');

const UserSchema = new Schema({

    name: {
        type: String,
        require: true,
    },
    task:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    createAt: {
        type: Date,
        default: Date.now,
    }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;