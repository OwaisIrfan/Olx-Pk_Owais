import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


class Allcards extends Component {

    render() {


        return (
           

<div>
                    



<Card className = 'main-cards' style={{ width: '18rem', paddingTop: '2em'}}>


<div className='img-div' >
<Card.Img className='cardimages' variant="top" src={this.props.allcardsimages} />
</div>

<Card.Body>
<Card.Title className = 'card-title gfnntrnsrt'>{this.props.ebebtfbn}</Card.Title>
<Card.Text className='ioepowfj'>
{this.props.rnmbve}
</Card.Text>

<Button className = {this.props.frbobnn} variant="primary">FEATURED</Button>
<Button className = 'far fa-heart' variant="primary"></Button>
<p className='time'>OCT 27</p>
</Card.Body>
</Card>


</div>





        )
    }
}



export default Allcards;