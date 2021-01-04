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
  doc.addSVG(svgNode, 0, 0, {
    imageCallback: function(imgSrc) {
      // load image src 
      // convert img into base64 string
      // return base64 string
    }
  });
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
      <svg className="svg" ref={svgNode} width="794" height="1123">
        <text y="20">What the fuck</text>
        <image href="/images/lastday.png" height="200" width="200" y="100"/>
      </svg>
      <div>
        <button onClick={ onCreatePDF }>print</button>
      </div>
    </div>
  )
}