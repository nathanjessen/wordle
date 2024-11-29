import{L as x}from"./LetterGrid-DJTzK9QP.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";import"./WordLine-sPSBJFAh.js";import"./ColorTile-r3Qg_vxC.js";const R={title:"Wordle/LetterGrid",component:x,parameters:{componentSubtitle:"Grid display for word guesses"},argTypes:{lines:{control:"object",description:"Array of word lines with color states",table:{type:{summary:"TLine[]"},defaultValue:{summary:"[]"}}},currentLine:{control:{type:"number",min:0,max:6},description:"Index of current active line",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},wordLength:{control:{type:"number",min:1,max:10},description:"Length of word to guess",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},maxAttempts:{control:{type:"number",min:1,max:10},description:"Maximum number of attempts allowed",table:{type:{summary:"number"},defaultValue:{summary:"6"}}},className:{control:"text",description:"Additional CSS classes",table:{type:{summary:"string"},defaultValue:{summary:"''"}}}}},r={args:{lines:[],currentLine:0,wordLength:5,maxAttempts:6},parameters:{docs:{description:{story:"Empty grid at game start."}}}},n={args:{lines:[[{char:"R",color:"success"},{char:"E",color:"warning"},{char:"A",color:"neutral"},{char:"C",color:"neutral"},{char:"T",color:"warning"}]],currentLine:1,wordLength:5,maxAttempts:6},parameters:{docs:{description:{story:"Grid showing first guess result."}}}},e={args:{lines:[[{char:"R",color:"success"},{char:"E",color:"warning"},{char:"A",color:"neutral"},{char:"C",color:"neutral"},{char:"T",color:"warning"}],[{char:"S",color:"neutral"},{char:"T",color:"warning"},{char:"A",color:"success"},{char:"R",color:"neutral"},{char:"T",color:"success"}],[{char:"T",color:"success"},{char:"R",color:"success"},{char:"A",color:"success"},{char:"C",color:"success"},{char:"T",color:"success"}]],currentLine:3,wordLength:5,maxAttempts:6},parameters:{docs:{description:{story:"Grid with multiple guesses, including a winning guess."}}}},s={args:{lines:[[{char:"W",color:"success"},{char:"O",color:"success"},{char:"R",color:"success"},{char:"D",color:"success"},{char:"L",color:"success"},{char:"E",color:"success"}]],currentLine:1,wordLength:6,maxAttempts:6},parameters:{docs:{description:{story:"Grid with custom word length of 6."}}}},c={args:{lines:[[{char:"R",color:"success"},{char:"E",color:"warning"},{char:"A",color:"neutral"},{char:"C",color:"neutral"},{char:"T",color:"warning"}]],currentLine:1,wordLength:5,maxAttempts:6},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Grid appearance in dark theme."}}}};var o,a,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    lines: [],
    currentLine: 0,
    wordLength: 5,
    maxAttempts: 6
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty grid at game start.'
      }
    }
  }
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var l,i,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    currentLine: 1,
    wordLength: 5,
    maxAttempts: 6
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid showing first guess result.'
      }
    }
  }
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,d,h;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    }], [{
      char: 'S',
      color: 'neutral'
    }, {
      char: 'T',
      color: 'warning'
    }, {
      char: 'A',
      color: 'success'
    }, {
      char: 'R',
      color: 'neutral'
    }, {
      char: 'T',
      color: 'success'
    }], [{
      char: 'T',
      color: 'success'
    }, {
      char: 'R',
      color: 'success'
    }, {
      char: 'A',
      color: 'success'
    }, {
      char: 'C',
      color: 'success'
    }, {
      char: 'T',
      color: 'success'
    }]],
    currentLine: 3,
    wordLength: 5,
    maxAttempts: 6
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with multiple guesses, including a winning guess.'
      }
    }
  }
}`,...(h=(d=e.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var p,g,w;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    lines: [[{
      char: 'W',
      color: 'success'
    }, {
      char: 'O',
      color: 'success'
    }, {
      char: 'R',
      color: 'success'
    }, {
      char: 'D',
      color: 'success'
    }, {
      char: 'L',
      color: 'success'
    }, {
      char: 'E',
      color: 'success'
    }]],
    currentLine: 1,
    wordLength: 6,
    maxAttempts: 6
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with custom word length of 6.'
      }
    }
  }
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var y,L,A;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    currentLine: 1,
    wordLength: 5,
    maxAttempts: 6
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Grid appearance in dark theme.'
      }
    }
  }
}`,...(A=(L=c.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};const C=["Empty","FirstGuess","MultipleGuesses","CustomLength","DarkTheme"];export{s as CustomLength,c as DarkTheme,r as Empty,n as FirstGuess,e as MultipleGuesses,C as __namedExportsOrder,R as default};
