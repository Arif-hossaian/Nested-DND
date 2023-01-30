import { COMPONENT, ROW, COLUMN } from './constants';

const initialData = {
  layout: [
    {
      type: ROW,
      id: 'row0',
      children: [
        {
          type: COLUMN,
          id: 'column0',
          children: [
            {
              type: COMPONENT,
              id: 'component0',
            },
          ],
        },
      ],
    },
  ],
  components: {
    component0: { id: 'component0', type: 'input', content: 'Input Content' },
    component1: { id: 'component1', type: 'image', content: 'Image Content' },
    component2: { id: 'component2', type: 'email', content: 'Email Content' },
    component3: { id: 'component3', type: 'name', content: 'Name Content' },
    component4: { id: 'component4', type: 'phone', content: 'Phone Content' },
    component5: { id: 'component5', type: 'row', content: 'Row Content' },
    component6: { id: 'component6', type: 'column', content: 'Column Content' },
  },
};

export default initialData;
