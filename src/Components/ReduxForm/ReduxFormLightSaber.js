import React from 'react';
import { connect } from 'react-redux';
import { getFormValues} from "redux-form";
import LightSaber from "../LightSaber";

const ReduxFormLightSaber = ({
  formValues: {
    colorMain,
    colorSecondary,
    isDoubleBladed,
  },
}) =>  (
  <LightSaber colorMain={colorMain} colorSecondary={colorSecondary} isDoubleBladed={isDoubleBladed} />
);

const mapStateToProps = state => ({
  formValues: getFormValues('order')(state),
});

export default connect(mapStateToProps)(ReduxFormLightSaber);
