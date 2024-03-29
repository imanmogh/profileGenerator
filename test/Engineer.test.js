const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Can create a new engineer", () => {
            const newEngineer = new Engineer();
            expect(typeof(newEngineer)).toEqual("object")
        })
        it("Can create a engineer ID", () => {
            const id = 2
            const engineerId = new Engineer(id)
            expect(engineerId.id).toEqual(id);
        })
        it("Can create a engineer name", () => {
            const name = "Bob"
            const engineerName = new Engineer(2, name)
            expect(engineerName.name).toEqual(name);
        })
        it("Can create a engineer email", () => {
            const email = "Bob@gmail.com"
            const engineerEmail = new Engineer(2, "Bob", email);
            expect(engineerEmail.email).toEqual(email);
        })
        it("Gets name through getName method.", () => {
            const testName = "Bob";
            const engineerName = new Engineer(2, testName);
            expect(engineerName.getName()).toBe(testName);
        })
        it("Gets Id through getId method.", () => {
            const testId = 2;
            const engineerId = new Engineer(testId);
            expect(engineerId.getId()).toBe(testId);
        })
        it("Gets email through getEmail method.", () => {
            const testEmail = "Bob@gmail.com";
            const engineerEmail = new Engineer(2, "Bob", testEmail);
            expect(engineerEmail.getEmail()).toBe(testEmail);
        })
        it("Gets  github account.", () => {
            const github = "Bob_the_engineer";
            const engineerGithub = new Engineer("Bob", 2, "Bob@gmail.com", github);
            expect(engineerGithub.getGithub()).toBe(github);
        })
        it("Gets  role.", () => {
            const role = "Engineer";
            const engineerInstance = new Engineer("Bob", 2, "Bob@gmail.com", "Bob_the_engineer");
            expect(engineerInstance.getRole()).toBe(role);
        })
    })
})