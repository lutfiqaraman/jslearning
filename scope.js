let teacher = 'David';

function otherClass() {
    teacher = 'Suzy';
    return teacher;
}

(function IFFE() {
    console.log('Hello, I am an IFFE function');
})();

console.log(teacher);
console.log(otherClass());
