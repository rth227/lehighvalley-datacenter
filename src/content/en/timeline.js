// timeline events - oldest to newest
// type controls the color of the marker - regulation, development, community, or today 

export const timeline = [
  {
    date: 'July 2026',
    type: 'regulation',
    title: 'Draft rules sent to City Council',
    body: 'The city’s planning director sent council a proposed ordinance that would, for the first time, set specific rules for data centers.',
    source: { label: 'City of Bethlehem', url: 'https://www.bethlehem-pa.gov/getmedia/bf27acda-f8a6-4c53-8ec3-d13633d1cf45/PH1-Director-of-Planning-and-Zoning-Zoning-Text-Amendment-Data-Centers.pdf' },
  },
  {
    date: 'August 2026',
    type: 'development',
    title: 'Industrial Drive project proposed',
    body: 'Boyle Construction, Paxos, and Tensor IQ submitted a proposal for a data center in Bethlehem.',
    source: { label: 'The Comenian', url: 'https://comenian.org/15309/opinions/data-centers-deserting-our-backyard/' },
  },
  {
    date: 'August 2026',
    type: 'regulation',
    title: 'Governor signs data center executive order',
    body: 'The state now requires local approval before issuing permits, and nondisclosure agreements are banned.',
    source: { label: 'Commonwealth of Pennsylvania', url: 'https://www.pa.gov/governor/newsroom/2026-press-releases/governor-shapiro-signs-executive-order-on-data-center-developmen' },
  },
  {
    date: 'August 2026',
    type: 'regulation',
    title: 'Planning Commission advances the rules',
    body: 'The Bethlehem Planning Commission advanced the zoning changes and sent them to City Council for a public hearing.',
    source: { label: 'WFMZ 69News', url: 'https://www.wfmz.com/news/area/lehighvalley/northampton-county/bethlehem-area/bethlehem-planners-forward-new-data-center-regulations/article_e388ae42-cd35-4856-ad71-6dbf27025348.html' },
  },
  {
    date: 'August 2026',
    type: 'community',
    title: 'Nearby Air Products project is stopped',
    body: 'Air Products did not appeal Upper Macungie’s rejection of its data center, ending a months-long fight.',
    source: { label: 'Lehigh Valley Public Media', url: 'https://www.lehighvalleypublicmedia.org/news/all/air-products-abandons-plan-for-data-center-at-former-upper-macungie-headquarters/' },
  },
  {
    date: 'August 2026',
    type: 'community',
    title: 'Residents rally across the Lehigh Valley',
    body: 'Lehigh Valley Stands Up and the Lehigh Valley DSA hosted a community conversation about AI data centers and their effects on communities.',
    source: { label: 'The Brown and White', url: 'https://thebrownandwhite.com/2026/09/01/local-groups-host-discussion-on-lehigh-valley-data-centers/' },
  },
  {
    date: 'September 2026',
    type: 'development',
    title: 'Regional planners review the project',
    body: 'The Lehigh Valley Planning Commission reviewed the Bethlehem proposal along with one in Allentown.',
    source: { label: 'Yahoo News', url: 'https://www.yahoo.com/news/articles/latest-planning-reviews-data-center-103116141.html?guccounter=1' },
  },
  {
    date: 'October 2026',
    type: 'regulation',
    title: 'First vote on new regulations',
    body: 'Council passed the amendments 7-0 after a public hearing that ran nearly four hours.',
    source: { label: 'The Brown and White', url: 'https://thebrownandwhite.com/2026/10/07/bethlehem-city-council-holds-public-hearing-on-data-centers-and-passes-zoning-ordinance-amendments/' },
  },
  {
    date: 'October 2026',
    type: 'community',
    title: 'Residents attend City Hall meeting',
    body: 'Residents filled the seats and hallways of the Town Hall rotunda to take part in the public hearing.',
    source: { label: 'The Brown and White', url: 'https://thebrownandwhite.com/2026/10/07/bethlehem-city-council-holds-public-hearing-on-data-centers-and-passes-zoning-ordinance-amendments/' },
  },
  {
    date: 'October 2026',
    type: 'regulation',
    title: 'Final approval',
    body: 'Council gave final approval 6-1, making these Bethlehem’s first zoning standards for data centers.',
    source: { label: 'Lehigh Daily News', url: 'https://lehighdaily.com/bethlehem-passes-data-center-limits-6-1-but-two-proposals-get-in-under-old-rules/' },
  },
  {
    date: 'October 2026',
    type: 'today',
    title: 'A second proposal comes in',
    body: 'A city official revealed that a second proposal was filed before the vote and will also be reviewed under the old rules.',
    source: { label: 'Lehigh Daily News', url: 'https://lehighdaily.com/bethlehem-passes-data-center-limits-6-1-but-two-proposals-get-in-under-old-rules/' },
  },
];

export const timelineLegend = {
  regulation: 'Local regulation',
  development: 'Development',
  community: 'Community action',
  today: 'Today',
};