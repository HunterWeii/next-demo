import { useRef } from "react";
import PDFKit from "node_modules/pdfkit/js/pdfkit.standalone";
import SVGToPDFkit from "svg-to-pdfkit";
import blobStream from "blob-stream";

PDFKit.prototype.addSVG = function(svg, x, y, options) {
  return SVGToPDFkit(this, svg, x, y, options), this;
};

function createPDF(svgNode) {
  const doc = new PDFKit();
  const stream = doc.pipe(blobStream())
  doc.addSVG(svgNode, 0, 0);
  doc.end();

  stream.on("finish", () => {
    const blob = stream.toBlob("application/pdf");
    const pdf = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = pdf;
    link.download = "test";
    link.click();
  })
}


export default function index() {
  const svgNode = useRef(null);

  const onCreatePDF = () => createPDF(svgNode.current);

  return (
    <div>
      <svg className="svg" ref={svgNode} width="794" height="1123"><g transform="translate(0,0)"><rect y="477.5280898876405" width="119" height="22.471910112359524" fill="rgb(0, 122, 11)"></rect><text x="60" y="480.5280898876405" dy=".75em">4</text></g><g transform="translate(120,0)"><rect y="455.0561797752809" width="119" height="44.943820224719104" fill="rgb(0, 116, 23)"></rect><text x="60" y="458.0561797752809" dy=".75em">8</text></g><g transform="translate(240,0)"><rect y="393.2584269662921" width="119" height="106.74157303370788" fill="rgb(0, 101, 54)"></rect><text x="60" y="396.2584269662921" dy=".75em">19</text></g><g transform="translate(360,0)"><rect y="410.1123595505618" width="119" height="89.88764044943821" fill="rgb(0, 105, 46)"></rect><text x="60" y="413.1123595505618" dy=".75em">16</text></g><g transform="translate(480,0)"><rect y="370.78651685393254" width="119" height="129.21348314606746" fill="rgb(0, 95, 66)"></rect><text x="60" y="373.78651685393254" dy=".75em">23</text></g><g transform="translate(600,0)"><rect y="264.0449438202247" width="119" height="235.95505617977528" fill="rgb(0, 68, 120)"></rect><text x="60" y="267.0449438202247" dy=".75em">42</text></g><g transform="translate(720,0)"><rect y="89.88764044943821" width="119" height="410.1123595505618" fill="rgb(0, 23, 209)"></rect><text x="60" y="92.88764044943821" dy=".75em">73</text></g><g transform="translate(840,0)"><rect y="0" width="119" height="500" fill="rgb(0, 0, 255)"></rect><text x="60" y="3" dy=".75em">89</text></g><g transform="translate(0, 400)" fill="none" fontSize="10" fontFamily="sans-serif" textAnchor="end"><path className="domain" stroke="#000" d="M-6,500.5H0.5V0.5H-6"></path><g className="tick" opacity="1" transform="translate(0,500)"><line stroke="#000" x2="-6" y1="0.5" y2="0.5"></line><text fill="#000" x="-9" y="0.5" dy="0.32em">0</text></g><g className="tick" opacity="1" transform="translate(0,443.82022471910113)"><line stroke="#000" x2="-6" y1="0.5" y2="0.5"></line><text fill="#000" x="-9" y="0.5" dy="0.32em">10</text></g><g className="tick" opacity="1" transform="translate(0,387.64044943820227)"><line stroke="#000" x2="-6" y1="0.5" y2="0.5"></line><text fill="#000" x="-9" y="0.5" dy="0.32em">20</text></g><g className="tick" opacity="1" transform="translate(0,331.4606741573034)"><line stroke="#000" x2="-6" y1="0.5" y2="0.5"></line><text fill="#000" x="-9" y="0.5" dy="0.32em">30</text></g><g className="tick" opacity="1" transform="translate(0,275.28089887640454)"><line stroke="#000" x2="-6" y1="0.5" y2="0.5"></line><text fill="#000" x="-9" y="0.5" dy="0.32em">40</text></g><g className="tick" opacity="1" transform="translate(0,219.1011235955056)"><line stroke="#000" x2="-6" y1="0.5" y2="0.5"></line><text fill="#000" x="-9" y="0.5" dy="0.32em">50</text></g><g className="tick" opacity="1" transform="translate(0,162.92134831460675)"><line stroke="#000" x2="-6" y1="0.5" y2="0.5"></line><text fill="#000" x="-9" y="0.5" dy="0.32em">60</text></g><g className="tick" opacity="1" transform="translate(0,106.74157303370782)"><line stroke="#000" x2="-6" y1="0.5" y2="0.5"></line><text fill="#000" x="-9" y="0.5" dy="0.32em">70</text></g><g className="tick" opacity="1" transform="translate(0,50.561797752809014)"><line stroke="#000" x2="-6" y1="0.5" y2="0.5"></line><text fill="#000" x="-9" y="0.5" dy="0.32em">80</text></g></g></svg>
      <div>
        <button onClick={ onCreatePDF }>print</button>
      </div>
    </div>
  )
}