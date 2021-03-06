import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import DatePickerMonth from "./DatePicker_month";
// import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import "../CSS/LineChart.css";
import axios from "axios";
export default class LineChart_month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_by_selected_year: []
    };
    this.pickYear = this.pickYear.bind(this);
  }

  componentDidMount() {
    let token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios
      .get(
        `${process.env.REACT_APP_API_SERVER}/api/admin/product/chartDataYear`,
        config
      )
      .then(res => {
        console.log(res.data);
        let data = res.data;
        let list = [];
        for (let i = 0; i < data.length; i++) {
          list.push(data[i].total_ordered_quantity);
        }
        console.log(list);
        this.setState({
          data_by_selected_year: ["39", "40", ...list,"30","50","60","30","20","80","60","70","99"]
        });
      });
  }

  pickYear(data) {
    let list = [];
    for (let i = 0; i < data.length; i++) {
      list.push(data[i].total_ordered_quantity);
    }
    console.log(list);

    // let data_by_selected_year = data[0].total_ordered_quantity

    this.setState({
      data_by_selected_year: ["39", "40", ...list,"30","50","60","30","20","80","60","70","99"]
    });
  }
  render() {
    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: " Sales of coffee by month",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.data_by_selected_year
        }
      ]
    };
    const options = {
      maintainAspectRatio: false // Don't maintain w/h ratio
    };
    //    const displayName = 'LineExample',

    // const styles={
    //   datePicker:{
    //     padding:"30px"
    //   }
    // }
    return (
      <Card className="myLineChartCard">
        <DatePickerMonth pickYear={this.pickYear} />

        <Line data={data} option={options} />
      </Card>
    );
  }
}
