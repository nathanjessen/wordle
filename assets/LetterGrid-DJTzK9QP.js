import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{W as l}from"./WordLine-sPSBJFAh.js";const m=({lines:r=[],cols:n=5,rows:s=5})=>{const i=s-r.length;return a.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[r.map((t,e)=>a.jsx(l,{items:t,length:n,className:"animate-pop",style:{animationDelay:`${e*50}ms`}},`line-${e}`)),[...Array(i)].map((t,e)=>a.jsx(l,{items:[],length:n},`empty-${e}`))]})};m.__docgenInfo={description:"",methods:[],displayName:"LetterGrid",props:{lines:{required:!1,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"union",raw:"TLetter | null",elements:[{name:"signature",type:"object",raw:`{
  char: string;
  color: TColor;
}`,signature:{properties:[{key:"char",value:{name:"string",required:!0}},{key:"color",value:{name:"union",raw:"'success' | 'warning' | 'info' | 'neutral' | 'base'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'base'"}],required:!0}}]}},{name:"null"}]}],raw:"Array<TLetter | null>"}],raw:"Array<TLine>"},description:"",defaultValue:{value:"[]",computed:!1}},cols:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}}}};export{m as L};
