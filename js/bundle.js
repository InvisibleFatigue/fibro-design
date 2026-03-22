// ============================================================
// Fibromyalgia Design Generator — Curated Content Database
// ============================================================

const QUOTES = [
  { text: "Rest is not giving up. It's the bravest thing you can do.", author: "Fibro Warrior" },
  { text: "Your pain is valid, even when others can't see it.", author: "" },
  { text: "Some days the bravest thing you can do is just keep going.", author: "" },
  { text: "Chronic illness taught me that strength isn't about endurance — it's about adaptation.", author: "" },
  { text: "You are so much more than your diagnosis.", author: "" },
  { text: "Gentle with yourself. You're doing the best you can.", author: "" },
  { text: "Not every battle is visible. Not every warrior looks strong.", author: "" },
  { text: "Progress, not perfection. One moment at a time.", author: "" },
  { text: "My body may be fighting me, but my spirit refuses to quit.", author: "" },
  { text: "Surviving a flare-up is a victory. Never forget that.", author: "" },
  { text: "You don't have to be productive to be valuable.", author: "" },
  { text: "Healing isn't linear. Neither is living with fibromyalgia.", author: "" },
  { text: "Listen to your body — it's the only home you'll ever have.", author: "" },
  { text: "Today I choose hope, even when my body chooses pain.", author: "" },
  { text: "It's okay to put yourself first. That's not selfish — that's necessary.", author: "" },
];

const AFFIRMATIONS = [
  "I am worthy of rest and recovery.",
  "My pace is enough. I am enough.",
  "I honor my body's signals without guilt.",
  "I release the need to explain my pain to everyone.",
  "I am resilient, even on my hardest days.",
  "I deserve compassion — from others and from myself.",
  "My worth is not measured by my productivity.",
  "I give myself permission to say no.",
  "Every small step forward counts.",
  "I am allowed to have bad days without feeling like a failure.",
  "My feelings about my condition are valid.",
  "I choose to focus on what I can do, not what I can't.",
  "Rest is a form of self-respect.",
  "I am stronger than I think I am.",
  "I celebrate my small victories today.",
  "I trust my body to tell me what it needs.",
  "I am patient with my healing journey.",
  "I surround myself with people who understand.",
  "My chronic illness does not define my entire story.",
  "I am learning to live beautifully within my limits.",
  "I forgive my body for the pain it carries.",
  "I am brave for facing each day with fibromyalgia.",
  "I deserve the same kindness I give to others.",
  "Today I will be gentle with myself.",
  "I am not a burden. I am a human being doing my best.",
  "My need for rest does not make me lazy.",
  "I let go of comparison. My journey is unique.",
  "I am grateful for the good moments, however brief.",
  "I trust that better days are coming.",
  "I am a warrior — soft, strong, and unbreakable.",
];

const FIBRO_FACTS = [
  { stat: "~10 million", description: "Americans live with fibromyalgia" },
  { stat: "75-90%", description: "of fibromyalgia patients are women" },
  { stat: "2-8%", description: "of the population is affected worldwide" },
  { stat: "~5 years", description: "average time to receive a diagnosis" },
  { stat: "200+", description: "symptoms have been associated with fibromyalgia" },
  { stat: "18", description: "tender points are used in traditional diagnosis" },
  { stat: "3x", description: "more likely to have depression as a co-condition" },
  { stat: "#1", description: "most common chronic widespread pain condition" },
];

const SYMPTOMS = [
  { name: "Widespread Pain", icon: "🔥", description: "Chronic pain affecting muscles, joints, and soft tissues throughout the body" },
  { name: "Fatigue", icon: "🔋", description: "Persistent exhaustion that doesn't improve with rest" },
  { name: "Fibro Fog", icon: "🌫️", description: "Cognitive difficulties including memory problems and trouble concentrating" },
  { name: "Sleep Disturbance", icon: "😴", description: "Difficulty falling or staying asleep, non-restorative sleep" },
  { name: "Sensitivity", icon: "⚡", description: "Heightened sensitivity to light, sound, temperature, and touch" },
  { name: "Stiffness", icon: "🧊", description: "Morning stiffness and muscle tightness" },
  { name: "Headaches", icon: "🤕", description: "Frequent tension headaches and migraines" },
  { name: "Digestive Issues", icon: "🫣", description: "IBS-like symptoms including bloating and discomfort" },
  { name: "Numbness & Tingling", icon: "✨", description: "Pins and needles sensations in hands and feet" },
  { name: "Mood Changes", icon: "🎭", description: "Anxiety, depression, and emotional sensitivity" },
];

