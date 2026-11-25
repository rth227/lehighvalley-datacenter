// community response text

export const community = {
  title: 'Community Response',
  intro: "Developers proposed a two-story data center facility with a 65,000 square-foot footprint along Route 22. The proposal sparked a lot of conversation around Bethlehem, as not everyone sees this issue in the same light. Some local residents are worried about how it could affect their water, utility bills, and neighborhoods, while some are focused on potential growth. When the City Council held a public hearing on the city's first data center rules, residents packed the Town Hall for during a nearly four-hour meeting to share their views. Our team has spent the semester interviewing Bethlehem residents, people who work in the industry, and people who work in local government, to understand what data center development means for the people who live here.",

  voicesTitle: 'In their words...',
  voices: [
    // quotes from docs/interviews (see clip-plan.md "In their words" cards); stutters cleaned up
    { quote: 'I think that what’s really exciting about this issue is that it really does unite both sides.', name: 'Meg', role: 'Neighborhood resident, interviewed at the Bethlehem City Council meeting' },
    { quote: 'They bring coalitions together, and combinations that aren’t always neatly fit into the way we think about things.', name: 'Dr. Christopher Borick', role: 'Professor of Political Science, Lehigh University' },
    { quote: 'There are some benefits and there are some disadvantages. If we can find the middle ground and find the best point where these data centers could be installed, then we could benefit from their deployment as well.', name: 'Dr. Javad Khazaei', role: 'Associate Professor, Electrical and Computer Engineering, Lehigh University' },
    { quote: 'It’s such a mixed bag, and I have such conflicting feelings about it.', name: 'Prof. Kallie Pearl', role: 'Computer Science professor, Lehigh University; Hellertown resident' },
  ],
  voicesNote:
    'Whose voices are here, and whose are missing: the people we interviewed at the council meeting all attended ' +
    'the same meeting, and three of the five are leaders of the Lehigh Valley Democratic Socialists of America. We ' +
    'did not interview a developer, a city official, a local business owner, or a local supporter of the proposal, ' +
    'so those perspectives are not represented on this site.',

  clipsTitle: 'Interview Clips',
  clipsBody:
    'Short clips from our interviews. Each one is labeled with who is speaking and whether it is a personal ' +
    'perspective or a researcher’s view, and each has a full transcript.',
  // each clip is either a full clip object (same format as impacts.js) or a '[placeholder]' string
  clips: [
    {
      // cut from pearlinterviewedited.mp4, 4:47 to 5:21
      file: 'community-pearl-electric-bill.mp4',
      speaker: 'Prof. Kallie Pearl',
      role: 'Computer Science professor, Lehigh University; Hellertown resident',
      label: 'Personal perspective',
      title: 'What residents need to know',
      note:
        'Prof. Pearl talks about how rising costs affect her household and why she thinks residents need clear, ' +
        'honest information about new projects. The costs she mentions are her own experience, not a measured ' +
        'figure for the area.',
      // from docs/interviews/pearl.txt, with filler words trimmed. check against the recording.
      transcript:
        'I think the immediate thing is, if people are going to see a change to their bottom line, like if my ' +
        'electric bill is going to go up, and the cost of electricity is already skyrocketing, I’m not happy. ' +
        'We’re about to go into winter, right? I’m going to pay, you know, whatever to heat my house. I literally ' +
        'make the joke with my husband: okay, I wonder what the cost will be this year, because we could use less ' +
        'than we did last year and we pay two times as much, which doesn’t work out. I think a lot of it has to be ' +
        'transparency in planning and just education for folks.',
    },
  ],

  involvedTitle: 'How to Get Involved',
  involved: [
    // meeting and contact details from bethlehem-pa.gov and the Rules of Council (rev. Dec. 2024), checked 2026-11-25
    { title: 'Attend a public meeting', body: 'Regular City Council meetings are at 7 p.m. at Town Hall, 10 East Church Street. They are open to the public and streamed live on the city’s YouTube channel. At each meeting there is time for public comment, and each person can speak for up to five minutes. Planning Commission meetings are listed on the city’s Planning and Zoning calendar.', link: { label: 'City meeting calendar', url: 'https://www.bethlehem-pa.gov/Calendar' } },
    { title: 'Contact your city council', body: 'Each of the seven council members has a city email address, listed on the council members page. You can also reach the City Clerk’s office, which handles council business, at cityclerk@bethlehem-pa.gov or (610) 865-7130.', link: { label: 'City Council members', url: 'https://www.bethlehem-pa.gov/Meet-Your-Government/City-Council/Members' } },
    { title: 'Learn more before you weigh in', body: 'It helps to know how data centers work and what has actually been proposed here before you speak up. Our Potential Impacts page and the resources below are a good place to start.', link: { label: 'See resources below', url: '#resources' } },
  ],

  resourcesTitle: 'Resources',
  resourcesBody: 'Research reports, news coverage, and official documents for anyone who wants to learn more.',
  resources: [
  { label: 'Bill 28-2026: Amending the zoning ordinance for data centers', kind: 'City Document', source: 'City of Bethlehem', url: 'https://www.bethlehem-pa.gov/getmedia/648da1eb-cc04-4fb3-9fc7-c2a85e311b18/08a-Bill-28-2026-Amending-Part-13-of-the-Zoning-Ordinance-Data-Centers.pdf' },
  { label: 'Zoning text amendment for data centers (public hearing document)', kind: 'City Document', source: 'City of Bethlehem, Director of Planning and Zoning', url: 'https://www.bethlehem-pa.gov/getmedia/bf27acda-f8a6-4c53-8ec3-d13633d1cf45/PH1-Director-of-Planning-and-Zoning-Zoning-Text-Amendment-Data-Centers.pdf' },
  { label: 'Hundreds pack Lehigh Valley data center hearing only to be sent home as board hits pause', kind: 'News Article', source: 'LehighValleyLive', url: 'https://www.lehighvalleylive.com/news/2026/10/hundreds-pack-lehigh-valley-data-center-hearing-only-to-be-sent-home-as-board-hits-pause.html' },
  { label: 'Bethlehem City Council OKs data center amendments; 2nd plan submitted under previous rules', kind: 'News Article', source: 'WFMZ-TV 69 News', url: 'https://www.wfmz.com/news/local_government/city_township_county_councils/bethlehem-city-council-oks-data-center-amendments-second-plan-submitted-under-previous-rules/article_a611945d-eac9-4f42-9c9f-d4cb13821a3d.html' },
  { label: 'Bethlehem considers new rules for future data center development', kind: 'News Article', source: 'NBC10 Philadelphia', url: 'https://www.nbcphiladelphia.com/news/local/bethlehem-considers-new-rules-for-future-data-center-development/4475204/' },
  { label: 'Bethlehem City Council holds public hearing on data centers and passes zoning ordinance amendments', kind: 'News Article (student newspaper)', source: 'The Brown and White', url: 'https://thebrownandwhite.com/2026/10/07/bethlehem-city-council-holds-public-hearing-on-data-centers-and-passes-zoning-ordinance-amendments/' },
  { label: 'Governor Shapiro signs executive order on data center development', kind: 'Press Release', source: 'Office of the Governor of Pennsylvania', url: 'https://www.pa.gov/governor/newsroom/2026-press-releases/governor-shapiro-signs-executive-order-on-data-center-developmen' },
  { label: 'Governor Shapiro’s executive order on data centers', kind: 'News Article', source: 'NBC10 Philadelphia', url: 'https://www.nbcphiladelphia.com/news/local/pennsylvania-governor-josh-shapiro-data-centers-executive-order/4449803/' },
  { label: 'How Pennsylvania towns are protecting themselves from the noise, heat and utility costs of massive data centers', kind: 'Article', source: 'Penn State Institutes of Energy and the Environment', url: 'https://iee.psu.edu/news/how-pennsylvania-towns-are-protecting-themselves-noise-heat-and-utility-costs-massive-data' },
],
};