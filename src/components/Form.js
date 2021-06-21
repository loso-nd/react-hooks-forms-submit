import React, { useState } from "react";

function Form({sendFormDataSomewhere}) {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("I have been Submitted.")

    //create an object inside our handle func for cntrl form
    // const formDataCntrl = { firstName: firstName, lastName: lastName }
    // setSubmittedData([...submittedData, formDataCntrl])
    // setFirstName("");
    // setLastName("");

    //form validations ( First and Last)
    if(firstName.length > 0 ){
      const formDataCntrl = { firstName: firstName, lastName: lastName }
      setSubmittedData([...submittedData, formDataCntrl])
    //By setting state to an empty string, we're keeping our React component state in sync with what the user sees on the page.
      setFirstName("");
      setLastName("");
      setErrors([])
    }else {
      setErrors(["First Name is required to be at least 4 characters long"])
    }
  }
console.log(submittedData)
  const listofSubmissions = submittedData.map((user, index) => {
    return (
      <div key={index}>
        <li>{user.lastName}, {user.firstName}</li>
      </div>
    )}
  );

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
      {errors.length > 0 ? errors.map((error, index) => (
        <p key={index} style={{color: "red"}}>
          {error}
        </p> 
      ))
        : null  
      }
    <h2>List of Submissions</h2>
      <ul>
        {listofSubmissions}
      </ul>
    </>
  );
}

export default Form;
