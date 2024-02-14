// import type { Preview } from '@storybook/react'
//
// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// }
//
// export default preview

import React from 'react'
import '../src/app/globals.css'

export const decorators = [
  (Story: React.ElementType) => (
    <>
      <Story />
    </>
  ),
]
