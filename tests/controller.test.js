const chai = require('chai');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const app = require('../index');

describe('controller tests', function() {

        it('should return Hello, World!', function(done) {
            chai.request(app).get('/').end(function(error, response) {
                chai.expect(error).to.be.null;
                chai.expect(response).to.be.not.null;
                chai.expect(response).to.have.property("status", 418);
                chai.expect(response).to.have.property("text", "Hello, World!");
                done(); // test done
            });
        })
});