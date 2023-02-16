import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    let values = props.data.map((item) => {
        return item.value; 
    });
    let maxVal = Math.max(...values);
    return (
        <div className="chart">
            {props.data.map((item) => (
                <ChartBar
                    key={item.label}
                    value={item.value}
                    maxValue={maxVal}
                    label={item.label}
                />
            ))}
        </div>
    );
};

export default Chart;
