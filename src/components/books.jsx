import React, { Component } from "react";
import NavBar from "./navbar";
import axios from "axios";
import {
    Link
} from "react-router-dom";
require('dotenv').config();

class Books extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fetchingBooks: false,
            books: [],
        }
    }

    componentDidMount = () => {
        this.getBooks();
    }

    getBooks = async () => {
        this.setState({ fetchingBooks: true })
        let { data } = await axios.get(`https://immense-depths-34650.herokuapp.com/api/books`);

        this.setState({ books: data, fetchingBooks: false });
        return data;
    }

    // handleEditClick = async (id) => {
    //     <Redirect
    //         to="/updatebook"
    //     />
    // }

    handleDeleteClick = async (id) => {
        let { books } = this.state;

        let index = books.findIndex(b => b._id === id);

        let book = books.splice(index, 1);

        await axios.delete(`https://immense-depths-34650.herokuapp.com/api/books/delete/${id}`);

        this.setState({ books });
    }

    render() {
        const { books, fetchingBooks } = this.state;

        return <React.Fragment>
            <NavBar />
            <div className="container" style={{ margin: "auto", minheight: "50px" }}>
                <h4 id="home" style={{ textAlign: "right" }}>Books</h4>
                {fetchingBooks && <h1>Fetching Books.... </h1>}
                {!fetchingBooks && <table className="tg">
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
                                <td className="tg-0pky"><Link to="/updatebook" state={book} className="btn btn-primary">Edit</Link></td>
                                {/* <td className="tg-0pky"><a className="myButton" onClick={() => <Redirect to="/updatebook" />}>Edit</a></td> */}
                                <td className="tg-0pky"><a className="delete" onClick={() => this.handleDeleteClick(book._id)}>Delete</a></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>}
            </div>
        </React.Fragment >
    }
}

export default Books;


