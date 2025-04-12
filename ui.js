import { simulateWealth } from './simulate.js';

document.querySelectorAll('.sim-example').forEach(div => {
  const params = JSON.parse(div.dataset.params);
  const paramsDisplay = document.createElement('div');
  paramsDisplay.textContent = `Gain: ${params.gain}, Loss: ${params.loss}, ProbGain: ${params.probGain}, Years: ${params.years}, Simulations: ${params.simulations}`;
  paramsDisplay.style.marginBottom = '10px';
  div.parentNode.insertBefore(paramsDisplay, div);

  div.style.cursor = 'pointer';
  simulateWealth({ ...params, target: div });
  div.addEventListener('dblclick', () => {
    simulateWealth({ ...params, target: document.getElementById('main-sim') });
    document.getElementById('gain').value = params.gain;
    document.getElementById('loss').value = params.loss;
    document.getElementById('probGain').value = params.probGain;
    document.getElementById('years').value = params.years;
    document.getElementById('simulations').value = params.simulations;
  });
});

document.getElementById('sim-form').addEventListener('submit', e => {
  e.preventDefault();
  const gain = parseFloat(document.getElementById('gain').value);
  const loss = parseFloat(document.getElementById('loss').value);
  const probGain = parseFloat(document.getElementById('probGain').value);
  const years = parseInt(document.getElementById('years').value);
  const simulations = parseInt(document.getElementById('simulations').value);
  simulateWealth({ gain, loss, probGain, years, simulations, target: document.getElementById('main-sim') });
});

const firstParams = JSON.parse(document.querySelector('.sim-example').dataset.params);
simulateWealth({ ...firstParams, target: document.getElementById('main-sim') });