import React, { PropTypes } from 'react'

class Analyzer extends React.Component {
  componentDidUpdate(prevProps) {
    const { data } = this.props
    console.log(data.length)
    if(data.length > 0) {
      d3.select("svg").remove()
      this.renderChart()
    }
  }

  renderChart() {
    const { data } = this.props

    const margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    const x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    const y = d3.scale.linear()
        .range([height, 0]);

    const xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    const yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(1);

    const svg = d3.select(".chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



    x.domain(data.map(track => track.artist));
    y.domain([0, d3.max(data, function(d) { return d.occured; })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -15)
        .attr("x", -15)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Occured");

    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.artist); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.occured); })
        .attr("height", function(d) { return height - y(d.occured); });
  }

  render() {
    return (
      <div className="chart"/>
    )
  }
}

Analyzer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      artist: PropTypes.string,
      occured: PropTypes.number
    }).isRequired
  ).isRequired,
}

export default Analyzer;
