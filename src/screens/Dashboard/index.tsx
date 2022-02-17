import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards
} from './styles'

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/7554195?v=4'}}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>  
              <UserName>Diego</UserName>
            </User>
          </UserInfo>

          <Icon name="power"/>
        </UserWrapper>  
      </Header>
      <HighlightCards>
        <HighlightCard type="up" title="Entradas" amount="17.400,00" lastTransaction="Ultima entrada dia 1 de fevereiro"/>
        <HighlightCard type="down" title="Saídas" amount="1.259,00" lastTransaction="Ultima saída dia 3 de fevereiro"/>
        <HighlightCard type="total" title="Total" amount="16.141,00" lastTransaction="Ultima entrada dia 16 de fevereiro"/>
      </HighlightCards>
    </Container>
  )
}