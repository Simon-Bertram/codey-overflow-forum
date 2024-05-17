import PropTypes from "prop-types";

const Header = ({ props }) => {
  return (
    <div>
      <img src="" alt="" />
      <h1>{props}</h1>
    </div>
  );
};

Header.propTypes = {
  props: PropTypes.object,
  username: PropTypes.string,
};

export default Header;
