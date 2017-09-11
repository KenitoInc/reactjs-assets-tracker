import React, {Component} from 'react';
import {Link} from 'react-router';

class List extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.context.data || window.__INITIAL_STATE__ || {items: []};
    this.searchKeyChangeHandler = this.searchKeyChangeHandler.bind(this);
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList() {
    fetch('http://localhost:5000/api/laptops')
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

  searchKeyChangeHandler(e) {

    this.setState({searchKey: e.target.value});
    console.log('searching..');

    var url = 'http://localhost:5000/api/laptops/search/'+e.target.value;

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
        let listItems = data.map(laptop =>
            <LaptopListItem key={laptop.id} laptop={laptop} onSearchKeyChange={this.props.onSearchKeyChange} />
        );

    return (
      <div className="row">
          <div className="col-md-8">
             <form>
                <div className="input-group">
                  <input type="text" className="form-control" value = {this.state.searchKey} onChange = {this.searchKeyChangeHandler} ref = "myInput"></input>                  
                  <div className="input-group-btn">
                    <span className="btn btn-default">
                      <i className="glyphicon glyphicon-search"></i>
                    </span>
                  </div>

                </div>

              </form> 
          </div>
          <Link to={`/laptops/add/one`}><button className="btn btn-success">
                    Add New Laptop
                  </button> </Link>

                    
          <div className="col-md-12">
              <table className="table table-bordered">
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Brand</th>
                          <th>Model</th>
                          <th>serial Number</th>
                          <th>Condition</th>
                          <th>Purchase Date</th>
                          <th>View</th>
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
}

class LaptopListItem extends React.Component {    

    render() {
        var laptop = this.props.laptop;

        return (
            <tr >
                <td>{laptop.id}</td>
                <td>{laptop.brand}</td>
                <td>{laptop.model}</td>
                <td>{laptop.serial_number}</td>
                <td>{laptop.physical_condition}</td>
                <td>{laptop.date_of_purchase}</td>
                <td>
                    <Link to={`/laptops/${laptop.id}`} className="btn btn-default btn-sm">
                      <span className="glyphicon glyphicon-pencil"></span> View 
                    </Link>
                </td>
                <td>
                    <Link to={`/laptops/edit/${laptop.id}`} className="btn btn-default btn-sm">
                      <span className="glyphicon glyphicon-pencil"></span> Edit 
                    </Link>
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

List.contextTypes = {
  data: React.PropTypes.object
};

export default List;
