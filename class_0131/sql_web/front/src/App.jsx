import { useEffect, useState } from 'react';
import "./App.css";

const App = () => {
  const [studentList, setStudentList] = useState(null);
  const [studentJSX, setStudentJSX] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000");
        const studentData = await res.json();
        setStudentList(studentData);
        console.log(studentData)
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (studentList) {
      setStudentJSX(studentList.map((studentInfo) => {
        return (<div key={studentInfo.id} className='student'>
          <p>학번 : {studentInfo.id}</p>
          <p>이름 : {studentInfo.name}</p>
          <p>혈액형 : {studentInfo.bloodType}</p>
          <p>기타사항 : {studentInfo.etc}</p>
          <button onClick={() => {
            const updateStudent = async () => {
              await fetch("http://localhost:3000/update", {
                method: "POST",
                headers: {
                  "content-Type": "application/json"
                },
                body: {
                  id: JSON.stringify({id: studentInfo.id})
                }
              });
            }
            // updateStudent();
            
          }}>수정</button>
          <button id={studentInfo.id} onClick={(e) => {
            console.log(e.target.id);
            const deleteStudent = async () => {
              await fetch("http://localhost:3000/delete", {
                method: "post",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({id: e.target.id})
              });
            }
            deleteStudent();
          }}>삭제</button>
        </div>)
      }));
      console.log(studentJSX);
    }
  }, [studentList]);
  return (
    <>
      <h1>혈액형 관리</h1>
      <div key="studentsArea">
        {studentJSX}
      </div>
      <div className="searchArea">
        <input></input>
        <select>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>
        <input></input>
      </div>
    </>
  )
}

export default App
