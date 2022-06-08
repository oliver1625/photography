import React, { useEffect, useState } from 'react'
import Header from './Header'
import TableBody from './TableBody'
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input, FormGroup, FormInput } from 'reactstrap';

import TutorialDataService from '../../api/Tutorial'

export default function Tutorial() {
  const { id }= useParams();
  // let navigate = useNavigate();
  
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false
  };

  const [tutorials, setTutorials] = useState([]);
  const [tutorial, setTutorial] = useState(initialTutorialState)
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false)
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveTutorials()
  }, []);

  const handleInputChange = event => {
      const { name, value } = event.target;
      setTutorial({ ...tutorial, [name]: value });
  }

  const saveTutorial = () => {
      var data = {
          title: tutorial.title,
          description: tutorial.description
      };

      TutorialDataService.create(data)
          .then(response => {
              setTutorial({
              id: response.data.id,
              title: response.data.title,
              description: response.data.description,
              published: response.data.published
              });
              setSubmitted(true);
              console.log(response.data);
          })
          .catch(e => {
              console.log(e);
          });
  };

  const newTutorial = () => {
      setTutorial(initialTutorialState);
      setSubmitted(false);
  };

  const getTutorial = id => {
    TutorialDataService.get(id)
      .then(response => {

        setCurrentTutorial({ 
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: false
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  const updateTutorial = () => {
    TutorialDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        console.log("currentTutorial",currentTutorial);
        setTutorial("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    getTutorial()
    console.log("currenttutorialID",currentTutorial.id);
    TutorialDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        // navigate("/tutorials");
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div>
        <div className="table">
            <Header
              saveTutorial={saveTutorial}
              newTutorial={newTutorial}
              handleInputChange={handleInputChange}
              tutorial={tutorial}
              retrieveTutorials={retrieveTutorials}
              toggle={toggle}
            />
            <div className="table-responsive">
                <div className="table-wrapper">
                    <TableBody                      
                      tutorials={tutorials}
                      deleteTutorial={deleteTutorial}
                      updateTutorial={updateTutorial}
                      message={message}
                      currentTutorial={currentTutorial}
                      toggle={toggle}
                      getTutorial={getTutorial}
                      />
                </div>
            </div>
        </div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader
              toggle={toggle}>Add A New User</ModalHeader>
          <ModalBody>
            <Form>
              <Row>
                  <Col md={6}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                        id="title"
                        name="title"
                        placeholder="title"
                        type="text"
                        value={currentTutorial.title}
                        onChange={handleInputChange}
                        />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                          id="description"
                          name="description"
                          placeholder="Description"
                          type="text"
                          value={currentTutorial.description}
                          onChange={handleInputChange}
                        />
                    </FormGroup>
                  </Col>
              </Row>
              <FormGroup>
                  <Label for="address">
                  Address
                  </Label>
                  <Input
                  id="address"
                  name="address"
                  placeholder="Addresss"
                  value={currentTutorial.address}
                  onChange={handleInputChange}
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="phone">
                  Phone Number
                  </Label>
                  <Input
                  id="phone"
                  name="phone"
                  placeholder="98989898"
                  type='number'
                  onChange={handleInputChange}
                  />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
              <div className=""  onClick={toggle}>
                <Button color="primary" onClick={saveTutorial}>Submit</Button>
              </div>
          </ModalFooter>
        </Modal>
    </div>
  )
}
