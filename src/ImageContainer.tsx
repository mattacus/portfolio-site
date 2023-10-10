import { Carousel } from "react-carousel-minimal";
import "./imagecontainer.css";
import { GlobImages } from "./interfaces";

const formatImageData = (imageContent: GlobImages) => {
  let imageData = [] as Array<{ image: string; caption?: string }>;
  for (const [_, value] of Object.entries(imageContent)) {
    imageData.push({ image: value });
  }
  return imageData;
};

interface IImageContainerProps {
  images: GlobImages;
}

const ImageContainer: React.FunctionComponent<IImageContainerProps> = ({
  images,
}) => {
  return (
    <Carousel
      data={formatImageData(images)}
      // width={500}
      height={300}
      radius="2px"
      slideNumber={false}
      automatic={false}
      dots={true}
      pauseIconColor="white"
      pauseIconSize="40px"
      slideBackgroundColor="darkgrey"
      slideImageFit="cover"
      showNavBtn={true}
      thumbnails={false}
      style={{
        textAlign: "center",
        maxWidth: "850px",
        maxHeight: "300px",
      }}
    />
  );
};

export default ImageContainer;
