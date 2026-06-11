const navLinks = [
  { id: 1, name: "Projects", type: "finder" },
  { id: 2, name: "Experience", type: "experience" },
  { id: 3, name: "Certifications", type: "certifications" },
  { id: 4, name: "Contact", type: "contact" },
  { id: 5, name: "Resume Preview", type: "resume" },
];

const navIcons = [
  { id: 1, img: "/icons/wifi.svg" },
  { id: 2, img: "/icons/search.svg" },
  { id: 3, img: "/icons/user.svg" },
  { id: 4, img: "/icons/mode.svg" },
];

const dockApps = [
  { id: "finder", name: "Portfolio", icon: "finder.png", canOpen: true },
  { id: "safari", name: "Resume", icon: "safari.png", canOpen: true },
  { id: "photos", name: "Gallery", icon: "photos.png", canOpen: true },
  { id: "contact", name: "Contact", icon: "contact.png", canOpen: true },
  { id: "terminal", name: "Skills", icon: "terminal.png", canOpen: true },
  { id: "trash", name: "Archive", icon: "trash.png", canOpen: true },
];

const blogPosts = [];

const techStack = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "C", "C++", "SQL"] },
  { category: "Frameworks", items: ["Spring Boot", "Node.js", "Express.js", "React.js", "FastAPI"] },
  { category: "AI / ML", items: ["NLP", "LLMs", "RAG Pipelines", "Prompt Engineering"] },
  { category: "Databases", items: ["MySQL", "MongoDB", "Redis", "FAISS", "Pinecone"] },
  { category: "Cloud", items: ["AWS", "Docker", "CI/CD", "Kafka", "Airflow"] },
];

const socials = [
  { id: 1, text: "Github", icon: "/icons/github.svg", bg: "#000000", link: "https://github.com/VURE-SATHVIK-22" },
  { id: 2, text: "LinkedIn", icon: "/icons/linkedin.svg", bg: "#0077B5", link: "https://www.linkedin.com/in/vure-sathvik" },
];

const photosLinks = [
  { id: 1, icon: "/icons/gicon1.svg", title: "Library" },
];

const gallery = [
];

