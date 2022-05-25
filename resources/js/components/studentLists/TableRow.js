import React, { Component } from "react";

class TableRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <th scope="row">{this.props.data.id}</th>
                <td>{this.props.data.fullname}</td>
                <td>{this.props.data.class}</td>
                <td>{this.props.data.gender}</td>
                <td>{this.props.data.phone}</td>
                <td>
                    <div className="p-2 icons">
                        <i className="fa fa-phone text-danger" />
                        <i className="fa fa-adjust text-danger" />
                        <i className="fa fa-share" />
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRow;
