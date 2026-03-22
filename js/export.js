// ============================================================
// Export Utilities — PNG download & Print
// ============================================================

/**
 * Download a DOM element as a PNG image.
 * @param {HTMLElement} element — the DOM node to capture
 * @param {string} filename — output filename (without extension)
 * @param {object} [options] — optional overrides for html2canvas
 */
export async function downloadAsPNG(element, filename = 'design', options = {}) {
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
export async function downloadAllAsPNG(elements, prefix = 'design') {
  for (let i = 0; i < elements.length; i++) {
    await downloadAsPNG(elements[i], `${prefix}-${i + 1}`);
    // Small delay between downloads to prevent browser blocking
    await new Promise(r => setTimeout(r, 300));
  }
}

/**
 * Print the current page (uses CSS @media print styles).
 */
export function printDesign() {
  window.print();
}
