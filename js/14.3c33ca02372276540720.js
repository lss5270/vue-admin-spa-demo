webpackJsonp([14],{257:function(e,t,i){var l=i(6)(i(430),i(717),null,null,null);e.exports=l.exports},430:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(98),n=i.n(l),s=i(18),o=i(97),a=i(57);t.default={data:function(){return{list:null,smMenuBeanDtoList:null,total:null,listLoading:!0,listQuery:{currPage:1,pageSize:10,title:"",type:null},roleTemp:{roleName:"",remark:""},ruleForm:{permissions:[]},typeOptions:[{key:"001",display_name:"类型1"},{key:"002",display_name:"类型2"},{key:"003",display_name:"类型3"}],dialogFormVisible:!1,dialogPermissionsVisible:!1,multipleSelection:[]}},mounted:function(){this.getList()},methods:{getList:function(){var e=this;e.listLoading=!0,s.a.get(o.a.roleAndUser,{params:e.listQuery},function(t){var i=t.body;0==i.resultCode?(e.list=i.data.data,console.log("列表数据：",e.list),e.listQuery.currPage=i.data.currPage,e.listQuery.pageSize=i.data.pageSize,e.total=i.data.total,e.listLoading=!1):(Message({showClose:!0,message:t.body.resultMsg,type:"error"}),e.listLoading=!1)},function(t){e.listLoading=!1},!1)},handleEdit:function(e,t){console.log("编辑的row：",e,"-----",t),this.$router.push({path:"/example/form",query:{id:t.chnlId}})},handleDelete:function(e,t){var i=this;console.log("单个删除选择的row：",e,"-----",t),i.list.splice(e,1)},handleDelAll:function(){var e=this;console.log("批量删除选择的row：",e.multipleSelection)},handleFilter:function(){this.getList()},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){console.log("--------",e),this.listQuery.currPage=e,this.getList()},handleCreate:function(){this.dialogFormVisible=!0},setPermissions:function(e,t){var i=this;s.a.get(o.a.getMenuAndElement,{params:{roleId:t.smRoleBeanDto.id}},function(e){console.log("-------获取到数据：",n()(e));var t=e.body;0==t.resultCode?(i.smMenuBeanDtoList=t.data.smMenuBeanDtoList,console.log("列表数据：",i.smMenuBeanDtoList)):Message({showClose:!0,message:e.body.resultMsg,type:"error"}),i.dialogPermissionsVisible=!0},function(e){i.dialogPermissionsVisible=!0},!0)},setPermissionsSubmit:function(){var e=this;console.log(n()(e.smMenuBeanDtoList));for(var t={},i=0,l=e.smMenuBeanDtoList.length;i<l;i++)t[e.smMenuBeanDtoList[i].url]=e.smMenuBeanDtoList[i].set;e.$message({showClose:!0,message:"动态修改权限成功！实际开发请把参数提交给后端接口！",type:"success"}),a.a.dispatch("GenerateRoutes",t)},handleCreateSubmit:function(){var e=this;console.log("新增入参：",e.roleTemp);var t={smRoleBeanDto:{roleName:e.roleTemp.roleName}};e.list.push(t),console.log("新增后",e.list),this.dialogFormVisible=!1},setUser:function(){this.$message({showClose:!0,message:"设置成员未完成，逻辑参照设置权限即可！",type:"warning"})},handleSelectionChange:function(e){this.multipleSelection=e},handleDownload:function(){var e=this;i.e(22).then(function(){var t=i(297),l=t.export_json_to_excel,n=["字段1","字段2","字段3","字段4","字段5"],s=["chnlId","hisChnlId","chnlName","state","isavailable"],o=e.list;l(n,e.formatJson(s,o),"导出的列表excel")}.bind(null,i)).catch(i.oe)},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})}}}},717:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"edit"},on:{click:e.handleCreate}},[e._v("新增角色")])],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],ref:"multipleTable",attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"65"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"序号",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.$index)+"\n          ")]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"角色",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.smRoleBeanDto.roleName)+"\n          ")]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"对应用户",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row.userbaseinfoList,function(t){return[i("span",[e._v(e._s(t.userName)+"    ")])]})]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{icon:"edit",size:"small"},on:{click:function(i){e.setPermissions(t.$index,t.row)}}},[e._v("设置权限")]),e._v(" "),i("el-button",{attrs:{icon:"edit",size:"small"},on:{click:function(i){e.setUser(t.$index,t.row)}}},[e._v("设置成员")]),e._v(" "),i("el-button",{attrs:{icon:"edit",size:"small"},on:{click:function(i){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{attrs:{icon:"delete",size:"small",type:"danger"},on:{click:function(i){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":e.listQuery.currPage,"page-sizes":[10,20,30,50],"page-size":e.listQuery.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.listQuery.currPage=t}}})],1),e._v(" "),i("el-dialog",{attrs:{title:"表单新增",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{staticClass:"small-space",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:e.roleTemp,"label-position":"left","label-width":"70px"}},[i("el-form-item",{attrs:{label:"角色名称"}},[i("el-input",{model:{value:e.roleTemp.roleName,callback:function(t){e.roleTemp.roleName=t},expression:"roleTemp.roleName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"备注"}},[i("el-input",{model:{value:e.roleTemp.remark,callback:function(t){e.roleTemp.remark=t},expression:"roleTemp.remark"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.handleCreateSubmit}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"设置权限",visible:e.dialogPermissionsVisible},on:{"update:visible":function(t){e.dialogPermissionsVisible=t}}},[i("el-form",{staticClass:"small-space",staticStyle:{width:"100%"},attrs:{model:e.roleTemp,"label-position":"left","label-width":"70px"}},e._l(e.smMenuBeanDtoList,function(t){return i("el-checkbox",{staticStyle:{margin:"0 15px 15px 0"},attrs:{label:"item.url",name:"type"},model:{value:t.set,callback:function(e){t.set=e},expression:"item.set"}},[e._v(e._s(t.menuName))])})),e._v(" "),i("div",{staticClass:"dialog-footer",slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogPermissionsVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.setPermissionsSubmit}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}}});