import{C as H}from"./ColorTile-CB4WjyZ3.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const O={title:"Wordle/ColorTile",component:H,parameters:{componentSubtitle:"A tile component that displays a single character with different states"},argTypes:{color:{control:"select",options:["base","success","warning","info","neutral"],description:"The color state of the tile",table:{type:{summary:"TColor"},defaultValue:{summary:"'base'"}}},children:{control:"text",description:"The character to display in the tile",table:{type:{summary:"ReactNode"},defaultValue:{summary:"undefined"}}},className:{control:"text",description:"Additional CSS classes",table:{type:{summary:"string"},defaultValue:{summary:"''"}}},style:{control:"object",description:"Additional CSS styles",table:{type:{summary:"CSSProperties"},defaultValue:{summary:"{}"}}}}},e={args:{},parameters:{docs:{description:{story:"Empty tile with base styling, used for unfilled guesses."}}}},r={args:{children:"A",color:"base"},parameters:{docs:{description:{story:"Base tile with a character, used for current guess input."}}}},s={args:{children:"B",color:"success"},parameters:{docs:{description:{story:"Green tile indicating a correct letter in the correct position."}}}},t={args:{children:"C",color:"warning"},parameters:{docs:{description:{story:"Yellow tile indicating a correct letter in the wrong position."}}}},a={args:{children:"D",color:"neutral"},parameters:{docs:{description:{story:"Gray tile indicating a letter not present in the word."}}}},n={args:{children:"E",color:"success",className:"animate-flip"},parameters:{docs:{description:{story:"Tile with flip animation when revealing the color."}}}},o={args:{children:"F",color:"success",className:"w-20 h-20 text-4xl"},parameters:{docs:{description:{story:"Tile with custom size using className."}}}},c={args:{children:"G",color:"success",style:{transform:"rotate(45deg)",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"}},parameters:{docs:{description:{story:"Tile with custom styles applied."}}}},i={args:{children:"H",color:"base"},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Tile appearance in dark theme."}}}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Empty tile with base styling, used for unfilled guesses.'
      }
    }
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'A',
    color: 'base'
  },
  parameters: {
    docs: {
      description: {
        story: 'Base tile with a character, used for current guess input.'
      }
    }
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'B',
    color: 'success'
  },
  parameters: {
    docs: {
      description: {
        story: 'Green tile indicating a correct letter in the correct position.'
      }
    }
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var f,S,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'C',
    color: 'warning'
  },
  parameters: {
    docs: {
      description: {
        story: 'Yellow tile indicating a correct letter in the wrong position.'
      }
    }
  }
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var T,x,C;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'D',
    color: 'neutral'
  },
  parameters: {
    docs: {
      description: {
        story: 'Gray tile indicating a letter not present in the word.'
      }
    }
  }
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var N,k,A;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'E',
    color: 'success',
    className: 'animate-flip'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tile with flip animation when revealing the color.'
      }
    }
  }
}`,...(A=(k=n.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var E,B,G;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'F',
    color: 'success',
    className: 'w-20 h-20 text-4xl'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tile with custom size using className.'
      }
    }
  }
}`,...(G=(B=o.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var z,D,V;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'G',
    color: 'success',
    style: {
      transform: 'rotate(45deg)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Tile with custom styles applied.'
      }
    }
  }
}`,...(V=(D=c.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var W,v,F;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'H',
    color: 'base'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Tile appearance in dark theme.'
      }
    }
  }
}`,...(F=(v=i.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const P=["Empty","Base","Success","Warning","Neutral","Animated","CustomSize","CustomStyle","DarkTheme"];export{n as Animated,r as Base,o as CustomSize,c as CustomStyle,i as DarkTheme,e as Empty,a as Neutral,s as Success,t as Warning,P as __namedExportsOrder,O as default};
