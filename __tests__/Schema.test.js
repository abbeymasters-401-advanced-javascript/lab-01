const SchemaValidator = require('../lib/Schema');
const errors = require('../lib/Errors');

describe('Schema', () => {

  const personSchema = { 
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    married: { type: 'boolean' },
    kids: { type: 'number' }
  };

  const schemaValidator = new SchemaValidator(personSchema);
  
  const newModel = {
    firstName: 'abbey',
    lastName: 'masters',
    married: false,
    kids: 0
  };  

  const secondValidModel = {
    firstName: 'abbey',
    lastName: 'masters',
    married: 'false',
    kids: '0'
  };  

  const invalidModel = {
    firstName: 'abbey',
    lastName: 'masters',
    married: 10,
    kids: []
  };

  const secondInvalidModel = {
    firstName: 0,
    lastName: '',
    married: 10,
    kids: 'woooo'
  };


  it('validates a correct model', () => {
    expect(schemaValidator.validate(newModel)).toEqual(newModel);
  });

  it('validates a correct model', () => {
    expect(schemaValidator.validate(secondValidModel)).toEqual(newModel);
  });

  it('throws on invalid model', () => {
    expect(() => {
      schemaValidator.validate(invalidModel);
    }).toThrow(errors.ModelError);
  });

  it('throws on invalid model', () => {
    expect(() => {
      schemaValidator.validate(secondInvalidModel);
    }).toThrow(errors.ModelError);
  });

});