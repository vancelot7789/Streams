import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component{
  renderError = ({ error, touched }) => {
    if(error && touched){
      return (
        <div className="ui error message" style={{display:'block'}}>
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${ meta.error && meta.touched ? 'error': ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {/* use touch on input to display validate error */}
        { this.renderError(meta)}

        {/* use if submit success or fail to display validate error */}
        {/* { (meta.submitFailed)? (<div>{meta.error}</div>) : null } */}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render(){
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter title"/>
        <Field name="description" component={this.renderInput} label="Enter description"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title){
    errors.title = 'You must enter a title';
  }
  if (!formValues.description){
    errors.description = 'You must enter a description';
  }
  return errors;
}

export default reduxForm({
  form: 'streamForm',
  validate: validate
})(StreamForm);

