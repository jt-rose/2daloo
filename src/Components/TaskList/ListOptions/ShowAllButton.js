import React from 'react';
import { connect } from 'react-redux';
import './index.css';

import { toggleShowAll } from '../../../actions';

const ShowAllButton = (props) => (
  <p className="list-options-item" onClick={props.toggleShowAll}>
    {props.showAll ? 'collapse' : 'show all'}
  </p>
);

const mapStateToProps = ({ showAll }) => ({ showAll });
const mapDispatchToProps = (dispatch) => ({
  toggleShowAll: () => dispatch(toggleShowAll)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowAllButton);
