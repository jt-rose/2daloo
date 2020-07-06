import { UPDATE_TRASH, REMOVE_TRASH } from '../actions';

const initialState = [
  {
    title: 'React-Bootstrap',
    content:
      'Bootstrap was considered, but the clean aesthetic of semantic UI won out',
    created: new Date('2020-04-18T17:37:46.248Z'),
    slug: 'react-bootstrap',
    tags: ['UI-library'],
    important: false
  },
  {
    title: 'Material UI',
    content:
      'Material UI is another excellent choice for a UI library, but some key features of Semantic UI, such as the included icon sets and nicely designed accordion, made that the preferable choice.',
    created: new Date('2020-05-20T17:35:21.449Z'),
    slug: 'material-ui',
    tags: ['UI-library'],
    important: false
  },
  {
    title: 'Node, Express, and MongoDB',
    content:
      'In a full-scale app these would be essential, but this app is focused on front-end, so redux is handling the data in a nonpermanent way. These may be incorporated if I refactor this to a full stack project later on.',
    created: new Date('2020-06-21T17:37:46.248Z'),
    slug: 'node-express-and-mongodb',
    tags: [],
    important: true
  }
];

const manageTrash = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TRASH:
      return state.concat(action.task);
    case REMOVE_TRASH:
      return state.filter((x) => x.slug !== action.task.slug);
    default:
      return state;
  }
};

export default manageTrash;
