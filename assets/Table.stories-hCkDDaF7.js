import{R as e}from"./index-yUhCOHB4.js";import{T as i,a as d,b as o,c,d as u,e as b}from"./DataTable-_XBPp3WU.js";import"./index-DcuGh8cT.js";import"./Sidebar-DXI27wNU.js";import"./index-CLdCKqIz.js";import"./jsx-runtime-DBhXMc9n.js";import"./Avatar-CuQjlxMM.js";import"./index-DQXGlRzm.js";import"./index-z4ifl892.js";import"./index-Da_IA54p.js";import"./index-CanQ0flI.js";import"./Dropdown-UZYDtZVN.js";import"./index-D4ukzbp3.js";import"./index-C2ukzIhV.js";import"./index-DxuuQHv8.js";import"./index-DLnfOhia.js";import"./index-9HIxi_yA.js";import"./index-BUbqCghI.js";import"./index-Bl96pswo.js";import"./index-C1ppjEGk.js";import"./index-Bt0LB2xV.js";import"./index-BpdWl5fv.js";import"./index-BlA1p_hj.js";import"./Sheet-YjvkgH-l.js";import"./index-k_fsUSc7.js";import"./Tabs-Y5hiDAnu.js";import"./Collapsible-Te5KzC6g.js";import"./Tooltip-BaKFQhR7.js";import"./index-CxJgGtSs.js";import"./Checkbox-BC0kOpTp.js";import"./index-eqnvtRXP.js";import"./Toaster-Dd2WXegu.js";import"./Dialog-C-BnFxAF.js";import"./ProgressBar-n6dtUjoI.js";import"./Select-5--5xrr5.js";import"./Switch-vWjN7f2E.js";import"./AlertDialog-BQvUAOHc.js";import"./HoverCard-BifD-qDL.js";import"./RadioGroup-C1HrXmXs.js";import"./Command-Bm8sksxD.js";import"./Popover-BsGUYMwW.js";import"./Box-Cg4Kv49C.js";import"./Tag-BzECD8IH.js";import"./Badge-CgunGKdj.js";import"./Button-C9t4LVQ2.js";import"./Input-E0kkP7Lb.js";import"./Spinner-BauU_loe.js";import"./Skeleton-ByHfTFMd.js";const T=["ID","Name","Age"],y=[["1","John Doe","25"],["2","Jane Doe","24"],["3","John Smith","26"],["4","Jane Smith","27"]],de={title:"Elements/Table/Table",component:i,parameters:{layout:"centered"},decorators:[r=>e.createElement("div",{className:"w-[500px]"},e.createElement(r,null))],tags:["autodocs"]},t={name:"Default",render(){return e.createElement("div",{className:"overflow-hidden overflow-x-auto rounded-md border"},e.createElement(i,null,e.createElement(d,{className:"bg-theme-surface-tertiary"},e.createElement(o,null,T.map((r,a)=>e.createElement(c,{className:"text-theme-text-secondary",key:a},r)))),e.createElement(u,null,y.map((r,a)=>e.createElement(o,{key:a},r.map((p,s)=>e.createElement(b,{className:"bg-theme-surface-primary",key:s},p)))))))}};var m,n,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const ce=["DefaultVariant"];export{t as DefaultVariant,ce as __namedExportsOrder,de as default};
