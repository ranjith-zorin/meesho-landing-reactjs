import React from "react";
import { Stack } from "react-bootstrap";

function PopularBrandCard({ popBrand }) {
  return (
    <Stack
      className="justify-content-center align-items-center p-1 rounded-1 bg-body mx-3 brandImage "
      style={{
        width: "200px",
        height: "100px",
        cursor: "pointer",
      }}
    >
      <img src={popBrand} alt="" srcset="" width={107} height={68} />
    </Stack>
  );
}

export default PopularBrandCard;
