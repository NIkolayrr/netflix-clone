import { Button } from '@/src/components'
import { renderWithProviders } from '@/src/test-utils/renderWithProviders'
import { fireEvent } from '@testing-library/react-native'

jest.mock('../../components/Button/styles', () => ({
  useStyles: () => ({}),
}))

describe('Button', () => {
  it('renders the title text', () => {
    const { getByText } = renderWithProviders(<Button title='Click Me' onPress={() => {}} />)
    expect(getByText('Click Me')).toBeTruthy()
  })

  it('calls onPress when tapped', () => {
    const onPress = jest.fn()
    const { getByText } = renderWithProviders(<Button title='Tap' onPress={onPress} />)
    fireEvent.press(getByText('Tap'))
    expect(onPress).toHaveBeenCalled()
  })

  it('does not call onPress when disabled', () => {
    const onPress = jest.fn()
    const { getByText } = renderWithProviders(<Button title='Disabled' onPress={onPress} disabled />)
    fireEvent.press(getByText('Disabled'))
    expect(onPress).not.toHaveBeenCalled()
  })

  it('renders icon if provided', async () => {
    const { findByTestId, debug } = renderWithProviders(<Button title='With Icon' icon='play' onPress={() => {}} />)
    console.log(debug)
    const icon = await findByTestId('btn-icon')
    expect(icon).toBeTruthy()
  })
})
