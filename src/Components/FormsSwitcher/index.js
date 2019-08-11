import React, { useState } from 'react';
import './style.css'

const displayFormContent = tabId => {
  switch (tabId) {
    case 0:
      return <div>Stateful</div>;
    case 1:
      return <div>Redux form</div>;
    case 2:
      return <div>React Final form</div>;
    case 3:
      return <div>Formik</div>;
    default:
      return null;
  }
};

const FormsSwitcher = () => {
  const [tabId, setTabId] = useState(1);

  return (
    <div className="forms-switcher">
      <div className="forms-switcher__tabs">
        {['Stateful Form', 'Redux Form', 'React FinalForm', 'Formik'].map((name, index)=> (
          <button
            className={`button forms-switcher__tab ${tabId === index ? 'is-success' : 'is-link'}`}
            type="button"
            onClick={() => setTabId(index)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="forms-switcher__content">
        {displayFormContent(tabId)}
      </div>
    </div>
  );
};

export default FormsSwitcher;
