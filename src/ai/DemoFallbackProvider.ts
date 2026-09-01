import { StudyLensAI, AnalysisResult, Explanation, PracticeProblem } from './types';

export class DemoFallbackProvider implements StudyLensAI {
  isLocal = false;
  modelName = "Deterministic Fallback (Mock)";

  async analyzeSubmission(imageUrl: string): Promise<AnalysisResult> {
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2400));
    
    return {
      steps: [
        { id: "1", expression: "2x + 3 = 11", isCorrect: true },
        { id: "2", expression: "2x = 11 - 3", isCorrect: true },
        { id: "3", expression: "2x = 8", isCorrect: true },
        { id: "4", expression: "x = 3", isCorrect: false }
      ],
      mistakeStepId: "4"
    };
  }

  async explainMistake(analysis: AnalysisResult): Promise<Explanation> {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      correctPart: "You correctly reached 2x = 8.",
      mistakeDescription: "But when isolating x, you divided incorrectly.",
      correction: "x = 4",
      takeaway: "Whatever you do to one side of an equation, do to the other."
    };
  }

  async generatePractice(concept: string): Promise<PracticeProblem> {
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
      equation: "3x + 5 = 20",
      focus: "Solving linear equations",
      correctAnswer: "5"
    };
  }
}
