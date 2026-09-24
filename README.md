# Adaptive ML-KEM Dashboard v2

## What changed
- All 60 prepared replay scenarios are embedded in the dashboard.
- Larger typography and more spacious cards.
- Interactive case browser with search + filters.
- Sticky left-side decision trace showing all 7 stages and what happened in each stage.
- Run Scenario animates the seven-stage pipeline.
- Model comparison and disagreement/fallback table are computed from the 60-case master replay CSV used to build this package.

## Run
Open a terminal in this folder and run:

```powershell
python -m http.server 5500
```

Then open http://localhost:5500

## Important
The current dashboard uses offline replay / hardware-equivalent inputs. Resource benchmark numbers shown in Stage 04 are prototype modelled values, not fresh ESP32 hardware measurements. Later, the input adapter can be replaced by actual ESP32 measurements.
