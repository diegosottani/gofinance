import React from 'react'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard } from '../../components/TransactionCard'

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
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles'

export function Dashboard() {
  const data = [
    {
      title:"Desenvolvimento de site",
      amount:"R$ 12.000,00", 
      category:{
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date:"13/04/2020"
    },
    {
      title:"Desenvolvimento de site",
      amount:"R$ 12.000,00", 
      category:{
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date:"13/04/2020"
    },
    {
      title:"Desenvolvimento de site",
      amount:"R$ 12.000,00", 
      category:{
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date:"13/04/2020"
    }
  ]

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

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace() 
          }}
        />

      </Transactions>
    </Container>
  )
}