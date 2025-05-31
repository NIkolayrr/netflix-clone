import Index from '@/src/app/(tabs)/index'
import * as reduxHooks from '@/src/hooks/useTypedSelector'
import { renderWithProviders } from '@/src/test-utils/renderWithProviders'
import React from 'react'

// Mock child components to avoid rendering their internals
jest.mock('@/src/components/FeaturedShow/FeaturedShow', () => {
  const React = require('react')
  const { Text } = require('react-native')
  return () => <Text>Featured Show</Text>
})

jest.mock('@/src/components/CategoryList/CategoryList', () => {
  const React = require('react')
  const { Text } = require('react-native')
  return ({ title }: { title: string }) => <Text>{title}</Text>
})

describe('Index Screen', () => {
  beforeEach(() => {
    jest
      .spyOn(reduxHooks, 'useAppSelector')
      .mockImplementation((selectorFn: any) => selectorFn({ theme: { mode: 'dark' } }))
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders FeaturedShow and all CategoryList components', () => {
    const { getByText } = renderWithProviders(<Index />)

    expect(getByText('Featured Show')).toBeTruthy()
    expect(getByText('Drama')).toBeTruthy()
    expect(getByText('Action')).toBeTruthy()
    expect(getByText('Comedy')).toBeTruthy()
  })
})
