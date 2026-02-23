(() => {
  const body = document.body;
  const attribution = body.querySelector('.attribution');

  const appRoot = document.createElement('main');
  appRoot.id = 'app';

  Array.from(body.childNodes).forEach((node) => {
    if (node !== attribution && !(node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SCRIPT')) {
      body.removeChild(node);
    }
  });

  body.insertBefore(appRoot, attribution || null);

  const style = document.createElement('style');
  style.textContent = `
    :root {
      color-scheme: light;
      font-family: Arial, sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 24px;
      background: #f3f5ff;
      color: #02295a;
    }

    #app {
      max-width: 980px;
      margin: 0 auto 24px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
      padding: 18px;
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 24px;
      min-height: 560px;
    }

    #app.thank-you-mode {
      grid-template-columns: 1fr;
    }

    .sidebar {
      background-color: #483eff;
      background-image: url('./assets/images/bg-sidebar-desktop.svg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      color: #fff;
      border-radius: 10px;
      padding: 24px 18px;
      min-height: 520px;
    }

    .step-indicator {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
      opacity: 0.9;
    }

    .step-indicator:last-child {
      margin-bottom: 0;
    }

    .step-circle {
      width: 32px;
      height: 32px;
      border: 1px solid #bfe2fd;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-weight: 700;
      font-size: 14px;
    }

    .step-indicator.active .step-circle {
      background: #bfe2fd;
      color: #02295a;
      border-color: #bfe2fd;
    }

    .step-label {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      opacity: 0.8;
    }

    .step-title {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .panel {
      padding: 26px 22px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 520px;
    }

    .panel-center {
      justify-content: center;
      align-items: center;
    }

    .panel h1 {
      margin: 0;
      font-size: 32px;
    }

    .panel p.subtitle {
      margin: 8px 0 22px;
      color: #6b7280;
      line-height: 1.4;
    }

    .field {
      margin-bottom: 16px;
    }

    .field-row {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 6px;
    }

    .field label {
      display: block;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 6px;
    }

    input[type='text'],
    input[type='email'],
    input[type='tel'] {
      width: 100%;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 12px;
      font-size: 15px;
      color: #02295a;
    }

    .error {
      color: #dc2626;
      font-size: 13px;
      font-weight: 700;
    }

    .plan-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    .plan-card,
    .addon-card {
      border: 1px solid #d1d5db;
      border-radius: 10px;
      padding: 14px;
      cursor: pointer;
      transition: border-color 120ms ease, background 120ms ease;
    }

    .plan-card.active,
    .addon-card.active {
      border-color: #483eff;
      background: #f0f4ff;
    }

    .plan-name,
    .addon-name {
      font-weight: 700;
      margin-bottom: 4px;
    }

    .muted {
      color: #6b7280;
      font-size: 14px;
    }

    .price {
      font-weight: 700;
      margin-top: 6px;
      font-size: 14px;
      color: #483eff;
    }

    .billing-switch {
      margin-top: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      border-radius: 10px;
      padding: 10px;
      background: #f3f5ff;
      font-size: 14px;
      font-weight: 700;
    }

    .addon-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 10px;
    }

    .addon-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .addon-left input {
      width: 18px;
      height: 18px;
    }

    .summary {
      background: #f9fafb;
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 14px;
    }

    .summary-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      font-size: 14px;
    }

    .summary-row:last-child {
      margin-bottom: 0;
    }

    .summary-plan {
      font-weight: 700;
    }

    .summary a {
      color: #6b7280;
      font-size: 14px;
    }

    .total {
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      padding: 0 8px;
      color: #6b7280;
    }

    .total strong {
      color: #483eff;
      font-size: 20px;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 26px;
    }

    button {
      border: 0;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      padding: 12px 18px;
      font-size: 14px;
    }

    .btn-back {
      background: transparent;
      color: #6b7280;
      padding-left: 0;
    }

    .btn-next,
    .btn-confirm {
      background: #02295a;
      color: #fff;
      margin-left: auto;
    }

    .btn-confirm {
      background: #483eff;
    }

    .thanks {
      text-align: center;
      margin: auto;
      max-width: 520px;
    }

    .thanks h1 {
      margin-top: 16px;
      margin-bottom: 10px;
    }

    .thanks p {
      margin: 0;
      color: #6b7280;
      line-height: 1.5;
    }

    @media (max-width: 900px) {
      #app {
        grid-template-columns: 1fr;
        min-height: auto;
      }

      .sidebar {
        background-image: url('./assets/images/bg-sidebar-mobile.svg');
        background-size: cover;
        min-height: 172px;
      }

      .panel {
        min-height: auto;
      }

      .plan-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  document.head.appendChild(style);

  const state = {
    currentStep: 1,
    form: {
      name: '',
      email: '',
      phone: '',
      billing: 'monthly',
      plan: 'arcade',
      addons: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
      },
    },
    errors: {},
  };

  const plans = {
    arcade: { label: 'Arcade', monthly: 9, yearly: 90 },
    advanced: { label: 'Advanced', monthly: 12, yearly: 120 },
    pro: { label: 'Pro', monthly: 15, yearly: 150 },
  };

  const addons = {
    onlineService: { label: 'Online service', desc: 'Access to multiplayer games', monthly: 1, yearly: 10 },
    largerStorage: { label: 'Larger storage', desc: 'Extra 1TB of cloud save', monthly: 2, yearly: 20 },
    customizableProfile: { label: 'Customizable Profile', desc: 'Custom theme on your profile', monthly: 2, yearly: 20 },
  };

  const suffix = () => (state.form.billing === 'monthly' ? 'mo' : 'yr');

  const money = (value) => `$${value}/${suffix()}`;

  const planPrice = () => plans[state.form.plan][state.form.billing];

  const addonsTotal = () => {
    return Object.entries(state.form.addons).reduce((sum, [key, selected]) => {
      if (!selected) return sum;
      return sum + addons[key][state.form.billing];
    }, 0);
  };

  const total = () => planPrice() + addonsTotal();

  const validateStepOne = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!state.form.name.trim()) {
      errors.name = 'This field is required';
    }

    if (!state.form.email.trim()) {
      errors.email = 'This field is required';
    } else if (!emailPattern.test(state.form.email.trim())) {
      errors.email = 'Please enter a valid email';
    }

    if (!state.form.phone.trim()) {
      errors.phone = 'This field is required';
    }

    state.errors = errors;
    return Object.keys(errors).length === 0;
  };

  const stepTitle = (step) => {
    if (step === 1) return 'Your info';
    if (step === 2) return 'Select plan';
    if (step === 3) return 'Add-ons';
    return 'Summary';
  };

  const sidebar = () => {
    if (state.currentStep === 5) {
      return '';
    }

    return `
      <aside class="sidebar">
        ${[1, 2, 3, 4]
          .map(
            (step) => `
              <div class="step-indicator ${state.currentStep === step ? 'active' : ''}">
                <div class="step-circle">${step}</div>
                <div>
                  <div class="step-label">Step ${step}</div>
                  <div class="step-title">${stepTitle(step)}</div>
                </div>
              </div>
            `
          )
          .join('')}
      </aside>
    `;
  };

  const fieldError = (name) => (state.errors[name] ? `<span class="error">${state.errors[name]}</span>` : '');

  const stepOne = () => `
    <section class="panel">
      <div>
        <h1>Personal info</h1>
        <p class="subtitle">Please provide your name, email address, and phone number.</p>

        <div class="field">
          <div class="field-row">
            <label for="name">Name</label>
            ${fieldError('name')}
          </div>
          <input id="name" type="text" placeholder="e.g. Stephen King" value="${state.form.name}">
        </div>

        <div class="field">
          <div class="field-row">
            <label for="email">Email Address</label>
            ${fieldError('email')}
          </div>
          <input id="email" type="email" placeholder="e.g. stephenking@lorem.com" value="${state.form.email}">
        </div>

        <div class="field">
          <div class="field-row">
            <label for="phone">Phone Number</label>
            ${fieldError('phone')}
          </div>
          <input id="phone" type="tel" placeholder="e.g. +1 234 567 890" value="${state.form.phone}">
        </div>
      </div>

      <div class="nav">
        <span></span>
        <button class="btn-next" data-next>Next Step</button>
      </div>
    </section>
  `;

  const stepTwo = () => {
    const billingLabel = state.form.billing === 'monthly' ? 'monthly' : 'yearly';
    return `
      <section class="panel">
        <div>
          <h1>Select your plan</h1>
          <p class="subtitle">You have the option of monthly or yearly billing.</p>

          <div class="plan-grid">
            ${Object.entries(plans)
              .map(([key, plan]) => {
                return `
                  <button type="button" class="plan-card ${state.form.plan === key ? 'active' : ''}" data-plan="${key}">
                    <div class="plan-name">${plan.label}</div>
                    <div class="muted">${money(plan[state.form.billing])}</div>
                    ${state.form.billing === 'yearly' ? '<div class="muted">2 months free</div>' : ''}
                  </button>
                `;
              })
              .join('')}
          </div>

          <div class="billing-switch">
            <span style="color:${state.form.billing === 'monthly' ? '#02295a' : '#6b7280'}">Monthly</span>
            <input id="billing" type="checkbox" ${state.form.billing === 'yearly' ? 'checked' : ''}>
            <span style="color:${state.form.billing === 'yearly' ? '#02295a' : '#6b7280'}">Yearly</span>
          </div>

          <p class="muted" style="margin-top:10px">Currently billed ${billingLabel}.</p>
        </div>

        <div class="nav">
          <button class="btn-back" data-back>Go Back</button>
          <button class="btn-next" data-next>Next Step</button>
        </div>
      </section>
    `;
  };

  const stepThree = () => `
    <section class="panel">
      <div>
        <h1>Pick add-ons</h1>
        <p class="subtitle">Add-ons help enhance your gaming experience.</p>

        ${Object.entries(addons)
          .map(([key, addon]) => {
            return `
              <label class="addon-card ${state.form.addons[key] ? 'active' : ''}">
                <div class="addon-left">
                  <input type="checkbox" data-addon="${key}" ${state.form.addons[key] ? 'checked' : ''}>
                  <div>
                    <div class="addon-name">${addon.label}</div>
                    <div class="muted">${addon.desc}</div>
                  </div>
                </div>
                <div class="price">+${money(addon[state.form.billing])}</div>
              </label>
            `;
          })
          .join('')}
      </div>

      <div class="nav">
        <button class="btn-back" data-back>Go Back</button>
        <button class="btn-next" data-next>Next Step</button>
      </div>
    </section>
  `;

  const stepFour = () => {
    const selectedAddons = Object.entries(state.form.addons).filter(([, selected]) => selected);
    return `
      <section class="panel">
        <div>
          <h1>Finishing up</h1>
          <p class="subtitle">Double-check everything looks OK before confirming.</p>

          <div class="summary">
            <div class="summary-row">
              <div>
                <div class="summary-plan">${plans[state.form.plan].label} (${state.form.billing})</div>
                <a href="#" data-change>Change</a>
              </div>
              <strong>${money(planPrice())}</strong>
            </div>
            <hr style="border:0;border-top:1px solid #e5e7eb;margin:12px 0;">
            ${
              selectedAddons.length
                ? selectedAddons
                    .map(
                      ([key]) => `
                        <div class="summary-row">
                          <span class="muted">${addons[key].label}</span>
                          <span>+${money(addons[key][state.form.billing])}</span>
                        </div>
                      `
                    )
                    .join('')
                : '<div class="summary-row"><span class="muted">No add-ons selected</span><span>$0</span></div>'
            }
          </div>

          <div class="total">
            <span>Total (per ${state.form.billing === 'monthly' ? 'month' : 'year'})</span>
            <strong>+$${total()}/${suffix()}</strong>
          </div>
        </div>

        <div class="nav">
          <button class="btn-back" data-back>Go Back</button>
          <button class="btn-confirm" data-confirm>Confirm</button>
        </div>
      </section>
    `;
  };

  const stepFive = () => `
    <section class="panel panel-center">
      <div class="thanks">
        <img src="./assets/images/icon-thank-you.svg" alt="Thank you" width="80" height="80">
        
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    </section>
  `;

  const view = () => {
    if (state.currentStep === 1) return stepOne();
    if (state.currentStep === 2) return stepTwo();
    if (state.currentStep === 3) return stepThree();
    if (state.currentStep === 4) return stepFour();
    return stepFive();
  };

  const bindCommon = () => {
    const backBtn = appRoot.querySelector('[data-back]');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (state.currentStep > 1) {
          state.currentStep -= 1;
          render();
        }
      });
    }

    const nextBtn = appRoot.querySelector('[data-next]');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (state.currentStep === 1 && !validateStepOne()) {
          render();
          return;
        }

        if (state.currentStep < 4) {
          state.currentStep += 1;
          render();
        }
      });
    }

    const confirmBtn = appRoot.querySelector('[data-confirm]');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        state.currentStep = 5;
        render();
      });
    }
  };

  const bindStepOne = () => {
    const nameInput = appRoot.querySelector('#name');
    const emailInput = appRoot.querySelector('#email');
    const phoneInput = appRoot.querySelector('#phone');

    if (nameInput) {
      nameInput.addEventListener('input', (event) => {
        state.form.name = event.target.value;
        if (state.errors.name && event.target.value.trim()) {
          delete state.errors.name;
          render();
        }
      });
    }

    if (emailInput) {
      emailInput.addEventListener('input', (event) => {
        state.form.email = event.target.value;
      });
    }

    if (phoneInput) {
      phoneInput.addEventListener('input', (event) => {
        state.form.phone = event.target.value;
      });
    }
  };

  const bindStepTwo = () => {
    appRoot.querySelectorAll('[data-plan]').forEach((node) => {
      node.addEventListener('click', () => {
        state.form.plan = node.getAttribute('data-plan');
        render();
      });
    });

    const billingInput = appRoot.querySelector('#billing');
    if (billingInput) {
      billingInput.addEventListener('change', (event) => {
        state.form.billing = event.target.checked ? 'yearly' : 'monthly';
        render();
      });
    }
  };

  const bindStepThree = () => {
    appRoot.querySelectorAll('[data-addon]').forEach((node) => {
      node.addEventListener('change', (event) => {
        const key = node.getAttribute('data-addon');
        state.form.addons[key] = event.target.checked;
        render();
      });
    });
  };

  const bindStepFour = () => {
    const changeLink = appRoot.querySelector('[data-change]');
    if (changeLink) {
      changeLink.addEventListener('click', (event) => {
        event.preventDefault();
        state.currentStep = 2;
        render();
      });
    }
  };

  const bind = () => {
    bindCommon();

    if (state.currentStep === 1) bindStepOne();
    if (state.currentStep === 2) bindStepTwo();
    if (state.currentStep === 3) bindStepThree();
    if (state.currentStep === 4) bindStepFour();
  };

  const render = () => {
    appRoot.classList.toggle('thank-you-mode', state.currentStep === 5);
    appRoot.innerHTML = `${sidebar()}${view()}`;
    bind();
  };

  render();
})();
