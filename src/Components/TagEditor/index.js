import React from 'react';
import { Header, Label, Grid, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { removeTag } from '../../actions';
import AddTag from './AddTag';

import './index.css';

const TagEditor = (props) => (
  <Grid centered container>
    <Grid.Row key="tags-header">
      <Header as="h2" color="blue">
        Tags
      </Header>
    </Grid.Row>

    {props.tags.map((tag) => (
      <Grid.Row key={`tag-${tag.name}`}>
        <Label
          color={tag.color}
          tag
          style={{ minWidth: '8em' }}
          size="big"
        >
          <div style={{ textAlign: 'center' }}>{tag.name}</div>
        </Label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon
            link
            name="x"
            size="big"
            className="remove-icon"
            onClick={() => props.removeTag(tag)}
          />
        </div>
      </Grid.Row>
    ))}
    <Grid.Row key="add-new-tag">
      <br />
      <Header size={'small'} style={{ color: '#2185d0' }}>
        Add New Tag
      </Header>
    </Grid.Row>

    <Grid.Row key="add-tag-section">
      <AddTag />
    </Grid.Row>
  </Grid>
);

const mapStateToProps = ({ tags }) => ({ tags });
const mapDispatchToProps = (dispatch) => ({
  removeTag: (tag) => dispatch(removeTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagEditor);
