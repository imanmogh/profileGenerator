const Employee = require(`./Employee`);

class Intern extends Employee {
    super(id, name, email, role);

    constructor(school) {
        this.school = school;
    }

    getSchool() {
        return this.school; 
    }

    getRole() {
        return "Intern"
    }

}

module.exports = Intern;