import React from "react";
import PropTypes from "prop-types";

const List = ({ ordered = false, fontSize, children }) => {
  const ListElement = ordered ? "ol" : "ul";
  return <ListElement style={{ fontSize }}>{children}</ListElement>;
};

List.propTypes = {
  ordered: PropTypes.bool,
  fontSize: PropTypes.string,
  children: PropTypes.node,
};

export default List;
