import React, {Component} from 'react';
import ElementoLista from "./ElementoLista"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Lista extends Component{
    
    render(){
        return (
            <div className="Lista">
                <div className="Buscador">
                <Form>
                    <div className ="Elemento">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>The best Accommodations</Form.Label>
                    <Form.Control type="text" placeholder="Search for destination in Guatemala" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
                </div>
                </Form>
                </div>
                {Object.keys(this.props.items).map(item => (
                    <ElementoLista 
                        list={this.props.items[item]}
                        key={item}
                    />
                ))}
            </div>
            )
        }
    }
     
export default Lista