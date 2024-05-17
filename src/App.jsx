import { comments } from "./CommentData";
import Card from "./card/Card";

function App() {
  return comments.map((comment, index) => (
    <Card commentObject={comment} key={index} />
  ));
}

export default App;
