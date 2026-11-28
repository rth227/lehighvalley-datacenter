// human-centered ai text

export const hcai = {
  title: 'Human-centered AI',
  intro:
    'Human-centered AI is the idea that technology should be designed and built around the needs, values, and ' +
    'voices of the people it affects, not just around what is fastest or most profitable. AI can feel like ' +
    'something that lives on a screen, but it depends on physical buildings: data centers that use land, ' +
    'electricity, and water in real neighborhoods. That makes a data center one of the places where AI meets a ' +
    'community most directly. We are looking at the data center proposed in Bethlehem through this lens ' +
    'because the people affected by these decisions deserve to be heard while the decisions are being made. ' +
    'This page follows that idea in three steps, from what data centers need from a place, to how residents ' +
    'can take part, to the ethical questions of who gets a say. Then it turns to the community itself. Our ' +
    'goal is to get these voices out there, so that future decisions about technology in the Lehigh Valley ' +
    'better reflect the people who live here.',
  sections: [
    {
      title: 'The physical side of AI',
      // numbers match the sourced facts on the Potential Impacts page (power and water sections)
      body:
        'Most people experience AI as an app on a phone or laptop. Behind that app is a data center: a building ' +
        'full of computers that needs a steady supply of electricity, and often water to keep them cool. The scale ' +
        'can be large. A 2024 national laboratory report estimated that U.S. data centers used about 17 billion ' +
        'gallons of water for cooling in 2023. Closer to home, the developers of the Route 22 proposal estimate it ' +
        'would use about 120 megawatts of electricity at its busiest, and about 3 million gallons of water to fill ' +
        'its cooling system. Data centers can also add noise, heat, and air pollution from backup generators. How ' +
        'much of this a single facility causes depends on its design, and much about the Bethlehem proposal is ' +
        'still unknown. Our Potential Impacts page covers each of these in more detail, with sources.',
      clipsIntro:
        'For many people we spoke with, the environment was the first concern. Prof. Pearl reflects on what it ' +
        'means to have AI’s footprint close to home, and Joel Atkinson names the local impacts he worries about ' +
        'most.',
      clips: [
        {
          // cut from pearlinterviewedited.mp4, 3:24 to 3:54
          file: 'hcai-physical-pearl-data-clean.mp4',
          speaker: 'Prof. Kallie Pearl',
          role: 'Computer Science professor, Lehigh University; Hellertown resident',
          label: 'Personal perspective',
          title: '“People think data is clean”',
          // from docs/interviews/pearl.txt, with filler words trimmed. check against the recording.
          transcript:
            'I think when you bring the data centers close, it brings the problem closer, and that’s new for us, ' +
            'because we’ve always had technology improving and getting better. But the environmental effects, the big ' +
            'issues, I feel like have been in other countries, in other places. People think data is clean because it’s ' +
            'a computer. It’s not like oil spilling everywhere, but it still has its own problems. So it’s such a mixed ' +
            'bag, and I have such conflicting feelings about it.',
        },
        {
          // cut from Interview.MP4, 1:23 to 1:45
          file: 'hcai-physical-joel-environment.mp4',
          speaker: 'Joel Atkinson',
          role: 'Communications coordinator, Lehigh Valley DSA (Democratic Socialists of America); Bethlehem resident',
          label: 'Personal perspective',
          title: 'His biggest concern: the environment',
          note: 'Recorded at the Bethlehem City Council meeting on data center rules.',
          // from docs/interviews/protest-3.txt. check against the recording.
          transcript:
            'My biggest concern with it is the environmental impacts that it might have to our community, locally. I ' +
            'mean, I’m sure you’ve already heard from people and talked to people who’ve talked about things with water, ' +
            'electricity, heat, various other sort of environmental concerns. I think those are what we need to be ' +
            'thinking about locally with it.',
        },
      ],
    },
    {
      title: 'Engagement',
      body:
        'When the effects of a technology land on real neighborhoods, the people who live there should help shape ' +
        'it, not just hear about it afterward. That is what engagement means. The researchers and residents we ' +
        'interviewed described different ways it can happen: going to public meetings, reading the documents the ' +
        'city is required to share, voting in local elections, and bringing engineers, policymakers, environmental ' +
        'groups, and residents into the same conversation early on.',
      clipsIntro:
        'We asked Dr. Borick how communities should approach new developments like data centers. He walks through ' +
        'the ways residents can get their voices into the process.',
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
        'Engagement only works if people understand what they are being asked to weigh in on. That makes ' +
        'information an ethical question, not just a practical one. At the city council meeting, we asked ' +
        'residents and local organizers whether the community is well informed about data centers. Most said no, ' +
        'or not yet. Some felt the language around these projects was vague, for example describing them as ' +
        '“cloud” storage without mentioning AI, or zoning documents that leave questions unanswered. Others said ' +
        'data centers are new enough that many people simply have not heard of them. Not everyone agreed, and one ' +
        'resident said people are choosing to get educated. These are personal perspectives, not findings we have ' +
        'verified. Still, they raise a fair question: when a project could affect a community’s water, power, and ' +
        'neighborhoods, who is responsible for making sure residents understand it before decisions are made? ' +
        'Helping close that gap is part of why we built this site.',
      // clips: drop the video in public/clips/ using `file` (same format as impacts.js clips)
      clipsIntro:
        'Two members of the Lehigh Valley DSA answer that question, and they see it differently.',
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
        {
          // team-trimmed clip from "Information:transparency - 1 .mp4"
          file: 'hcai-ethics-joel-informed.mp4',
          speaker: 'Joel Atkinson',
          role: 'Communications coordinator, Lehigh Valley DSA (Democratic Socialists of America); Bethlehem resident',
          label: 'Personal perspective',
          title: '“More political education is needed”',
          note: 'Recorded at the Bethlehem City Council meeting on data center rules.',
          // from docs/interviews/protest-3.txt. check against the recording.
          transcript:
            'Interviewer: Do you think the community is well informed enough about this issue? Atkinson: I think ' +
            'people have a gut reaction to this, and I think they have some information about this, but I think there’s ' +
            'more information that’s needed, and more political education that’s needed for the public on this. Often, ' +
            'we aren’t informed about these big decisions that are getting made. And I think this is a big decision ' +
            'that’s visible to us in a way that a lot of the big economic decisions that are made in Silicon Valley and ' +
            'Washington and New York aren’t visible to us. So I think that’s part of the reason there’s this reaction, is ' +
            'the visibility of it. It’s a little similar to maybe 10 or 15 years ago when warehouses started popping up ' +
            'in the Lehigh Valley. We saw the warehouses happen, and there wasn’t as much pushback on that. And I think ' +
            'we’re getting more pushback now.',
        },
      ],
    },
  ],
  reflectionTitle: 'What we’ve learned',
  // draft written from the project's work so far - team, edit this so it reflects what you actually learned
  reflectionBody:
    'Going into this project, many of us thought of AI mainly as software. Talking with residents, ' +
    'researchers, and organizers showed us how physical it is, and how much people care about where it gets ' +
    'built and who gets to decide. We also learned how hard it can be to find clear, reliable information ' +
    'about a local proposal, which is why we tried to label what on this site is a fact, a projection, or a ' +
    'personal opinion. Most of all, we learned that listening is where a human-centered approach begins, and ' +
    'that the conversation in Bethlehem is still going.',
};