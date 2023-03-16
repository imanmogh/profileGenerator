const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("Can create a new manager", () => {
            const newManager = new Manager();
            expect(typeof(newManager)).toEqual("object")
        })
        it("Can create a manager ID", () => {
            const id = 4
            const managerId = new Manager(id)
            expect(managerId.id).toEqual(id);
        })
        it("Can create a manager name", () => {
            const name = "Jess"
            const managerName = new Manager(4, name)
            expect(managerName.name).toEqual(name);
        })
        it("Can create a manager email", () => {
            const email = "Jess@gmail.com"
            const managerEmail = new Manager(4, "Jess", email);
            expect(managerEmail.email).toEqual(email);
        })
        it("Gets name through getName method.", () => {
            const testName = "Jess";
            const managerName = new Manager(4, testName);
            expect(managerName.getName()).toBe(testName);
        })
        it("Gets Id through getId method.", () => {
            const testId = 4;
            const managerId = new Manager(testId);
            expect(managerId.getId()).toBe(testId);
        })
        it("Gets email through getEmail method.", () => {
            const testEmail = "Jess@gmail.com";
            const managerEmail = new Manager(4, "Jess", testEmail);
            expect(managerEmail.getEmail()).toBe(testEmail);
        })
        it("Gets  managers ofice number", () => {
            const officeNumber = "770-233-6587";
            const managerOfficeNumber = new Manager("Ken", 4, "Jess@gmail.com", officeNumber);
            expect(managerOfficeNumber.getOfficeNumber()).toBe(officeNumber);
        })
        it("Gets  role.", () => {
            const role = "Manager";
            const internInstance = new Manager("Jess", 4, "Jess@gmail.com", "770-233-6587");
            expect(internInstance.getRole()).toBe(role);
        })
    })
})