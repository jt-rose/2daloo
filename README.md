# 2daloo

2daloo is a task-tracking app with a variety of sorting, tagging, and filtering options available.

### Dependencies

- [react] - component-based web architecture
- [redux] - state management library
- [react-router-dom] - manage SPA url changes
- [ramda] - functional programming tools
- [semantic-UI]- stylized component library

### Launching the 2daloo app

1. Download the files from github
1. Move to the parent folder from the command line
1. Install dependencies using `npm install` or `yarn install`
1. Start the program with `npm start` or `yarn start`

This app is currently front-end focused, with redux managing a mock-up of the user login and data in addition to its normal use case of UI settings.

### Features

## Clean, Responsive UI

The app is built to look clean, intuitive, and appropraitely sized whether on a desktop or mobile.

## Add, Edit, and Remove Posts

Posts can be viewed from within an accordion and can quickly be created, edited, and removed.

## Toggle Show-All/ Collapse

Posts can be set to quickly show all posts at once or return to highlighing one at a time.

## Create and Apply Tags to Posts

Colored and named tags can be stored and applied to posts.

## Customize Post Headings with Tag Colors

The tag color can be used for the post heading to quickly identify which tags fall under which categories.

## Mark Posts as Important

Posts marked as important will be visually indicated as such in the list of tasks.

## Sort by Date, Name, Important, and Tag Groups

Posts can be sorted according to a wide variety of factors.

## Filter by Importance and Tag Groups

Show only posts marked as important or included under a selected tag group.

## Store Backups in Trash Folder

Deleted posts are move to a trash folder, where they can be viewed, restored, or permanenty deleted.

[react]: http://nodejs.org
[redux]: https://redux.js.org/
[react-router-dom]: https://www.npmjs.com/package/react-router-dom
[ramda]: https://ramdajs.com
[semantic-ui]: https://react.semantic-ui.com/
