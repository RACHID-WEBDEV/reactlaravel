import axios from "axios";
import React, { Component } from "react";
// import ViewModal from './Modals/ViewModal';
// import UpdateModal from './Modals/UpdateModal';
// import DeleteModal from './Modals/DeleteModal';

class TableActionButtons extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         currentStudentName: null,
    //         currentStudentSalary: null,
    //     }
    // }

    // Getting Individual student data.

    // getStudentDetails = (id) => {
    //     axios.post('/get/individual/student/details', {
    //         studentId: id
    //     }).then((response) => {
    //         this.setState({
    //             currentStudentName: response.data.student_name,
    //             currentStudentSalary: response.data.salary
    //         })
    //         console.log(response.data);
    //     })
    // }

    render() {
        return (
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className="btn btn-primary"
                    // data-bs-toggle="modal"
                    // data-bs-target={'#viewModal'+this.props.eachRowId}
                    // onClick={ () => { this.getStudentDetails(this.props.eachRowId) }}
                >
                    View
                </button>
                <ViewModal
                    modalId={this.props.eachRowId}
                    studentData={this.state}
                />

                <button
                    type="button"
                    className="btn btn-info"
                    // data-bs-toggle="modal"
                    // data-bs-target={'#updateModal' + this.props.eachRowId}
                    // onClick={() => { this.getStudentDetails(this.props.eachRowId) }}
                >
                    Update
                </button>
                <UpdateModal
                    modalId={this.props.eachRowId}
                    studentData={this.state}
                />
                <button
                    type="button"
                    className="btn btn-danger"
                    // data-bs-toggle="modal"
                    // data-bs-target={'#deleteModal' + this.props.eachRowId}
                    // onClick={() => { this.getStudentDetails(this.props.eachRowId) }}
                >
                    Delete
                </button>
                <DeleteModal
                    modalId={this.props.eachRowId}
                    studentData={this.state}
                />
            </div>
        );
    }
}

export default TableActionButtons;
