import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return ( 
    <>
      <div className='box'>
        <h1>Form in React</h1>
        <form action="">
          <label htmlFor="txtFN">First Name*</label>
          
          <br />
          <input type="text" name="" id="txtFN" placeholder='Enter First Name'/>
          <br />
          <label htmlFor="txtLN">Last Name*</label>
          <br />
          <input type="text" name="" id="txtLN" placeholder='Enter Last Name'/>
          <br />
          <label htmlFor="txtE">Enter Email*</label>
          <br />
          <input type="text" name="" id="txtE" placeholder='Enter email'/>
          <br />
          <label htmlFor="txtC">Contact*</label>
          <br />
          <input type="text" name="" id="txtC" placeholder='Enter Mobile number'/>
          <br />
          <label htmlFor="">Gender*</label>
          <div className='radGender'>
            <input type="radio" name="Gender" id="" />Male
            <input type="radio" name="Gender" id="" />Female
            <input type="radio" name="Gender" id="" />Other
          </div>
          <label htmlFor="">Your best Subject</label>
          <div className='ckxSub'>
            <input type="checkbox" name="English" id="" />English
            <input type="checkbox" name="Maths" id="" />Maths
            <input type="checkbox" name="Physics" id="" />Physics
          </div>
          <label htmlFor="">Upload Resume*</label>
          <br />
          <input type="file" name="" id="" />
          <br />
          <label htmlFor="">Enter URL*</label>
          <br />
          <input type="text" name="" id="" placeholder='Enter url'/>
          <br />
          <label htmlFor="ckb">Select your choice*</label>
          <br />
          <select name="" id="ckb">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
          <br />
          <label htmlFor="txtArea">About</label>
          <br />
          <textarea id="txtArea" rows="10" placeholder='Enter your self'></textarea>
          <br />
          <label htmlFor="">Submit OR Reset</label>
          <div className='btn'>
            <button>Reset</button>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
