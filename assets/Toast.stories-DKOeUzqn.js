import{T as W}from"./Toast-BDZF9BDc.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const V={title:"Wordle/Toast",component:W,parameters:{componentSubtitle:"Toast notification component for game messages"},argTypes:{message:{control:"text",description:"Message to display in the toast",table:{type:{summary:"string"},defaultValue:{summary:"''"}}},type:{control:"select",options:["success","error","info","warning"],description:"Type of toast message",table:{type:{summary:"'success' | 'error' | 'info' | 'warning'"},defaultValue:{summary:"'info'"}}},duration:{control:{type:"number",min:0,max:1e4,step:500},description:"Duration in milliseconds before toast auto-dismisses",table:{type:{summary:"number"},defaultValue:{summary:"3000"}}},visible:{control:"boolean",description:"Whether the toast is visible",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onDismiss:{description:"Callback when toast is dismissed",table:{type:{summary:"() => void"}}},className:{control:"text",description:"Additional CSS classes",table:{type:{summary:"string"},defaultValue:{summary:"''"}}}}},e={args:{message:"Great job! You won the game!",type:"success",visible:!0},parameters:{docs:{description:{story:"Success toast notification for winning the game."}}}},s={args:{message:"Not enough letters",type:"error",visible:!0},parameters:{docs:{description:{story:"Error toast notification for invalid input."}}}},t={args:{message:"Game started! Good luck!",type:"info",visible:!0},parameters:{docs:{description:{story:"Info toast notification for game status."}}}},r={args:{message:"Word not in dictionary",type:"warning",visible:!0},parameters:{docs:{description:{story:"Warning toast notification for invalid word."}}}},a={args:{message:"This toast is hidden",type:"info",visible:!1},parameters:{docs:{description:{story:"Hidden toast state."}}}},o={args:{message:"Toast in dark theme",type:"success",visible:!0},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Toast notification appearance in dark theme."}}}};var n,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    message: 'Great job! You won the game!',
    type: 'success',
    visible: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Success toast notification for winning the game.'
      }
    }
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    message: 'Not enough letters',
    type: 'error',
    visible: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Error toast notification for invalid input.'
      }
    }
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,l,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    message: 'Game started! Good luck!',
    type: 'info',
    visible: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Info toast notification for game status.'
      }
    }
  }
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var y,f,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    message: 'Word not in dictionary',
    type: 'warning',
    visible: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning toast notification for invalid word.'
      }
    }
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,v,T;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    message: 'This toast is hidden',
    type: 'info',
    visible: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Hidden toast state.'
      }
    }
  }
}`,...(T=(v=a.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var k,S,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    message: 'Toast in dark theme',
    type: 'success',
    visible: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Toast notification appearance in dark theme.'
      }
    }
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const D=["Success","Error","Info","Warning","Hidden","DarkTheme"];export{o as DarkTheme,s as Error,a as Hidden,t as Info,e as Success,r as Warning,D as __namedExportsOrder,V as default};