const SPOON_ACTIVITIES = [
  { activity: "Getting out of bed", cost: 1, category: "basic" },
  { activity: "Showering", cost: 2, category: "basic" },
  { activity: "Getting dressed", cost: 1, category: "basic" },
  { activity: "Preparing a meal", cost: 2, category: "daily" },
  { activity: "Eating a meal", cost: 1, category: "daily" },
  { activity: "Light housework", cost: 2, category: "daily" },
  { activity: "Grocery shopping", cost: 3, category: "errands" },
  { activity: "Driving", cost: 2, category: "errands" },
  { activity: "Working (per hour)", cost: 2, category: "work" },
  { activity: "Social event", cost: 3, category: "social" },
  { activity: "Exercise / Physical therapy", cost: 3, category: "health" },
  { activity: "Doctor appointment", cost: 3, category: "health" },
  { activity: "Emotional conversation", cost: 2, category: "social" },
  { activity: "Decision making", cost: 1, category: "cognitive" },
  { activity: "Dealing with a flare-up", cost: 4, category: "health" },
];

const SELF_CARE_PROMPTS = {
  triggers: [
    "What foods seem to worsen your symptoms?",
    "Does weather or temperature change affect you?",
    "Which physical activities increase your pain?",
    "How does stress impact your flare-ups?",
    "Do certain social situations drain your energy?",
    "Are there environmental factors (light, noise) that bother you?",
    "How does your sleep quality affect next-day symptoms?",
    "Do hormonal changes affect your fibromyalgia?",
    "Which emotional states seem to trigger flare-ups?",
    "Are there specific times of day when symptoms are worst?",
  ],
  energyConservation: [
    "Identify your top 3 priorities for the day",
    "Schedule rest breaks between activities",
    "Prepare meals in advance when energy is higher",
    "Use adaptive tools to reduce physical strain",
    "Delegate tasks when possible",
    "Break large tasks into smaller steps",
    "Set time limits for activities",
    "Create a comfortable workspace",
    "Use online services for shopping/errands",
    "Plan social activities during your best hours",
  ],
  flareUp: [
    "Emergency contacts (doctor, support person)",
    "Pre-prepared comfort kit location",
    "Medication schedule and doses",
    "Heating pad / ice pack locations",
    "Easy-to-prepare meals or snacks",
    "Comfortable clothing readily accessible",
    "Entertainment (audiobooks, gentle music)",
    "Cancellation plan for obligations",
    "Self-compassion reminders",
    "Recovery timeline expectations",
  ],
};

const WALLPAPER_MESSAGES = [
  "Rest is productive.",
  "One moment at a time.",
  "You are enough.",
  "Be gentle with yourself.",
  "Breathe. You've got this.",
  "Your pace matters.",
  "Strength looks like this.",
  "Choose rest. Choose you.",
  "Brave, not broken.",
  "Today counts too.",
];

