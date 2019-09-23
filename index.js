const validator = require('./lib/validator.js');
console.log(validator.isString('hello world'));

const DocumentCollection = require('./lib/document-collection');
const documents = new DocumentCollection('./documents');
const Database = require('./lib/database');


const personOne = { 
  firstName: 'abbey',
  lastName: 'masters',
  married: 'false',
  kids: 0
};

const personTwo = {
  firstName: 'allison',
  lastName: 'busse',
  married: 'true',
  kids: 5
};

Database.connect('db');

const model = require('./models/example-model');

model.create(personOne)
  .then((res) => {
    console.log(res);
    model.findById(res.id)
      .then(res => {
        console.log(res);
      });
  });

model.create(personTwo)
  .then((res) => {
    console.log(res);
    model.findById(res.id)
      .then(res => {
        console.log(res);
      });
  });

model.find()
  .then((result) => {
    console.log('all:', result);
  });


// write some code to exercise your document collection
const exampleObject = {
  name: 'abbey'
};

documents.save(exampleObject)
  .then(() => {
    console.log(exampleObject);
    documents.get(exampleObject.id)
      .then(returnedObject => {
        console.log(returnedObject);
      })
      .then(() => {
        documents.getAll()
          .then(res => {
            console.log(res);
          });
      });
  });