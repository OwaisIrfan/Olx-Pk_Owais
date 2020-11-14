import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'



class Parentcard extends Component {
    render() {
      return (
        
        <div>

      <Card className = 'main-cards' style={{ width: '18rem', paddingTop: '2em'}}>
      <Card.Img style={{ width: 'auto' }} variant="top" src={this.props.img} />
      <Card.Body>
          <Card.Title className = 'card-title'>{this.props.price}</Card.Title>
          <Card.Text className='ioepowfj'>
          {this.props.detail}
          </Card.Text>

          <Button className = 'featured' variant="primary">FEATURED</Button>
          <Button className = 'far fa-heart' variant="primary"></Button>
          <p className='time'>{this.props.time}</p>
      </Card.Body>
  </Card>
  </div>
  )
    }
  }

export default Parentcard;
