let students = [
    {name: "Ramith", marks: [85, 90, 78]},
    {name: "Anita", marks: [88, 76, 95]},
    {name: "Kiran", marks: [70, 80, 75]}
];
for (let i = 0; i < students.length; i++) {

    let total = 0;

    for (let j = 0; j < students[i].marks.length; j++) {
        total = total + students[i].marks[j];
    }
    let average = total / students[i].marks.length;
    console.log("Student Name: " + students[i].name);
    console.log("Marks: " + students[i].marks);
    console.log("Average Marks: " + average);
}
