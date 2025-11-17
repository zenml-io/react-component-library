import{R as e}from"./iframe-DmX7tmNN.js";import{T as m,a as i,b as o,c as p,d as s,e as d}from"./DataTable-CLucAQFU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcZlE0k4.js";import"./Sidebar-CDJGsRXM.js";import"./index-B5sGjzNZ.js";import"./jsx-runtime-CUg_HtQB.js";import"./Avatar-CWIR2_AC.js";import"./index-CUK_SDBg.js";import"./index-BA3UrDet.js";import"./index-D6TQrr0y.js";import"./index-CDl4ovXb.js";import"./index-ok-L0AhG.js";import"./Dropdown-B9HFxJLE.js";import"./index-DmxPDRKa.js";import"./index-DTAmaT1b.js";import"./index-D-nmysT_.js";import"./index-DyC7I4WK.js";import"./index-BxHfLno0.js";import"./index-ByXhEWVu.js";import"./index-DA14Nwyh.js";import"./index-6pxhu0Ho.js";import"./index-Du9gg2yb.js";import"./index-BKtyZrBq.js";import"./index-BrRc4MDt.js";import"./Sheet-DngqiYXB.js";import"./index-C9RW4Rdq.js";import"./Tabs-DZYO6Juw.js";import"./Collapsible-Cg8hxbNH.js";import"./Tooltip-AnnjnAdK.js";import"./index-BJJCtjfj.js";import"./Checkbox-BFYbSxSv.js";import"./index-Cg7qhiW3.js";import"./Toaster-Bth6sE4V.js";import"./Dialog-CVgvFDYT.js";import"./ProgressBar-P1o0mZMF.js";import"./Select-XUN7Nr-d.js";import"./Switch-BRXpZlSg.js";import"./AlertDialog-DXwo9EY2.js";import"./HoverCard-CFF86Jor.js";import"./RadioGroup-CTseSGW6.js";import"./Command-Cvk5DusC.js";import"./Popover-D_R8sxLH.js";import"./Box-BPAXv97f.js";import"./Tag-DlG5UjG7.js";import"./Badge-D6C7I4Fl.js";import"./Button-jO0B4tfe.js";import"./Input-frgHgzlK.js";import"./Spinner-BJm9MtOJ.js";import"./Skeleton-Dj42i_H4.js";const c=["ID","Name","Age"],u=[["1","John Doe","25"],["2","Jane Doe","24"],["3","John Smith","26"],["4","Jane Smith","27"]],se={title:"Elements/Table/Table",component:m,parameters:{layout:"centered"},decorators:[r=>e.createElement("div",{className:"w-[500px]"},e.createElement(r,null))],tags:["autodocs"]},t={name:"Default",render(){return e.createElement("div",{className:"overflow-hidden overflow-x-auto rounded-md border"},e.createElement(m,null,e.createElement(i,{className:"bg-theme-surface-tertiary"},e.createElement(o,null,c.map((r,a)=>e.createElement(p,{className:"text-theme-text-secondary",key:a},r)))),e.createElement(s,null,u.map((r,a)=>e.createElement(o,{key:a},r.map((n,l)=>e.createElement(d,{className:"bg-theme-surface-primary",key:l},n)))))))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const de=["DefaultVariant"];export{t as DefaultVariant,de as __namedExportsOrder,se as default};
