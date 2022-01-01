import React, { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import { Container, Account, Title, Subtitle } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignInAnonymously() {
    const { user } = await auth().signInAnonymously();
    console.log(user);
  }

  function handleCreateAccount() {
    auth().createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert('Conta criada com sucesso!'))
      .catch((error) => console.log(error.code));
  }

  function handleSignInWithEmailAndPassword() {
    auth().signInWithEmailAndPassword(email, password)
      .then(({user}) => console.log(user))
      .catch((error) => console.log(error.code));
  }

  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista de compra te ajudar nas compras</Subtitle>

      <Input
        placeholder="e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={handleSignInWithEmailAndPassword} />

      <Account>
        <ButtonText title="Recuperar senha" onPress={() => { }} />
        <ButtonText title="Criar minha conta" onPress={handleCreateAccount} />
      </Account>
    </Container>
  );
}