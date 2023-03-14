const Employee = require(`./Employee`);

class Engineer extends Employee {
    super(id, name, email);

    constructor(github) {
        this.github = github;
    }

    getGithub() {
        return this.github;

    }
    getRoles() {
        return "Engineer"
    }

}

module.exports = Engineer;