import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /payflow/i }),
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
