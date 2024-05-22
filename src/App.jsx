import 'remixicon/fonts/remixicon.css'
import { useState } from 'react';
import "./App.css";

const App = ()=>{
 
  const model = {
    fullname : "",
    class : "",
    roll : "",
    subject : "",
    dob : ""
    
  }
  const [editIndex , setEditIndex] = useState(null)
  const [right , setRight] = useState(-400)
  const [students , setStudents] = useState([])
  const [form , setForm] = useState(model)

  const handleDrawer =()=>{
    setRight(0)
  }

  const handleInput = (e)=>{
    const input = e.target;
    const value = input.value;
    const key = input.name;
    setForm({
      ...form,
      [key] : value
    })
  }

  const createStudent = (e)=>{
    e.preventDefault()
    setStudents([
      ...students,
      form
    ])
    setForm(model)
    setRight(-450)
  }

  const deleteStudent = (index)=>{
    const backup = [...students];
    backup.splice(index ,1);
    setStudents(backup)
    
  }

  const editStudents = (index)=>{
   setRight(0);
   setForm(students[index]);
   setEditIndex(index)
  }

  const saveStudent =(e)=>{
    e.preventDefault();
    const backup = [...students];
    backup[editIndex] = form;
    setStudents(backup)
    setForm(model);
    setEditIndex(null)
    setRight(-400);

  }

  const closeDrawer = ()=>{
    setRight(-400);
    setForm(model);
    setEditIndex(null)
  }


  return(
    <div 
      style={{
        backgroundColor : "#ddd" ,
        minHeight : "100vh",
       }}>
      
      <div style={{
        backgroundColor : "white",
        width : "70%",
        padding : 32,
        margin : "0 auto",
        
        }}>
        <h1 style={{
          padding : 0,
          margin : 0,
          textAlign : "center"
        }}>StudentList</h1>

        <button onClick={handleDrawer}
          
          style={{
          border : "none",
          padding : "10px  20px",
          background : "#671072",
          color : "white",
          fontWeight : "600",
          borderRadius : "5px",
          margin : "30px 0px",
          fontSize : "12px"
        }}>
          <i className="ri-user-add-fill" style={{marginRight : 6}}></i>
          New Student</button>

        <table className='crud-app'>
          <thead>
            <tr>
              <th>S/No</th>
              <th>Student's name</th>
              <th>Subject</th>
              <th>Clsaa</th>
              <th>Roll</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>

        <tbody>
            {
              students.map((item , index)=>(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{item.fullname}</td>
                <td>{item.subject}</td>
                <td>{item.class}</td>
                <td>{item.roll}</td>
                <td>{item.dob}</td>
                <td>
                  <div> 
                    <button onClick = {()=>editStudents(index)}
                    
                    style={{
                      border : "none",
                      width : 32,
                      height : 32,
                      backgroundColor : "#671072",
                      color : "white",
                      borderRadius : "5px"
                    }}>
                    <i className="ri-pencil-line"></i>
                    </button>
        
                    <button onClick={()=>deleteStudent(index)}
                      
                      style={{
                      border : "none",
                      width : 32,
                      height : 32,
                      backgroundColor : "red",
                      color : "white",
                      borderRadius : "5px",
                      marginLeft : "15px"
                    }}>

                   <i className="ri-delete-bin-6-line"></i>
                    </button>
                  </div>
                </td>
                </tr>
              ))
            }
        </tbody>

        </table>

      </div>
      <aside style={{
        position : 'fixed',
        top : 0,
        right : right,
        width : "400px",
        backgroundColor : "white",
        height : "100%",
        padding : "50px 30px",
        boxShadow : "0 0 40px rgba(0 , 0 ,0 , 0.2)",
        transition : "0.3s"

      }}>
       <button onClick={closeDrawer}  
        style={{
        border : "none",
        background : "transparent",
        fontSize : "18px",
        color : "#671072",
        position : "absolute", 
        top : 30,
        right : 30
       }}>
       <i className="ri-close-circle-line"></i>
       </button>
        <h1>New Student</h1>

        <form onSubmit={editIndex === null ? createStudent : saveStudent}
           style={{
           display : 'flex',
           flexDirection : "column",
           marginTop : "20px",
           gap : "24px",
          }}
          >
          <input onChange={handleInput}
          value={form.fullname}
          required  true
            type="text" 
            name = "fullname"
            placeholder='Enter Your Name :'
            style={{
              border : "1px solid #ccc",
              padding : "12px",
              borderRadius : "5px"

            }}/>

         <input onChange={handleInput}
         value={form.class}
            required  true
            type="number" 
            name = "class"
            placeholder='Enter Your Class :'
            style={{
              border : "1px solid #ccc",
              padding : "12px",
              borderRadius : "5px"

            }}/>

         <input onChange={handleInput}
           value={form.roll}
            required  true
            type="number" 
            name = "roll"
            placeholder='Enter Your roll :'
            style={{
              border : "1px solid #ccc",
              padding : "12px",
              borderRadius : "5px"

            }}/>


         <input onChange={handleInput}
         value={form.subject}
            required  true
            type="text" 
            name = "subject"
            placeholder='Enter Your Subject :'
            style={{
              border : "1px solid #ccc",
              padding : "12px",
              borderRadius : "5px"

            }}/>

         <input onChange={handleInput}
         value={form.dob}
            required  true
            type="date" 
            name = "dob"
            style={{
              border : "1px solid #ccc",
              padding : "12px",
              borderRadius : "5px"

            }}/>
            
            {
              editIndex === null ?  <button style={{
                border : "none",
                background : "#671072",
                color : "white",
                fontSize : "16px",
                padding : "12px 0",
                borderRadius : "5px",
              }}>Submit</button>
              :

              <button style={{
                border : "none",
                background : "#671072",
                color : "white",
                fontSize : "16px",
                padding : "12px 0",
                borderRadius : "5px",
              }}>Save</button>

            }

            


            
        </form>
      </aside>
    </div>
  )
}
export default App;