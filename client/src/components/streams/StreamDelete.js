import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions/index';
import Modal from '../Modal';
import history from '../../history';
class StreamDelete extends React.Component{

  componentDidMount(){
    // this.props.fetchStream();
  }

  render(){
     const actions = (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
    console.log(this.props);
    return (
    <div>
      <Modal 
        title="Delete Stream"
        content="Are you sure to delete this stream"
        actions={ actions }
        onDismiss={ () => { history.push('/')}}
      />
    </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return{
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{fetchStream:fetchStream})(StreamDelete);