const SOCIAL_MEDIA_CONTENT = [
  { type: "fact", title: "Did You Know?", body: "Fibromyalgia affects an estimated 10 million Americans and 3-6% of the world population.", hashtags: "#Fibromyalgia #ChronicPain #Awareness" },
  { type: "fact", title: "Invisible Illness", body: "Just because you can't see it doesn't mean it isn't real. Fibromyalgia is an invisible illness that causes very real pain.", hashtags: "#InvisibleIllness #FibroWarrior" },
  { type: "myth", title: "Myth vs. Fact", body: "MYTH: Fibromyalgia isn't a real condition.\nFACT: It is recognized by all major medical organizations worldwide.", hashtags: "#FibroFacts #EndTheStigma" },
  { type: "myth", title: "Myth vs. Fact", body: "MYTH: Only women get fibromyalgia.\nFACT: While more common in women, men and children can also have fibromyalgia.", hashtags: "#FibroAwareness" },
  { type: "tip", title: "Self-Care Tip", body: "Pacing is not laziness — it's strategic energy management. Listen to your body.", hashtags: "#ChronicIllness #SelfCare #SpoonTheory" },
  { type: "tip", title: "Self-Care Tip", body: "Gentle stretching can help reduce stiffness. Even 5 minutes counts.", hashtags: "#FibroTips #GentleMovement" },
  { type: "awareness", title: "What Fibro Feels Like", body: "Imagine your worst flu, combined with jet lag, while carrying a weighted blanket everywhere. That's a glimpse of daily life with fibromyalgia.", hashtags: "#WhatFibroFeelsLike #ChronicPain" },
  { type: "awareness", title: "The Diagnosis Journey", body: "On average, it takes 5 years to receive a fibromyalgia diagnosis. Early awareness saves years of suffering.", hashtags: "#FibroDiagnosis #Awareness" },
  { type: "support", title: "To Caregivers", body: "Supporting someone with fibromyalgia? The best thing you can do is believe them. Validation is healing.", hashtags: "#FibroSupport #ChronicIllness" },
  { type: "support", title: "You're Not Alone", body: "Millions of people around the world understand exactly what you're going through. You are never alone in this.", hashtags: "#FibromyalgiaCommunity #FibroFamily" },
  { type: "quote", title: "", body: "My body may be fighting me, but my spirit refuses to quit.", hashtags: "#FibroStrength #Warrior" },
  { type: "quote", title: "", body: "Rest is not giving up. It's the bravest thing you can do.", hashtags: "#RestIsProductive #ChronicIllness" },
  { type: "fact", title: "Fibro Fog is Real", body: "Cognitive dysfunction in fibromyalgia can affect memory, concentration, and word-finding. It's called 'fibro fog' and it's a real symptom.", hashtags: "#FibroFog #InvisibleSymptoms" },
  { type: "tip", title: "Sleep Matters", body: "Quality sleep can significantly impact fibromyalgia symptoms. Create a calming bedtime routine and keep a consistent schedule.", hashtags: "#SleepHygiene #FibroTips" },
  { type: "awareness", title: "May 12th", body: "May 12th is International Fibromyalgia Awareness Day. Wear purple and help spread understanding.", hashtags: "#May12 #FibroAwarenessDay #WearPurple" },
  { type: "fact", title: "Central Sensitization", body: "Fibromyalgia involves central sensitization — the nervous system amplifies pain signals. The pain is real, not imagined.", hashtags: "#CentralSensitization #FibroScience" },
  { type: "support", title: "Permission Granted", body: "You have permission to cancel plans. To rest. To prioritize your health. No explanation needed.", hashtags: "#ChronicIllnessLife #SelfCare" },
  { type: "tip", title: "Track Your Triggers", body: "Keeping a symptom journal can help you identify patterns and triggers. Knowledge is power in managing fibromyalgia.", hashtags: "#SymptomTracking #FibroManagement" },
  { type: "myth", title: "Myth vs. Fact", body: "MYTH: Exercise makes fibromyalgia worse.\nFACT: Gentle, regular movement can actually help reduce symptoms over time.", hashtags: "#FibroExercise #GentleMovement" },
  { type: "awareness", title: "Spoon Theory", body: "People with fibromyalgia start each day with limited 'spoons' (energy). Every activity costs spoons. When they're gone, they're gone.", hashtags: "#SpoonTheory #Spoonie #ChronicIllness" },
];

const COLOR_PALETTES = [
  { name: "Lavender Dreams", colors: ["#7C5CBF", "#A78BFA", "#C4B5FD", "#E9D5FF", "#F5F0FF"], accent: "#7C5CBF" },
  { name: "Ocean Calm", colors: ["#0E7490", "#22D3EE", "#67E8F9", "#A5F3FC", "#F0FDFF"], accent: "#0E7490" },
  { name: "Sunset Warmth", colors: ["#C2410C", "#F97316", "#FDBA74", "#FED7AA", "#FFF7ED"], accent: "#C2410C" },
  { name: "Forest Rest", colors: ["#166534", "#4ADE80", "#86EFAC", "#BBF7D0", "#F0FDF4"], accent: "#166534" },
  { name: "Rose Comfort", colors: ["#9F1239", "#FB7185", "#FDA4AF", "#FECDD3", "#FFF1F2"], accent: "#9F1239" },
  { name: "Twilight", colors: ["#4338CA", "#818CF8", "#A5B4FC", "#C7D2FE", "#EEF2FF"], accent: "#4338CA" },
];
// ============================================================
// Export Utilities — PNG download & Print
// ============================================================

