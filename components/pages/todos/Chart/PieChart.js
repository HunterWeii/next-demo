import style from "./chart.module.scss";
import drawChart from "utils/draw-chart";
import React, { useEffect } from 'react';
import { connect } from "react-redux";

const {
  chart_container
} = style;


const PieChart = (props) => {
  const {
    data,
    item
  } = props;
  
  useEffect(() => {
    drawChart(data);
  }, [ data ])

  if( item.length <= 0 ) return null;

  return (
    <div id="pie-container" className={ chart_container }></div>
  )
};

const mapStateToProps = state => {
  let [ finish, unfinish ] = [0, 0];
  
  state.forEach( item => {
    if(item.isDone) finish++
    else unfinish++;
  })

  return {
    item: state,
    data: [
      { value: finish, label: finish > 0 ? `Finish (${finish})` : '' },
      { value: unfinish, label: unfinish > 0 ? `Unfinish (${unfinish})` : '' }
    ]
  }
};

export default connect( mapStateToProps, null )(PieChart);