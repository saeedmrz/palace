import { useEffect } from "react";
import GameDetail from "components/GameDetail/GameDetail";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "store/actions/gamesAction";
// Components
import Game from "components/Game/Game";
// Styling and Animation
import { GameList, Games } from "./Home.style";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "styles/animations";
import Spinner from "components/common/Spinner/Spinner";

const Home = () => {
  // Get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  // Fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get that data back
  const { popular, newGames, upcoming, searched, isLoading } = useSelector(
    (state) => state.games
  );
  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <GameList variants={fadeIn} initial="hidden" animate="show">
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
              {pathId && <GameDetail pathId={pathId} />}
            </AnimatePresence>
            {searched.length ? (
              <div className="searched">
                <h2>Searched Games</h2>
                <Games>
                  {searched.map((game) => (
                    <Game
                      name={game.name}
                      released={game.released}
                      id={game.id}
                      image={game.background_image}
                      key={game.id}
                    />
                  ))}
                </Games>
              </div>
            ) : (
              ""
            )}
            <h2>Upcoming Games</h2>
            <Games>
              {upcoming.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>

            <h2>Popular Games</h2>
            <Games>
              {popular.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>

            <h2>New Games</h2>
            <Games>
              {newGames.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </AnimateSharedLayout>
        </GameList>
      )}
    </>
  );
};

export default Home;
