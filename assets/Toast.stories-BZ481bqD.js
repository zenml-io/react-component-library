import{R as e}from"./index-yUhCOHB4.js";import{T as p,t as m,a as u}from"./Toaster-Dd2WXegu.js";import{B as d}from"./Button-C9t4LVQ2.js";import"./index-z4ifl892.js";import"./index-D4ukzbp3.js";import"./index-Da_IA54p.js";import"./index-CLdCKqIz.js";import"./jsx-runtime-DBhXMc9n.js";import"./index-C2ukzIhV.js";import"./index-DQXGlRzm.js";import"./index-DLnfOhia.js";import"./index-C1ppjEGk.js";import"./index-Bt0LB2xV.js";import"./index-CxJgGtSs.js";import"./index-CanQ0flI.js";import"./index-DcuGh8cT.js";const C={title:"Elements/Toast",component:p,argTypes:{emphasis:{description:"Emphasis of the toast",control:"select",defaultValue:"subtle",options:["subtle","bold"]},status:{description:"Status of the toast",control:"select",defaultValue:"default",options:["default","error","success","warning"]},rounded:{control:"boolean",defaultValue:!0}},parameters:{layout:"centered"},decorators:[r=>e.createElement("div",{className:"min-w-[800px] flex items-center justify-center min-h-[1000px]"},e.createElement(r,null))],tags:["autodocs"]},t={name:"Toast",argTypes:{emphasis:"subtle",status:"error",rounded:"true"},render:({emphasis:r,status:n,rounded:i})=>e.createElement("div",null,e.createElement(d,{onClick:()=>{m({status:n,emphasis:r,description:"This is a toast message",rounded:i})}},"Add Toast"),e.createElement(u,null))};var s,o,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Toast",
  argTypes: {
    // @ts-expect-error for some reason a wrong type is picked up there
    emphasis: "subtle",
    // @ts-expect-error for some reason a wrong type is picked up there
    status: "error",
    // @ts-expect-error for some reason a wrong type is picked up there
    rounded: "true"
  },
  render: ({
    emphasis,
    status,
    rounded
  }) => <div>
            <Button onClick={() => {
      toast({
        status,
        emphasis,
        description: "This is a toast message",
        rounded
      });
    }}>
                Add Toast
            </Button>
            <Toaster />
        </div>
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const D=["DefaultVariant"];export{t as DefaultVariant,D as __namedExportsOrder,C as default};
