import React, { Component } from "react";
import NavBar from "./navbar";
import axios from "axios";
import {
    Redirect
} from "react-router-dom";
require('dotenv').config();

class Books extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
        }
    }

    componentDidMount = () => {
        this.getBooks();
    }

    getBooks = async () => {
        let { data } = await axios.get(`https://immense-depths-34650.herokuapp.com/api/books`);

        this.setState({ books: data });
        return data;
    }

    handleEditClick = async (id) => {
        console.log("Editing ", id);
        // let { books } = this.state;

        let { data } = await axios.post(`https://immense-depths-34650.herokuapp.com/api/books/get/${id}`);
        console.log(data);

        <Redirect
            to="/"
        />
    }

    render() {
        const { books } = this.state;

        return <React.Fragment>
            <NavBar />
            <div className="container" style={{ margin: "auto", minheight: "50px" }}>
                <h4 id="home" style={{ textAlign: "right" }}>Books</h4>
                <table className="tg">
                    <thead>
                        <tr>
                            <th className="tg-lboi">Title</th>
                            <th className="tg-0pky">Author</th>
                            <th className="tg-0pky" colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book._id}>
                                <td className="tg-0pky">{book.title}</td>
                                <td className="tg-0pky">{book.author}</td>
                                <td className="tg-0pky"><a className="myButton" onClick={() => this.handleEditClick(book._id)}>Edit</a></td>
                                <td className="tg-0pky"><a className="delete" onClick={() => this.handleDeleteClick(book._id)}>Delete</a></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment >
    }
}

export default Books;


