export type Step = {
  id: string;
  expression: string;
  isCorrect: boolean;
};

export type AnalysisResult = {
  steps: Step[];
  mistakeStepId?: string;
};

export type Explanation = {
  correctPart: string;
  mistakeDescription: string;
  correction: string;
  takeaway: string;
};

export type PracticeProblem = {
  equation: string;
  focus: string;
  correctAnswer: string;
};

export interface StudyLensAI {
  isLocal: boolean;
  modelName: string;
  analyzeSubmission(imageUrl: string): Promise<AnalysisResult>;
  explainMistake(analysis: AnalysisResult): Promise<Explanation>;
  generatePractice(concept: string): Promise<PracticeProblem>;
}
