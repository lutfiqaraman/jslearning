class WorkShop {

    constructor(teacher) {
        this.teacher = teacher
    }

    ask(question) {
        console.log(this.teacher, question);
    }
}

let ws1 = new WorkShop('David');
let ws2 = new WorkShop('Maria');

ws1.ask('When will you come back?');
ws2.ask('What did you do so far?');


