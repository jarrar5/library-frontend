import React, { Component } from "react";
import NavBar from "./navbar";
import axios from "axios";
import { toast } from 'react-toastify';

class UpdateBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: { title: "", author: "", ...(props?.location?.state?.book || {}) },
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        const { book } = this.state;

        book[name] = value;
        this.setState({ book });
    }

    handleUpdate = async () => {
        const { book } = this.state;
        let { data } = await axios.put(`https://immense-depths-34650.herokuapp.com/api/books/update/${book._id}`, book);
        this.setState({ book: { title: "", author: "" } });
        toast.success("Book Updated!");
        return data;
    }

    render() {
        return <React.Fragment>
            <NavBar />
            <div className="container" style={{ margin: "auto", minheight: "50px" }}>
                <h4 id="home" style={{ textAlign: "right" }}>Update Book</h4>
            </div>
            <div className="container" style={{ margin: "auto", minheight: "50px" }}>
                <fieldset>
                    <legend></legend>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="title">Title</label>
                        <div className="col-md-6">
                            <input className="form-control input-md" value={this.state.book.title} id="title" name="title" type="text" placeholder="Enter Book Title" required="" onChange={(e) => this.handleInputChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="author">Author</label>
                        <div className="col-md-6">
                            <input className="form-control input-md" value={this.state.book.author} id="author" name="author" type="text" placeholder="Enter Book Author" required="" onChange={(e) => this.handleInputChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="save"></label>
                        <div className="col-md-8" style={{ float: "right" }}>
                            <button className="btn btn-success" id="save" name="save" onClick={() => this.handleUpdate()}>Update</button>
                            <button className="btn btn-danger" id="clear" type="reset" name="clear" onClick={() => this.setState({ book: { title: "", author: "" } })}>Clear</button>
                        </div>
                    </div>
                </fieldset>
            </div>
        </React.Fragment>
    }
}

export default UpdateBook;
