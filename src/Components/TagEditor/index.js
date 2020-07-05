import React from 'react';
import {
  Header,
  Label,
  Button,
  Divider,
  Grid
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import { removeTag } from '../../actions';
import AddTag from './AddTag';

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
        <Button
          icon="x"
          color="red"
          onClick={() => props.removeTag(tag)}
        />
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
