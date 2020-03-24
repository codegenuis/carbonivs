import models from '../models';

export default class TransactionService {
  constructor() {
    this.transcation = models.transaction;
  }

  getAll() {
    // Call to ORM
    return this.Meals.findAll();
  }

  get(id) {
    // -1 because we have our data in an array which starts at 0
    return this.fetchAllMeals()[id - 1];
  }

  addUser(user) {
    return this.transcation.create(user);
  }
}

