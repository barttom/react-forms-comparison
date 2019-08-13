import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ReduxFormFields from "./ReduxFormFields";
import ReduxFormLightSaber from "./ReduxFormLightSaber";

const mainReducer = combineReducers({
  form: formReducer
});

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const ReduxFormProvider = ({ onSendForm }) => {
  return (
    <Provider store={store}>
      <div className="columns">
        <div className="column">
          <ReduxFormFields onSubmit={onSendForm}/>
        </div>
        <div className="column">
          <ReduxFormLightSaber />
        </div>
      </div>
    </Provider>

  );
};

export default ReduxFormProvider;
