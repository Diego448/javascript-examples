class Student {
    fullName: String;
    constructor(public firstName: String, public lastName: String) {
        this.fullName = firstName + " " + lastName;
    }
}

interface Person {
    firstName: String;
    lastName: String;
}

function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

let user = {firstName: "Anonymous", lastName: "Me"};

document.body.textContent = greeter(user);
