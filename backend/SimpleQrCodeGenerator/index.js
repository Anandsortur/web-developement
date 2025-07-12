import inquirer from 'inquirer'
let data = ""
inquirer.prompt([
    {
        name: "QRData",
        message: "Enter the data to be inserted in the QR code"
    }
])
    .then((answers) => {
        data = answers
        console.log(answers.QRData)
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment")
        } else {
            console.log("Something else went wrong")
        }
    });