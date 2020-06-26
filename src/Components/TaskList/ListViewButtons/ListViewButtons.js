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

class ImportantButton extends Component {
    state = {}
    handleClick = () =>
      this.setState((prevState) => ({ active: !prevState.active }))
  
    render() {
      const { active } = this.state
  
      return (
        <Button
        active={active} 
        onClick={this.handleClick}
        color={active ? "red" : ""}
        >
            <Icon name={this.props.iconType} />
            {this.props.buttonTitle}
        </Button>
      )
    }
  }

const buttonFormat = {
    sortABCTitle: "Sort ABC",
    sortABCIcon: "sort alphabet up",
    reverseABCTitle: "Reverse ABC",
    reverseABCIcon: "sort alphabet down",

    sortDateTitle: "Sort Newest",
    sortDateIcon: "sort numeric down",
    reverseDateTitle: "Sort Oldest",
    reverseDateIcon: "sort numeric up",

    categoryTitle: "Categories",
    categoryIcon: "tags",

    importantTitle: "Important",
    importantIcon: "exclamation",

}
const viewButtonsTemplate = (buttonFormat) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {}
            this.toggleABCSortDirection = this.toggleABCSortDirection.bind(this);
            this.toggleDateSortDirection = this.toggleDateSortDirection.bind(this);
        }
    
        toggleABCSortDirection = (e) => {}
        toggleDateSortDirection = (e) => {}
        render() {
            return (
                <Button.Group>
                    <Button>
                        <Icon name={buttonFormat.sortABCIcon}/>
                        {buttonFormat.sortABCTitle}
                    </Button>
                    <Button>
                        <Icon name={buttonFormat.sortDateIcon}/>
                        {buttonFormat.sortDateTitle}
                    </Button>
                    <Button>
                        <Icon name={buttonFormat.categoryIcon}/>
                        {buttonFormat.categoryTitle}
                    </Button>
                    <ImportantButton
                        iconType={buttonFormat.importantIcon}
                        buttonTitle={buttonFormat.importantTitle}
                    />
                </Button.Group>
            )
        };
    };
};

const ListViewButtons = viewButtonsTemplate(buttonFormat);


const LVBTest = (props) => (
            <Dropdown pointing text="sort and filter" >
                <Dropdown.Menu>
                    <Dropdown.Header>Sort</Dropdown.Header>
                    <Dropdown.Item 
                        icon="sort alphabet up" 
                        text="A to Z"  
                        onClick={props.sortABC}
                    />
                    <Dropdown.Item 
                        icon="sort numeric down" 
                        text="Newest" 
                        onClick={props.sortDate}
                    />
                    <Dropdown.Item 
                        icon="sort numeric up" 
                        text="Oldest" 
                        onClick={props.sortDateReverse}
                    />

                    <Dropdown.Menu scrolling>
                    <Dropdown.Header>Show Tags</Dropdown.Header>
                    {props.tags.map(tag => (
                        <Dropdown.Item 
                        key={tag.name}
                        value={tag.name}
                        text={tag.name}
                        label={{
                            color: tag.color,
                            empty: true,
                            circular: true}}
                        onClick={() => props.toggleTagVisibility(tag.name)}
                        />
                    ))}
                    </Dropdown.Menu>

                    <Dropdown.Divider />
                    <Dropdown.Header>Important</Dropdown.Header>
                    <Dropdown.Item onClick={props.toggleImportant}>
                        {/*<Checkbox toggle />*/}
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
            
)

const mapStateToProps = ({ tags }) => ({ tags });
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

export const TaskSortButtons = connect(mapStateToProps, mapTasksDispatch)(LVBTest);
export const TrashSortButtons = connect(mapStateToProps, mapTrashDispatch)(LVBTest);

export default connect(mapStateToProps, null)(LVBTest);//ListViewButtons;