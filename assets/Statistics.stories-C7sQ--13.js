import{j as J}from"./jsx-runtime-CkxqCPlQ.js";import{S as q}from"./Statistics-rCnpW1qT.js";import"./index-DJO9vBfz.js";const z=(R,e)=>{const _={gamesPlayed:e.args.gamesPlayed,gamesWon:e.args.gamesWon,currentStreak:e.args.currentStreak,maxStreak:e.args.maxStreak,guessDistribution:Object.entries(e.args.distribution).map(([A,I])=>I)};return localStorage.setItem("gameStats",JSON.stringify(_)),J.jsx(R,{...e.args})},M={title:"Wordle/Statistics",component:q,parameters:{componentSubtitle:"Statistics panel showing game performance"},decorators:[z],argTypes:{gamesPlayed:{control:{type:"number",min:0,max:1e3,step:1},description:"Total number of games played",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},gamesWon:{control:{type:"number",min:0,max:1e3,step:1},description:"Total number of games won",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},currentStreak:{control:{type:"number",min:0,max:100,step:1},description:"Current winning streak",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},maxStreak:{control:{type:"number",min:0,max:100,step:1},description:"Longest winning streak",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},distribution:{control:"object",description:"Distribution of guesses for won games",table:{type:{summary:"Record<number, number>"},defaultValue:{summary:"{}"}}}}},r={args:{gamesPlayed:0,gamesWon:0,currentStreak:0,maxStreak:0,distribution:{}},parameters:{docs:{description:{story:"Statistics display for a new player with no games played."}}}},a={args:{gamesPlayed:1,gamesWon:1,currentStreak:1,maxStreak:1,distribution:{4:1}},parameters:{docs:{description:{story:"Statistics after winning the first game in 4 guesses."}}}},t={args:{gamesPlayed:10,gamesWon:6,currentStreak:2,maxStreak:2,distribution:{3:1,4:2,5:2,6:1}},parameters:{docs:{description:{story:"Statistics for a beginner player with a 60% win rate."}}}},n={args:{gamesPlayed:50,gamesWon:45,currentStreak:12,maxStreak:15,distribution:{1:5,2:10,3:15,4:8,5:5,6:2}},parameters:{docs:{description:{story:"Statistics for a casual player with a 90% win rate."}}}},s={args:{gamesPlayed:200,gamesWon:195,currentStreak:50,maxStreak:75,distribution:{1:25,2:55,3:65,4:35,5:10,6:5}},parameters:{docs:{description:{story:"Statistics for an expert player with a 97.5% win rate and high efficiency."}}}},i={args:{gamesPlayed:100,gamesWon:100,currentStreak:100,maxStreak:100,distribution:{1:20,2:30,3:25,4:15,5:8,6:2}},parameters:{docs:{description:{story:"Statistics for a perfect player who has won every game."}}}},o={args:{gamesPlayed:75,gamesWon:60,currentStreak:0,maxStreak:20,distribution:{2:15,3:20,4:15,5:7,6:3}},parameters:{docs:{description:{story:"Statistics for a player who just lost their winning streak."}}}},m={args:{gamesPlayed:30,gamesWon:10,currentStreak:1,maxStreak:2,distribution:{4:2,5:3,6:5}},parameters:{docs:{description:{story:"Statistics for a player with a 33% win rate, mostly winning in later guesses."}}}},c={args:{gamesPlayed:50,gamesWon:45,currentStreak:12,maxStreak:15,distribution:{1:5,2:10,3:15,4:8,5:5,6:2}},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Statistics display in dark theme."}}}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    distribution: {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics display for a new player with no games played.'
      }
    }
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,l,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    gamesPlayed: 1,
    gamesWon: 1,
    currentStreak: 1,
    maxStreak: 1,
    distribution: {
      4: 1
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics after winning the first game in 4 guesses.'
      }
    }
  }
}`,...(y=(l=a.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var S,k,b;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    gamesPlayed: 10,
    gamesWon: 6,
    currentStreak: 2,
    maxStreak: 2,
    distribution: {
      3: 1,
      4: 2,
      5: 2,
      6: 1
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics for a beginner player with a 60% win rate.'
      }
    }
  }
}`,...(b=(k=t.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var f,w,P;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    gamesPlayed: 50,
    gamesWon: 45,
    currentStreak: 12,
    maxStreak: 15,
    distribution: {
      1: 5,
      2: 10,
      3: 15,
      4: 8,
      5: 5,
      6: 2
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics for a casual player with a 90% win rate.'
      }
    }
  }
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var h,x,W;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    gamesPlayed: 200,
    gamesWon: 195,
    currentStreak: 50,
    maxStreak: 75,
    distribution: {
      1: 25,
      2: 55,
      3: 65,
      4: 35,
      5: 10,
      6: 5
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics for an expert player with a 97.5% win rate and high efficiency.'
      }
    }
  }
}`,...(W=(x=s.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var j,T,V;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    gamesPlayed: 100,
    gamesWon: 100,
    currentStreak: 100,
    maxStreak: 100,
    distribution: {
      1: 20,
      2: 30,
      3: 25,
      4: 15,
      5: 8,
      6: 2
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics for a perfect player who has won every game.'
      }
    }
  }
}`,...(V=(T=i.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var D,E,L;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    gamesPlayed: 75,
    gamesWon: 60,
    currentStreak: 0,
    maxStreak: 20,
    distribution: {
      2: 15,
      3: 20,
      4: 15,
      5: 7,
      6: 3
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics for a player who just lost their winning streak.'
      }
    }
  }
}`,...(L=(E=o.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var C,N,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    gamesPlayed: 30,
    gamesWon: 10,
    currentStreak: 1,
    maxStreak: 2,
    distribution: {
      4: 2,
      5: 3,
      6: 5
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics for a player with a 33% win rate, mostly winning in later guesses.'
      }
    }
  }
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var v,B,F;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    gamesPlayed: 50,
    gamesWon: 45,
    currentStreak: 12,
    maxStreak: 15,
    distribution: {
      1: 5,
      2: 10,
      3: 15,
      4: 8,
      5: 5,
      6: 2
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Statistics display in dark theme.'
      }
    }
  }
}`,...(F=(B=c.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const Q=["NewPlayer","FirstWin","BeginnerPlayer","CasualPlayer","ExpertPlayer","PerfectPlayer","LostStreak","StrugglingPlayer","DarkTheme"];export{t as BeginnerPlayer,n as CasualPlayer,c as DarkTheme,s as ExpertPlayer,a as FirstWin,o as LostStreak,r as NewPlayer,i as PerfectPlayer,m as StrugglingPlayer,Q as __namedExportsOrder,M as default};
