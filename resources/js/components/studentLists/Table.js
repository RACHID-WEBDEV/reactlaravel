import React, { Component } from "react";
import TableRow from "./TableRow";
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
        let self = this;
        axios.get("/get/student/list").then(function (response) {
            //console.log(response.data);
            self.setState({
                students: response.data,
            });
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
                        {this.state.students.map(function (x, i) {
                            return <TableRow key={i} data={x} />;
                        })}

                        {/* <tr>
                            <th scope="row">3</th>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
