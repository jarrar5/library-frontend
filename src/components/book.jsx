import React, { Component } from "react";
import NavBar from "./navbar";

class Book extends Component {
    render() {
        return <React.Fragment>
            <NavBar />
            <div className="container" style={{ margin: "auto", minheight: "50px" }}>
                <h4 id="home" style={{ textAlign: "right" }}>Add New Book</h4>
            </div>
            <div className="container" style={{ margin: "auto", minheight: "50px" }}>
                <form className="form-horizontal" action="/addbook" method="post">
                    <fieldset>
                        <legend></legend>
                        <div className="form-group">
                            <label className="col-md-4 control-label" for="title">Title</label>
                            <div className="col-md-6">
                                <input className="form-control input-md" id="title" name="title" type="text" placeholder="Enter Book Title" required="" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label" for="author">Author</label>
                            <div className="col-md-6">
                                <input className="form-control input-md" id="author" name="author" type="text" placeholder="Enter Book Author" required="" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label" for="save"></label>
                            <div className="col-md-8" style={{ float: "right" }}>
                                <button className="btn btn-success" id="save" type="submit" name="save">Save</button>
                                <button className="btn btn-danger" id="clear" type="reset" name="clear">Clear</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </React.Fragment>
    }
}

export default Book;
