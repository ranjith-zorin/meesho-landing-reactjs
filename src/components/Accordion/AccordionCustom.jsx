import Accordion from "react-bootstrap/Accordion";
import SearchBox from "../SearchBox/SearchBox";
import Form from "react-bootstrap/Form";
import { meeshowcategories } from "../../variables/variable";
import { Badge, Button, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";
function AccordionCustom({
  show = true,
  badge = false,
  category,
  sct,
  direct = "vertical",
}) {
  const [subCategory, setSubCategory] = useState(sct);
  const [ctgperPage, setctgperPage] = useState(13);
  const [page, setPage] = useState(1);

  console.log("ctgperPage", subCategory);
  useEffect(() => {
    setSubCategory(sct.slice(0, page * ctgperPage));
  }, [page]);

  function handleItem() {
    setPage(1);
  }
  return (
    <Accordion
      onClick={handleItem}
      style={{ borderBottom: "1px solid #cecede" }}
    >
      <Accordion.Item eventKey="0" className="border-0 d-flex flex-column ">
        <Accordion.Header
        
        >
          {category}
        </Accordion.Header>
        <Accordion.Body
          className="p-0 d-flex flex-column row-gap-3"
          style={{
            maxWidth: "378px",
            overflowX: "hidden",
          
          }}
        >
          {show && <SearchBox w="100%" txt="Search" />}
          <Form>
            <Stack
              direction={`${direct}`}
              className=" flex-wrap column-gap-3 row-gap-3"
            >
              {subCategory.map((meesho, index) => (
                <div>
                  {show ? (
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        style={{ accentColor: "#9f2089" }}
                      />
                      <label
                        class="form-check-label"
                        style={{
                          fontSize: "16px",
                          lineHeight: "20px",
                          letterSpacing: "0.5px",
                          fontWeight: 500,
                          color: "gray",
                        }}
                      >
                        {meesho}
                      </label>
                    </div>
                  ) : (
                    <Badge
                      className="border bg-light rounded-4 p-2"
                      style={{
                        color: "gray",
                        fontSize: "16px",
                        lineHeight: "20px",
                        letterSpacing: "0.5px",
                        fontWeight: 500,
                        cursor: "pointer",
                      }}
                    >
                      {meesho}
                    </Badge>
                  )}
                </div>
              ))}
              {subCategory.length > 12 && (
                <Button
                  className=" btn-light"
                  style={{ color: "#9f2089", alignSelf: "start" }}
                  onClick={(e) => {
                    setPage(page + 1);

                    e.stopPropagation();
                  }}
                >
                  Show More
                </Button>
              )}
            </Stack>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionCustom;
