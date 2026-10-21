import { Dumbbell, Activity, Flame, Layers, Sun, MoonStar } from "lucide-react";

export const prdMetadata = {
  title: "FitSync — Web Workout Logger & Social PRD",
  subtitle:
    "Responsive web application for multi-modality workout tracking, desktop/tablet logging dashboards, and head-to-head friend analytics.",
  version: "1.0.0",
  status: "In Review",
  author: "Product Team",
  stakeholders: [
    { name: "Sinan Khalid", role: "Lead Web/Frontend Engineer" },
    { name: "Marcus Mance", role: "UI/UX Lead" },
  ],
};

export const problemAndGoals = {
  problemStatement:
    "Existing fitness applications focus heavily on post-workout analytics rather than live active logging. Athletes who train in home gyms with desktop setups, laptop browser stations, or tablets find mobile apps cumbersome and lack dedicated web interfaces with keyboard shortcuts, multi-monitor data dashboards, and real-time social comparison widgets.",

  solutionOverview:
    "FitSync unifies strength, endurance, class, and hybrid routines into a web-first workout logger. It provides a keyboard-driven active logger UI, persistent tab-switching background timers with Web Audio/Notification API integration, and rich desktop analytics dashboards.",

  kpis: [
    {
      metric: "Workout Completion Rate",
      target: "> 75%",
      description:
        "Percentage of started web logger sessions fully completed and saved.",
    },
    {
      metric: "Log Entry Speed",
      target: "< 3.0 seconds",
      description:
        "Average time to log a set using keyboard navigation and shortcuts.",
    },
    {
      metric: "Social Virality & Adoption",
      target: "45% in 14 Days",
      description:
        "Web users who share a comparison link or add a friend within two weeks.",
    },
    {
      metric: "30-Day Retention",
      target: "> 40%",
      description:
        "Monthly active web users returning to log at least 2 workouts per week.",
    },
  ],
};

export const workoutModalities = [
  {
    id: "resistance",
    description:
      "Designed for weightlifting, powerlifting, and bodyweight strength. Automatic 1RM estimation, incremental weight controls, and PR badges.",
    name: "Resistance",
    icon: <Dumbbell className="w-5 h-5" />,
    tagline: "Weightlifting, Powerlifting, Hypertrophy",
    color: "emerald",
    inputs: [
      "Reps Completed",
      "Weight (kg / lbs)",
      "RPE (Rate of Perceived Exertion)",
      "Calculated 1RM",
    ],
    timerBehavior:
      "Auto-starting rest countdown timer (configurable, default 90s) with Web Audio chime and desktop notifications.",
    exampleExercises: [
      "Barbell Bench Press",
      "Squat",
      "Romanian Deadlift",
      "Pull-ups",
    ],
  },
  {
    id: "cardio",
    description:
      "Tailored for continuous aerobic efforts with auto-calculated split paces, heart rate zone mapping, and elevation tracking.",
    name: "Cardio",
    icon: <Activity className="w-5 h-5" />,
    tagline: "Running, Cycling, Rowing, Swimming",
    color: "sky",
    inputs: [
      "Distance (km / mi)",
      "Average Pace (min/km)",
      "Heart Rate (BPM)",
      "Elevation Gain",
    ],
    timerBehavior:
      "Continuous elapsed session stopwatch with split/lap triggers.",
    exampleExercises: [
      "5k Outdoor Run",
      "Zone 2 Cycling",
      "2000m Row Ergometer",
    ],
  },
  {
    id: "aerobics",
    description:
      "Structured for high-intensity group training, rhythm classes, and metabolic conditioning with interval cues.",
    name: "Aerobics",
    icon: <Flame className="w-5 h-5" />,
    tagline: "Group Classes, Spin, Dance, Rhythm",
    color: "purple",
    inputs: [
      "Class Duration",
      "Average & Peak BPM",
      "Target Cadence",
      "Estimated Active Calories",
    ],
    timerBehavior:
      "HIIT round timer with periodic work/rest browser sound effects and tab title updates.",
    exampleExercises: ["Spin Class", "Step Aerobics", "Zumba", "BodyPump"],
  },
  {
    id: "hybrid",
    description:
      "Designed for functional fitness, cross-training, and multi-discipline events requiring combined strength and cardio logging.",
    name: "Hybrid",
    icon: <Layers className="w-5 h-5" />,
    tagline: "CrossFit, Hyrox, Functional Fitness, Circuit Training",
    color: "amber",
    inputs: [
      "Multi-Segment Metrics",
      "Block Transition Times",
      "Total Round Time",
    ],
    timerBehavior:
      "Multi-stage timer switching automatically between exercise stopwatches and rest/transition countdowns.",
    exampleExercises: [
      "Hyrox Simulation",
      "CrossFit WOD",
      "Kettlebell Circuit",
    ],
  },
];

