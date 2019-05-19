import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  ssn: { type: String, required: true },
  dob:{ type: String, required: true },
  phonenumber:{ type: Number, required: true },
  occupation:{ type: String, required: true },
  city:{ type: String, required: true },
  state:{ type: String, required: true },
  zipcode:{ type: Number, required: true },
  address:{ type: String, required: true },
  email:{ type: String, required: true },
  taxStatus:{ type: String, required: true },
  obamaInsurance:{ type: String, required: true },
  taxDependent:{ type: String, required: true },
  headOfHousehold:{ type: String, required: true },
  irsPin:{ type: String, required: true },
  dependentDOB:{ type: String, required: true },
  dependentDuration:{ type: String, required: true },
  dependentName:{ type: String, required: true },
  dependentRelationship:{ type: String, required: true },
  dependentSSN:{ type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
