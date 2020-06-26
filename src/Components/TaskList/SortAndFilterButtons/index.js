// show abc sort, date sort, important filter, category filter
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon, Dropdown, Menu, Checkbox, Label } from "semantic-ui-react";

import { 
    sortTasksABC, 
    sortTasksDate, 
    sortTasksDateReverse,

    sortTrashABC,
    sortTrashDate,
    sortTrashDateReverse,

    toggleTagVisibility,

    toggleImportant
} from "../../../actions";

class SortAndFilterButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
        this.toggleOpen = this.toggleOpen.bind(this);
    };

    toggleOpen = () => this.setState({isOpen: !this.state.isOpen});

    render() {
        return (
            <Dropdown 
                pointing 
                text="sort and filter" 
                //open={this.state.isOpen}
                //onClick={() => console.log("clicked!")}
            >
                <Dropdown.Menu>
                    <Dropdown.Header>Sort</Dropdown.Header>
                    <Dropdown.Item 
                        icon="sort alphabet down" 
                        text="A to Z"  
                        onClick={this.props.sortABC}
                    />
                    <Dropdown.Item 
                        icon="sort numeric down" 
                        text="Newest" 
                        onClick={this.props.sortDate}
                    />
                    <Dropdown.Item 
                        icon="sort numeric up" 
                        text="Oldest" 
                        onClick={this.props.sortDateReverse}
                    />

                    <Dropdown.Menu scrolling>
                    <Dropdown.Header>
                        Filter Tags
                    </Dropdown.Header>
                    {this.props.tags.map(tag => (
                        <Dropdown.Item 
                        key={tag.name}
                        value={tag.name}
                        text={tag.name}
                        label={{
                            color: tag.color,
                            empty: true,
                            circular: true}}
                            active={this.props.filterTags.includes(tag.name)}
                            //disabled={!this.props.filterTags.includes(tag.name)}
                        onClick={() => this.props.toggleTagVisibility(tag.name)}
                        />
                    ))}
                    </Dropdown.Menu>

                    <Dropdown.Divider />
                    <Dropdown.Header>Important</Dropdown.Header>
                    <Dropdown.Item onClick={this.props.toggleImportant}>
                        {/*<Checkbox toggle />*/}
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        )
    }
};

const mapStateToProps = ({ tags, filterImportant, filterTags }) => ({ tags, filterImportant, filterTags });
const mapTasksDispatch = dispatch => ({
    sortABC: () => dispatch(sortTasksABC),
    sortDate: () => dispatch(sortTasksDate),
    sortDateReverse: () => dispatch(sortTasksDateReverse),
    toggleImportant: () => dispatch(toggleImportant),
    toggleTagVisibility: (tagName) => dispatch(toggleTagVisibility(tagName))
});
const mapTrashDispatch = dispatch => ({
    sortABC: () => dispatch(sortTrashABC),
    sortDate: () => dispatch(sortTrashDate),
    sortDateReverse: () => dispatch(sortTrashDateReverse),
    toggleImportant: () => dispatch(toggleImportant),
    toggleTagVisibility: (tagName) => dispatch(toggleTagVisibility(tagName))
});

export const TaskSortButtons = connect(mapStateToProps, mapTasksDispatch)(SortAndFilterButtons);
export const TrashSortButtons = connect(mapStateToProps, mapTrashDispatch)(SortAndFilterButtons);