import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";

class CreateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentFullname: null,
            studentClass: null,
            studentGender: null,
            studentPhone: null,
        };
    }

    // Creating student Fullname state.

    inputStudentFullname = (event) => {
        this.setState({
            studentFullname: event.target.value,
        });
    };

    // Creating student class state.

    inputStudentClass = (event) => {
        this.setState({
            studentClass: event.target.value,
        });
    };

    // Creating student gender state.

    inputStudentGender = (event) => {
        this.setState({
            studentGender: event.target.value,
        });
    };

    // Creating student class state.

    inputStudentPhone = (event) => {
        this.setState({
            studentPhone: event.target.value,
        });
    };

    // Storing Employee Data.

    storeStudentData = () => {
        axios
            .post("/store/student/data", {
                studentFullname: this.state.studentFullname,
                studentClass: this.state.studentClass,
                studentGender: this.state.studentGender,
                studentPhone: this.state.studentPhone,
            })
            .then(() => {
                toast.success("Student Saved Successfully");

                setTimeout(() => {
                    location.reload();
                }, 2500);
            });
    };

    render() {
        return (
            <>
                <div className="row text-right mb-3 pb-3">
                    <button
                        className="btn btn-info text-right col-3 offset-md-9"
                        data-toggle="modal"
                        data-target="#modalCreate"
                    >
                        Add New Student
                    </button>
                </div>
                <div
                    className="modal fade"
                    id="modalCreate"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    Student Details
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form className="form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="studentFullname"
                                            className="form-control mb-3"
                                            placeholder="Enter Fullname Here"
                                            onChange={this.inputStudentFullname}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="studentClass"
                                            className="form-control mb-3"
                                            placeholder="Student Class Here"
                                            onChange={this.inputStudentClass}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="studentGender"
                                            className="form-control mb-3"
                                            placeholder="Your Gender"
                                            onChange={this.inputStudentGender}
                                        />
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="studentPhone"
                                                className="form-control mb-3"
                                                placeholder="Enter Phonenumber"
                                                onChange={
                                                    this.inputStudentPhone
                                                }
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <input
                                    type="button"
                                    value="Save"
                                    className="btn btn-info"
                                    onClick={this.storeStudentData}
                                />

                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CreateModal;
