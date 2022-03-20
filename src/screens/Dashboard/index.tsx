import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
  TransactionList,
  LogoutButton
} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const [data, setData] = useState<DataListProps[]>([])

  async function loadTransactions(){
    const dataKey = '@gofinances:transactions'
    const response = await AsyncStorage.getItem(dataKey)
    const transactions = response ? JSON.parse(response) : []

    const transactionsFormatted: DataListProps[] = transactions
    .map((item: DataListProps) => {
      const amount = Number(item.amount)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })

      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).format(new Date(item.date))

      return {
        id: item.id,
        name: item.name,
        type: item.type,
        category: item.category,
        amount,
        date
      }
    })

    setData(transactionsFormatted)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

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
          <LogoutButton onPress={() => {}}>
            <Icon name="power"/>
          </LogoutButton>
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