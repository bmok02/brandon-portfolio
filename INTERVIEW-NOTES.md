# Interview notes (for site copy)

## Scope decisions
- Signs (11): Tea Companion, Food Reccos, TurtleTrackr, NUSDevs (Developer Group @ NUS Computing), Aquarii website, Movie recommender (ML), GovTech, Synapxe, Aquarii BD, CAPTSLAM Townsquare (+ Chiang Mai), CAPT Kamal (Bangalore, DSF).
- Removed: Taipei. Not added: PSA CodeSprint, LeafyList, Homage.
- Aquarii BD internship: emphasise business networking + meetings with government officials; website is its own sign.
- Tone: professional capability, human voice; ownership of meaningful projects with direct impact; learns most collaborating.

## GovTech — AI Product Management Intern, AI & Digital Governance (Aug 2026 – now)
- Purpose: help public officers adopt AI safely in their workflows — one step above vibe coding, into agents and skills.
- Owned: internal-facing microsite. Original plan was just EDM publicity + a simple form; Brandon proposed one platform for all programme info.
  - Sign-ups and form inputs stored securely in a database; admin view to track sign-ups and waitlisted participants, with export to Excel.
  - Went through audit checks to launch in production.
  - Worked with a UI/UX designer; built with Claude Code, GitLab, data lakehouse.
- Learned: launching a product is easier than expected with a strong CI/CD mindset; compliance is upstream — build good dev practice in from the start; be adaptable because programmes shift; AI transformation depends on behaviour and receptiveness, so listen to the audience.

## Synapxe — Systems Analyst Intern, HEALIX (Jan – Jul 2026)
- HEALIX: shared cloud platform (PaaS) for Singapore's healthcare sector. Entities used to run data/analytics on separate platforms; now one lakehouse + analytics (SageMaker, AWS services, Tableau), cutting cost when healthcare functions collaborate.
- Problem: track usage per entity — a high-level view, plus each entity sees what it used; transparent costing.
- Built: ETL S3 → Databricks → Tableau; live usage dashboards replaced month-end manual reporting.
- Leading: ran intern check-ins; worked with SMEs (Tableau, Databricks account provisioning) and functions; took initiative to understand the services and decide which to use for the pipeline.
- Hard parts: messy data all dumped in S3 — lots of questions + feature engineering to make sense of it; long waits on access/account provisioning and clearance.
- Team: Lynette Tan, Bernice Chua (intern teammates); mentor Jyothsna Maheshwari.
- Learned: data engineering + visualisation, end-to-end pipeline, appreciation of data flow; data security matters — waiting is part of respecting it.

## Aquarii BD — Business Strategy & Development Intern, Phnom Penh (May – Jul 2025)
- Government: MoEYS meeting with H.E. Dr. Om Romny (Secretary of State) and H.E. Dr. Seng Sopheap (President, NIPTICT + CADT) on AI in education. Takeaway: teachers move from information feeders to critical-thinking facilitators; AI adoption starts with teacher training. (Q1 on other meetings / role unanswered — keep to MoEYS.)
- Networking: met venture capitalists (via the Plug and Play Cambodia launch) and tech start-up CEOs — learned their ideas, growth and hopes; connected with speakers for possible future partnerships. Learned how much connections matter — you never know who helps with the next phase.
- ACT+ (Aquarii + Khmer Enterprise + SNV, ESG for SMEs): built the whole programme architecture — the whys, hows and whats; a strong voice for why it matters; designed partnership requisites (who should be first movers/participants; non-negotiables vs good-to-haves).
- Connecting Dots: static publication → always-updated webpage on Cambodia's investment landscape.
- Mentors: Michael Tan, Sovannaroth Leap. Went back June 2026 to review progress + discuss future collaboration.
- Reflection: the "Singapore bubble" = study hard, big company, climb the ladder. Cambodia showed life beyond that: connections matter, and starting something you dream of takes resilience. Also: slow down and appreciate the good; kind, humble Cambodians changed his outlook; strong potential held back by circumstances and negative press — hopes they get the attention they deserve.
- Q5 (sensitive) unanswered → leave out border tensions.

