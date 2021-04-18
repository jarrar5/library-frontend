import React, { Component } from "react";
import NavBar from "./navbar";
import axios from "axios";
import '../custom.css';
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
                                <td className="tg-0pky"><a className="myButton" href="/edit/2">Edit</a></td>
                                <td className="tg-0pky"><a className="delete" href="/delete/2">Delete</a></td>
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


