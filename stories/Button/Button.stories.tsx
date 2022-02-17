import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button } from "UI"

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    size: {
      name: "size",
      type: { name: "string", required: false },
      options: ["sm", "md", "lg", "xs", "xl"],
      defaultValue: "md",
      control: {
        type: "radio",
      },
    },
    color: {
      name: "color",
      type: { name: "string", required: false },
      options: ["primary"],
      defaultValue: "primary",
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Button>

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const BtnSize = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BtnSize.args = {
  children: "Button",
  size: "md",
  color: "primary",
}
