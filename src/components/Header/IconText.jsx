import { Stack } from "react-bootstrap";

function IconText({ icon, text }) {
  return (
    <Stack className="justify-content-center align-items-center ">
      {icon}
      <span
        style={{
          color: "rgb(53, 53, 67)",
          letterSpacing: 0.5,
          fontWeight: 500,
          lineHeight: "20px",
          color: "#666671",
        }}
      >
        {text}
      </span>
    </Stack>
  );
}

export default IconText;
