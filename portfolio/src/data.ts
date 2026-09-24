export const profile = {
  name: "Varun Kamulu",

  role: "Software Engineer",

  tagline:
    "Software Engineer building scalable backend systems and Agentic AI workflows with Python, FastAPI and modern LLM frameworks.",

  location: "Hyderabad, India",

  email: "kamuluvarun@gmail.com",

  phone: "+91 91827 03837",

  github: "",

  linkedin: ""
};

export const about = {
  description:
    "Software Engineer with 2 years of experience building scalable backend systems and Agentic AI workflows at Qualcomm. My work spans ML orchestration, production RAG pipelines and cloud-native applications, with a focus on measurable improvements in throughput, latency and engineering efficiency.",

  highlights: [
    "Distributed ML orchestration",
    "Production RAG pipelines",
    "FastAPI and REST services",
    "Cloud-native engineering",
    "Performance optimization",
    "System design and data structures"
  ]
};

export const experience = [
  {
    company: "Qualcomm",
    role: "Software Engineer",
    period: "Jul 2024 - Present",
    location: "Hyderabad, India",

    description:
      "Building scalable backend systems and Agentic AI workflows for production engineering use cases.",

    achievements: [
      "Designed a distributed ML orchestration service with Python and FastAPI, enabling asynchronous GenAI workflows and improving processing throughput by 40%.",
      "Optimized production RAG pipelines through improved retrieval logic, vector search performance and database architecture, reducing inference latency by 15%.",
      "Automated QA workflows with a data translation module that maps Orbit customer issues to automated test cases, accelerating the CI/CD pipeline."
    ],

    technologies: [
      "Python",
      "FastAPI",
      "GenAI",
      "RAG",
      "ML Orchestration",
      "REST APIs"
    ]
  },
  {
    company: "Oracle",
    role: "Software Engineering Intern",
    period: "May 2023 - Jul 2023",
    location: "India",

    description:
      "Worked on cloud data ingestion, database integration and operational reporting tools.",

    achievements: [
      "Architected a Python utility using Oracle Object Storage to securely ingest, process and store 300 GB of unstructured data daily.",
      "Integrated object storage with Oracle Autonomous Database, streamlining data access and improving SQL query performance on large-scale datasets.",
      "Developed real-time tracking dashboards in Oracle APEX, reducing manual reporting requests by 20%."
    ],

    technologies: [
      "Python",
      "OCI",
      "Oracle Object Storage",
      "OADB",
      "SQL",
      "Oracle APEX"
    ]
  }
];

export const projects = [
  {
    title: "Multi-Agent Research Workflow",

    description:
      "An autonomous research system that orchestrates planner, researcher and writer agents with stateful memory, conditional routing and human review.",

    tags: [
      "LangGraph",
      "Claude 3.5",
      "Agentic AI",
      "Tool Calling",
      "Human Review"
    ],

    featured: true,

    github: ""
  },

  {
    title: "Enterprise Document RAG Assistant",

    description:
      "A RAG knowledge assistant over 500+ technical PDFs using two-stage retrieve-and-rerank search, semantic chunking and systematic evaluation.",

    tags: [
      "LangChain",
      "GPT-4o",
      "Pinecone",
      "RAG",
      "RAGAS"
    ],

    featured: true,

    github: ""
  }
];

export const skills = {
  languages: [
    "Python",
    "C++",
    "JavaScript",
    "SQL",
    "HTML/CSS"
  ],

  ai: [
    "PyTorch",
    "Hugging Face",
    "LLM Architectures",
    "RAG",
    "Vector Databases",
    "ML Orchestration"
  ],

  backend: [
    "FastAPI",
    "REST APIs",
    "Distributed Systems",
    "Data Pipelines",
    "Docker",
    "Kubernetes"
  ],

  tools: [
    "Git",
    "VS Code",
    "OCI",
    "MongoDB",
    "Oracle Autonomous DB",
    "Oracle APEX"
  ]
};

export const education = {
  institution: "National Institute of Technology, Warangal",
  degree: "B.Tech, Electronics and Communication Engineering",
  period: "2020 - 2024",
  result: "CGPA: 7.48"
};

export const achievements = [
  "CodeChef 4-Star (Max Rating: 1824)",
  "Solved 500+ algorithmic and data structure problems on LeetCode",
  "Secured 6th place in the WSDC Hackathon Web Development category"
];