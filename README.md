# StudyLens

> **AI that understands *how* you solved the problem—not just whether you got it wrong.**

StudyLens is a phone-first intelligent learning companion that analyzes a student's work, identifies where their reasoning changed, explains the underlying mistake, generates targeted practice, and tracks improvement.

Unlike traditional educational tools that focus purely on answers:
- **Traditional:** Question → Answer → Correct/Incorrect
- **StudyLens:** Student Work → Reasoning → Mistake → Explanation → Practice → Improvement

![Expo](https://img.shields.io/badge/Expo-1C1E24?style=flat-square&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)

---

## See StudyLens in action

**Student submits their handwritten work:**
```text
Solve for x:
2x + 3 = 11
2x = 11 - 3
2x = 8
x = 3
```

**StudyLens identifies the exact flaw in reasoning:**
> **Step 4 — `x = 3`**

**StudyLens explains the concept step-by-step:**
> "You correctly simplified the equation to `2x = 8`. But when isolating x, you need to divide both sides by 2."
> `2x = 8`
> `÷2   ÷2`
> `x = 4`

**StudyLens generates targeted practice based on that specific error:**
> "Let's reinforce this. Find x:"
> `3x + 5 = 20`
> Student enters: `5`

**StudyLens verifies and updates mastery:**
> **Solving Linear Equations: 75%**

StudyLens does not merely detect that the final answer is wrong. It identifies the point in the student's reasoning where the mistake occurred and turns that mistake into a personalized learning opportunity.

---

## Live Prototype

**Deployment-ready for Vercel.** A permanent public URL will be added once the repository is connected to Vercel.

You can instantly deploy the exact production build using Vercel:

1. Import this GitHub repository into the Vercel Dashboard.
2. Ensure the Framework Preset is either **Other** or **None**.
3. **Build Command:** `npx expo export -p web`
4. **Output Directory:** `dist`

The repository already contains a `vercel.json` configured with `"cleanUrls": true` to properly route all deep links for the statically exported Expo Router frontend.

---

## Why StudyLens?

Students frequently receive feedback exclusively at the answer level: *"Correct"* or *"Wrong"*.

But an incorrect answer does not explain:
- where the reasoning changed
- why the step was invalid
- what concept the student misunderstood
- what they should practice next

StudyLens focuses entirely on the student's **PROCESS**. By capturing handwritten steps, we can offer the targeted, empathetic feedback of a private tutor, scaled to every student.

---

## Core Learning Loop

**01 — Capture**
Student submits handwritten work.

**02 — Understand**
StudyLens interprets the student's sequence of steps.

**03 — Detect**
The system identifies the exact point where reasoning changed.

**04 — Explain**
The student sees why the step was problematic and how to correct it.

**05 — Practice**
StudyLens gives a targeted problem based on the detected weakness.

**06 — Verify**
The student demonstrates that they can apply the concept.

**07 — Progress**
The improvement is reflected in their persistent learning state.

---

## What Makes It Different

1. **Process-aware feedback:** Not just answer checking.
2. **Targeted remediation:** Practice is tied directly to the student's actual mistake.
3. **Closed learning loop:** Detection → Explanation → Practice → Verification → Progress.
4. **Phone-first experience:** Designed around capturing work and learning organically on a mobile device.
5. **Privacy-oriented architecture:** The intended architecture keeps student work local wherever practical, leveraging on-device ML.

---

## On-Device AI Architecture

Our vision is a fully private, edge-deployed intelligence pipeline:
`Student Work` → `Local Vision / OCR` → `Structured Mathematical Steps` → `Local Reasoning Model` → `Mistake Detection` → `Explanation` → `Targeted Practice`

Here is our absolute transparency on the current prototype state:

**IMPLEMENTED:**
- AI provider abstraction (`StudyLensAI`).
- `LocalAIProvider` architecture.
- `DemoFallbackProvider` for offline deterministic testing.
- Secure React Context provider switching.
- Deterministic offline demo path.

**PREPARED:**
- ONNX Runtime integration architecture for React Native.
- QNN execution-provider architecture for Qualcomm processors.
- Native Android inference path scaffolding.

**NOT YET VERIFIED:**
- Actual ONNX model inference on Android.
- Actual QNN execution.
- Actual Snapdragon NPU acceleration.
- Production handwriting OCR model.

**CURRENT WEB DEMO:**
The browser uses the deterministic fallback provider. This is intentional because it guarantees a reliable hackathon demo without requiring cloud APIs, network latency, or native ML bindings. The UI accurately displays **DEMO FALLBACK** in the developer footer.

---

## Architecture

```text
studylens/
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx          (Dashboard)
│   │   ├── scan.tsx           (Capture)
│   │   ├── analysis.tsx       (Understand)
│   │   ├── mistake.tsx        (Detect)
│   │   ├── explanation.tsx    (Explain)
│   │   ├── practice.tsx       (Practice)
│   │   ├── verification.tsx   (Verify)
│   │   └── progress.tsx       (Progress)
│   ├── ai/
│   │   ├── types.ts
│   │   ├── StudyLensAI.ts
│   │   ├── LocalAIProvider.ts
│   │   └── DemoFallbackProvider.ts
│   ├── components/
│   │   └── NotebookPaper.tsx  (Realistic handwriting component)
│   └── context/
│       ├── AIContext.tsx
│       └── ProgressContext.tsx (Global state singleton)
├── app.json                   (Expo configuration)
├── vercel.json                (Deployment routing)
└── PROJECT_TOUR.md            (Beginner-friendly codebase guide)
```

- **app/:** The Expo Router file-based routing architecture for every screen in the learning loop.
- **ai/:** The abstraction factory isolating the deterministic UI from the planned ONNX/NPU layers.
- **context/:** Global singleton state that survives React DOM unmounts and web SPA routing cycles.
- **components/:** Shared layout and presentation elements.

---

## Tech Stack

- **React Native**
- **Expo**
- **Expo Router** (File-based native routing)
- **TypeScript**
- **NativeWind** (Tailwind CSS v3)
- **React Native Reanimated** (Used for hero moments and disclosure animations)
- **ONNX Runtime Architecture** (Prepared/Scaffolded)

---

## Run Locally

You can run the web prototype locally in less than a minute.

```bash
git clone https://github.com/FlameBLIZZard/STuDYleNS.git
cd STuDYleNS
npm install
npm start
```

Press `w` in the terminal to open the web prototype.

**Production Web Export:**
To generate the statically exported production build:
```bash
npx expo export -p web
```

*(Note: Android local inference requires additional native tooling; see below).*

---

## Running the native AI path

**Experimental / in development**

Executing the fully native ONNX/QNN pipeline requires a complete Android native toolchain:
- Android Studio & Android SDK
- JDK 17
- NDK (for C++ ML bindings)
- USB debugging for physical devices or a hardware-accelerated emulator
- Expo development build (prebuilding the native project)

**Intended commands:**
```bash
npx expo prebuild
npx expo run:android
```
*(Note: These commands have not yet been successfully executed end-to-end on our current development machine due to environment constraints).*

---

## Demo Mode

To ensure a seamless, robust evaluation process, the prototype is equipped with a deterministic fallback provider. 

**Why it exists:**
- Reliable hackathon demonstration.
- Zero cloud dependencies or API keys required.
- No network requirement.
- A 100% consistent judging experience.
- Allows rapid UI and learning-loop development while the complex native ONNX inference is being integrated.

The developer indicator at the bottom of the Dashboard reports `AI Provider: DEMO FALLBACK` and does not falsely claim active QNN/NPU execution.

---

## Product Roadmap

- [x] Core learning loop
- [x] Scan experience
- [x] Mistake visualization
- [x] Step-by-step explanation
- [x] Personalized practice
- [x] Verification
- [x] Progress tracking
- [x] Local AI provider abstraction
- [x] Deterministic offline fallback
- [x] Vercel deployment configuration
- [ ] Real handwriting OCR
- [ ] Verified local ONNX inference on Android
- [ ] Verified QNN execution
- [ ] Verified Snapdragon NPU acceleration
- [ ] Broader subject support
- [ ] Expanded adaptive learning model

---

## Privacy

The intended architecture is local-first: student work should remain on-device wherever the implementation permits. 

**The current web prototype does not send homework to a cloud AI API.** All deterministic evaluation logic currently runs strictly on the client.

---

## Hackathon Context

StudyLens was conceived with the iQOO Hackathon in mind, emphasizing:
- **Phone-first learning**
- **On-device intelligence**
- **Local inference & privacy**
- **Real-time educational feedback**

While the robust UI and abstraction layers are completed, direct integration with hardware-accelerated local inference (such as the Snapdragon NPU via QNN) is currently *architecturally prepared* but remains unverified in this initial prototype.

---

## Contributing / Development

- Keep AI providers strictly behind the `StudyLensAI` abstraction layer.
- Keep the `DemoFallbackProvider` perfectly reliable for web/offline testing.
- Do not introduce cloud AI dependencies (e.g., OpenAI/Anthropic APIs) without explicit architectural justification; we are building an edge-first product.
- Keep student data local where practical.
- **Do not commit model binaries** (`.onnx`, `.bin`, etc.) to the repository.
- Do not commit secrets or `.env` files.
- Use the existing Git workflow and adhere to the established `.gitignore`.

---

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

---

## Final Project Status

- **Status:** Competition-ready web prototype
- **Core learning loop:** Implemented
- **Web demo:** Deterministic / offline
- **Local AI architecture:** Prepared
- **Android native inference:** Not yet verified
- **QNN / NPU:** Not yet verified
- **Cloud AI:** Not used
