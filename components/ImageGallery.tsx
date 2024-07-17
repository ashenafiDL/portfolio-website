"use client";

import LightGallery from "lightgallery/react";
import Image from "next/image";
import Link from "next/link";

// import styles
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

type ImageType = {
  src: string;
  alt: string;
};

type ImageGalleryProps = {
  images: Array<ImageType>;
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="App">
      <LightGallery
        elementClassNames="flex flex-row gap-2"
        download={false}
        mousewheel
      >
        {images.map((image, index) => {
          return (
            <Link href={image.src} key={index}>
              <Image width={128} height={128} alt={image.alt} src={image.src} />
            </Link>
          );
        })}
      </LightGallery>
    </div>
  );
}
