export default class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    getNameGender(){
        return this.name+' '+this.gender;
    }
}