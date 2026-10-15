// Everything on the site, written from Brandon's own answers (see
// INTERVIEW-NOTES.md). Text in [square brackets] is a placeholder still to be
// filled in; the UI renders it as a visible dashed mark.

export type Kind = "Building" | "Working" | "Community";

export type Link = { label: string; href: string };

export type Story = {
  slug: string;
  title: string;
  kind: Kind;
  role: string;
  when: string;
  year: string; // short label for the list
  where: string;
  oneLiner: string;
  context?: string[];
  problem: string[];
  problemTitle?: string;
  did: string[];
  withWhom: { name: string; part: string }[];
  learned: string[];
  stack?: string[];
  links?: Link[];
  note?: string;
};

export const person = {
  name: "Brandon Mok",
  role: "AI Product Management Intern at GovTech",
  intro: [
    "I like to take ownership of projects that I find meaningful, especially when I get to see their direct impact. I also enjoy working and collaborating with people, because that is when I learn the most.",
    "I am passionate about using AI in safe and productive ways, and I would love to empower more people to use it.",
  ],
  facts: ["NUS Business Analytics ’27", "NUS Merit Scholar", "Based in Singapore"],
  email: "bmok.bmok@gmail.com",
  linkedin: "https://www.linkedin.com/in/brandon-mok",
  github: "https://github.com/bmok02",
  resume: "/Brandon-Mok-Resume.pdf",
};

