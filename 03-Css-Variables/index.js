var inputs = document.querySelectorAll('.controls input');

function handleVariableChange() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleVariableChange));
inputs.forEach(input => input.addEventListener('mousemove', handleVariableChange));
