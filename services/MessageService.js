import models from '../models';

export default class MessageService {
  constructor() {
    this.message = models.messages;
  }

  getAll(email) {
    // Call to ORM
    return this.message.findAll({
        where: {
            sendto: email
        }
    });
  }

}
