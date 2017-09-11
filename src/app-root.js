import React, {Component} from 'react';
import {Link} from 'react-router';

class AppRoot extends Component {
  render() {
    return (      
	    <div className="container">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/"><span className="navbar-brand">Living Goods</span></Link>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/audit">Audit Trail</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <span id="user_name"></span>
              <li><Link to="/"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </ul>
          </div>
        </nav>

	    <div className="row">
			<div className = "col-xs-12 col-sm-3">          

			    <ul className="nav nav-tabs nav-stacked" data-spy="affix" data-offset-top="195">
			        <li className="active"><Link to="/">Home</Link></li>
			        <li><Link to="/phones">Phones</Link></li>
			        <li><Link to="/laptops">Laptops</Link></li>
			        <li><Link to="/branch">Branches</Link></li>
			        <li><Link to="/audit">Audit</Link></li>
			        <li><Link to="/about">About</Link></li>
			    </ul>


			</div>
			<div className = "col-xs-12 col-sm-9">
				{this.props.children}
			</div>

		</div>
		</div>

    );
  }
}

export default AppRoot;