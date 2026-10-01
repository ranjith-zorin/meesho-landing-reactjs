import { useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { brands } from "../../variables/variable";
import Stack from "react-bootstrap/Stack";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

 
  const corousalRef = useRef(null);
  const handleSlideLeft = () => {
    corousalRef.current.prev();
  };
  const handleSlideRight = () => {
    corousalRef.current.next();
  };
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="position-relative">
      <Stack
        direction="horizontal"
        className="justify-content-between  position-absolute w-100  z-2"
        style={{ top: "45%" }}
      >
        <div
          className="bg-light  rounded-5  d-flex justify-content-center align-items-center "
          style={{
            width: "40px",
            height: "40px",
            border: "solid 1px gray",
            cursor: "pointer",
          }}
          onClick={handleSlideLeft}
        >
          <FiChevronLeft fontSize={24} />
        </div>

        <div
          className="bg-light rounded-5 d-flex justify-content-center align-items-center"
          style={{
            width: "40px",
            height: "40px",
            border: "solid 1px gray",
            cursor: "pointer",
          }}
          onClick={handleSlideRight}
        >
          <FiChevronRight fontSize={24} />
        </div>
      </Stack>

      <Carousel
      interval={null}
      activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        ref={corousalRef}
      >
        <Carousel.Item>
          <Stack direction="horizontal" className="flex-nowrap">
            {brands.map(({ img }) => (
              <img src={img} className="m-3" style={{ cursor: "pointer" }} />
            ))}
          </Stack>
        </Carousel.Item>
        <Carousel.Item>
          <Stack direction="horizontal" className="flex-nowrap">
            {brands.map(({ img }) => (
              <img src={img} className="m-3" style={{ cursor: "pointer" }} />
            ))}
          </Stack>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
