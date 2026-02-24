import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { tokenGroups } from "./tokenData";

type TokenRow = { name: string; type: string; light: string; dark: string };

function Swatch({ color }: { color: string }) {
  if (!color) return <span style={{ color: "#71717A", fontSize: 12 }}>—</span>;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: color, border: "1px solid #E4E4E7", flexShrink: 0 }} />
      <span style={{ fontSize: 12, fontFamily: "monospace", color: "#09090B" }}>{color}</span>
    </div>
  );
}

function ValueCell({ row, mode }: { row: TokenRow; mode: "light" | "dark" }) {
  const val = mode === "light" ? row.light : row.dark;
  if (!val) return <span style={{ color: "#A1A1AA", fontSize: 12 }}>—</span>;
  if (row.type === "color") return <Swatch color={val} />;
  return <span style={{ fontSize: 12, fontFamily: "monospace", color: "#09090B" }}>{val}</span>;
}

const thStyle: React.CSSProperties = {
  textAlign: "left", padding: "10px 16px 10px 0",
  color: "#71717A", fontSize: 11, fontWeight: 600,
  textTransform: "uppercase", letterSpacing: "0.05em",
  borderBottom: "1px solid #E4E4E7",
};

function TokenTable({ items, showDark }: { items: TokenRow[]; showDark?: boolean }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={thStyle}>Token Name</th>
          <th style={thStyle}>{showDark ? "Light" : "Value"}</th>
          {showDark && <th style={thStyle}>Dark</th>}
        </tr>
      </thead>
      <tbody>
        {items.map((t, i) => (
          <tr key={t.name} style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#FAFAFA" }}>
            <td style={{ padding: "10px 16px 10px 0", borderBottom: "1px solid #F4F4F5" }}>
              <code style={{ fontSize: 12, backgroundColor: "#F4F4F5", color: "#18181B", padding: "2px 8px", borderRadius: 4, fontFamily: "monospace", whiteSpace: "nowrap" }}>
                {t.name}
              </code>
            </td>
            <td style={{ padding: "10px 16px 10px 0", borderBottom: "1px solid #F4F4F5" }}>
              <ValueCell row={t} mode="light" />
            </td>
            {showDark && (
              <td style={{ padding: "10px 0", borderBottom: "1px solid #F4F4F5" }}>
                <ValueCell row={t} mode="dark" />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Section({ title, items, showDark }: { title: string; items: TokenRow[]; showDark?: boolean }) {
  if (!items || items.length === 0) return null;
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: "#09090B" }}>{title}</h2>
      <div style={{ border: "1px solid #E4E4E7", borderRadius: 10, overflow: "hidden" }}>
        <TokenTable items={items} showDark={showDark} />
      </div>
    </div>
  );
}

function Page({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: 40, maxWidth: 960, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
      <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 4, color: "#09090B" }}>{title}</h1>
      <div style={{ height: 1, background: "#E4E4E7", margin: "12px 0 32px" }} />
      {children}
    </div>
  );
}

const meta: Meta = {
  title: "Design Tokens",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => (
    <Page title="Colors">
      <Section title="Base (Semantic)" items={tokenGroups.base} showDark />
      <Section title="Custom" items={tokenGroups.custom} showDark />
      <Section title="Alpha" items={tokenGroups.alpha} showDark />
      <Section title="Tailwind Color Palette" items={tokenGroups.tailwind_colors} />
    </Page>
  ),
};

export const Typography: Story = {
  render: () => (
    <Page title="Typography">
      <Section title="Text Sizes" items={tokenGroups.typography.filter((t: TokenRow) => t.name.startsWith("--text"))} />
      <Section title="Font Family" items={tokenGroups.typography.filter((t: TokenRow) => t.name.startsWith("--font-font"))} />
      <Section title="Font Weight" items={tokenGroups.typography.filter((t: TokenRow) => t.name.startsWith("--font-weight"))} />
      <Section title="Headings" items={tokenGroups.heading} />
    </Page>
  ),
};

export const SpacingAndRadius: Story = {
  render: () => (
    <Page title="Spacing and Radius">
      <Section title="Spacing" items={tokenGroups.spacing} />
      <Section title="Border Radius" items={tokenGroups.radius} />
    </Page>
  ),
};

export const Shadows: Story = {
  render: () => (
    <Page title="Shadows">
      <Section title="Box Shadow" items={tokenGroups.shadow.filter((t: TokenRow) => t.name.startsWith("--shadow"))} />
      <Section title="Inset Shadow" items={tokenGroups.shadow.filter((t: TokenRow) => t.name.startsWith("--inset-shadow"))} />
      <Section title="Drop Shadow" items={tokenGroups.shadow.filter((t: TokenRow) => t.name.startsWith("--drop-shadow"))} />
    </Page>
  ),
};
