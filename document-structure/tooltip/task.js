document.addEventListener('DOMContentLoaded', () => {
  let activeTooltip = null;
  document.body.addEventListener('click', event => {
    const tipTarget = event.target.closest('.has-tooltip');
    if (tipTarget) {
      event.preventDefault();
      if (activeTooltip) {
        activeTooltip.remove();
      }
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip tooltip_active';
      tooltip.textContent = tipTarget.getAttribute('title');
      document.body.append(tooltip);
      const { left, bottom } = tipTarget.getBoundingClientRect();
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${bottom}px`;
      activeTooltip = tooltip;
    } else if (activeTooltip) {
      activeTooltip.remove();
      activeTooltip = null;
    }
  });
});
