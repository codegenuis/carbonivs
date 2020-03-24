import models from '../models';

export default class WithdrawalService {
  constructor() {
    this.withdrawal = models.withdrawal;
  }

  getAll(email) {
    // Call to ORM
    return this.withdrawal.findAll({
        where: {
            investorid: email
        }
    });
  }

  create(data){
    return this.withdrawal.create(data);
  }

}
