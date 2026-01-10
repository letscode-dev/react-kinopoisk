import { fn } from "storybook/test"

import UiButton from '../ui-kit/UiButton'

const meta = {
	// Название категории и раздела
  title: "Ui-Kit/UiButton",

	// Компонент
  component: UiButton,

	// Конфигурация Controls (настраивает, как props отображаются в панели Controls Storybook)
  argTypes: {
    variant: {
      options: ["text", "outlined", "contained"],
      control: { type: "radio" },
    },
     disabled: {
      control: { type: "boolean" },
    },
  },
	
	// Задание значений для props
  args: {
    onClick: fn(),
    children: "Button",
    disabled: false
  },
  
  // Добавление раздела "Docs"
  tags: ["autodocs"],

	// Параметры: выравнивает по центру (в данном случае)
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic = {
  args: {
    variant: "contained",
  },
}

