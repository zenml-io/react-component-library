import{R as e}from"./iframe-DmX7tmNN.js";import{C as o,a as r,b as l,c as d,d as t,e as n,f as s,g as a}from"./Command-Cvk5DusC.js";import{I as p}from"./Input-frgHgzlK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9RW4Rdq.js";import"./index-DmxPDRKa.js";import"./index-CDl4ovXb.js";import"./index-B5sGjzNZ.js";import"./jsx-runtime-CUg_HtQB.js";import"./index-CUK_SDBg.js";import"./index-BA3UrDet.js";import"./index-D6TQrr0y.js";import"./index-BrRc4MDt.js";import"./index-DyC7I4WK.js";import"./index-BxHfLno0.js";import"./index-6pxhu0Ho.js";import"./index-Du9gg2yb.js";import"./index-DcZlE0k4.js";import"./Dialog-CVgvFDYT.js";import"./index-ok-L0AhG.js";const T={title:"Elements/Command",component:o,argTypes:{},parameters:{layout:"centered"},tags:["autodocs"]},m={name:"Default",render:()=>e.createElement(o,{className:"rounded-md border border-theme-border-moderate shadow-md md:min-w-[450px]"},e.createElement(r,{placeholder:"Type a command or search..."},e.createElement(p,{className:"w-full",inputSize:"sm"})),e.createElement(l,null,e.createElement(d,null,"No results found."),e.createElement(t,{heading:"Suggestions"},e.createElement(n,null,e.createElement("span",null,"Calendar")),e.createElement(n,null,e.createElement("span",null,"Search Emoji")),e.createElement(n,{disabled:!0},e.createElement("span",null,"Calculator"))),e.createElement(s,null),e.createElement(t,{heading:"Settings"},e.createElement(n,null,e.createElement("span",null,"Profile"),e.createElement(a,null,"⌘P")),e.createElement(n,null,e.createElement("span",null,"Billing"),e.createElement(a,null,"⌘B")),e.createElement(n,null,e.createElement("span",null,"Settings"),e.createElement(a,null,"⌘S")))))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: () => <Command className="rounded-md border border-theme-border-moderate shadow-md md:min-w-[450px]">
            <CommandInput placeholder="Type a command or search...">
                <Input className="w-full" inputSize="sm" />
            </CommandInput>
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                        <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem disabled>
                        <span>Calculator</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <span>Billing</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
}`,...m.parameters?.docs?.source}}};const j=["DefaultVariant"];export{m as DefaultVariant,j as __namedExportsOrder,T as default};
