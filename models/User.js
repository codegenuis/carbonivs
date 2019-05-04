import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  eligibility: { type: String, required: true },
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  middlename: { type: String},
  cardfirstname: { type: String },
  cardlastname: { type: String, },
  cardmiddlename: { type: String }
});

module.exports = mongoose.model('User', userSchema);
