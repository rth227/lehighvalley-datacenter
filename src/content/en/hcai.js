// human-centered ai text

export const hcai = {
  title: 'Human-centered AI',
  intro:
    'Human-centered AI is the idea that technology should be designed and built around the needs, values, and ' +
    'voices of the people it affects, not just around what is fastest or most profitable. Most conversations about ' +
    'AI focus on apps and chatbots. But AI also runs on physical buildings: data centers that use land, electricity, ' +
    'and water in real neighborhoods. That makes data centers one of the places where AI meets a community most ' +
    'directly, and where the people who live nearby have a lot at stake. We are looking at the data center proposed ' +
    'in Bethlehem through this lens because the people affected by these decisions deserve to be heard while they ' +
    'are being made. Our goal is to get community voices out there, from residents and organizers to researchers, ' +
    'so that future decisions about technology in the Lehigh Valley can better reflect the people who live here.',
  sections: [
    {
      title: 'The physical side of AI',
      body:
        'Most people experience AI as an app on a phone or laptop. But AI tools like chatbots actually run in data ' +
        'centers: buildings full of computers that need a steady supply of electricity, and often water to keep ' +
        'them cool. As more people use AI, more of these buildings are needed, and they have to be built somewhere. ' +
        'In the Lehigh Valley, that “somewhere” is now being discussed close to home. Our Potential Impacts page ' +
        'covers what is known about their energy and water use.',
    },
    {
      title: 'Engagement',
      body:
        'Engagement means the people affected by a decision have a real chance to shape it, not just hear about it ' +
        'afterward. The researchers and residents we interviewed described different ways that can happen: going to ' +
        'public meetings, reading the documents the city is required to share, voting in local elections, and ' +
        'bringing engineers, policymakers, environmental groups, and residents into the same conversation early on.',
      clipsIntro:
        'We asked Dr. Borick how communities should approach conversations about new developments like data ' +
        'centers. He describes the ways residents can get their voices into the process.',
      clips: [
        {
          // cut from Borick-Interview.mp4, 9:34 to 10:39
          file: 'hcai-engagement-borick-voice.mp4',
          speaker: 'Dr. Christopher Borick',
          role: 'Professor of Political Science, Lehigh University',
          label: 'Researcher\'s view',
          title: 'How residents can make their voices heard',
          note: 'He is speaking about local government in general, not only Bethlehem.',
          // from docs/interviews/borick.txt, with repeated words trimmed. check against the recording.
          transcript:
            'But the first thing I’d say is take advantage of all the legal opportunities you have to weigh in: ' +
            'attendance at meetings, requirements for transparency, that documents are shared publicly and that you ' +
            'have access to them. Sunshine, right? You can see them. That’s the nature. We created a lot of laws for ' +
            'this, and you have to know about them, but then utilize them. So communities should, activists should, ' +
            'get that information and then use it. I can’t say it enough: the power of voice. Voice is key. Your voice ' +
            'could come in the form of elections, where you vote and make it an election issue. We’re seeing that this ' +
            'year, and I think we’ll see that for a while. But voice is also at these meetings, and it’s through the ' +
            'process, where you could submit written documents and written information. And protest. Protest is a ' +
            'form of voice: voice at a meeting, voice at the ballot box, and voice in the streets, per se, where you ' +
            'can gather with others.',
        },
      ],
    },
    {
      title: 'Ethics',
      // based on the "is the community informed?" answers in docs/interviews/protest-1 to protest-5
      body:
        'Ethics is not only about what gets built. It is also about how decisions are made and who gets a real say. ' +
        'People can only take part in a decision if they understand what is being proposed. At the city council ' +
        'meeting, we asked residents and local organizers whether the community is well informed about data centers. ' +
        'Most said no, or not yet. Some felt the language around these projects was vague, for example describing ' +
        'them as “cloud” storage without mentioning AI, or zoning documents that leave questions unanswered. Others ' +
        'said data centers are new enough that many people simply have not heard about them. Not everyone agreed: one ' +
        'resident said people are choosing to get educated. These are personal perspectives, not findings we have ' +
        'verified. But they raise a fair ethical question: when a project could affect a community’s water, power, and ' +
        'neighborhoods, who is responsible for making sure residents understand it before decisions are made? ' +
        'Helping close that gap is part of why we built this site.',
      // clips: drop the video in public/clips/ using `file` (same format as impacts.js clips)
      clipsIntro: 'Julius Burns answers our question about whether the community is informed enough.',
      clips: [
        {
          file: 'hcai-ethics-burns-not-informed.mp4',
          speaker: 'Julius Burns',
          role: 'Steering committee, Lehigh Valley DSA (Democratic Socialists of America)',
          label: 'Personal perspective',
          title: 'Is the community informed enough?',
          note:
            'Burns says residents are kept uninformed on purpose. That is his view; we have not found evidence ' +
            'about anyone’s intent. Recorded at the Bethlehem City Council meeting on data center rules.',
          // from docs/interviews/protest-2.txt, with obvious auto-transcription errors fixed. check against the recording.
          transcript:
            'Interviewer: Do you think the community is well informed enough on this issue, or has enough sources to ' +
            'get a good perspective of what’s going on right now? Burns: I think purposefully, we are not informed, ' +
            'because, for example, they like to say things like, oh, it’s going to be used for just the general cloud. ' +
            'They purposely don’t say the word AI. They will say, oh, it’s going to be used for cloud infrastructure, ' +
            'Netflix, all the daily stuff, to kind of obfuscate what they’re actually for. And in truth, you don’t need ' +
            'hundreds of thousands of square feet of data centers to do that kind of stuff. I have family that works in ' +
            'IT. My dad worked in IT for 40 years. I’ve been in data centers, regular data centers, tens of square feet ' +
            'or hundreds of square feet, not hundreds of thousands. You don’t need that. So I would say we’re not ' +
            'informed on purpose, to get these pushed forward as much as possible.',
        },
      ],
    },
  ],
  reflectionTitle: 'What we’ve learned',
  // draft written from the project's work so far - team, edit this so it reflects what you actually learned
  reflectionBody:
    'Going into this project, many of us thought of AI mainly as software. Talking with residents, researchers, ' +
    'and organizers showed us how physical it is, and how many people care about where it gets built and who gets ' +
    'to decide. We also learned how hard it can be to find clear, reliable information about a local proposal, ' +
    'which is why we tried to label what on this site is a fact, a projection, or a personal opinion. Finally, we ' +
    'noticed whose voices were missing. We did not hear from developers, city officials, or local supporters of ' +
    'the proposal, and a fuller picture would include them.',
};