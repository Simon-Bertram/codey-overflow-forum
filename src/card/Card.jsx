import Header from "./Header";
import Body from "./Body";
import PropTypes from "prop-types";

const Card = ({ commentObject }) => {
  return (
    <div>
      <Header
        profilePic={commentObject.profilePic}
        username={commentObject.username}
      />
      <Body comment={commentObject.comment} />
    </div>
  );
};

Card.propTypes = {
  props: PropTypes.object,
  commentObject: PropTypes.object,
};

export default Card;
