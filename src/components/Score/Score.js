import React from "react";
import "./score.css";


class Score extends React.Component {
    state = {
        score: 0,
        // topScore
    };

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