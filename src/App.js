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

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/addbook">
                        <AddBook />
                    </Route>
                    <Route path="/updatebook">
                        <UpdateBook />
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
