import { Component, React } from "react";
import ReactDom from "react-dom";
import "./index.css";
import "./animation.css";
import { flashcards } from "./flashcards.js";
import {HeaderTab, CurrentCard} from "./component.js";


function App() {
  return (
    <>
      <div className="header">
        <div id="home">flashcard</div>
        <HeaderTab title="help" />
        <a href="/">{"about"}</a>
      </div>
      <Cards />
    </>
  );
}

//this component is special because it has states!
class Cards extends Component {
  constructor(prop) {
    super(prop);

    //keeps track of the "state" that the component is in. 
    this.state = {
      selCard: null,
      flashcards: flashcards,
      filteredCards: flashcards,
      inputValue: "",
    };
  }

  //get currrent card to display on the first half of the page
  getCurrCard = (event) => {
    let selCard = event.target
      .closest(".flashcard")
      .querySelector("h3").innerText;
    this.setState({
      selCard: flashcards.find((card) => card.title == selCard),
    });
  };

  //this is the search function
  searchOnChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      filteredCards: this.state.flashcards.filter((card) => {
        return card.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      }),
    });
  };

  render() {
    return (
      <>
        <div className="recentCards boxsizing">
          <CurrentCard selCard={this.state.selCard} />
        </div>
        <div className="searchFilter">
          <input
            type="text"
            placeholder="search..."
            value={this.state.inputValue}
            onChange={this.searchOnChange}
          ></input>
        </div>
        <div className="allCards boxsizing">
          <div id="addNewSet">
            <div className="plus"></div>
            <p>Add new set</p>
          </div>
          
          <div
            className="flashcard boxsizing hvr-float-shadow"
            onClick={this.getCurrCard}
          >
            <div className="upperInfo">
              <hr></hr>
              <div>
                <div className="numBox"></div>
                <p>{flashcards[0].numCards}</p>
              </div>
            </div>
            <div className="lowerInfo">
              <h3>{flashcards[0].title}</h3>
              <h4>created: {flashcards[0].dateCreated}</h4>
              <h4>modified: {flashcards[0].dateModified}</h4>
            </div>
          </div>
          <div
            className="flashcard boxsizing hvr-float-shadow"
            onClick={this.getCurrCard}
          >
            <div className="upperInfo">
              <hr></hr>
              <div>
                <div className="numBox"></div>
                <p>{flashcards[1].numCards}</p>
              </div>
            </div>
            <div className="lowerInfo">
              <h3>{flashcards[1].title}</h3>
              <h4>created: {flashcards[1].dateCreated}</h4>
              <h4>modified: {flashcards[1].dateModified}</h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
