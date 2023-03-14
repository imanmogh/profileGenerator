const Employee = require(`./Employee`);

class Manager extends Employee{
    super(id, name, email);

    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRoles() {
        return "Manager"
    }
}

module.exports = Manager;