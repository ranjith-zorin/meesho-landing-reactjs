import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import smartshop from "../src/assets/hero.webp";
import { Button, Col, Container, Row, Stack, Form } from "react-bootstrap";
import {
  features,
  heroCategories,
  marketing,
  meeshowcategories,
  popularBrands,
} from "./variables/variable";
import FeatureItem from "./components/FeatureItem/FeatureItem";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import { HiOutlineChevronRight } from "react-icons/hi";
import { VscVerifiedFilled } from "react-icons/vsc";
import CarouselSlick from "./components/Carousel/Carousel";
import PopularBrandCard from "./components/PopBrandCard/PopularBrandCard";
import Marquee from "react-fast-marquee";
import firstOrder from "./assets/firstOrder.webp";
import ProductCard from "./components/ProductCard/ProductCard";
import AccordionCustom from "./components/Accordion/AccordionCustom";
function App() {
  const MarqueeMain = Marquee.default;

  const [products, setProducts] = useState([]);

  const [perPage, setPerPage] = useState(7);

  const [page, setPage] = useState(1);

  const [filterProducts, setFilterProducts] = useState([]);
  const [scroll, setScroll] = useState(700);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);

        setFilterProducts(products.slice(0, page * perPage));
      });
  }, [page]);
  console.log("filterProducts:", filterProducts);

  const handleScroll = () => {
    const hgt = window.innerHeight + window.scrollY;
    if (hgt > scroll) {
      setPage((pg) => pg + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  console.log("innerHeight:", window.innerHeight + window.scrollY);
  return (
    <div>
      <Header />
      <section className="position-relative">
        <img src={smartshop} alt="" srcset="" className="w-100 h-100" />
        <Stack
          className="position-absolute"
          style={{ left: "72%", top: "50%", transform: "translateY(-50%)" }}
        >
          <h3 className="display-5 fw-bold text-light">Smart Shopping </h3>
          <h3 className="display-5 fw-bold text-light">Trusted by Millions</h3>
          <Button
            className="fs-2 bg-light border-0 "
            style={{
              padding: "11px 41px 13px",
              width: "60%",
              color: "rgb(88, 10, 70)",
            }}
          >
            Shop Now
          </Button>
        </Stack>
      </section>
      <section
        className="featureContainer p-3"
        style={{ backgroundColor: "#fdeefa" }}
      >
        <Stack
          direction="horizontal"
          className="featureDiv px-4  justify-content-center align-items-center rounded-2"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid rgba(220, 148, 208, 0.5)",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
        >
          {features.map(({ icon, text }) => (
            <FeatureItem icon={icon} text={text} />
          ))}
        </Stack>
      </section>
      <section>
        <Container
          className="categoryContainer px-5"
          style={{ paddingTop: "40px", paddingBottom: "40px" }}
        >
          <Stack
            direction="horizontal"
            className="py-2 column-gap-4"
            style={{ minWidth: "100%", overflow: "scroll" }}
          >
            {heroCategories.map(({ name, img }) => (
              <CategoryItem
                name={name}
                img={img}
                style={{
                  fontSize: "14px",
                  letterSpacing: "0.5px",
                  lineHeight: "21px",
                  color: "#353543",
                }}
              />
            ))}
          </Stack>
        </Container>
      </section>
      <section
        className="px-px-4"
        style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
      >
        <Stack direction="horizontal" className="justify-content-between ">
          <Stack direction="horizontal" className="column-gap-1">
            <h4
              style={{
                fontSize: "2rem",
                lineHeight: "3rem",
                letterSpacing: "0.5px",
                fontWeight: 400,
                color: "#353543",
              }}
            >
              Original Brands{" "}
            </h4>
            <VscVerifiedFilled className="fs-1" style={{ color: "#6625ff" }} />
          </Stack>

          <a
            style={{
              color: "#9f2089",
              fontSize: "18px",
              lineHeight: "27px",
              letterSpacing: "0.5px",
              fontWeight: 500,
            }}
          >
            VIEW ALL
            <HiOutlineChevronRight />
          </a>
        </Stack>
        <CarouselSlick />
      </section>

      <section
        className="marquee-container py-2 "
        style={{ backgroundColor: "#efe8fe" }}
      >
        <MarqueeMain
          className="d-flex justify-content-justify-content-evenly  py-4"
          pauseOnHover={true}
        >
          {popularBrands.map((popBrand) => (
            <PopularBrandCard popBrand={popBrand} />
          ))}
        </MarqueeMain>
      </section>
      <section>
        <Container fluid className="p-0 position-relative">
          <img src={firstOrder} alt="" srcset="" width="100%" />
          <Button
            className="position-absolute px-5 py-2 bg-body border-0 "
            style={{
              left: "4%",
              top: "70%",
              width: "320px",
              height: "4rem",
              fontSize: "34px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              color: "#580a46",
            }}
          >
            Download Now
          </Button>
          <Stack
            direction="horizontal"
            className="position-absolute column-gap-5 "
            style={{ right: "8%", top: "15%" }}
          >
            {marketing.map(({ name, img }) => (
              <CategoryItem
                name={name}
                img={img}
                width="220px"
                height="326px"
                style={{
                  paddingTop: "4px",
                  padddingBottom: "6px",
                  fontSize: "22px",
                  lineHeight: "33px",
                  fontWeight: 600,
                  backgroundColor: "#fff5e5",
                  borderRadius: "12px",
                  color: "#580a46",
                  border: "solid 1px #ee9115",
                }}
              />
            ))}
          </Stack>
        </Container>
      </section>
      <Stack className="px-5 py-5 row-gap-5">
        <Stack className="row-gap-5">
          <span
            style={{
              fontSize: "2rem",
              lineHeight: "2.5rem",
              letterSpacing: "0.5px",
              fontWeight: 500,
              color: "rgb(53, 53, 67)",
              fontStyle: "normal",
            }}
          >
            Products For You
          </span>

          <Container fluid>
            <Row>
              <Col xl={3} className="px-0 d-flex flex-column row-gap-3 h-50">
                <Form.Select
                  aria-label="Default select example"
                  className="px-4 py-2 "
                  style={{ width: "98%" }}
                >
                  <option>
                    Sort by: <span className="fw-bolder">Relevance</span>{" "}
                  </option>
                  <option value="1">Sort by: New Arrivals</option>
                </Form.Select>
                <Stack className="border p-4 ">
                  <Stack className="row-gap-3">
                    <Stack className="row-gap-1 ">
                      <h5
                        className="mb-0 "
                        style={{
                          fontSize: "16px",
                          lineHeight: "20px",
                          letterSpacing: "0.5px",
                          fontWeight: 600,
                        }}
                      >
                        FILTERS{" "}
                      </h5>
                      <span>1000+ Products</span>
                      <hr className="w-100" />
                    </Stack>

                    {meeshowcategories.map((msc) => (
                      <AccordionCustom
                        badge={true}
                        category={msc.category}
                        sct={msc.subCategory}
                        show={msc.show}
                        direct={msc.direct}
                      />
                    ))}
                  </Stack>
                </Stack>
              </Col>
              <Col
                xl={9}
                className="d-flex flex-row flex-wrap column-gap-3 row-gap-4"
              >
                {filterProducts.map((product) => (
                  <ProductCard img={product.images[0]} />
                ))}
              </Col>
            </Row>
          </Container>
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
