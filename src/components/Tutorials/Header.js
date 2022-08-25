import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input, FormGroup, FormInput } from 'reactstrap';

import TutorialDataService from '../../api/Tutorial'

function Header(props) {
    const {newTutorial, saveTutorial, handleInputChange , toggle} = props

    const [modal, setModal] = useState(false);

    return (
        <header className="d-flex justify-content-end align-items-center p-5">
            <div className="" onClick={newTutorial}>
                <Button color="danger"
                    onClick={toggle}>Add New Image</Button>
            </div>  
        </header>
    );
}

export default Header;
