import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
});
export default mongoose.model("User", userSchema);
