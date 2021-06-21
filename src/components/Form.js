import React, { useState } from "react";

function Form({sendFormDataSomewhere}) {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([])

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
    const formDataCntrl = { firstName: firstName, lastName: lastName }
    setSubmittedData([...submittedData, formDataCntrl])
    setFirstName("");
    setLastName("");
  }

  const listofSubmissions = submittedData.map((user, index) => {
    return (
      <div key={index}>
        {user.lastName}, {user.firstName}
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
    <h2>List of Submissions</h2>
      <ul>
        <lli>{listofSubmissions}</lli>
      </ul>
    </>
  );
}

export default Form;
