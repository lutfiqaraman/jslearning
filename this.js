function ask(question) {
    const personInfo =
        this.name + ' his age was ' + this.age + ' and his location is in ' + this.city;

    console.log(personInfo, question);
}

function otherClass() {

    let teacher = {
        name: 'Alex',
        age: 35,
        city: 'Amman',
    };

    ask.call(teacher, 'Why?');
}

otherClass();
