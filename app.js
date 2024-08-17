const students = [
    {
        name: 'John Doe',
        fatherName: 'Doe',
        feeStatus: 'Paid',
        semester: 'Semester 3',
        subjects: ['Mathematics', 'Science', 'Computer', 'Physics']
    },
    {
        name: 'Jane Smith',
        fatherName: 'Smith',
        feeStatus: 'Paid',
        semester: 'Semester 2',
        subjects: ['English', 'Biology', 'Chemistry']
    },
    {
        name: 'Emily Johnson',
        fatherName: 'Johnson',
        feeStatus: 'false',
        semester: 'Semester 4',
        subjects: ['Physics', 'Chemistry', 'Computer Science']
    },
    {
        name: 'David Brown',
        fatherName: 'David Brown Sr.',
        feeStatus: 'false',
        semester: 'Semester 6',
        subjects: ['Economics', 'Statistics', 'Philosophy']
    }
];

const studentInfoDiv = document.getElementById('student-info');

students.forEach(student => {
    let studentHTML = `
        <div class="student">
            <h2>Name: ${student.name}</h2>
            <p>Father's Name: ${student.fatherName}</p>
            <p>Fee Status: ${student.feeStatus}</p>
            <p>Semester: ${student.semester}</p>
            <p>Subjects:</p>
            <ul>
                ${student.subjects.map(subject => `<li>${subject}</li>`).join('')}
            </ul>
            <hr/>
        </div>
    `;

    studentInfoDiv.innerHTML += studentHTML;
});
