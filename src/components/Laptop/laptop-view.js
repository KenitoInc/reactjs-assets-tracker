import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class LaptopView extends React.Component {

    constructor(props) {
        super(props);
        //props = props || this.state;
        this.state = {items: []};
        
        
    }

    componentDidMount() {
	    this.fetchList(this.props.params.id);
	  }

	 fetchList(id) {
	    fetch('http://localhost:5000/api/laptops/'+id)
	      .then(res => {
	        return res.json();
	      })
	      .then(data => {
	        this.setState({
	          items: data
	        });
	      })
	      .catch(err => {
	        console.log(err);
	      });
	 }
   

    render() {
        return (
            <div>
			       <div className="panel panel-primary">
					  
					  <div className="panel-heading">Laptop Details</div> 
					  
					  <table className="table table-bordered">
					  	<tbody>
					       <tr>
					           <td>Brand</td>
					           <td>{this.state.items.brand}</td>
					       </tr>
					       <tr>
					           <td>Model</td>
					           <td>{this.state.items.model}</td>
					       </tr>
					       <tr>
					           <td>Serial</td>
					           <td>{this.state.items.serial_number}</td>
					       </tr>
					       <tr>
					           <td>Physical Condition</td>
					           <td>{this.state.items.physical_condition}</td>
					       </tr>
					       <tr>
					           <td>Date of Purchase</td>
					           <td>{this.state.items.date_of_purchase}</td>
					       </tr>
					       <tr>
					           <td>MS Office Key</td>
					           <td>{this.state.items.ms_office_license}</td>
					       </tr>
					       <tr>
					           <td>Kaspersky Key</td>
					           <td>{this.state.items.kaspersky_license}</td>
					       </tr>
					       <tr>
					           <td>Assigned To</td>
					           <td>{this.state.items.assigned_to}</td>
					       </tr>
					       <tr>
					           <td>Assigned On</td>
					           <td>{this.state.items.assigned_on}</td>
					       </tr>
					    </tbody>
					    
					  </table>
					  <div className="form-group horizontal">
					   		<Link to={`/laptops/edit/${this.state.items.id}`}><button className="btn btn-success">
					          Edit
					        </button> </Link>
					        <Link to={`/laptops/delete/${this.state.items.id}`}><button className="btn btn-danger">
					          Delete
					        </button> </Link>
					        <Link to={`/laptops`}><button className="btn btn-primary">
					          Cancel
					        </button> </Link>
					   </div>
					</div>			  
			       			       
			    
            </div>
        );
    }
};

module.exports = LaptopView;
