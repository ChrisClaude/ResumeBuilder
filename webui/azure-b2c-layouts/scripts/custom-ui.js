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

    waitForElm('#forgotPassword').then(forgotPasswordLink => {
      forgotPasswordLink.href =
        'https://techvisesandbox.b2clogin.com/techvisesandbox.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_password_reset&client_id=c6b21ff6-f657-4dca-8a39-0ff6027780e2&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fazure-ad-b2c&scope=openid&response_type=id_token&prompt=login';
    });
  });
};

const styleGoogleSSOButton = () => {
  waitForElm('#GoogleExchange').then(googleButton => {
    googleButton.textContent = 'Sign in with Google';

    const img = document.createElement('img');
    img.src =
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2IDI0Ljk2MDJDNDYgMjMuNDM0NiA0NS44NzYzIDIxLjkwMDcgNDUuNjEyNCAyMC4zOTk4SDI0LjQ0MzJWMjkuMDQyM0gzNi41NjU4QzM2LjA2MjggMzEuODI5NyAzNC40NDY0IDM0LjI5NTQgMzIuMDc5NyAzNS44NjIzVjQxLjQ3SDM5LjMxMkM0My41NTkgMzcuNTYxMSA0NiAzMS43ODg0IDQ2IDI0Ljk2MDJaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0yNC40NDMyIDQ2Ljg4OEMzMC40OTYzIDQ2Ljg4OCAzNS42MDA5IDQ0LjkwMDYgMzkuMzIwMiA0MS40N0wzMi4wODc5IDM1Ljg2MjJDMzAuMDc1NyAzNy4yMzEyIDI3LjQ3OCAzOC4wMDY0IDI0LjQ1MTUgMzguMDA2NEMxOC41OTY0IDM4LjAwNjQgMTMuNjMxOSAzNC4wNTYyIDExLjg1MDYgMjguNzQ1NEg0LjM4NzRWMzQuNTI2M0M4LjE5NzM1IDQyLjEwNSAxNS45NTc0IDQ2Ljg4OCAyNC40NDMyIDQ2Ljg4OFoiIGZpbGw9IiMzNEE4NTMiLz4KPHBhdGggZD0iTTExLjg0MjQgMjguNzQ1NEMxMC45MDIzIDI1Ljk1OCAxMC45MDIzIDIyLjkzOTggMTEuODQyNCAyMC4xNTI0VjE0LjM3MTVINC4zODc0MkMxLjIwNDIyIDIwLjcxMzIgMS4yMDQyIDI4LjE4NDYgNC4zODc0IDM0LjUyNjNMMTEuODQyNCAyOC43NDU0WiIgZmlsbD0iI0ZCQkMwNCIvPgo8cGF0aCBkPSJNMjQuNDQzMiAxMC44ODMxQzI3LjY0MjkgMTAuODMzNyAzMC43MzU0IDEyLjAzNzcgMzMuMDUyNyAxNC4yNDc4TDM5LjQ2MDQgNy44NDAxM0MzNS40MDMgNC4wMzAxOSAzMC4wMTggMS45MzU1NCAyNC40NDMyIDIuMDAxNTFDMTUuOTU3NCAyLjAwMTUxIDguMTk3MzcgNi43ODQ1OSA0LjM4NzQyIDE0LjM3MTVMMTEuODQyNCAyMC4xNTI0QzEzLjYxNTQgMTQuODMzMyAxOC41ODgxIDEwLjg4MzEgMjQuNDQzMiAxMC44ODMxWiIgZmlsbD0iI0VBNDMzNSIvPgo8L3N2Zz4K';
    img.style.width = '18px';
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
