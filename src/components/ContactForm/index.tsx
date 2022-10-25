import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as Styles from "./styles";

const phoneNumber = (phone: string) => {
  phone = phone.replace(/[^\d]/g, "");

  if (phone.length > 2) {
    phone = phone.replace(/^(\d{2})(\d*)/, "($1) $2");
  }
  if (phone.length > 9) {
    phone = phone.replace(/^(.*)(\d{4})$/, "$1-$2");
  }

  return phone;
};

const ContactForm = () => {
  const contactInSchema = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório"),
    message: Yup.string().required("Envie uma mensagem"),
    email: Yup.string()
      .email("Por favor insira um e-mail válido")
      .required("Email obrigatório"),
    phoneNumber: Yup.string().required("Teste"),
  });

  interface FormValues {
    name: string;
    phoneNumber: string;
    email: string;
    civil: string;
    message: string;
  }

  const initialValues: FormValues = {
    name: "",
    phoneNumber: "",
    email: "",
    civil: "",
    message: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactInSchema}
      onSubmit={(values: FormValues, { resetForm }) => {
        resetForm({
          values: {
            name: "",
            phoneNumber: "",
            email: "",
            civil: "",
            message: "",
          },
        });
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty, setFieldValue } = formik;
        return (
          <Styles.ContainerMain>
            <Styles.ContainerForm>
              <Styles.FormContact>
                <h1>Solicitar Consulta</h1>
                <p>
                  Área referente às obrigações tributárias, arrecadação de
                  impostos, taxas, empréstimos e contribuições especiais
                </p>
                <Form>
                  <Styles.ContainerInputs>
                    <Styles.ContentOne>
                      <Styles.FormRow>
                        <Field
                          type="text"
                          placeholder="Nome*"
                          name="name"
                          id="name"
                          className={
                            errors.name && touched.name ? "input-error" : null
                          }
                        />
                        <ErrorMessage
                          name="name"
                          component="span"
                          className="error"
                        />
                      </Styles.FormRow>
                      <Styles.FormRow>
                        <Field
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>,
                          ) => {
                            const mask = phoneNumber(String(e.target.value));
                            setFieldValue("phoneNumber", mask);
                          }}
                          placeholder="Telefone*"
                          type="phone"
                          name="phoneNumber"
                          maxLength="15"
                          id="phoneNumber"
                          className={
                            errors.phoneNumber && touched.phoneNumber
                              ? "input-error"
                              : null
                          }
                        />
                        <ErrorMessage
                          name="phoneNumber"
                          component="span"
                          className="error"
                        />
                      </Styles.FormRow>
                    </Styles.ContentOne>
                    <Styles.ContentTwo>
                      <Styles.FormRow>
                        <Field
                          type="text"
                          placeholder="Civil"
                          name="civil"
                          id="civil"
                          className={
                            errors.civil && touched.civil ? "input-error" : null
                          }
                        />
                        <ErrorMessage
                          name="civil"
                          component="span"
                          className="error"
                        />
                      </Styles.FormRow>
                      <Styles.FormRow>
                        <Field
                          placeholder="E-mail*"
                          type="email"
                          name="email"
                          id="email"
                          className={
                            errors.email && touched.email ? "input-error" : null
                          }
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error"
                        />
                      </Styles.FormRow>
                    </Styles.ContentTwo>
                  </Styles.ContainerInputs>
                  <Styles.ContainerTextArea>
                    <Styles.FormRow>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        placeholder="Mensagem"
                        className={
                          errors.email && touched.email ? "input-error" : null
                        }
                      />
                      <ErrorMessage
                        name="message"
                        component="span"
                        className="error"
                      />
                    </Styles.FormRow>
                  </Styles.ContainerTextArea>
                  <button
                    type="submit"
                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                    disabled={!(dirty && isValid)}
                  >
                    Solicitar agora
                  </button>
                </Form>
              </Styles.FormContact>
            </Styles.ContainerForm>
          </Styles.ContainerMain>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
