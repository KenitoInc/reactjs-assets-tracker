import React from 'react';
import BranchListItem from './BranchListItem';

class BranchList extends React.Component {
    render() {
        
        var data = this.props.branches;
        let listItems = data.map(branch =>
            <BranchListItem key={branch.id} branch={branch} onSearchKeyChange={this.props.onSearchKeyChange}/>
        );
     
        
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>UUID</th>
                                <th>Branch Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItems}
                        </tbody>
                    </table>
                </div>
            </div>

        );

    }
};

export default BranchList;