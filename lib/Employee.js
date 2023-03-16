class Employee {
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getName() {
        console.log(`The employees name is: ${this.name}`)
        return this.name
    }
    getId() {
        console.log(`The employees id is: ${this.id}`)
        return this.id
    }
    getEmail() {
        console.log(`The employees email is: ${this.email}`)
        return this.email
    }
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;