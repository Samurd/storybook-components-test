import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'Example/MyLabel',
    tags: ['autodocs'],
    component: MyLabel,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: "select"
        },
        fontColor: {
            control: "color"
        }
    }
} satisfies Meta<typeof MyLabel>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        size: "normal",
        label: "Basic Label",
        color: "text-primary"
    }
};



export const AllCaps: Story = {
    args: {
        size: "normal",
        label: "All Caps",
        allcaps: true,
        color: "text-primary"
    }
};

export const Secondary: Story = {
    args: {
        size: "normal",
        label: "Secondary",
        color: "text-secondary"
    }
};