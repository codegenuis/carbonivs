import models from '../models';
import otpGenerator from 'otp-generator';

export default class OTPService {
  constructor() {
    this.otp = models.otp;
  }

  create() {
    return otpGenerator.generate(6, { upperCase: false, specialChars: false });
  }

  submit(req){
    return this.otp.create(req);
  }

  verify(email,code) {
    // Call to ORM
    return this.otp.findAll({
        where: {
            user_email: email
        }
    });
  }

  update(user, id) {
    return this.otp.update(user, { returning: true, where: { user_email: id } });
  }

}
