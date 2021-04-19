import React, { Component } from "react";
import NavBar from "./navbar";
import axios from "axios";

class AddBook extends Component {

    constructor(props) {
        super(props)
        this.state = {
            book: { title: "", author: "" },
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        const { book } = this.state;

        book[name] = value;
        this.setState({ book });
    }

    handleSave = async () => {
        const { book } = this.state;
        let { data } = await axios.post(`https://immense-depths-34650.herokuapp.com/api/books/create`, book);
        console.log(data);
        this.setState({ book: { title: "", author: "" } });
        return data;
    }

    render() {
        return <React.Fragment>
            <NavBar />
            <div className="container" style={{ margin: "auto", minheight: "50px" }}>
                <h4 id="home" style={{ textAlign: "right" }}>Add New Book</h4>
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
                            <button className="btn btn-success" id="save" name="save" onClick={() => this.handleSave()}>Save</button>
                            <button className="btn btn-danger" id="clear" type="reset" name="clear" onClick={() => console.log('Cleared')}>Clear</button>
                        </div>
                    </div>
                </fieldset>
            </div>
        </React.Fragment>
    }
}

export default AddBook;
