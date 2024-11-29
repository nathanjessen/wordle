import{T as E}from"./Toast-BDZF9BDc.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const M={title:"Wordle/Toast",component:E,parameters:{componentSubtitle:"Toast notification component for game messages",docs:{description:{component:"A toast notification component that automatically dismisses itself after a specified duration. Supports success, error, and info message types with appropriate icons."}}},argTypes:{message:{control:"text",description:"Message to display in the toast",table:{type:{summary:"string"}}},type:{control:"select",options:["success","error","info"],description:"Type of toast message",table:{type:{summary:"'success' | 'error' | 'info'"}}},duration:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Duration in milliseconds before toast auto-dismisses",table:{type:{summary:"number"},defaultValue:{summary:"3000"}}},onClose:{description:"Callback when toast is dismissed",table:{type:{summary:"() => void"}},action:"onClose"}}},e={args:{message:"Great job! You won the game!",type:"success",duration:3e3,onClose:()=>{}},parameters:{docs:{description:{story:"Success toast notification with checkmark icon, typically used for game completion or correct guesses."}}}},s={args:{message:"Not enough letters",type:"error",duration:3e3,onClose:()=>{}},parameters:{docs:{description:{story:"Error toast notification with X icon, used for invalid inputs or game rule violations."}}}},o={args:{message:"Game started! Good luck!",type:"info",duration:3e3,onClose:()=>{}},parameters:{docs:{description:{story:"Info toast notification with information icon, used for game status updates and hints."}}}},t={args:{message:"This message will disappear quickly",type:"info",duration:1e3,onClose:()=>{}},parameters:{docs:{description:{story:"Toast with shorter duration for quick feedback messages."}}}},a={args:{message:"This is an important message that stays longer",type:"info",duration:5e3,onClose:()=>{}},parameters:{docs:{description:{story:"Toast with longer duration for important messages that need more reading time."}}}},r={args:{message:"This is a very long message that demonstrates how the toast component handles multiple lines of text and ensures proper wrapping.",type:"info",duration:4e3,onClose:()=>{}},parameters:{docs:{description:{story:"Toast with a long message to demonstrate text wrapping behavior."}}}},n={args:{message:"Dark theme toast message",type:"success",duration:3e3,onClose:()=>{}},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Toast appearance in dark theme."}}}};var i,c,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    message: 'Great job! You won the game!',
    type: 'success',
    duration: 3000,
    onClose: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Success toast notification with checkmark icon, typically used for game completion or correct guesses.'
      }
    }
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    message: 'Not enough letters',
    type: 'error',
    duration: 3000,
    onClose: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Error toast notification with X icon, used for invalid inputs or game rule violations.'
      }
    }
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,l,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    message: 'Game started! Good luck!',
    type: 'info',
    duration: 3000,
    onClose: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Info toast notification with information icon, used for game status updates and hints.'
      }
    }
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var h,f,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    message: 'This message will disappear quickly',
    type: 'info',
    duration: 1000,
    onClose: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Toast with shorter duration for quick feedback messages.'
      }
    }
  }
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var w,T,b;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    message: 'This is an important message that stays longer',
    type: 'info',
    duration: 5000,
    onClose: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Toast with longer duration for important messages that need more reading time.'
      }
    }
  }
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var C,S,v;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    message: 'This is a very long message that demonstrates how the toast component handles multiple lines of text and ensures proper wrapping.',
    type: 'info',
    duration: 4000,
    onClose: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Toast with a long message to demonstrate text wrapping behavior.'
      }
    }
  }
}`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var D,x,G;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    message: 'Dark theme toast message',
    type: 'success',
    duration: 3000,
    onClose: () => {}
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Toast appearance in dark theme.'
      }
    }
  }
}`,...(G=(x=n.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};const j=["Success","Error","Info","QuickDismiss","LongDuration","LongMessage","DarkTheme"];export{n as DarkTheme,s as Error,o as Info,a as LongDuration,r as LongMessage,t as QuickDismiss,e as Success,j as __namedExportsOrder,M as default};
