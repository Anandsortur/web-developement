import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'

inquirer.prompt([
    {
        name: "QRData",
        message: "Enter the data to be inserted in the QR code"
    }
])
    .then((answers) => {
        const data = answers.QRData; // get the input
        console.log("Generating QR for:", data);

        // Generate QR image
        const qr_svg = qr.image(data, { type: 'png' });
        qr_svg.pipe(fs.createWriteStream('qrwithdata.png'));

        console.log("QR Code saved as qrwithdata.png");
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("Something else went wrong:", error);
        }
    });