export const featureSpecifications = {
  activeLogger: {
    title: "Web Active Workout Logger & Timers",
    requirements: [
      "Web Worker background timer that keeps ticking accurately when browser tabs are inactive or minimized.",
      "Keyboard shortcut controls (Space to log set, Enter to advance) and Web Audio rest chime alerts.",
      "Automatic IndexedDB draft recovery to prevent data loss on browser refresh.",
    ],
  },
  historyAndAnalytics: {
    title: "Workout History & Desktop Analytics Dashboards",
    requirements: [
      "Interactive calendar heatmap view showing monthly volume and workout completion status.",
      "Progress dashboards charting Estimated 1RM and total weight volume over custom date ranges.",
      "CSV export option for downloading raw personal workout data.",
    ],
  },
  socialAndFriends: {
    title: "Friend Ecosystem & Head-to-Head Web Feed",
    requirements: [
      "Side-by-side modal view for comparing lift statistics head-to-head with friends.",
      "Social activity feed featuring friend workout summaries, comments, and 'Kudos' reactions.",
      "Shareable permalinks with custom link previews for social platforms like Discord or Slack.",
    ],
  },
};

export const userStories = [
  {
    id: "US-001",
    category: "Logger & Timers",
    role: "as a weightlifter training at my desk/home gym",
    action:
      "I want to log sets using keyboard shortcuts and hear an audio chime when rest finishes",
    benefit:
      "I can log workouts from my browser without reaching for my phone.",
    acceptanceCriteria: [
      "Pressing Space checks off the active set and starts the rest countdown.",
      "Browser Tab title updates dynamically with live countdown.",
      "Web Audio chime plays even if another browser tab is currently active.",
    ],
  },
  {
    id: "US-002",
    category: "Workout Modalities",
    role: "as a hybrid athlete using a browser/tablet stand",
    action:
      "I want a side-by-side dashboard layout for lifting sets and cardio segments",
    benefit:
      "I can manage complex functional workouts cleanly on wider desktop/tablet viewports.",
    acceptanceCriteria: [
      "Selecting 'Hybrid' layout displays a two-column or split-view editor on desktop viewports.",
      "User can seamlessly switch input types between set/rep grids and cardio interval cards.",
    ],
  },
  {
    id: "US-003",
    category: "Social & Friends",
    role: "as a web user",
    action:
      "I want to generate a public link to my workout summary or lift comparison",
    benefit:
      "I can share my achievements easily across Discord, Slack, or social media.",
    acceptanceCriteria: [
      "Clicking 'Share' generates a unique permalink.",
      "Shared pages render optimized meta tags (OG images/title) for link previews.",
    ],
  },
];

export const technicalSchema = {
  workoutEntity: {
    workout_id: "w_882910",
    user_id: "usr_40192",
    title: "Monday Upper Body & Row",
    workout_type: "HYBRID", // RESISTANCE | CARDIO | AEROBICS | HYBRID
    start_time: "2026-10-19T14:30:00Z",
    end_time: "2026-10-19T15:32:00Z",
    total_duration_seconds: 3720,
    exercises: [
      {
        exercise_id: "ex_bench_press",
        exercise_name: "Barbell Bench Press",
        category: "RESISTANCE",
        sets: [
          {
            set_number: 1,
            reps: 10,
            weight_kg: 80.0,
            completed: true,
            rest_seconds: 90,
          },
          {
            set_number: 2,
            reps: 8,
            weight_kg: 85.0,
            completed: true,
            rest_seconds: 120,
          },
        ],
      },
      {
        exercise_id: "ex_row_erg",
        exercise_name: "Concept2 Row Ergometer",
        category: "CARDIO",
        metrics: {
          distance_meters: 2000,
          elapsed_seconds: 435,
          avg_pace_per_500m: "1:48.7",
          avg_heart_rate_bpm: 162,
        },
      },
    ],
  },
  friendComparisonPayload: {
    user_a_id: "usr_40192",
    user_b_id: "usr_77210",
    exercise_id: "ex_bench_press",
    comparison: {
      user_a_1rm_kg: 112.5,
      user_b_1rm_kg: 120.0,
      delta_kg: -7.5,
      last_updated: "2026-10-18T18:20:00Z",
    },
  },
};

export const scopeAndRisks = {
  inScope: [
    "Responsive React web application (Desktop, Tablet, Mobile browser).",
    "Web Worker background timers with Web Audio API & Notification API integrations.",
    "Keyboard-driven logger UI with accessibility standards (WCAG 2.1 AA).",
    "IndexedDB client-side cache for offline logging & auto-draft recovery.",
    "Desktop history analytics dashboard and friend comparison modal.",
  ],
  outOfScopeV1: [
    "Native iOS/Android mobile apps or smartwatch apps (v2 pipeline).",
    "Direct Bluetooth LE device pairing for HR straps (manual input or Health Connect export in v1).",
    "Calorie/Macro meal planning toolset.",
    "Native video streaming hosting (embed support only).",
  ],
  technicalRisks: [
    {
      risk: "Browser Tab Rest Timer Delay",
      impact: "High",
      mitigation:
        "Use Web Workers to keep timers running smoothly when switching tabs.",
    },
    {
      risk: "Accidental Tab Close Data Loss",
      impact: "Medium",
      mitigation:
        "Autosave workout progress to localStorage and trigger browser close warnings.",
    },
  ],
};
