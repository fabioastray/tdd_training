import Person from '../person' 

test('Person.constructor set params', function () {
    const person = new Person('name', 'gender');

    expect(person.name).toEqual('name');
})

test('Person.getFullNam', function () {
    const person = new Person('Antonio', 'Male');

    expect(person.getNameGender).toBeInstanceOf(Function);
    expect(person.getNameGender()).toEqual(person.name+' '+person.gender);
})