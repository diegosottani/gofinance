import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

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

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title:"Desenvolvimento de site",
      amount:"R$ 12.000,00", 
      category:{
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date:"13/04/2020"
    },
    {
      id: '2',
      type: 'negative',
      title:"Hamburgueria Pizzy",
      amount:"R$ 59,00", 
      category:{
        name: 'Alimentação',
        icon: 'coffee'
      },
      date:"10/04/2020"
    },
    {
      id: '3',
      type: 'negative',
      title:"Aluguel do apartamento",
      amount:"R$ 1.200,00", 
      category:{
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date:"10/04/2020"
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
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} /> }
        />

      </Transactions>
    </Container>
  )
}