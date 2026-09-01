<div align="center">
  
# StudyLens

**AI that sees how you learn.**

*Student reasoning > final answer.*

StudyLens is a phone-first intelligent learning companion that analyzes a student's work, identifies where their reasoning changed, explains the underlying mistake, generates targeted practice, and tracks improvement.

![Expo](https://img.shields.io/badge/Expo-1C1E24?style=flat-square&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)

</div>

---

## Try the Prototype

> **Deployment-ready for Vercel.** A permanent public URL will be added once the repository is connected to Vercel.

**Vercel Deployment Instructions:**
1. Import this GitHub repository into the Vercel Dashboard.
2. Ensure the Framework Preset is either **Other** or **None**.
3. **Build Command:** `npx expo export -p web`
4. **Output Directory:** `dist`

*(The repository contains a `vercel.json` configured with `"cleanUrls": true` to properly route deep links natively for the statically exported Expo Router).*

---

## Product Preview

*(Note: Add actual product screenshots to `docs/screenshots/` before final judging).*

| Dashboard | Scan Homework | Mistake Detection |
| :---: | :---: | :---: |
| ![Dashboard](docs/screenshots/1-dashboard.svg) | ![Scan](docs/screenshots/2-scan.svg) | ![Detect](docs/screenshots/3-detect.svg) |
| *View your overall mastery.* | *Show StudyLens how you solved it.* | *StudyLens identifies the exact step where reasoning changed.* |

| Explanation | Personalized Practice | Progress |
| :---: | :---: | :---: |
| ![Explanation](docs/screenshots/4-explain.svg) | ![Practice](docs/screenshots/5-practice.svg) | ![Progress](docs/screenshots/6-progress.svg) |
| *Instead of revealing an answer, it explains why the step was incorrect.* | *Targeted practice reinforces the exact concept behind the mistake.* | *Watch your mastery grow over time.* |

---

## The Difference

**Traditional Homework Checking:**
```mermaid
graph LR
    A["Question"] --> B["Answer"]
    B --> C["Correct / Incorrect"]
```

**StudyLens:**
```mermaid
graph LR
    A["Student Work"] --> B["Reasoning"]
    B --> C["Exact Mistake"]
    C --> D["Explanation"]
    D --> E["Targeted Practice"]
    E --> F["Verification"]
    F --> G["Improvement"]
```

---

## One Mistake. One Learning Loop.

See StudyLens in action.

**Student submits their handwritten work:**
```text
Solve for x:
2x + 3 = 11
2x = 11 - 3
2x = 8
x = 3
```

**Detected:**
> **Step 4 — `x = 3`**

**Correct reasoning:**
> `2x = 8`
> `/2   /2`
> `x = 4`

**Personalized Practice:**
> `3x + 5 = 20`
> `x = 5`

**Mastery:**
> **75%**

---

## The StudyLens Learning Loop

```mermaid
graph TD
    A["01 - Capture"] --> B["02 - Understand"]
    B --> C["03 - Detect"]
    C --> D["04 - Explain"]
    D --> E["05 - Practice"]
    E --> F["06 - Verify"]
    F --> G["07 - Improve"]
```

- **Capture:** Student submits handwritten work.
- **Understand:** StudyLens interprets the student's sequence of steps.
- **Detect:** The system identifies the exact point where reasoning changed.
- **Explain:** The student sees why the step was problematic and how to correct it.
- **Practice:** StudyLens gives a targeted problem based on the detected weakness.
- **Verify:** The student demonstrates that they can apply the concept.
- **Improve:** The improvement is reflected in their learning state.

---

## Designed Around How Students Actually Learn

1. **Process over answers:** We evaluate how a student thinks, not just the final number they produce.
2. **Teach the mistake:** We intercept learning at the exact moment of misunderstanding.
3. **Practice the weakness:** Remediation is deeply personalized to the student's actual error.
4. **Verify understanding:** Students must demonstrate mastery before moving forward.
5. **Track improvement:** A persistent learning state ensures long-term educational growth.

---

## Technical Status

| Capability | Status |
| :--- | :--- |
| Core learning loop | **Implemented** |
| Scan experience | **Implemented** |
| Mistake visualization | **Implemented** |
| Step-by-step explanation | **Implemented** |
| Personalized practice | **Implemented** |
| Verification | **Implemented** |
| Progress tracking | **Implemented** |
| Deterministic offline demo | **Implemented** |
| Local AI abstraction | **Implemented** |
| ONNX Runtime architecture | *Prepared* |
| QNN execution | *Prepared / Not verified* |
| Snapdragon NPU inference | *Not verified* |
| Real handwriting OCR | *Not yet implemented* |
| Cloud AI API | *Not used* |

---

## On-Device AI Architecture

```mermaid
graph TD
    A["Student Work"] --> B["Local Vision / OCR"]
    B --> C["Structured Mathematical Steps"]
    C --> D["Local Reasoning Model"]
    D --> E["Mistake Detection"]
    E --> F["Explanation"]
    F --> G["Targeted Practice"]
    G --> H["Progress"]
    
    subgraph web_demo ["WEB DEMO"]
    I["DemoFallbackProvider"]
    end
    
    subgraph native_path ["NATIVE PATH"]
    J["LocalAIProvider"]
    K["ONNX Runtime architecture"]
    L["QNN architecture"]
    M["NPU execution NOT YET VERIFIED"]
    end
    
    I -.->|IMPLEMENTED| D
    J -.->|PREPARED| D
    K -.->|PREPARED| J
    L -.->|PREPARED| K
    M -.->|NOT VERIFIED| L
```

### Current Implementation:
- **IMPLEMENTED:** AI provider abstraction, `LocalAIProvider`, `DemoFallbackProvider`.
- **PREPARED:** ONNX Runtime integration, QNN execution provider.
- **NOT YET VERIFIED:** Actual Android QNN execution and Snapdragon NPU acceleration.

---

## Why Local AI?

- Student work can remain on-device where practical, prioritizing privacy.
- No cloud dependency is required for the current deterministic demo.
- Native inference creates a path toward extremely low-latency educational feedback.
- Qualcomm/QNN hardware acceleration is a core architectural target for the final product.

*The current web prototype uses the deterministic fallback provider. Actual Android QNN/NPU execution has not yet been verified.*

---

## Built for the iQOO Hackathon

StudyLens leans heavily into themes central to the modern mobile ecosystem:
- **Phone-first learning**
- **On-device intelligence**
- **Local inference**
- **Potential NPU acceleration**
- **Real-time feedback**
- **Privacy-oriented architecture**

*(Note: Direct iQOO NPU integration is prepared architecturally but not yet verified in this prototype).*

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

---

## Running the native AI path

**Experimental / in development**

Executing the fully native ONNX/QNN pipeline requires a complete Android native toolchain:
- Android Studio & Android SDK
- JDK 17
- NDK (for C++ ML bindings)
- USB debugging for physical devices or a hardware-accelerated emulator
- Expo development build (prebuilding the native project)

*Note: Expo Go cannot load arbitrary native C++ ML bindings.*

**Intended commands:**
```bash
npx expo prebuild
npx expo run:android
```
*(These commands have not yet been successfully executed end-to-end on our current development machine due to environment constraints).*

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

**The current web prototype does not send homework to a cloud AI API.**

---

## Contributing / Development

- Keep AI providers strictly behind the `StudyLensAI` abstraction layer.
- Keep the `DemoFallbackProvider` perfectly reliable for web/offline testing.
- Do not introduce cloud AI dependencies without explicit architectural justification.
- Keep student data local where practical.
- Do not commit model binaries.
- Do not commit secrets.
- Use the existing Git workflow.

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
