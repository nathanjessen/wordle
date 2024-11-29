import{L as x}from"./LetterGrid-B1oK-kRr.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";import"./WordLine-Gf6g96i7.js";import"./ColorTile-CB4WjyZ3.js";const H={title:"Wordle/LetterGrid",component:x,parameters:{componentSubtitle:"Grid display for word guesses",docs:{description:{component:"A grid component that displays word guesses with color-coded feedback. Supports customizable grid dimensions and automatically fills empty rows."}}},argTypes:{lines:{control:"object",description:"Array of lines, where each line contains letter objects with character and color",table:{type:{summary:'Array<Array<{ char: string; color: "success" | "warning" | "neutral" }>>'},defaultValue:{summary:"[]"}}},cols:{control:{type:"number",min:1,max:10},description:"Number of columns (word length)",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},rows:{control:{type:"number",min:1,max:10},description:"Number of rows (maximum attempts)",table:{type:{summary:"number"},defaultValue:{summary:"5"}}}}},r={args:{lines:[],cols:5,rows:6},parameters:{docs:{description:{story:"Empty grid at game start, showing all available attempt slots."}}}},n={args:{lines:[[{char:"R",color:"success"},{char:"E",color:"warning"},{char:"A",color:"neutral"},{char:"C",color:"neutral"},{char:"T",color:"warning"}]],cols:5,rows:6},parameters:{docs:{description:{story:"Grid showing first guess result with color-coded feedback."}}}},o={args:{lines:[[{char:"B",color:"neutral"},{char:"R",color:"neutral"},{char:"E",color:"warning"},{char:"A",color:"neutral"},{char:"K",color:"neutral"}],[{char:"S",color:"neutral"},{char:"T",color:"warning"},{char:"E",color:"warning"},{char:"A",color:"neutral"},{char:"L",color:"neutral"}],[{char:"C",color:"neutral"},{char:"R",color:"neutral"},{char:"E",color:"success"},{char:"A",color:"success"},{char:"M",color:"neutral"}]],cols:5,rows:6},parameters:{docs:{description:{story:"Grid showing multiple guesses with varying levels of success."}}}},s={args:{lines:[[{char:"C",color:"success"},{char:"A",color:"neutral"},{char:"T",color:"warning"}]],cols:3,rows:4},parameters:{docs:{description:{story:"Grid configured for shorter words, showing adaptability to different word lengths."}}}},c={args:{lines:[[{char:"P",color:"success"},{char:"Y",color:"neutral"},{char:"T",color:"warning"},{char:"H",color:"neutral"},{char:"O",color:"warning"},{char:"N",color:"success"}]],cols:6,rows:5},parameters:{docs:{description:{story:"Grid configured for longer words, demonstrating flexibility in grid dimensions."}}}},a={args:{lines:[[{char:"B",color:"neutral"},{char:"R",color:"neutral"},{char:"E",color:"warning"},{char:"A",color:"neutral"},{char:"K",color:"neutral"}],[{char:"S",color:"success"},{char:"W",color:"success"},{char:"E",color:"success"},{char:"E",color:"success"},{char:"T",color:"success"}]],cols:5,rows:6},parameters:{docs:{description:{story:"Grid showing a winning game where the word was guessed correctly."}}}},e={args:{lines:[[{char:"N",color:"success"},{char:"I",color:"warning"},{char:"G",color:"neutral"},{char:"H",color:"warning"},{char:"T",color:"success"}]],cols:5,rows:6},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Grid appearance in dark theme, showing color adaptability."}}}};var t,l,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    lines: [],
    cols: 5,
    rows: 6
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty grid at game start, showing all available attempt slots.'
      }
    }
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var u,d,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    lines: [[{
      char: 'R',
      color: 'success'
    }, {
      char: 'E',
      color: 'warning'
    }, {
      char: 'A',
      color: 'neutral'
    }, {
      char: 'C',
      color: 'neutral'
    }, {
      char: 'T',
      color: 'warning'
    }]],
    cols: 5,
    rows: 6
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid showing first guess result with color-coded feedback.'
      }
    }
  }
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var m,p,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    lines: [[{
      char: 'B',
      color: 'neutral'
    }, {
      char: 'R',
      color: 'neutral'
    }, {
      char: 'E',
      color: 'warning'
    }, {
      char: 'A',
      color: 'neutral'
    }, {
      char: 'K',
      color: 'neutral'
    }], [{
      char: 'S',
      color: 'neutral'
    }, {
      char: 'T',
      color: 'warning'
    }, {
      char: 'E',
      color: 'warning'
    }, {
      char: 'A',
      color: 'neutral'
    }, {
      char: 'L',
      color: 'neutral'
    }], [{
      char: 'C',
      color: 'neutral'
    }, {
      char: 'R',
      color: 'neutral'
    }, {
      char: 'E',
      color: 'success'
    }, {
      char: 'A',
      color: 'success'
    }, {
      char: 'M',
      color: 'neutral'
    }]],
    cols: 5,
    rows: 6
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid showing multiple guesses with varying levels of success.'
      }
    }
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var w,y,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    lines: [[{
      char: 'C',
      color: 'success'
    }, {
      char: 'A',
      color: 'neutral'
    }, {
      char: 'T',
      color: 'warning'
    }]],
    cols: 3,
    rows: 4
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid configured for shorter words, showing adaptability to different word lengths.'
      }
    }
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,G,E;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    lines: [[{
      char: 'P',
      color: 'success'
    }, {
      char: 'Y',
      color: 'neutral'
    }, {
      char: 'T',
      color: 'warning'
    }, {
      char: 'H',
      color: 'neutral'
    }, {
      char: 'O',
      color: 'warning'
    }, {
      char: 'N',
      color: 'success'
    }]],
    cols: 6,
    rows: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid configured for longer words, demonstrating flexibility in grid dimensions.'
      }
    }
  }
}`,...(E=(G=c.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var A,S,T;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    lines: [[{
      char: 'B',
      color: 'neutral'
    }, {
      char: 'R',
      color: 'neutral'
    }, {
      char: 'E',
      color: 'warning'
    }, {
      char: 'A',
      color: 'neutral'
    }, {
      char: 'K',
      color: 'neutral'
    }], [{
      char: 'S',
      color: 'success'
    }, {
      char: 'W',
      color: 'success'
    }, {
      char: 'E',
      color: 'success'
    }, {
      char: 'E',
      color: 'success'
    }, {
      char: 'T',
      color: 'success'
    }]],
    cols: 5,
    rows: 6
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid showing a winning game where the word was guessed correctly.'
      }
    }
  }
}`,...(T=(S=a.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var k,W,R;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    lines: [[{
      char: 'N',
      color: 'success'
    }, {
      char: 'I',
      color: 'warning'
    }, {
      char: 'G',
      color: 'neutral'
    }, {
      char: 'H',
      color: 'warning'
    }, {
      char: 'T',
      color: 'success'
    }]],
    cols: 5,
    rows: 6
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Grid appearance in dark theme, showing color adaptability.'
      }
    }
  }
}`,...(R=(W=e.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};const K=["Empty","FirstGuess","MultipleGuesses","ShortWord","LongWord","WinningGame","DarkTheme"];export{e as DarkTheme,r as Empty,n as FirstGuess,c as LongWord,o as MultipleGuesses,s as ShortWord,a as WinningGame,K as __namedExportsOrder,H as default};
