import React, {Component} from "react"
import Lista from "./Lista"
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class Content extends Component {
    constructor(props) {
        super(props)
        this.state ={
            items:[]
        }
    } 
    componentDidMount() {
        axios.get("https://viaguate-10-backend-cliente.mybluemix.net/api/accommodation/ViewVacationrentals")
        .then(res => {
            this.setState({
                 items: res.data
                })
            })
    }
    render() {
        return (
            <BrowserRouter>
                    <div className="Lista-General">
                         <Switch>
                              <Route exact path="/" render={() => {
                                   return(
                                        <Lista
                                        items={this.state.items}
                                        />
                                   )
                              } } />
                        </Switch>
                    </div>
               </BrowserRouter>
        )
    }
}
export default Content