export type Visual =
  | { type: 'chart'; src: string; alt: string }
  | { type: 'screenshot'; src: string; alt: string }
  | { type: 'code'; code: string; lang: string }
  | { type: 'pending'; note: string }

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
  visual: Visual
}

const tournamentCode = `public abstract class Tournament implements Serializable {
    private ArrayList<Participant> participants = new ArrayList<>();
    private boolean teamBased;
    private Sport sport;
    private Participant winner;

    public abstract void viewTournament();

    public static ArrayList<Tournament> readTournamentFile(String fileName){
        ArrayList<Tournament> tournamentList = new ArrayList<>();
        try(ObjectInputStream objInStream =
                new ObjectInputStream(new FileInputStream(fileName))){
            try{
                while(true){
                    Object obj = objInStream.readObject();
                    if(obj instanceof Elimination){
                        tournamentList.add((Elimination) obj);
                    }
                    else{
                        tournamentList.add((RoundRobin) obj);
                    }
                }
            }
            catch(EOFException ex){}
        }
        catch(Exception ex){
            System.out.println(ex);
        }
        return tournamentList;
    }
}`

const dictionaryCode = `public void addWord(String s) throws WordAlreadyExistsException {
    try {
        dict.insertAVL(s);
    }
    catch (IllegalArgumentException ex) {
        throw new WordAlreadyExistsException();
    }
}

public boolean findWord(String s) {
    return dict.search(s);
}

public void deleteWord(String s) throws WordNotFoundException {
    try {
        dict.deleteAVL(s);
    }
    catch (NoSuchElementException ex) {
        throw new WordNotFoundException();
    }
}`

const plannerCode = `public class App extends Application {
    File courseOffering = new File("CourseOffering.csv");
    File degreePlan = new File("DegreePlanCSV.csv");
    File finishedCoursesFile = new File("FinishedCourses.csv");

    Student student =
        new Student(finishedArray(finishedCoursesFile), "M");
    Course[] CoursesInPlan = planExtractor(degreePlan);
    String[] offeredCoursesNames = offeredCourses(courseOffering);

    Section[] sections = displayedSections(
        courseOffering, offeredCoursesNames,
        CoursesInPlan, student
    );
}`

