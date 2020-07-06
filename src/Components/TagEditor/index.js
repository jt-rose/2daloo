import React from 'react';
import {
  Header,
  Label,
  Button,
  Divider,
  Grid,
  Icon
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import { removeTag } from '../../actions';
import AddTag from './AddTag';

import './index.css';

const TagEditor = (props) => (
  <Grid centered container>
    <Grid.Row>
      <Header as="h2" color="blue">
        Tags
      </Header>
    </Grid.Row>

    {props.tags.map((tag) => (
      <Grid.Row>
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
            //color="grey"
            className="remove-icon" //"grey"
            onClick={() => props.removeTag(tag)}
          />
        </div>
      </Grid.Row>
    ))}
    <Grid.Row>
      <Divider horizontal>Add New Tag</Divider>
    </Grid.Row>

    <Grid.Row>
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
