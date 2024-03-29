import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselComponent from "./Carousel";

const Gallery = () => {
  const imageIds = [
    "imagen_1",
    "imagen_2",
    "imagen_3",
    "imagen_4",
    "imagen_5",
    "imagen_6",
  ];
  let currentImageId = null;

  function toggleImageSize(imageId) {
    const imageElement = document.getElementById(imageId);

    if (currentImageId !== imageId) {
      resetImageSize();

      imageElement.classList.add("enlarged");
      currentImageId = imageId;
    } else {
      imageElement.classList.toggle("enlarged");
      currentImageId = null;
    }
  }

  function resetImageSize() {
    if (currentImageId) {
      const currentImageElement = document.getElementById(currentImageId);
      currentImageElement.classList.remove("enlarged");
    }
  }

  return (
    <>
      <div
        id="Gallery"
        className="container mx-auto flex flex-wrap flex-row h-full w-full">
        <div className="flex flex-col items-center justify-center w-full py-10">
          <div>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
              Galería
            </h1>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <p className="text-justify lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Aquí, encontrarás una cuidadosa selección de imágenes que capturan
              la esencia de la vida en nuestro barrio, donde la
              naturaleza y la modernidad se funden en armonía.<br/> Las imágenes ilustran la
              concepción arquitectónica para lograr confluir los amplios espacios verdes y los lagos que hacen de este lugar un oasis único para vivir.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
