export function setupConceptDemos() {
  const cards = document.querySelectorAll<HTMLElement>(".concept-card[data-concept-demo]");
  if (cards.length === 0) return;

  const STEP_DELAY_MS = 900;
  const END_HOLD_MS = 1800;

  cards.forEach((card) => {
    const steps = Array.from(card.querySelectorAll<HTMLElement>("[data-step]"));
    const maxStep = steps.reduce((max, el) => {
      const value = Number(el.dataset.step);
      return Number.isFinite(value) ? Math.max(max, value) : max;
    }, 0);
    if (maxStep === 0) return;

    let currentStep = 0;
    let timerId = 0;

    const isCardVisible = () =>
      card.closest(".slide")?.classList.contains("active") &&
      card.classList.contains("f-visible");

    const applyStep = (step: number) => {
      card.classList.toggle("is-playing", step > 0);
      steps.forEach((el) => {
        const elStep = Number(el.dataset.step);
        el.classList.toggle("is-active", elStep <= step);
      });

      const promptGoal = card.querySelector<HTMLElement>(".prompt-goal");
      promptGoal?.classList.toggle("is-active", step >= maxStep);

      const contextCore = card.querySelector<HTMLElement>(".context-core");
      contextCore?.classList.toggle("is-active", step >= 2);

      const progressFill = card.querySelector<HTMLElement>(".agent-progress-fill");
      if (progressFill) {
        progressFill.style.width = `${Math.max(1, step) * 25}%`;
      }
    };

    const scheduleNext = (delay: number) => {
      window.clearTimeout(timerId);
      timerId = window.setTimeout(tick, delay);
    };

    const tick = () => {
      if (!isCardVisible()) {
        currentStep = 0;
        applyStep(0);
        scheduleNext(STEP_DELAY_MS);
        return;
      }

      currentStep = currentStep >= maxStep ? 0 : currentStep + 1;
      applyStep(currentStep);

      if (currentStep === maxStep) {
        scheduleNext(END_HOLD_MS);
        return;
      }

      scheduleNext(STEP_DELAY_MS);
    };

    applyStep(0);
    scheduleNext(STEP_DELAY_MS);
  });
}
