import Menu from '../models/Menu';
import dummyData from '../utils/dummyData';

export default class MenuService {
  constructor() {
    this.menu = dummyData.menu;
  }

  fetchAllMeals() {
    // When we retrieve the data, it will be of type Meals
    // Hence, this simulation here.
    return this.menu.map((data) => {
      const menu = new Menu();
      menu.id = data.id;
      menu.name = data.name;
      menu.size = data.size;
      menu.price = data.price;
      menu.currency = data.currency;
      return menu;
    });
  }

  getAll() {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    return this.fetchAllMeals();
  }

  addMenu(menu) {
    this.menu.push(menu);
    return menu;
  }

  deleteMeal(id) {
    const deleteMeal = this.menu.find(menu => menu.id === Number(id));
    const index = this.menu.indexOf(deleteMeal);
    if (index > -1) {
      this.menu.splice(index, 1);
    }
    return this.menu;
  }
}
