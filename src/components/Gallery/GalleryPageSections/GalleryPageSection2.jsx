import React, { useCallback, useState,useEffect } from "react";
import img1 from "../../../assets/Gallery/galleryImages/1.webp";
import img2 from "../../../assets/Gallery/galleryImages/2.webp";
import img3 from "../../../assets/Gallery/galleryImages/3.webp";
import img4 from "../../../assets/Gallery/galleryImages/4.webp";
import img5 from "../../../assets/Gallery/galleryImages/5.webp";
import img6 from "../../../assets/Gallery/galleryImages/6.webp";
import img7 from "../../../assets/Gallery/galleryImages/7.webp";
import img8 from "../../../assets/Gallery/galleryImages/8.webp";
import img9 from "../../../assets/Gallery/galleryImages/9.webp";
import img10 from "../../../assets/Gallery/galleryImages/10.webp";
import img11 from "../../../assets/Gallery/galleryImages/11.webp";
import img12 from "../../../assets/Gallery/galleryImages/12.webp";
import img13 from "../../../assets/Gallery/galleryImages/13.webp";
import img14 from "../../../assets/Gallery/galleryImages/14.webp";
import img15 from "../../../assets/Gallery/galleryImages/15.webp";
import img16 from "../../../assets/Gallery/galleryImages/16.webp";
import img17 from "../../../assets/Gallery/galleryImages/17.webp";
import img18 from "../../../assets/Gallery/galleryImages/18.webp";
import img19 from "../../../assets/Gallery/galleryImages/19.webp";
import img20 from "../../../assets/Gallery/galleryImages/20.webp";
import img22 from "../../../assets/Gallery/galleryImages/22.webp";
import img23 from "../../../assets/Gallery/galleryImages/23.webp";
import img24 from "../../../assets/Gallery/galleryImages/24.webp";
import img25 from "../../../assets/Gallery/galleryImages/25.webp";
import img26 from "../../../assets/Gallery/galleryImages/26.webp";
import img27 from "../../../assets/Gallery/galleryImages/27.webp";
import img28 from "../../../assets/Gallery/galleryImages/28.webp";
import img29 from "../../../assets/Gallery/galleryImages/29.webp";
import img30 from "../../../assets/Gallery/galleryImages/30.webp";
import img31 from "../../../assets/Gallery/galleryImages/31.webp";
import img32 from "../../../assets/Gallery/galleryImages/32.webp";
import img33 from "../../../assets/Gallery/galleryImages/33.webp";
import img34 from "../../../assets/Gallery/galleryImages/34.webp";
import img35 from "../../../assets/Gallery/galleryImages/35.webp";
import img36 from "../../../assets/Gallery/galleryImages/36.webp";
import img37 from "../../../assets/Gallery/galleryImages/37.webp";
import img38 from "../../../assets/Gallery/galleryImages/38.webp";
import img39 from "../../../assets/Gallery/galleryImages/39.webp";
import img40 from "../../../assets/Gallery/galleryImages/40.webp";
import img41 from "../../../assets/Gallery/galleryImages/41.webp";
import img43 from "../../../assets/Gallery/galleryImages/43.webp";
import img44 from "../../../assets/Gallery/galleryImages/44.webp";
import img45 from "../../../assets/Gallery/galleryImages/45.webp";
import img46 from "../../../assets/Gallery/galleryImages/46.webp";
import img47 from "../../../assets/Gallery/galleryImages/47.webp";
import img48 from "../../../assets/Gallery/galleryImages/48.webp";
import img49 from "../../../assets/Gallery/galleryImages/49.webp";
import img50 from "../../../assets/Gallery/galleryImages/51.webp";
import img51 from "../../../assets/Gallery/galleryImages/52.webp";
import img52 from "../../../assets/Gallery/galleryImages/53.webp";
import img53 from "../../../assets/Gallery/galleryImages/54.webp";
import img54 from "../../../assets/Gallery/galleryImages/55.webp";
import img56 from "../../../assets/Gallery/galleryImages/56.webp";
import img57 from "../../../assets/Gallery/galleryImages/57.webp";
import img58 from "../../../assets/Gallery/galleryImages/58.webp";
import img59 from "../../../assets/Gallery/galleryImages/59.webp";
import img60 from "../../../assets/Gallery/galleryImages/60.webp";
import img61 from "../../../assets/Gallery/galleryImages/61.webp";
import img62 from "../../../assets/Gallery/galleryImages/62.webp";
import img64 from "../../../assets/Gallery/galleryImages/64.webp";
import img65 from "../../../assets/Gallery/galleryImages/65.webp";
import img66 from "../../../assets/Gallery/galleryImages/66.webp";
import img67 from "../../../assets/Gallery/galleryImages/67.webp";
import img68 from "../../../assets/Gallery/galleryImages/68.webp";
import img69 from "../../../assets/Gallery/galleryImages/69.webp";
import img70 from "../../../assets/Gallery/galleryImages/70.webp";
import img71 from "../../../assets/Gallery/galleryImages/71.webp";
import img72 from "../../../assets/Gallery/galleryImages/72.webp";
import img73 from "../../../assets/Gallery/galleryImages/73.webp";
import img74 from "../../../assets/Gallery/galleryImages/74.webp";
import img75 from "../../../assets/Gallery/galleryImages/75.webp";
import img76 from "../../../assets/Gallery/galleryImages/76.webp";
import img77 from "../../../assets/Gallery/galleryImages/77.webp";
import img78 from "../../../assets/Gallery/galleryImages/78.webp";
import img79 from "../../../assets/Gallery/galleryImages/79.webp";
import img80 from "../../../assets/Gallery/galleryImages/80.webp";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const GalleryPageSection2 = () => {
  const gallery = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
    img49,
    img50,
    img51,
    img52,
    img53,
    img54,
    img56,
    img57,
    img58,
    img59,
    img60,
    img61,
    img62,
    img64,
    img65,
    img66,
    img67,
    img68,
    img69,
    img70,
    img71,
    img72,
    img73,
    img74,
    img75,
    img76,
    img77,
    img78,
    img79,
    img80,
  ];

  const [currentIndex, setCurrentIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleImageClick = (index) => setCurrentIndex(index);

  const handleCloseModal = () => setCurrentIndex(null);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  }, [gallery.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  }, [gallery.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      handleNext();
    }

    if (touchStart - touchEnd < -150) {
      handlePrev();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleCloseModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, handleNext, handlePrev]);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <img
              src={gallery[currentIndex]}
              alt="Selected"
              className="max-w-full max-h-full object-contain"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
            <button
              className="absolute top-4 right-4 text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
              onClick={handleCloseModal}
            >
              <X size={24} />
            </button>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPageSection2;