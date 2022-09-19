import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BlockUI } from '../BlockUI';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/BlockUI',
  component: BlockUI,
} as ComponentMeta<typeof BlockUI>;

export const DefaultProps = () => (
  <BlockUI>
    <div style={{ width: "300px", height: "300px", border: "1px solid" }}>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Doloribus repellat, ducimus exercitationem error minus beatae
        voluptatibus, provident recusandae cumque maxime dolore assumenda
        ipsum sunt debitis dolorum aut sit! Quas, explicabo.</p>
    </div>
  </BlockUI>
)

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BlockUI> = (args) => (
  <BlockUI {...args}>
    <div style={{ width: "300px", height: "300px", border: "1px solid" }}>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Doloribus repellat, ducimus exercitationem error minus beatae
        voluptatibus, provident recusandae cumque maxime dolore assumenda
        ipsum sunt debitis dolorum aut sit! Quas, explicabo.</p>
    </div>
  </BlockUI>
);

export const Blocking = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Blocking.args = {
  blocking: true
};

export const BlockingWithLoader = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BlockingWithLoader.args = {
  blocking: true,
  loader: "default"
};


export const StretchMode = Template.bind({});
StretchMode.args = {
  blocking: true,
  mode: "stretch",
  loader: "default"
};

export const FullScreenMode = Template.bind({});
FullScreenMode.args = {
  blocking: true,
  mode: "full-screen",
  loader: "default"
};

export const CustomOverayStyle = Template.bind({});
CustomOverayStyle.args = {
  blocking: true,
  overlayStyle: { backgroundColor: "black", opacity: ".25" }
};