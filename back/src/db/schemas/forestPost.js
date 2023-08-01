// forestPost.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ForestPostSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      required: true,
    },

    // like: {
    //   type: Number,
    //   default: 0,
    // },
    // dislike: {
    //   type: Number,
    //   default: 0,
    // },
  },
  { timestamps: true, collection: 'forestPosts' },
);

const ForestPost = model('ForestPost', ForestPostSchema);

export default ForestPost;
