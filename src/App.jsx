import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormSV from './views/FormSV';
import FormSVAfterChange from './views/FormSVAfterChange';

function App() {
  const [student,setStudent] = useState({
    firstName: '',
    lastName: '',
    email:'',
    contact:'',
    gender:'',
    yourBestSubject: {
      English: false,
      Maths: false,
      Physics: false
    },
    upLoad:'',
    enterURL:'',
    about:'',
  })

  const handleChange = (data)=>{
    setStudent(data);
  }

  return ( 
    <>
      <div id='container'>
        <FormSV student={student} handleChange={handleChange} ></FormSV>
        <FormSVAfterChange student={student}></FormSVAfterChange>
      </div>
    </>
  )
}

export default App
