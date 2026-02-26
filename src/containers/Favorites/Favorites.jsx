import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  console.log("favorites", favorites);

  return (
    <div>
      <h1>Favorites</h1>

      {favorites.length !== 0 ? (
        favorites.map((item) => (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>
              <a href={item.poster}>{item.poster}</a>
            </p>
            <hr />
          </div>
        ))
      ) : (
        <h4>В избранном нет фильмов</h4>
      )}
    </div>
  );
};

export default Favorites;
