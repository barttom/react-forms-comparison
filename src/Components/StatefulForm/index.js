import React, { useState } from 'react';

const StatefulForm = ({ onSendForm }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    isDoubleBladed: false,
    colorMain: '#0074D9',
    colorSecondary: '#0074D9',
  });
  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  };

  return (
    <form onSubmit={(event) => onSendForm(form, event)} id="stateful-form">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            name="name"
            className="input"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={form.name}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            name="email"
            className="input"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Main color</label>
        <div className="control">
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
