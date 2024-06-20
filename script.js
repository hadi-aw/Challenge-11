const data = [100, 420, 230, 850, 560, 925];
const svgWidth = 500;
const svgHeight = data.length * (20 + 1);

const svg = d3.select('body').append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

    // Linear scale for bar widths
    const xScale = d3.scaleLinear()
    .domain([d3.min(data), d3.max(data)])
    .range([50, svgWidth]);
