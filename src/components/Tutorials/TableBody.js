import React from 'react';
import styled from "styled-components";
import { Row, Col, Button, Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'


function TableBody(props) {
    const { tutorials, deleteTutorial, getTutorial, toggle } = props

    return (
        <>
            <Row>               
                {tutorials &&
                    tutorials.map((tutorial, index) => (
                        <Col sm='3'>
                            <StyledCard>
                                <Card inverse>
                                    <CardImg
                                
                                    // src={require('../../img/Gokarna/20200615_171932.jpg')}

                                    // src={ tutorial.image ? `http://localhost:8080/${tutorial.image}` : require('../../img/Gokarna/20200615_171932.jpg')}
                                    src={`http://localhost:8080/${tutorial.image}`}
                                    width="100%"
                                    />
                                    <CardImgOverlay>
                                    <CardTitle tag="p">
                                    {tutorial.title}
                                    </CardTitle>
                                    <CardText>{tutorial.description}</CardText>
                                    <CardText>{tutorial.phone}</CardText>
                                    <CardText>
                                    {tutorial.address}
                                    </CardText>
                                    <div className="buttons">
                                        <div className="" onClick={toggle}>
                                        <FontAwesomeIcon onClick={() =>getTutorial(tutorial.id)} icon={faPen} />
                                        </div>
                                        <FontAwesomeIcon onClick={() =>deleteTutorial(tutorial.id)} icon={faTrash} />
                                    </div>
                                    </CardImgOverlay>
                                </Card>
                            </StyledCard>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}

export default TableBody;

const StyledCard = styled.div`
    transition: all .5s ease-in-out;
    .card{
        height: 20rem;
        .card-img{
            height: 100%;
            object-fit: cover;
        }
        .card-img-overlay{
            background: rgba(0,0,0,0.5);
        }
        .buttons{
            display: flex;

        }
    }
`;