/**
 * Download a DOM element as a PNG image.
 * @param {HTMLElement} element — the DOM node to capture
 * @param {string} filename — output filename (without extension)
 * @param {object} [options] — optional overrides for html2canvas
 */
async function downloadAsPNG(element, filename = 'design', options = {}) {
  if (typeof html2canvas === 'undefined') {
    alert('Export library not loaded. Please check your internet connection.');
    return;
  }

  const btn = document.querySelector('.btn-downloading');
  if (btn) {
    btn.textContent = 'Capturing…';
    btn.disabled = true;
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: options.backgroundColor || '#ffffff',
      logging: false,
      ...options,
    });

    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    console.error('Export failed:', err);
    alert('Export failed. Try again or use Print instead.');
  } finally {
    if (btn) {
      btn.textContent = '📥 Download PNG';
      btn.disabled = false;
    }
  }
}

/**
 * Download multiple elements as separate PNGs, zipped into individual files.
 * (Simple sequential download approach)
 */
async function downloadAllAsPNG(elements, prefix = 'design') {
  for (let i = 0; i < elements.length; i++) {
    await downloadAsPNG(elements[i], `${prefix}-${i + 1}`);
    // Small delay between downloads to prevent browser blocking
    await new Promise(r => setTimeout(r, 300));
  }
}

/**
 * Print the current page (uses CSS @media print styles).
 */
function printDesign() {
  window.print();
}
// ============================================================
// Symptom Tracker Generator
// ============================================================

