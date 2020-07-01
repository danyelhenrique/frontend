import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import AuthLayout from "../layouts/auth";
import DefaultLayout from "../layouts/default";

export default function RouteWrapper(props) {
  const { component: Component, isPrivate, ...rest } = props;

  const Layout = true ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(Cprops) => (
        <Layout>
          <Component {...Cprops} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
