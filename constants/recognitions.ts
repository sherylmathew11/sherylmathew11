export type RecognitionItem = {
  title: string;
  highlight?: boolean;
  spotAwardLink?: string; // Added optional link property
};

export const recognitions: RecognitionItem[] = [
  {
    title:
      "Recognized with a Spot Award at Deloitte for high-quality analysis, attention to detail, and adaptability",
    highlight: true,
    spotAwardLink: "/images/SpotAward.jpg", // Linked the asset path here
  },
  {
    title:
      "Published Human Activity Recognition research as a public arXiv preprint (methodology, experiments, and results)",
  },
];