export const projects: Project[] = [
  {
    index: '01',
    title: 'SAIL Dashboard',
    period: 'Saudi Aramco, Jun–Aug 2024',
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
    visual: { type: 'screenshot', src: 'sail-dashboard.jpg', alt: 'SAIL analytics dashboard showing project status, NPV, and technology track breakdown (scrubbed demo data)' },
  },
  {
    index: '02',
    title: 'EEG-Controlled Prosthetic Arm',
    period: 'Senior Capstone',
    tag: 'Applied ML / embedded',
    summary:
      'A six-class motor-imagery classifier reading live EEG signals to drive a prosthetic arm in real time, built after extensive iteration across feature representations and model families.',
    detail: [
      'Iterated across several feature representations, including raw-signal, band-power, and CSP (Common Spatial Pattern) features, and across several model families, before arriving at a hybrid feature extractor and a simpler model that performed best.',
      'Addressed class imbalance with SMOTE, then reduced dimensionality with PCA before final classification.',
      'Final pipeline: an ensemble (Random Forest, XGBoost, KNN) reached approximately 72% accuracy on a 6-class IEEE benchmark dataset.',
      'Designed a two-stage real-time architecture for deployment: a lightweight binary gatekeeper continuously checks for motor-imagery intent, only triggering the full 6-class classifier once intent is detected, which keeps compute load and false actuation low.',
      'Deployed on a Raspberry Pi against a MindRove EEG headset: Butterworth band-pass filtering, missing-channel interpolation, and z-score normalization feed the cascaded classifiers, with per-stage latency profiled live and the resulting command sent over serial to the prosthetic’s motors.',
    ],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'MNE', 'imbalanced-learn', 'Raspberry Pi'],
    metric: '~72% accuracy, 6-class IEEE benchmark',
    tracks: ['featured', 'ai-ml'],
    visual: { type: 'chart', src: 'eeg-model-accuracy.png', alt: 'Bar chart comparing accuracy across the models tried during iteration' },
  },
  {
    index: '03',
    title: 'Build-It',
    period: 'Team project (4–5 people)',
    tag: 'Full-stack + LLM integration',
    summary:
      'A PC-building and community platform where users configure builds and get AI-estimated performance, alongside a social layer for sharing and discussing builds.',
    detail: [
      'Owned the community/user-interaction layer: a tag-filtered post feed with live counts, multi-field search, image uploads, view-count tracking, and a full comment system, all gated behind authentication.',
      'The team’s build-estimation feature uses the OpenAI API with carefully engineered prompts to return structured, validated performance estimates for a user’s selected components.',
      'Backend: Node.js, Express, MongoDB via Mongoose, Passport.js authentication.',
      'Delivered as part of a multi-person team using Git for version control throughout.',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Passport.js', 'Git'],
    repo: { url: 'https://github.com/Feras532/build-it', label: 'Team repository' },
    tracks: ['featured', 'swe'],
    visual: { type: 'screenshot', src: 'buildit-main.jpg', alt: 'Build-It landing page' },
  },
  {
    index: '04',
    title: 'Codvel',
    period: 'Personal project',
    tag: 'Gamified learning platform',
    summary:
      'Codvel turns learning a programming language or library into a game. Users pick a topic, take a practice quiz generated specifically for it, and earn experience points and rewards as their skill grows.',
    detail: [
      'Three connected services work together: a website for users, a server that manages accounts and progress, and a separate AI service that writes new quiz questions on demand.',
      'The AI service reads real, public code examples for a chosen topic and uses them to generate a fresh set of multiple-choice, true/false, fill-in-the-blank, and short-answer questions each time, rather than pulling from a fixed question bank.',
      'A full points-and-rewards system sits on top: completing quizzes earns experience points, unlocks levels, cosmetic rewards, and a place on a leaderboard.',
      'Only the AI question-generation service is public and runnable right now. The rest of the platform is not yet deployed for public use.',
    ],
    stack: ['Next.js', 'Express', 'PostgreSQL', 'FastAPI', 'ChromaDB', 'Ollama / Llama 3'],
    repo: { url: 'https://github.com/afateel2/codvel_AI', label: 'AI service repository' },
    tracks: ['ai-ml'],
    visual: { type: 'screenshot', src: 'codvel-search.jpg', alt: 'Codvel skillset search page' },
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
    visual: { type: 'code', code: tournamentCode, lang: 'java' },
  },
  {
    index: '06',
    title: 'Smart Road Safety System',
    period: 'AgentIQ Bootcamp, NITA',
    tag: 'IoT integration / edge deployment',
    summary:
      'A three-phase NITA program, run in collaboration with Cumulocity and PipeLogic, moving through Business, Technical, and Project stages and culminating in a team-built Road Safety System for intersection safety and emergency response coordination.',
    detail: [
      'As a team, built three coordinated pieces: real-time safety monitoring at intersections, automated accident detection with instant alerts, and a unified control center with dynamic routing for emergency services.',
      'Owned the pedestrian safety and intersection monitoring piece: integrated a Sony camera on a Raspberry Pi into the PipeLogic detection pipeline, implemented real-time pedestrian counting and unsafe-crossing detection, and built a dashboard translating sensor data into actionable safety metrics.',
      'Sensor and IoT data in this exercise was simulated, not live, as is standard for this kind of program setup.',
    ],
    stack: ['Raspberry Pi', 'PipeLogic', 'Cumulocity', 'YOLO', 'OpenCV'],
    tracks: ['security'],
    visual: { type: 'screenshot', src: 'roadsafety-home.jpg', alt: 'Smart Road Safety System dashboard home' },
  },
  {
    index: '07',
    title: 'Penetration Testing & Honeypot Defense',
    period: 'ICS344, Information Security',
    tag: 'Offense + defense',
    summary:
      'A 4-person team project split across two phases: an initial attack phase against an undefended machine, then a defense phase replicating that same attack chain against a SIEM-monitored honeypot to see what actually gets detected.',
    detail: [
      'Phase 1, carried out by teammates: an attack chain (Caldera-driven TTPs, SQL injection, and an automated reconnaissance script) run against an undefended Metasploitable VM, with no honeypot or monitoring in place.',
      'Phase 2, owned and run individually end to end: built a 3-VM lab from scratch on a personal VirtualBox setup, a Kali attacker, a Glastopf honeypot, and a Wazuh SIEM, then replicated the team’s phase 1 attack chain against the honeypot while the SIEM monitored the network and logged the Kali VM’s activity.',
      'Compared what the SIEM actually detected against what the attacker VM was really doing, closing with a defense-techniques and recommendations write-up.',
    ],
    stack: ['Kali Linux', 'VirtualBox', 'Wazuh', 'Caldera', 'Glastopf', 'Metasploitable'],
    tracks: ['security'],
    visual: { type: 'screenshot', src: 'pentest-nmap.jpg', alt: 'nmap scan output from the penetration testing assignment' },
  },
  {
    index: '08',
    title: 'Uber Ride Data Analysis',
    period: 'ICS474, Big Data Analytics',
    tag: '3-person group project',
    summary:
      'A full analysis of 1,155 real Uber trips, cleaning, exploration, and modeling, done as a 3-person team.',
    detail: [
      'Cleaned and validated the dataset ahead of analysis to avoid skewed results.',
      'Full EDA across trip category, purpose, distance, and time-of-day, followed by SMOTE-balanced classification, regression with coefficient analysis, and decision-tree feature importance.',
    ],
    stack: ['Python', 'pandas', 'seaborn', 'imbalanced-learn'],
    tracks: ['ai-ml'],
    visual: { type: 'chart', src: 'uber-eda.png', alt: 'Exploratory data analysis plots from the Uber ride dataset' },
  },
  {
    index: '09',
    title: 'AI4I Predictive Maintenance',
    period: 'ISE291, Intro to Data Science',
    tag: 'Group project',
    summary:
      'A full data science lifecycle, start to finish, on an industrial predictive-maintenance dataset, completed before any of the later AI coursework.',
    detail: [
      'Cleaned and validated the dataset, then ran full EDA across the machine’s sensor readings.',
      'Compared regression, classification (Decision Tree, Random Forest), and clustering (KMeans, evaluated by Silhouette, Davies-Bouldin, and NMI scores).',
    ],
    stack: ['Python', 'pandas', 'seaborn', 'scikit-learn'],
    tracks: ['ai-ml'],
    visual: { type: 'chart', src: 'ai4i-eda.png', alt: 'Exploratory data analysis plots from the AI4I predictive maintenance dataset' },
  },
  {
    index: '10',
    title: 'Course Registration Planner',
    period: 'ICS108, Object-Oriented Programming',
    tag: 'Desktop application',
    summary:
      'A JavaFX desktop app that reads course offering and degree-plan data to help a student build a real registration schedule.',
    detail: [
      'Full OOP domain model (Student, Course, Section, Schedule) driving a CSV-backed app that filters remaining required courses, lists open sections, and builds a schedule from a selection basket.',
    ],
    stack: ['Java', 'JavaFX'],
    tracks: ['swe'],
    visual: { type: 'code', code: plannerCode, lang: 'java' },
  },
  {
    index: '11',
    title: 'Weather Forecasting',
    period: 'ISE487, Predictive Analytics Techniques',
    tag: 'Time series',
    summary:
      'Hourly weather data, forecast two ways: classical statistics and a neural network, compared head to head.',
    detail: [
      'Diagnosed non-stationarity via ACF and STL decomposition, then compared 9 Holt-Winters exponential smoothing variants, selecting the best by AIC.',
      'Built an LSTM forecaster from the same data using manual time-delay embedding, and compared its error against the classical models on held-out data.',
    ],
    stack: ['Python', 'statsmodels', 'TensorFlow/Keras'],
    tracks: ['ai-ml'],
    visual: { type: 'chart', src: 'weather-forecast.png', alt: 'Actual versus forecasted values from the weather time-series model' },
  },
  {
    index: '12',
    title: 'Coronary Heart Disease Risk Modeling',
    period: 'STAT413, Statistical Modelling & Inference',
    tag: 'Biostatistics',
    summary:
      'A properly validated logistic regression study of heart disease risk on the WCGS dataset (3,154 men followed for 8.5 years).',
    detail: [
      'Built four nested models, demographic through behavioral, selecting and validating by AIC, residual deviance, and AUC-ROC (0.62 for the simplest model, up to 0.755 for the full model).',
      'Confirmed goodness-of-fit on every model with the Hosmer-Lemeshow test, then identified age, cholesterol, blood pressure, smoking, and Type A behavior as the significant risk factors.',
    ],
    stack: ['R', 'Logistic regression', 'AUC-ROC', 'Hosmer-Lemeshow'],
    tracks: ['ai-ml'],
    visual: { type: 'chart', src: 'chd-roc.png', alt: 'ROC curves for the four nested logistic regression models, AUC 0.620 to 0.755' },
  },
  {
    index: '13',
    title: 'Dictionary, Backed by a Self-Built AVL Tree',
    period: 'ICS202, Data Structures',
    tag: 'Core data structures',
    summary:
      'A dictionary class backed by a generic, self-built AVL tree (not a library tree), with a full written complexity analysis.',
    detail: [
      'Generic self-implemented AVL tree (not java.util) backing add/find/delete word operations, all O(log n), plus file-based construction that loads a word list straight into the tree.',
      'A "find similar words" feature built on a self-implemented singly linked list, and a written complexity analysis covering every operation from construction through search.',
    ],
    stack: ['Java', 'AVL Tree', 'Linked Lists'],
    tracks: ['swe'],
    visual: { type: 'code', code: dictionaryCode, lang: 'java' },
  },
]
