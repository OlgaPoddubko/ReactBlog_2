import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleSignup} from '../modules/blog';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSignup(this.state.form, this.props.history);
    this.setState({
      form: {
        email: '',
        password: '',
      },
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} method="post" action="/signup">
        <h3>Sign Up</h3>
        Email <input name="email" onChange={this.handleChange} value={this.state.form.email}/><br/>
        Password <input type="password" name="password" onChange={this.handleChange} value={this.state.form.password}/><br/>
        <button className="button is-success">Sign Up</button>
        <style jsx>{`input{ margin: 10px 0; } `}</style>
      </form>
    );
  }
}
const mapDispatchToProps = {
  handleSignup,
};
SignupPage = withRouter(connect(null, mapDispatchToProps)(SignupPage));
export default SignupPage;
