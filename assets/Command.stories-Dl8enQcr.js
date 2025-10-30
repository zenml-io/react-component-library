import{R as e}from"./index-yUhCOHB4.js";import{C as d,a as s,b as p,c as u,d as t,e as n,f as c,g as a}from"./Command-Bm8sksxD.js";import{I as i}from"./Input-E0kkP7Lb.js";import"./index-k_fsUSc7.js";import"./index-D4ukzbp3.js";import"./index-Da_IA54p.js";import"./index-CLdCKqIz.js";import"./jsx-runtime-DBhXMc9n.js";import"./index-DQXGlRzm.js";import"./index-z4ifl892.js";import"./index-BlA1p_hj.js";import"./index-DLnfOhia.js";import"./index-9HIxi_yA.js";import"./index-C1ppjEGk.js";import"./index-Bt0LB2xV.js";import"./index-DcuGh8cT.js";import"./Dialog-C-BnFxAF.js";import"./index-CanQ0flI.js";const j={title:"Elements/Command",component:d,argTypes:{},parameters:{layout:"centered"},tags:["autodocs"]},m={name:"Default",render:()=>e.createElement(d,{className:"rounded-md border border-theme-border-moderate shadow-md md:min-w-[450px]"},e.createElement(s,{placeholder:"Type a command or search..."},e.createElement(i,{className:"w-full",inputSize:"sm"})),e.createElement(p,null,e.createElement(u,null,"No results found."),e.createElement(t,{heading:"Suggestions"},e.createElement(n,null,e.createElement("span",null,"Calendar")),e.createElement(n,null,e.createElement("span",null,"Search Emoji")),e.createElement(n,{disabled:!0},e.createElement("span",null,"Calculator"))),e.createElement(c,null),e.createElement(t,{heading:"Settings"},e.createElement(n,null,e.createElement("span",null,"Profile"),e.createElement(a,null,"⌘P")),e.createElement(n,null,e.createElement("span",null,"Billing"),e.createElement(a,null,"⌘B")),e.createElement(n,null,e.createElement("span",null,"Settings"),e.createElement(a,null,"⌘S")))))};var o,r,l;m.parameters={...m.parameters,docs:{...(o=m.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(r=m.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const z=["DefaultVariant"];export{m as DefaultVariant,z as __namedExportsOrder,j as default};
