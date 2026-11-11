# Interview clip plan

Which words to cut, from whom, and where each clip goes on the site. Drop finished clips into `public/clips/` using the filenames below.

- **Quotes are word for word from the auto-transcripts**, including stutters, so you can find them in the footage. Check each against the recording before captioning.
- **★ = core set.** Cut these first if time is short.
- **Video files:** `.mp4` (H.264). **Audio files:** `.mp3`. Meg and Chris are audio only: no video or photos of them.

## Speaker captions

Show this under every clip, along with the label.

| Speaker | Caption | Label |
|---|---|---|
| Dr. Farrah Moazeni | Asst. Prof., Civil & Environmental Engineering, Lehigh | Researcher's view |
| Dr. Javad Khazaei | Assoc. Prof., Electrical & Computer Engineering, Lehigh | Researcher's view |
| Prof. Kallie Pearl | Lehigh CS professor; Hellertown resident | Personal perspective |
| Borick | **Needs first name and title** | Researcher's view (confirm) |
| Watershed speaker | **Needs name or an agreed description** | Personal perspective |
| Leo Atkinson | Co-chair, Lehigh Valley DSA | Personal perspective |
| Julius Burns | Steering committee, Lehigh Valley DSA | Personal perspective |
| Joel Atkinson | Communications coordinator, Lehigh Valley DSA; Bethlehem resident | Personal perspective |
| Meg | Neighborhood resident (audio only) | Personal perspective |
| Chris | City of Bethlehem resident (audio only) | Personal perspective |

## Home page (`/`)

### 1. ★ `home-moazeni-real-concerns.mp4`
**Where:** "Photos and videos" grid, replacing the `[Video: interview clip]` tile.
**Speaker:** Dr. Moazeni

> There are different aspects of data centers that could make people nervous. Some of them are very true and some of them are not exactly the reality. For example, the water resource, the energy usage, they are real.

### 2. `home-faq-khazaei-hyperscale.mp4`
**Where:** "Data centers, explained" → "What is a data center?", under the answer.
**Speaker:** Dr. Khazaei
**Note:** Khazaei later says newer GPUs reach 700 watts. Check the wattage against a source.

> So by the term hyperscale, we mean data centers with hundreds of thousands of graphical processing units or GPUs. And the challenge is that each GPU consumes somewhere about 300 to 400 watts of power. Now imagine you're integrating hundreds of thousands of those in one building. So that's going to be a huge energy consumption.

### 3. ★ `home-faq-borick-asymmetry.mp4`
**Where:** "Data centers, explained" → "Who decides whether one gets built?", under the answer.
**Speaker:** Borick
**Note:** Borick goes on to say the balance has been evening out as communities rewrite their zoning. Mention that in the text beside the clip.

> So so often there's a an asymmetry in in local politics when large financially resourced entities come into really small communities because they can come in with all kinds of top notch legal teams, resources to to leverage in the process, while local communities are often pretty limited, they have a lot of volunteers doing part-time governance on boards of planning boards and supervisor boards

**No clip:** "Why are so many being built right now?" and "Why the Lehigh Valley?" No interviewee answers these directly, so they should be answered with sourced text.

## Potential impacts (`/impacts`)

This page uses only the researchers, Borick, and the watershed speaker. Each clip goes after that topic's bullet list and before its sources. The slots are built: name the file exactly as shown, put it in `public/clips/`, and it replaces the placeholder. Add a still from the clip with the same name ending in `.jpg`, which shows before someone presses play. Names and positions show under each video, so they don't need to be in the footage. Titles, names, positions, labels, and transcripts live in `src/content/en/impacts.js`, where repeated words are cleaned up in the transcripts.

### Electricity and the power grid

#### 4. ★ `impacts-power-khazaei-speed.mp4`
**Speaker:** Dr. Khazaei

> So if you think about building as an example, if you're trying to control a building for cooling or for heating, it usually takes hours for the system to run. And the power demand is fairly slow. So it takes time. And they consume a constant amount of power. So an air conditioning unit has a rated power. And if you're running it, every hour you're consuming the same amount of power. But when we come to the graphical processing units, they are much faster than conventional infrastructure. Like water system is also slow, but data center can run in milliseconds. So your power can go from zero to 100, depending on how many GPUs you use. And you have hundreds of thousands of them. So your power can go, basically oscillate very quickly in a short amount of time. That's what makes it more challenging.

#### 5. `impacts-power-moazeni-too-many.mp4`
**Speaker:** Dr. Moazeni

