import Carousel from "./carousel/Carousel";
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
  projectTitle: string;
}

const ImageContainer: React.FunctionComponent<IImageContainerProps> = ({
  images,
  projectTitle,
}) => {
  const imgData = formatImageData(images);
  return (
    // @ts-ignore
    <Carousel
      idKey={projectTitle.replace(/ /g, "-")}
      data={imgData}
      height={300}
      radius="2px"
      slideNumber={false}
      automatic={false}
      dots={imgData.length > 1 ? true : false}
      slideBackgroundColor="#f8f8f8"
      slideImageFit="contain"
      showNavBtn={imgData.length > 1 ? true : false}
      thumbnails={false}
    />
  );
};

export default ImageContainer;