## CAPTSLAM Townsquare — youth mentor (half-year programme, ending Jan 2024)
- Student-led: mentors take turns planning each week's session around a value we want the kids to learn — interactive and fun, with a reflective element. Mentors run the session, drive reflections, build relationships.
- Youths in Singapore: Sec 2 students.
- Chiang Mai trip, Jan 2024 (3 days): cultural exchange at a school (kids from primary to secondary). Brandon planned the cultural-exchange segment — classic Singaporean games like five stones and zero point.
- School name: likely "Ban Pa Mueat School" (โรงเรียนบ้านป่าเมือด) — NOT yet confirmed by Brandon; don't print until confirmed.
- Moment: only 3 days, but built a strong bond with the Chiang Mai kids despite the language barrier; "they don't have much but had so much love to give"; tearful goodbye.
- Learned: mentoring is a posture, not a pedestal — build a relationship, learn from each other; offer understanding and guidance from decisions I once made; it comes from the heart.

## CAPT Kamal — Youth Mentor & Programmes Member (year-long; Bangalore trip summer 2024, 2 weeks, Dream School Foundation)
- Owned: the syllabus; led planning for his own family group — kept everyone on task, got proposals in, presented to the internal committee.
- Taught: English, maths, career decisions, and mental health (dealing with emotions).
- Hard: managing many very high-energy kids.
- Partner: DSF only.
- Moment: the kids' enthusiasm — so eager to learn and answer, compared with a more apathetic feel he'd seen in Singapore; facilitating the reflection questions, he could tell they'd really internalised the lessons.
- Q6 (Kamal vs CAPTSLAM lesson) unanswered.

## NUSDevs (Developer Group @ NUS Computing) — UI/UX Designer (Nov 2024 – Jul 2025)
- Problem (two-sided): people with ideas but no team, or missing members/roles; people with skills looking to join projects they find interesting.
- Built: mobile-first end-to-end journey for project discovery + collaboration; Figma wireframes/prototypes with auto layout and components.
- Working with devs: design has to be very clear — designers own the front end experience.
- Outcome: not launched in the end. Keep honest.
- Learned: first real look at UI/UX inside a dev team; where he learned Figma properly.

## TurtleTrackr (Jan – May 2025) — NUS module project (full-stack development), NOT Orbital
- Built: set up the Firebase back end; front end for features like transaction logs. Led sprint planning (SCRUM).
- Team (credit by name): Brandon Aw, Brian Lim, Martha Yeo, Wenjie Jiang, Zhuoxuan Chen. Live: https://turtletrackr.web.app/
- Stack: Vue 3, Pinia, Firebase (Firestore + Auth + Hosting).
- Learned: first-hand SCRUM; built before the Claude Code era, so it gave a real grounding in full-stack — now when he builds with Claude Code he understands how it works underneath.

## Movie recommender (Jan – Apr 2025) — NUS machine learning module, with Ee Sean and Hong Quan
- Built: the collaborative filtering models (user-based, item-based, hybrid CF).
- Result: neural CF performed best — but every approach has constraints; there are always new factors to consider.
- Learned: the elegance of AI and the maths/logic behind how models are built; clearer about what you can rely on AI for — ultimately it is a prediction.
- Repo: https://github.com/bmok02/movies-recommendation-system

## The Tea Companion (Aug 2026 – ongoing) — SHHK "Reimagine Culture" challenge (exact name unverified online; confirm)
- Context: competition entry; Tea Chapter was one of the participating heritage businesses. The team reached out to several and chose Tea Chapter for alignment of values — a mindfulness experience, not just drinking tea.
- Testing: Fund Lee (Tea Chapter CEO), plus friends and family.
- Still ongoing, still improving.
- Hardest: user experience. v1 was a chatbot — but users didn't even know how to make the tea; it was daunting. Pivoted to a manual step-by-step ritual with visual instructions, then added AI voice (learned Web APIs).
- Learned: very easy to go overboard with AI and keep prompting — the best source of knowledge is still the users.
- Open: who is "we" (team members to credit)?

## Food Reccos bot (Aug – Oct 2026)
- For: Brandon and his partner, when they can't decide what to eat.
- Before: a list saved in Google Maps — not intuitive to search.
- Use: every food rec they come across online gets added; almost 300 places and counting (Supabase).
- Learned: a simple project for a simple problem — that's what building is about.
- (Tea Companion follow-ups — team names, exact challenge name — still unanswered.)

