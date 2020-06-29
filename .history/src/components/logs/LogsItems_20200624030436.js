import React from "react";
import PropTypes from "prop-types";

const LogsItems = ({ logs }) => {
  return (
    <li className='collection-item'>
      <div>
        <a href=''>{log.message}</a>
      </div>
    </li>
  );
};

LogsItems.propTypes = {};

export default LogsItems;
