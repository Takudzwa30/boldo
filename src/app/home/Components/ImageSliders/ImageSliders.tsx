// Components
import Image, { StaticImageData } from "next/image";

// Images
import ImageOne from "@/Assets/images/sliderLogos/one.png";
import ImageTwo from "@/Assets/images/sliderLogos/two.png";
import ImageThree from "@/Assets/images/sliderLogos/three.png";
import ImageFour from "@/Assets/images/sliderLogos/five.png";

// Style
import Style from "./ImageSliders.module.css";

type imageDataTypes = {
  id: number;
  imageSrc: StaticImageData;
};

const imageData: imageDataTypes[] = [
  {
    id: 1,
    imageSrc: ImageOne,
  },
  {
    id: 2,
    imageSrc: ImageTwo,
  },
  {
    id: 3,
    imageSrc: ImageThree,
  },
  {
    id: 4,
    imageSrc: ImageFour,
  },
];

const ImageSliders: React.FC = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.sliderWrapper}>
        <div className={Style.slider}>
          {imageData.map((image) => (
            <Image
              src={image.imageSrc}
              alt=""
              key={image.id}
              className={Style.singleImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSliders;
