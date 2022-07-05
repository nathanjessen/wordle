import { Story, Meta } from '@storybook/react';

import { LetterGrid, ILetterGrid } from './LetterGrid';

export default {
  title: "Wordle/LetterGrid",
  component: LetterGrid,
} as Meta;

const Template: Story<ILetterGrid> = (args) => <LetterGrid {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const FourCols = Template.bind({});
FourCols.args = {
  cols: 4,
};

export const SixCols = Template.bind({});
SixCols.args = {
  cols: 6,
};

export const FourRows = Template.bind({});
FourRows.args = {
  rows: 4,
};

export const SixRows = Template.bind({});
SixRows.args = {
  rows: 6,
};

export const SingleLineAttempt = Template.bind({});
SingleLineAttempt.args = {
  lines: [
    [{
      char: 's',
      color: "neutral"
    }, {
      char: 't',
      color: "neutral"
    }, {
      char: 'a',
      color: "neutral"
    }, {
      char: 't',
      color: "neutral"
    }, {
      char: 's',
      color: "neutral"
    }],
  ]
};

export const TwoLineAttempts = Template.bind({});
TwoLineAttempts.args = {
  lines: [
    [{
      char: 's',
      color: "neutral"
    }, {
      char: 't',
      color: "neutral"
    }, {
      char: 'a',
      color: "neutral"
    }, {
      char: 't',
      color: "neutral"
    }, {
      char: 's',
      color: "neutral"
    }],
    [{
      char: 'g',
      color: "success"
    }, {
      char: 'r',
      color: "success"
    }, {
      char: 'o',
      color: "success"
    }, {
      char: 's',
      color: "neutral"
    }, {
      char: 's',
      color: "neutral"
    }]
  ]
};

export const ThreeLineAttempts = Template.bind({});
ThreeLineAttempts.args = {
  lines: [
    [{
      char: 's',
      color: "neutral"
    }, {
      char: 't',
      color: "neutral"
    }, {
      char: 'a',
      color: "neutral"
    }, {
      char: 't',
      color: "neutral"
    }, {
      char: 's',
      color: "neutral"
    }],
    [{
      char: 'g',
      color: "success"
    }, {
      char: 'r',
      color: "success"
    }, {
      char: 'o',
      color: "success"
    }, {
      char: 's',
      color: "neutral"
    }, {
      char: 's',
      color: "neutral"
    }],
    [{
      char: 'g',
      color: "success"
    }, {
      char: 'r',
      color: "success"
    }, {
      char: 'o',
      color: "success"
    }, {
      char: 'u',
      color: "success"
    }, {
      char: 't',
      color: "neutral"
    }]
  ]
};


export const FourLineAttempts = Template.bind({});
FourLineAttempts.args = {
  lines: [
    [{
      char: 's',
      color: "neutral"
    }, {
      char: 't',
      color: "neutral"
    }, {
      char: 'a',
      color: "neutral"
    }, {
      char: 't',
      color: "neutral"
    }, {
      char: 's',
      color: "neutral"
    }],
    [{
      char: 'g',
      color: "success"
    }, {
      char: 'r',
      color: "success"
    }, {
      char: 'o',
      color: "success"
    }, {
      char: 's',
      color: "neutral"
    }, {
      char: 's',
      color: "neutral"
    }],
    [{
      char: 'g',
      color: "success"
    }, {
      char: 'r',
      color: "success"
    }, {
      char: 'o',
      color: "success"
    }, {
      char: 'u',
      color: "success"
    }, {
      char: 't',
      color: "neutral"
    }],
    [{
      char: 'g',
      color: "success"
    }, {
      char: 'r',
      color: "success"
    }, {
      char: 'o',
      color: "success"
    }, {
      char: 'u',
      color: "success"
    }, {
      char: 'm',
      color: "neutral"
    }],
  ]
};

export const FiveLineAttempts = Template.bind({});
FiveLineAttempts.args = {
  lines: [
    [{
      char: 's',
      color: "neutral"
    }, {
      char: 't',
      color: "neutral"
    }, {
      char: 'a',
      color: "neutral"
    }, {
      char: 't',
      color: "neutral"
    }, {
      char: 's',
      color: "neutral"
    }],
    [{
      char: 'g',
      color: "success"
    }, {
      char: 'r',
      color: "success"
    }, {
      char: 'o',
      color: "success"
    }, {
      char: 's',
      color: "neutral"
    }, {
      char: 's',
      color: "neutral"
    }],
    [{
      char: 'g',
      color: "success"
    }, {
      char: 'r',
      color: "success"
    }, {
      char: 'o',
      color: "success"
    }, {
      char: 'u',
      color: "success"
    }, {
      char: 't',
      color: "neutral"
    }],
    [{
      char: 'g',
      color: "success"
    }, {
      char: 'r',
      color: "success"
    }, {
      char: 'o',
      color: "success"
    }, {
      char: 'u',
      color: "success"
    }, {
      char: 'm',
      color: "neutral"
    }],
    [{
      char: 'g',
      color: "success"
    }, {
      char: 'r',
      color: "success"
    }, {
      char: 'o',
      color: "success"
    }, {
      char: 'u',
      color: "success"
    }, {
      char: 'p',
      color: "success"
    }]
  ]
};

export const EarlyReveal = Template.bind({});
EarlyReveal.args = {
  lines: [
    [{
      char: 's',
      color: "neutral"
    }, {
      char: 't',
      color: "neutral"
    }, {
      char: 'a',
      color: "neutral"
    }, {
      char: 't',
      color: "neutral"
    }, {
      char: 's',
      color: "neutral"
    }],
    [{
      char: 'g',
      color: "success"
    }, {
      char: 'r',
      color: "success"
    }, {
      char: 'o',
      color: "success"
    }, {
      char: 's',
      color: "neutral"
    }, {
      char: 's',
      color: "neutral"
    }],
    [{
      char: 'g',
      color: "info"
    }, {
      char: 'r',
      color: "info"
    }, {
      char: 'o',
      color: "info"
    }, {
      char: 'u',
      color: "info"
    }, {
      char: 't',
      color: "info"
    }],
  ]
};