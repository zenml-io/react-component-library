import{R as e}from"./iframe-DmX7tmNN.js";import{T as a,t as n,a as i}from"./Toaster-Bth6sE4V.js";import{B as p}from"./Button-jO0B4tfe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BA3UrDet.js";import"./index-D6TQrr0y.js";import"./index-DmxPDRKa.js";import"./index-CDl4ovXb.js";import"./index-B5sGjzNZ.js";import"./jsx-runtime-CUg_HtQB.js";import"./index-DTAmaT1b.js";import"./index-CUK_SDBg.js";import"./index-DyC7I4WK.js";import"./index-6pxhu0Ho.js";import"./index-Du9gg2yb.js";import"./index-BJJCtjfj.js";import"./index-ok-L0AhG.js";import"./index-DcZlE0k4.js";const A={title:"Elements/Toast",component:a,argTypes:{emphasis:{description:"Emphasis of the toast",control:"select",defaultValue:"subtle",options:["subtle","bold"]},status:{description:"Status of the toast",control:"select",defaultValue:"default",options:["default","error","success","warning"]},rounded:{control:"boolean",defaultValue:!0}},parameters:{layout:"centered"},decorators:[r=>e.createElement("div",{className:"min-w-[800px] flex items-center justify-center min-h-[1000px]"},e.createElement(r,null))],tags:["autodocs"]},t={name:"Toast",argTypes:{emphasis:"subtle",status:"error",rounded:"true"},render:({emphasis:r,status:s,rounded:o})=>e.createElement("div",null,e.createElement(p,{onClick:()=>{n({status:s,emphasis:r,description:"This is a toast message",rounded:o})}},"Add Toast"),e.createElement(i,null))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const C=["DefaultVariant"];export{t as DefaultVariant,C as __namedExportsOrder,A as default};
