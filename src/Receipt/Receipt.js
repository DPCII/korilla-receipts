import React, { Component } from 'react'
import styled from 'styled-components';

const DisplayReceipt = styled.div`
    height: 300px;
    width: 250px;
    border: red 1px dashed;
    margin: 1%;
`

export default class Receipt extends Component {
    render() {
        const { person, order, paid } = this.props;
        const { main, protein, drink, rice, toppings, cost, sauce } = order;
        const displayToppings = [...toppings]
        return (
            <DisplayReceipt>
                <ul>
                    <h3>{person}</h3>
                    <li>{main}</li>
                    <li>{protein}</li>
                    <li>{drink}</li>
                    <li>{rice}</li>
                    <li>{cost}</li>
                    <li>{sauce}</li>
                    <li>
                        <ul>
                            {displayToppings}
                        </ul>
                    </li>
                    <li>{paid ? "Yes" : "No"}</li>
                </ul>
                
            </DisplayReceipt>
        )
    }
}
