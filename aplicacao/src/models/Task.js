const  {Schema, model}  =  require('mongoose');

const Taskchema = new Schema({

    status: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,

    },
    user: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = model('tasks', Taskchema);

