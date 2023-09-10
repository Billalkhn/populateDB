import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  favoriteColor: string;
  connections: IUser["_id"][];
}

const userSchema = new Schema<IUser>({
  firstName: String,
  lastName: String,
  favoriteColor: String,
  connections: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.model<IUser>("User", userSchema);
