import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/home";
import AddBook from "./components/addbook";
import Books from "./components/books";
import UpdateBook from "./components/updateBook";

function App(props) {
    return (
        <Router>
            <Switch>
                <Route path="/addbook" component={AddBook} />
                <Route path="/updatebook" component={UpdateBook} />
                <Route path="/books" component={Books} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
