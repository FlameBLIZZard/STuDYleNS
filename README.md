# StudyLens: AI That Sees How You Learn

StudyLens is a privacy-first, AI-powered personal learning companion. Instead of simply giving students the correct answer to a homework problem, StudyLens analyzes their handwritten work, identifies the exact moment their reasoning went wrong, explains the underlying concept, and provides personalized practice to reinforce their learning.

## The Core Learning Loop

StudyLens guides students through a continuous improvement cycle:

1. **SEE (Scan Homework):** The student uploads their handwritten work.
2. **UNDERSTAND (Analysis):** The AI extracts the mathematical steps and follows the student's reasoning.
3. **TEACH (Mistake Detection & Explanation):** The AI pinpoints the exact mistake, highlights what the student did right, and explains the correction step-by-step.
4. **VERIFY (Personalized Practice):** The student receives a dynamically generated practice question targeting their specific mistake.
5. **IMPROVE (Progress):** Mastery is tracked across concepts to ensure long-term learning.

## 🚀 Hackathon Prototype & Deployment

**Live Prototype URL:** [https://good-fox-11.loca.lt](https://good-fox-11.loca.lt)

> **Note to Judges:** If you see a "Bypass" warning when opening the link, this is standard for the Localtunnel deployment. Simply click "Click to Continue" to view the application. 

### Current Prototype Behavior
To ensure a flawless and deterministic judging experience on the web, this prototype utilizes a **Deterministic Demo Fallback**. It guarantees the complete UI flow, state management, and learning loop execute perfectly without requiring backend API keys or cloud LLM latency.

## 🧠 On-Device AI Architecture

StudyLens is designed specifically for edge deployment, keeping student data entirely on-device without cloud dependencies.

**IMPLEMENTED:**
- Local AI abstraction layer (`StudyLensAI`, `LocalAIProvider`, `DemoFallbackProvider`).
- Deterministic fallback provider ensuring the hackathon demo pipeline never breaks.
- React Context mapping for injecting the active AI provider securely into the UI.

**PREPARED / ARCHITECTED:**
- ONNX Runtime integration for React Native.
- Qualcomm AI Engine Direct (QNN) Execution Provider targeting the Snapdragon NPU.

**NOT YET VERIFIED:**
- Actual QNN/NPU hardware inference (requires native Android prebuilding, which is pending localized Android SDK/NDK configuration).

## 🛠 How to run locally

### 1. Run the Web Prototype (Judging Mode)
To run the exact, polished production build as seen in the live URL:
```bash
git clone https://github.com/FlameBLIZZard/STuDYleNS.git
cd STuDYleNS
npm install
npm run web
```
*Alternatively, you can serve the static build directly:*
```bash
npm install -g serve
npx serve -s dist
```

### 2. Development Mode
```bash
npm start
```
*Press `w` to open in the browser, or scan the QR code with Expo Go to view the mobile layout.*

## 📁 Repository Structure
- `src/app/` - Expo Router screens (Dashboard, Scan, Mistake, Practice, etc.)
- `src/components/` - Reusable UI elements (NotebookPaper, UI styling)
- `src/context/` - Global state managers (Progress tracking, AI Provider selection)
- `src/ai/` - AI abstraction factory and local inference stubs
- `PROJECT_TOUR.md` - A beginner-friendly breakdown of the codebase

## 📝 Development Notes
Built with **React Native**, **Expo Router**, and **NativeWind** (Tailwind CSS v3). The UI is strictly mobile-first but is constrained gracefully on desktop browsers for testing. All state is managed locally via React Context and a global singleton to survive web SPA navigation cycles.