export const stories: Story[] = [
  {
    slug: "govtech",
    title: "GovTech",
    kind: "Working",
    role: "AI Product Management Intern, AI & Digital Governance",
    when: "Aug 2026 – now",
    year: "2026",
    where: "Singapore",
    oneLiner: "Helping public officers adopt AI safely in their workflows, one step above vibe coding, into agents and skills.",
    problem: [
      "Our aim is to help public officers feel empowered to adopt AI safely in their workflows, by taking them one step above vibe coding and into agents and skills.",
      "The initial plan was to share information through an EDM and a simple form. There was no single platform for the programme, so I built one.",
    ],
    did: [
      "Set up an internal-facing microsite to share all the programme information in one place.",
      "Connected it to a database so that sign-ups and form inputs are stored securely.",
      "Built an admin view to track sign-ups and waitlisted participants, with a function to export to Excel.",
      "Took it through audit checks so that it could launch in production.",
      "Worked with a UI/UX designer to set up the website, using Claude Code, GitLab and the data lakehouse.",
    ],
    withWhom: [
      { name: "My team in AI & Digital Governance", part: "who I work on the programme with" },
      { name: "A UI/UX designer", part: "who set up the website with me" },
    ],
    learned: [
      "It is actually very easy to launch a product, but you need a strong CI/CD mindset. Compliance is an upstream thing, so good development practices need to be built in throughout, especially at the start.",
      "You also need to be okay with change and stay adaptable, because programmes shift. AI transformation really depends on behaviour and receptiveness, so you need to hear your audience.",
    ],
    stack: ["Claude Code", "GitLab", "Data lakehouse"],
    note: "As this is public-sector work, I have kept the details high-level.",
  },
  {
    slug: "synapxe",
    title: "Synapxe",
    kind: "Working",
    role: "Systems Analyst Intern, HEALIX",
    when: "Jan – Jul 2026",
    year: "2026",
    where: "Singapore",
    oneLiner: "Tracking how each healthcare entity uses HEALIX, with an ETL pipeline and live dashboards.",
    context: [
      "HEALIX is a cloud-based platform shared across Singapore's healthcare sector. Entities used to run their data and analytics projects on different platforms. Now they can use HEALIX to store data in a lakehouse and run analytics projects, which removes costs when healthcare functions collaborate.",
    ],
    problem: [
      "With everyone on the same platform, we needed to track how much of the service each entity uses. This gives a high-level view, and lets each entity see what it has used, so that costing is transparent.",
    ],
    did: [
      "Built an end-to-end ETL pipeline from AWS S3 to Databricks and Tableau.",
      "Ran check-ins with the other interns to keep track of updates.",
      "Worked with the Tableau and Databricks SMEs on account provisioning, and with the business functions.",
      "Took the initiative to understand the services, so that I could make informed decisions on which ones to use for the pipeline.",
      "Made sense of messy data that was all dumped in S3. This took a lot of time and questions, and feature engineering was needed.",
    ],
    withWhom: [
      { name: "Lynette Tan and Bernice Chua", part: "fellow interns on the project" },
      { name: "Jyothsna Maheshwari", part: "for her guidance, and for trusting me to lead the project" },
    ],
    learned: [
      "I picked up technical skills in data engineering and data visualisation. Building the full pipeline made me appreciate how data flows.",
      "I also learned the importance of data security. There was a lot of waiting for access and clearance, but we need to respect the security of the company.",
    ],
    stack: ["AWS S3", "Databricks", "Tableau", "AWS IAM"],
  },
  {
    slug: "aquarii-bd",
    title: "Aquarii BD",
    kind: "Working",
    role: "Business Strategy & Development Intern",
    when: "May – Jul 2025",
    year: "2025",
    where: "Phnom Penh, Cambodia",
    oneLiner: "Business networking, a meeting at the Ministry of Education, and building an ESG programme for SMEs in Cambodia.",
    problem: [
      "Aquarii BD works with people across government, business and the development space on the growth and future of Cambodia.",
    ],
    did: [
      "Met venture capitalists at the Plug and Play Cambodia launch, as well as tech start-up CEOs, and learned about their business ideas, growth and hopes.",
      "Connected with speakers who are professionals in their fields, for possible partnerships in the future.",
      "Attended a meeting at the Ministry of Education, Youth and Sports with H.E. Dr. Om Romny and H.E. Dr. Seng Sopheap on the role of AI in education.",
      "Worked on the whole programme for ACT+, by Aquarii, Khmer Enterprise and SNV, to help SMEs adopt ESG: the whys, the hows and the whats. I was a strong voice on why the programme mattered, and designed the requisites for partnerships, including who we wanted as first movers and participants, and what was non-negotiable or good to have.",
      "Turned Connecting Dots from a static publication into an always-updated webpage.",
    ],
    withWhom: [
      { name: "Michael Tan", part: "CEO, for showing me what it means to lead with values" },
      { name: "Sovannaroth Leap", part: "for her patience, warmth and trust" },
    ],
    learned: [
      "I learned how much connections matter, because you never know who can help you in the next phase of your career.",
      "The Singapore dream is to study hard, work for a big company and climb the corporate ladder. Cambodia showed me life beyond that, and that you need resilience to start something you dream of.",
      "It also taught me to slow down and appreciate the good things in life. I met so many kind and humble Cambodians who treated me so kindly during my stay, and they changed my outlook on life. I believe they have strong potential despite unfortunate circumstances and negative press, and I hope they get the attention they deserve.",
    ],
  },
  {
    slug: "tea-companion",
    title: "The Tea Companion",
    kind: "Building",
    role: "Builder, in a team of five",
    when: "Aug 2026 – ongoing",
    year: "2026",
    where: "Singapore",
    oneLiner: "A step-by-step tea brewing guide with an AI voice, built with Tea Chapter for a heritage business challenge.",
    context: [
      "We built this for a heritage business challenge by SHHK. We reached out to a few heritage businesses and ended up with Tea Chapter because our values aligned: tea as a mindfulness experience, not just drinking tea.",
    ],
    problem: [
      "Our first iteration was very different. We wanted a chatbot, but realised that users first of all did not even know how to make the tea. It was all very daunting.",
    ],
    did: [
      "Switched to a manual, step-by-step guide with visual instructions.",
      "Added an AI voice, and learned to use web APIs to do it.",
      "Tested it with Fund Lee, the CEO of Tea Chapter, and with our friends and family.",
      "The competition is still ongoing, so we are still improving it. User experience is still the hardest part.",
    ],
    withWhom: [
      { name: "Ron, Bryant, Junyi and Yu Ning", part: "my teammates" },
      { name: "Fund Lee", part: "CEO of Tea Chapter, who tested it with us" },
    ],
    learned: [
      "It is very easy to go overboard with AI. You can keep prompting and prompting, but the best source of knowledge is still the users.",
    ],
    stack: ["Next.js", "Claude API", "ElevenLabs", "Web Audio API", "Vercel"],
    links: [
      { label: "Try it", href: "https://tea-companion-ai.vercel.app/" },
      { label: "Code", href: "https://github.com/bmok02/tea-companion-ai" },
    ],
  },
  {
    slug: "food-reccos",
    title: "Food Reccos",
    kind: "Building",
    role: "Builder",
    when: "Aug – Oct 2026",
    year: "2026",
    where: "Singapore",
    oneLiner: "A Telegram bot for my partner and me, for when we cannot decide what to eat. Almost 300 places and counting.",
    problem: [
      "We could never decide what to eat. We had a list of food places saved on Google Maps, but it was not intuitive to search through.",
    ],
    did: [
      "Built a Telegram bot connected to a Supabase database. Claude sorts each place by cuisine, price, tags and area, and the bot can find places near you.",
      "Every time we come across a food recommendation online, we add it to the bot. We now have almost 300 places, and we are still counting.",
    ],
    withWhom: [{ name: "My partner", part: "who uses it with me" }],
    learned: ["It is just a simple project to solve a simple problem. That is what building and developing is all about."],
    stack: ["TypeScript", "Telegram Bot API", "Claude Haiku", "Supabase", "PostGIS", "Google Places", "Vercel"],
  },
  {
    slug: "turtletrackr",
    title: "TurtleTrackr",
    kind: "Building",
    role: "Full-stack developer, sprint lead",
    when: "Jan – May 2025",
    year: "2025",
    where: "NUS",
    oneLiner: "A social personal finance web app: slow, steady and financially ready.",
    context: ["A project for a full-stack development module at NUS, covering both the front end and the database."],
    problem: [
      "Budgeting can feel isolating or stressful. We wanted to help young adults build better money habits in a way that is simple, social and a little bit fun.",
    ],
    did: [
      "Set up the back end with Firebase.",
      "Built front-end features such as the transaction logs.",
      "Led sprint planning for the team.",
    ],
    withWhom: [{ name: "Brandon Aw, Brian Lim, Martha Yeo, Wenjie Jiang, Zhuoxuan Chen", part: "my teammates" }],
    learned: [
      "Leading sprints gave me first-hand experience in SCRUM.",
      "This was before the age of Claude Code, but it gave me a good overview of full-stack development. Now when I use Claude Code, at least I know how it works.",
    ],
    stack: ["Vue 3", "Pinia", "Firebase"],
    links: [{ label: "Try it", href: "https://turtletrackr.web.app/" }],
  },
  {
    slug: "nusdevs",
    title: "NUSDevs",
    kind: "Building",
    role: "UI/UX Designer, Developer Group @ NUS Computing",
    when: "Nov 2024 – Jul 2025",
    year: "2025",
    where: "NUS, remote",
    oneLiner: "Designing a platform for NUS developers to find teammates for their side projects.",
    problem: [
      "Some people have ideas but no team, or are missing members or roles. Others have skills and are looking to be part of projects they find interesting.",
    ],
    did: [
      "Designed the end-to-end user journey for project discovery and collaboration, with a mobile-first approach.",
      "Built wireframes and prototypes in Figma.",
      "Worked closely with developers to align the design with functionality.",
    ],
    withWhom: [{ name: "The NUSDevs team", part: "the developers I designed with" }],
    learned: [
      "Working with developers, we need to be very clear about our design, because we are in charge of the front end.",
      "The platform did not launch in the end, but it was a good experience. It was my first glance into UI/UX design in the development space, and where I learned my Figma skills.",
    ],
    stack: ["Figma"],
  },
  {
    slug: "movie-recommender",
    title: "Movie recommender",
    kind: "Building",
    role: "Machine learning module project",
    when: "Jan – Apr 2025",
    year: "2025",
    where: "NUS",
    oneLiner: "Building and comparing machine learning models for personalised movie recommendations.",
    problem: ["For a machine learning module at NUS, we built and compared different models to recommend movies to users."],
    did: [
      "Built the collaborative filtering models.",
      "Compared them with my teammates' content-based, neural collaborative filtering and LSTM models.",
    ],
    withWhom: [{ name: "Ee Sean and Hong Quan", part: "my teammates" }],
    learned: [
      "Neural CF performed best, but every model has its constraints. My biggest takeaway is that there are always new fields to consider.",
      "Overall, it was a great insight into machine learning. I now appreciate the elegance of AI, and the mathematics and logic behind how models are created. I am also clearer about what I can rely on AI for. Ultimately, it is a prediction.",
    ],
    stack: ["Python", "scikit-learn", "SBERT", "pandas"],
    links: [{ label: "Code", href: "https://github.com/bmok02/movies-recommendation-system" }],
  },
  {
    slug: "aquarii-website",
    title: "Aquarii BD website",
    kind: "Building",
    role: "UI/UX designer",
    when: "Summer 2025",
    year: "2025",
    where: "Phnom Penh, Cambodia",
    oneLiner: "Turning a cluttered company website into a simple home for visitors and bite-sized news.",
    problem: [
      "The previous site was too cluttered with information and had a lot of plug-ins from other sources. The CEO felt that the company already had an established presence, and now just wanted a simple interface for people to visit. It also needed to be a platform for Connecting Dots, with bite-sized news.",
    ],
    did: [
      "Led the UI/UX design and content restructuring.",
      "Worked with the developers at Thrive Business Asia to build it.",
    ],
    withWhom: [{ name: "Thrive Business Asia", part: "the developers who built it" }],
    learned: ["It put my technical communication skills to the test."],
    stack: ["Figma"],
    links: [{ label: "Visit site", href: "https://aquariibd.com/" }],
  },
  {
    slug: "cu-boulder",
    title: "CU Boulder exchange",
    kind: "Community",
    role: "Exchange student, Leeds School of Business",
    when: "Aug – Dec 2025",
    year: "2025",
    where: "Boulder, Colorado, USA",
    problemTitle: "Why I went",
    oneLiner: "A semester on the opposite side of the world, where I learned to seize every moment and just say yes.",
    problem: [
      "Ever since I started at NUS, a student exchange was on my bucket list. I have always loved the challenge of a new environment, so I chose the University of Colorado Boulder. It was quite literally the opposite side of the world for me.",
    ],
    did: [
      "Took the Enterprise Applications class, where we learned SAP S/4HANA through more than 10 simulations. Our final exam was a simulation game, and my team took 1st place.",
      "Met Aaron Graber, VP at SAP, who walked us through SAP Analytics Cloud and the role of new AI tools in enterprise tech, and presented our team's strategy to him.",
      "Put my shame aside and tried things I never would have back home: I joined a hip-hop dance crew, took an African dance class, and explored subjects like astronomy and sociology.",
      "Made friends with locals and fellow international students, who welcomed me into their conversations and social gatherings.",
    ],
    withWhom: [
      { name: "Owen Parker and Nico Alaniz", part: "my team for the SAP simulation" },
      { name: "Dr. David A. Lacek", part: "who taught Enterprise Applications" },
    ],
    learned: [
      "This programme was a lesson in community. Despite coming from a completely different culture, I met friends who instantly welcomed me, and it made me realise how much more there is to see beyond Singapore.",
      "It also changed how I see education. It is not just about checking off course requirements to graduate, but about expanding your interests and actually enjoying the process of learning.",
      "Most importantly, Boulder taught me to live in the moment and seize opportunities as they come, rather than waiting for the right time. The best parts of life happen when you stop overthinking and just say yes.",
    ],
    stack: ["SAP S/4HANA", "SAP Analytics Cloud"],
  },
  {
    slug: "capt-kamal",
    title: "CAPT Kamal",
    kind: "Community",
    role: "Youth Mentor & Programmes Member",
    when: "Year-long; Bangalore, summer 2024",
    year: "2024",
    where: "Bangalore, India",
    oneLiner: "A year of planning, then two weeks in Bangalore teaching secondary school students with Dream School Foundation.",
    problem: [
      "This was a year-long programme where we planned a trip to Bangalore, India. We came up with a syllabus and taught values and academics to junior and senior secondary school students, working with Dream School Foundation (DSF). The trip itself was two weeks long.",
    ],
    did: [
      "Was in charge of the syllabus.",
      "Led planning for my own family group, making sure everyone was on task and that proposals were sent in, and presented to our own committee.",
      "Taught English, Math, career decisions, and mental health, including dealing with emotions.",
    ],
    withWhom: [
      { name: "The CAPT Kamal team", part: "fellow mentors and programme members" },
      { name: "Dream School Foundation", part: "our partner in Bangalore" },
    ],
    learned: [
      "It was difficult to manage so many kids who were so high in energy.",
      "What stayed with me was their enthusiasm. In my experience, kids in Singapore can be a bit more apathetic, but these kids were so passionate to learn and eager to answer questions. We prepared reflection questions for them, and as I went around to facilitate, I could tell they had really internalised our teachings.",
    ],
  },
  {
    slug: "captslam",
    title: "CAPTSLAM Townsquare",
    kind: "Community",
    role: "Youth Mentor",
    when: "Half-year programme, ending Jan 2024",
    year: "2024",
    where: "Singapore & Chiang Mai, Thailand",
    oneLiner: "Mentoring at-risk youth every week, then a student-led trip to Chiang Mai for a cultural exchange.",
    problem: [
      "This was a half-year mentorship programme where we mentored at-risk youth once a week. We taught values and skills like teamwork, communication and managing emotions. The youths in Singapore were Secondary 2 students.",
    ],
    did: [
      "As it is a student-led programme, each mentor took turns to plan the week's activities. We centred them around the values we wanted the kids to learn, made them interactive and fun, and added a reflective element.",
      "We ran the activities, drove the reflections and built relationships with the youths.",
      "At the end of the programme, the mentors went on a student-led trip to Chiang Mai in January 2024 for a cultural exchange with Ban Pa Mueat School. I planned the cultural exchange segment, where we played classic Singaporean games like five stones and zero point.",
    ],
    withWhom: [{ name: "The CAPTSLAM mentors", part: "who planned and ran it together" }],
    learned: [
      "We were only in Chiang Mai for three days, but we managed to build a strong bond with the kids, even with the language barrier. They did not have much, but they had so much love to give us. It was a tearful goodbye.",
      "I think mentoring is less about what you do and more about your posture. We are not supposed to put ourselves on a pedestal to help them. It is really about building a relationship and learning from one another. I am also there to provide understanding and guidance about decisions I have once made. It really comes from the heart.",
    ],
  },
];

