import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ReduxFormFields from "../FormsSwitcher/ReduxFormFields";

const mainReducer = combineReducers({
  form: formReducer
});

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const ReduxFormProvider = () => {
  return (
    <Provider store={store}>
      <div className="columns">
        <div className="column">
          <ReduxFormFields />
        </div>
      </div>
    </Provider>

  );
};

export default ReduxFormProvider;
