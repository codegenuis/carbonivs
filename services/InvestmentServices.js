import models from '../models';

export default class TransactionService {
  constructor() {
    this.transcation = models.transaction;
  }

  getAll(email) {
    // Call to ORM
    return this.transcation.findAll({
        where: {
            useremailx: email
        }
    });
  }

}
