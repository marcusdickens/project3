import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap'


export default class ShowCard extends Component {

    render() {
        const {name, image} = this.props.show
       

        return(
            <div>
                <Card className="card">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className='name'>{name}</Card.Title>
                        <ListGroup className="list-group-flush">
                                
                        </ListGroup>
                        <Link to="/AddCharacter"><Button variant="primary">Add Character</Button> </Link>{/*link to form */}
                    </Card.Body>
                </Card> 
            </div>
        )
    }
}

//{characters.map((character) => <ListGroupItem>`${character}`</ListGroupItem>)}
