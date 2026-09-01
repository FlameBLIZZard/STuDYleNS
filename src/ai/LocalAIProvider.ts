import { Platform } from 'react-native';
import { StudyLensAI, AnalysisResult, Explanation, PracticeProblem } from './types';

/**
 * ARCHITECTURE NOTE for LocalAIProvider:
 * 
 * To run genuine local inference leveraging the iQOO Snapdragon NPU, 
 * this provider is designed to integrate with `react-native-onnxruntime`.
 * 
 * Technical Blocker in Current Expo Go / Web Environment:
 * `react-native-onnxruntime` and `llama.rn` require custom native C++ compilation (JNI/NDK).
 * Expo Go cannot dynamically load native C++ ML modules.
 * To execute this on an actual device, we must build a Custom Expo Dev Client (`npx expo run:android`).
 * 
 * Furthermore, utilizing the NPU requires the ONNX Runtime QNN (Qualcomm AI Engine Direct) Execution Provider,
 * which requires building ONNX Runtime from source with QNN support for Android.
 * 
 * Therefore, this class represents the architectural interface for native inference.
 * In the current prototype, the factory will gracefully degrade to DemoFallbackProvider.
 */

export class LocalAIProvider implements StudyLensAI {
  isLocal = true;
  modelName = "Phi-3-mini-4k-instruct-onnx (QNN Accelerated)";

  // In a real native build, we would hold an OnnxRuntime Session here.
  // private session: any;

  async initModel() {
    if (Platform.OS === 'web') {
      throw new Error("Native ONNX Runtime not available in browser. Use Transformers.js for web or fallback.");
    }
    // throw new Error("Native modules missing in standard Expo Go. Requires Custom Dev Client.");
    console.warn("LocalAIProvider initialized (Native integration pending).");
  }

  async analyzeSubmission(imageUrl: string): Promise<AnalysisResult> {
    throw new Error("Local inference requires native ONNX runtime (Pending Custom Dev Client build).");
  }

  async explainMistake(analysis: AnalysisResult): Promise<Explanation> {
    throw new Error("Local inference requires native ONNX runtime (Pending Custom Dev Client build).");
  }

  async generatePractice(concept: string): Promise<PracticeProblem> {
    throw new Error("Local inference requires native ONNX runtime (Pending Custom Dev Client build).");
  }
}
