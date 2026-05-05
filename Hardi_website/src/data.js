// ===== PORTFOLIO DATA =====
export const personalInfo = {
  name: "Hardi Naik",
  title: "Upcoming Trainee Software Engineer",
  subtitle:
    "Final-year CS student at Dhirubhai Ambani University with a passion for Machine Learning, full-stack development, Generative AI and DSA problem solving. I love building things from LLM-powered applications to data-driven systems and I'm actively looking for opportunities to grow, contribute and make an impact as a fresher.",
  email: "",
  location: "Surat, Gujarat, India",
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
      "Statistical Methods for Data Science",
      "High Performance Computing",
    ],
  },
];

export const experience = [
  {
    role: "Intern",
    company: "Prewish IT Solutions",
    period: "Jan 2026 – April 2026",
    summary:
      "Built an AI-powered Job Recommendation Platform using hybrid search (semantic + BM25 via RRF), LLM-based resume parsing and full-stack deployment on Vercel and Render.",
    points: [
      "Built an AI-powered Job Recommendation Platform using a hybrid search pipeline combining semantic vector embeddings (Google Gemini, 768-dim) and BM25 keyword ranking, fused via Reciprocal Rank Fusion (RRF) to deliver ranked job matches with 0–100 match scores.",
      "Engineered an LLM-driven resume parsing pipeline (LLaMA 3 8B via Groq) that extracts skills, work experience, and projects into separate vector embeddings stored in PostgreSQL with pgvector, enabling weighted cosine similarity matching across multiple resume dimensions.",
      "Deployed a production full-stack application on Vercel (React frontend) and Render (FastAPI backend) with managed PostgreSQL + pgvector, featuring JWT role-based auth, automated SMTP email notifications, and dual recommendation modes.",
    ],
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "pgvector", "LangChain", "LLMs", "Vercel", "Render"],
  },
  {
    role: "Intern",
    company: "Synergy Peripheral Services",
    period: "May 2025 – Jun 2025",
    summary:
      "Built time-series forecasting pipelines (SARIMA, Prophet, Holt-Winters) on production sales data, improving prediction consistency.",
    points: [
      "Analyzed production sales datasets and implemented time-series forecasting models (SARIMA, Prophet, Holt-Winters) to automate prediction workflows.",
      "Built Python pipelines for data preprocessing, transformation and model evaluation, improving forecasting reliability.",
    ],
    tags: ["Python", "Time Series", "SARIMA", "Prophet", "Holt-Winters", "Forecasting"],
  },
];

export const projects = [
  {
    title: "AI-Powered Job Recommender System",
    description:
      "Full-stack AI system for personalized job recommendations using hybrid semantic search and LLM-powered resume parsing.",
    longDescription:
      "Built an end-to-end job recommendation platform using a hybrid search pipeline combining semantic vector embeddings (Google Gemini, 768-dim) and BM25 keyword ranking, fused via Reciprocal Rank Fusion (RRF) to deliver ranked job matches with 0–100 match scores.\n\nEngineered an LLM-driven resume parsing pipeline (LLaMA 3 8B via Groq) that extracts skills, work experience, and projects into separate vector embeddings stored in PostgreSQL with pgvector, enabling weighted cosine similarity matching across multiple resume dimensions.\n\nDeployed on Vercel (React frontend) and Render (FastAPI backend) with JWT role-based auth, automated SMTP email notifications, and dual recommendation modes (profile-based and manual).",
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "pgvector", "LangChain", "LLMs", "JWT"],
    highlight: "Hybrid semantic + BM25 search via RRF fusion",
    type: "Full Stack + AI",
  },
  {
    title: "AI-Powered Automated Test Generation",
    description:
      "LLM-based system for generating Python unit tests with high mutation coverage.",
    longDescription:
      "Designed a framework to automatically generate unit tests using LLMs with zero-shot and few-shot prompting techniques. Integrated Gemini API with LangChain to generate test cases.\n\nAchieved mutation scores of 91.27% (zero-shot) and 95.71% (few-shot), outperforming traditional tools like Pynguin (baseline 44–87%). Applied mutation testing using MuTAP to iteratively improve test quality and software reliability.",
    tags: ["Python", "LLM", "LangChain", "Gemini API", "MuTAP", "Pynguin"],
    highlight: "95.71% mutation score — beats Pynguin baseline",
    type: "AI / Research",
  },
  {
    title: "Airforce ERP System",
    description:
      "Normalized relational database system for managing military operations and logistics.",
    longDescription:
      "Designed and developed a normalized relational database system to manage soldiers, aircraft, missions, and operational logistics. Constructed ER diagrams, normalized schemas, and wrote optimized SQL queries for high-volume data retrieval.",
    tags: ["PostgreSQL", "SQL", "Database Design", "ER Diagrams"],
    highlight: "Normalized schema design for high-volume queries",
    type: "Database",
  },
  {
    title: "House Price Prediction",
    description:
      "Machine learning pipeline for regression with proper validation and preprocessing.",
    longDescription:
      "Conducted comprehensive EDA and built leakage-free preprocessing pipelines using ColumnTransformer and Pipeline with proper train-test separation.\n\nEvaluated Linear, Ridge, Lasso, and Random Forest models with K-Fold Cross-Validation using RMSE and R² metrics.",
    tags: ["Python", "scikit-learn", "Pandas", "NumPy", "ML"],
    highlight: "K-Fold validation + leakage-free pipeline",
    type: "Machine Learning",
  },
];

// Skills are ordered intentionally: strongest/most relevant first
export const skills = {
  "Languages":          ["Java", "Python", "JavaScript"],
  "Machine Learning":   ["NumPy", "Pandas", "Matplotlib", "scikit-learn", "TensorFlow"],
  "AI / LLM":           ["LangChain", "Gemini API", "Sentence Transformers", "Groq API", "LLMs", "Generative AI"],
  "Frontend":           ["HTML", "CSS", "React.js"],
  "Backend":            ["FastAPI", "REST APIs"],
  "Database":           ["PostgreSQL", "pgvector"],
  "Tools & Practices":  ["DSA", "Git", "GitHub", "SDLC", "Agile", "Data Analysis"],
};

export const achievements = [
  { label: "LeetCode", value: "1671", detail: "Highest Rating (naik05)" },
  { label: "Codeforces", value: "1170", detail: "Highest Rating (Hardinaik)" },
  { label: "DSA Problems", value: "1000+", detail: "LeetCode, Codeforces, GFG" },
  { label: "ACPC", value: "Rank 12", detail: "Gujarat" },
  { label: "Board Exam", value: "District Rank 1", detail: "12th Grade GHSEB" },
];

export const positions = [
  {
    role: "Teaching Assistant – Optimization",
    org: "Dhirubhai Ambani University",
    period: "Aug 2025 – Dec 2025",
    detail:
      "Conducted tutorial sessions and helped students in problem solving and clearing doubts.",
  },
  {
    role: "Core Member – Programming Club",
    org: "Dhirubhai Ambani University",
    period: "Aug 2024 – Aug 2025",
    detail:
      "Conducted DSA workshops, mentored juniors to improve algorithmic thinking and coding proficiency. Contributed to problem setting and execution of IPC coding contests hosted on Codeforces.",
  },
  {
    role: "Event Coordinator – i.Fest",
    org: "DAU Annual Technical Festival",
    period: "Nov 2023",
    detail:
      "Managed the CSS Battle event including challenge design, logistics, participant handling and evaluation.",
  },
];

export const certificates = [
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI (Andrew Ng)",
  },
];