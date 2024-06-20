const data = [100, 420, 230, 850, 560, 925];
const svgWidth = 500;
const svgHeight = data.length * (20 + 1);

const svg = d3.select('body').append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);