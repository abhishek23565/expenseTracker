import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";


function Chart(props) {
    const dataPointValues = props.dataPoints.map(datapnt => datapnt.value);
    const totalMax = Math.max(...dataPointValues);

    return (<div className="chart">
        {props.dataPoints.map(datapoint =>
            <ChartBar
                key={datapoint.label}
                value={datapoint.value}
                maxVal={totalMax}
                label={datapoint.label}
            />)}
    </div>);
}

export default Chart;