// Styling and Animation
import { StyledGame } from "./Game.style";
import { motion } from "framer-motion";
import { popup } from "styles/animations";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "store/actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "helpers/utils";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

export default Game;
