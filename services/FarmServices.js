import models from '../models';


export default class FarmsService {
    constructor() {
        this.Farms = models.farms;
      }
    getAll() {
        return this.Farms.findAll();
    }
}