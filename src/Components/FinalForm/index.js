import React from 'react';
import { Form, Field, FormSpy, } from 'react-final-form'
import {validEmail, validName} from "../../helpers/validation";

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

const FinalForm = ({ onChangeData, onSendForm }) => {

  return (
    <Form
      onSubmit={onSendForm}
      validate={validate}
      initialValues={{
        name: '',
        email: '',
        isDoubleBladed: false,
        colorMain: '#0074D9',
        colorSecondary: '#0074D9',
      }}
      render={({ handleSubmit, values, pristine, submitting }) => (
        <form onSubmit={handleSubmit}>
          <FormSpy
            onChange={({ values }) => {
              onChangeData(values);
            }}
          />
          <Field
            name="name"
            render={({ input, meta: { error, touched } }) => (
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    {...input}
                    className={`input ${touched && error ? 'is-danger' : ''}`}
                    placeholder="Name"
                    type="text"
                  />
                </div>
                {touched && error && (
                  <p className="help is-danger">{error}</p>
                )}
              </div>
            )}
          />
          <Field
            name="email"
            render={({ input, meta: { error, touched } }) => (
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    {...input}
                    className={`input ${touched && error ? 'is-danger' : ''}`}
                    placeholder="Email"
                    type="email"
                  />
                </div>
                {touched && error && (
                  <p className="help is-danger">{error}</p>
                )}
              </div>
            )}
          />
          <Field
            name="colorMain"
            render={({ input }) => (
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
            type="checkbox"
            render={({ input }) => (
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
          {values.isDoubleBladed && (
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
            disabled={submitting || pristine}
          >
            Order!
          </button>
        </form>
      )}
    />
  );
};

export default FinalForm;
