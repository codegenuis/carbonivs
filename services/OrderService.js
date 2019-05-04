import Orders from '../models/Orders';
import dummyData from '../utils/dummyData';

export default class OrderService {
  constructor() {
    this.orders = dummyData.orders;
  }

  fetchAllOrders() {
    // When we retrieve the data, it will be of type Meals
    // Hence, this simulation here.
    return this.orders.map((data) => {
      const order = new Orders();
      order.id = data.id;
      order.name = data.name;
      order.meal = data.meal;
      return order;
    });
  }

  getAll() {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    return this.fetchAllOrders();
  }

  addOrder(order) {
    this.orders.push(order);
    return order;
  }

  editOrder(order, id) {
    const updatedOrder = this.orders.find(data => data.id === Number(id));
    updatedOrder.name = order.name;
    updatedOrder.price = order.price;
    updatedOrder.quantity = order.quantity;
    updatedOrder.currency = order.currency;
    return order;
  }

  deleteOrder(id) {
    const deleteOrder = this.orders.find(order => order.id === Number(id));
    const index = this.orders.indexOf(deleteOrder);
    if (index > -1) {
      this.orders.splice(index, 1);
    }
    return this.orders;
  }
}
