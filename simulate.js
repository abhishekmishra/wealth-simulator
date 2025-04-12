function simulateWealth({ gain, loss, probGain, years, simulations, target }) {
  const data = [];
  for (let i = 0; i < simulations; i++) {
    let path = [100];
    let wealth = 100;
    for (let t = 1; t <= years; t++) {
      const r = Math.random();
      wealth *= r < probGain ? gain : loss;
      path.push(wealth);
    }
    data.push(path);
  }

  // Calculate ensemble average (mean across all simulations at each time step)
  const ensembleAvg = Array.from({ length: years + 1 }, (_, t) => {
    const valuesAtT = data.map(path => path[t]);
    const sum = valuesAtT.reduce((a, b) => a + b, 0);
    return sum / valuesAtT.length;
  });

  const averageSeries = {
    type: 'line',
    data: ensembleAvg,
    showSymbol: false,
    name: 'Ensemble Average',
    lineStyle: { width: 2, color: 'red' }
  };

  const series = data.map(path => ({
    type: 'line',
    data: path,
    showSymbol: false,
    lineStyle: { width: 1, opacity: 0.6 }
  }));
  series.push(averageSeries);

  const chart = echarts.init(target);
  const option = {
    tooltip: {},
    xAxis: { type: 'category', data: Array.from({ length: years + 1 }, (_, i) => i) },
    yAxis: { type: 'log' },
    series: series,
    legend: {
      data: ['Ensemble Average']
    },
  };
  chart.setOption(option);
}

export { simulateWealth };