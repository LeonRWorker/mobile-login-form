import styled from "styled-components";

export const Backward = styled.span``
export const Title = styled.span``
export const Text = styled.span``
export const View = styled.div``
export const Center = styled.div``
export const Button = styled.button``
export const Input = styled.input``
export const Roundeds = styled.div``
export const Content = styled.div``
export const Form = styled.div``
export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  ${Content} {
    width: 90%;
    overflow: hidden;
    max-width: 350px;
    min-height: 500px;
    align-items: center;
    border-radius: 30px;
    background-color: white;
    justify-content: flex-start;
    ${Roundeds}{
      width: 100%;
      content: '';
      height: 330px;
      max-width: 330px;
      border-radius: 50%;
      position: relative;
      margin-bottom: -330px;
      background-color: #e0ffdd;
      transform: translate(-133px, 220px);
      &::after {
        content: '';
        width: 100%;
        content: '';
        height: 330px;
        max-width: 330px;
        position: absolute;
        border-radius: 50%;
        background-color: #e0ffdd;
        transform: translate(150px, 170px);
      }
      &::before {
        content: '';
        width: 100%;
        content: '';
        height: 330px;
        max-width: 330px;
        position: absolute;
        border-radius: 50%;
        background-color: #e0ffdd;
        transform: translate(0px, 120px);
      }
    }
  }
  ${Form} {
    gap: 30px;
    z-index: 1;
    display: flex;
    padding: 30px;
    position: relative;
    border-radius: 30px;
    align-items: flex-start;
    flex-direction: column;
    ${Backward} {
      width: 35px;
      height: 35px;
      display: flex;
      color: #8d8d8d;
      cursor: pointer;
      font-size: 22px;
      font-weight: 600;
      border-radius: 50%;
      text-align: center;
      align-items: center;
      margin-bottom: 10px;
      justify-content: center;
      background-color: #d9d9d9;
    }
    ${Title} {
      font-size: 22px;
      font-weight: 800;
    }
    ${Title} + ${Text} {
      color: #565656;
      font-size: 14px;
      font-weight: 700;
    }
    ${View} { 
      gap: 5px;
      display: flex;
      flex-direction: column;
    }
    ${View} + ${View} {
      gap: 40px;
      width: 100%;
      display: flex;
      margin-top: 90px;
    }
    ${View} ${Input} {
      width: 100%;
      border: none;
      outline: none;
      padding: 10px;
      color: #6a6e6a;
      font-size: 18px;
      font-weight: 500;
      background-color: transparent;
      border-bottom: 1px solid #4e4d4e;
    }
    ${View} ${Input}:last-child {
      padding: 25px 10px;
    }
    ${Center} {
      display: flex;
      margin: 40px auto;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    ${Button} {
      color: white;
      cursor: pointer;
      font-size: 22px;
      font-weight: 600;
      padding: 3px 40px;
      margin-bottom: 15px;
      border-radius: 20px;
      text-transform: uppercase;
      border: 1px solid #000000;
      background-color: #000000;
      font-family: 'Inder', sans-serif;
    }
    ${Button} ~ ${Text} {
      color: #788474;
      cursor: pointer;
      font-size: 11px;
      font-weight: 600;
    }
  }
`