// ============================================================
// Inspirational Quote Cards Generator
// ============================================================
import { QUOTES, COLOR_PALETTES } from '../data/content.js';
import { downloadAsPNG, downloadAllAsPNG, printDesign } from '../export.js';

const BACKGROUNDS = [
  { name: 'Gradient', value: 'gradient' },
  { name: 'Solid', value: 'solid' },
  { name: 'Watercolor Effect', value: 'watercolor' },
];

function getGradientStyle(palette, bgType) {
  const c = palette.colors;
  switch (bgType) {
    case 'gradient':
      return `background: linear-gradient(135deg, ${c[0]}, ${c[2]}, ${c[4]}); color: white;`;
    case 'watercolor':
      return `background:
        radial-gradient(ellipse at 20% 30%, ${c[1]}88 0%, transparent 60%),
        radial-gradient(ellipse at 80% 70%, ${c[2]}66 0%, transparent 50%),
        radial-gradient(ellipse at 50% 50%, ${c[3]}44 0%, transparent 70%),
        ${c[4]}; color: ${c[0]};`;
    case 'solid':
    default:
      return `background: ${c[4]}; color: ${c[0]};`;
  }
}

export function renderQuoteCards(container) {
  container.innerHTML = `
    <div class="generator-header">
      <h2>💬 Inspirational Quote Cards</h2>
      <p>Beautiful quote cards with fibromyalgia-specific encouraging messages. Download individually or as a batch.</p>
    </div>

    <div class="controls-panel">
      <div class="controls-row">
        <div class="control-group">
          <label>Color Palette</label>
          <select id="quote-palette">
            ${COLOR_PALETTES.map((p, i) => `<option value="${i}">${p.name}</option>`).join('')}
          </select>
        </div>
        <div class="control-group">
          <label>Background Style</label>
          <select id="quote-bg">
            ${BACKGROUNDS.map(b => `<option value="${b.value}">${b.name}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="btn-group mt-lg">
        <button class="btn btn-primary" id="quote-generate">🔄 Generate All</button>
        <button class="btn btn-teal btn-downloading" id="quote-download-all">📥 Download All PNGs</button>
        <button class="btn btn-secondary" id="quote-print">🖨️ Print</button>
      </div>
    </div>

    <div class="preview-area">
      <h3>Preview — ${QUOTES.length} Cards</h3>
      <div class="preview-grid cols-3" id="quote-grid"></div>
    </div>
  `;

  container.querySelector('#quote-palette').addEventListener('change', generate);
  container.querySelector('#quote-bg').addEventListener('change', generate);
  container.querySelector('#quote-generate').addEventListener('click', generate);
  container.querySelector('#quote-download-all').addEventListener('click', () => {
    const cards = container.querySelectorAll('.quote-card');
    downloadAllAsPNG(Array.from(cards), 'fibro-quote');
  });
  container.querySelector('#quote-print').addEventListener('click', printDesign);

  function generate() {
    const paletteIdx = container.querySelector('#quote-palette').value;
    const bgType = container.querySelector('#quote-bg').value;
    const palette = COLOR_PALETTES[paletteIdx];
    const grid = container.querySelector('#quote-grid');

    grid.innerHTML = QUOTES.map((q, i) => {
      const style = getGradientStyle(palette, bgType);
      const author = q.author ? `<div class="quote-author">— ${q.author}</div>` : '';
      return `
        <div class="quote-card" style="${style}" data-index="${i}">
          <div class="quote-decoration" style="top:-0.5rem;left:0.5rem;">"</div>
          <div class="quote-text">${q.text}</div>
          ${author}
          <div class="quote-decoration" style="bottom:-1rem;right:0.5rem;">"</div>
        </div>
      `;
    }).join('');

    // Individual download handlers
    grid.querySelectorAll('.quote-card').forEach(card => {
      card.style.cursor = 'pointer';
      card.title = 'Click to download this card';
      card.addEventListener('click', () => {
        downloadAsPNG(card, `fibro-quote-${parseInt(card.dataset.index) + 1}`);
      });
    });
  }

  generate();
}
