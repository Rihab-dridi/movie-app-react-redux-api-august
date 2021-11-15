import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
export default function Add({ addHandler }) {
  //Modal manipulation
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //states to get the input from the user
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const [rate, setrate] = useState("");



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Movie title</Form.Label>
            <Form.Control
              type="text"
              placeholder="the movie title"
              onChange={(e) => settitle(e.target.value)}
              value={title}
            />
            <Form.Label>Movie description</Form.Label>
            <Form.Control
              type="text"
              placeholder="the movie description"
              onChange={(e) => setdescription(e.target.value)}
              value={description}
            />
            <Form.Label>Poster Url</Form.Label>
            <Form.Control
              type="text"
              placeholder="the Poster Url"
              onChange={(e) => setimgUrl(e.target.value)}
              value={imgUrl}
            />
            <Form.Label>movie Rate</Form.Label>
            <Form.Control
              type="text"
              placeholder="the movie Rate"
              onChange={(e) => setrate(e.target.value)}
              value={rate}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
