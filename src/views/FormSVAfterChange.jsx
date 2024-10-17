import React from 'react'

export default function FormSVAfterChange({student}) {
  return (
    <div className='box2'>
          <h3>Submitted Information:</h3>
          <p>First Name: {student.firstName ?? ''}</p>
          <p>Last Name: {student.lastName ?? ''}</p>
          <p>Email: {student.email ?? ''}</p>
          <p>Contact: {student.contact ?? ''}</p>
          <p>Gender: {student.gender ?? ''}</p>
          <p>Best Subjects: {Object.keys(student.yourBestSubject).filter(subject => student.yourBestSubject[subject]).join(', ') ?? ''}</p>
          <p>Upload: {student.upLoad ? upLoad : 'No file uploaded'}</p>
          <p>Enter URL: {student.enterURL ?? ''}</p>
          <p>About: {student.about ?? ''}</p>
    </div>
  )
}
