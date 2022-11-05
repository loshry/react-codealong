import React from "react";
import "./AlbumGallery.scss"
import Carousel from "../../components/Carousel/Carousel";

const AlbumGallery = (props) => {
  const { title, albumsArr } = props;

  const imagesArr = albumsArr
    // .filter((album) => album.strAlbumThumb)
    .map((album) => album.strAlbumThumb);
    // filtering only the ones that have valid thumbnail image and then with map create new array with just the thumbnail images
    // don't need the filtering in this situation because albumsArr is already defined in albums.jsx and is filtered in App.jsx


  return (
    <section className="album-gallery">
      <h1 className="album-gallery__heading">{title}</h1>
      <div className="album-gallery__carousel">
        <Carousel imagesArr={imagesArr} />
      </div>
    </section>
  );
};

export default AlbumGallery;
