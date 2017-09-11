import React from 'react';
import PhoneListItem from './PhoneListItem';

class PhoneList extends React.Component {
    render() {
        
        var data = this.props.phones;
        let listItems = data.map(phone =>
            <PhoneListItem key={phone.id} phone={phone} onSearchKeyChange={this.props.onSearchKeyChange}/>
        );
     
        
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Imei 1</th>
                                <th>Imei 2</th>
                                <th>Condition</th>
                                <th>Purchase Date</th>
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

export default PhoneList;