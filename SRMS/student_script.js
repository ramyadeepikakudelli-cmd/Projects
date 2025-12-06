// ============================
// STUDENT DATABASE (10 students)
// ============================

const students = [
    {
        name: "Sree Nanda Sai",
        roll: "AP24110011861",
        age: 18,
        address: "Bangalore",
        cgpa: 8.24,
        contact: "9392149774",
        gender: "Male",
        dob: "14/09/2006",
        Branch: "CSE",
        Section: "K"
    },
    {
        name: "Sujatha",
        roll: "AP24110011812",
        age: 18,
        address: "Thadikonda",
        cgpa: 8.5,
        contact: "9876543210",
        gender: "Female",
        dob: "01/01/2006",
        Branch: "CSE",
        Section: "K"
    },
    {
        name: "Poojitha",
        roll: "AP24110011819",
        age: 18,
        address: "Guntur",
        cgpa: 8.7,
        contact: "9087654321",
        gender: "Female",
        dob: "01/01/2006",
        Branch: "CSE",
        Section: "K"
    },
    {
        name: "Ramya",
        roll: "AP24110011841",
        age: 18,
        address: "Vizag",
        cgpa: 9.0,
        contact: "9123456856",
        gender: "Female",
        dob: "01/01/2006",
        Branch: "CSE",
         Section: "K"
    },
    {
        name: "Sai Sri Ram",
        roll: "AP24110011872",
        age: 19,
        address: "Vijayawada",
        cgpa: 8.9,
        contact: "9012345678",
        gender: "Male",
        dob: "05/06/2005",
        Branch: "CSE",
        Section: "K"
    },
    {
        name: "Kiran Kumar",
        roll: "AP24110011833",
        age: 19,
        address: "Hyderabad",
        cgpa: 8.1,
        contact: "9876501234",
        gender: "Male",
        dob: "22/03/2005",
        Branch: "CSE",
        Section: "K"
    },
    {
        name: "Anusha Reddy",
        roll: "AP24110011827",
        age: 18,
        address: "Tenali",
        cgpa: 9.2,
        contact: "9345678123",
        gender: "Female",
        dob: "18/11/2006",
        Branch: "CSE",
        Section: "K"
    },
    {
        name: "Chaitanya",
        roll: "AP24110011805",
        age: 19,
        address: "Kakinada",
        cgpa: 7.9,
        contact: "9008765432",
        gender: "Male",
        dob: "09/07/2005",
        Branch: "CSE",
        Section: "K"
    },
    {
        name: "Harika",
        roll: "AP24110011856",
        age: 18,
        address: "Nellore",
        cgpa: 8.6,
        contact: "9812345670",
        gender: "Female",
        dob: "12/12/2005",
        Branch: "CSE",
        Section: "K"
    },
    {
        name: "Rohit",
        roll: "AP24110011890",
        age: 19,
        address: "Rajahmundry",
        cgpa: 8.3,
        contact: "9098765432",
        gender: "Male",
        dob: "25/08/2005",
        Branch: "CSE",
        Section: "K"
    }
];


// ============================
// SEARCH FUNCTION
// ============================

function searchStudent() {
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let box = document.getElementById("resultBox");

    for (let s of students) {
        if (s.name.toLowerCase() === name.toLowerCase() && s.roll === roll) {
            box.className = "result";
            box.style.display = "block";

            box.innerHTML = `
                <b>Name:</b> ${s.name}<br>
                <b>Roll No:</b> ${s.roll}<br>
                <b>Age:</b> ${s.age}<br>
                <b>Address:</b> ${s.address}<br>
                <b>CGPA:</b> ${s.cgpa}<br>
                <b>Contact:</b> ${s.contact}<br>
                <b>Gender:</b> ${s.gender}<br>
                <b>Date of Birth:</b> ${s.dob}<br>
                <b>Branch:</b> ${s.Branch}<br>
                <b>Section:</b> ${s.Section}<br>
            `;
            return;
        }
    }

    // If not found
    box.className = "result not-found";
    box.style.display = "block";
    box.innerText = " Student Not Found!";
}
