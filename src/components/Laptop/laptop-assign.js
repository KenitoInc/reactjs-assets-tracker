import React, {Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

class LaptopAssign extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [], laps:[]};
    this.searchKeyChangeHandler = this.searchKeyChangeHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.fetchList();
    this.fetchLaptop(this.props.params.id);
    $(this.refs.selectPicker).selectpicker({
      liveSearch: true
    });
  }

  fetchLaptop(id) {
      fetch('http://localhost:5000/api/laptops/'+id)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({
            laps: data
          });
        })
        .catch(err => {
          console.log(err);
        });
   }

  fetchList() {
    var url = 'http://localhost:5000/api/assignees';
    fetch(url)
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

  fetchAssignee() {
    var url = 'http://localhost:5000/api/assignees/'+this.state.selectpicker;
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          assignee_name: data.assignee_name,
          assignee_type: data.assignee_type
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
      this.fetchAssignee();

  }
 
  searchKeyChangeHandler(e) {

    this.setState({searchKey: e.target.value});
    console.log('searching..');

    var url = 'http://localhost:5000/api/assignees/search/'+e.target.value;

    if(e.target.value == null || e.target.value.trim() == ""){
        this.fetchList();
    }
    else {
      fetch(url)
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

    
      
  }

  render() {
    var data = this.state.items;
        
        let optionItems = data.map(assignee =>
            <SelectListItem key={assignee.id} assignee={assignee} />
        );

    return (
      <div>
         <div className="panel panel-primary">
        
          <div className="panel-heading">Laptop Details</div>           
          
          <table className="table table-bordered">
            <tbody>
               <tr>
                   <td>Brand</td>
                   <td>{this.state.laps.brand}</td>
               </tr>
               <tr>
                   <td>Model</td>
                   <td>{this.state.laps.model}</td>
               </tr>
               <tr>
                   <td>Serial</td>
                   <td>{this.state.laps.serial_number}</td>
               </tr>
               <tr>
                   <td>Physical Condition</td>
                   <td>{this.state.laps.physical_condition}</td>
               </tr>               
               <tr>
                   <td>Assigned To</td>
                   <td>{this.state.items.assigned_to}</td>
               </tr>
               <tr>
                   <td>Assigned On</td>
                   <td>{this.state.laps.assigned_on}</td>
               </tr>
            </tbody>
            
          </table>

          <div className="panel-heading">New Assignee</div>

           <select className="form-control" name="selectpicker" ref="selectPicker" onChange={this.handleInputChange} >
              {optionItems}
           </select>
        
          <p>Assign8</p>
          <p>{this.state.selectpicker}</p>
           <form onSubmit={this.handleSubmit}>                  
                  <table className="table table-bordered">
                    <tbody>
                       <tr>
                           <td>New Assignee</td>
                           <td>{this.state.assignee_name}</td>
                       </tr>
                       <tr>
                           <td>Assignee Type</td>
                           <td>{this.state.assignee_type}</td>
                       </tr>
                    </tbody>
                  </table>
                                   
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
                     
      
        </div>
    );

  }
}

class SelectListItem extends React.Component {    

    render() {
        var assignee = this.props.assignee;

        return (
            <option value={assignee.id}>{assignee.assignee_name}</option>
        );
    }
};


LaptopAssign.contextTypes = {
  data: React.PropTypes.object
};

export default LaptopAssign;
