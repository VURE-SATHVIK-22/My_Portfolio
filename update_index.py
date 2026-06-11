import json
import urllib.request
import os

req = urllib.request.Request('https://api.github.com/users/VURE-SATHVIK-22/repos', headers={'User-Agent': 'Mozilla/5.0'})
res = urllib.request.urlopen(req)
repos_data = json.loads(res.read())

repos = []
for r in repos_data:
    repos.append({
        'name': r['name'],
        'html_url': r['html_url'],
        'description': r.get('description') or 'A GitHub repository.'
    })

# Format WORK_LOCATION children
work_children = []
for i, repo in enumerate(repos):
    folder_id = 10 + i
    
    # We want a grid layout. Say 4 items per row.
    row = i // 4
    col = i % 4
    top_pos = 5 + (row * 20)
    left_pos = 5 + (col * 20)
    
    # Let's adjust positioning logic roughly
    # the existing format uses tailwind classes like "top-10 left-5"
    top_class = f"top-[{5 + (row * 15)}vh]"
    left_class = f"left-[{5 + (col * 15)}vw]"
    
    child = f"""    {{
      id: {folder_id},
      name: "{repo['name']}",
      icon: "/images/folder.png",
      kind: "folder",
      position: "{top_class} {left_class}",
      windowPosition: "top-[10vh] left-10",
      children: [
        {{
          id: {folder_id}1,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "{repo['description']}"
          ]
        }},
        {{
          id: {folder_id}2,
          name: "GitHub Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "{repo['html_url']}",
          position: "top-5 right-20"
        }}
      ]
    }},"""
    work_children.append(child)

work_children_str = "\n".join(work_children)

index_js_content = f"""const navLinks = [
  {{ id: 1, name: "Projects", type: "finder" }},
  {{ id: 2, name: "Experience", type: "experience" }},
  {{ id: 3, name: "Certifications", type: "certifications" }},
  {{ id: 4, name: "Contact", type: "contact" }},
  {{ id: 5, name: "Resume", type: "resume" }},
];

const navIcons = [
  {{ id: 1, img: "/icons/wifi.svg" }},
  {{ id: 2, img: "/icons/search.svg" }},
  {{ id: 3, img: "/icons/user.svg" }},
  {{ id: 4, img: "/icons/mode.svg" }},
];

const dockApps = [
  {{ id: "finder", name: "Portfolio", icon: "finder.png", canOpen: true }},
  {{ id: "safari", name: "Articles", icon: "safari.png", canOpen: true }},
  {{ id: "photos", name: "Gallery", icon: "photos.png", canOpen: true }},
  {{ id: "contact", name: "Contact", icon: "contact.png", canOpen: true }},
  {{ id: "terminal", name: "Skills", icon: "terminal.png", canOpen: true }},
  {{ id: "trash", name: "Archive", icon: "trash.png", canOpen: true }},
];

const blogPosts = [];

const techStack = [
  {{ category: "Languages", items: ["Java", "Python", "JavaScript", "C", "C++", "SQL"] }},
  {{ category: "Frameworks", items: ["Spring Boot", "Node.js", "Express.js", "React.js", "FastAPI"] }},
  {{ category: "AI / ML", items: ["NLP", "LLMs", "RAG Pipelines", "Prompt Engineering"] }},
  {{ category: "Databases", items: ["MySQL", "MongoDB", "Redis", "FAISS", "Pinecone"] }},
  {{ category: "Cloud", items: ["AWS", "Docker", "CI/CD", "Kafka", "Airflow"] }},
];

const socials = [
  {{ id: 1, text: "Github", icon: "/icons/github.svg", bg: "#000000", link: "https://github.com/VURE-SATHVIK-22" }},
  {{ id: 2, text: "LinkedIn", icon: "/icons/linkedin.svg", bg: "#0077B5", link: "https://www.linkedin.com/in/vure-sathvik" }},
];

const photosLinks = [
  {{ id: 1, icon: "/icons/gicon1.svg", title: "Library" }},
];

const gallery = [
];

export {{ navLinks, navIcons, dockApps, blogPosts, techStack, socials, photosLinks, gallery }};

const WORK_LOCATION = {{
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
{work_children_str}
  ],
}};

const ABOUT_LOCATION = {{
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {{
      id: 204,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-10",
      subtitle: "Software Engineering Intern",
      image: "/images/main.jpeg",
      description: [
        "Hey! I am VURE SATHVIK 👋.",
        "I'm an aspiring Software Engineer with expertise in modern full-stack development, AI/ML, and scalable systems.",
        "I have built production-ready applications utilizing React.js, Node.js, Spring Boot, and AI tools like LangChain and LangGraph.",
        "I thrive in building self-healing pipelines, optimizing code review systems, and working on impactful projects.",
        "Let's build something legendary. 🚀"
      ],
    }},
  ],
}};

const RESUME_LOCATION = {{
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {{
      id: 301,
      name: "Vure_Sathvik_Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    }},
  ],
}};

const EXPERIENCE_LOCATION = {{
  id: 5,
  type: "experience",
  name: "Experience",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {{
      id: 50,
      name: "Chakravyuha Dynamics",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-10",
      children: [
        {{
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
        }}
      ]
    }}
  ],
}};

const CERTIFICATIONS_LOCATION = {{
  id: 6,
  type: "certifications",
  name: "Certifications",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {{
      id: 60,
      name: "Bootcamps",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-10",
      children: [
        {{
          id: 601,
          name: "AI & Data Engineer Bootcamps.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "AI Engineer Bootcamp (Udemy) — practical training in building LLM-powered applications, NLP pipelines, transformer models.",
            "Data Engineer Bootcamp (Udemy) — end-to-end data engineering covering pipelines, batch and stream processing, SQL/NoSQL, cloud storage."
          ]
        }}
      ]
    }}
  ],
}};

const TRASH_LOCATION = {{
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
}};

export const locations = {{
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  experience: EXPERIENCE_LOCATION,
  certifications: CERTIFICATIONS_LOCATION,
  trash: TRASH_LOCATION,
}};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {{
  finder: {{ isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }},
  contact: {{ isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }},
  resume: {{ isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }},
  safari: {{ isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }},
  photos: {{ isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }},
  terminal: {{ isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }},
  txtfile: {{ isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }},
  imgfile: {{ isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }},
  trash: {{ isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }},
}};

export {{ INITIAL_Z_INDEX, WINDOW_CONFIG }};
"""

with open(r'f:\MyPortfolio\portfolio\src\constants\index.js', 'w', encoding='utf-8') as f:
    f.write(index_js_content)

print("Updated index.js successfully!")
