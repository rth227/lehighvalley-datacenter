// potential impacts text

export const impacts = {
  title: 'Potential impacts',
  intro:
    '[Introduce this page: what kinds of effects data centers can have on a community, ' +
    'and a note that impacts can be both positive and negative.]',
  clipsHeading: 'From our interviews',
  // clips: drop the video in public/clips/ using `file`. label is the claim status shown to visitors.
  topics: [
    {
      id: 'power',
      title: 'Electricity and the power grid',
      // facts checked 2026-11-10. status is in the wording ("the developers estimate", "the state says") instead of labels.
      summary:
        'Data centers need a lot of electricity to run around the clock. In Bethlehem, a data center is proposed at ' +
        '2184 Industrial Drive, near Route 22. It is under review, not approved.',
      points: [
        'The developers estimate that at its busiest it would use about 120 megawatts, roughly 1.5% of what PPL\'s ' +
          'whole system uses at peak. Most would come from the grid, with some from gas generators on site.',
        'Lehigh Valley electric bills went up in summer 2026. Local reports link part of rising grid costs to large ' +
          'users like data centers.',
        'New state-approved PPL rules make very large users sign long contracts and help fund low-income bill ' +
          'assistance. The state says these rules are meant to keep costs from shifting onto other customers.',
        'No public estimate yet shows how this proposal would change residents\' bills.',
      ],
      clipsIntro:
        'It is not just how much power, but how it is used. Dr. Khazaei explains why AI demand is hard on the grid, ' +
        'and Dr. Moazeni explains what "too many" data centers really means.',
      clips: [
        {
          file: 'impacts-power-khazaei-speed.mp4',
          speaker: 'Dr. Javad Khazaei',
          role: 'Associate Professor, Electrical and Computer Engineering, Lehigh University',
          label: 'Researcher\'s view',
          title: 'Why AI power demand changes so quickly',
          note: 'GPUs (graphics processing units) are the computer chips that run most AI software.',
          transcript:
            'So if you think about building as an example, if you\'re trying to control a building for cooling or for heating, it usually takes hours for the system to run. And the power demand is fairly slow. So it takes time. And they consume a constant amount of power. So an air conditioning unit has a rated power. And if you\'re running it, every hour you\'re consuming the same amount of power. But when we come to the graphical processing units, they are much faster than conventional infrastructure. Like water system is also slow, but data center can run in milliseconds. So your power can go from zero to 100, depending on how many GPUs you use. And you have hundreds of thousands of them. So your power can go, basically oscillate very quickly in a short amount of time. That\'s what makes it more challenging.',
        },
        {
          file: 'impacts-power-moazeni-too-many.mp4',
          speaker: 'Dr. Farrah Moazeni',
          role: 'Assistant Professor, Civil and Environmental Engineering, Lehigh University',
          label: 'Researcher\'s view',
          title: 'What does “too many” data centers mean?',
          transcript:
            'When we say too many, we are comparing with the resources that we have. The resources of energy, the water, because cooling of these data centers would also require water. Workforce, infrastructure, all of this. So if the amount of resources are greater than the number of data centers, perfect. Most likely we are not going to have problems in terms of demand and resource. But if the balance goes the opposite way, meaning that the resources are not enough to provide support to these data centers, then we are going to see problems.',
        },
      ],
      // all checked 2026-11-10
      sources: [
        {
          label: 'Lehigh Daily, "Bethlehem\'s Route 22 data center to face public comment" (Nov. 6, 2026)',
          url: 'https://lehighdaily.com/bethlehems-route-22-data-center-to-face-public-comment/',
        },
        {
          label: 'WFMZ, "Developers tout double-decker data center proposed for Bethlehem" (Aug. 28, 2026)',
          url: 'https://www.wfmz.com/business/developers-tout-industry-changing-double-decker-data-center-proposed-for-bethlehem/article_a646309b-3fc4-46e0-b374-fd4149a305c1.html',
        },
        {
          label: 'Lehigh Daily, "PPL Electric rates set to rise twice this summer" (May 23, 2026)',
          url: 'https://lehighdaily.com/ppl-electric-rates-set-to-rise-twice-this-summer-for-lehigh-valley-homes-as-data-centers-drive-demand/',
        },
        {
          label: 'Pennsylvania PUC, decision in PPL Electric rate case (June 4, 2026)',
          url: 'https://www.puc.pa.gov/press-release/2026/puc-issues-decision-in-ppl-electric-rate-proceeding-06042026',
        },
      ],
    },
    {
      id: 'water',
      title: 'Water use',
      // facts checked 2026-11-10. status is in the wording ("the developers estimate") instead of labels.
      summary:
        'Data centers use water to keep their computers from overheating, and indirectly through the power plants ' +
        'that make their electricity. Bethlehem\'s tap water comes from two reservoirs in the Poconos.',
      points: [
        'A 2024 Lawrence Berkeley National Laboratory report estimated U.S. data centers used about 17 billion gallons ' +
          'of water for cooling in 2023, and about 12 times that indirectly through power plants.',
        'For the Route 22 proposal, the developers plan a closed-loop system that reuses its coolant. They estimate a ' +
          'one-time fill of about 3 million gallons of water, then about 20,000 gallons a year. Regional planners asked ' +
          'where the fill water would come from and whether the public system could supply it in dry periods.',
        'In January 2026, Bethlehem\'s two reservoirs were about 68% full and the city was under a drought watch.',
        'The Delaware River Basin Commission, which manages the region\'s rivers, reviews projects that pump more than ' +
          '100,000 gallons a day. Data centers that buy water from a public system don\'t need its approval, and it ' +
          'says their water use is often not publicly disclosed.',
      ],
      clipsIntro:
        'Two ideas from above come up in our interviews: water used at power plants, and closed-loop cooling. ' +
        'Dr. Moazeni explains why a data center\'s water use is often only counted once, and Travis Pantaleo explains ' +
        'what closed-loop cooling can and can\'t do.',
      clips: [
        {
          file: 'impacts-water-moazeni-counted-once.mp4',
          speaker: 'Dr. Farrah Moazeni',
          role: 'Assistant Professor, Civil and Environmental Engineering, Lehigh University',
          label: 'Researcher\'s view',
          title: 'Water used in two places',
          transcript:
            'For instance, many people talk about the energy consumption, the high energy consumption of these data centers and also they look at the water footprint of them in terms of just the cooling side, right? What they are not looking at and what they are missing here is that all the power resources and the power plants that would generate electricity, for example, for these data centers are going to also need water for their cooling system. So water is being used in two places while it is counted only once for the data centers.',
        },
        {
          file: 'impacts-water-watershed-closed-loop.mp4',
          speaker: 'Travis Pantaleo',
          role: 'Vice President, Cooks Creek Watershed Association; Media Officer, Watershed Coalition of the Lehigh Valley',
          label: 'Watershed advocate\'s view',
          title: 'What closed-loop cooling can and can’t do',
          note: 'A closed-loop system recirculates cooling water instead of drawing new water every day.',
          transcript:
            'I think closed loop would probably be the biggest difference, just because you know hopefully mitigates a large amount of the water extraction. But then you have to think about even when that water passes through that system, it can only do it so many times. You obviously have some calcification and evaporation, so it\'s going to have to be resupplied at some point.',
        },
      ],
      // all checked 2026-11-10
      sources: [
        {
          label: 'The Conversation via Civil Beat, "Data centers consume massive amounts of water" (Aug. 25, 2025)',
          url: 'https://www.civilbeat.org/2025/08/data-centers-consume-massive-amounts-of-water-companies-rarely-say-exactly-how-much/',
        },
        {
          label: 'Lehigh Daily, "Bethlehem\'s Route 22 data center to face public comment" (Nov. 6, 2026)',
          url: 'https://lehighdaily.com/bethlehems-route-22-data-center-to-face-public-comment/',
        },
        {
          label: 'Lehigh Valley Press, "Annual update on city-owned wildlands, water" (Jan. 29, 2026)',
          url: 'https://www.lvpnews.com/20260129/annual-update-on-city-owned-wildlands-water',
        },
        {
          label: 'Delaware River Basin Commission, "Frequently Asked Questions: Data Centers" (updated Nov. 24, 2025)',
          url: 'https://www.nj.gov/drbc/library/documents/DataCenters/DataCentersFAQ.pdf',
        },
      ],
    },
    {
      id: 'land',
      title: 'Land, zoning, and neighborhoods',
      // facts checked 2026-11-10. status is in the wording instead of labels.
      summary:
        'Where a data center is built, and how close it is to homes, shapes who feels its effects. The Route 22 ' +
        'proposal is still under review.',
      points: [
        'The Route 22 proposal would replace an existing industrial building on about 6.8 acres with a two-story, ' +
          'roughly 60-foot-tall building and an electrical substation. Regional planners gave it conditional support as ' +
          'a reuse of underused land, but flagged noise, lighting, heat, and how it would look from nearby homes.',
        'Bethlehem\'s new rules, passed 6-1 in October 2026, keep data centers at least 1,000 feet from homes, schools, ' +
          'parks, and similar places, and require studies on water, energy, noise, and heat. The Route 22 proposal was ' +
          'filed before the vote, so the new rules don\'t apply to it.',
        'The Planning Commission reviews the site layout, not whether a data center is allowed there. Under state law, ' +
          'if it doesn\'t decide within 90 days, the plan is approved automatically unless the developer agrees to more time.',
      ],
      clipsIntro:
        'Bethlehem is not the only place rewriting its rules. Dr. Borick explains how towns across the country changed ' +
        'their zoning after early data center fights, and Travis Pantaleo explains why the closest neighbors, especially ' +
        'those on private wells, tend to feel the effects first.',
      clips: [
        {
          file: 'impacts-land-borick-zoning.mp4',
          speaker: 'Dr. Christopher Borick',
          role: 'Professor of Political Science and Director, Institute of Public Opinion, Muhlenberg College',
          label: 'Researcher\'s view',
          title: 'How towns have changed their rules',
          note: 'A general observation about communities across the country, not a finding about Bethlehem.',
          transcript:
            'Some of the early case studies, communities got, I\'m going to use the word kind of rolled over by developers. The other municipalities have started to change their laws, their codes, to protect themselves from these types of tactics. So they\'ve rewritten their zoning ordinances. They\'ve rewritten their land use laws. They\'ve hired you know folks that are specialties in these areas, so the playing fields become more even because of the reaction going forward.',
        },
        {
          file: 'impacts-land-watershed-wells.mp4',
          speaker: 'Travis Pantaleo',
          role: 'Vice President, Cooks Creek Watershed Association; Media Officer, Watershed Coalition of the Lehigh Valley',
          label: 'Watershed advocate\'s view',
          title: 'Who feels it first: neighbors on wells',
          note: 'He is describing townships like his own, where most homes use private wells. A standoff distance is the minimum gap a town requires between a facility and nearby homes; Bethlehem\'s data center rules, passed in October 2026, set 1,000 feet, but the Route 22 proposal was filed earlier and is exempt.',
          transcript:
            'So if you are on well water and there\'s a data center going up in proximity to your property. You know you have to be able to determine what the pump rate is going to be. You know how far down that well is actually going to have to be made so that it can draw from whatever distance that is that doesn\'t affect. And there\'s usually standoff distances associated with whatever size that might be, so whether it\'s 1000 feet, 2000 feet, you know, you name it. A lot of townships typically have that, and so obviously, that\'s not a lot of distance. It\'s only really affecting the wells or say the public supply within a very short proximity. So I think those are the people that are probably taking consideration first, just because of how close they\'re going to be to the data center. With then noise, heat, and vibration, kind of looking at folks that are distributed a little bit further away from the data center.',
        },
      ],
      // all checked 2026-11-10
      sources: [
        {
          label: 'Lehigh Daily, "Bethlehem\'s Route 22 data center to face public comment" (Nov. 6, 2026)',
          url: 'https://lehighdaily.com/bethlehems-route-22-data-center-to-face-public-comment/',
        },
        {
          label: 'LehighValleyLive, "What the latest planning reviews say about data center proposals" (Sept. 23, 2026)',
          url: 'https://www.yahoo.com/news/articles/latest-planning-reviews-data-center-103116141.html',
        },
        {
          label: 'Lehigh Daily, "Bethlehem passes data center limits 6-1" (Oct. 21, 2026)',
          url: 'https://lehighdaily.com/bethlehem-passes-data-center-limits-6-1-but-two-proposals-get-in-under-old-rules/',
        },
        {
          label: 'City of Bethlehem, Director of Planning and Zoning, data center zoning text amendment (2026)',
          url: 'https://www.bethlehem-pa.gov/getmedia/418548d0-b59f-4a4c-9aaa-ec57ecaff99d/06d-Director-of-Planning-and-Zoning-Zoning-Text-Amendment-Data-Centers.pdf',
        },
      ],
    },
    {
      id: 'economy',
      title: 'Jobs, taxes, and government',
      // facts checked 2026-11-10. status is in the wording instead of labels.
      summary:
        'Supporters of data centers point to jobs and tax revenue. Critics point to how few lasting jobs they create ' +
        'and the tax breaks they receive. The rules are set by the city, the state, and the officials voters elect.',
      points: [
        'Building a data center takes many construction workers, but those jobs end when it opens. Permanent jobs are ' +
          'fewer, mostly in security, maintenance, and administration. No job or tax estimate for the Route 22 ' +
          'proposal has been made public.',
        'Pennsylvania exempts eligible data centers from its 6% sales tax on computer equipment. In counties of more ' +
          'than 250,000 people, which includes both of Bethlehem\'s counties, a project must invest at least $100 ' +
          'million and create 45 jobs. The state estimated the break would cost about $1.9 billion over seven years.',
        'In August 2026, Gov. Shapiro ordered that developers meet new state standards to get the tax break, ' +
          'including at least 200 construction jobs and 50 well-paid permanent jobs, and show local approval before ' +
          'getting state permits. A bill to end the tax break passed the state House but, as of early November, was ' +
          'stuck in the Senate.',
      ],
      clipsIntro:
        'None of our interviewees studies jobs or taxes, so the facts above come from other sources. Dr. Borick ' +
        'explains how both voters and AI companies will try to shape Pennsylvania\'s data center laws, and Dr. Moazeni ' +
        'explains why she thinks data centers should be studied and regulated carefully, without being rushed.',
      clips: [
        {
          file: 'impacts-economy-borick-state-policy.mp4',
          speaker: 'Dr. Christopher Borick',
          role: 'Professor of Political Science and Director, Institute of Public Opinion, Muhlenberg College',
          label: 'Researcher\'s view',
          title: 'What voters will expect from lawmakers',
          note: 'He is talking about Pennsylvania lawmakers elected this year, some partly because of their positions on data centers.',
          transcript:
            'There\'s some government executive orders on this matter, but a lot of it still has to be resolved through legislative processes. And so you\'ll see a number of those people that that owe, in some part, their positions on data centers to their arrival in office under the microscope to say, okay, what are you doing? And so I expect there\'ll be much more activity on this. At the same time, you\'re going to have much greater lobbying and investment from AI companies also reaching out. And so that doesn\'t mean it\'s going to be dominated by one kind of perspective, but certainly the election outcomes should be reflected.',
        },
        {
          file: 'impacts-economy-moazeni-take-our-time.mp4',
          speaker: 'Dr. Farrah Moazeni',
          role: 'Assistant Professor, Civil and Environmental Engineering, Lehigh University',
          label: 'Researcher\'s view',
          title: 'Don\'t skip the study',
          note: 'From her closing thoughts on data center development in general.',
          transcript:
            'I believe that technology is good. Actually, it can be great. It can be very beneficial to our lives as long as we don\'t rush into it. I believe that we shouldn\'t just allow data centers to take a shortcut to, you know, to be developed overnight. And similar to any other technology, that we take our time, we study them, we\'ll look at the regulations, we\'ll look at the impacts and all of those. Maybe, yeah, we can do that at a higher pace, more prioritized, but we cannot ignore them and skip them.',
        },
      ],
      // all checked 2026-11-10
      sources: [
        {
          label: 'WPSU, "What to know about Pennsylvania\'s data center tax exemption" (Nov. 2, 2026)',
          url: 'https://radio.wpsu.org/2026-11-02/what-to-know-about-pennsylvanias-data-center-tax-exemption-and-the-shifting-attitudes-surrounding-it',
        },
        {
          label: 'Spotlight PA, "What Shapiro\'s new data center order does and doesn\'t force developers to do" (Aug. 25, 2026)',
          url: 'https://www.spotlightpa.org/news/2026/08/pennsylvania-data-center-executive-order-shapiro-explainer-environment/',
        },
        {
          label: 'Spotlight PA, "Data center tax break could cost state billions in revenue" (Feb. 19, 2026)',
          url: 'https://www.spotlightpa.org/news/2026/02/data-centers-pennsylvania-tax-break-sales-exemption-capitol/',
        },
      ],
    },
    {
      id: 'environment',
      title: 'Noise, air, and the environment',
      summary: '[Noise from cooling equipment, backup generators, and emissions.]',
      points: ['[Key fact or finding]', '[Key fact or finding]'],
      clipsIntro:
        'Noise came up in several of our interviews. Travis Pantaleo describes what neighbors might notice beyond ' +
        'water, including backup generators, and Prof. Kallie Pearl, a Hellertown resident, thinks about how sound and ' +
        'light could affect wildlife.',
      clips: [
        {
          file: 'impacts-environment-watershed-noise.mp4',
          speaker: 'Travis Pantaleo',
          role: 'Vice President, Cooks Creek Watershed Association; Media Officer, Watershed Coalition of the Lehigh Valley',
          label: 'Watershed advocate\'s view',
          title: 'Noise, vibration, heat, and generators',
          transcript:
            'I think water is the primary focus, just because it\'s the most tangible. But you really have to be able to pay close attention to the footprint of you know, and I hate to sound repetitious, noise, vibration, and heat. You know, because folks may not necessarily think that\'s what they\'re going to feel, but it\'s going to be a major part of any type of data center development, and that\'s just the data center operation. You obviously have the physical development of it, backup generators, which are probably going to be you know relatively loud in close proximity compared to the data center itself.',
        },
        {
          file: 'impacts-environment-pearl-ecosystem.mp4',
          speaker: 'Prof. Kallie Pearl',
          role: 'Computer Science professor, Lehigh University; Hellertown resident',
          label: 'Personal perspective',
          title: 'Effects on wildlife',
          note: 'Speaking as a nearby resident, not from research.',
          transcript:
            'I think about a data center and I\'m literally just the first thing I\'m thinking is like the water usage, the electric, the sound, the light, how even if it\'s not disrupting the humans, like the ecosystem, the animals in that area is now like being pushed out and pushed into different areas.',
        },
      ],
      sources: [{ label: '[Source name]', url: '#' }],
    },
  ],
};