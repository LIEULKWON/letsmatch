import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

// ─── Meta ─────────────────────────────────────────────────────────────────────
const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/M2IvQ9jDfeypUUzKGNjJxH/shadcn-ui--Matchmaker-?node-id=37-931",
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      description: "버튼 스타일 종류",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "icon", "icon-sm", "icon-lg"],
      description: "버튼 크기",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    loading: {
      control: "boolean",
      description: "로딩 상태 — 스피너 표시 + 클릭 비활성화",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
    showLeftIcon: {
      control: "boolean",
      description: "왼쪽 아이콘 표시",
    },
    showRightIcon: {
      control: "boolean",
      description: "오른쪽 아이콘 표시",
    },
    showKbd: {
      control: "boolean",
      description: "키보드 단축키 배지 표시",
    },
    kbdLabel: {
      control: "text",
      description: "키보드 단축키 텍스트",
      if: { arg: "showKbd", truthy: true },
    },
    children: {
      control: "text",
      description: "버튼 텍스트",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Interactive ──────────────────────────────────────────────────────────────
export const Interactive: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
    loading: false,
    disabled: false,
    showLeftIcon: false,
    showRightIcon: false,
    showKbd: false,
    kbdLabel: "⌘K",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/M2IvQ9jDfeypUUzKGNjJxH/shadcn-ui--Matchmaker-?node-id=37-930",
    },
  },
};

// ─── Variants ─────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: { children: "Button" },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/M2IvQ9jDfeypUUzKGNjJxH/shadcn-ui--Matchmaker-?node-id=37-930",
    },
  },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Button" },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/M2IvQ9jDfeypUUzKGNjJxH/shadcn-ui--Matchmaker-?node-id=37-932",
    },
  },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Delete" },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/M2IvQ9jDfeypUUzKGNjJxH/shadcn-ui--Matchmaker-?node-id=37-1475",
    },
  },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Button" },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/M2IvQ9jDfeypUUzKGNjJxH/shadcn-ui--Matchmaker-?node-id=37-1477",
    },
  },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Button" },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/M2IvQ9jDfeypUUzKGNjJxH/shadcn-ui--Matchmaker-?node-id=37-1494",
    },
  },
};

export const Link: Story = {
  args: { variant: "link", children: "Button" },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/M2IvQ9jDfeypUUzKGNjJxH/shadcn-ui--Matchmaker-?node-id=60-244",
    },
  },
};

// ─── Sizes ────────────────────────────────────────────────────────────────────
export const Small: Story = {
  args: { size: "sm", children: "Button" },
};

export const Large: Story = {
  args: { size: "lg", children: "Button" },
};

export const IconOnly: Story = {
  args: { size: "icon", showLeftIcon: true },
};

export const IconSmall: Story = {
  args: { size: "icon-sm", showLeftIcon: true },
};

export const IconLarge: Story = {
  args: { size: "icon-lg", showLeftIcon: true },
};

// ─── States ───────────────────────────────────────────────────────────────────
export const Loading: Story = {
  args: { loading: true, children: "Loading..." },
};

export const Disabled: Story = {
  args: { disabled: true, children: "Button" },
};

export const WithLeftIcon: Story = {
  args: { showLeftIcon: true, children: "Button" },
};

export const WithRightIcon: Story = {
  args: { showRightIcon: true, children: "Button" },
};

export const WithBothIcons: Story = {
  args: { showLeftIcon: true, showRightIcon: true, children: "Button" },
};

export const WithKbd: Story = {
  args: { showKbd: true, kbdLabel: "⌘K", children: "Button" },
};

// ─── Showcase ─────────────────────────────────────────────────────────────────
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6">

      <div>
        <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">Variants</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">Sizes</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" showLeftIcon />
          <Button size="icon-sm" showLeftIcon />
          <Button size="icon-lg" showLeftIcon />
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">States</p>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button showLeftIcon>With Icon</Button>
          <Button showKbd kbdLabel="⌘K">With Kbd</Button>
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">Secondary</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="secondary" size="sm">Small</Button>
          <Button variant="secondary" size="default">Default</Button>
          <Button variant="secondary" size="lg">Large</Button>
          <Button variant="secondary" loading>Loading</Button>
          <Button variant="secondary" disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">Destructive</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="destructive" size="sm">Delete</Button>
          <Button variant="destructive" size="default">Delete</Button>
          <Button variant="destructive" size="lg">Delete</Button>
          <Button variant="destructive" loading>Loading</Button>
          <Button variant="destructive" disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">Outline</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm">Outline</Button>
          <Button variant="outline" size="default">Outline</Button>
          <Button variant="outline" size="lg">Outline</Button>
          <Button variant="outline" loading>Loading</Button>
          <Button variant="outline" disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">Ghost</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="ghost" size="sm">Ghost</Button>
          <Button variant="ghost" size="default">Ghost</Button>
          <Button variant="ghost" size="lg">Ghost</Button>
          <Button variant="ghost" loading>Loading</Button>
          <Button variant="ghost" disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">Link</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="link" size="sm">Link</Button>
          <Button variant="link" size="default">Link</Button>
          <Button variant="link" size="lg">Link</Button>
          <Button variant="link" disabled>Disabled</Button>
        </div>
      </div>

    </div>
  ),
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/M2IvQ9jDfeypUUzKGNjJxH/shadcn-ui--Matchmaker-?node-id=37-931",
    },
  },
};
