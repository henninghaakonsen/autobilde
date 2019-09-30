const nodemailer = require("nodemailer");
const logger = require("loglevel");
logger.setDefaultLevel(logger.levels.INFO);

const sendMail = (res, body) => {
    console.log(process.env.user);

    let transporter = nodemailer.createTransport({
        host: "smtp.googlemail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.user,
            pass: process.env.password
        }
    });

    let mailOptions = {
        from: body.epost,
        to: process.env.mottaker,
        subject: "Kontakt via nettside",
        html: `<div>
            <h5>Navn:</h5>
            <div>${body.navn}</div>
            <h5>E-post:</h5>
            <div>${body.epost}</div>
            <h5>Melding:</h5>
            <div>${body.melding}</div>
        </div>`
    };

    logger.info(`Sender epost fra ${body.navn} med innhold:\n${body.melding}`);

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send();
            logger.error(error);
        }

        logger.info("Melding sendt vellykket: %s", info);
        res.status(200).send();
    });
};

exports.sendMail = sendMail;
