import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "prop-types";
import { getTechs } from "../../actions/techActions";

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTech: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
