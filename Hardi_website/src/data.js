// ===== PORTFOLIO DATA =====
export const personalInfo = {
  name: "Hardi Naik",
  title: " Upcoming Trainee Software Engineer",
  subtitle:
  "Final-year CS student at Dhirubhai Ambani University with a passion for Machine Learning, full-stack development , Generative AI and  dsa problem solving. I love building things from LLM-powered applications to data-driven systems and I'm actively looking for opportunities to grow, contribute and make an impact as a fresher.",
  email: "",
  location: "Surat,Gujarat, India",
  available: true,
  links: {
    github: "",
    leetcode: "",
    codeforces: "",
    linkedin: "",
  },
};

export const education = [
  {
    degree: "B.Tech (Honours) in ICT",
    minor: "Minor in Computational Science",
    institution: "Dhirubhai Ambani University",
    location: "Gandhinagar, Gujarat",
    period: "2022 – 2026",
    cgpa: "7.47",
    courses: [
      "Data Structures & Algorithms",
      "OOP (Java)",
      "Database Management",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning",
      "Statistical Methods",
      "High Performance Computing",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "Synergy Peripheral Services",
    period: "May 2025 – Jun 2025",
    points: [
      "Worked on production sales datasets to build time-series forecasting models including SARIMA, Prophet, and Holt-Winters.",
      "Developed automated prediction pipelines in Python, improving consistency and reliability of forecasting workflows.",
      "Performed data preprocessing, transformation, and model evaluation to enhance prediction accuracy.",
    ],
    tags: ["Python", "Time Series", "SARIMA", "Prophet", "Forecasting"],
  },
];

export const projects = [
  {
    title: "AI-Powered Job Recommender System",
    description:
      "Full-stack AI system for personalized job recommendations using semantic search and LLM-powered resume parsing.",
    longDescription:
      "Built an end-to-end job recommendation platform using a multi-embedding semantic search pipeline powered by pgvector. Designed a system where resumes and job descriptions are parsed into structured embeddings and ranked using weighted cosine similarity.\n\nImplemented dual recommendation modes including profile-based and manual search with secure JWT-based role access for recruiters and job seekers. Integrated LLM-based resume parsing using LangChain and Gemini API to extract structured information from PDFs.",
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "pgvector", "LangChain", "LLMs", "JWT"],
    highlight: "Semantic search using multi-embedding ranking",
    type: "Full Stack + AI",
  },
  {
    title: "AI-Powered Automated Test Generation",
    description:
      "LLM-based system for generating Python unit tests with high mutation coverage.",
    longDescription:
      "Designed a framework to automatically generate unit tests using LLMs with zero-shot and few-shot prompting techniques. Integrated Gemini API with LangChain to generate test cases.\n\nAchieved mutation scores of 91.27% (zero-shot) and 95.71% (few-shot), outperforming traditional tools like Pynguin. Applied mutation testing using MuTAP to iteratively improve test quality and software reliability.",
    tags: ["Python", "LLM", "LangChain", "Testing", "MuTAP"],
    highlight: "95.71% mutation score",
    type: "AI / Research",
  },
  {
    title: "Airforce ERP System",
    description:
      "Database system for managing military operations and logistics.",
    longDescription:
      "Designed and implemented a relational database system to manage soldiers, aircraft, missions, and operational workflows. Created ER diagrams and normalized schemas to ensure data consistency and scalability.\n\nWrote optimized SQL queries to support efficient retrieval and handling of large-scale structured data.",
    tags: ["PostgreSQL", "SQL", "Database Design"],
    highlight: "Normalized database design",
    type: "Database",
  },
  {
    title: "House Price Prediction",
    description:
      "Machine learning pipeline for regression with proper validation and preprocessing.",
    longDescription:
      "Built a complete ML pipeline with proper train-test separation to avoid data leakage. Used ColumnTransformer and Pipeline for preprocessing.\n\nEvaluated multiple models including Linear Regression, Ridge, Lasso, and Random Forest using K-Fold Cross-Validation. Analyzed bias-variance trade-offs and evaluated performance using RMSE and R².",
    tags: ["Python", "scikit-learn", "Pandas", "ML"],
    highlight: "K-Fold validation + regularization study",
    type: "Machine Learning",
  }
];

export const skills = {
  "Languages": ["Java", "Python", "JavaScript"],
  "Machine Learning": ["NumPy", "Pandas", "Matplotlib", "scikit-learn", "TensorFlow"],
  "Frontend": ["HTML", "CSS", "React"],
  "Backend": ["FastAPI", "REST API"],
  "Database": ["PostgreSQL", "pgvector"],
  "AI / LLM": ["LangChain", "Gemini API", "Sentence Transformers", "LLMs"],
  "Other": ["DSA", "SDLC", "Agile", "Git"],
};

export const achievements = [
  { label: "LeetCode", value: "1671", detail: "Rating (naik05)" },
  { label: "Codeforces", value: "1170", detail: "Rating (Hardinaik)" },
  { label: "DSA Problems", value: "1000+", detail: "Across platforms" },
  { label: "ACPC", value: "Rank 12", detail: "Gujarat" },
  { label: "Board Exam", value: "District Rank 1", detail: "GHSEB" },
];

export const positions = [
  {
    role: "Teaching Assistant – Optimization",
    org: "Dhirubhai Ambani University",
    period: "Aug 2025 – Dec 2025",
    detail:
      "Led tutorial sessions and guided students in solving optimization problems, strengthening their analytical and mathematical understanding.",
  },
  {
    role: "Core Member – Programming Club",
    org: "Dhirubhai Ambani University",
    period: "Aug 2024 – Aug 2025",
    detail:
      "Conducted DSA workshops, mentored juniors, and contributed to organizing coding contests including problem setting on Codeforces.",
  },
  {
    role: "Event Coordinator – i.Fest",
    org: "DAU Technical Festival",
    period: "Nov 2023",
    detail:
      "Managed the CSS Battle event including challenge design, coordination, and evaluation of participants.",
  },
];

export const certificates = [
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI (Andrew Ng)",
  },
];