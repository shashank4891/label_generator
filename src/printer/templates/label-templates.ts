export function awbPublicLabelTemplate(data: any) {
  const pagesArray: string[] = [];

  for (let i = 1; i <= data.total_num_of_box; i++) {
    pagesArray.push(`
      <div class="label-page">
        <table border="0" cellpadding="0" cellspacing="0">
          <tr class="row0;">
            <td colspan="2">
              <div class="barcode-container">
                <div style="display:flex; width:200px;">
                </div>
                <div>${data.awb}</div>
              </div>
            </td>
            <td style="width: 32%;">TQS Logistics</td>
          </tr>

          <tr class="row1" style="height: 50px;">
            <td class="awb-data">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr><td colspan="2"> TQS AWB NO. </td></tr>
                <tr><td class="style0" colspan="2">${data.awb}</td></tr>      
              </table>
            </td>
            <td class="docket-data">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr><td colspan="2">Docket no</td></tr>
                <tr><td class="style0" colspan="2">${data.forwarding_number}</td></tr>
              </table>
            </td>
            <td class="delhivery-logo">${data.vendor_name ?? ''}</td>
          </tr>

          <tr class="row2" style="height: 25%;">
            <td colspan="4">${data.origin} to ${data.destination}</td>
          </tr>
          <tr class="row3">
            <td colspan="4" style="height: 30%;">
              <div class="row3-content">
                <div class="barcode-container">
                  <div style="display:flex; width:200px;">
                  </div>
                  <div>${data.forwarding_number}-${i}</div>
                </div>
                <div class="right-number">${i} / ${data.total_num_of_box}</div>
              </div>
            </td>
          </tr>
        </table>
      </div>`);
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TQS Logistics Service</title>
  <style>
body {
      margin: 0;
      padding: 0;
    }

    table {
      width: 100%;
      height: 100%;
      border-collapse: collapse;
      text-align: center;
    }

    td,
    th {
      border: 1px solid black;
      font-size: 12px;
      /* Reduce font size to fit in the PDF */
    }

    td table {
      width: 100%;
      border-collapse: collapse;
      border: none;
    }

    .label-page {
      width: 4in;
      height: 2.5in;
      padding: 5px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      page-break-after: always;
      align-items: center;
      text-align: center;
      font-size: 10px;
      font-family: Helvetica, sans-serif;
      background-color: white;
      margin: 0;
      overflow: hidden;
    }

    .awb {
      font-weight: 700;
    }

    .awb-data td,
    .docket-data td {
      border: 1px solid black;
      border-top: none;
      border-right: none;
      border-left: none;
    }

    .awb-data .style0 {
      border-bottom: none;
    }

    .docket-data .style0 {
      border-bottom: none;
    }

    .barcode-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 5px;
      padding-left: 5px;
    }

    .barcode {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
      padding: 5px;
      margin-bottom: -2px;
    }

    .barcode img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      margin: -8px;
      padding: 5px;
      border: none;
    }

    .row0 .barcode img {
      width: 50%;
      height: 45%;
      object-fit: contain;
      margin-top: -14px;
    }

    .row3 .barcode img {
      width: 46%;
      height: 40%;
      object-fit: contain;
      margin-top: -14px;
    }

    .row3-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .row3-content .number-below-barcode {
      text-align: left;
    }

    .row3-content .right-number {
      text-align: right;
      padding-right: 25px;
    }
  </style>
</head>
<body>
  ${pagesArray.join('')}
</body>
</html>`;
}
