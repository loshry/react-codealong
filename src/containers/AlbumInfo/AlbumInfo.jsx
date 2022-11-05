// AlbumInfo.jsx
import "./AlbumInfo.scss";
import { useParams } from "react-router-dom";

const AlbumInfo = (props) => {
    const {albumId } = useParams();
    console.log(albumId);
    const { albumsArr } = props;

    const currentAlbum = albumsArr.find((album) => album.idAlbum === albumId);
    console.log(currentAlbum);

  return (
    <article className="album-info">
      <div className="album-info__banner">
        <img className="album-info__img album-info__img--first" />
      </div>
      <div className="album-info__content">
        <h2 className="album-info__heading">{currentAlbum.strAlbum}</h2>
        <p>{currentAlbum.strDescriptionEN}</p>
        <h2 className="album-info__heading">Facts</h2>
        <ul className="album-info__facts">
          <li>Mood : {currentAlbum.strMood} </li>
          <li>Released : {currentAlbum.strMood} </li>
          <li>Genre : {currentAlbum.strGenre} </li>
          <li>Score : {currentAlbum.intScore} </li>
        </ul>
      </div>
      <div className="album-info__banner">
        <img className="album-info__img album-info__img--last" />
      </div>
    </article>
  );
};

export default AlbumInfo;