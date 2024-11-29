import{j as q}from"./jsx-runtime-CkxqCPlQ.js";import{S as z}from"./Statistics-rCnpW1qT.js";import"./index-DJO9vBfz.js";const G=(I,e)=>{const d=Array(6).fill(0);Object.entries(e.args.distribution).forEach(([_,J])=>{d[parseInt(_)-1]=J});const R={gamesPlayed:e.args.gamesPlayed,gamesWon:e.args.gamesWon,currentStreak:e.args.currentStreak,maxStreak:e.args.maxStreak,guessDistribution:d};return localStorage.setItem("gameStats",JSON.stringify(R)),q.jsx(I,{...e.args})},Q={title:"Wordle/Statistics",component:z,parameters:{componentSubtitle:"Statistics panel showing game performance"},decorators:[G],argTypes:{gamesPlayed:{control:{type:"number",min:0,max:1e3,step:1},description:"Total number of games played",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},gamesWon:{control:{type:"number",min:0,max:1e3,step:1},description:"Total number of games won",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},currentStreak:{control:{type:"number",min:0,max:100,step:1},description:"Current winning streak",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},maxStreak:{control:{type:"number",min:0,max:100,step:1},description:"Longest winning streak",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},distribution:{control:"object",description:"Distribution of guesses for won games",table:{type:{summary:"Record<number, number>"},defaultValue:{summary:"{}"}}}}},r={args:{gamesPlayed:0,gamesWon:0,currentStreak:0,maxStreak:0,distribution:{}},parameters:{docs:{description:{story:"Statistics display for a new player with no games played."}}}},a={args:{gamesPlayed:1,gamesWon:1,currentStreak:1,maxStreak:1,distribution:{4:1}},parameters:{docs:{description:{story:"Statistics after winning the first game in 4 guesses."}}}},t={args:{gamesPlayed:10,gamesWon:6,currentStreak:2,maxStreak:2,distribution:{3:1,4:2,5:2,6:1}},parameters:{docs:{description:{story:"Statistics for a beginner player with a 60% win rate."}}}},n={args:{gamesPlayed:50,gamesWon:45,currentStreak:12,maxStreak:15,distribution:{1:5,2:10,3:15,4:8,5:5,6:2}},parameters:{docs:{description:{story:"Statistics for a casual player with a 90% win rate."}}}},s={args:{gamesPlayed:200,gamesWon:195,currentStreak:50,maxStreak:75,distribution:{1:25,2:55,3:65,4:35,5:10,6:5}},parameters:{docs:{description:{story:"Statistics for an expert player with a 97.5% win rate and high efficiency."}}}},i={args:{gamesPlayed:100,gamesWon:100,currentStreak:100,maxStreak:100,distribution:{1:20,2:30,3:25,4:15,5:8,6:2}},parameters:{docs:{description:{story:"Statistics for a perfect player who has won every game."}}}},o={args:{gamesPlayed:75,gamesWon:60,currentStreak:0,maxStreak:20,distribution:{2:15,3:20,4:15,5:7,6:3}},parameters:{docs:{description:{story:"Statistics for a player who just lost their winning streak."}}}},m={args:{gamesPlayed:30,gamesWon:10,currentStreak:1,maxStreak:2,distribution:{4:2,5:3,6:5}},parameters:{docs:{description:{story:"Statistics for a player with a 33% win rate, mostly winning in later guesses."}}}},c={args:{gamesPlayed:50,gamesWon:45,currentStreak:12,maxStreak:15,distribution:{1:5,2:10,3:15,4:8,5:5,6:2}},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Statistics display in dark theme."}}}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var l,y,S;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,b,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,P,h;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(P=n.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var x,W,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(W=s.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var E,T,V;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(T=i.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var D,L,C;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(C=(L=o.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var N,O,v;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(v=(O=m.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var A,B,F;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(F=(B=c.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const U=["NewPlayer","FirstWin","BeginnerPlayer","CasualPlayer","ExpertPlayer","PerfectPlayer","LostStreak","StrugglingPlayer","DarkTheme"];export{t as BeginnerPlayer,n as CasualPlayer,c as DarkTheme,s as ExpertPlayer,a as FirstWin,o as LostStreak,r as NewPlayer,i as PerfectPlayer,m as StrugglingPlayer,U as __namedExportsOrder,Q as default};
