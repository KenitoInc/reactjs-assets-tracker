import React from 'react';

class PhoneListItem extends React.Component {

    linkHandler(e) {
        this.props.onSearchKeyChange(e.target.innerHTML);
        return false;
    }

    render() {
        var phone = this.props.phone;

        return (
            <tr >
                <td>{phone.id}</td>
                <td>{phone.brand}</td>
                <td>{phone.model}</td>
                <td>{phone.device_id1}</td>
                <td>{phone.device_id2}</td>
                <td>{phone.physical_condition}</td>
                <td>{phone.date_of_purchase}</td>
                <td>
                    <a href={"/phones/"+phone.id} className="btn btn-default btn-sm">
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

export default PhoneListItem;