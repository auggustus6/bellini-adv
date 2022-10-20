import * as Styles from "./styles";

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: () => {
      setMessage("Form submitted");
      setSubmitted(true);
    },

    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      message: yup.string().trim().required("Message is required"),
    }),
  });
  return (
    <Styles.ContainerMain>
      <Styles.ContainerForm>
        <Styles.Form>
          <h1>Solicitar Consulta</h1>
          <p>
            Área referente às obrigações tributárias, arrecadação de impostos,
            taxas, empréstimos e contribuições especiais
          </p>
          <div hidden={!submitted}>{message}</div>
          <Styles.ContainerInputs>
            <Styles.ContentOne>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && <div>{formik.errors.name}</div>}
            </Styles.ContentOne>
            <Styles.ContentTwo>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && <div>{formik.errors.email}</div>}
            </Styles.ContentTwo>
          </Styles.ContainerInputs>
          <Styles.ContainerTextArea>
            <textarea
              name="message"
              placeholder="Mensagem"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            {formik.errors.message && <div>{formik.errors.message}</div>}
          </Styles.ContainerTextArea>
          <button type="submit">Solicitar agora</button>
        </Styles.Form>
      </Styles.ContainerForm>
    </Styles.ContainerMain>
  );
};

export default ContactForm;
