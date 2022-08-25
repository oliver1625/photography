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
    address: "",
    description: "",
    phone: "",
    // image: ""
  };

  const [tutorials, setTutorials] = useState([]);
  const [image, setImage] = useState();
  const [tutorial, setTutorial] = useState(initialTutorialState)
  const [picture, setPicture] = useState({});

  const [modal, setModal] = useState(false);
  const [update, setUpdate] = useState(true);
  const toggle = () => setModal(!modal);

  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then(response => {
        setTutorials(response.data);
        console.log("called  retriveTutorial function",response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveTutorials()
  }, [update]);

  const handleInputChange = e => {
      const { name, value } = e.target;
      setTutorial({ ...tutorial, [name]: value });
  }

  const saveTutorial = () => {
  
      // var data = {
      //     id: tutorial.id,
      //     title: tutorial.title,
      //     description: tutorial.description,
      //     address: tutorial.address,
      //     phone: tutorial.phone,
      //     image: tutorial.file.path
      // };

      let formData = new FormData();
      formData.append('image', image, image.name);
      formData.append('title', tutorial.title);
      formData.append('description', tutorial.description);
      formData.append('address', tutorial.address);
      formData.append('phone', tutorial.phone);
      
      TutorialDataService.create(formData)
          .then(response => {
            setUpdate(!update)
              setTutorial({
                // title: response.data.title,
                // description: response.data.description,
                // address: response.data.address,
                // phone: response.data.phone,
                // image: response.file.path,
              });
              console.log("called get saveTutorial function",response.data);
          })
          .catch(e => {
              console.log(e);
          });
  };

  const newTutorial = () => {
      setTutorial(initialTutorialState);
  };

  const getTutorial = id => {
    TutorialDataService.get(id)
      .then(response => {
        setTutorial({ 
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          address: response.data.address,
          phone: response.data.phone,
        });
        console.log("called geTutorial function",response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  const updateTutorial = () => {
    
    TutorialDataService.update(tutorial.id, tutorial)
      .then(response => {
        setUpdate(!update)
        console.log("called updateTutorial function",response.data);
        console.log("tutorial",tutorial);
        setTutorial("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = (id) => {
    TutorialDataService.remove(id)
      .then(response => {
        setUpdate(!update)
        console.log("called deleteTutorial function",response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div>
        <div className="">
            <Header
              saveTutorial={saveTutorial}
              newTutorial={newTutorial}
              handleInputChange={handleInputChange}
              tutorial={tutorial}
              retrieveTutorials={retrieveTutorials}
              toggle={toggle}
            />
            <div className="">
                  <TableBody                      
                    tutorials={tutorials}
                    deleteTutorial={deleteTutorial}
                    updateTutorial={updateTutorial}
                    toggle={toggle}
                    getTutorial={getTutorial}
                    />
            </div>
        </div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader
              toggle={toggle}>Add A New User</ModalHeader>
          <ModalBody>
            <Form onSubmit={saveTutorial} enctype="multipart/form-data">
              <Row>
                  <Col md={6}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                        id="title"
                        name="title"
                        placeholder="title"
                        type="text"
                        value={tutorial.title}
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
                          value={tutorial.description}
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
                  value={tutorial.address}
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
                  value={tutorial.phone}
                  type='number'
                  onChange={handleInputChange}
                  />
              </FormGroup>
              <FormGroup>
              <Label for="exampleFile">
                File
              </Label>
              <Input
                id="exampleFile"
                name="image"
                value={tutorial.image}
                type="file"
                onChange={(event) =>setImage(event.target.files[0])}
              />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
              <div className=""  onClick={toggle}>
                {
                  tutorial.id ? 
                  <Button color="primary" onClick={updateTutorial}>Update</Button> 
                  :
                  <Button color="primary" onClick={saveTutorial}>Submit</Button>

                }
                
              </div>
          </ModalFooter>
        </Modal>
    </div>
  )
}
