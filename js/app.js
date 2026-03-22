// ============================================================
// FibroDesign — Main Application Shell
// ============================================================
import { renderSymptomTracker } from './generators/symptom-tracker.js';
import { renderSelfCareWorksheets } from './generators/self-care-worksheet.js';
import { renderQuoteCards } from './generators/quote-cards.js';
import { renderPhoneWallpapers } from './generators/phone-wallpapers.js';
import { renderSocialMedia } from './generators/social-media.js';
import { renderInfographics } from './generators/infographics.js';
import { renderAffirmationCards } from './generators/affirmation-cards.js';
import { renderSpoonTheory } from './generators/spoon-theory.js';

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
