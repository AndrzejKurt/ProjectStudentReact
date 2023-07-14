import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <div>
      <h2>{props.courseName}</h2>
      <h3>{props.courseGroupName}</h3>
    </div>
  );
}
Header.propTypes = {
  courseName: PropTypes.string.isRequired,
  courseGroupName: PropTypes.string.isRequired,
}

export class HeaderClass extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
    <div>
      <h2>{this.props.courseName}</h2>
      <h3>{this.props.courseGroupName}</h3>
    </div>
  )};
}




HeaderClass.propTypes = {
  courseName: PropTypes.string.isRequired,
  courseGroupName: PropTypes.string.isRequired,
}

export default Header;
