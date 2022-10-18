(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileCloseRef = document.querySelector('[data-menu-close]');
  const mobileContainerRef = document.querySelector('[data-menu-container]');
  const mobileCowRef = document.querySelector('[data-menu-cow]');
  const mobileSplat1Ref = document.querySelector('[data-menu-splat1]');
  const mobileSplat2Ref = document.querySelector('[data-menu-splat2]');
  const mobileSplat3Ref = document.querySelector('[data-menu-splat3]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    const expandud =
      mobileCloseRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileCloseRef.classList.toggle('is-open');
    mobileCloseRef.setAttribute('aria-expanded', !expandud);

    mobileMenuRef.classList.toggle('is-open');
    mobileContainerRef.classList.toggle('is-open');
    mobileCowRef.classList.toggle('is-open');
    mobileSplat1Ref.classList.toggle('is-open');
    mobileSplat2Ref.classList.toggle('is-open');
    mobileSplat3Ref.classList.toggle('is-open');
  });

  mobileCloseRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    const expandud =
      mobileCloseRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileCloseRef.classList.toggle('is-open');
    mobileCloseRef.setAttribute('aria-expanded', !expandud);

    mobileMenuRef.classList.toggle('is-open');
    mobileContainerRef.classList.toggle('is-open');
    mobileCowRef.classList.toggle('is-open');
    mobileSplat1Ref.classList.toggle('is-open');
    mobileSplat2Ref.classList.toggle('is-open');
    mobileSplat3Ref.classList.toggle('is-open');
  });
})();
