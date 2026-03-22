// ============================================================
// Symptom Tracker Generator
// ============================================================
import { downloadAsPNG, printDesign } from '../export.js';

export function renderSymptomTracker(container) {
  container.innerHTML = `
    <div class="generator-header">
      <h2>📋 Printable Symptom Trackers</h2>
      <p>Generate daily or weekly pain scales, fatigue monitors, and medication trackers. Print-ready designs.</p>
    </div>

    <div class="controls-panel">
      <div class="controls-row">
        <div class="control-group">
          <label>Tracker Type</label>
          <select id="tracker-type">
            <option value="daily">Daily Tracker</option>
            <option value="weekly">Weekly Tracker</option>
          </select>
        </div>
        <div class="control-group">
          <label>Accent Color</label>
          <input type="color" id="tracker-color" value="#7e22ce">
        </div>
        <div class="control-group">
          <label>Sections</label>
          <div class="chip-group">
            <button class="chip active" data-section="pain">Pain Scale</button>
            <button class="chip active" data-section="fatigue">Fatigue</button>
            <button class="chip active" data-section="medication">Medication</button>
            <button class="chip active" data-section="sleep">Sleep</button>
            <button class="chip active" data-section="notes">Notes</button>
          </div>
        </div>
      </div>
      <div class="btn-group mt-lg">
        <button class="btn btn-primary" id="tracker-generate">🔄 Generate</button>
        <button class="btn btn-teal btn-downloading" id="tracker-download">📥 Download PNG</button>
        <button class="btn btn-secondary" id="tracker-print">🖨️ Print</button>
      </div>
    </div>

    <div class="preview-area">
      <h3>Preview</h3>
      <div class="design-canvas" id="tracker-canvas"></div>
    </div>
  `;

  const chips = container.querySelectorAll('.chip[data-section]');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      generate();
    });
  });

  container.querySelector('#tracker-type').addEventListener('change', generate);
  container.querySelector('#tracker-color').addEventListener('input', generate);
  container.querySelector('#tracker-generate').addEventListener('click', generate);
  container.querySelector('#tracker-download').addEventListener('click', () => {
    const canvas = container.querySelector('#tracker-canvas');
    downloadAsPNG(canvas, 'fibro-symptom-tracker');
  });
  container.querySelector('#tracker-print').addEventListener('click', printDesign);

  function getActiveSections() {
    return Array.from(container.querySelectorAll('.chip.active[data-section]'))
      .map(c => c.dataset.section);
  }

  function generate() {
    const type = container.querySelector('#tracker-type').value;
    const color = container.querySelector('#tracker-color').value;
    const sections = getActiveSections();
    const canvas = container.querySelector('#tracker-canvas');

    const isWeekly = type === 'weekly';
    const days = isWeekly ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] : ['Today'];
    const title = isWeekly ? 'Weekly Symptom Tracker' : 'Daily Symptom Tracker';
    const dateStr = isWeekly ? 'Week of: ___________________' : 'Date: ___________________';

    let html = `<div class="tracker-page" style="--purple-700:${color}; --purple-200:${color}33; --purple-50:${color}0d;">`;
    html += `<h2 style="color:${color}">${title}</h2>`;
    html += `<div class="tracker-date-range">${dateStr}</div>`;

    if (sections.includes('pain')) {
      html += `<div class="tracker-section"><h3 style="border-color:${color}33">Pain Level (0-10)</h3>`;
      for (const day of days) {
        html += `<div class="pain-scale-row"><label>${day}</label><div class="pain-dots">`;
        for (let i = 0; i <= 10; i++) {
          const dotColor = i <= 3 ? '#4ade80' : i <= 6 ? '#facc15' : '#f87171';
          html += `<div class="pain-dot" style="border-color:${dotColor}40; color:${dotColor}">${i}</div>`;
        }
        html += `</div></div>`;
      }
      html += `</div>`;
    }

    if (sections.includes('fatigue')) {
      html += `<div class="tracker-section"><h3 style="border-color:${color}33">Energy / Fatigue Level</h3>`;
      const times = isWeekly ? days : ['Morning', 'Midday', 'Afternoon', 'Evening', 'Night'];
      for (const t of times) {
        html += `<div class="pain-scale-row"><label>${t}</label><div class="pain-dots">`;
        const labels = ['🔋', '', '', '', '', '🪫'];
        for (let i = 0; i < 6; i++) {
          html += `<div class="pain-dot" style="border-color:${color}33">${labels[i] || i}</div>`;
        }
        html += `</div></div>`;
      }
      html += `</div>`;
    }

    if (sections.includes('medication')) {
      html += `<div class="tracker-section"><h3 style="border-color:${color}33">Medication Tracker</h3>`;
      html += `<table class="med-table"><thead><tr>
        <th style="background:${color}0d; color:${color}; border-color:${color}22">Medication</th>
        <th style="background:${color}0d; color:${color}; border-color:${color}22">Dose</th>
        <th style="background:${color}0d; color:${color}; border-color:${color}22">Time Taken</th>
        <th style="background:${color}0d; color:${color}; border-color:${color}22">Side Effects</th>
      </tr></thead><tbody>`;
      for (let i = 0; i < 5; i++) {
        html += `<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>`;
      }
      html += `</tbody></table></div>`;
    }

    if (sections.includes('sleep')) {
      html += `<div class="tracker-section"><h3 style="border-color:${color}33">Sleep Quality</h3>`;
      const sleepDays = isWeekly ? days : ['Last Night'];
      for (const d of sleepDays) {
        html += `<div class="pain-scale-row"><label>${d}</label>
          <div style="display:flex; gap:0.5rem; font-size:0.85rem; color:#475569;">
            Bedtime: ______ &nbsp; Wake: ______ &nbsp; Hours: ____ &nbsp; Quality:
            <div class="pain-dots">
              <div class="pain-dot" style="border-color:#a78bfa40">😫</div>
              <div class="pain-dot" style="border-color:#a78bfa40">😕</div>
              <div class="pain-dot" style="border-color:#a78bfa40">😐</div>
              <div class="pain-dot" style="border-color:#a78bfa40">🙂</div>
              <div class="pain-dot" style="border-color:#a78bfa40">😴</div>
            </div>
          </div>
        </div>`;
      }
      html += `</div>`;
    }

    if (sections.includes('notes')) {
      html += `<div class="tracker-section"><h3 style="border-color:${color}33">Notes & Observations</h3>`;
      html += `<div class="notes-lines">`;
      for (let i = 0; i < 5; i++) html += `<div class="note-line"></div>`;
      html += `</div></div>`;
    }

    html += `<div style="text-align:center; margin-top:1.5rem; font-size:0.7rem; color:#94a3b8;">
      Generated by FibroDesign • fibromyalgia awareness & self-care tools</div>`;
    html += `</div>`;

    canvas.innerHTML = html;
  }

  generate();
}
