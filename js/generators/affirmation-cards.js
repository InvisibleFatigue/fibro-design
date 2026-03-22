// ============================================================
// Daily Affirmation Cards Generator
// ============================================================
import { AFFIRMATIONS, COLOR_PALETTES } from '../data/content.js';
import { downloadAsPNG, downloadAllAsPNG, printDesign } from '../export.js';

export function renderAffirmationCards(container) {
  container.innerHTML = `
    <div class="generator-header">
      <h2>🌸 Daily Affirmation Cards</h2>
      <p>A 30-card set of supportive affirmations for chronic illness. Print, cut, and use daily — or download individually.</p>
    </div>

    <div class="controls-panel">
      <div class="controls-row">
        <div class="control-group">
          <label>Color Palette</label>
          <select id="aff-palette">
            ${COLOR_PALETTES.map((p, i) => `<option value="${i}">${p.name}</option>`).join('')}
          </select>
        </div>
        <div class="control-group">
          <label>Layout</label>
          <select id="aff-layout">
            <option value="grid">Print Grid (6 per page)</option>
            <option value="single">Individual Cards</option>
          </select>
        </div>
      </div>
      <div class="btn-group mt-lg">
        <button class="btn btn-primary" id="aff-generate">🔄 Generate</button>
        <button class="btn btn-teal btn-downloading" id="aff-download">📥 Download PNG</button>
        <button class="btn btn-secondary" id="aff-print">🖨️ Print</button>
      </div>
    </div>

    <div class="preview-area">
      <h3>Preview — 30 Affirmation Cards</h3>
      <div id="aff-canvas"></div>
    </div>
  `;

  container.querySelector('#aff-palette').addEventListener('change', generate);
  container.querySelector('#aff-layout').addEventListener('change', generate);
  container.querySelector('#aff-generate').addEventListener('click', generate);
  container.querySelector('#aff-download').addEventListener('click', () => {
    const layout = container.querySelector('#aff-layout').value;
    if (layout === 'grid') {
      const pages = container.querySelectorAll('.affirmation-page');
      downloadAllAsPNG(Array.from(pages), 'fibro-affirmations-page');
    } else {
      const cards = container.querySelectorAll('.affirmation-card-single');
      downloadAllAsPNG(Array.from(cards), 'fibro-affirmation');
    }
  });
  container.querySelector('#aff-print').addEventListener('click', printDesign);

  function generate() {
    const paletteIdx = container.querySelector('#aff-palette').value;
    const layout = container.querySelector('#aff-layout').value;
    const palette = COLOR_PALETTES[paletteIdx];
    const canvas = container.querySelector('#aff-canvas');
    const c = palette.colors;

    if (layout === 'grid') {
      // Print-ready grid: 6 cards per page
      const pages = [];
      for (let page = 0; page < Math.ceil(AFFIRMATIONS.length / 6); page++) {
        const slice = AFFIRMATIONS.slice(page * 6, (page + 1) * 6);
        pages.push(`
          <div class="design-canvas affirmation-page" style="margin-bottom:1.5rem;">
            <div style="padding:1.5rem;">
              <div style="text-align:center; margin-bottom:1rem;">
                <span style="font-size:0.75rem; color:${c[0]}; font-weight:600; text-transform:uppercase; letter-spacing:0.1em;">
                  Daily Affirmation Cards — Page ${page + 1}
                </span>
              </div>
              <div class="affirmation-grid-print">
                ${slice.map((a, i) => {
                  const num = page * 6 + i + 1;
                  return `
                    <div class="affirmation-card" style="border-color:${c[3]};">
                      <span class="affirmation-number" style="color:${c[2]};">#${num}</span>
                      <div class="affirmation-text" style="color:${c[0]};">${a}</div>
                      <span class="affirmation-deco" style="color:${c[3]};">✦ ✦ ✦</span>
                    </div>
                  `;
                }).join('')}
              </div>
              <div style="text-align:center; margin-top:1rem; font-size:0.65rem; color:#94a3b8;">
                ✂️ Cut along the borders • FibroDesign
              </div>
            </div>
          </div>
        `);
      }
      canvas.innerHTML = pages.join('');
    } else {
      // Individual large cards
      canvas.innerHTML = `<div class="preview-grid cols-3">
        ${AFFIRMATIONS.map((a, i) => `
          <div class="design-canvas affirmation-card-single" style="cursor:pointer;" data-index="${i}">
            <div style="
              background: linear-gradient(135deg, ${c[4]}, ${c[3]});
              padding: 2.5rem 1.5rem;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 220px;
            ">
              <div style="font-size:1.5rem; margin-bottom:1rem; color:${c[1]};">🌸</div>
              <div style="
                font-family: 'Playfair Display', serif;
                font-size: 1.05rem;
                font-style: italic;
                color: ${c[0]};
                line-height: 1.6;
                max-width: 260px;
              ">${a}</div>
              <div style="margin-top:1rem; font-size:0.7rem; color:${c[2]}; font-weight:600; letter-spacing:0.08em;">
                AFFIRMATION #${i + 1}
              </div>
            </div>
          </div>
        `).join('')}
      </div>`;

      canvas.querySelectorAll('.affirmation-card-single').forEach(card => {
        card.title = 'Click to download';
        card.addEventListener('click', () => {
          downloadAsPNG(card, `fibro-affirmation-${parseInt(card.dataset.index) + 1}`);
        });
      });
    }
  }

  generate();
}
