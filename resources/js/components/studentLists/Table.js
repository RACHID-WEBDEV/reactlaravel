import React, { Component } from "react";

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [],
        };
    }

    // Life cycle method.
    componentDidMount() {
        this.getStudentsList();
    }
    getStudentsList = () => {
        axios.get("/get/student/list").then(function (response) {
            console.log(response);
            // self.setState({
            //     employees: response.data,
            // });
        });
    };

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">S/N</th>
                            <th scope="col">FullName</th>
                            <th scope="col">Class</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