export const quote = {
  text: "Willing to learn and step out of his comfort zone, often contributing thoughtful ideas to our discussions and projects.",
  by: "Michael Tan",
  role: "CEO, Aquarii BD",
};

export type Place = { city: string; country: string; when: string; line: string };

export const places: Place[] = [
  { city: "Boulder", country: "Colorado, USA", when: "Aug – Dec 2025", line: "Exchange at CU Boulder's Leeds School of Business. We took 1st place in the SAP simulation final, I joined a hip-hop dance crew, and I learned to seize opportunities and just say yes." },
  { city: "Phnom Penh", country: "Cambodia", when: "2025, and again in 2026", line: "Where I learned how much connections matter. I went back in 2026 to review the progress of the projects I worked on." },
  { city: "Bangalore", country: "India", when: "Summer 2024", line: "Two weeks teaching with Dream School Foundation. The kids were so eager to learn and to answer questions." },
  { city: "Chiang Mai", country: "Thailand", when: "Jan 2024", line: "Three days of cultural exchange at Ban Pa Mueat School. We played five stones and zero point, and it was a tearful goodbye." },
  { city: "Singapore", country: "Home", when: "Always", line: "NUS, the youths I mentored, and every project on this page." },
];

export const kinds: { kind: Kind; title: string }[] = [
  { kind: "Working", title: "Working" },
  { kind: "Building", title: "Building" },
  { kind: "Community", title: "Community" },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}
