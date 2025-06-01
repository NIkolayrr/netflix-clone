import { Button } from '@/src/components'
import { customRender } from '@/src/test-utils/renderWithProviders'
import { fireEvent } from '@testing-library/react-native'

describe('Button', () => {
  it('renders the title text', () => {
    const { getByText } = customRender(<Button title='Click Me' onPress={() => {}} />)
    expect(getByText('Click Me')).toBeTruthy()
  })

  it('calls onPress when tapped', () => {
    const onPress = jest.fn()
    const { getByText } = customRender(<Button title='Tap' onPress={onPress} />)
    fireEvent.press(getByText('Tap'))
    expect(onPress).toHaveBeenCalled()
  })

  it('does not call onPress when disabled', () => {
    const onPress = jest.fn()
    const { getByText } = customRender(<Button title='Disabled' onPress={onPress} disabled />)
    fireEvent.press(getByText('Disabled'))
    expect(onPress).not.toHaveBeenCalled()
  })

  it('renders icon if provided', async () => {
    const { findByTestId, debug } = customRender(<Button title='With Icon' icon='play' onPress={() => {}} />)
    const icon = await findByTestId('btn-icon')
    expect(icon).toBeTruthy()
  })
})
