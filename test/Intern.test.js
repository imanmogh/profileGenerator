const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("Can create a new intern", () => {
            const newIntern = new Intern();
            expect(typeof(newIntern)).toEqual("object")
        })
        it("Can create a intern ID", () => {
            const id = 3
            const internId = new Intern(id)
            expect(internId.id).toEqual(id);
        })
        it("Can create a intern name", () => {
            const name = "Ken"
            const internName = new Intern(3, name)
            expect(internName.name).toEqual(name);
        })
        it("Can create a intern email", () => {
            const email = "Ken@gmail.com"
            const internEmail = new Intern(3, "Ken", email);
            expect(internEmail.email).toEqual(email);
        })
        it("Gets name through getName method.", () => {
            const testName = "Ken";
            const internName = new Intern(3, testName);
            expect(internName.getName()).toBe(testName);
        })
        it("Gets Id through getId method.", () => {
            const testId = 3;
            const internId = new Intern(testId);
            expect(internId.getId()).toBe(testId);
        })
        it("Gets email through getEmail method.", () => {
            const testEmail = "Ken@gmail.com";
            const internEmail = new Intern(3, "Ken", testEmail);
            expect(internEmail.getEmail()).toBe(testEmail);
        })
        it("Gets  interns school.", () => {
            const school = "Kennesaw State University";
            const internSchool = new Intern("Ken", 3, "Ken@gmail.com", school);
            expect(internSchool.getSchool()).toBe(school);
        })
        it("Gets  role.", () => {
            const role = "Intern";
            const internInstance = new Intern("Ken", 3, "Ken@gmail.com", "Kennesaw State University");
            expect(internInstance.getRole()).toBe(role);
        })
    })
})