# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## On-device AI architecture
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
