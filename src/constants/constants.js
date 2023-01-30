import shortid from 'shortid';

export const SIDEBAR_ITEM = 'sidebarItem';
export const ROW = 'row';
export const COLUMN = 'column';
export const COMPONENT = 'component';

export const SIDEBAR_ITEMS = [
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'input',
      content: 'Input Content',
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'name',
      content: 'Name Content',
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'email',
      content: 'Email Content',
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'phone',
      content: 'Phone Content',
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'image',
      content: 'Image Content',
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'row',
      content: 'Row content',
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'column',
      content: 'Column content',
    },
  },
];
