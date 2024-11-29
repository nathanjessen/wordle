import{W as H}from"./WordInput-kbaP5xRq.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const F={title:"Wordle/WordInput",component:H,parameters:{componentSubtitle:"Input component for word guesses",docs:{description:{component:"A controlled input component that handles word guesses in the Wordle game. It supports uppercase letters only, custom length limits, and provides callbacks for value changes and submissions."}}},argTypes:{value:{control:"text",description:"Current input value (automatically converted to uppercase)",table:{type:{summary:"string"},defaultValue:{summary:"''"}}},onChange:{description:"Callback when input value changes (value is already uppercase)",table:{type:{summary:"(value: string) => void"}},action:"onChange"},onSubmit:{description:"Callback when input is submitted (Enter key or button click)",table:{type:{summary:"() => void"}},action:"onSubmit"},maxLength:{control:{type:"number",min:1,max:10},description:"Maximum length of input (typically 5 for standard Wordle)",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},disabled:{control:"boolean",description:"Whether the input is disabled (e.g., when game is over)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS classes for styling",table:{type:{summary:"string"},defaultValue:{summary:"''"}}}}},e={args:{value:"",maxLength:5,onChange:()=>{}},parameters:{docs:{description:{story:"Empty input field ready for user input. Only accepts uppercase letters."}}}},n={args:{value:"RE",maxLength:5,onChange:()=>{}},parameters:{docs:{description:{story:"Input field with partial word entered. Shows how the component handles incomplete words."}}}},r={args:{value:"REACT",maxLength:5,onChange:()=>{}},parameters:{docs:{description:{story:"Input field with complete word entered, ready for submission."}}}},a={args:{value:"REACT",maxLength:5,disabled:!0,onChange:()=>{}},parameters:{docs:{description:{story:"Disabled input field state, typically shown when the game is over or between rounds."}}}},t={args:{value:"CAT",maxLength:3,onChange:()=>{}},parameters:{docs:{description:{story:"Input configured for shorter word length, demonstrating length customization."}}}},s={args:{value:"PYTHON",maxLength:6,onChange:()=>{}},parameters:{docs:{description:{story:"Input configured for longer word length, showing flexibility in word size."}}}},o={args:{value:"WRONG",maxLength:5,className:"border-2 border-red-500",onChange:()=>{}},parameters:{docs:{description:{story:"Input with error styling applied, useful for indicating invalid words."}}}},i={args:{value:"RIGHT",maxLength:5,className:"border-2 border-green-500",onChange:()=>{}},parameters:{docs:{description:{story:"Input with success styling applied, useful for indicating valid words."}}}},d={args:{value:"NIGHT",maxLength:5,onChange:()=>{}},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Input field appearance in dark theme, showing theme adaptability."}}}};var c,p,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: '',
    maxLength: 5,
    onChange: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty input field ready for user input. Only accepts uppercase letters.'
      }
    }
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 'RE',
    maxLength: 5,
    onChange: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with partial word entered. Shows how the component handles incomplete words.'
      }
    }
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,y,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 'REACT',
    maxLength: 5,
    onChange: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with complete word entered, ready for submission.'
      }
    }
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,w,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 'REACT',
    maxLength: 5,
    disabled: true,
    onChange: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled input field state, typically shown when the game is over or between rounds.'
      }
    }
  }
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var C,x,I;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 'CAT',
    maxLength: 3,
    onChange: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Input configured for shorter word length, demonstrating length customization.'
      }
    }
  }
}`,...(I=(x=t.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var L,S,W;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 'PYTHON',
    maxLength: 6,
    onChange: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Input configured for longer word length, showing flexibility in word size.'
      }
    }
  }
}`,...(W=(S=s.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var T,E,k;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 'WRONG',
    maxLength: 5,
    className: 'border-2 border-red-500',
    onChange: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with error styling applied, useful for indicating invalid words.'
      }
    }
  }
}`,...(k=(E=o.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var N,R,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 'RIGHT',
    maxLength: 5,
    className: 'border-2 border-green-500',
    onChange: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with success styling applied, useful for indicating valid words.'
      }
    }
  }
}`,...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var O,D,G;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: 'NIGHT',
    maxLength: 5,
    onChange: () => {}
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Input field appearance in dark theme, showing theme adaptability.'
      }
    }
  }
}`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const Y=["Empty","PartialInput","FullInput","Disabled","ShortWord","LongWord","WithError","WithSuccess","DarkTheme"];export{d as DarkTheme,a as Disabled,e as Empty,r as FullInput,s as LongWord,n as PartialInput,t as ShortWord,o as WithError,i as WithSuccess,Y as __namedExportsOrder,F as default};
