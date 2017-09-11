import React from 'react';

class BranchListItem extends React.Component {

    linkHandler(e) {
        this.props.onSearchKeyChange(e.target.innerHTML);
        return false;
    }

    render() {
        var branch = this.props.branch;

        return (
            <tr >
                <td>{branch.id}</td>
                <td>{branch.uuid}</td>
                <td>{branch.branch_name}</td>
                <td>
                    <a href={"/branch/"+branch.id} className="btn btn-default btn-sm">
                      <span className="glyphicon glyphicon-pencil"></span> Edit 
                    </a>
                </td>
                <td>
                    <button type="button" className="btn btn-default btn-sm">
                      <span className="glyphicon glyphicon-remove"></span> Delete 
                    </button>
                </td>
            </tr>
        );
    }
};

export default BranchListItem;