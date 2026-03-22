// ============================================================
// Phone Wallpaper Generator
// ============================================================
import { WALLPAPER_MESSAGES, COLOR_PALETTES } from '../data/content.js';
import { downloadAsPNG, downloadAllAsPNG } from '../export.js';

const WALLPAPER_STYLES = [
  {
    name: 'Gradient Wave',
    render: (colors) => `
      background: linear-gradient(160deg, ${colors[0]} 0%, ${colors[1]} 30%, ${colors[2]} 60%, ${colors[3]} 100%);
    `,
  },
  {
    name: 'Radial Glow',
    render: (colors) => `
      background: radial-gradient(circle at 50% 40%, ${colors[1]} 0%, ${colors[0]} 60%, ${colors[0]}dd 100%);
    `,
  },
  {
    name: 'Diagonal Split',
    render: (colors) => `
      background: linear-gradient(135deg, ${colors[0]} 0%, ${colors[0]} 40%, ${colors[2]} 40%, ${colors[3]} 100%);
    `,
  },
  {
    name: 'Mesh',
    render: (colors) => `
      background:
        radial-gradient(at 0% 0%, ${colors[1]}99 0%, transparent 50%),
        radial-gradient(at 100% 0%, ${colors[2]}99 0%, transparent 50%),
        radial-gradient(at 100% 100%, ${colors[3]}99 0%, transparent 50%),
        radial-gradient(at 0% 100%, ${colors[1]}66 0%, transparent 50%),
        ${colors[0]};
    `,
  },
  {
    name: 'Aurora',
    render: (colors) => `
      background:
        linear-gradient(180deg, ${colors[0]} 0%, transparent 40%),
        radial-gradient(ellipse 80% 40% at 50% 60%, ${colors[2]}aa 0%, transparent 70%),
        radial-gradient(ellipse 60% 30% at 30% 50%, ${colors[1]}88 0%, transparent 60%),
        ${colors[0]};
    `,
  },
];

export function renderPhoneWallpapers(container) {
  container.innerHTML = `
    <div class="generator-header">
      <h2>📱 Phone Wallpaper Packs</h2>
      <p>Beautiful phone wallpapers with gentle reminders and supportive messages. Click any wallpaper to download.</p>
    </div>

    <div class="controls-panel">
      <div class="controls-row">
        <div class="control-group">
          <label>Color Palette</label>
          <select id="wp-palette">
            ${COLOR_PALETTES.map((p, i) => `<option value="${i}">${p.name}</option>`).join('')}
          </select>
        </div>
        <div class="control-group">
          <label>Background Style</label>
          <select id="wp-style">
            ${WALLPAPER_STYLES.map((s, i) => `<option value="${i}">${s.name}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="btn-group mt-lg">
        <button class="btn btn-primary" id="wp-generate">🔄 Generate All</button>
        <button class="btn btn-teal btn-downloading" id="wp-download-all">📥 Download All PNGs</button>
      </div>
    </div>

    <div class="preview-area">
      <h3>Preview — ${WALLPAPER_MESSAGES.length} Wallpapers</h3>
      <div class="preview-grid cols-4" id="wp-grid" style="justify-items:center;"></div>
    </div>
  `;

  container.querySelector('#wp-palette').addEventListener('change', generate);
  container.querySelector('#wp-style').addEventListener('change', generate);
  container.querySelector('#wp-generate').addEventListener('click', generate);
  container.querySelector('#wp-download-all').addEventListener('click', () => {
    const items = container.querySelectorAll('.wallpaper-preview');
    downloadAllAsPNG(Array.from(items), 'fibro-wallpaper');
  });

  function generate() {
    const paletteIdx = container.querySelector('#wp-palette').value;
    const styleIdx = container.querySelector('#wp-style').value;
    const palette = COLOR_PALETTES[paletteIdx];
    const style = WALLPAPER_STYLES[styleIdx];
    const grid = container.querySelector('#wp-grid');

    grid.innerHTML = WALLPAPER_MESSAGES.map((msg, i) => {
      const bgStyle = style.render(palette.colors);
      return `
        <div class="wallpaper-preview" style="${bgStyle}; cursor:pointer;" title="Click to download" data-index="${i}">
          <div class="wallpaper-text" style="color: white;">${msg}</div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.wallpaper-preview').forEach(wp => {
      wp.addEventListener('click', () => {
        downloadAsPNG(wp, `fibro-wallpaper-${parseInt(wp.dataset.index) + 1}`);
      });
    });
  }

  generate();
}
