import React from "react";

import Spinner from "../spinner/spinner.component";

/** Higher-Order Component - HOC */
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
