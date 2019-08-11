import React, { useState } from 'react';
import './style.css'
import StatefulForm from "../StatefulForm";



const FormsSwitcher = ({onSendForm}) => {
  const [tabId, setTabId] = useState(0);
  const displayFormContent = () => {
    switch (tabId) {
      case 0:
        return <StatefulForm onSendForm={onSendForm} />;
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

  return (
    <div className="forms-switcher">
      <div className="forms-switcher__tabs">
        {['Stateful Form', 'Redux Form', 'React FinalForm', 'Formik'].map((name, index)=> (
          <button
            className={`button forms-switcher__tab ${tabId === index ? 'is-primary' : 'is-link'}`}
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
