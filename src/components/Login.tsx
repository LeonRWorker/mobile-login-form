import { Backward, Button, Center, Container, Content, Form, Input, Roundeds, Text, Title, View } from "../styles/login"

const Login = () => {
  return <Container>
    <Content>
      <Roundeds />
      <Form>
        <Backward>&lt;</Backward>
        <View>
          <Title>Welcome Back!</Title>
          <Text>Enter Your Username & Password</Text>
        </View>
        <View>
          <Input type={'text'} placeholder={'Username'} />
          <Input type={'password'} placeholder={'Password'} />
        </View>
        <Center>
          <Button type={'button'} >Login</Button>
          <Text>Forgotten Password?</Text>
          <Text>Or Create a New Account</Text>
        </Center>
      </Form>
    </Content>
  </Container>
}

export default Login