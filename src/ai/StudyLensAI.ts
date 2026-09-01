import { StudyLensAI } from './types';
import { LocalAIProvider } from './LocalAIProvider';
import { DemoFallbackProvider } from './DemoFallbackProvider';

/**
 * Factory to determine which AI provider to use.
 * 
 * If genuine local inference is available (Custom Dev Client with ONNX/QNN),
 * it uses LocalAIProvider.
 * Otherwise, it gracefully falls back to DemoFallbackProvider to ensure
 * the hackathon demo never crashes.
 */
export async function createStudyLensAI(): Promise<StudyLensAI> {
  const localProvider = new LocalAIProvider();
  
  try {
    // Attempt to initialize the local native model
    await localProvider.initModel();
    // If it succeeds, use it
    return localProvider;
  } catch (error) {
    console.log("Local AI unavailable, falling back to deterministic demo:", error);
    // Fallback to deterministic mock
    return new DemoFallbackProvider();
  }
}