> When we say too many, we are comparing with the resources that we have. The resources of energy, the water, because cooling of these data centers would also require water. Workforce, infrastructure, all of this. So if the amount of resources are greater than the number of data centers, perfect. Most likely we are not going to have problems in terms of demand and resource. But if the balance goes the opposite way, meaning that the resources are not enough to provide support to these data centers, then we are going to see problems.

### Water use

#### 6. ★ `impacts-water-moazeni-counted-once.mp4`
**Speaker:** Dr. Moazeni

> For instance, many people talk about the energy consumption, the high energy consumption of these data centers and also they look at the water footprint of them in terms of just the cooling side, right? What they are not looking at and what they are missing here is that all the power resources and the power plants that would generate electricity, for example, for these data centers are going to also need water for their cooling system. So water is being used in two places while it is counted only once for the data centers.

#### 7. `impacts-water-watershed-closed-loop.mp4`
**Speaker:** Watershed speaker

> I think closed loop would probably be the biggest difference, just because you know hopefully mitigates a large amount of the water extraction. But then you have to think about even when that water passes through that system, it can only do it so many times. You obviously have some calcification and evaporation, so it's going to have to be resupplied at some point.

### Land, zoning, and neighborhoods

#### 8. ★ `impacts-land-borick-zoning.mp4`
**Speaker:** Borick
**Note:** Start after "and also because". "Kind of rolled over" is Borick's own flagged wording, so keep "I'm going to use the word". This is about communities in general, not Bethlehem.

> some of the early case studies, communities got, I'm going to use the word kind of rolled over by developers. The the other municipalities have started to change their laws, their codes, to protect themselves from these types of tactics. So they've they've rewritten their zoning ordinances. They've rewritten their land use laws. They've they've hired you know folks that are specialties in these areas, so the playing fields become more even because of the the reaction going forward.

#### 9. `impacts-land-watershed-wells.mp4` (replaced the "developer pulls out" clip, 2026-11-10)
**Speaker:** Travis Pantaleo

> So if you are on well water and there's a data center going up in proximity to your property. [...] With then noise, heat, and vibration, kind of looking at folks that are distributed a little bit further away from the data center.

### Jobs, taxes, and government

#### 10. ★ `impacts-economy-borick-state-policy.mp4`
**Speaker:** Dr. Borick
**Note:** Replaced Travis Pantaleo's jobs clip, 2026-11-10. Start at "There's some government executive orders" (just after "where Pennsylvania is going to have to do"). End at "the election outcomes should be reflected", before the Obama quote. He is talking about state politics during the 2026 election season, not a Bethlehem decision.

> There's some government executive orders on this matter, but a lot of it still has to be resolved through legislative processes. And so you'll see a number of those people that that owe, in some part, their positions on data centers to their arrival in office under the microscope to say, okay, what are you doing? And so I expect there'll be much more activity on this. At the same time, you're going to have much greater lobbying and investment from AI companies also reaching out. And so that doesn't mean it's going to be dominated by one kind of perspective, but certainly the election outcomes should be reflected.

#### 11. ★ `impacts-economy-moazeni-take-our-time.mp4`
**Speaker:** Dr. Moazeni
**Note:** Replaced Travis Pantaleo's "communities embracing data centers" clip, 2026-11-10. From her closing statement. End at "skip them", before she says data centers are "going to be here, whether we like it or not" (left out on purpose, see below).

> I believe that technology is good. Actually, it can be great. It can be very beneficial to our lives as long as we don't rush into it. I believe that we shouldn't just allow data centers to take a shortcut to, you know, to be developed overnight. And similar to any other technology, that we take our time, we study them, we'll look at the regulations, we'll look at the impacts and all of those. Maybe, yeah, we can do that at a higher pace, more prioritized, but we cannot ignore them and skip them.

### Noise, air, and the environment

#### 12. ★ `impacts-environment-watershed-noise.mp4`
**Speaker:** Watershed speaker

> I think water is the primary focus, just because it's the most tangible. But you really have to be able to pay close attention to the footprint of you know, and I hate to sound repetitious, noise, vibration, and heat. You know, because folks may not necessarily think that's what they're going to feel, but it's going to be a major part of any type of data center development, and that's just the data center operation. You obviously have the physical development of it, backup generators, which are probably going to be you know relatively loud in close proximity compared compared to the data center itself.

