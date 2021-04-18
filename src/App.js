import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/home";
import Book from "./components/book";
import Books from "./components/books";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/book">
                        <Book />
                    </Route>
                    <Route path="/books">
                        <Books />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
