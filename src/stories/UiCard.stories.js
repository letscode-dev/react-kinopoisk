import { fn } from 'storybook/test'

import UiCard from '../ui-kit/UiCard'

import '../styles/styles.css'

const data = {
  id: 5003510,
  poster: 'https://kinopoiskapiunofficial.tech/images/posters/kp/5003510.jpg',
  name: 'F1',
  year: 2025,
}

const meta = {
  title: 'Ui-Kit/UiCard',
  component: UiCard,
  argTypes: {},
  args: {
    data,
    onClick: fn(),
  },
}

export default meta

export const Basic = {
  args: {},
}