## Aquarii BD website revamp (summer 2025)
- Live: https://aquariibd.com/
- Problem: old site was cluttered with information and third-party plug-ins. CEO's call: the company already has an established presence — visitors need a simple interface; also a home for Connecting Dots (bite-sized news).
- Worked with developers (Thrive Business Asia) — put technical communication skills to the test.

## Tea Companion follow-up
- Team: Ron, Bryant, Junyi, Yu Ning (+ Brandon). Exact challenge name still unconfirmed.

## Summit register (approved draft)
- Singapore — home: NUS, the youths I mentored, every project on this page.
- Chiang Mai, Thailand — Jan 2024: 3-day CAPTSLAM cultural exchange at Ban Pa Mueat School (confirmed); five stones, zero point, tearful goodbye.
- Bangalore, India — summer 2024: 2 weeks teaching with Dream School Foundation; kids eager to answer.
- Phnom Penh, Cambodia — 2025, again 2026: people and connections matter; came back to see the work grow.
- Boulder, Colorado — Aug–Dec 2025 (confirmed): exchange at CU Boulder Leeds; 1st place SAP sim; hip-hop crew; learning to say yes; the reason the site is the Flatirons.
- Tea Companion challenge: describe as "a heritage-business innovation challenge by SHHK" (user approved fallback).

## Intro / trailhead voice (approved, with edit)
- "I take ownership of projects I care about, especially the ones where I get to see the impact up close. I do my best work, and my best learning, with other people."
- ADD: passion for using AI in safe and productive ways, and empowering people to use it.
- Facts line: AI Product Manager Intern, GovTech · NUS Business Analytics '27 · NUS Merit Scholar (yes, include) · Based in Singapore.
- No separate "how I like to work" line near contact.

## Design steer (Oct 15 2026)
- Drop the Flatirons trail. Next design: more professional, with a tinge of creativity. Run through /impeccable again.

## Sources for copy not in the answers above (from Brandon's LinkedIn, read Oct 2026)
- Aquarii website: "being entrusted to lead the UI/UX design"; "UI/UX design and content restructuring".
- Synapxe: "trusting me to lead this project with my fellow intern buddies"; thanks Jyothsna Maheshwari "for your guidance".
- Aquarii BD: professionals "across government, business, and the development space… the growth and future of Cambodia"; Michael Tan "showing me what it means to lead with values"; Sovannaroth Leap "endless patience, warmth, and for trusting me".
- TurtleTrackr: "budgeting can feel isolating or stressful".
- NUSDevs: Remote. Movie recommender: SBERT, NCF, LSTM; Python, scikit-learn, SBERT, pandas.
- Food Reccos duplicate detection: repo README.
- GovTech title on LinkedIn: "AI Product Management Intern".
- From Brandon's chat answers (Oct 2026, verbatim gist): CAPT Kamal "taught them values and also academics to junior and seniors (in sec school)"; CAPTSLAM "taught values and skills like teamwork, communication and managing emotions"; CAPT Kamal "as I went around to facilitate — could tell they really internalised our teachings".
- Dream School Foundation mission line paraphrases DSF's public description ("quality education… for every child"), dsfindia.org / weltwaerts.de partner profile.
- GovTech: the UI/UX designer collaboration is from his answer ("worked with UIUX designer to set up the website").

## CU Boulder exchange (Aug – Dec 2025), added under Community at Brandon's request
- Source: Brandon's LinkedIn posts (Jan 8 2026 exchange reflection; Dec 15 2025 SAP simulation post).
- Bucket-list exchange, "opposite side of the world"; Enterprise Applications (SAP S/4HANA, 10+ sims, final exam a simulation, 1st place with Owen Parker and Nico Alaniz; Dr. David A. Lacek); met Aaron Graber (VP, SAP) — SAP Analytics Cloud, AI in enterprise tech; hip-hop dance crew, African dance class, astronomy and sociology; welcomed by locals and internationals.
- Learned: a lesson in community; education is about expanding interests and enjoying learning; live in the moment, seize opportunities, stop overthinking and just say yes.
