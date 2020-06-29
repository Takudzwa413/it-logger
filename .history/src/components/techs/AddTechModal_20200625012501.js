import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter a firstName and lastName" });
    } else {
      console.log(firstName, lastName);

      //Clear Fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Enter System log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='fistName'
              value={fistName}
              onChange={(e) => setfistName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              firstName
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              lastName
            </label>
          </div>
        </div>
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
