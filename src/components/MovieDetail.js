import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class MovieDetail extends Component{
    render(){
        return(
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={this.props.movieArr.image_url} />
                <Card.Body>
                    <Card.Title>{this.props.movieArr.title}</Card.Title>
                    <Card.Text style={{height:'12rem', overflow: 'scroll'}}>
                        {this.props.movieArr.overview}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> Release Date: {this.props.movieArr.released_on}</ListGroupItem>
                    <ListGroupItem>Popularity: {this.props.movieArr.popularity}</ListGroupItem>
                    <ListGroupItem>Average Votes: {this.props.movieArr.average_votes}</ListGroupItem>
                    <ListGroupItem>Total Voites: {this.props.movieArr.total_votes}</ListGroupItem>
                </ListGroup>
            </Card>
        )
    } 
}

export default MovieDetail;