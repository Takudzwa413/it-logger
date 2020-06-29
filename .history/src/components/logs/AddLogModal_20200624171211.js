import React, { useState } from "react";

const AddLogModal = () => {
  const [message, stMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message'>Log Message</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(E.target.value)}
            >
              <option>
                <option value='John Doe'>John Doe</option>
                <option value='Sam Smith'>Sam Smith</option>
                <option value='Sara Wilson'>Sara Wilson</option>
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
const modalStyle = {
  width: "75%",
  height: "75%",
};

export default AddLogModal;
