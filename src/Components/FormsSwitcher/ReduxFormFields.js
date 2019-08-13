import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ReduxFormFields = () => {
  return (
    <form action="">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <Field
            name="name"
            component="input"
            className={`input`}
            type="text"
            placeholder="Name"
          />
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'order',
})(ReduxFormFields);