import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class LocationCard extends Component {
    render(){
        return(
            <>
                {/* <h2> {this.props.locationObj.display_name} </h2>
                <p> {`Latitude: ${this.props.locationObj.lat}`}</p>
                <p> {`Longitude: ${this.props.locationObj.lon}`}</p> */}
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&center=${this.props.locationObj.lat},${this.props.locationObj.lon}&zoom=13.9&size=1000x800`} />
                    <Card.Body>
                        <Card.Title>{this.props.locationObj.display_name}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{`Latitude: ${this.props.locationObj.lat}`}</ListGroupItem>
                        <ListGroupItem>{`Longitude: ${this.props.locationObj.lon}`}</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </>    
        )
    }
}

export default LocationCard;