const Intern = require('./lib/Intern.js');

describe("Intern", () => {
    describe("Initialization", () => {
        it("Can create a new intern", () => {
            const newIntern = new Intern();
            expect(typeof(newIntern)).toEqual("object")
        })
        it("Can create a intern ID", () => {
            const id = 003
            const internId = new Intern(id)
            expect(internId.id).toEqual(id);
        })
        it("Can create a intern name", () => {
            const name = "Ken"
            const internName = new Intern(name)
            expect(internName.name).toEqual(name);
        })
        it("Can create a intern email", () => {
            const email = "Ken@gmail.com"
            const internEmail = new Intern(email);
            expect(internEmail.email).toEqual(email);
        })
        it("Gets name through getName method.", () => {
            const testName = "Ken";
            const internName = new Intern(testName);
            expect(internName.getName()).toBe(testName);
        })
        it("Gets Id through getId method.", () => {
            const testId = 003;
            const internId = new Intern(testId);
            expect(internId.getId()).toBe(testId);
        })
        it("Gets email through getEmail method.", () => {
            const testEmail = "Ken@gmail.com";
            const internEmail = new Intern(testEmail);
            expect(internEmail.getEmail()).toBe(testEmail);
        })
        it("Gets  interns school.", () => {
            const school = "Kennesaw State University";
            const internSchool = new Intern("Ken", 003, "Ken@gmail.com", school);
            expect(internSchool.getRole()).toBe(school);
        })
        it("Gets  role.", () => {
            const role = "Intern";
            const internInstance = new Intern("Ken", 003, "Ken@gmail.com", "Kennesaw State University");
            expect(internInstance.getRole()).toBe(role);
        })
    })
})