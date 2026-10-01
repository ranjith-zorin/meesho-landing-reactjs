import React from "react";
import { Stack } from "react-bootstrap";

function FeatureItem({ icon, text }) {
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="mx-4"
    >
      <img src={icon} alt={text} srcset="" width="20px" height="20px" />
      <span style={{ fontSize: "14px" }}>{text}</span>
    </Stack>
  );
}

export default FeatureItem;
