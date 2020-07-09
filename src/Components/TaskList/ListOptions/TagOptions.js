import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './index.css';

import {
  toggleTagVisibility,
  toggleTagColors
} from '../../../actions';

const TagOptions = (props) => (
  <Dropdown className="list-options-item" text="display tags">
    <Dropdown.Menu>
      <Dropdown.Item
        text={props.showTags ? 'hide tags' : 'show tags'}
        //icon={}
        onClick={props.toggleTagVisibility}
        active={!props.showTags}
      />
      <Dropdown.Item
        text={
          props.useTagColors ? 'remove tag colors' : 'use tag colors'
        }
        //icon={}
        onClick={props.toggleTagColors}
        active={!props.useTagColors}
      />
    </Dropdown.Menu>
  </Dropdown>
);

const mapStateToProps = ({ showTags, useTagColors }) => ({
  showTags,
  useTagColors
});

const mapDispatchToProps = (dispatch) => ({
  toggleTagVisibility: () => dispatch(toggleTagVisibility),
  toggleTagColors: () => dispatch(toggleTagColors)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagOptions);
