// timeline events - oldest to newest
// type controls the color of the marker - regulation, development, community, or today 

export const timeline = [
  {
    date: '[Month Year]',
    type: 'development',
    title: '[First data center proposal announced]',
    body: '[Short description of what happened and why it matters.]',
    source: { label: '[Source name]', url: '#' },
  },
  {
    date: '[Month Year]',
    type: 'regulation',
    title: '[Zoning change or ordinance discussed]',
    body: '[Short description of the regulation and who voted on it.]',
    source: { label: '[Source name]', url: '#' },
  },
  {
    date: '[Month Year]',
    type: 'community',
    title: '[Public meeting or community event]',
    body: '[What residents said or asked for.]',
    source: { label: '[Source name]', url: '#' },
  },
  {
    date: '[Month Year]',
    type: 'development',
    title: '[Construction or approval milestone]',
    body: '[Short description.]',
    source: { label: '[Source name]', url: '#' },
  },
  {
    date: '[Month Year]',
    type: 'today',
    title: 'Where things stand now',
    body: '[Current status, updated by the team.]',
  },
];

export const timelineLegend = {
  regulation: 'Local regulation',
  development: 'Development',
  community: 'Community action',
  today: 'Today',
};