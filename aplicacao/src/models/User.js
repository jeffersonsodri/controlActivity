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

module.exports = model('User', UserSchema);
