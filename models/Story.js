const mongose = require("mongoose");

const StorySchema = new mongose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "public",
    enum: ["public", "private"],
  },
  user: {
    type: mongose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongose.model("Story", StorySchema);
