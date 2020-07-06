import { UPDATE_TASK, REMOVE_TASK } from '../actions';
/*
const immReverse = (arr, newArr=[]) => {
    if (arr.length === 0) {
        return newArr
    }; 
    return immReverse(arr.slice(1),[arr[0],...newArr]);
};
*/

const initialState = [
  {
    title: 'React Architecture',
    content:
      'Use React for declarative, component-based architecture with JSX',
    created: new Date('2020-02-18T17:37:46.248Z'),
    slug: 'react-architecture',
    tags: [],
    important: true
  },
  {
    title: 'Connect to Redux',
    content:
      'Use Redux to manage state decoupled from components, avoiding the need for prop drilling',
    created: new Date('2020-02-20T17:35:21.449Z'),
    slug: 'connect-to-redux',
    tags: ['redux'],
    important: true
  },
  {
    title: 'React-Router for SPA Views',
    content:
      'Use React-Router to intuitively design SPA views within a <Switch> component rendering while maintaining traditional url paths',
    created: new Date('2020-02-21T17:37:46.248Z'),
    slug: 'react-router-for-spa-views',
    tags: [],
    important: true
  },

  {
    title: 'Semantic UI',
    content:
      'Utilize Semantic UI to efficiently create clean, stylized views and allow developers to focus on core application logic',
    created: new Date('2020-02-28T17:37:46.248Z'),
    slug: 'semantic-ui',
    tags: ['UI-library'],
    important: false
  },
  {
    title: 'Redux Tooling',
    content:
      'Use various redux tooling, such as devtools extension and redux thunk, to expand upon core redux functionality',
    created: new Date('2020-02-29T17:37:46.248Z'),
    slug: 'redux-tooling',
    tags: ['redux'],
    important: false
  }
];

const manageTasks = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TASK:
      if (action.oldSlug) {
        const foundAt = state.findIndex(
          (x) => x.slug === action.oldSlug
        );
        return [
          ...state.slice(0, foundAt),
          action.task,
          ...state.slice(foundAt + 1)
        ];
      }
      return state.concat(action.task);
    case REMOVE_TASK:
      return state.filter((x) => x.slug !== action.task.slug);
    default:
      return state;
  }
};

export default manageTasks;
