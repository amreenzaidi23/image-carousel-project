import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import { PIXABAY_URL } from "./Constants";

class App extends Component {
  //Set default value for property
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      property: {},
      ind: 0
    };
  }
  fetchImages() {
    //Fetch data from url
    fetch(PIXABAY_URL)
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

  componentDidMount() {
    this.fetchImages();
  }

  //This function is use to perform the next button
  nextProperty = () => {
    const newIndex = this.state.ind + 1;
    console.log("prev:: " + newIndex + "ind : " + this.state.ind);

    this.setState({
      property: this.state.properties[newIndex],
      ind: newIndex
    });
  };
  //This function is use to perform the previous button
  prevProperty = () => {
    const newIndex = this.state.ind - 1;
    console.log("prev:: " + newIndex + "ind : " + this.state.ind);
    this.setState({
      property: this.state.properties[newIndex],
      ind: newIndex
    });
  };

  //Render into UI
  render() {
    const { property } = this.state;
    const { ind } = this.state;
    console.log("ind" + ind);

    console.log("res" + this.state);
    return (
      <div className="App">
        <br></br>

        <div className="page">
          <section>
            <h1>Pixabay Image Carousel Mobile</h1>
          </section>
          <div className="card-test">
            <h1 className="header-test">Carousel Test</h1>
          </div>
          <br></br>
          <br></br>

          <div
            //Next arrow
            onClick={() => this.nextProperty()}
            disabled={this.state.ind === this.state.properties.length - 1}
            className="card-arrow"
            style={{
              pointerEvents:
                this.state.ind === this.state.properties.length - 1
                  ? "none"
                  : "auto",
              filter:
                this.state.ind === this.state.properties.length - 1
                  ? "blur(2px)"
                  : "blur(0px)",

              padding: "10px 40px",
              top: "10",
              margin: "0 auto",

              position: "absolute",
              left: "59%",
              // backgroundPosition: "right center",
              top: "300px",
              height: "40px",
              width: "40px"
              // zIndex: "200"
            }}
          ></div>
          <span
            //Previous arrow

            onClick={() => this.prevProperty()}
            disabled={this.state.ind === 0}
            className="card-arrow"
            style={{
              filter: this.state.ind === 0 ? "blur(2px)" : "blur(0px)",
              pointerEvents: this.state.ind === 0 ? "none" : "auto",
              padding: "10px 40px",
              position: "absolute",
              top: "300px",
              height: "40px",
              left: "32%",
              width: "40px",
              transform: "rotate(180deg)"
            }}
          ></span>
          <Card property={property} indx={ind} />
        </div>
      </div>
    );
  }
}

export default App;
