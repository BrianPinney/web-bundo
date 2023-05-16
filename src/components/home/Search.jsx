import { useState } from "react";
import { Form, Button, InputGroup} from "react-bootstrap";
import { TbMapSearch } from "react-icons/tb";

export default function Search({searchResult, setSearchResult}) {
  const [searchCity, setSearchCity] = useState("");
  // const [searchResult, setSearchResult] = useState();

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `https://bundo-bp.web.app/docks/search/${searchCity}`
      );
      const data = await response.json();
      setSearchResult(data);
    } catch (err) {
      console.error(err);
    }
  };

  console.table(searchResult);

  return (
    <div>
      <Form onSubmit={handleSearch} className="d-flex">
              
        <InputGroup className="mb-3">
        <Form.Control
          type="search"
          placeholder="City"
          value={searchCity}
          aria-label="Search"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <Button onClick={handleSearch} variant="outline-success" id="button-addon2">
        <TbMapSearch/>
        </Button>
      </InputGroup>
            </Form>
      
    </div>
  );
}
