import React, {Fragment} from 'react';
import 'bulma/css/bulma.css'
import FormsSwitcher from "./Components/FormsSwitcher";

function App() {
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
        <FormsSwitcher/>
      </div>
    </Fragment>
  );
}

export default App;
