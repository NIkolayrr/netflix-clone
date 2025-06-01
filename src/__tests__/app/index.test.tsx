import Index from '@/src/app/(tabs)/index'
import { customRender } from '@/src/test-utils/renderWithProviders'
import React from 'react'

jest.mock('@/src/components/FeaturedShow/FeaturedShow', () => {
  const { Text } = require('react-native')
  return () => <Text>Featured Show</Text>
})

jest.mock('@/src/components/CategoryList/CategoryList', () => {
  const { Text } = require('react-native')
  return ({ title }: { title: string }) => <Text>{title}</Text>
})

describe('Index Screen', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders FeaturedShow and all CategoryList components', () => {
    const { getByText } = customRender(<Index />)

    expect(getByText('Featured Show')).toBeTruthy()
    expect(getByText('Drama')).toBeTruthy()
    expect(getByText('Action')).toBeTruthy()
    expect(getByText('Comedy')).toBeTruthy()
  })
})
