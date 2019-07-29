import React, {Component} from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class ElementoLista extends Component {
   
    render() {
        const { title, basePrice, capacityOfPeople, address, noBathroom, noBedroom, mainPicture } = this.props.list
        return (
            
            <div className = "Carta">
                
                   <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={mainPicture.urlPhoto} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            Ubicacion: {address.realAddress}<br></br>
                            Capacidad de personas: {capacityOfPeople}<br></br>
                            Numero de Baños: {noBathroom}<br></br>
                            Cantidad de habitaciones: {noBedroom}<br></br>
                        </Card.Text>
                        <Button variant="primary">Precio ${basePrice}</Button>
                    </Card.Body>
                    </Card>
            </div>  
        )
    }
}
export default ElementoLista