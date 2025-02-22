const customizeB2CUI = () => {
  waitForElm('#api').then(apiDiv => {
    styleGoogleSSOButton();
    styleLinkedInSSOButton();

    waitForElm('#password').then(passwordInput => {
      addPasswordToggle(passwordInput);
    });

    waitForElm('.separator').then(separator => {
      waitForElm('.divider').then(divider => {
        waitForElm('.options').then(ssoOptions => {
          waitForElm('#localAccountForm').then(form => {
            waitForElm('.create').then(create => {
              divider.remove();
              form.appendChild(separator);
              form.appendChild(ssoOptions);
              form.parentNode.appendChild(create);
            });
          });
        });
      });
    });
  });
};

const styleGoogleSSOButton = () => {
  waitForElm('#GoogleExchange').then(googleButton => {
    googleButton.textContent = 'Sign in with Google';

    const img = document.createElement('img');
    img.src = img.style.width = '18px';
    img.style.height = '18px';
    img.style.marginRight = '8px';

    googleButton.prepend(img);
  });
};

const styleLinkedInSSOButton = () => {
  waitForElm('#LinkedIn').then(linkedInButton => {
    linkedInButton.textContent = 'Sign in with LinkedIn';

    const img = document.createElement('img');
    img.src =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEoSURBVHgB5ZRRTsJAEIb/aQtSeIEb9AbWA4jpScREgm9wBW9QHgUT8QieoKVeYD2BHqFPYCTdcbcJlWpKakt44UsmmZls/p3ZySxBYQ9fx2SwixowSKwfLqfUugscQ5rvOACyYTrG36s4Tq0ieUHCYjW/6mljQogK5ARJYpn5zEtUwNoNmHjcGgRh6oOuCf/HyofkGs16A/o1FH6WMvG0KXGhMz8x36tnmDbbSW8169OGkwuVE9hfIT4+H71QO/YoiomBbdydBCL2vWz6m7knOoPA+2qojgjdggqL0WJ6Adqj6Em9s5PmFuoC4pd9FRbSGQauGpqvpgXjzNSpm21Xu+dKV5iwlbXFEk7RudKCZTlBwSN8XzVJ99++jSZk4hw1YMbbetb3vwH5n3OoDpUOIgAAAABJRU5ErkJggg==';

    img.style.width = '18px';
    img.style.height = '18px';
    img.style.marginRight = '8px';

    linkedInButton.prepend(img);
  });
};

const addPasswordToggle = passwordInput => {
  const toggleIcon = document.createElement('span');
  toggleIcon.innerHTML = getShowPasswordIcon();
  toggleIcon.style.cssText = `
    position: absolute;
    right: 10px;
    bottom: 32px;
    transform: translateY(-50%);
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
  return `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>`;
};

const getHidePasswordIcon = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
