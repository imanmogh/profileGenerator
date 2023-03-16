const Employee = require('./lib/Employee.js');

describe("Employee", () => {
    describe("Initialization", () => {
        it("Can create a new employee", () => {
            const newEmployee = new Employee();
            expect(typeof(newEmployee)).toEqual("object")
        })
        it("Can create a employee ID", () => {
            const id = 001
            const employeeId = new Employee(id)
            expect(employeeId.id).toEqual(id);
        })
        it("Can create a employee name", () => {
            const name = "Sam"
            const employeeName = new Employee(name)
            expect(employeeName.name).toEqual(name);
        })
        it("Can create a employee email", () => {
            const email = "Sam@gmail.com"
            const employeeEmail = new Employee(email);
            expect(employeeEmail.email).toEqual(email);
        })
        it("Gets name through getName method.", () => {
            const testName = "Sam";
            const employeeName = new Employee(testName);
            expect(employeeName.getName()).toBe(testName);
        })
        it("Gets Id through getId method.", () => {
            const testId = 001;
            const employeeId = new Employee(testId);
            expect(employeeId.getId()).toBe(testId);
        })
        it("Gets email through getEmail method.", () => {
            const testEmail = "Sam@gmail.com";
            const employeeEmail = new Employee(testEmail);
            expect(employeeEmail.getEmail()).toBe(testEmail);
        })
        it("Gets  role.", () => {
            const role = "Employee";
            const employeeInstance = new Employee("Sam", 001, "Sam@gmail.com");
            expect(employeeInstance.getRole()).toBe(role);
        })
    })
})