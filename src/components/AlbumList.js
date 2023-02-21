import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  const albumComponents = albums.map(function(albumObj) {
    return <AlbumCard
      name={albumObj.name}
      image={albumObj.image}
      genre={albumObj.genre}
    />
  });
  return (
    <section className="albums">
      {albumComponents}
    </section>
        );
}

export default AlbumList;
