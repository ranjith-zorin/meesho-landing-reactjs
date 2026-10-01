import React from "react";
import { Stack } from "react-bootstrap";

function CategoryItem({ name, img, width = "148px", height = "148px", style }) {
  return (
    <Stack className="categoryItem row-gap-3 text-decoration-none" as="a">
      <img src={img} alt={name} srcset="" width={width} height={height} />
      <span className="text-center" style={style}>
        {name}
      </span>
    </Stack>
  );
}

export default CategoryItem;
  