import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import Meals from '../models/Menu';
import meals from '../utils/dummyData';

const should = chai.should();

chai.use(chaiHttp);
describe('Menu', () => {
  describe('/GET menu', () => {
    it('it should GET all the menu', (done) => {
      chai.request(app).get('/api/v1/menu').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
  });
  describe('/POST menu', () => {
    it('it should post a menu', (done) => {
      let meal = {
        id: 1,
        name: 'White Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN'
      }
      chai.request(app).post('/api/v1/menu/add').send(meal).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Menu successfully added!');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('size');
        res.body.data.should.have.property('price');
        res.body.data.should.have.property('currency');
        done();
      });
    });
  });
  describe('/DELETE/:id menu', () => {
    it('it should DELETE a meal given the id', (done) => {
      let meal = new Meals({
        id: 1,
        name: 'Jollof Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN'
      })
        chai.request(app).delete(`/api/v1/menu/delete/1`).send(meal).end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Menu Deleted!');
          done();
        });
    });
  });
});