function renderSymptomTracker(container) {
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
// ============================================================
// Self-Care Worksheet Generator
// ============================================================

function renderSelfCareWorksheets(container) {
  container.innerHTML = `
    <div class="generator-header">
      <h2>📝 Self-Care Worksheets</h2>
      <p>Printable worksheets for trigger identification, energy conservation planning, and flare-up preparation.</p>
    </div>

    <div class="controls-panel">
      <div class="controls-row">
        <div class="control-group">
          <label>Worksheet Type</label>
          <select id="worksheet-type">
            <option value="triggers">Identify Your Triggers</option>
            <option value="energy">Energy Conservation Planning</option>
            <option value="flareup">Flare-Up Preparation</option>
          </select>
        </div>
        <div class="control-group">
          <label>Accent Color</label>
          <input type="color" id="worksheet-color" value="#7e22ce">
        </div>
      </div>
      <div class="btn-group mt-lg">
        <button class="btn btn-primary" id="ws-generate">🔄 Generate</button>
        <button class="btn btn-teal btn-downloading" id="ws-download">📥 Download PNG</button>
        <button class="btn btn-secondary" id="ws-print">🖨️ Print</button>
      </div>
    </div>

    <div class="preview-area">
      <h3>Preview</h3>
      <div class="design-canvas" id="ws-canvas"></div>
    </div>
  `;

  container.querySelector('#worksheet-type').addEventListener('change', generate);
  container.querySelector('#worksheet-color').addEventListener('input', generate);
  container.querySelector('#ws-generate').addEventListener('click', generate);
  container.querySelector('#ws-download').addEventListener('click', () => {
    downloadAsPNG(container.querySelector('#ws-canvas'), 'fibro-self-care-worksheet');
  });
  container.querySelector('#ws-print').addEventListener('click', printDesign);

  function generate() {
    const type = container.querySelector('#worksheet-type').value;
    const color = container.querySelector('#worksheet-color').value;
    const canvas = container.querySelector('#ws-canvas');

    const configs = {
      triggers: {
        title: 'Identify Your Triggers',
        subtitle: 'Understanding what worsens your symptoms is the first step to managing them.',
        icon: '🎯',
        prompts: SELF_CARE_PROMPTS.triggers,
        usePrompts: true,
      },
      energy: {
        title: 'Energy Conservation Planning',
        subtitle: 'Plan your day around your energy levels. Every spoon counts.',
        icon: '⚡',
        prompts: SELF_CARE_PROMPTS.energyConservation,
        useChecklist: true,
        extraSections: [
          { title: "Today's Top 3 Priorities", lines: 3 },
          { title: 'Rest Break Schedule', lines: 4 },
          { title: 'Tasks I Can Delegate', lines: 3 },
        ],
      },
      flareup: {
        title: 'Flare-Up Preparation Plan',
        subtitle: 'Being prepared for flare-ups reduces anxiety and helps you recover faster.',
        icon: '🛡️',
        prompts: SELF_CARE_PROMPTS.flareUp,
        useChecklist: true,
        extraSections: [
          { title: 'Emergency Contact', lines: 2 },
          { title: 'What Helps Me Most During a Flare', lines: 4 },
          { title: 'Comforting Activities / Distractions', lines: 3 },
        ],
      },
    };

    const config = configs[type];
    let html = `<div class="worksheet-page">`;
    html += `<div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.5rem;">
      <span style="font-size:2rem;">${config.icon}</span>
      <h2 style="color:${color}">${config.title}</h2>
    </div>`;
    html += `<p class="subtitle">${config.subtitle}</p>`;

    if (config.usePrompts) {
      config.prompts.forEach((prompt, i) => {
        html += `<div class="worksheet-prompt">
          <p><span style="color:${color}; font-weight:700;">${i + 1}.</span> ${prompt}</p>
          <div class="answer-area" style="border-color:${color}44"></div>
        </div>`;
      });
    }

    if (config.useChecklist) {
      html += `<div class="tracker-section"><h3 style="border-color:${color}33">Checklist</h3>`;
      html += `<ul class="worksheet-checklist">`;
      config.prompts.forEach(item => {
        html += `<li>${item}</li>`;
      });
      html += `</ul></div>`;
    }

    if (config.extraSections) {
      config.extraSections.forEach(section => {
        html += `<div class="tracker-section"><h3 style="border-color:${color}33">${section.title}</h3>`;
        html += `<div class="notes-lines">`;
        for (let i = 0; i < section.lines; i++) html += `<div class="note-line"></div>`;
        html += `</div></div>`;
      });
    }

    html += `<div style="text-align:center; margin-top:1.5rem; font-size:0.7rem; color:#94a3b8;">
      Generated by FibroDesign • fibromyalgia awareness & self-care tools</div>`;
    html += `</div>`;

    canvas.innerHTML = html;
  }

  generate();
}
// ============================================================
// Inspirational Quote Cards Generator
// ============================================================

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

function renderQuoteCards(container) {
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
// ============================================================
// Phone Wallpaper Generator
// ============================================================

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

function renderPhoneWallpapers(container) {
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
// ============================================================
// Social Media Graphics Generator
// ============================================================

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

function renderSocialMedia(container) {
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
// ============================================================
// Fibromyalgia Infographic Generator
// ============================================================

function renderInfographics(container) {
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
// ============================================================
// Daily Affirmation Cards Generator
// ============================================================

function renderAffirmationCards(container) {
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
// ============================================================
// Spoon Theory Visual Explainer Generator
// ============================================================

function renderSpoonTheory(container) {
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
// ============================================================
// FibroDesign — Main Application Shell
// ============================================================

// ── Product definitions ───────────────────────────────────────
const PRODUCTS = [
  {
    id: 'symptom-tracker',
    title: 'Printable Symptom Trackers',
    description: 'Daily & weekly pain scales, fatigue monitors, and medication trackers. Print-ready designs.',
    icon: '📋',
    iconBg: 'linear-gradient(135deg, #7e22ce, #a855f7)',
    badges: ['Printable', 'Daily/Weekly'],
    render: renderSymptomTracker,
  },
  {
    id: 'self-care',
    title: 'Self-Care Worksheets',
    description: 'Trigger identification, energy conservation planning, and flare-up preparation sheets.',
    icon: '📝',
    iconBg: 'linear-gradient(135deg, #0d9488, #14b8a6)',
    badges: ['Printable', '3 Templates'],
    render: renderSelfCareWorksheets,
  },
  {
    id: 'quote-cards',
    title: 'Inspirational Quote Cards',
    description: 'Beautiful quote cards with fibromyalgia-specific encouraging messages in stunning color palettes.',
    icon: '💬',
    iconBg: 'linear-gradient(135deg, #db2777, #f472b6)',
    badges: ['15 Designs', 'Downloadable'],
    render: renderQuoteCards,
  },
  {
    id: 'phone-wallpapers',
    title: 'Phone Wallpaper Packs',
    description: 'Gorgeous phone wallpapers with gentle reminders and supportive messages.',
    icon: '📱',
    iconBg: 'linear-gradient(135deg, #4338ca, #818cf8)',
    badges: ['10 Designs', 'Phone-Ready'],
    render: renderPhoneWallpapers,
  },
  {
    id: 'social-media',
    title: 'Social Media Graphics Bundle',
    description: 'Shareable quotes, facts, myth-busters, and awareness infographics for all major platforms.',
    icon: '📣',
    iconBg: 'linear-gradient(135deg, #ea580c, #f97316)',
    badges: ['20 Graphics', 'Multi-Size'],
    render: renderSocialMedia,
  },
  {
    id: 'infographics',
    title: '"Explain Fibromyalgia" Infographics',
    description: 'Comprehensive visual explanations of symptoms, challenges, and myths vs. facts.',
    icon: '📊',
    iconBg: 'linear-gradient(135deg, #0891b2, #22d3ee)',
    badges: ['3 Types', 'Shareable'],
    render: renderInfographics,
  },
  {
    id: 'affirmation-cards',
    title: 'Daily Affirmation Cards',
    description: 'A 30-card set of supportive statements specific to chronic illness. Print-ready grids.',
    icon: '🌸',
    iconBg: 'linear-gradient(135deg, #be185d, #f472b6)',
    badges: ['30 Cards', 'Print Grid'],
    render: renderAffirmationCards,
  },
  {
    id: 'spoon-theory',
    title: '"Spoon Theory" Visual Explainer',
    description: 'Interactive and downloadable visual representations of the Spoon Theory concept.',
    icon: '🥄',
    iconBg: 'linear-gradient(135deg, #a16207, #facc15)',
    badges: ['Interactive', 'Educational'],
    render: renderSpoonTheory,
  },
];

// ── State ─────────────────────────────────────────────────────
let currentView = 'dashboard';

// ── DOM References ────────────────────────────────────────────
const dashboardView = document.getElementById('view-dashboard');
const dashboardGrid = document.getElementById('dashboard-grid');
const navBack = document.getElementById('nav-back');
const navBrand = document.getElementById('nav-brand');

// ── Initialize Dashboard ──────────────────────────────────────
function initDashboard() {
  dashboardGrid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card" data-product="${p.id}">
      <div class="product-card-icon" style="background: ${p.iconBg};">${p.icon}</div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="product-card-meta">
        ${p.badges.map(b => `<span class="product-card-badge">${b}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Card click handlers
  dashboardGrid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      navigateTo(card.dataset.product);
    });
  });
}

// ── Navigation ────────────────────────────────────────────────
function navigateTo(viewId) {
  // Hide all views
  dashboardView.style.display = 'none';
  document.querySelectorAll('.generator-view').forEach(v => {
    v.classList.remove('active');
  });

  if (viewId === 'dashboard') {
    dashboardView.style.display = 'block';
    navBack.classList.add('hidden');
    currentView = 'dashboard';
  } else {
    const product = PRODUCTS.find(p => p.id === viewId);
    if (!product) return;

    const container = document.getElementById(`view-${viewId}`);
    container.classList.add('active');
    product.render(container);
    navBack.classList.remove('hidden');
    currentView = viewId;
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Event Listeners ───────────────────────────────────────────
navBack.addEventListener('click', () => navigateTo('dashboard'));
navBrand.addEventListener('click', (e) => {
  e.preventDefault();
  navigateTo('dashboard');
});

// ── Boot ──────────────────────────────────────────────────────
initDashboard();
