import React from 'react';
import ReactDOM from 'react-dom';
import {Link,browserHistory} from 'react-router';

class LaptopAdd extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        
    }

    componentDidMount() {
	    //this.fetchList(this.props.params.id);
	  }

	 handleInputChange(event) {
	    const target = event.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
	  }

    /**
	   * Form submission callback.
	   */
	handleSubmit(event) {
		
	    event.preventDefault();
	    // Scroll to the top of the page to show the status message.
	    document.getElementById('heading').scrollIntoView();
	    this.setState({ type: 'info', message: 'Sending...' });
	    this.sendFormData();
	   
	}
	  /**
	   * Submits form data to the web server.
	   */
	sendFormData() {		
	    // Prepare form data for submitting it.
	    var formData = {
	      brand: this.state.brand,
	      model: this.state.model,
	      serial_number: this.state.serial_number,
	      physical_condition: this.state.physical_condition,
	      date_of_purchase: this.state.date_of_purchase,
	      ms_office_license: this.state.ms_office_license,
	      kaspersky_license: this.state.kaspersky_license
	    };

	    // Send the form data.
	    var xmlhttp = new XMLHttpRequest();
	    var _this = this;
	    xmlhttp.onreadystatechange = function() {
	      
	      if (xmlhttp.readyState !== 4) { 
	      	return; 
	      } 
	      if (xmlhttp.status === 200) { 
	      	_this.setState({type:'success' ,message:'Laptop added successfully'});
	      	_this.clearFormData();
	      	//browserHistory.push('/laptops');
	      } 
	      else { 
	      	_this.setState({type:'danger' ,message:'Insert failed'});
	      }
	    };
	    xmlhttp.open('POST', 'http://localhost:5000/api/laptops/add/one', true);
	    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    xmlhttp.send(this.requestBuildQueryString(formData));
	    this.setState({stringquery:this.requestBuildQueryString(formData)});
	    
	}

    requestBuildQueryString(params) {
	    var queryString = [];
	    for(var property in params)
	      if (params.hasOwnProperty(property)) {
	        queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
	      }
	      
	    return queryString.join('&');
	}

	clearFormData (){
		this.setState({
			brand:null,
	      	model: null,
	      	serial_number: null,
	      	physical_condition: null,
	      	date_of_purchase: null,
	      	ms_office_license: null,
	      	kaspersky_license: null
		}

		);

	}
   

    render() {
    		if (this.state.type && this.state.message) {
			      var classString = 'alert alert-' + this.state.type;
			      var status = <div id="status" className={classString} ref="status">
			                     {this.state.message}
								</div>;
			}


        return (
            <div>
            	<div id="heading" className="panel-heading"><h3>Add Laptop</h3></div> 
            	
                {status}
                 <form onSubmit={this.handleSubmit}>
                 	<div className="form-group">
			       	<input type="hidden" className="form-control"
			           name="id" value={this.state.id} />			       	
			         <label htmlFor="brand">Brand</label>
			         <input type="text" required className="form-control"
			           name="brand" onChange={this.handleInputChange} />
			       </div>
			       <div className="form-group">
			         <label htmlFor="model">Model</label>
			         <input type="text" required className="form-control"
			           name="model" onChange={this.handleInputChange} />
			       </div>
			       <div className="form-group">
			         <label htmlFor="serial_number">Serial Number</label>
			         <input type="text" required className="form-control"
			           name="serial_number" onChange={this.handleInputChange} />
			       </div>
			       <div className="form-group">
			         <label htmlFor="physical_condition">Physical Condition</label>
			         <input type="text" required className="form-control"
			           name="physical_condition" onChange={this.handleInputChange} />
			       </div>
			       <div className="form-group">
			         <label htmlFor="date_of_purchase">Date of Purchase</label>
			         <input type="text" required className="form-control"
			           name="date_of_purchase" onChange={this.handleInputChange} />
			       </div>
			       <div className="form-group">
			         <label htmlFor="ms_office_license">MS Office Key</label>
			         <input type="text" className="form-control"
			           name="ms_office_license" onChange={this.handleInputChange} />
			       </div>
			       <div className="form-group">
			         <label htmlFor="kaspersky_license">Kaspersky Key</label>
			         <input type="text" className="form-control"
			           name="kaspersky_license" onChange={this.handleInputChange} />
			       </div>			      
			       <div className="form-group horizontal">
			       		
				        <button type="submit" className="btn btn-success">
				          Submit
				        </button> 
				        <Link to={`/laptops`}><button className="btn btn-primary">
				          Cancel
				        </button> </Link>
			       </div>
			       
			     </form>
            </div>
        );
    }
};

module.exports = LaptopAdd;
