import PDFKit from "node_modules/pdfkit/js/pdfkit.standalone";
import SVGToPDFkit from "svg-to-pdfkit";
import blobStream from "blob-stream";

PDFKit.prototype.addSVG = function(svg, x, y, options) {
  return SVGToPDFkit(this, svg, x, y, options), this;
};

export default function drawPDF () {
  const svgNode = document.querySelector('#pie-container > svg');

  if(!svgNode) return;

  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFKit();
      const stream = doc.pipe(blobStream());
      
      doc.addSVG(svgNode, 0, 0);
      doc.end();

      stream.on("finish", () => {
        const blob = stream.toBlob("application/pdf");
        const pdf = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = pdf;
        link.download = "test";
        link.click();
      });

      resolve(true);
    } catch(error) {
      reject(error);
    }
  });

  
}