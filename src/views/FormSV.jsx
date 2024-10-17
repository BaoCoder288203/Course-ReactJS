import React, { useState } from 'react';

export default function FormSV({ student, handleChange }) {
  const [firstName, setFirstName] = useState(student.firstName);
  const [lastName, setLastName] = useState(student.lastName);
  const [email, setEmail] = useState(student.email);
  const [contact, setContact] = useState(student.contact);
  const [gender, setGender] = useState(student.gender);
  const [yourBestSubject, setYourBestSubject] = useState(student.yourBestSubject);
  const [upLoad, setUpLoad] = useState(student.upLoad);
  const [enterURL, setEnterURL] = useState(student.enterURL);
  const [about, setAbout] = useState(student.about);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange({
      firstName,
      lastName,
      email,
      contact,
      gender,
      yourBestSubject,
      upLoad,
      enterURL,
      about,
    });
  };

  return (
    <div className='box'>
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="txtFN">First Name*</label>
        <br />
        <input
          type="text"
          name="firstName"
          value={firstName}
          id="txtFN"
          placeholder='Enter First Name'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="txtLN">Last Name*</label>
        <br />
        <input
          type="text"
          name="lastName"
          value={lastName}
          id="txtLN"
          placeholder='Enter Last Name'
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="txtE">Enter Email*</label>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          id="txtE"
          placeholder='Enter email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="txtC">Contact*</label>
        <br />
        <input
          type="text"
          name="contact"
          value={contact}
          id="txtC"
          placeholder='Enter Mobile number'
          onChange={(e) => setContact(e.target.value)}
        />
        <br />
        <label htmlFor="">Gender*</label>
        <div className='radGender'>
          <input
            type="radio"
            name="gender"
            value='Male'
            checked={gender === 'Male'}
            onChange={(e) => setGender(e.target.value)}
          />Male
          <input
            type="radio"
            name="gender"
            value='Female'
            checked={gender === 'Female'}
            onChange={(e) => setGender(e.target.value)}
          />Female
          <input
            type="radio"
            name="gender"
            value='Other'
            checked={gender === 'Other'}
            onChange={(e) => setGender(e.target.value)}
          />Other
        </div>
        <label htmlFor="">Your best Subject</label>
        <div className='ckxSub'>
          <input
            type="checkbox"
            name="English"
            checked={yourBestSubject.English}
            onChange={(e) => setYourBestSubject({ ...yourBestSubject, English: e.target.checked })}
          />English
          <input
            type="checkbox"
            name="Maths"
            checked={yourBestSubject.Maths}
            onChange={(e) => setYourBestSubject({ ...yourBestSubject, Maths: e.target.checked })}
          />Maths
          <input
            type="checkbox"
            name="Physics"
            checked={yourBestSubject.Physics}
            onChange={(e) => setYourBestSubject({ ...yourBestSubject, Physics: e.target.checked })}
          />Physics
        </div>
        <label htmlFor="">Upload Resume*</label>
        <br />
        <input
          type="file"
          id="upload"
          onChange={(e) => setUpLoad(e.target.files[0])}
        />
        <br />
        <label htmlFor="url">Enter URL*</label>
        <br />
        <input
          type="text"
          name="enterURL"
          value={enterURL}
          id="url"
          placeholder='Enter url'
          onChange={(e) => setEnterURL(e.target.value)}
        />
        <br />
        <label htmlFor="ckb">Select your choice*</label>
        <br />
        <select name="choice" id="ckb">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        <br />
        <label htmlFor="txtArea">About</label>
        <br />
        <textarea
          id="txtArea"
          rows="10"
          placeholder='Enter your self'
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
        <br />
        <label htmlFor="">Submit OR Reset</label>
        <div className='btn'>
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