export { navLinks, navIcons, dockApps, blogPosts, techStack, socials, photosLinks, gallery };

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 10,
      name: "app",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[5vh] left-[5vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 101,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 102,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/app",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 11,
      name: "CodeReview-AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[5vh] left-[20vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 111,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 112,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/CodeReview-AI",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 12,
      name: "CRUD",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[5vh] left-[35vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 121,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 122,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/CRUD",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 13,
      name: "Endpoint",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[5vh] left-[50vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 131,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 132,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/Endpoint",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 14,
      name: "Fetch",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[20vh] left-[5vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 141,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 142,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/Fetch",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 15,
      name: "LoginForm",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[20vh] left-[20vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 151,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 152,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/LoginForm",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 16,
      name: "mobileapp",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[20vh] left-[35vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 161,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 162,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/mobileapp",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 17,
      name: "MyCalculator",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[20vh] left-[50vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 171,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 172,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/MyCalculator",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 18,
      name: "myportfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[35vh] left-[5vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 181,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 182,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/myportfolio",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 19,
      name: "Nodejs_1264",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[35vh] left-[20vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 191,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 192,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/Nodejs_1264",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 20,
      name: "Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[35vh] left-[35vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 201,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 202,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/Portfolio",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 21,
      name: "React-API",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[35vh] left-[50vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 211,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 212,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/React-API",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 22,
      name: "RestfulBlog",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[50vh] left-[5vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 221,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 222,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/RestfulBlog",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 23,
      name: "Self-Healing-RAG-Pipeline",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[50vh] left-[20vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 231,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 232,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/Self-Healing-RAG-Pipeline",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 24,
      name: "SocialMedia",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[50vh] left-[35vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 241,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 242,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/SocialMedia",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 25,
      name: "TailwindCSS",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[50vh] left-[50vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 251,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 252,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/TailwindCSS",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 26,
      name: "TrustNet",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[65vh] left-[5vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 261,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 262,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/TrustNet",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 27,
      name: "vits-it-department-website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[65vh] left-[20vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 271,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "orchids-vits-it-department - Repository created from Orchids integration"
          ]
        },
        {
          id: 272,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/vits-it-department-website",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 28,
      name: "VURE-SATHVIK-22",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[65vh] left-[35vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 281,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 282,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/VURE-SATHVIK-22",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 29,
      name: "workshop",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[65vh] left-[50vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 291,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 292,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/workshop",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 30,
      name: "Workshop_IT",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[80vh] left-[5vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 301,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 302,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/Workshop_IT",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 31,
      name: "Workshop_P",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[80vh] left-[20vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 311,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 312,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/Workshop_P",
          position: "top-5 right-20"
        }
      ]
    },
    {
      id: 32,
      name: "Workshop_Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[80vh] left-[35vw]",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 321,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A GitHub repository."
          ]
        },
        {
          id: 322,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/VURE-SATHVIK-22/Workshop_Portfolio",
          position: "top-5 right-20"
        }
      ]
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 204,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-10",
      subtitle: "Software Engineering Intern",
      image: "/images/profile-photo.jpg",
      description: [
        "Hey! I am VURE SATHVIK 👋.",
        "I'm an aspiring Software Engineer with expertise in modern full-stack development, AI/ML, and scalable systems.",
        "I have built production-ready applications utilizing React.js, Node.js, Spring Boot, and AI tools like LangChain and LangGraph.",
        "I thrive in building self-healing pipelines, optimizing code review systems, and working on impactful projects.",
        "Let's build something legendary. 🚀"
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 301,
      name: "Vure_Sathvik_Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const EXPERIENCE_LOCATION = {
  id: 5,
  type: "experience",
  name: "Experience",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 50,
      name: "Chakravyuha Dynamics",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-10",
      children: [
        {
          id: 501,
          name: "Software Engineering Intern.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "-> Software Engineering Intern | Mar 2026 – May 2026",
            "• Built 5+ production web pages with modular React.js components, cutting page load time by 25% and improving cross-device reliability.",
            "• Collaborated with a 3-engineer team to design and ship 3 new site sections (Products, Resources, Careers).",
            "• Set up end-to-end CI/CD pipelines via Vercel with automated deployment workflows — maintained 99.9% uptime."
          ]
        }
      ]
    }
  ],
};

const CERTIFICATIONS_LOCATION = {
  id: 6,
  type: "certifications",
  name: "Certifications",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 601,
      name: "Innovation and Entrepreneurship.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-10",
      description: [
        "Innovation and Entrepreneurship program."
      ]
    },
    {
      id: 602,
      name: "Problem Solving (Basic).txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-[20vw]",
      description: [
        "Problem Solving (Basic) Hackathon."
      ]
    },
    {
      id: 603,
      name: "Hackathon Gitam.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-[40vw]",
      description: [
        "Hackathon at Gitam."
      ]
    },
    {
      id: 604,
      name: "Honors & Awards.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-[25vh] left-10",
      description: [
        "Honors-Awards:",
        "Award for Delivering a Web Development Workshop."
      ]
    },
    {
      id: 610,
      name: "AI Fundamentals.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-[25vh] left-[20vw]",
      imageUrl: "/images/ai-fundamentals.png"
    },
    {
      id: 611,
      name: "Communication Dynamics.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-[25vh] left-[40vw]",
      imageUrl: "/images/communication-dynamics.png"
    },
    {
      id: 612,
      name: "Problem Solving.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-[40vh] left-10",
      imageUrl: "/images/problem-solving.png"
    },
    {
      id: 613,
      name: "AWS Networking.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-[40vh] left-[20vw]",
      imageUrl: "/images/aws-networking.png"
    },
    {
      id: 614,
      name: "AWS Storage.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-[40vh] left-[40vw]",
      imageUrl: "/images/aws-storage.png"
    },
    {
      id: 615,
      name: "AWS Compute.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-[55vh] left-10",
      imageUrl: "/images/aws-compute.png"
    },
    {
      id: 616,
      name: "Data Science.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-[55vh] left-[20vw]",
      imageUrl: "/images/data-science.png"
    }
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  experience: EXPERIENCE_LOCATION,
  certifications: CERTIFICATIONS_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
