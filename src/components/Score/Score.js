import React from "react";
import "./score.css";


class Score extends React.Component {
    state = {
        score: 0,
        topScore: 0
    };

    render() {
        return (
            <nav className="navbar fixed-top navbar-light bg-light">
                
                <p>Clicky Game</p>
                <p>Click an Image</p>
                <p>Score: {this.state.score}</p>
                <p>Top Score: {this.state.topScore}</p>
                
            </nav>
        )

    }
}

export default Score;