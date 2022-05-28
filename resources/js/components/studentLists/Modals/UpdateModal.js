import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class UpdateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStudentFullname: null,
            currentStudentClass: null,
            currentStudentGender: null,
            currentStudentPhone: null,
        };
    }

    // Updating student Full name state.

    inputstudentFullname = (event) => {
        this.setState({
            studentFullname: event.target.value,
        });
    };

    // Update Student Class state.

    inputstudentClass = (event) => {
        this.setState({
            studentClass: event.target.value,
        });
    };

    // Update Student Gender state.

    inputstudentGender = (event) => {
        this.setState({
            studentGender: event.target.value,
        });
    };

    // Update Student Phonenumber state.

    inputstudentPhone = (event) => {
        this.setState({
            studentPhone: event.target.value,
        });
    };

    static getDerivedStateFromProps(props, current_state) {
        let studentUpdate = {
            studentFullname: null,
            studentClass: null,
            studentGender: null,
            studentPhone: null,
        };

        // Updating data from input.

        if (
            current_state.studentFullname &&
            current_state.studentFullname !==
                props.studentData.currentStudentFullname
        ) {
            return null;
        }

        if (
            current_state.studentClass &&
            current_state.studentClass !== props.studentData.currentStudentClass
        ) {
            return null;
        }

        if (
            current_state.studentGender &&
            current_state.studentGender !==
                props.studentData.currentStudentGender
        ) {
            return null;
        }

        if (
            current_state.studentPhone &&
            current_state.studentPhone !== props.studentData.currentStudentPhone
        ) {
            return null;
        }

        // Updating data from props Below.

        if (
            current_state.studentFullname !==
                props.studentData.currentStudentFullname ||
            current_state.studentFullname ===
                props.studentData.currentStudentFullname
        ) {
            studentUpdate.studentFullname =
                props.studentData.currentStudentFullname;
        }

        if (
            current_state.studentClass !==
                props.studentData.currentStudentClass ||
            current_state.studentClass === props.studentData.currentStudentClass
        ) {
            studentUpdate.studentClass = props.studentData.currentStudentClass;
        }

        if (
            current_state.studentGender !==
                props.studentData.currentStudentGender ||
            current_state.studentGender ===
                props.studentData.currentStudentGender
        ) {
            studentUpdate.studentGender =
                props.studentData.currentStudentGender;
        }

        if (
            current_state.studentPhone !==
                props.studentData.currentStudentPhone ||
            current_state.studentPhone === props.studentData.currentStudentPhone
        ) {
            studentUpdate.studentPhone = props.studentData.currentStudentPhone;
        }

        return studentUpdate;
    }

    // Updating Student data.
    updateStudentData = () => {
        axios
            .post("/update/student/data", {
                studentId: this.props.modalId,
                studentFullname: this.state.studentFullname,
                studentClass: this.state.studentClass,
                studentGender: this.state.studentGender,
                studentPhone: this.state.studentPhone,
            })
            .then(() => {
                // console.log(response);
                // console.log("i am here o");
                toast.success("Student Updated Successully");
                setTimeout(() => {
                    location.reload();
                }, 2500);
            });
    };

    render() {
        return (
            <div
                classname="modal fade"
                id={"updateModal" + this.props.modalId}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div classname="modal-dialog">
                    <div classname="modal-content">
                        <div classname="modal-header">
                            <h5 classname="modal-title" id="exampleModalLabel">
                                Student Details
                            </h5>
                            <button
                                type="button"
                                classname="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div classname="modal-body">
                            <form classname="form">
                                <div classname="form-group">
                                    <input
                                        type="text"
                                        id="studentFullname"
                                        classname="form-control mb-3"
                                        value={this.state.studentFullname ?? ""}
                                        onChange={this.inputstudentFullname}
                                    />
                                </div>

                                <div classname="form-group">
                                    <input
                                        type="text"
                                        id="studentClass"
                                        classname="form-control mb-3"
                                        value={this.state.studentClass ?? ""}
                                        onChange={this.inputstudentClass}
                                    />
                                </div>

                                <div classname="form-group">
                                    <input
                                        type="text"
                                        id="studentGender"
                                        classname="form-control mb-3"
                                        value={this.state.studentGender ?? ""}
                                        onChange={this.inputstudentGender}
                                    />
                                </div>

                                <div classname="form-group">
                                    <input
                                        type="text"
                                        id="studentPhone"
                                        classname="form-control mb-3"
                                        value={this.state.studentPhone ?? ""}
                                        onChange={this.inputstudentPhone}
                                    />
                                </div>
                            </form>
                        </div>
                        <div classname="modal-footer">
                            <input
                                type="submit"
                                classname="btn btn-info"
                                value="Update"
                                onClick={this.updateStudentData}
                            />
                            <button
                                type="button"
                                classname="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateModal;
