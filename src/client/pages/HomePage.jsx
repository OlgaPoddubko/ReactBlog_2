import React, {Component} from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>You are welcome to HomePage!</h2>
        <p>To view blog clock Blog</p>
        <style jsx>{`
          h2, p{
            text-align: center;
            margin: 10px 0;
          }
        `}
          </style>
      </div>
    );
  }
}


export default connect()(HomePage);
