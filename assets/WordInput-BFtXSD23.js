import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as d}from"./index-DJO9vBfz.js";const i=({onGuess:o,disabled:n=!1})=>{const[e,t]=d.useState(""),s=r=>{r.key==="Enter"&&e.trim()&&(o(e.trim().toLowerCase()),t(""))};return a.jsx("div",{className:"flex justify-center",children:a.jsx("input",{type:"text",value:e,onChange:r=>t(r.target.value),onKeyDown:s,disabled:n,placeholder:"Type your guess",className:`w-full max-w-xs px-4 py-3 text-lg text-center rounded-lg 
                  bg-light-bg-secondary dark:bg-dark-bg-secondary
                  text-light-text-primary dark:text-dark-text-primary
                  border-2 border-[#d4c5b3] dark:border-dark-border
                  focus:outline-none focus:ring-2 focus:ring-light-button-primary dark:focus:ring-dark-button-primary
                  focus:border-light-button-primary dark:focus:border-dark-button-primary
                  disabled:opacity-50 disabled:cursor-not-allowed
                  placeholder:text-light-text-secondary dark:placeholder:text-dark-text-secondary
                  transition-colors duration-200`})})};i.__docgenInfo={description:"",methods:[],displayName:"WordInput",props:{onGuess:{required:!0,tsType:{name:"signature",type:"function",raw:"(guess: string) => void",signature:{arguments:[{type:{name:"string"},name:"guess"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{i as W};
