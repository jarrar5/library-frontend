import React, { Component } from "react";
import NavBar from "./navbar";

class Home extends Component {
    render() {
        return <React.Fragment>
            <NavBar />
            <div className="container" style={{ margin: "auto", minHeight: "500px" }}>
                <h1 id="home" style={{ textAlign: "center", padding: "20%" }}> Welcome to the Library App</h1>
            </div>
        </React.Fragment>
    }
}

export default Home;
