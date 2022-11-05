import "./App.scss";

import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";

import albums from "./data/albums";
import artist from "./data/artist";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlbumGallery from "./containers/AlbumGallery/AlbumGallery";
import AlbumInfo from "./containers/AlbumInfo/AlbumInfo";

const App = () => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let firstName = event.target[0].value;
    let lastName = event.target[1].value;

    if (firstName && lastName) {
      event.target.reset();
      setUser({ firstName, lastName });
    }
  };

  const filteredAlbums = albums.filter((album) => album.strAlbumThumb);

  const highestRating = albums
    .filter((album) => album.intScore)
    .sort((a, b) => b.intScore - a.intScore);

  return (
    <Router>
      <div className="app">
        <Nav
          userName={`${user.firstName} ${user.lastName}`}
          handleSubmit={handleSubmit}
        />
        <Routes>
          <Route path="/albums/:albumId" element={<AlbumInfo albumsArr={filteredAlbums} />} />


          <Route path="/albums" element={<AlbumGallery  title="All Albums" albumsArr={filteredAlbums} />} />

          <Route
            path="/"
            element={
              <Home
                user={user}
                unsortedAlbums={filteredAlbums}
                sortedAlbums={highestRating}
                artist={artist}
              />
            }
          />


        </Routes>
      </div>
    </Router>
  );
};

export default App;
