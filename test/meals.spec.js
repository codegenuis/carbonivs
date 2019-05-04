import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import meals from '../utils/dummyData';
import Meals from '../models/Meals';

const should = chai.should();

chai.use(chaiHttp);
describe('Meals', () => {
  describe('/GET meals', () => {
    it('it should GET all the meals', (done) => {
      chai.request(app).get('/api/v1/meals').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
  });
  describe('/POST meal', () => {
    it('it should post a meal', (done) => {
      let meal = {
        id: 4,
        name: 'White Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN'
      }
      chai.request(app).post('/api/v1/meals/add').send(meal).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Meal successfully added!');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('size');
        res.body.data.should.have.property('price');
        res.body.data.should.have.property('currency');
        done();
      });
    });
  });
  describe('/PUT/:id meal', () => {
    it('it should UPDATE a meal given the id', (done) => {
      let meal = new Meals({
        id: 1,
        name: 'Jollof Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN'
      })
        chai.request(app).put(`/api/v1/meals/edit/1`).send(meal).end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Meal updated!');
          done();
        });
    });
  });
  describe('/DELETE/:id meal', () => {
    it('it should DELETE a meal given the id', (done) => {
      let meal = new Meals({
        id: 1,
        name: 'Jollof Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN'
      })
        chai.request(app).delete(`/api/v1/meals/delete/1`).send(meal).end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Meal Deleted!');
          done();
        });
    });
  });
});
