import React, { Component } from "react";
import "./App.css";
import Card from "./Card";

// class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      property: {},
      ind: 0
    };
    //Fetch data from url
    fetch(
      "https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo"
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log("res " + responseJson.hits[0]);
        console.log("res " + responseJson.hits);

        this.setState({
          properties: responseJson.hits,
          property: responseJson.hits[0]
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  //Next button action
  nextProperty = () => {
    const newIndex = this.state.ind + 1;
    console.log("prev:: " + newIndex + "ind : " + this.state.ind);
    this.setState({
      property: this.state.properties[newIndex],
      ind: newIndex
    });
  };

  //Previous button action
  prevProperty = () => {
    const newIndex = this.state.ind - 1;
    console.log("prev:: " + newIndex + "ind : " + this.state.ind);
    this.setState({
      property: this.state.properties[newIndex],
      ind: newIndex
    });
  };

  //View in page
  render() {
    const { property } = this.state;
    const { ind } = this.state;
    const { properties } = this.state;
    return (
      <div className="App">
        <div className="page">
          <section>
            <h1>Pixabay Image Carousel Desktop</h1>
          </section>
          <div className="card-test">
            <h1 className="header-test">Carousel Test</h1>
          </div>
          <br />
          <br />
          <div className="col">
            <div className={`cards-slider active-slide-${this.state.ind}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${this.state.ind *
                    (100 / properties.length)}%)`
                }}
              >
                {properties.map(property => (
                  <Card key={property.id} property={property} indx={ind} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="card-test-d">
          <button
            onClick={() => this.prevProperty()}
            disabled={this.state.ind === 0}
            style={{ backgroundColor: "lightblue" }}
          >
            Prev
          </button>
          <button
            onClick={() => this.nextProperty()}
            disabled={this.state.ind === this.state.properties.length - 1}
            style={{ backgroundColor: "lightblue" }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
