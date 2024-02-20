import type { Meta, StoryObj } from "@storybook/react";

// import { Button } from './Button';
import TestButton from "../app/_components/TestButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Test Button",
  component: TestButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Test Button",
  },
};
