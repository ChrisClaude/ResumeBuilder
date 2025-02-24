const customizeB2CUI = () => {
  waitForElm('#api').then(apiDiv => {
    waitForElm('#newPassword').then(passwordInput => {
      addPasswordToggle(passwordInput);
    });

    waitForElm('#reenterPassword').then(passwordInput => {
      addPasswordToggle(passwordInput);
    });
  });
};



const addPasswordToggle = passwordInput => {
  const toggleIcon = document.createElement('span');
  toggleIcon.innerHTML = getShowPasswordIcon();
  toggleIcon.style.cssText = `
    position: absolute;
    right: 10px;
    bottom: 15px;
    cursor: pointer;
    user-select: none;
  `;

  passwordInput.style.paddingRight = '30px';
  passwordInput.parentElement.style.position = 'relative';

  passwordInput.parentElement.appendChild(toggleIcon);

  toggleIcon.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.innerHTML = getHidePasswordIcon();
    } else {
      passwordInput.type = 'password';
      toggleIcon.innerHTML = getShowPasswordIcon();
    }
  });
};

const getShowPasswordIcon = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>`;
};

const getHidePasswordIcon = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>`;
};

const waitForElm = selector => {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', customizeB2CUI);
} else {
  customizeB2CUI();
}
