import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sanuja Tharinda",
  initials: "ST",
  url: "https://google.com",
  location: "Ambalangoda, Sri Lanka",
  locationLink: "https://google.com",
  description:
    "Software Engineer with a passion for building impactful solutions and helping others along the way. Driven to solve real-world challenges and constantly learning.",
  summary:
    `I am currently working as a software engineer. In 2023, I successfully earned a second upper-class degree
    in Computer Science and Engineering. My primary passions lie in software development and machine
    learning, and I firmly believe in their potential to address diverse real-world challenges. Ultimately, My
    objective is to pursue a career that provides opportunities to contribute meaningfully to these fields.`,
  avatarUrl: "/me.png",
  skills: [
    {
      slug: "springboot",
      name: "Spring Boot"
    },
    {
      slug: "react",
      name: "React"
    },
    {
      slug: "dotnet",
      name: ".NET Core"
    },
    {
      slug: "angular",
      name: "Angular"
    },
    {
      slug: "nextdotjs",
      name: "Next.js"
    },
    {
      slug: "javascript",
      name: "Javascript"
    },
    {
      slug: "typescript",
      name: "Typescript"
    },
    {
      slug: "java",
      name: "Java"
    },
    {
      slug: "csharp",
      name: "C#"
    },
    {
      slug: "git",
      name: "Git"
    },
    {
      slug: "nodedotjs",
      name: "Node.js"
    },
    {
      slug: "express",
      name: "Express.js"
    },
    {
      slug: "python",
      name: "Python"
    },
    {
      slug: "postgresql",
      name: "PostgreSQL"
    },
    {
      slug: "mysql",
      name: "MySQL"
    },
    {
      slug: "sqlserver",
      name: "SQL Server"
    },
    {
      slug: "firebase",
      name: "Firebase"
    },
    {
      slug: "aws",
      name: "AWS"
    },
    {
      slug: "azure",
      name: "Azure"
    },
    {
      slug: "docker",
      name: "Docker"
    },
    {
      slug: "kubernetes",
      name: "Kubernetes"
    },
    {
      slug: "keras",
      name: "Keras"
    },
    {
      slug: "tensorflow",
      name: "Tensorflow"
    },
    {
      slug: "pytorch",
      name: "PyTorch"
    }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" }
  ],
  contact: {
    email: "sanuja.18@cse.mrt.ac.lk",
    tel: "+94712111663",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SanujaTharinda",
        icon: Icons.github,
        navbar: true
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sanujatharinda",
        icon: Icons.linkedin,
        navbar: true
      },
      // XX: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false
      },
    },
  },

  work: [
    {
      company: "IronOne Technologies",
      href: "https://www.irononetech.com",
      badges: [],
      location: "DHPL, 11th, 42 Nawam Mawatha, 00200",
      title: "Software Engineer",
      logoUrl: "/ironone.jpg",
      start: "Aug 2023",
      end: "Present",
      description:
        'As a key contributor to the Back-End team in an agile environment, I implemented and managed innovative features for BoardPac, including the development of “AI Minutes” to automatically generate meeting minutes from transcripts, and a Quorum feature that set voting thresholds. I tracked AI feature usage with an email notification system, designed the “Email History Report” for system email tracking, and integrated Google Analytics across the platform. In addition, I proactively addressed VAPT issues to ensure OWASP compliance by improving input validation and securing emails against harvesting and spam. I also developed "AI Corner," a web-based AI chat tool enabling users to interact with large language models over custom data, reflecting my commitment to R&D and secure, scalable solutions. Throughout these projects, I adhered to DevOps principles, engaging in every phase of the software lifecycle, and utilized technologies like .NET Core, Angular, and Microsoft SQL Server to drive impactful results.'
    },
    {
      company: "LSEG Technology",
      badges: [],
      href: "https://www.lseg.com/",
      location: "01 Millennium Dr, Malabe",
      title: "Software Engineer Intern",
      logoUrl: "/lseg.jpg",
      start: "Dec 2021",
      end: "Jun 2022",
      description:
        "In the LSEG FX Exchange team, I developed a market data replay tool that enabled seamless conversion and replay of market data between two exchange systems. I took ownership of the end-to-end process, from gathering and specifying requirements to designing, implementing, testing, and documenting each project phase. This involved working extensively with Python and C++ to ensure high performance and accuracy in data processing, meeting rigorous quality standards. My work contributed to enhancing data interoperability and reliability within the exchange system, streamlining FX data handling and enhancing team efficiency."
    },
    {
      company: "HashBaze",
      href: "",
      badges: [],
      location: "Remote",
      title: "Part time Software Developer",
      logoUrl: "/hashbaze.jpg",
      start: "Mar 2021",
      end: "Nov 2021",
      description:
        "At HashBaze, I developed the Beecon Platform, a business strategy execution application designed for managing strategies, initiatives, efforts, and activities while tracking progress. Leveraging React, Redux, and Firebase, I contributed to both the backend and frontend, creating a seamless user experience that supported organizations in effectively executing and monitoring their strategic goals."
    }
  ],
  research: [
    {
      company: "University of Moratuwa",
      badges: [],
      href: "https://uom.lk",
      location: "Bandaranayake Mawatha, Moratuwa 10400",
      title: "Undergraduate Research Student",
      logoUrl: "/mora.jpg",
      start: "Jun 2022",
      end: "Jun 2023",
      description:
        'In a group project titled "Enhancing Behavioural Biometrics with IMU Data," we developed an innovative continuous authentication system using advanced keystroke dynamics for improved security. We evaluated state-of-the-art continuous authentication methods and introduced the Spatio-Temporal Dual Attention Transformer (STDAT), a novel transformer model that became the core of BehaveFormer, our multi-modal architecture. BehaveFormer integrates both keystroke dynamics and IMU data, enabling more robust authentication. To showcase our model’s potential, we built a smartphone prototype for continuous, biometric-based security.'
    }
  ],
  freelance: [
    {
      platform: "Fiverr",
      badges: [],
      href: "https://www.fiverr.com",
      location: "Remote",
      title: "Freelancer",
      logoUrl: "/fiverr.png",
      start: "",
      end: "",
      description:
        'Through successful software development, I was able to obtain Level 2 seller.'
    },
    {
      platform: "PeoplePerHour",
      badges: [],
      href: "https://www.peopleperhour.com",
      location: "Remote",
      title: "Freelancer",
      logoUrl: "/peopleperhour.svg",
      start: "",
      end: "",
      description: ''
    }
  ],
  education: [
    {
      school: "University of Moratuwa",
      degree: "Bachelor of the Science of Engineering (Hons.)",
      logoUrl: "/mora.jpg",
      start: "Nov 2018",
      end: "July 2023",
      description: "I earned a Bachelor of Science in Engineering with Honors from the University of Moratuwa, specializing in Computer Science and Engineering. Graduating with a GPA of 3.60/4.20, I achieved a Second Class Upper Division standing, reflecting a strong academic performance throughout the program. This rigorous education equipped me with a solid foundation in engineering principles and technical expertise essential for the field.",
    },
    {
      school: " Dharmasoka College",
      degree: "GCE Advanced Level (A/L)",
      logoUrl: "/dharmasoka.png",
      start: "Aug 2015",
      end: "Aug 2017",
      description: "I completed my GCE Advanced Level (A/L) Examination at Dharmasoka College in Ambalangoda, Sri Lanka, in the Physical Science stream, focusing on Combined Mathematics, Physics, and Chemistry. Achieving 3 A passes, I secured a Z-Score of 2.2741, ranking 115th nationally and 13th in the district, demonstrating strong academic performance and commitment to excellence in science."
    },
  ],
  publications: [
    {
      title: "Re-evaluating keystroke dynamics for continuous authentication",
      href: "https://ieeexplore.ieee.org/document/10145743",
      conference: "ICARC 2023",
      active: true,
      description:
        "This research paper evaluates mobile continuous authentication systems using keystroke dynamics, emphasizing the need for both traditional and continuous metrics for comprehensive assessment.",
      technologies: [
        "Machine Learning",
        "Deep Learning",
        "Biometrics",
        "Keras",
        "Tensorflow"
      ],
      links: [
        {
          type: "Website",
          href: "https://ieeexplore.ieee.org/document/10145743",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: {
        isYouTube: true,
        src: "https://www.youtube.com/embed/HHe2L-cXab8"
      }
    },
    {
      title: "BehaveFormer: A Framework with STDAT for IMU enhanced Keystroke Dynamics",
      href: "https://www.researchgate.net/publication/372487705_BehaveFormer_A_Framework_with_Spatio-Temporal_Dual_Attention_Transformers_for_IMU_enhanced_Keystroke_Dynamics",
      conference: "IJCB 2023",
      active: true,
      description:
        "BehaveFormer is a new system for Continuous Authentication (CA) that combines keystroke and IMU sensor data to improve accuracy. With its advanced transformer model (STDAT), it outperforms existing CA methods, ensuring secure, continuous user verification.",
      technologies: [
        "Machine Learning",
        "Deep Learning",
        "Biometrics",
        "Keras",
        "Tensorflow"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.researchgate.net/publication/372487705_BehaveFormer_A_Framework_with_Spatio-Temporal_Dual_Attention_Transformers_for_IMU_enhanced_Keystroke_Dynamics",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/DilshanSenarath/BehaveFormer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/behaveformer.png",
      video: null
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: {
        isYouTube: false,
        src: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4"
      }
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: {
        isYouTube: false,
        src: "https://cdn.magicui.design/bento-grid.mp4"
      }
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: {
        isYouTube: false,
        src: "https://cdn.llm.report/openai-demo.mp4"
      }
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: {
        isYouTube: false,
        src: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
      }
        
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
