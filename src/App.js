import React, { Fragment, useState } from 'react';
import 'bulma/css/bulma.css'
import FormsSwitcher from "./Components/FormsSwitcher";
import { validEmail, validName } from "./helpers/validation";

function App() {
  const [isSent, setIsSent] = useState(false);
  const handleSendForm = ({name, email}) => {
    const isValid = validName(name) && validEmail(email);
    if (isValid) {
      setIsSent(true);
    } else {
      alert(`Form valid is not!  <(°.°)>`);
    }
  };

  return (
    <Fragment>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              React form comparing
            </h1>
          </div>
        </div>
      </section>
      <div className="container">
        {isSent ? (
          <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <h2 className="subtitle has-text-centered ">
                  Your purchase has been accepeted!
                  {' '}
                  <button onClick={() => setIsSent(false)}>
                    Buy again
                  </button>
                </h2>
            </div>
          </section>
        ) : (
          <FormsSwitcher onSendForm={handleSendForm}/>
        )}
      </div>
    </Fragment>
  );
}

export default App;
