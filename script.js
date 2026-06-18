(function () {
  var menuBtn = document.querySelector('.menu-toggle');
  var menu = document.getElementById('site-menu');

  if (menuBtn && menu) {
    var openMenu = function () {
      menuBtn.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
      menu.removeAttribute('inert');
      menu.classList.add('is-open');
    };

    var closeMenu = function () {
      menuBtn.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      menu.setAttribute('inert', '');
      menu.classList.remove('is-open');
    };

    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      }
    });

    document.addEventListener('click', function (e) {
      var isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      if (isOpen && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
      }
    });
  }

  var viewToggleBtns = document.querySelectorAll('.view-toggle-btn');
  var workGrid = document.querySelector('.work-grid');

  if (viewToggleBtns.length && workGrid) {
    viewToggleBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        viewToggleBtns.forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        workGrid.classList.toggle('is-list-view', btn.dataset.view === 'list');
      });
    });
  }

  var goUpBtns = document.querySelectorAll('.footer-go-up');
  goUpBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  var bookMeetingBtn = document.getElementById('book-meeting-btn');
  var ctaSection = document.querySelector('.cta');
  if (bookMeetingBtn && ctaSection) {
    bookMeetingBtn.addEventListener('click', function () {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  var startProjectBtn = document.getElementById('start-project-btn');
  var startProjectForm = document.getElementById('start-project-form');
  if (startProjectBtn && startProjectForm) {
    startProjectBtn.addEventListener('click', function () {
      startProjectForm.classList.add('is-visible');
      startProjectForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      var firstField = startProjectForm.querySelector('input[name="name"]');
      if (firstField) {
        firstField.focus();
      }
    });

    startProjectForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var submitBtn = startProjectForm.querySelector('button[type="submit"]');
      var errorMsg = startProjectForm.querySelector('.form-error');
      var originalLabel = submitBtn.textContent;

      errorMsg.hidden = true;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      fetch(startProjectForm.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(startProjectForm),
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (data.success) {
            startProjectForm.innerHTML = '<p class="form-success-message">Thanks — I\'ll get back to you shortly.</p>';
          } else {
            throw new Error(data.message || 'Submission failed');
          }
        })
        .catch(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
          errorMsg.textContent = 'Something went wrong — please try again.';
          errorMsg.hidden = false;
        });
    });
  }

  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var magneticTags = document.querySelectorAll('.cloud-tag');

  if (!prefersReducedMotion && magneticTags.length) {
    magneticTags.forEach(function (tag) {
      var rect = null;

      tag.addEventListener('mouseenter', function () {
        tag.classList.remove('cloud-tag-magnetic-reset');
        rect = tag.getBoundingClientRect();
      });

      tag.addEventListener('mousemove', function (e) {
        if (!rect) {
          rect = tag.getBoundingClientRect();
        }
        var centerX = rect.left + rect.width / 2;
        var centerY = rect.top + rect.height / 2;
        var offsetX = (e.clientX - centerX) * 0.35;
        var offsetY = (e.clientY - centerY) * 0.35;
        tag.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
      });

      tag.addEventListener('mouseleave', function () {
        tag.classList.add('cloud-tag-magnetic-reset');
        tag.style.transform = 'translate(0px, 0px)';
        rect = null;
      });
    });
  }
})();
