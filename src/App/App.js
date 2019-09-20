import React, { Component } from 'react';
import Receipt from '../Receipt/Receipt'
import Search from '../Search/Search'
import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 90vh;
  width: 90vw;
  background-color: #e1e2e7;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`

const ReceiptList = styled.article`
  height: 500px;
  width: 85vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const receipt1 = {
  person: "Karolin",
  order: {
    main: "Burrito",
    protein: "Organic Tofu",
    rice: "Purple Rice",
    sauce: "Green Crack",
    toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
    drink: "Korchata",
    cost: 22
  },
  paid: false
};
const receipt2 = {
  person: "Jerrica",
  order: {
    main: "Rice Bowl",
    protein: "Ginger Soy Chix",
    rice: "Sticky Rice",
    sauce: "Korilla",
    toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
    drink: "Korchata",
    cost: 19
  },
  paid: false
};
const receipt3 = {
  person: "Matt",
  order: {
    main: "Salad Bowl",
    protein: "Organic Tofu",
    rice: "none",
    sauce: "K'lla",
    toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
    drink: "Sparkling Blood Orange Soda",
    cost: 20
  },
  paid: false
};

const receiptsData = [receipt1, receipt2, receipt3]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      receipts: receiptsData,
      searchValue: ""
    }

    this.updateSearchValue = this.updateSearchValue.bind(this)
  }

  updateSearchValue(evt){
    evt.preventDefault()
    this.setState({
      searchValue: evt.target.value
    })
  }

  render () {
    const receiptsJsx = this.state.receipts
    .filter(receiptsData => {
      // Capturing the values of 1) each name 2) the search input box value which is already set in state
      const person = receiptsData.person.toLowerCase();
      const searchValue = this.state.searchValue.toLowerCase();

      // Compares the names in searchValue and in the data. If no character is entered, it resolves to true which allows a blank search box to return all values. Once a character is entered, it performs the .includes method and only returns matches. 
      const isSearchValid = searchValue ? person.includes(searchValue) : true;

      // Because all of this is inside the .filter method, it evaluates return for every element of the array, only returning true evaluations for rendering.
      return !receiptsData.paid && isSearchValid
    })
    .map((receiptsMapEl, i) => (
      
      <Receipt {...receiptsMapEl} key={i} personName={receiptsMapEl.person} />
    ))
    return (
      <Wrapper>
        
        <h1 className="truck-name">Korilla Receipts</h1>
        
        <Search searchValue={this.state.searchValue} updateSearchValue={this.updateSearchValue} />

        <ReceiptList>{receiptsJsx}</ReceiptList>
      </Wrapper>
    )
  }
}

export default App;
