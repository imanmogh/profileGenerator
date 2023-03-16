const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("Can create a new employee", () => {
            const newEmployee = new Employee();
            expect(typeof(newEmployee)).toEqual("object")
        })
        it("Can create a employee ID", () => {
            const id = 1
            const employeeId = new Employee(id)
            expect(employeeId.id).toEqual(id);
        })
        it("Can create a employee name", () => {
            const name = "Sam"
            const employeeName = new Employee(1, name)
            expect(employeeName.name).toEqual(name);
        })
        it("Can create a employee email", () => {
            const email = "Sam@gmail.com"
            const employeeEmail = new Employee(1, "Sam", email);
            expect(employeeEmail.email).toEqual(email);
        })
        it("Gets name through getName method.", () => {
            const testName = "Sam";
            const employeeName = new Employee(1, testName);
            expect(employeeName.getName()).toBe(testName);
        })
        it("Gets Id through getId method.", () => {
            const testId = 1;
            const employeeId = new Employee(testId, "Sam");
            expect(employeeId.getId()).toBe(testId);
        })
        it("Gets email through getEmail method.", () => {
            const testEmail = "Sam@gmail.com";
            const employeeEmail = new Employee(1, "Sam", testEmail);
            expect(employeeEmail.getEmail()).toBe(testEmail);
        })
        it("Gets  role.", () => {
            const role = "Employee";
            const employeeInstance = new Employee("Sam", 1, "Sam@gmail.com");
            expect(employeeInstance.getRole()).toBe(role);
        })
    })
})