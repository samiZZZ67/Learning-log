(() => {
  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function typeText(element, text, speedMs, delayMs) {
    if (!element) return;
    if (prefersReducedMotion) {
      element.textContent = text;
      element.classList.remove("typewriter-caret");
      return;
    }

    const speed = Number.isFinite(speedMs) ? speedMs : 28;
    const delay = Number.isFinite(delayMs) ? delayMs : 0;

    element.textContent = "";
    element.classList.add("typewriter-caret");

    if (delay > 0) {
      await sleep(delay);
    }

    for (let i = 0; i < text.length; i += 1) {
      element.textContent += text[i];
      // a tiny natural jitter, but keep it subtle
      const jitter = i % 6 === 0 ? 10 : 0;
      await sleep(speed + jitter);
    }

    element.classList.remove("typewriter-caret");
  }

  function initTypewriters() {
    const nodes = document.querySelectorAll("[data-typewriter]");
    nodes.forEach((node) => {
      const attrText = node.getAttribute("data-text");
      const rawText = attrText !== null ? attrText : node.textContent ?? "";
      const text =
        attrText !== null ? rawText : String(rawText).replace(/\s+/g, " ").trim();
      const speed = Number(node.getAttribute("data-speed") ?? "28");
      const delay = Number(node.getAttribute("data-delay") ?? "0");
      typeText(node, text, speed, delay);
    });
  }

  function initFieldEffects() {
    const fields = document.querySelectorAll("input, textarea");
    fields.forEach((field) => {
      field.addEventListener("input", () => {
        field.classList.add("is-typing");
        window.clearTimeout(field.__typingTimer);
        field.__typingTimer = window.setTimeout(() => {
          field.classList.remove("is-typing");
        }, 220);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTypewriters();
    initFieldEffects();
  });
})();
