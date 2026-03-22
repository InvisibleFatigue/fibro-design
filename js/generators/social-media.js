// ============================================================
// Social Media Graphics Generator
// ============================================================
import { SOCIAL_MEDIA_CONTENT, COLOR_PALETTES } from '../data/content.js';
import { downloadAsPNG, downloadAllAsPNG, printDesign } from '../export.js';

const TYPE_CONFIGS = {
  fact:      { badge: 'FACT', badgeBg: '#0d9488', badgeColor: '#fff', icon: '📊' },
  myth:      { badge: 'MYTH BUSTER', badgeBg: '#dc2626', badgeColor: '#fff', icon: '❌' },
  tip:       { badge: 'TIP', badgeBg: '#2563eb', badgeColor: '#fff', icon: '💡' },
  awareness: { badge: 'AWARENESS', badgeBg: '#7c3aed', badgeColor: '#fff', icon: '💜' },
  support:   { badge: 'SUPPORT', badgeBg: '#db2777', badgeColor: '#fff', icon: '🤝' },
  quote:     { badge: 'QUOTE', badgeBg: '#a855f7', badgeColor: '#fff', icon: '💬' },
};

const SIZES = [
  { name: 'Instagram Square (1080×1080)', aspect: '1', w: '100%' },
  { name: 'Facebook (1200×630)', aspect: '1200/630', w: '100%' },
  { name: 'Story (1080×1920)', aspect: '9/16', w: '300px' },
];

export function renderSocialMedia(container) {
  const typeOptions = [...new Set(SOCIAL_MEDIA_CONTENT.map(c => c.type))];

  container.innerHTML = `
    <div class="generator-header">
      <h2>📣 Social Media Graphics Bundle</h2>
      <p>Shareable fibromyalgia awareness graphics for Instagram, Facebook, and Stories. ${SOCIAL_MEDIA_CONTENT.length} designs ready to customize.</p>
    </div>

    <div class="controls-panel">
      <div class="controls-row">
        <div class="control-group">
          <label>Color Palette</label>
          <select id="sm-palette">
            ${COLOR_PALETTES.map((p, i) => `<option value="${i}">${p.name}</option>`).join('')}
          </select>
        </div>
        <div class="control-group">
          <label>Size</label>
          <select id="sm-size">
            ${SIZES.map((s, i) => `<option value="${i}">${s.name}</option>`).join('')}
          </select>
        </div>
        <div class="control-group">
          <label>Filter by Type</label>
          <select id="sm-filter">
            <option value="all">All Types</option>
            ${typeOptions.map(t => `<option value="${t}">${t.charAt(0).toUpperCase() + t.slice(1)}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="btn-group mt-lg">
        <button class="btn btn-primary" id="sm-generate">🔄 Generate</button>
        <button class="btn btn-teal btn-downloading" id="sm-download-all">📥 Download All PNGs</button>
        <button class="btn btn-secondary" id="sm-print">🖨️ Print</button>
      </div>
    </div>

    <div class="preview-area">
      <h3 id="sm-count">Preview</h3>
      <div class="preview-grid cols-3" id="sm-grid"></div>
    </div>
  `;

  container.querySelector('#sm-palette').addEventListener('change', generate);
  container.querySelector('#sm-size').addEventListener('change', generate);
  container.querySelector('#sm-filter').addEventListener('change', generate);
  container.querySelector('#sm-generate').addEventListener('click', generate);
  container.querySelector('#sm-download-all').addEventListener('click', () => {
    const cards = container.querySelectorAll('.social-card');
    downloadAllAsPNG(Array.from(cards), 'fibro-social');
  });
  container.querySelector('#sm-print').addEventListener('click', printDesign);

  function generate() {
    const paletteIdx = container.querySelector('#sm-palette').value;
    const sizeIdx = container.querySelector('#sm-size').value;
    const filter = container.querySelector('#sm-filter').value;
    const palette = COLOR_PALETTES[paletteIdx];
    const size = SIZES[sizeIdx];
    const grid = container.querySelector('#sm-grid');

    const filtered = filter === 'all'
      ? SOCIAL_MEDIA_CONTENT
      : SOCIAL_MEDIA_CONTENT.filter(c => c.type === filter);

    container.querySelector('#sm-count').textContent = `Preview — ${filtered.length} Graphics`;

    grid.innerHTML = filtered.map((item, i) => {
      const cfg = TYPE_CONFIGS[item.type];
      const bgStyle = `background: linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[2]});`;

      return `
        <div class="social-card" style="cursor:pointer;" data-index="${i}" title="Click to download">
          <div class="social-card-square" style="${bgStyle} color:white; aspect-ratio:${size.aspect}; width:${size.w};">
            <span class="social-type-badge" style="background:${cfg.badgeBg}; color:${cfg.badgeColor};">${cfg.icon} ${cfg.badge}</span>
            ${item.title ? `<div class="social-title">${item.title}</div>` : ''}
            <div class="social-body" style="white-space:pre-line;">${item.body}</div>
            <div class="social-hashtags">${item.hashtags}</div>
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.social-card').forEach(card => {
      card.addEventListener('click', () => {
        downloadAsPNG(card, `fibro-social-${parseInt(card.dataset.index) + 1}`);
      });
    });
  }

  generate();
}
