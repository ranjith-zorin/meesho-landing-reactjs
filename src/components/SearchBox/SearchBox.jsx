import InputGroup from "react-bootstrap/InputGroup";
import { CiSearch } from "react-icons/ci";
import Form from "react-bootstrap/Form";
function SearchBox({
  w = "100%",
  txt = "Try Saree, Kurti or Search by Product Code",
}) {
  return (
    <InputGroup className="rounded-2 " style={{ width: `${w}` }}>
      <InputGroup.Text id="btnGroupAddon" style={{ borderRight: 0 }}>
        <CiSearch size={26} />
      </InputGroup.Text>
      <Form.Control
        type="text"
        placeholder={txt}
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
        className="shadow-none py-2 "
        style={{ outline: "none", borderLeft: 0 }}
      />
    </InputGroup>
  );
}

export default SearchBox;
