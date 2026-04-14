/* shared.js — injects nav + footer into every page */

const NAV_HTML = `
<nav class="nav">
  <div class="nav-inner">
    <a href="/index.html" class="nav-logo">
      <div class="nav-logo-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="6" height="6" rx="1" fill="white"/>
          <rect x="9" y="1" width="6" height="6" rx="1" fill="rgba(255,255,255,0.4)"/>
          <rect x="1" y="9" width="6" height="6" rx="1" fill="rgba(255,255,255,0.4)"/>
          <rect x="9" y="9" width="6" height="6" rx="1" fill="white"/>
        </svg>
      </div>
      <span class="nav-logo-text">Supersub</span>
    </a>
    <ul class="nav-links">
      <li class="has-dropdown">
        <a href="/pages/sip-panels.html">SIP Panels <span class="chevron">▾</span></a>
        <div class="dropdown">
          <a href="/pages/sip-panels.html">SIP Panel Systems</a>
          <a href="/pages/sip-panels.html#specs">Technical Specs</a>
          <a href="/pages/sip-panels.html#compare">SIP vs Timber</a>
          <div class="dropdown-divider"></div>
          <a href="/pages/snaplock-walls.html">SnapLock Walls</a>
        </div>
      </li>
      <li class="has-dropdown">
        <a href="/pages/modular-homes.html">Products <span class="chevron">▾</span></a>
        <div class="dropdown">
          <a href="/pages/modular-homes.html">Modular Homes</a>
          <a href="/pages/kitset-homes.html">Kitset Homes</a>
          <a href="/pages/snaplock-walls.html">SnapLock Walls</a>
        </div>
      </li>
      <li class="has-dropdown">
        <a href="/pages/for-builders.html">Solutions <span class="chevron">▾</span></a>
        <div class="dropdown">
          <a href="/pages/for-builders.html">For Builders</a>
          <a href="/pages/for-developers.html">For Developers</a>
          <a href="/pages/for-homeowners.html">For Homeowners</a>
        </div>
      </li>
      <li><a href="/pages/about.html">About</a></li>
      <li><a href="/pages/contact.html">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <a href="tel:0800782631" class="nav-phone">0800 782 631</a>
      <a href="/pages/contact.html" class="btn btn-primary" style="font-size:14px;padding:10px 18px;">Get a Quote</a>
    </div>
    <div class="nav-burger" onclick="toggleMobileNav()">
      <span></span><span></span><span></span>
    </div>
  </div>
  <!-- Mobile menu -->
  <div id="mobile-nav" style="display:none;padding:16px 20px;border-top:1px solid var(--border);background:white;">
    <a href="/index.html" style="display:block;padding:10px 0;font-size:15px;color:var(--navy);border-bottom:1px solid var(--border);">Home</a>
    <a href="/pages/sip-panels.html" style="display:block;padding:10px 0;font-size:15px;color:var(--navy);border-bottom:1px solid var(--border);">SIP Panels</a>
    <a href="/pages/snaplock-walls.html" style="display:block;padding:10px 0;font-size:15px;color:var(--navy);border-bottom:1px solid var(--border);">SnapLock Walls</a>
    <a href="/pages/modular-homes.html" style="display:block;padding:10px 0;font-size:15px;color:var(--navy);border-bottom:1px solid var(--border);">Modular Homes</a>
    <a href="/pages/kitset-homes.html" style="display:block;padding:10px 0;font-size:15px;color:var(--navy);border-bottom:1px solid var(--border);">Kitset Homes</a>
    <a href="/pages/for-builders.html" style="display:block;padding:10px 0;font-size:15px;color:var(--navy);border-bottom:1px solid var(--border);">For Builders</a>
    <a href="/pages/for-developers.html" style="display:block;padding:10px 0;font-size:15px;color:var(--navy);border-bottom:1px solid var(--border);">For Developers</a>
    <a href="/pages/for-homeowners.html" style="display:block;padding:10px 0;font-size:15px;color:var(--navy);border-bottom:1px solid var(--border);">For Homeowners</a>
    <a href="/pages/about.html" style="display:block;padding:10px 0;font-size:15px;color:var(--navy);border-bottom:1px solid var(--border);">About</a>
    <a href="/pages/contact.html" style="display:block;padding:10px 0;font-size:15px;color:var(--blue);font-weight:500;">Contact / Get a Quote</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="foot-inner">
    <div class="foot-top">
      <div>
        <a href="/index.html" class="nav-logo" style="display:inline-flex;">
          <div class="nav-logo-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="6" height="6" rx="1" fill="white"/><rect x="9" y="1" width="6" height="6" rx="1" fill="rgba(255,255,255,0.4)"/><rect x="1" y="9" width="6" height="6" rx="1" fill="rgba(255,255,255,0.4)"/><rect x="9" y="9" width="6" height="6" rx="1" fill="white"/></svg></div>
          <span class="nav-logo-text" style="color:white;">Supersub</span>
        </a>
        <p class="foot-brand-desc">New Zealand's SIP Panel specialists. Manufactured in Cambridge, Waikato. Supplying builders, developers, and homeowners across NZ and Australia.</p>
      </div>
      <div>
        <div class="foot-col-title">Products</div>
        <ul class="foot-links">
          <li><a href="/pages/sip-panels.html">SIP Panel Systems</a></li>
          <li><a href="/pages/modular-homes.html">Modular Homes</a></li>
          <li><a href="/pages/kitset-homes.html">Kitset Homes</a></li>
          <li><a href="/pages/snaplock-walls.html">SnapLock Walls</a></li>
        </ul>
      </div>
      <div>
        <div class="foot-col-title">Solutions</div>
        <ul class="foot-links">
          <li><a href="/pages/for-builders.html">For Builders</a></li>
          <li><a href="/pages/for-developers.html">For Developers</a></li>
          <li><a href="/pages/for-homeowners.html">For Homeowners</a></li>
          <li><a href="/pages/contact.html">Trade Accounts</a></li>
        </ul>
      </div>
      <div>
        <div class="foot-col-title">Company</div>
        <ul class="foot-links">
          <li><a href="/pages/about.html">About Supersub</a></li>
          <li><a href="/pages/about.html#factory">Our Factory</a></li>
          <li><a href="/pages/contact.html">Contact Us</a></li>
          <li><a href="/pages/contact.html">Franchise Partners</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <p class="foot-copy">© 2025 Supersub New Zealand Ltd. All rights reserved.</p>
      <div class="foot-badges">
        <span class="foot-badge">LBP Registered</span>
        <span class="foot-badge">3 Registered Architects</span>
        <span class="foot-badge">NZ Owned &amp; Operated</span>
      </div>
    </div>
  </div>
</footer>`;

function toggleMobileNav() {
  const el = document.getElementById('mobile-nav');
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

// Inject nav + footer
document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('site-nav');
  const footEl = document.getElementById('site-footer');
  if (navEl) navEl.innerHTML = NAV_HTML;
  if (footEl) footEl.innerHTML = FOOTER_HTML;

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      item.classList.toggle('open');
    });
  });

  // Highlight active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') && path.includes(a.getAttribute('href').replace('/pages/',''))) {
      a.classList.add('active');
    }
  });
});
