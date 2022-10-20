import { useState, ChangeEvent } from "react";
import * as Styles from "./styles";

interface InputProps {
  name: string;
  phone: string;
  civil: string;
  email: string;
  text: string;
}

const Form = () => {
  const [filedValues, setFiledValues] = useState<InputProps>({
    name: "",
    phone: "",
    civil: "",
    email: "",
    text: "",
  });

  const handleClickSend = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    console.log(filedValues);
    setFiledValues({
      name: "",
      phone: "",
      civil: "",
      email: "",
      text: "",
    });
  };

  return (
    <Styles.ContainerMain>
      <Styles.ContainerForm>
        <Styles.Form>
          <h1>Solicitar Consulta</h1>
          <p>
            Área referente às obrigações tributárias, arrecadação de impostos,
            taxas, empréstimos e contribuições especiais
          </p>
          <Styles.ContainerInputs>
            <Styles.ContentOne>
              <input
                type="text"
                name="name"
                value={filedValues.name}
                placeholder="Nome*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFiledValues((prev) => ({
                    ...prev,
                    ["name"]: e.target.value,
                  }))
                }
              />
              <input
                type="tel"
                name="phone"
                value={filedValues.phone}
                placeholder="Telefone*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFiledValues((prev) => ({
                    ...prev,
                    ["phone"]: e.target.value,
                  }))
                }
              />
            </Styles.ContentOne>
            <Styles.ContentTwo>
              <input
                type="text"
                name="civil"
                value={filedValues.civil}
                placeholder="Civil"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFiledValues((prev) => ({
                    ...prev,
                    ["civil"]: e.target.value,
                  }))
                }
              />
              <input
                type="email"
                name="email"
                value={filedValues.email}
                placeholder="E-mail*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFiledValues((prev) => ({
                    ...prev,
                    ["email"]: e.target.value,
                  }))
                }
              />
            </Styles.ContentTwo>
          </Styles.ContainerInputs>
          <Styles.ContainerTextArea>
            <textarea
              value={filedValues.text}
              onChange={(e: any) =>
                setFiledValues((prev) => ({
                  ...prev,
                  ["text"]: e.target.value,
                }))
              }
              placeholder="Mensagem"
            ></textarea>
          </Styles.ContainerTextArea>
        </Styles.Form>
        <button onClick={(e: any) => handleClickSend(e)}>
          Solicitar agora
        </button>
      </Styles.ContainerForm>
    </Styles.ContainerMain>
  );
};

export default Form;
