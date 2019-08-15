import React from 'react';
import { Formik, Field } from 'formik';
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

const FormikForm = ({onSendForm, onChangeData}) => {
  return (
    <Formik
      onSubmit={onSendForm}
      validate={validate}
      initialValues={{
        name: '',
        email: '',
        isDoubleBladed: false,
        colorMain: '#0074D9',
        colorSecondary: '#0074D9',
      }}
      render={({ values, errors, handleChange, }) => (
        <form onSubmit={event => {
          event.preventDefault();
          onSendForm(values);
        }}>
          <Field
            name="name"
            render={({ field }) => (
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    {...field}
                    className={`input ${errors.name ? 'is-danger' : ''}`}
                    placeholder="Name"
                    type="text"
                  />
                </div>
                {errors.name && (
                  <p className="help is-danger">{errors.name}</p>
                )}
              </div>
            )}
          />
          <Field
            name="email"
            render={({ field }) => (
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    {...field}
                    className={`input ${errors.email ? 'is-danger' : ''}`}
                    placeholder="Email"
                    type="email"
                  />
                </div>
                {errors.email  && (
                  <p className="help is-danger">{errors.email}</p>
                )}
              </div>
            )}
          />
          <Field
            name="colorMain"
            render={({ field }) => (
              <div className="field">
                <label className="label">Main color</label>
                <div className="control">
                  <div className="select">
                    <select
                      {...field}
                      onChange={(event) => {
                        handleChange(event);
                        onChangeData({
                          ...values,
                          colorMain: event.target.value,
                        })
                      }}
                    >
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
            render={({ field }) => (
              <div className="field">
                <label className="label">Double Blade</label>
                <div className="control">
                  <label htmlFor="double-bladed">
                    <input
                      { ...field }
                      id="double-bladed"
                      checked={field.value}
                      className="checkbox"
                      type="checkbox"
                      onChange={(event) => {
                        handleChange(event);
                        onChangeData({
                          ...values,
                          isDoubleBladed: event.target.checked,
                        })
                      }}
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
              component={({ field }) => (
                <div className="field">
                  <label className="label">Secondary color color</label>
                  <div className="control">
                    <div className="select">
                      <select
                        {...field}
                        onChange={(event) => {
                          handleChange(event);
                          onChangeData({
                            ...values,
                            colorSecondary: event.target.value,
                          })
                        }}
                      >
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
      )}
    />
  );
};

export default FormikForm;
