import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/Navbar';
import { refreshLogin } from '../actions/auth';


class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(refreshLogin());
  }
  render() {
    let { auth, children } =this.props;

    return(
  <div>
    <NavBar auth={auth} />
    { children }
  </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(App);
