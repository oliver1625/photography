import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input, FormGroup, FormInput } from 'reactstrap';

import TutorialDataService from '../../api/Tutorial'

function Header(props) {
    const {newTutorial, saveTutorial, handleInputChange , toggle} = props

    const [modal, setModal] = useState(false);

    return (
        <header className="">
            <div className="header">
                <h1>Users</h1>
                <div className="header-right">
                    <div>
                        <div className="" onClick={newTutorial}>
                            <Button color="danger"
                                onClick={toggle}>Add New User</Button>
                        </div>  
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
