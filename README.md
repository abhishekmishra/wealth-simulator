# Wealth Simulation Explorer

## 🧠 Purpose
To visualize how multiplicative gains and losses evolve wealth over time in non-ergodic systems. This tool helps users intuitively understand how the *geometric mean*, *variance*, and *sequence of gains/losses* matter more than average outcomes in these contexts.

---

## 🌟 Goals

- Allow users to simulate multiple wealth paths under user-defined return parameters.
- Compare *ensemble average* to individual outcomes over time.
- Support multiple simulation instances on a single page.
- Enable loading of example scenarios into the main simulator interactively.
- Keep the solution lightweight, embeddable, and fully client-side.

---

## 🛠️ Technology Stack

- **JavaScript + HTML** (no frameworks, build steps, or backend)
- **Apache ECharts** for plotting
- **Self-contained**: suitable for use in static websites (e.g., GitHub Pages)

---

## 🔧 Key Components

### 1. **Simulation API**

A reusable JS function:

```js
simulateWealth({
  gain: 1.15,
  loss: 0.85,
  probGain: 0.5,
  years: 50,
  simulations: 20,
  target: document.getElementById('target-div')
});
```

- Handles simulation logic
- Configures and renders chart via ECharts in the target HTML element
- Designed to support multiple independent calls per page

### 2. **Main Simulator UI (Live Controls)**

- Displayed at the top of the page
- UI controls for:
  - Gain multiplier
  - Loss multiplier
  - Probability of gain
  - Years
  - Number of paths
- Re-runs simulation when values change

### 3. **Gallery of Example Simulations**

- Each example is rendered into its own `<div>` on page load
- Parameters are stored as JSON in a `data-params` attribute
- Double-clicking an example:
  - Loads its parameters into the main simulator’s inputs
  - Re-renders the main simulator using those values

HTML sketch:

```html
<!-- Main Simulator -->
<div id="main-sim"></div>

<!-- Gallery -->
<div id="example-gallery">
  <div class="sim-example" data-params='{"gain":1.2,"loss":0.8,"probGain":0.5}'></div>
  <div class="sim-example" data-params='{"gain":1.1,"loss":0.9,"probGain":0.4}'></div>
</div>
```

---

## 📀 Code Structure (Modular Files)

| File           | Responsibility                                               |
|----------------|-------------------------------------------------------------|
| `simulate.js`  | Exports `simulateWealth()` — core simulation + chart logic   |
| `ui.js`        | Manages input bindings, double-clicks, preset loading       |
| `index.html`   | Lays out UI and loads the modules                           |
| `style.css`    | (Optional) Light layout styling                             |
| `data.js`      | (Optional) Contains named preset examples                   |

---

## 🧮 Simulation Algorithm

1. Initialize `initialWealth = 100`
2. For each of N simulations:
   - Repeat for `years`:
     - Randomly apply `gain` or `loss` multiplier based on `probGain`
3. Collect and plot:
   - All individual paths
   - Average/median trajectory
   - Optionally use log scale

---

## 🛠️ Optional Enhancements (Future)

- Log vs linear toggle
- Median path + confidence intervals
- Animation of path unfolding over time
- Button to download chart image
- "Compare two strategies" mode

