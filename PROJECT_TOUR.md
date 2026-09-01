# Welcome to Your New Project

## 1. What does this project do?
StudyLens is like having a really smart, patient tutor living inside your phone. Imagine you're doing your math homework, and you get stuck or get the wrong answer. Instead of just telling you the right answer (which doesn't really help you learn), StudyLens looks at your handwritten work through your phone's camera. 

It reads your steps, figures out exactly where you made a mistake, and explains it to you in simple terms. Then, it gives you a brand new, similar problem to practice on. By catching the exact moment your thinking went off track, StudyLens helps you actually understand the concepts instead of just memorizing answers.

## 2. How it works behind the scenes
Right now, this prototype is a mobile app. Think of it like a series of interactive flashcards. When you open the app, you see a Dashboard that welcomes you. You click a button to "Scan Homework."

In the real version, the phone's camera would take a picture and an AI would read the handwriting. For this early prototype, we use "mock data"—which just means pretend information that looks real, so we can test how the app feels. The app pretends to scan your work, shows you an analysis screen, highlights a fake mistake, and walks you through an explanation. It all happens inside your phone, moving you from screen to screen to show off the "learning loop": seeing the work, detecting the mistake, explaining it, and practicing a new problem.

## 3. The Technology Stack
- **React Native with Expo:** This is the main framework we are using to build the app. It lets us write code once and run it on both Android and iPhones, making it super fast to build mobile apps.
- **Expo Router:** This is a tool that handles moving between different screens (like going from the Dashboard to the Scan screen). We chose it because it organizes screens in a very simple, easy-to-read folder structure.
- **NativeWind (Tailwind CSS):** This is a styling tool that lets us easily change colors, add spacing, and make things look pretty just by adding simple words to our code. We chose it because it's the fastest way to make a clean, modern, premium-looking design without writing huge files of custom styles.

## 4. Where to find things
- **/app:** This is the most important folder! Every file in here represents a different screen in the app. If you see a file named `index.tsx`, that's the Home/Dashboard screen. If you see `scan.tsx`, that's the Scan Homework screen.
- **/components:** This folder holds smaller pieces of the app that we might reuse in different places, like buttons or special cards.
- **/constants:** This is where we keep colors, fonts, and dummy data (our pretend homework problems) so we can use them easily throughout the app.
- **package.json:** This is like the recipe book for the project. It lists all the different tools and libraries (like React Native and NativeWind) that the app needs to run properly.

## 5. On-device AI architecture
StudyLens is designed as a privacy-first, on-device application. No student imagery or math work is sent to cloud LLMs (like OpenAI or Gemini).

**What runs locally:**
Everything. All logic, UI state, progress tracking, and component rendering happens securely on the phone. The architecture includes an abstraction factory (\StudyLensAI\) designed to load local inference providers.

**What is currently mocked:**
Because standard Expo Go and web browsers cannot securely or natively load raw C++ ML frameworks (like ONNX Runtime with Qualcomm NPU delegation) out of the box, the prototype uses a \DemoFallbackProvider\. This provider simulates the exact AI pipeline deterministically (extracting steps, finding mistake step 4, explaining division rules) so the live hackathon demo never fails.

**What requires a native Android build:**
To swap out the mock for the real \LocalAIProvider\, we need to compile a Custom Expo Dev Client (\
px expo run:android\) that embeds \eact-native-onnxruntime\. 

**What hardware acceleration is supported (Planned):**
When running a compiled Android build on devices like the iQOO, the ONNX Runtime will be configured to use the **QNN Execution Provider (Qualcomm AI Engine Direct)**. This allows the small model (e.g., Phi-3-mini or a specialized math model) to run directly on the Snapdragon NPU, ensuring ultra-low latency inference without draining the main CPU/battery.
