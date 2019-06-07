import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

export default class BarChart extends Component {

    componentDidMount() {
        this.drawChart()
    }

    drawChart = () => {
        const data = [12, 5, 6, 6, 9, 1-0];
        const w = 700;
        const h = 300;
        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("margin-left", 100);
                        
            svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")

            // To add Text to the Bar Chart
            svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - (10 * d) - 3)
    }
    
    render() {
        const { id } = this.props;
        return (
            <div id={"#" + id}>
                H
            </div>
        )
    }

    static propTypes = {
        prop: PropTypes
    }
}
