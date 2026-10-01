import React from "react";
import { Stack } from "react-bootstrap";

function LineText(props) {
  return (
    <Stack direction="horizontal" className="align-items-center" gap={3}>
      <span
       
        style={{
          letterSpacing: 0.5,
          fontWeight: 500,
          lineHeight: "20px",
          color: "#666671",
        }}
      >
        {props.text}
      </span>
      <div className="hline" />
    </Stack>
  );
}

export default LineText;
