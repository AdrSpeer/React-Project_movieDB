import { Link } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";

const BackBtn = () => {
  return (
    <Link to="/">
      <ReplyIcon style={{ color: "white" }} />
    </Link>
  );
};

export default BackBtn;
