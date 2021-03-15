const students = [
    {
        name: 'Mark',
        marks: [100, 65, 88, 90, 50],
        attends: 0
    },
    {
        name: 'John',
        marks: [83, 10, 65, 0, 50, 83],
        attends: 0
    },
    {
        name: 'Joel',
        marks: [100, 65, 90, 20],
        attends: 0
    }
];

function getAvgMark() {
    return this.marks[0];
} // средняя оценка студента

function getMaxMark() {
    return this.marks[0];
} // максимальна оценка студента

function setAttend() {
    this.attends++;
} // увличить счетчик посещений студента

function getInfo(surname, age) {
    console.log(this.name, surname, age);
} // возвращаем строку с именем студента, средней оценкой и колличеством посещений

students.forEach(e => {
    const getInfoForE = getInfo.bind(e);
    getInfoForE();

    getInfo.apply(e, ['Doe', 42]);
    getInfo.call(e, 'Doe', 42);
});