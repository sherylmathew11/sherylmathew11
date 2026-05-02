export type Project = {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  logsUrl?: string;
};

export const projects: Project[] = [
  {
    title: "SmartChart",
    description: "AI Data Consultant",
    longDescription:
      "An AI analytics app that turns natural language questions into Python code to visualize and analyze CSV data.",
    technologies: ["Python", "Streamlit", "E2B Sandbox", "Hugging Face API", "Pandas", "Matplotlib", "Generative AI"],
    highlights: [
      "Translated natural language into Python for instant visualizations",
      "Used prompt engineering and chat history for better code synthesis",
      "Leveraged Qwen-2.5-Coder via Hugging Face API for code generation",
    ],
    liveUrl: "https://sherylmathew-smartchart.hf.space/",
    githubUrl: "https://github.com/sherylmathew11/smartchart",
  },
  {
    title: "Human Activity Recognition",
    description: "Deep Learning for Video Action Recognition",
    longDescription:
      "Two deep learning approaches for recognizing human actions from video: a Single-Frame CNN and a ConvLSTM model.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Scikit-learn", "NumPy", "Matplotlib", "Deep Learning"],
    highlights: [
      "Implemented two models to identify human actions from video data",
      "Compared Single-Frame CNN vs ConvLSTM (spatial vs temporal learning)",
      "Published a public arXiv preprint with methodology as well as results",
    ],
    githubUrl: "https://github.com/sherylmathew11/Human-Activity-Recognition",
    logsUrl: "https://arxiv.org/abs/2304.14499",
  },
  {
    title: "Paris Olympics 2024 Dashboard",
    description: "Data Analytics Dashboard",
    longDescription:
      "An interactive analytics dashboard visualizing Paris Olympics 2024 data with comprehensive insights on events, athletes, and medal standings.",
    technologies: ["Databricks", "Tableau", "Python", "PySpark", "SQL"],
    highlights: [
      "Built data pipelines in Databricks for ETL processing",
      "Created interactive Tableau dashboards with drill-down capabilities",
      "Visualized medal counts, athlete performance, and country statistics",
      "Real-time data refresh with optimized query performance",
    ],
    liveUrl: "https://public.tableau.com/views/ParisOlympics2024-MigrantMedalists/Overview",
    logsUrl: "/Paris_Olympic_Data_Preparation.html",
  },
  {
    title: "Nurse-Mi",
    description: "ML Symptom Checker Chatbot",
    longDescription:
      "A Python-based machine learning chatbot focused on predicting diseases from user-entered symptoms.",
    technologies: ["Python", "Tkinter", "Scikit-learn", "Machine Learning", "AI", "Data Science"],
    highlights: [
      "Built an interactive chatbot UI for symptom input and predictions",
      "Trained a machine learning model to map symptom patterns to likely diseases",
      "Focused on a simple, fast, offline-friendly desktop workflow",
    ],
    githubUrl: "https://github.com/sherylmathew11/Nurse-Mi",
  },
];
