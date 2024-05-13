import{R as e}from"./index-CTjT7uj6.js";import{T as m,a as u,b as n,c as b,d as i,e as T}from"./DataTable-lkhMb0eV.js";import"./index-BAggi1Ku.js";const p=["ID","Name","Age"],y=[["1","John Doe","25"],["2","Jane Doe","24"],["3","John Smith","26"],["4","Jane Smith","27"]],x={title:"Elements/Table/Table",component:m,parameters:{layout:"centered"},decorators:[a=>e.createElement("div",{className:"w-[500px]"},e.createElement(a,null))],tags:["autodocs"]},r={name:"Default",render(){return e.createElement("div",{className:"overflow-hidden overflow-x-auto rounded-md border"},e.createElement(m,null,e.createElement(u,{className:"bg-theme-surface-tertiary"},e.createElement(n,null,p.map((a,t)=>e.createElement(b,{className:"text-theme-text-secondary",key:t},a)))),e.createElement(i,null,y.map((a,t)=>e.createElement(n,{key:t},a.map((d,c)=>e.createElement(T,{className:"bg-theme-surface-primary",key:c},d)))))))}};var l,o,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Default",
  render() {
    return <div className="overflow-hidden overflow-x-auto rounded-md border">
                <Table>
                    <TableHeader className="bg-theme-surface-tertiary">
                        <TableRow>
                            {rows.map((rows, index) => {
              return <TableHead className="text-theme-text-secondary" key={index}>
                                        {rows}
                                    </TableHead>;
            })}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {values.map((value, index) => {
            return <TableRow key={index}>
                                    {value.map((val, i) => {
                return <TableCell className="bg-theme-surface-primary" key={i}>
                                                {val}
                                            </TableCell>;
              })}
                                </TableRow>;
          })}
                    </TableBody>
                </Table>
            </div>;
  }
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const h=["DefaultVariant"];export{r as DefaultVariant,h as __namedExportsOrder,x as default};
