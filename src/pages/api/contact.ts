import { NextApiRequest, NextApiResponse } from "next";
import * as nodemailer from "nodemailer";
export default function (req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "mail.laurabelliniadv.com.br",
    auth: {
      user: "contato@laurabelliniadv.com.br",
    },
    secure: true,
  });

  const mailData = {
    from: req.body.email,
    to: "contato@laurabelliniadv.com.br",
    subject: `Formulário Site -  ${req.body.name}`,
    html: `
        <div>
            <strong>Nome:</strong>${req.body.name} </br>
            <strong>E-mail:</strong>${req.body.email} </br>
            <strong>Telefone:</strong>${req.body.phoneNumber} </br>
            <strong>Processo Cívil:</strong>${
              req.body.civil ? req.body.civil : "N/A"
            }
        </div>
    `,
  };

  transporter.sendMail(mailData, (err) => {
    if (!err) {
      return res.send({ message: "E-mail enviado com sucesso" });
    }
    return res.send({ message: "Tente novamente mais tarde" });
  });

  res.status(200);
}
