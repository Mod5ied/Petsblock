//define and export a mongoose schema and model
import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;
//declare a mongoose schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  age: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  variety: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
//create a mongoose model
const UserModel = model("User", userSchema);

//export the router
export { UserModel };
