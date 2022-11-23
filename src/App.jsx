import { useState } from "react"
import { Button, Input, message } from "antd"
import styled from "styled-components"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
`

const ContainerButton = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 30px
`

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
`

const Text = styled.h1`
  color: white;
  padding-bottom: 50px
`

const TextInput = styled.h3`
  color: white;
`
const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px
`
const ContainerResponse = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px
`

function Cryptograph() {
  const [messageCript, setMessageCript] = useState('');
  const [messageDescript, setMessageDescript] = useState('');

  const handleMessageCript = (event) => {
    setMessageCript(event.target.value)
  }

  const handleMessageDescript = (event) => {
    setMessageDescript(event.target.value)
  }

  const messageInCharCodeCript = () => {
    const messageEmUpperCase = messageCript.toUpperCase();
    const messageEmArray = messageEmUpperCase.split('');
    const transformandoEmCharCode = messageEmArray.map(value => {
      const charCode = value.charCodeAt();
      return charCode;
    })
    return transformandoEmCharCode;
  }

  const messageInCharCodeDescript = () => {
    const messageEmUpperCase = messageDescript.toUpperCase();
    const messageEmArray = messageEmUpperCase.split('');
    const transformandoEmCharCode = messageEmArray.map(value => {
      const charCode = value.charCodeAt();
      return charCode;
    })
    return transformandoEmCharCode;
  }

  const criptografando = () => {
    const fazendoComChave = messageInCharCodeCript().map((item) => {
      const chave = 15;

      if (item > 64 && item < 91) {
        item = ((item - 65 + chave) % 26) + 65
        return item
      }
    });
    
    return fazendoComChave;
  };

  const descriptografando = () => {
    const fazendoComChave = messageInCharCodeDescript().map((item) => {
      const chave = 15;

      if (item > 64 && item < 91) {
        item = ((item - 90 - chave) % 26) + 90
        return item
      }
    });
    
    return fazendoComChave;
  };

  const transformandoEmStringCript = () => {
    const arrayEmString = criptografando();
    const transformandoEmString = String.fromCharCode.apply(this, arrayEmString);
    return transformandoEmString;
  }

  const transformandoEmStringDescript = () => {
    const arrayEmString = descriptografando();
    const transformandoEmStringDescriptografada = String.fromCharCode.apply(this, arrayEmString);
    return transformandoEmStringDescriptografada;
  }

  const mostrarNaTelaMensagemCript = () => {
    const mensagemCriptografada = transformandoEmStringCript();
    return mensagemCriptografada;
  }

  const mostrarNaTelaMensagemDescript = () => {
    const mensagemDescriptografada = transformandoEmStringDescript();
    return mensagemDescriptografada;
  }

  const showResultOnPage = () => {
    const resultMessage = mostrarNaTelaMensagemCript()
    return (
      <ContainerResponse>
        <TextInput>Esta é a sua mensagem criptografada:</TextInput>
        <TextInput>{resultMessage}</TextInput>  
      </ContainerResponse>
    ) 
  };

  const showResultOnPage2 = () => {
    const resultMessage = mostrarNaTelaMensagemDescript()
    return (
      <ContainerResponse>
        <TextInput>Esta é a sua mensagem descriptografada:</TextInput>
        <TextInput>{resultMessage}</TextInput>  
      </ContainerResponse>
    ) 
  };

  return (
    <Background>
      <Container>
        <Text>Criptografando e descriptografando por Cifra de césar</Text>
        <ContainerInput>
          <TextInput> Insira a mensagem para criptografar </TextInput>
          <Input size="large" value={messageCript} onChange={handleMessageCript} />
          <TextInput> Insira a mensagem para descriptografar </TextInput>
          <Input size="large" value={messageDescript} onChange={handleMessageDescript} />
        </ContainerInput>
        {showResultOnPage()}
        {showResultOnPage2()}
      </Container>
    </Background>
  )
}

export default Cryptograph