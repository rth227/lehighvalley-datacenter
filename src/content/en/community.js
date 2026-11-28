// community response text

export const community = {
  title: 'Community Response',
  intro: "Developers proposed a two-story data center facility with a 65,000 square-foot footprint along Route 22. The proposal sparked a lot of conversation around Bethlehem, as not everyone sees this issue in the same light. Some local residents are worried about how it could affect their water, utility bills, and neighborhoods, while some are focused on potential growth. When the City Council held a public hearing on the city's first data center rules, residents packed Town Hall for a nearly four-hour meeting to share their views. Our team has spent the semester interviewing Bethlehem residents, people who work in the industry, and people who work in local government, to understand what data center development means for the people who live here.",

  voicesTitle: 'In their words...',
  voices: [
    // quotes from docs/interviews; filler words and stutters cleaned up, "..." marks skipped words
    { quote: 'I believe that technology is good. Actually, it can be great. It can be very beneficial to our lives as long as we don’t rush into it.', name: 'Dr. Farrah Moazeni', role: 'Assistant Professor, Civil and Environmental Engineering, Lehigh University', why: 'Human-centered AI isn’t about stopping technology. It’s about moving at a pace that gives communities time to study the impacts and prepare.' },
    { quote: 'Should I really be requiring this tool that I know has these implications? Should I be encouraging a classroom of people to be using it all at the same time, and not thinking about the energy usage on top of it?', name: 'Prof. Kallie Pearl', role: 'Computer Science professor, Lehigh University, on using AI in her classes', why: 'Every AI prompt has a real-world cost in energy and water. Thinking about who pays that cost, even in everyday use, is at the heart of human-centered AI.' },
    { quote: 'Large, financially resourced entities come into really small communities with all kinds of top-notch legal teams, while local communities are often pretty limited. They have a lot of volunteers doing part-time governance.', name: 'Dr. Christopher Borick', role: 'Professor of Political Science, Lehigh University', why: 'When the people building AI infrastructure have far more resources than the towns deciding on it, residents’ voices can get drowned out. Human-centered AI means leveling that playing field.' },
    { quote: 'It is very much the move fast and break things mentality. They’re trying to get these built as quickly as possible.', name: 'Julius Burns', role: 'Steering committee, Lehigh Valley DSA (Democratic Socialists of America)', why: '“Move fast and break things” is a famous tech-industry motto. He’s asking whether that speed leaves room for the people who live next to what gets built.' },
    { quote: 'I think that what’s really exciting about this issue is that it really does unite both sides.', name: 'Meg', role: 'Neighborhood resident, interviewed at the Bethlehem City Council meeting', why: 'Concerns about data centers cross party lines. That common ground gives communities a stronger voice in how AI is built.' },
    { quote: 'It’s a two-way street. There are some benefits and there are some disadvantages.', name: 'Dr. Javad Khazaei', role: 'Associate Professor, Electrical and Computer Engineering, Lehigh University', why: 'Data centers can bring benefits and costs. Being human-centered means weighing both honestly, with the community at the table.' },
  ],
  voicesNote:
    'Listening is where a human-centered approach begins. These are some of the voices we heard this semester, ' +
    'from researchers, residents, and local organizers. They don’t all agree, and that is the point. Decisions ' +
    'about technology in our community should be shaped by the full range of people who live with them. Each ' +
    'quote is that person’s own view, in their own words.',

  clipsTitle: 'Interview Clips',
  clipsBody:
    'Hear more from the people we interviewed. Each clip says who is speaking and whether it is a personal ' +
    'perspective or a researcher’s view, and each one has a full transcript.',
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
    {
      // cut from Interview.MP4, 0:21 to 1:12
      file: 'community-joel-who-decides.mp4',
      speaker: 'Joel Atkinson',
      role: 'Communications coordinator, Lehigh Valley DSA (Democratic Socialists of America); Bethlehem resident',
      label: 'Personal perspective',
      title: 'Who gets to decide',
      note:
        'Recorded at the Bethlehem City Council meeting. His numbers on how many data centers are planned and being ' +
        'built nationally are his own and were not checked by our team.',
      // from docs/interviews/protest-3.txt. check against the recording.
      transcript:
        'I mean, I think I’d like people on the council to hear the community’s concerns. I think people across the ' +
        'country, not just in Bethlehem or the Lehigh Valley, are upset by this rapid rollout of data centers that’s ' +
        'been decided by the richest people in our society, without democratic input from the rest of society. It ' +
        'really shows when we see thousands of data centers planned, hundreds getting built this year, who controls ' +
        'what happens and who gets to decide the kinds of infrastructure we see develop. People in this country want ' +
        'things like high-speed rail. They want things like Medicare for All. There’s lots of need in this community ' +
        'just for housing. That’s been a big issue in the Lehigh Valley. But we don’t see capital being directed ' +
        'towards that. We see it being directed towards data center construction.',
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