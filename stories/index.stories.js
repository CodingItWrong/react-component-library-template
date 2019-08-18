import React from 'react'

import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import HelloWorld from '../src/HelloWorld'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Hello World', module).add('base case', () => <HelloWorld />)
