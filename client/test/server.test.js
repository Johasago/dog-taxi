const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../../server');
const expect = chai.expect;
chai.use(chaiHttp);
describe('Dogs', function() {
    before(function() {
      return runServer();
    });
    after(function() {
      return closeServer();
    });

    it('should list dogs on GET', function() {
        return chai.request(app)
          .get('/dogs/all')
          .then(function(res) {
            expect(res).to.have.status(200);
            res.body.forEach(function(item) {
              expect(item).to.be.a('object');
              expect(item).to.have.all.keys(
            'id', 'name', 'breed', 'dob', 'obedience', 'weight', 'image');
            });
          });
      });
    
     
    
  