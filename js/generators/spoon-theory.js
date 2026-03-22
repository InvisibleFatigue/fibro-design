// ============================================================
// Spoon Theory Visual Explainer Generator
// ============================================================
import { SPOON_ACTIVITIES, COLOR_PALETTES } from '../data/content.js';
import { downloadAsPNG, printDesign } from '../export.js';

export function renderSpoonTheory(container) {
  container.innerHTML = `
    <div class="generator-header">
      <h2>🥄 Spoon Theory Visual Explainer</h2>
      <p>An interactive and downloadable visual explanation of Spoon Theory — perfect for sharing with friends, family, and coworkers.</p>
    </div>

    <div class="controls-panel">
      <div class="controls-row">
        <div class="control-group">
          <label>Total Spoons</label>
          <input type="number" id="spoon-total" value="12" min="4" max="20">
        </div>
        <div class="control-group">
          <label>Color Palette</label>
          <select id="spoon-palette">
            ${COLOR_PALETTES.map((p, i) => `<option value="${i}">${p.name}</option>`).join('')}
          </select>
        </div>
        <div class="control-group">
          <label>View</label>
          <select id="spoon-view">
            <option value="interactive">Interactive Demo</option>
            <option value="static">Downloadable Poster</option>
          </select>
        </div>
      </div>
      <div class="btn-group mt-lg">
        <button class="btn btn-primary" id="spoon-generate">🔄 Generate</button>
        <button class="btn btn-teal btn-downloading" id="spoon-download">📥 Download PNG</button>
        <button class="btn btn-secondary" id="spoon-print">🖨️ Print</button>
      </div>
    </div>

    <div class="preview-area">
      <h3>Preview</h3>
      <div class="design-canvas" id="spoon-canvas"></div>
    </div>
  `;

  let usedSpoons = 0;

  container.querySelector('#spoon-total').addEventListener('change', generate);
  container.querySelector('#spoon-palette').addEventListener('change', generate);
  container.querySelector('#spoon-view').addEventListener('change', generate);
  container.querySelector('#spoon-generate').addEventListener('click', () => { usedSpoons = 0; generate(); });
  container.querySelector('#spoon-download').addEventListener('click', () => {
    downloadAsPNG(container.querySelector('#spoon-canvas'), 'fibro-spoon-theory');
  });
  container.querySelector('#spoon-print').addEventListener('click', printDesign);

  function generate() {
    const total = parseInt(container.querySelector('#spoon-total').value) || 12;
    const paletteIdx = container.querySelector('#spoon-palette').value;
    const view = container.querySelector('#spoon-view').value;
    const palette = COLOR_PALETTES[paletteIdx];
    const canvas = container.querySelector('#spoon-canvas');
    const c = palette.colors;

    if (view === 'interactive') {
      renderInteractive(canvas, total, c);
    } else {
      renderStatic(canvas, total, c);
    }
  }

  function renderInteractive(canvas, total, c) {
    const remaining = total - usedSpoons;

    let spoonsHtml = '';
    for (let i = 0; i < total; i++) {
      const used = i < usedSpoons;
      spoonsHtml += `<span class="spoon-icon ${used ? 'used' : ''}" title="${used ? 'Used' : 'Available'}">🥄</span>`;
    }

    canvas.innerHTML = `
      <div class="spoon-explainer">
        <div style="text-align:center; font-size:2.5rem; margin-bottom:0.5rem;">🥄</div>
        <h2 style="color:${c[0]}">The Spoon Theory</h2>
        <p class="spoon-subtitle">A metaphor for living with limited energy</p>

        <div class="spoon-intro" style="border-color:${c[1]}; background:${c[4]};">
          <strong>What is Spoon Theory?</strong> Imagine each day you start with a limited number of "spoons" — each one represents a unit of energy. Every activity you do costs spoons. When you run out, you simply <em>cannot do more</em>, no matter how much you want to. People with fibromyalgia and other chronic conditions live this reality every day.
        </div>

        <div style="text-align:center; margin-bottom:0.5rem;">
          <span style="font-size:0.85rem; font-weight:600; color:${c[0]};">
            Remaining: ${remaining} / ${total} spoons
          </span>
        </div>
        <div class="spoon-counter">${spoonsHtml}</div>
        ${remaining <= 0 ? `
          <div style="text-align:center; background:#fef2f2; border:1px solid #fecaca; border-radius:0.5rem; padding:1rem; margin-bottom:1.5rem; color:#991b1b; font-size:0.9rem;">
            ⚠️ <strong>No spoons left!</strong> This means rest is essential — not optional. There's nothing left to give.
          </div>
        ` : ''}

        <h3 style="color:${c[0]}; font-size:1rem; margin-bottom:0.75rem;">Click an activity to use spoons:</h3>
        <div class="activity-list" id="spoon-activities">
          ${SPOON_ACTIVITIES.map((a, i) => `
            <div class="activity-item" style="cursor:pointer; transition:all 0.2s;" data-cost="${a.cost}" data-index="${i}"
                 title="Costs ${a.cost} spoon${a.cost > 1 ? 's' : ''}">
              <span class="activity-category" style="background:${c[4]}; color:${c[0]};">${a.category}</span>
              <span class="activity-name">${a.activity}</span>
              <span class="activity-cost">${'🥄'.repeat(a.cost)}</span>
            </div>
          `).join('')}
        </div>

        <div style="text-align:center; margin-top:1.5rem;">
          <button id="spoon-reset" style="
            background:${c[0]}; color:white; border:none; padding:0.5rem 1.5rem;
            border-radius:2rem; cursor:pointer; font-family:inherit; font-size:0.85rem; font-weight:600;
          ">🔄 Reset Spoons (New Day)</button>
        </div>

        <div style="text-align:center; margin-top:1.5rem; font-size:0.7rem; color:#94a3b8;">
          Generated by FibroDesign • Share to spread awareness 💜
        </div>
      </div>
    `;

    // Event listeners for interactive mode
    canvas.querySelectorAll('.activity-item').forEach(item => {
      item.addEventListener('click', () => {
        const cost = parseInt(item.dataset.cost);
        if (usedSpoons + cost <= parseInt(container.querySelector('#spoon-total').value)) {
          usedSpoons += cost;
          // Flash effect
          item.style.background = c[3];
          setTimeout(() => { item.style.background = ''; }, 300);
          generate();
        } else {
          item.style.background = '#fef2f2';
          item.style.borderColor = '#fecaca';
          setTimeout(() => { item.style.background = ''; item.style.borderColor = ''; }, 500);
        }
      });
    });

    const resetBtn = canvas.querySelector('#spoon-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        usedSpoons = 0;
        generate();
      });
    }
  }

  function renderStatic(canvas, total, c) {
    canvas.innerHTML = `
      <div class="spoon-explainer">
        <div style="text-align:center; font-size:2.5rem; margin-bottom:0.5rem;">🥄</div>
        <h2 style="color:${c[0]}">The Spoon Theory</h2>
        <p class="spoon-subtitle">Understanding energy management in chronic illness</p>

        <div class="spoon-intro" style="border-color:${c[1]}; background:${c[4]};">
          <strong>What is Spoon Theory?</strong> Created by Christine Miserandino, Spoon Theory uses spoons as a metaphor for the limited energy that people with chronic illness have each day. Healthy people have an almost unlimited supply of spoons; people with fibromyalgia start with far fewer.
        </div>

        <div style="text-align:center; margin-bottom:1.5rem;">
          <div style="font-size:0.85rem; font-weight:600; color:${c[0]}; margin-bottom:0.5rem;">A typical day starts with ${total} spoons:</div>
          <div class="spoon-counter">${'<span class="spoon-icon">🥄</span>'.repeat(total)}</div>
        </div>

        <h3 style="color:${c[0]}; font-size:1rem; margin-bottom:0.75rem; text-align:center;">How Daily Activities Cost Spoons</h3>
        <div class="activity-list">
          ${SPOON_ACTIVITIES.map(a => `
            <div class="activity-item">
              <span class="activity-category" style="background:${c[4]}; color:${c[0]};">${a.category}</span>
              <span class="activity-name">${a.activity}</span>
              <span class="activity-cost">${'🥄'.repeat(a.cost)}</span>
            </div>
          `).join('')}
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-top:2rem;">
          <div style="background:${c[4]}; border-radius:0.75rem; padding:1rem; text-align:center;">
            <div style="font-size:1.5rem; margin-bottom:0.25rem;">💡</div>
            <strong style="color:${c[0]}; font-size:0.85rem;">What Helps</strong>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.25rem;">Pacing, planning, resting before exhaustion, and asking for help.</p>
          </div>
          <div style="background:${c[4]}; border-radius:0.75rem; padding:1rem; text-align:center;">
            <div style="font-size:1.5rem; margin-bottom:0.25rem;">❤️</div>
            <strong style="color:${c[0]}; font-size:0.85rem;">How to Support</strong>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.25rem;">Believe them, offer flexibility, don't judge their choices.</p>
          </div>
        </div>

        <div style="text-align:center; margin-top:2rem; padding:1rem; background:linear-gradient(135deg, ${c[0]}, ${c[1]}); border-radius:0.75rem; color:white;">
          <p style="font-size:0.85rem; font-weight:600;">"But you don't look sick…" — The most common, most hurtful thing a spoonie hears.</p>
        </div>

        <div style="text-align:center; margin-top:1.5rem; font-size:0.7rem; color:#94a3b8;">
          Generated by FibroDesign • Share to spread awareness 💜
        </div>
      </div>
    `;
  }

  generate();
}
