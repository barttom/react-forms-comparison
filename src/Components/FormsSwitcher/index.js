import React, { Fragment, useState } from 'react';
import './style.css'
import StatefulForm from "../StatefulForm";
import LightSaber from "../LightSaber";



const FormsSwitcher = ({onSendForm}) => {
  const [tabId, setTabId] = useState(0);
  const [statefulFormData, setStatefulFormData] = useState({
    colorMain: '#0074D9',
    colorSecondary: '#0074D9'
  });

  const displayFormContent = () => {
    switch (tabId) {
      case 0:
        return (
          <Fragment>
            <div className="column">
              <StatefulForm onSendForm={onSendForm} onChangeData={setStatefulFormData}/>
            </div>
            <div className="column">
              <LightSaber {...statefulFormData} />
            </div>
          </Fragment>
        );
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
            key={name}
            className={`button forms-switcher__tab ${tabId === index ? 'is-primary' : 'is-link'}`}
            type="button"
            onClick={() => setTabId(index)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="forms-switcher__content">
        <div className="columns">
          {displayFormContent(tabId)}
        </div>
      </div>
    </div>
  );
};

export default FormsSwitcher;
