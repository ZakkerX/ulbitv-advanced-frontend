import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';

import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};
Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};
Outline.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Filled = Template.bind({});
Filled.args = {
  children: 'Text',
  theme: ThemeButton.FILLED,
};
Filled.decorators = [ThemeDecorator(Theme.LIGHT)];

export const FilledDark = Template.bind({});
FilledDark.args = {
  children: 'Text',
  theme: ThemeButton.FILLED,
};
FilledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Shadow = Template.bind({});
Shadow.args = {
  children: 'Text',
  theme: ThemeButton.SHADOW,
};
Shadow.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ShadowDark = Template.bind({});
ShadowDark.args = {
  children: 'Text',
  theme: ThemeButton.SHADOW,
};
ShadowDark.decorators = [ThemeDecorator(Theme.DARK)];
