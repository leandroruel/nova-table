import chai from 'chai';
import Datepicker from '../lib/@leandroruel/datepicker-bootstrap';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given the instance', () => {
  before(() => {
    lib = new Datepicker();
  });

  describe('when i need of the date format', () => {
    it('should return the format', () => {
      expect(lib.options.format).to.be.equal('Y-m-d');
    });
  });
});
