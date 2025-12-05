// Demo Navigation Bar - Shared across all demo pages
(function() {
  'use strict';

  const mockups = [
    { id: '01', title: 'Enhanced Hero', path: '/demo/mockup-01/index.html' },
    { id: '02', title: 'Split-Screen', path: '/demo/mockup-02/index.html' },
    { id: '03', title: 'Radical Scroll', path: '/demo/mockup-03/index.html' },
    { id: '04', title: 'Orbital Circle', path: '/demo/mockup-04/index.html' },
    { id: '05', title: 'Hydrogen H₂', path: '/demo/mockup-05/index.html' },
    { id: '06', title: 'Carousel Forward', path: '/demo/mockup-06/index.html' },
    { id: '07', title: 'Reactor Core', path: '/demo/mockup-07/index.html' },
    { id: '08', title: 'Molecule Sculpture', path: '/demo/mockup-08/index.html' },
    { id: '09', title: 'Energy Grid', path: '/demo/mockup-09/index.html' },
    { id: '10', title: 'Hydrogen Bridge', path: '/demo/mockup-10/index.html' },
    { id: '11', title: 'H₂ Molecule', path: '/demo/mockup-11/index.html' },
    { id: '12', title: 'Supply Chain Island', path: '/demo/mockup-12/index.html' },
    { id: '13', title: 'Energy Tunnel', path: '/demo/mockup-13/index.html' },
    { id: '14', title: 'Crystal Chamber', path: '/demo/mockup-14/index.html' },
  ];

  // Get current mockup ID from path
  function getCurrentMockupId() {
    const path = window.location.pathname;
    const match = path.match(/mockup-(\d+)/);
    return match ? match[1] : null;
  }

  // Get current and adjacent mockups
  function getNavigationInfo() {
    const currentId = getCurrentMockupId();
    if (!currentId) return null;

    const currentIndex = mockups.findIndex(m => m.id === currentId);
    if (currentIndex === -1) return null;

    const prev = currentIndex > 0 ? mockups[currentIndex - 1] : null;
    const next = currentIndex < mockups.length - 1 ? mockups[currentIndex + 1] : null;
    const current = mockups[currentIndex];

    return { current, prev, next, currentIndex };
  }

  // Create navigation bar HTML
  function createNavBar() {
    const nav = getNavigationInfo();
    if (!nav) return;

    const navBar = document.createElement('div');
    navBar.id = 'demo-nav-bar';
    navBar.innerHTML = `
      <div class="demo-nav-container">
        <button class="demo-nav-btn" id="demo-nav-prev" ${!nav.prev ? 'disabled' : ''} title="Previous mockup">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>Previous</span>
        </button>
        
        <div class="demo-nav-center">
          <select id="demo-nav-select" class="demo-nav-select">
            ${mockups.map((m, idx) => `
              <option value="${m.path}" ${m.id === nav.current.id ? 'selected' : ''}>
                ${String(idx + 1).padStart(2, '0')} — ${m.title}
              </option>
            `).join('')}
          </select>
          <span class="demo-nav-counter">${String(nav.currentIndex + 1).padStart(2, '0')} / ${String(mockups.length).padStart(2, '0')}</span>
        </div>
        
        <button class="demo-nav-btn" id="demo-nav-next" ${!nav.next ? 'disabled' : ''} title="Next mockup">
          <span>Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    `;

    document.body.appendChild(navBar);

    // Event listeners
    const prevBtn = document.getElementById('demo-nav-prev');
    const nextBtn = document.getElementById('demo-nav-next');
    const select = document.getElementById('demo-nav-select');

    if (prevBtn && nav.prev) {
      prevBtn.addEventListener('click', () => {
        window.location.href = nav.prev.path;
      });
    }

    if (nextBtn && nav.next) {
      nextBtn.addEventListener('click', () => {
        window.location.href = nav.next.path;
      });
    }

    if (select) {
      select.addEventListener('change', (e) => {
        window.location.href = e.target.value;
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      // Only handle if not typing in an input/textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      if (e.key === 'ArrowLeft' && nav.prev) {
        window.location.href = nav.prev.path;
      } else if (e.key === 'ArrowRight' && nav.next) {
        window.location.href = nav.next.path;
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createNavBar);
  } else {
    createNavBar();
  }
})();

