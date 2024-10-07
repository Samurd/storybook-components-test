import{j as g}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";function u({label:d,size:y="normal",allcaps:x=!1,color:f="text-primary",fontColor:b}){return g.jsx("span",{className:`label ${y} ${f}`,style:{color:b,textTransform:x?"uppercase":"none"},children:d})}u.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Size of the label",defaultValue:{value:'"normal"',computed:!1}},allcaps:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"",defaultValue:{value:'"text-primary"',computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Example/MyLabel",tags:["autodocs"],component:u,parameters:{layout:"centered"},argTypes:{size:{control:"select"},fontColor:{control:"color"}}},e={args:{size:"normal",label:"Basic Label",color:"text-primary"}},a={args:{size:"normal",label:"All Caps",allcaps:!0,color:"text-primary"}},r={args:{size:"normal",label:"Secondary",color:"text-secondary"}};var l,t,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: "normal",
    label: "Basic Label",
    color: "text-primary"
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var o,n,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: "normal",
    label: "All Caps",
    allcaps: true,
    color: "text-primary"
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: "normal",
    label: "Secondary",
    color: "text-secondary"
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const S=["Basic","AllCaps","Secondary"];export{a as AllCaps,e as Basic,r as Secondary,S as __namedExportsOrder,z as default};
