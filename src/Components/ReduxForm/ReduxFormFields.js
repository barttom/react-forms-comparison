import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {validEmail, validName} from "../../helpers/validation";
import { connect } from 'react-redux';

let ReduxFormFields = ({ isDoubleBladed, handleSubmit }) => {
  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name="name"
        component={({ input, meta: { error } }) => (
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                {...input}
                className={`input ${error ? 'is-danger' : ''}`}
                placeholder="Name"
                type="text"
              />
            </div>
            {error && (
              <p className="help is-danger">{error}</p>
            )}
          </div>
        )}
      />
      <Field
        name="email"
        component={({ input, meta: { error } }) => (
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                {...input}
                className={`input ${error ? 'is-danger' : ''}`}
                placeholder="Email"
                type="email"
              />
            </div>
            {error && (
              <p className="help is-danger">{error}</p>
            )}
          </div>
        )}
      />
      <Field
        name="colorMain"
        component={({ input }) => (
          <div className="field">
            <label className="label">Main color</label>
            <div className="control">
              <div className="select">
                <select {...input}>
                  <option value="#0074D9">Blue</option>
                  <option value="#2ECC40">Green</option>
                  <option value="#FF4136">Red</option>
                </select>
              </div>
            </div>
          </div>
        )}
      />
      <Field
        name="isDoubleBladed"
        component={({ input }) => (
          <div className="field">
            <label className="label">Double Blade</label>
            <div className="control">
              <label htmlFor="double-bladed">
                <input
                  { ...input }
                  id="double-bladed"
                  checked={input.value}
                  className="checkbox"
                  type="checkbox"
                />
                {' '}
                Do You want double blade sword?
              </label>
            </div>
          </div>
        )}
      />
      {isDoubleBladed && (
        <Field
          name="colorSecondary"
          component={({ input }) => (
            <div className="field">
              <label className="label">Secondary color color</label>
              <div className="control">
                <div className="select">
                  <select {...input}>
                    <option value="#0074D9">Blue</option>
                    <option value="#2ECC40">Green</option>
                    <option value="#FF4136">Red</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        />
      )}
      <button
        type="submit"
        className="button is-success"
      >
        Order!
      </button>
    </form>
  );
};

const validate = ({name, email}) => {
  const errors = {};

  if (!validName(name)) {
    errors.name = 'This field shouldn\'t be empty and should have only letters.';
  }
  if (!validEmail(email)) {
    errors.email = 'E-mail is invalid.';
  }

  return errors;
};

const selector = formValueSelector('order');

const mapStateToProps = state => ({
  isDoubleBladed: selector(state, 'isDoubleBladed'),
});


ReduxFormFields = reduxForm({
  form: 'order',
  initialValues: {
    name: '',
    email: '',
    isDoubleBladed: false,
    colorMain: '#0074D9',
    colorSecondary: '#0074D9',
  },
  validate,
})(ReduxFormFields);
ReduxFormFields = connect(mapStateToProps)(ReduxFormFields);

export default  ReduxFormFields;
