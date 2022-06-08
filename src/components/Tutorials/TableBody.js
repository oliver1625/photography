import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';


function TableBody(props) {
    const { tutorials, deleteTutorial, updateTutorial, currentTutorial, getTutorial, toggle } = props

    return (
        <>
            <Table striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Address</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                {tutorials &&
                    tutorials.map((tutorial, index) => (
                    <tr key={index}>
                        <td>{tutorial.title}</td>
                        <td>{tutorial.description}</td>
                        <td>{tutorial.address}</td>
                        <td>{tutorial.createdAt}</td>
                        <td>
                            <div className="" onClick={toggle}>
                                <Button color="primary" onClick={() =>getTutorial(tutorial.id)}>Edit</Button> 
                            </div>
                        </td>
                        
                        <td><Button color="danger" onClick={deleteTutorial}>Delete</Button></td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>

    );
}

export default TableBody;
