import React, { useState } from "react";

const AddLogModal = () => {
  const [message, stMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  return <div id='add-log-modal' className='modal' style={modalStyle}></div>;
  <div className='modal-content'>
    <h4>Enter System</h4>
    <div className='row'>
      <div className='input-field'>
        <input
          type='text'
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target)}
        />
      </div>
    </div>
  </div>;
};
const modalStyle = {
  width: "75%",
  height: "75%",
};

export default AddLogModal;
