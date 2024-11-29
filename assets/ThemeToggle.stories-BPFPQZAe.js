import{T as m}from"./ThemeToggle-BRquVV1q.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const g={title:"Wordle/ThemeToggle",component:m,parameters:{componentSubtitle:"Toggle switch for dark/light theme"},argTypes:{isDark:{control:"boolean",description:"Current theme state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onToggle:{description:"Callback when theme is toggled",table:{type:{summary:"() => void"}}},className:{control:"text",description:"Additional CSS classes",table:{type:{summary:"string"},defaultValue:{summary:"''"}}}}},e={args:{isDark:!1},parameters:{docs:{description:{story:"Toggle in light theme state."}}}},r={args:{isDark:!0},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Toggle in dark theme state."}}}};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    isDark: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle in light theme state.'
      }
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var o,n,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    isDark: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Toggle in dark theme state.'
      }
    }
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const p=["Light","Dark"];export{r as Dark,e as Light,p as __namedExportsOrder,g as default};
