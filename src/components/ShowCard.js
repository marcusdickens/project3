import React, {Component} from 'react'
import {Link, Router} from 'react-router-dom'
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap'


export default class ShowCard extends Component {

    render() {
        const {id, name, image, characters} = this.props.show
       

        return(
            <div>
                <Router>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <ListGroup className="list-group-flush">
                                
                            </ListGroup>
                            <Button variant="primary">Add Character</Button> {/*link to form */}
                        </Card.Body>
                    </Card>
                </Router>
                
            </div>
        )
    }
}

//{characters.map((character) => <ListGroupItem>`${character}`</ListGroupItem>)}
