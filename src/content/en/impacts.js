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
      summary: '[How much electricity data centers use and what that could mean for local rates and reliability.]',
      points: ['[Key fact or finding]', '[Key fact or finding]'],
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
      sources: [{ label: '[Source name]', url: '#' }],
    },
    {
      id: 'water',
      title: 'Water use',
      summary: '[How data centers use water for cooling and what local supply looks like.]',
      points: ['[Key fact or finding]', '[Key fact or finding]'],
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
          speaker: '[Watershed speaker: add name or agreed description]',
          role: '[Add role]',
          label: 'Personal perspective',
          title: 'What closed-loop cooling can and can’t do',
          note: 'A closed-loop system recirculates cooling water instead of drawing new water every day.',
          transcript:
            'I think closed loop would probably be the biggest difference, just because you know hopefully mitigates a large amount of the water extraction. But then you have to think about even when that water passes through that system, it can only do it so many times. You obviously have some calcification and evaporation, so it\'s going to have to be resupplied at some point.',
        },
      ],
      sources: [{ label: '[Source name]', url: '#' }],
    },
    {
      id: 'land',
      title: 'Land, zoning, and neighborhoods',
      summary: '[Where facilities are proposed, how much land they use, and nearby homes or farms.]',
      points: ['[Key fact or finding]', '[Key fact or finding]'],
      clips: [
        {
          file: 'impacts-land-borick-zoning.mp4',
          speaker: '[Borick: add first name]',
          role: '[Add title and affiliation]',
          label: 'Researcher\'s view',
          title: 'How towns have changed their rules',
          note: 'A general observation about communities across the country, not a finding about Bethlehem.',
          transcript:
            'Some of the early case studies, communities got, I\'m going to use the word kind of rolled over by developers. The other municipalities have started to change their laws, their codes, to protect themselves from these types of tactics. So they\'ve rewritten their zoning ordinances. They\'ve rewritten their land use laws. They\'ve hired you know folks that are specialties in these areas, so the playing fields become more even because of the reaction going forward.',
        },
        {
          file: 'impacts-land-watershed-developer-pulls-out.mp4',
          speaker: '[Watershed speaker: add name or agreed description]',
          role: '[Add role]',
          label: 'Personal perspective',
          title: 'What if a developer pulls out?',
          transcript:
            'Thinking about the insurances that go into what if this doesn\'t work, you know, what if halfway through the development of a data center, a developer pulls out, you know, what type of insurances are in place to make sure that those grounds are restored to what they originally were, and to be able to hold that developer accountable.',
        },
      ],
      sources: [{ label: '[Source name]', url: '#' }],
    },
    {
      id: 'economy',
      title: 'Jobs, taxes, and the local economy',
      summary: '[Construction and permanent jobs, tax revenue, and incentives offered.]',
      points: ['[Key fact or finding]', '[Key fact or finding]'],
      clips: [
        {
          file: 'impacts-economy-watershed-jobs.mp4',
          speaker: '[Watershed speaker: add name or agreed description]',
          role: '[Add role]',
          label: 'Personal perspective',
          title: 'Questions to ask about jobs and bills',
          transcript:
            'And beyond that, you know, it\'s just really understanding, you know, how many jobs is this going to create in its construction compared to when it\'s actually in operation because they\'re night and day. You know what is the impact to the electrical grid? You know what are people thinking that they\'re going to get because a data center gets developed as far as you know breaks in their electricity bill, for lack of a better term.',
        },
        {
          file: 'impacts-economy-watershed-embracing.mp4',
          speaker: '[Watershed speaker: add name or agreed description]',
          role: '[Add role]',
          label: 'Personal perspective',
          title: 'Communities that welcome data centers',
          note: 'The speaker’s general observation, not specific to the Lehigh Valley.',
          transcript:
            'But you also have to keep in mind there are a fair amount of communities that are embracing data centers, much like kind of the large scale parks that you used to see with Bell Labs, Facebook, Google, to use more contemporary examples that want to have the data center as the center point, but then retail shopping apartments, you know. So there is a mix.',
        },
      ],
      sources: [{ label: '[Source name]', url: '#' }],
    },
    {
      id: 'environment',
      title: 'Noise, air, and the environment',
      summary: '[Noise from cooling equipment, backup generators, and emissions.]',
      points: ['[Key fact or finding]', '[Key fact or finding]'],
      clips: [
        {
          file: 'impacts-environment-watershed-noise.mp4',
          speaker: '[Watershed speaker: add name or agreed description]',
          role: '[Add role]',
          label: 'Personal perspective',
          title: 'Noise, vibration, heat, and generators',
          transcript:
            'I think water is the primary focus, just because it\'s the most tangible. But you really have to be able to pay close attention to the footprint of you know, and I hate to sound repetitious, noise, vibration, and heat. You know, because folks may not necessarily think that\'s what they\'re going to feel, but it\'s going to be a major part of any type of data center development, and that\'s just the data center operation. You obviously have the physical development of it, backup generators, which are probably going to be you know relatively loud in close proximity compared to the data center itself.',
        },
        {
          file: 'impacts-environment-moazeni-noise.mp4',
          speaker: 'Dr. Farrah Moazeni',
          role: 'Assistant Professor, Civil and Environmental Engineering, Lehigh University',
          label: 'Researcher\'s view',
          title: 'Noise as a community concern',
          note: 'ACES is the Center for Advancing Community Electrification Solutions, a Lehigh research center the speaker works with.',
          transcript:
            'But noise, for example, would be another issue that many, many communities have raised concern about. And I know that many people are working on that. Actually, ACES has taken upon a project, a potential project, to work on the noise problem.',
        },
      ],
      sources: [{ label: '[Source name]', url: '#' }],
    },
  ],
};