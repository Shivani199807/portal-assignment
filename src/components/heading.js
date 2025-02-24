
import "../styles/heading.css";
import PropTypes from "prop-types";
const Heading = ({ text }) => {
  return <h1 className="heading" data-testid={"heading"}>{text}</h1>;
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;