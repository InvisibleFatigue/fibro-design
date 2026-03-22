// ============================================================
// Fibromyalgia Infographic Generator
// ============================================================
import { SYMPTOMS, FIBRO_FACTS, COLOR_PALETTES } from '../data/content.js';
import { downloadAsPNG, printDesign } from '../export.js';

export function renderInfographics(container) {
  container.innerHTML = `
    <div class="generator-header">
      <h2>📊 "Explain Fibromyalgia" Infographics</h2>
      <p>Comprehensive visual explainers of symptoms, challenges, and facts. Perfect for sharing with friends, family, or on social media.</p>
    </div>

    <div class="controls-panel">
      <div class="controls-row">
        <div class="control-group">
          <label>Infographic Type</label>
          <select id="info-type">
            <option value="overview">Complete Overview</option>
            <option value="symptoms">Symptoms Deep-Dive</option>
            <option value="myths">Myths vs. Facts</option>
          </select>
        </div>
        <div class="control-group">
          <label>Color Palette</label>
          <select id="info-palette">
            ${COLOR_PALETTES.map((p, i) => `<option value="${i}">${p.name}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="btn-group mt-lg">
        <button class="btn btn-primary" id="info-generate">🔄 Generate</button>
        <button class="btn btn-teal btn-downloading" id="info-download">📥 Download PNG</button>
        <button class="btn btn-secondary" id="info-print">🖨️ Print</button>
      </div>
    </div>

    <div class="preview-area">
      <h3>Preview</h3>
      <div class="design-canvas" id="info-canvas"></div>
    </div>
  `;

  container.querySelector('#info-type').addEventListener('change', generate);
  container.querySelector('#info-palette').addEventListener('change', generate);
  container.querySelector('#info-generate').addEventListener('click', generate);
  container.querySelector('#info-download').addEventListener('click', () => {
    downloadAsPNG(container.querySelector('#info-canvas'), 'fibro-infographic');
  });
  container.querySelector('#info-print').addEventListener('click', printDesign);

  function generate() {
    const type = container.querySelector('#info-type').value;
    const paletteIdx = container.querySelector('#info-palette').value;
    const palette = COLOR_PALETTES[paletteIdx];
    const canvas = container.querySelector('#info-canvas');
    const c = palette.colors;

    let html = '';

    if (type === 'overview') {
      html = renderOverview(c);
    } else if (type === 'symptoms') {
      html = renderSymptomsDeep(c);
    } else {
      html = renderMyths(c);
    }

    canvas.innerHTML = html;
  }

  function renderOverview(c) {
    return `
      <div class="infographic-page">
        <div style="text-align:center; margin-bottom:0.5rem; font-size:2.5rem;">💜</div>
        <h2 style="color:${c[0]}">Understanding Fibromyalgia</h2>
        <p class="infographic-subtitle">A comprehensive guide to one of the most common chronic pain conditions</p>

        <div style="background:${c[4]}; border-left:4px solid ${c[0]}; padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; margin-bottom:2rem; font-size:0.9rem; color:#334155; line-height:1.7;">
          <strong style="color:${c[0]}">What is Fibromyalgia?</strong><br>
          Fibromyalgia is a chronic condition characterized by widespread musculoskeletal pain, fatigue, sleep disturbances, and cognitive difficulties. It affects the way the brain and spinal cord process pain signals, amplifying painful sensations.
        </div>

        <h3 style="color:${c[0]}; font-size:1.1rem; margin-bottom:1rem; text-align:center;">Key Facts</h3>
        <div class="fact-strip">
          ${FIBRO_FACTS.slice(0, 4).map(f => `
            <div class="fact-item" style="background:linear-gradient(135deg, ${c[0]}, ${c[1]});">
              <div class="fact-stat">${f.stat}</div>
              <div class="fact-desc">${f.description}</div>
            </div>
          `).join('')}
        </div>

        <h3 style="color:${c[0]}; font-size:1.1rem; margin-bottom:1rem; text-align:center;">Common Symptoms</h3>
        <div class="symptom-grid">
          ${SYMPTOMS.slice(0, 8).map(s => `
            <div class="symptom-item" style="background:${c[4]}; border-color:${c[3]};">
              <span class="symptom-icon">${s.icon}</span>
              <div>
                <div class="symptom-name">${s.name}</div>
                <div class="symptom-desc">${s.description}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="background:${c[4]}; border-radius:0.75rem; padding:1.25rem; margin-top:1rem;">
          <h3 style="color:${c[0]}; font-size:1rem; margin-bottom:0.75rem;">How You Can Help</h3>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.75rem; font-size:0.8rem; color:#475569;">
            <div style="text-align:center;">
              <div style="font-size:1.5rem; margin-bottom:0.25rem;">👂</div>
              <strong>Listen</strong><br>Believe their experience
            </div>
            <div style="text-align:center;">
              <div style="font-size:1.5rem; margin-bottom:0.25rem;">🤲</div>
              <strong>Support</strong><br>Offer practical help
            </div>
            <div style="text-align:center;">
              <div style="font-size:1.5rem; margin-bottom:0.25rem;">📚</div>
              <strong>Learn</strong><br>Educate yourself
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top:1.5rem; font-size:0.7rem; color:#94a3b8;">
          Generated by FibroDesign • Share to spread awareness 💜
        </div>
      </div>
    `;
  }

  function renderSymptomsDeep(c) {
    return `
      <div class="infographic-page">
        <h2 style="color:${c[0]}">Fibromyalgia Symptoms</h2>
        <p class="infographic-subtitle">More than just pain — understanding the full spectrum of symptoms</p>

        <div class="fact-strip" style="grid-template-columns:repeat(2,1fr); margin-bottom:2rem;">
          <div class="fact-item" style="background:linear-gradient(135deg, ${c[0]}, ${c[1]});">
            <div class="fact-stat">200+</div>
            <div class="fact-desc">symptoms associated with fibromyalgia</div>
          </div>
          <div class="fact-item" style="background:linear-gradient(135deg, ${c[1]}, ${c[2]});">
            <div class="fact-stat">Invisible</div>
            <div class="fact-desc">Most symptoms cannot be seen by others</div>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:1rem;">
          ${SYMPTOMS.map(s => `
            <div style="display:flex; align-items:center; gap:1rem; padding:1rem; background:${c[4]}; border-radius:0.75rem; border-left:4px solid ${c[1]};">
              <span style="font-size:2rem;">${s.icon}</span>
              <div style="flex:1;">
                <div style="font-weight:600; color:#334155; margin-bottom:0.15rem;">${s.name}</div>
                <div style="font-size:0.8rem; color:#64748b; line-height:1.4;">${s.description}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align:center; margin-top:2rem; padding:1.5rem; background:${c[4]}; border-radius:0.75rem;">
          <p style="font-family:'Playfair Display',serif; font-size:1.1rem; color:${c[0]}; font-style:italic;">
            "Every symptom is real. Every struggle is valid."
          </p>
        </div>

        <div style="text-align:center; margin-top:1.5rem; font-size:0.7rem; color:#94a3b8;">
          Generated by FibroDesign • Share to spread awareness 💜
        </div>
      </div>
    `;
  }

  function renderMyths(c) {
    const myths = [
      { myth: "Fibromyalgia isn't a real medical condition", fact: "Fibromyalgia is recognized by the WHO, AMA, and all major medical organizations worldwide." },
      { myth: "It's just in your head", fact: "Research shows real neurological changes, including central sensitization and altered pain processing." },
      { myth: "Only women get fibromyalgia", fact: "While 75-90% of patients are women, men and even children can develop fibromyalgia." },
      { myth: "You don't look sick, so you must be fine", fact: "Fibromyalgia is an invisible illness. Symptoms are internal and often chronic." },
      { myth: "Exercise will make it worse", fact: "Gentle, regular movement can actually reduce symptoms over time. The key is pacing." },
      { myth: "There's a simple test for fibromyalgia", fact: "Diagnosis is based on symptom patterns and ruling out other conditions. There is no single lab test." },
    ];

    return `
      <div class="infographic-page">
        <h2 style="color:${c[0]}">Fibromyalgia: Myths vs. Facts</h2>
        <p class="infographic-subtitle">Debunking common misconceptions about fibromyalgia</p>

        <div style="display:flex; flex-direction:column; gap:1.25rem;">
          ${myths.map((m, i) => `
            <div style="border-radius:0.75rem; overflow:hidden; border:1px solid ${c[3]};">
              <div style="background:#fef2f240; padding:0.75rem 1rem; display:flex; align-items:center; gap:0.75rem;">
                <span style="font-size:1.2rem;">❌</span>
                <div>
                  <div style="font-size:0.7rem; font-weight:700; color:#dc2626; text-transform:uppercase; letter-spacing:0.05em;">Myth</div>
                  <div style="font-size:0.85rem; color:#334155; font-weight:500;">"${m.myth}"</div>
                </div>
              </div>
              <div style="background:${c[4]}; padding:0.75rem 1rem; display:flex; align-items:center; gap:0.75rem;">
                <span style="font-size:1.2rem;">✅</span>
                <div>
                  <div style="font-size:0.7rem; font-weight:700; color:${c[0]}; text-transform:uppercase; letter-spacing:0.05em;">Fact</div>
                  <div style="font-size:0.85rem; color:#334155;">${m.fact}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align:center; margin-top:2rem; padding:1rem; background:linear-gradient(135deg, ${c[0]}, ${c[1]}); border-radius:0.75rem; color:white;">
          <p style="font-size:0.9rem; font-weight:600;">Help fight stigma — share this with someone who needs to understand.</p>
        </div>

        <div style="text-align:center; margin-top:1.5rem; font-size:0.7rem; color:#94a3b8;">
          Generated by FibroDesign • Share to spread awareness 💜
        </div>
      </div>
    `;
  }

  generate();
}
