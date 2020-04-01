import models from '../models';


export default class FarmsService {
    constructor() {
        this.Post = models.posts;
      }
    getAll() {
        return this.Post.findAll();
    }
}