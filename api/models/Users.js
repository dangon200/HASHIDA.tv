const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");

const UsersSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: [true, "The email is required"],
      unique: true,
      validator: (e) => {
        /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/gim.test(e);
      },
      rol: [{ type: Types.ObjectId, ref: "Rol" }],
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UsersSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const Users = model("Users", UsersSchema);

module.exports = { Users };
