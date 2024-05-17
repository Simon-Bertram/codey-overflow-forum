import { comments } from "../CommentData";
import PropTypes from "prop-types";

const Body = ({ comments }) => {
  return <p>{comments}</p>;
};

Body.propTypes = {
  comments: PropTypes.array,
};

export default Body;
