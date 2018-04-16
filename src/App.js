import React, { Component } from "react";
import Clicky from "./components/Clicky";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import "./App.css";
import Score from "./components/Score";

class App extends Component {
  state = {
    images: images,
    score: 0,
    topScore: 0,
    text: "",
    clickedImages: []
  };

handleShuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

clickyFunction = id => {
  let clickedImage = this.state.images.filter(image => image.id === id);
  let array = this.state.clickedImages;
  if (array.indexOf(clickedImage[0].id) === -1) {
    array.push(clickedImage[0].id);

    this.setState({
      clickedImages: array,
      text: "Good Job",
      score: this.state.score + 1
    }) 

  if (array.length > this.state.topScore) {
    this.setState({ topScore: array.length })
    console.log("Top Score", this.state.topScore)
  } 
  } else {
    this.setState({
      score: 0,
      topScore: 0,
      images: images,
      clickedImages: [],
      text: "You Lose!"
    });
  }
  this.setState({images: images})
  this.handleShuffle(images);
  
};

  render() {
    return (
      
      <Wrapper>
        <Score 
          score={this.state.score}
          topScore={this.state.topScore}
          text={this.state.text}
        />
        <Title>BRO</Title>
          {images.map(image => 
          <Clicky {...image} 
            id={image.id}
            key={image.id}
            clickyFunction={this.clickyFunction}  
          />
        )}
      </Wrapper>
    );
  }
}

export default App;
