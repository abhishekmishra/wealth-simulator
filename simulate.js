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

  const series = data.map(path => ({
    type: 'line',
    data: path,
    showSymbol: false,
    lineStyle: { width: 1, opacity: 0.6 }
  }));

  const chart = echarts.init(target);
  const option = {
    tooltip: {},
    xAxis: { type: 'category', data: Array.from({ length: years + 1 }, (_, i) => i) },
    yAxis: { type: 'log' },
    series: series
  };
  chart.setOption(option);
}

export { simulateWealth };