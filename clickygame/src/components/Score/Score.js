import React from "react";
import "./score.css";

class Score extends React.Component {
    state = {
        score: 0,
        count: 0
    };

    // clickFunction = () => {
    //     this.setState({ count: this.state.count + 1 })
    //     // this.setState({ if (count == 0) { 
    //     //     score: this.state.score + 1}) 
    //     // } else {}

    //     if (count == 0) {
    //         this.setState({score: this.state.score + 1})
    //     } else {
    //         this.setState({score = 0})
    //     }

    // }

    render() {
        return (
            <nav className="navbar fixed-top navbar-light bg-light">
                <ul>
                <li>Clicky Game</li>
                <li>Click an Image</li>
                <li>Score:{this.state.score}</li>
                </ul>
            </nav>
        )

    }
}

export default Score;