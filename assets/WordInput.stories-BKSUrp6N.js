import{W as v}from"./WordInput-BFtXSD23.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const C={title:"Wordle/WordInput",component:v,parameters:{componentSubtitle:"Input component for word guesses"},argTypes:{value:{control:"text",description:"Current input value",table:{type:{summary:"string"},defaultValue:{summary:"''"}}},maxLength:{control:{type:"number",min:1,max:10},description:"Maximum length of input",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},disabled:{control:"boolean",description:"Whether the input is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onChange:{description:"Callback when input value changes",table:{type:{summary:"(value: string) => void"}}},onSubmit:{description:"Callback when input is submitted",table:{type:{summary:"() => void"}}},className:{control:"text",description:"Additional CSS classes",table:{type:{summary:"string"},defaultValue:{summary:"''"}}}}},e={args:{value:"",maxLength:5},parameters:{docs:{description:{story:"Empty input field ready for user input."}}}},r={args:{value:"RE",maxLength:5},parameters:{docs:{description:{story:"Input field with partial word entered."}}}},a={args:{value:"REACT",maxLength:5},parameters:{docs:{description:{story:"Input field with complete word entered."}}}},t={args:{value:"REACT",maxLength:5,disabled:!0},parameters:{docs:{description:{story:"Disabled input field state."}}}},n={args:{value:"REACT",maxLength:5},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Input field appearance in dark theme."}}}};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    value: '',
    maxLength: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty input field ready for user input.'
      }
    }
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 'RE',
    maxLength: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with partial word entered.'
      }
    }
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,l,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 'REACT',
    maxLength: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with complete word entered.'
      }
    }
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,y,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 'REACT',
    maxLength: 5,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled input field state.'
      }
    }
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var b,f,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 'REACT',
    maxLength: 5
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Input field appearance in dark theme.'
      }
    }
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const L=["Empty","PartialInput","FullInput","Disabled","DarkTheme"];export{n as DarkTheme,t as Disabled,e as Empty,a as FullInput,r as PartialInput,L as __namedExportsOrder,C as default};
