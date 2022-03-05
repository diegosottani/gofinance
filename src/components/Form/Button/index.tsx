import React from "react";
import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, Title } from './styles'

interface Props extends RectButtonProps {
  title: string
  onPress: () => void
  activeOpacity: number
}

export function Button({
  title, 
  onPress,
  activeOpacity, 
  ...rest 
}: Props) {
  return (
    <Container onPress={onPress} activeOpacity={activeOpacity} {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}