import React from "react";

function Student_id_card() {

  const students = [
    {
      name: "Harsha",
      course: "Full Stack",
      year: "4th Year",
      image: "https://i.pinimg.com/736x/40/08/76/4008760ecf27a3ae648e16b510bf6c39.jpg"
    },
    {
      name: "Reshma",
      course: "Cyber Security",
      year: "Final Year",
      image: "https://imgv3.fotor.com/images/gallery/generate-a-realistic-ai-avatar-of-a-professional-woman-in-fotor.jpg"
    },
    {
      name: "Anjali",
      course: "Data Science",
      year: "2nd Year",
      image: "https://en.pimg.jp/113/748/993/1/113748993.jpg"
    }
  ];

  return (
    <div style={{ display: "flex",
     justifyContent: "center",
      flexWrap: "wrap" }}>
      
      {students.map((student, index) => (
        <div key={index} style={{
          border: "2px solid black",
          borderRadius: "10px",
          width: "300px",
          height: "400px",
          padding: "15px",
          textAlign: "center",
          margin: "10px",
          backgroundColor: "#f9f9f9"
        }}>
          
          <img
            src={student.image}
            alt="profile"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              marginBottom: "10px"
            }}
          />

          <h3>{student.name}</h3>
          <p><b>Course:</b> {student.course}</p>
          <p><b>Year:</b> {student.year}</p>

        </div>
      ))}

    </div>
  );
}

export default Student_id_card;