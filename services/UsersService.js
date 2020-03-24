import models from '../models';

export default class UsersService {
  constructor() {
    this.Users = models.users;
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
    return this.Users.create(user);
  }

  editMeal(meal, id) {
    return this.Meals.update(meal, { returning: true, where: { id } });
  }

  deleteMeal(id) {
    return this.Meals.destroy({
      where: { id },
    });
  }
}
