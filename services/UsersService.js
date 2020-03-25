import models from '../models';

export default class UsersService {
  constructor() {
    this.Users = models.users;
  }

  getAll() {
    // Call to ORM
    return this.Meals.findAll();
  }

  addUser(user) {
    return this.Users.create(user);
  }

  editUser(user, id) {
    return this.Users.update(user, { returning: true, where: { user_email: id } });
  }
}
