/*
 * Definition of the model function
 */

function model(type, input, schema) {

    var DB = [];

    if ('add' !== type) {
        return DB;
    }

    var newElem = {};

    schema.forEach(function(attr) {
        if (input.hasOwnProperty(attr)) {
            newElem[attr] = input[attr];
        }
    });

    DB.push(newElem);

    return DB;

}

/*
 * Use of the function model
 */

var typeOperation = 'add';

var inputData = {
    id: 1,
    name: "Joe",
    age: 32,
    address: "Muntaner 262, Barcelona"
};

var schema = ['id', 'name', 'age'];

console.log(model(typeOperation, inputData, schema));