import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  avatarUrl: String,
  socialOnly: { type: Boolean, default: false }, //socialOnly=true ==깃허브 로그인을 함
  username: { type: String, required: true, unique: true },
  password: { type: String },
  name: { type: String, required: true },
  location: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: "comment"},],
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }]
});

userSchema.pre("save", async function() {
  if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 5); // this 는 유저와 같다 
  }
})

const User = mongoose.model("User", userSchema);
export default User; 