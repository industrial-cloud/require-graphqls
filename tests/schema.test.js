const chai = require('chai');
const expect = chai.expect;

require('../index');

describe('# Read graphql schema', function() {
  it('Read file .graphqls should extract a string', function(done) {
    const schema = require('./schema.graphqls');
    expect(schema).to.be.a('string');
    console.log(schema);
    done()
  });
});