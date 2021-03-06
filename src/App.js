import React, { Fragment, useState } from 'react';
import 'bulma/css/bulma.css'
import FormsSwitcher from "./Components/FormsSwitcher";
import { validEmail, validName } from "./helpers/validation";

function App() {
  const [isSent, setIsSent] = useState(false);

  const handleSendForm = async values => {
    const { name, email } = values;
    console.log( 'sending values....');
    await new Promise(resolve => setTimeout(resolve, 1200));
    const errors = {};

    if (!validName(name)) {
      errors.name = 'Name is invalid';
    }
    if (!validEmail(email)) {
      errors.email = 'E-mail is invalid.';
    }

    if (Object.keys(errors).length === 0) {
      setIsSent(true);
      return values;
    } else {
      alert(`Hrmmmm.... Form is valid not!  <(°.°)>`);
      return errors;
    }
  };

  return (
    <Fragment>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              React forms comparison
            </h1>
          </div>
        </div>
      </section>
      <div className="container">
        {isSent ? (
          <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <h2 className="subtitle is-2 has-text-centered ">
                  Your purchase has been accepted!
                  {' '}
                  <button
                    className="button is-warning"
                    onClick={() => setIsSent(false)}
                  >
                    Buy again
                  </button>
                </h2>
            </div>
          </section>
        ) : (
          <section className="section">
            <FormsSwitcher onSendForm={handleSendForm}/>
          </section>
        )}
      </div>
    </Fragment>
  );
}

export default App;
