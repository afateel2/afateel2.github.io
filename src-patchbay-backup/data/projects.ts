export interface Project {
  index: string
  title: string
  period: string
  tag: string
  summary: string
  detail: string[]
  stack: string[]
  metric?: string
  repo?: { url: string; label: string }
  tracks: string[]
}

export const projects: Project[] = [
  {
    index: '01',
    title: 'SAIL Dashboard',
    period: 'Saudi Aramco — Jun–Aug 2024',
    tag: 'Production system',
    summary:
      'A full-stack project-tracking platform built for the Saudi Accelerated Innovation Lab, replacing a manual Excel workflow for the Technology Scouting and Incubation group.',
    detail: [
      'Designed and shipped a production application end to end: React, TypeScript, and Tailwind CSS on the frontend; Node.js, Express, and PostgreSQL on the backend. Deployed to a company VM via IIS.',
      'Built a linear-regression forecasting feature that projects upcoming months’ project volume from historical data, rendered as an actual-versus-predicted chart.',
      'Designed a normalized relational schema with correct cascade and null-on-delete behavior, a generic CRUD pattern for shared lookup tables, and a polymorphic file-attachment system reused across projects, companies, and dashboards.',
      'Continued the work remotely after the internship ended to complete the handoff, including recording setup and deployment walkthroughs for the team.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
    tracks: ['featured', 'swe'],
  },
  {
    index: '02',
    title: 'EEG-Controlled Prosthetic Arm',
    period: 'Senior Capstone',
    tag: 'Applied ML / embedded',
    summary:
      'A six-class motor-imagery classifier reading live EEG signals to drive a prosthetic arm in real time, built after extensive iteration across feature representations and model families.',
    detail: [
      'Iterated through raw-signal, band-power, and CSP (Common Spatial Pattern) feature representations before settling on a hybrid extractor combining statistical, band-power, and CSP features. Tried and discarded several approaches along the way, including a 16-layer neural network that underperformed simpler models.',
      'Addressed class imbalance with SMOTE after undersampling proved insufficient, then reduced dimensionality with PCA before final classification.',
      'Final pipeline: an ensemble (Random Forest, XGBoost, KNN) reached approximately 72% accuracy on a 6-class IEEE benchmark dataset.',
      'Designed a two-stage real-time architecture for deployment: a lightweight binary gatekeeper continuously checks for motor-imagery intent, and only triggers the full 6-class classifier when intent is detected — reducing both compute load and false actuation.',
      'Deployed on a Raspberry Pi against a MindRove EEG headset: Butterworth band-pass filtering, missing-channel interpolation, and z-score normalization feed the cascaded classifiers, with per-stage latency profiled live and the resulting command sent over serial to the prosthetic’s motors.',
    ],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'MNE', 'imbalanced-learn', 'Raspberry Pi'],
    metric: '~72% accuracy, 6-class IEEE benchmark',
    tracks: ['featured', 'ai-ml'],
  },
  {
    index: '03',
    title: 'BuildIt',
    period: 'Team project (4–5 people)',
    tag: 'Full-stack + LLM integration',
    summary:
      'A PC-building and community platform where users configure builds and get AI-estimated performance, alongside a social layer for sharing and discussing builds.',
    detail: [
      'Owned the community/user-interaction layer: a tag-filtered post feed with live counts, multi-field search across title, author, and content, image uploads via Cloudinary with fallback handling, view-count tracking, and a full comment system — all gated behind authentication middleware.',
      'The team’s build-estimation feature sends a user’s selected components to the OpenAI API with a tightly constrained system prompt that forces a strict JSON response (per-component pricing plus performance scores), including explicit handling for edge cases like missing components.',
      'Backend: Node.js, Express, MongoDB via Mongoose, Passport.js authentication.',
      'Delivered as part of a multi-person team using Git for version control throughout.',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Passport.js', 'Git'],
    repo: { url: 'https://github.com/Feras532/build-it', label: 'Team repository' },
    tracks: ['featured', 'swe'],
  },
  {
    index: '04',
    title: 'AI Assessment Generator',
    period: 'Personal project',
    tag: 'RAG pipeline',
    summary:
      'A self-hosted retrieval-augmented generation system that ingests a codebase from GitHub and generates structured assessment questions from it.',
    detail: [
      'Built the full pipeline independently: automated GitHub ingestion, semantic chunking, HuggingFace embeddings, ChromaDB vector storage, and local inference via Ollama running Llama 3.',
      'Enforced JSON-schema validation on generated output for deterministic, structured results, with no third-party API dependency — the entire system runs locally.',
    ],
    stack: ['FastAPI', 'HuggingFace', 'ChromaDB', 'Ollama / Llama 3'],
    repo: { url: 'https://github.com/afateel2/codvel_AI', label: 'View repository' },
    tracks: ['ai-ml'],
  },
  {
    index: '05',
    title: 'Tournament Management System',
    period: 'Team course project',
    tag: 'Desktop application',
    summary:
      'A complete JavaFX desktop application for running both elimination-bracket and round-robin tournaments, built from a real stakeholder brief through to a working system.',
    detail: [
      'Modeled the full domain in Java: Tournament, RoundRobin, Elimination, Team, Individual, Match, and Sport classes supporting both tournament formats from a single object model.',
      'Built separate admin and student views with login-gated access, tournament creation and registration flows, and persistence via Java serialization.',
      'Taken through the full software engineering lifecycle: requirements gathering from a written stakeholder brief, UML modeling (use case, class, activity, sequence diagrams), and implementation.',
    ],
    stack: ['Java', 'JavaFX', 'UML', 'OOP design'],
    repo: { url: 'https://github.com/Ali-SWE/SWE206-Project', label: 'Team repository' },
    tracks: ['swe'],
  },
  {
    index: '06',
    title: 'Smart Road Safety System',
    period: 'AgentIQ Bootcamp — NITA',
    tag: 'IoT integration / edge deployment',
    summary:
      'A pedestrian safety monitoring system built during an AI bootcamp, connecting a Raspberry Pi camera feed to two industry platforms — PipeLogic for configurable detection pipelines and Cumulocity for IoT data and alerting.',
    detail: [
      'Set up and networked the edge hardware: a Sony camera on a Raspberry Pi, with PipeLogic’s CLI installed on the Pi to connect the camera feed into PipeLogic’s pipeline platform.',
      'Built PipeLogic pipelines for a subset of the team’s detection use cases, configuring the platform’s available YOLO and OpenCV components (selectable across S/M/L/XL model sizes) rather than training detection models from scratch.',
      'Connected pipeline output into Cumulocity, which simulates sensor data and links inputs together for automated alerts and actions.',
      'Owned the pedestrian monitoring dashboard surfacing detection results to the team.',
      'Sensor and IoT data in this exercise was simulated, not live, as is standard for this kind of bootcamp setup.',
    ],
    stack: ['Raspberry Pi', 'PipeLogic', 'Cumulocity', 'YOLO', 'OpenCV'],
    tracks: ['security'],
  },
  {
    index: '07',
    title: 'Penetration Testing & Honeypot Defense',
    period: 'ICS344 — Information Security',
    tag: 'Offense + defense',
    summary:
      'Two pieces of coursework covering both sides of the same problem: exploiting a deliberately vulnerable target, then building the defense that watches for exactly that.',
    detail: [
      'Individually: ran a structured penetration test against DVWA (Damn Vulnerable Web Application) on a Kali Linux VM, covering CSRF, reflected and stored XSS, and SQL injection up through database, table, and password enumeration.',
      'As a 4-person team: stood up a Glastopf honeypot, exploited a Metasploitable VM against it, and compared attacker behaviour against what the honeypot actually logged, closing with a defense-techniques phase and recommendations.',
    ],
    stack: ['Kali Linux', 'DVWA', 'Metasploitable', 'Glastopf', 'nmap'],
    tracks: ['security'],
  },
  {
    index: '08',
    title: 'Predictive Maintenance, from Scratch',
    period: 'COE292 — Introduction to AI',
    tag: 'ML fundamentals',
    summary:
      'Two assignments where the rule was the same: no ML libraries. Implement the algorithm yourself, then prove it works.',
    detail: [
      'Built k-NN from first principles: Euclidean and Manhattan distance functions, voting logic, verified against k = 1, 3, 5, 7.',
      'Built a feedforward neural network using only NumPy — manual forward pass, manual backpropagation via the chain rule, manual gradient descent. No PyTorch, no TensorFlow.',
    ],
    stack: ['Python', 'NumPy'],
    tracks: ['ai-ml'],
  },
  {
    index: '09',
    title: 'AI4I Predictive Maintenance',
    period: 'ISE291 — Intro to Data Science',
    tag: 'Group project',
    summary:
      'A full data science lifecycle, start to finish, on an industrial predictive-maintenance dataset — before any of the later AI coursework.',
    detail: [
      'Cleaned a malformed summary row that had been miscounted as missing data, then ran full EDA across machine sensor readings.',
      'Compared regression, classification (Decision Tree, Random Forest), and clustering (KMeans, evaluated by Silhouette/Davies-Bouldin/NMI) — and correctly argued why classification won out for this data.',
    ],
    stack: ['Python', 'pandas', 'seaborn', 'scikit-learn'],
    tracks: ['ai-ml'],
  },
  {
    index: '10',
    title: 'Course Registration Planner',
    period: 'ICS108 — Object-Oriented Programming',
    tag: 'Desktop application',
    summary:
      'A JavaFX desktop app that reads course offering and degree-plan data to help a student build a real registration schedule.',
    detail: [
      'Full OOP domain model — Student, Course, Section, Schedule — driving a CSV-backed app that filters remaining required courses, lists open sections, and builds a schedule from a selection basket.',
    ],
    stack: ['Java', 'JavaFX'],
    tracks: ['swe'],
  },
]
