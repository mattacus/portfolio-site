import { Carousel } from "react-carousel-minimal";
import { Parallax } from "react-scroll-parallax";
import "./imagecontainer.css";

const data = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
  },
  {
    image:
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
  },
];

const ImageContainer = () => {
  return (
    <Parallax translateX={["0px", "100px"]}>
      <div className="image-container">
        <Carousel
          data={data}
          width={500}
          height={300}
          radius="10px"
          slideNumber={false}
          automatic={false}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          showNavBtn={true}
          thumbnails={false}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "300px",
          }}
        />
      </div>
    </Parallax>
  );
};

export default ImageContainer;
