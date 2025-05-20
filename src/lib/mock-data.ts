
/**
 * Mock data structures for Evidence Mapping Dashboard demonstration.
 * Covers twelve high-priority research domains.
 */

export type ResearchDomain = {
  id: string
  name: string
  methods: string[]
  targets: string[]
  matrix: number[][]
  trend: { year: number, studies: number }[]
  summary: string
  gapNotes?: string
}

export const researchDomains: ResearchDomain[] = [
  {
    id: "mental-health",
    name: "Mental Health",
    methods: ["RCT", "Survey", "Cohort", "Qualitative"],
    targets: ["Adolescents", "Adults", "Elderly", "Children"],
    matrix: [
      [8, 4, 2, 6],     // RCT
      [12, 14, 7, 10],  // Survey
      [3, 2, 1, 1],     // Cohort
      [5, 3, 2, 4],     // Qualitative
    ],
    trend: [
      { year: 2019, studies: 14 },
      { year: 2020, studies: 16 },
      { year: 2021, studies: 19 },
      { year: 2022, studies: 23 },
      { year: 2023, studies: 29 },
    ],
    summary: "Significant growth in studies targeting adolescents and adults. RCTs are increasing, but qualitative research and elderly populations remain underrepresented.",
    gapNotes: "Qualitative research with elderly is a key gap."
  },
  {
    id: "infectious-diseases",
    name: "Infectious Diseases",
    methods: ["RCT", "Observational", "Meta-analysis", "Cross-sectional"],
    targets: ["Children", "Pregnant Women", "General Population"],
    matrix: [
      [21, 7, 28],
      [13, 5, 14],
      [2, 0, 5],
      [8, 4, 10],
    ],
    trend: [
      { year: 2019, studies: 20 },
      { year: 2020, studies: 31 },
      { year: 2021, studies: 40 },
      { year: 2022, studies: 35 },
      { year: 2023, studies: 33 },
    ],
    summary: "COVID-19 led to a surge in studies in 2020-2021. Pregnant women remain an understudied target.",
    gapNotes: "Meta-analyses for pregnant women are lacking."
  },
  {
    id: "nutrition",
    name: "Nutrition",
    methods: ["RCT", "Longitudinal", "Case-control", "Cross-sectional"],
    targets: ["Infants", "Children", "Adults", "Elderly"],
    matrix: [
      [5, 7, 8, 2],
      [2, 6, 4, 1],
      [1, 1, 1, 0],
      [4, 8, 7, 2],
    ],
    trend: [
      { year: 2019, studies: 8 },
      { year: 2020, studies: 14 },
      { year: 2021, studies: 17 },
      { year: 2022, studies: 13 },
      { year: 2023, studies: 11 },
    ],
    summary: "Nutrition research is robust for children and adults. Elderly and infants are less represented, especially in longitudinal studies.",
    gapNotes: "Case-control studies for infants and elderly are a gap."
  },
  {
    id: "cancer",
    name: "Cancer",
    methods: ["RCT", "Systematic Review", "Cohort", "Case-control"],
    targets: ["Breast", "Lung", "Colorectal", "Pediatric"],
    matrix: [
      [12, 10, 7, 3],
      [6, 8, 7, 2],
      [5, 4, 3, 1],
      [4, 6, 5, 0],
    ],
    trend: [
      { year: 2019, studies: 16 },
      { year: 2020, studies: 17 },
      { year: 2021, studies: 18 },
      { year: 2022, studies: 22 },
      { year: 2023, studies: 24 },
    ],
    summary: "Breast and lung cancer are the most studied. Pediatric cancer research is notably less frequent across all methods.",
    gapNotes: "Pediatric cancer studies are a critical gap."
  },
  {
    id: "cardiovascular",
    name: "Cardiovascular Disease",
    methods: ["RCT", "Cohort", "Meta-analysis", "Case Series"],
    targets: ["Men", "Women", "Elderly"],
    matrix: [
      [10, 7, 6],
      [8, 10, 9],
      [3, 2, 1],
      [1, 0, 2],
    ],
    trend: [
      { year: 2019, studies: 11 },
      { year: 2020, studies: 13 },
      { year: 2021, studies: 16 },
      { year: 2022, studies: 21 },
      { year: 2023, studies: 20 },
    ],
    summary: "Steady increase in cohort studies. Meta-analyses and case series for elderly are rare.",
    gapNotes: "No recent case series for elderly."
  },
  {
    id: "maternal-health",
    name: "Maternal Health",
    methods: ["RCT", "Case Study", "Longitudinal", "Cross-sectional"],
    targets: ["Prenatal", "Postnatal", "Teens"],
    matrix: [
      [4, 3, 2],
      [2, 1, 1],
      [2, 1, 0],
      [6, 4, 2],
    ],
    trend: [
      { year: 2019, studies: 10 },
      { year: 2020, studies: 12 },
      { year: 2021, studies: 13 },
      { year: 2022, studies: 12 },
      { year: 2023, studies: 15 },
    ],
    summary: "Postnatal research is robust, especially via cross-sectional designs. Teens are underrepresented.",
    gapNotes: "Longitudinal studies on teens are missing."
  },
  {
    id: "neurology",
    name: "Neurology",
    methods: ["RCT", "Observational", "Case-control", "Meta-analysis"],
    targets: ["Adults", "Children", "Elderly"],
    matrix: [
      [9, 2, 3],
      [8, 3, 4],
      [2, 1, 1],
      [1, 0, 0],
    ],
    trend: [
      { year: 2019, studies: 10 },
      { year: 2020, studies: 10 },
      { year: 2021, studies: 13 },
      { year: 2022, studies: 15 },
      { year: 2023, studies: 17 },
    ],
    summary: "Adult neurology dominates research; meta-analyses and case-control for children and elderly are rare.",
    gapNotes: "Meta-analyses on non-adults needed."
  },
  {
    id: "respiratory",
    name: "Respiratory Diseases",
    methods: ["RCT", "Observational", "Longitudinal"],
    targets: ["Children", "Adults", "Elderly"],
    matrix: [
      [4, 7, 3],
      [6, 5, 2],
      [2, 1, 0],
    ],
    trend: [
      { year: 2019, studies: 6 },
      { year: 2020, studies: 10 },
      { year: 2021, studies: 12 },
      { year: 2022, studies: 15 },
      { year: 2023, studies: 14 },
    ],
    summary: "Studies are balanced between children and adults. Elderly population is under-studied across all methods.",
    gapNotes: "Longitudinal studies for elderly are absent."
  },
  {
    id: "diabetes",
    name: "Diabetes",
    methods: ["RCT", "Survey", "Cohort", "Meta-analysis"],
    targets: ["Type 1", "Type 2", "Gestational"],
    matrix: [
      [9, 11, 3],
      [12, 14, 5],
      [4, 6, 1],
      [2, 3, 0],
    ],
    trend: [
      { year: 2019, studies: 13 },
      { year: 2020, studies: 15 },
      { year: 2021, studies: 19 },
      { year: 2022, studies: 20 },
      { year: 2023, studies: 21 },
    ],
    summary: "Type 2 diabetes dominates research. Gestational diabetes is underrepresented, especially in meta-analyses.",
    gapNotes: "Meta-analyses for gestational diabetes are needed."
  },
  {
    id: "rare-diseases",
    name: "Rare Diseases",
    methods: ["Case Study", "Case Series", "Survey", "Registry"],
    targets: ["Pediatric", "Adult"],
    matrix: [
      [5, 2],
      [3, 2],
      [2, 3],
      [1, 2],
    ],
    trend: [
      { year: 2019, studies: 5 },
      { year: 2020, studies: 6 },
      { year: 2021, studies: 8 },
      { year: 2022, studies: 7 },
      { year: 2023, studies: 9 },
    ],
    summary: "Most research is in pediatric rare diseases. Registries are underutilized for adults.",
    gapNotes: "Adult registries are a gap."
  },
  {
    id: "mental-disabilities",
    name: "Mental Disabilities",
    methods: ["Survey", "Qualitative", "RCT"],
    targets: ["Children", "Adults"],
    matrix: [
      [7, 6],
      [4, 3],
      [1, 2],
    ],
    trend: [
      { year: 2019, studies: 6 },
      { year: 2020, studies: 7 },
      { year: 2021, studies: 9 },
      { year: 2022, studies: 11 },
      { year: 2023, studies: 13 },
    ],
    summary: "Research is skewed towards children and surveys. RCTs and qualitative research among adults are minimal.",
    gapNotes: "RCTs for adults are lacking."
  },
  {
    id: "substance-use",
    name: "Substance Use",
    methods: ["Survey", "Cohort", "Case-control", "Meta-analysis"],
    targets: ["Teens", "Adults", "Elderly"],
    matrix: [
      [5, 6, 2],
      [2, 4, 1],
      [1, 1, 0],
      [0, 2, 0],
    ],
    trend: [
      { year: 2019, studies: 7 },
      { year: 2020, studies: 10 },
      { year: 2021, studies: 12 },
      { year: 2022, studies: 14 },
      { year: 2023, studies: 16 },
    ],
    summary: "Adult substance use is the most studied. Teens and elderly have fewer studies, especially meta-analyses.",
    gapNotes: "Meta-analyses for teens and elderly are absent."
  },
]
