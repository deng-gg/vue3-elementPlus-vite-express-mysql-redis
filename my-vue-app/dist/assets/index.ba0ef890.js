import{d as e,f as l,e as n,r as t,o as a,c as i,w as o,a as d,t as u,b as r}from"./index.e0a83e1d.js";var p=e({setup(){const e=l([]);let t=n(-1);return{addMenus:(l=0)=>{e.unshift({title:"",MenusID:"",ParentID:0,MenusName:"123",Conponent:"",path:"",icon:""}),t.value=0},tableData:e,currentEdit:t,giveUp:(l,n)=>{0!==l.ParentID||l.MenusID||(e.splice(n,1),t.value=-1)},complete:(e,l)=>{t.value=-1},edit:e=>{t.value=e},deleteMenus:(l,n)=>{e.splice(n,1)}}}});const c={key:1},s={key:1},m={key:1},f={key:1},h={key:1},k={key:0},y={key:1},V=r("完成"),C=r("放弃"),_=r("新增");p.render=function(e,l,n,r,p,b){const x=t("el-input"),M=t("el-table-column"),w=t("el-button"),U=t("el-popconfirm"),v=t("el-table"),z=t("el-main"),D=t("el-form-item"),E=t("el-form"),I=t("el-footer"),g=t("el-container");return a(),i(g,null,{default:o((()=>[d(z,null,{default:o((()=>[d(v,{data:e.tableData,style:{width:"99.5%"},"row-key":"id",border:"",stripe:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"},size:"mini",height:"calc(100vh - 100px)"},{default:o((()=>[d(M,{prop:"title",label:"菜单标题"},{default:o((({row:l,$index:n})=>[e.currentEdit===n?(a(),i(x,{key:0,modelValue:l.title,"onUpdate:modelValue":e=>l.title=e,placeholder:"请输入",size:"mini"},null,8,["modelValue","onUpdate:modelValue"])):(a(),i("span",c,u(l.title),1))])),_:1}),d(M,{prop:"MenusID",label:"菜单ID",width:"100",align:"center"}),d(M,{prop:"ParentID",label:"父级ID",align:"center",width:"100"}),d(M,{prop:"MenusName",label:"MenusName"},{default:o((({row:l,$index:n})=>[e.currentEdit===n?(a(),i(x,{key:0,modelValue:l.MenusName,"onUpdate:modelValue":e=>l.MenusName=e,placeholder:"请输入",size:"mini"},null,8,["modelValue","onUpdate:modelValue"])):(a(),i("span",s,u(l.MenusName),1))])),_:1}),d(M,{prop:"Conponent",label:"菜单路径"},{default:o((({row:l,$index:n})=>[e.currentEdit===n?(a(),i(x,{key:0,modelValue:l.Conponent,"onUpdate:modelValue":e=>l.Conponent=e,placeholder:"请输入",size:"mini"},null,8,["modelValue","onUpdate:modelValue"])):(a(),i("span",m,u(l.Conponent),1))])),_:1}),d(M,{prop:"path",label:"菜单Path"},{default:o((({row:l,$index:n})=>[e.currentEdit===n?(a(),i(x,{key:0,modelValue:l.path,"onUpdate:modelValue":e=>l.path=e,placeholder:"请输入",size:"mini"},null,8,["modelValue","onUpdate:modelValue"])):(a(),i("span",f,u(l.path),1))])),_:1}),d(M,{prop:"icon",label:"icon"},{default:o((({row:l,$index:n})=>[e.currentEdit===n?(a(),i(x,{key:0,modelValue:l.icon,"onUpdate:modelValue":e=>l.icon=e,placeholder:"请输入",size:"mini"},null,8,["modelValue","onUpdate:modelValue"])):(a(),i("span",h,u(l.icon),1))])),_:1}),d(M,{label:"操作",align:"center",width:"180"},{default:o((({row:l,$index:n})=>[-1===e.currentEdit||e.currentEdit!==n?(a(),i("div",k,[d(w,{icon:"el-icon-plus",size:"mini",type:"success"}),d(w,{type:"info",icon:"el-icon-edit",size:"mini",onClick:l=>e.edit(n)},null,8,["onClick"]),d(U,{confirmButtonText:"确定",cancelButtonText:"取消",icon:"el-icon-info",iconColor:"red",title:"确定删除吗？",onConfirm:t=>e.deleteMenus(l,n)},{reference:o((()=>[d(w,{type:"danger",icon:"el-icon-delete",size:"mini"})])),_:2},1032,["onConfirm"])])):(a(),i("div",y,[d(w,{type:"text",onClick:t=>e.complete(l,n)},{default:o((()=>[V])),_:2},1032,["onClick"]),d(w,{type:"text",onClick:t=>e.giveUp(l,n)},{default:o((()=>[C])),_:2},1032,["onClick"])]))])),_:1})])),_:1},8,["data"])])),_:1}),d(I,null,{default:o((()=>[d(E,{inline:!0,class:"demo-form-inline"},{default:o((()=>[d(D,null,{default:o((()=>[d(w,{type:"primary",icon:"el-icon-plus",size:"mini",onClick:e.addMenus,plain:""},{default:o((()=>[_])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})};export default p;