#### 13. `impacts-environment-pearl-ecosystem.mp4`
**Speaker:** Prof. Pearl (around 15:26:22 to 15:26:44)
**Note:** Replaced Dr. Moazeni's noise clip, 2026-11-10. Start at "I think about a data center" (after "I feel similarly for both", which answers the interviewer's question). An interviewer's "Yeah" is stamped 15:26:33 and may overlap, so check the audio. End at "pushed into different areas", before the deer comment. She is speaking as a resident.

> I think about a data center and I'm literally just the first thing I'm thinking is like the water usage, the electric, the sound, the light, how even if it's not disrupting the humans, like the ecosystem, the animals in that area is now like being pushed out and pushed into different areas.

### Taken off this page

These are no longer planned for Impacts. They could still fit the Community page, labeled as personal perspectives.

| Speaker | Passage | Starts with |
|---|---|---|
| Prof. Pearl | Electric bills (around 15:23:43) | "I think the immediate thing" |
| Chris (audio only) | Local water system and grid | "The impact would be on our already struggling water system" |
| Joel Atkinson | Warehouse comparison | "It's not quite the same" |
| Prof. Pearl | Bethlehem's industrial past and jobs (around 15:21:08 to 15:21:42) | "And I was thinking about it actually" |
| Travis Pantaleo | Communities embracing data centers (replaced by Moazeni's "take our time" clip, 2026-11-10) | "But you also have to keep in mind" |
| Dr. Moazeni | Noise as a community concern; mentions ACES (replaced by Pearl's ecosystem clip, 2026-11-10) | "But noise, for example" |
| Travis Pantaleo | Questions about jobs and electric bills (replaced by Borick's state policy clip, 2026-11-10) | "And beyond that, you know, it's just really understanding" |

## Human-centered AI (`/human-centered-ai`)

Each clip goes under that section's body text.

### 15. ★ `hcai-physical-pearl-closer.mp4`
**Where:** "The physical side of AI"
**Speaker:** Prof. Pearl (around 15:22:19 to 15:22:55)

> I think when you bring the data centers close, it brings the problem closer and that's new for us because we've always had technology improving and getting better. But the environmental effects, the big issues, I feel like have been in… Other countries have been in other places, like people think data is clean because it's a computer, it's not like oil spilling everywhere, but like it still has its own problems

### 16. ★ `hcai-engagement-moazeni-same-room.mp4`
**Where:** "Engagement"
**Speaker:** Dr. Moazeni

> we should have engineers, we should have policymakers, we should have environmentalists, health system people, to all in the room, in the same room, to talk about different potential problems that we might have that could impact each other as well and how we can address them within one system so that we can see every aspect of it.

### 17. `hcai-empathy-meg-audio.mp3` (audio only)
**Where:** "Empathy"
**Speaker:** Meg
**Note:** "Have proven" is Meg's claim, not an established finding for this site.

> I think data centers in general should be paused at this point before we give us an opportunity to do more research and understand the impacts that they have on the environment. We're not even sure AI is a good thing for humans at this point, so why are we pushing to to build these buildings that have proven to put a strain on water and wildlife and the infrastructure. of our local area.

### 18. ★ `hcai-ethics-joel-who-decides.mp4`
**Where:** "Ethics"
**Speaker:** Joel Atkinson

> I think people across the country, not just in Bethlehem or the Lehigh Valley, are upset by this rapid rollout of data centers that's been decided by the richest people in our society, without democratic input from the rest of society.

### 19. `hcai-ethics-pearl-classroom.mp4`
**Where:** "Ethics"
**Speaker:** Prof. Pearl (around 15:21:57)

> this semester is the first time I'm teaching intro programming and I'm using AI, um, and I'm not requiring it, but I'm, like, having it available in, like, a very particular way, and, like, still in the back of my mind thinking, like, should I really be requiring this tool that I know, like, has these implications? Like, should I be encouraging a classroom of people to be using it all at the same time?

## Community response (`/community`)

### "In their words" quote cards (text only, no clip needed)

These replace the three placeholder cards and add a fourth. Stutters can be cleaned up on the cards.

**Card 1: Meg**

> I think that what's really exciting about this issue is that it really does unite both sides.

**Card 2: Borick**

> They bring coalitions together and and combinations that aren't always neatly fit into the way we think about things.

**Card 3: Dr. Khazaei**

> There are some benefits and there are some disadvantages. If we can find the middle ground and find the best point where these data centers could be installed, then we could benefit from their deployment as well.

**Card 4: Prof. Pearl**

> it's such a mixed bag and like I have such conflicting feelings about it

### "Interview clips" section

These replace the three `[Clip title]` tiles, in this order.

#### 20. ★ `community-leo-democratic-process.mp4`
**Title:** Who should land use answer to?
**Speaker:** Leo Atkinson

> And we think that, you know, land use needs to be a democratic process that listens to the will of people that live in the community rather than the will of the people with the most money.

#### 21. `community-burns-depends-on-scale.mp4`
**Title:** "It really depends on the scale"
**Speaker:** Julius Burns
**Note:** Keep the ending so Burns's overall position stays clear. At about 36 seconds, this is the longest clip.

> I mean, it really depends on the scale and the, like, of the data center itself and like how it's how it's using its the resources, electricity, water, just general noise pollution, stuff like that. So that would be, that's, that's gonna impact a lot of what we, of how it's going to impact us. So, I would say, generally I'm against these any centers in general, just because, just because I feel like it is a, uh, they, it is very much the move fast and break things mentality.

#### 22. ★ `community-khazaei-fears-justified.mp4`
**Title:** A researcher responds to residents' concerns
**Speaker:** Dr. Khazaei
**Note:** He is answering whether residents' fears about utilities are justified. Say so in the caption.

> Yes, I believe the place that these data centers are being installed has to be studied and investigated, because there should be flexibility in the power system to provide the amount of power that these data centers need. That's why we have seen a lot of resistance, also policy making for utilizing better policies for deploying data centers at different locations. But on the other hand, I would say grid has a huge capacity.

### "How to get involved" section

Each clip goes inside the listed item.

#### 23. ★ `involved-watershed-show-up.mp4`
**Where:** "Upcoming public meeting"
**Speaker:** Watershed speaker

> say show up to your township's public meetings. You know those individuals that are appointed to you know whether it be a board of supervisors or you know elected officials whatever you know they obviously represent the township they're the ones that are acting on behalf of that township

#### 24. `involved-chris-zoning-audio.mp3` (audio only)
**Where:** "Contact your city council"
**Speaker:** Chris

> I think everyone should do as much as possible, and you should everybody should understand what, like, the zoning ordinances actually mean. and why there are so many kind of vague answers in that document. Yeah. And I think you should vote at the state level and the local level and not just on federal elections.

#### 25. ★ `involved-borick-outcome.mp4`
**Where:** "Local group or petition"
**Speaker:** Borick

> no, it doesn't always determine the outcome. So sometimes all you voice will be used, transparency, all the things, and we'll still end up with an outcome that maybe lots of the public doesn't want. It's it, but however, that's less less likely. The more people engage, the more voice they use, the more they're engaged in the process, the likelier they are that an outcome will be aligned with their interest

## Left out on purpose

| Speaker | Passage | Why |
|---|---|---|
| Chris, Joel | Flock cameras, Palantir, "that's going to be in your neighborhood" | Unsourced claims about what a local facility would store, and they name companies |
| Burns | "Incoming bubble crash"; "not informed on purpose" | Speculation and an unsourced claim of intent |
| Chris | "Data Centers are bad"; "it's on purpose" | Conclusion with no support given; Chris declined to expand on "on purpose" |
| Leo | "Resource hogs", lower home values, "can't fish in the rivers" | Effects stated as certain, and the "overwhelming" turnout conflicts with what the team saw at the meeting |
| Meg | "Tech bros" | Loaded language |
| Khazaei | "100 gigawatts", July 22 Virginia event, "six months" and "billions of books" | Unverified technical claims |
| Khazaei | "These data centers come with a microgrid" | General claim that may not apply to the local proposal |
| Moazeni | "Going to be here, whether we like it or not" | Frames development as inevitable (fine in the full interview, not as a standalone clip) |
| Borick | "We can't fight Meta... Oh yeah, you could" | Reads as advocacy on a site meant to inform |
| Watershed speaker | Delaware River Basin and Pennsylvania rankings | Speaker was unsure ("I think"), so check and cite them in text instead |
| Student interviewers | 160,000 sq ft, 1,000 ft from homes, 7–0 vote | Not interview evidence, and they need a planning record |

## Voices missing from the interviews

There is no developer, local official, business owner, farmer, or local supporter of the proposal. The Community page's placeholder cards for a "local business owner" and an "industry or city representative" can't be filled from these transcripts. Say on the page who is missing rather than implying these voices are represented.

The Community intro should also say that the meeting interviews came from people who attended a single meeting, and that three of the five are Lehigh Valley DSA leaders.
