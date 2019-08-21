import React, { useEffect, useState } from 'react';
import { validEmail, validName } from "../../helpers/validation";

const StatefulForm = ({
  onChangeData,
  onSendForm }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    isDoubleBladed: false,
    colorMain: '#0074D9',
    colorSecondary: '#0074D9',
  });
  const handleChange = ({ target }) => {
    const newData = {
      ...form,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    };
    setForm(newData);

    const {
      colorMain,
      colorSecondary,
      isDoubleBladed,
    } = newData;
    onChangeData({
      colorMain,
      colorSecondary,
      isDoubleBladed,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSendForm(form);
  };
  const isNameInvalid = !validName(form.name);
  const isEmailInvalid = !validEmail(form.email);

  useEffect(() => onChangeData({
    isDoubleBladed: false,
    colorMain: '#0074D9',
    colorSecondary: '#0074D9',
  }), [onChangeData]);


  return (
    <form onSubmit={handleSubmit} id="stateful-form">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            name="name"
            className={`input ${isNameInvalid ? 'is-danger' : ''}`}
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={form.name}
          />
        </div>
        {isNameInvalid && (
          <p className="help is-danger">
            This field shouldn't be empty and should have only letters.
          </p>
        )}
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            name="email"
            className={`input ${isEmailInvalid ? 'is-danger' : ''}`}
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        {isEmailInvalid && (
          <p className="help is-danger">E-mail is invalid.</p>
        )}
      </div>
      <div className="field">
        <label className="label">Main color</label>
        <div className="control">
          <div className="select">
            <select
              name="colorMain"
              onChange={handleChange}
              className="select"
              value={form.colorMain}
            >
              <option value="#0074D9">Blue</option>
              <option value="#2ECC40">Green</option>
              <option value="#FF4136">Red</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Double Blade</label>
        <div className="control">
          <label htmlFor="double-bladed">
            <input
              id="double-bladed"
              name="isDoubleBladed"
              className="checkbox"
              type="checkbox"
              onChange={handleChange}
              value={form.isDoubleBladed}
            />
            {' '}
            Do You want double blade sword?
          </label>
        </div>
      </div>
      {form.isDoubleBladed && (
        <div className="field">
          <label className="label">Secondary color</label>
          <div className="control">
            <div className="select">
              <select
                name="colorSecondary"
                onChange={handleChange}
                className="select"
                value={form.colorSecondary}
              >
                <option value="#0074D9">Blue</option>
                <option value="#2ECC40">Green</option>
                <option value="#FF4136">Red</option>
              </select>
            </div>
          </div>
        </div>
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

export default StatefulForm;
