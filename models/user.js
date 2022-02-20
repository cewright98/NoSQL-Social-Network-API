const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema with username, email, thoughts, and friends
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// create virtual for length of user's friends array
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = mongoose.model('User', UserSchema);

module.exports = User;