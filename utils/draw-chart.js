import * as d3 from "d3";

function createSvg() {
  const svg = d3
    .select('#pie-container')
    .append('svg')
    .attr('width', WIDTH)
    .attr('height', HEIGHT)
    .append('g')
    .attr('transform', `translate(${WIDTH/2}, ${HEIGHT/2})`);

  return svg;
}

function arcGenerator() {
  return d3.arc()
          .innerRadius(INNERRADIUS)
          .outerRadius(OUTERRADIUS);
}

function createArc(svg, data) {
  const _arc = svg
                .selectAll()
                .data(pieGenerator()(data))
                .enter();

  
        
  return _arc;
}

function arcPath(arc) {
  arc
    .append('path')
    .attr('d', arcGenerator())
    .style('fill', ((_, i) => colorScale[i] ))
    .style('stroke', '#fff')
    .style('stroke-width', 0);
}

function arcText(arc) {
  arc
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .text(d => (d.data.label))
    .style('fill', (_, i) => FONTCOLOR)
    .style('font-size', '12px')
    .attr('transform', d => {
      const [x, y] = arcGenerator().centroid(d);
      return `translate(${x}, ${y})`;
    })
}

function pieGenerator() {
  return d3.pie()
          .padAngle(0)
          .value(d => d.value);
}

function removeChart() {
  d3
    .select('#pie-container')
    .select("svg")
    .remove();
}

export default function drawChart(data) {
  removeChart();

  const svg = createSvg();
  const arc = createArc(svg, data);

  arcPath(arc);
  arcText(arc);
}

const colorScale = [ '#1976D2', '#EF5350',  ];
const FONTCOLOR = "#424242";
const WIDTH = 160;
const HEIGHT = 160;
const INNERRADIUS = WIDTH / 5;
const OUTERRADIUS = INNERRADIUS * 2;