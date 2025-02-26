import "../styles/heading.css";
import PropTypes from "prop-types";

/**
 *
 * @param {Object} props // Contains component props
 * @param {String} props.text // Heading text
 * @returns {JSX.Element}
 */
const Heading = ({ text, fontSize }) => {
  return (
    <h1
      className="heading"
      data-testid={"heading"}
      style={{ fontSize: fontSize }}
    >
      {text}
    </h1>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
