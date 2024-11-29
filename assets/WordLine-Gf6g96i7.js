import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{C as t}from"./ColorTile-CB4WjyZ3.js";const d=({items:l=[],length:n,className:s="",style:o})=>{const i=n-l.length;return a.jsxs("div",{className:`flex gap-2 ${s}`,style:o,children:[l.map((e,r)=>a.jsx(t,{color:e==null?void 0:e.color,className:`w-14 h-14 text-2xl font-bold border-2 
                    bg-light-tile-bg dark:bg-dark-bg-secondary
                    border-light-tile-border dark:border-dark-tile-border
                    text-light-text-primary dark:text-dark-text-primary`,children:e==null?void 0:e.char},r)),[...Array(i)].map((e,r)=>a.jsx(t,{className:`w-14 h-14 text-2xl font-bold border-2
                    bg-light-tile-bg dark:bg-dark-bg-secondary
                    border-light-tile-border dark:border-dark-tile-border`},`empty-${r}`))]})};d.__docgenInfo={description:"",methods:[],displayName:"WordLine",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"TLetter | null",elements:[{name:"signature",type:"object",raw:`{
  char: string;
  color: TColor;
}`,signature:{properties:[{key:"char",value:{name:"string",required:!0}},{key:"color",value:{name:"union",raw:"'success' | 'warning' | 'info' | 'neutral' | 'base'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'base'"}],required:!0}}]}},{name:"null"}]}],raw:"Array<TLetter | null>"},description:"",defaultValue:{value:"[]",computed:!1}},length:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};export{d as W};
