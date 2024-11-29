import{W as R}from"./WordLine-sPSBJFAh.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";import"./ColorTile-r3Qg_vxC.js";const I={title:"Wordle/WordLine",component:R,parameters:{componentSubtitle:"A line component that displays a word guess"},argTypes:{items:{control:"object",description:"Array of letter items with color states",table:{type:{summary:"Array<{ char: string; color: TColor } | null>"},defaultValue:{summary:"[]"}}},length:{control:{type:"number",min:1,max:10},description:"Length of the word line",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},className:{control:"text",description:"Additional CSS classes",table:{type:{summary:"string"},defaultValue:{summary:"''"}}},style:{control:"object",description:"Additional CSS styles",table:{type:{summary:"CSSProperties"},defaultValue:{summary:"{}"}}}}},r={args:{items:[],length:5},parameters:{docs:{description:{story:"Empty line with default spacing."}}}},e={args:{items:[{char:"R",color:"base"},{char:"E",color:"base"}],length:5},parameters:{docs:{description:{story:"Line with partial word entered."}}}},s={args:{items:[{char:"R",color:"success"},{char:"E",color:"success"},{char:"A",color:"success"},{char:"C",color:"success"},{char:"T",color:"success"}],length:5},parameters:{docs:{description:{story:"Line with all letters correct."}}}},n={args:{items:[{char:"S",color:"neutral"},{char:"T",color:"warning"},{char:"A",color:"success"},{char:"R",color:"neutral"},{char:"T",color:"success"}],length:5},parameters:{docs:{description:{story:"Line with mixed letter results."}}}},c={args:{items:[{char:"W",color:"success"},{char:"O",color:"success"},{char:"R",color:"success"},{char:"D",color:"success"}],length:4,className:"gap-4"},parameters:{docs:{description:{story:"Line with custom gap spacing between tiles."}}}},o={args:{items:[{char:"B",color:"success"},{char:"I",color:"success"},{char:"G",color:"success"}],length:3,style:{transform:"scale(1.2)"}},parameters:{docs:{description:{story:"Line with scaled-up tiles."}}}},a={args:{items:[{char:"N",color:"success"},{char:"I",color:"warning"},{char:"G",color:"neutral"},{char:"H",color:"success"},{char:"T",color:"warning"}],length:5},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Line appearance in dark theme."}}}};var t,l,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    items: [],
    length: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty line with default spacing.'
      }
    }
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: [{
      char: 'R',
      color: 'base'
    }, {
      char: 'E',
      color: 'base'
    }],
    length: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'Line with partial word entered.'
      }
    }
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,h,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: [{
      char: 'R',
      color: 'success'
    }, {
      char: 'E',
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
    }],
    length: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'Line with all letters correct.'
      }
    }
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,w,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: [{
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
    }],
    length: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'Line with mixed letter results.'
      }
    }
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var b,C,L;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: [{
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
    }],
    length: 4,
    className: 'gap-4'
  },
  parameters: {
    docs: {
      description: {
        story: 'Line with custom gap spacing between tiles.'
      }
    }
  }
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var f,T,A;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [{
      char: 'B',
      color: 'success'
    }, {
      char: 'I',
      color: 'success'
    }, {
      char: 'G',
      color: 'success'
    }],
    length: 3,
    style: {
      transform: 'scale(1.2)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Line with scaled-up tiles.'
      }
    }
  }
}`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var E,k,x;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: [{
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
      color: 'success'
    }, {
      char: 'T',
      color: 'warning'
    }],
    length: 5
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Line appearance in dark theme.'
      }
    }
  }
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const V=["Empty","PartialWord","CompleteCorrect","CompleteMixed","CustomSpacing","CustomSize","DarkTheme"];export{s as CompleteCorrect,n as CompleteMixed,o as CustomSize,c as CustomSpacing,a as DarkTheme,r as Empty,e as PartialWord,V as __namedExportsOrder,I as default};
