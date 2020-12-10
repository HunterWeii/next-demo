import PDFKit from "node_modules/pdfkit/js/pdfkit.standalone";
import SVGToPDFkit from "svg-to-pdfkit";
import blobStream from "blob-stream";
import dateFns from "utils/date-fn";

PDFKit.prototype.addSVG = function(svg, x, y, options) {
  return SVGToPDFkit(this, svg, x, y, options), this;
};

export default function drawPDF ([ finish, unfinish ]) {
  const svgNode = document.querySelector('#pie-container > svg');

  if(!svgNode) return;

  return new Promise((resolve, reject) => {
    const {
      date,
      month,
      year,
      day
    } = dateFns();

    try {
      const doc = new PDFKit();
      const stream = doc.pipe(blobStream());
      
      doc.fontSize(16);
      doc.text("Your Todo List Report", 20, 40, { underline: true });

      doc.fontSize(10);
      doc.text(`${ date } ${month} ${year}, ${day}`, 20, 70);
      
      doc.addSVG(svgNode, 20, 80);

      let lineStart = 240;
      doc.text("Finished Task:", 20, 220, { underline: true });
      finish.forEach((item, index) => {
        doc.text(`${index + 1}. ${item.text}`, 20, lineStart);
        lineStart += 10;
      });

      lineStart += 20;
      doc.text("Unfinished Task:", 20, lineStart, { underline: true });
      lineStart += 20;

      unfinish.forEach((item, index) => {
        doc.text(`${index + 1}. ${item.text}`, 20, lineStart);
        lineStart += 10;
      });

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