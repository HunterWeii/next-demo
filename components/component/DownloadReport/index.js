import Button from "components/lib/button";
import drawPDF from "utils/draw-pdf";
import { useState } from "react";
import { connect } from "react-redux";

function DownloadReport(props) {
  const {
    item,
    finish,
    unfinish
  } = props;

  const [ buttonDisabled, setButtonDisabled ] = useState(false);
  const [ buttonText, setButtonText ] = useState("Download");

  const onReportDownload = async () => {
    setButtonDisabled(true);
    setButtonText("Generate ...");
    console.log(finish)
    await drawPDF([finish, unfinish]);

    setButtonDisabled(false);
    setButtonText("Download")
  };

  return (
    <>
    {  
      item.length === 0 ? <Button disabled>{ buttonText }</Button> : <Button disabled={ buttonDisabled } onClick={ onReportDownload }>{ buttonText }</Button>
    }
    </>
  )
}

const mapPropsToState = state => {
  return {
    item: state,
    finish: state.filter(item => item.isDone),
    unfinish: state.filter(item => !item.isDone)
  } 
};

export default connect(mapPropsToState)( DownloadReport );