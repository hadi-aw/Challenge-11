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

    // Render bars and groups elements based on scaled data
    svg.selectAll('g')
    .data(data)
    .enter().append('g')
    .attr('transform', (d, i) => `translate(0, ${i * (20 + 1)})`)
    .append('rect')
    .attr('width', d => xScale(d))
    .attr('height', 20);

    // Add text labels to each bar
    svg.selectAll('g')
    .append('text')
    .attr('x', d => xScale(d) - 3) // Position text inside the bar, slightly offset from the end
    .attr('y', 20 / 2)
    .attr('dy', '.35em') // Vertically center
    .text(d => d);
