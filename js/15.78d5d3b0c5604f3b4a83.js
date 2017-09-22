webpackJsonp([15],{256:function(e,t,n){var l=n(6)(n(429),n(734),null,null,null);e.exports=l.exports},429:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(19),a=n(98);t.default={data:function(){return{list:null,total:null,listLoading:!0,listQuery:{currPage:1,pageSize:10,studentName:""},temp:{chnlId:"",hisChnlId:"",chnlName:"",state:"",isavailable:"",orderNum:10},typeOptions:[{key:"001",display_name:"类型1"},{key:"002",display_name:"类型2"},{key:"003",display_name:"类型3"}],dialogFormVisible:!1,multipleSelection:[]}},mounted:function(){this.getList()},methods:{getList:function(){var e=this;e.listLoading=!0,l.a.get(a.a.studentList,{params:e.listQuery},function(t){var n=t.body;0==n.resultCode?(e.list=n.data.data,console.log("列表数据：",e.list),e.listQuery.currPage=n.data.currPage,e.listQuery.pageSize=n.data.pageSize,e.total=n.data.total,e.listLoading=!1):(Message({showClose:!0,message:t.body.resultMsg,type:"error"}),e.listLoading=!1)},function(t){e.listLoading=!1},!1)},handleEdit:function(e,t){console.log("编辑的row：",e,"-----",t),this.$router.push({path:"/studentsManage/studentUpdate",query:{id:t._id}})},handleDelete:function(e,t){var n=this,l=this;console.log("单个删除选择的row：",e,"-----",t),this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){l.delFun(t),n.$message({type:"success",message:"删除成功!"})}).catch(function(){})},delFun:function(e){var t=this;l.a.get(a.a.delStudents,{params:{id:e._id}},function(e){t.getList()},function(e){alert("删除报错"),t.listLoading=!1},!1)},handleDelAll:function(){var e=this,t=this;console.log("批量删除选择的row：",t.multipleSelection),this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定批量删除",cancelButtonText:"取消",type:"warning"}).then(function(){for(var n in t.multipleSelection)console.log("======",t.multipleSelection[n]),t.delFun(t.multipleSelection[n]);e.$message({type:"success",message:"删除成功!"})}).catch(function(){})},handleFilter:function(){this.getList()},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){console.log("--------",e),this.listQuery.currPage=e,this.getList()},handleCreate:function(){this.$router.push("/studentsManage/studentAdd")},handleCreateSubmit:function(){var e=this;console.log("新增入参：",e.temp),e.list.push(e.temp),console.log("新增后",e.list),this.dialogFormVisible=!1},handleSelectionChange:function(e){this.multipleSelection=e},handleDownload:function(){var e=this;n.e(22).then(function(){var t=n(298),l=t.export_json_to_excel,a=["字段1","字段2","字段3","字段4","字段5"],i=["chnlId","hisChnlId","chnlName","state","isavailable"],s=e.list;l(a,e.formatJson(i,s),"导出的列表excel")}.bind(null,n)).catch(n.oe)},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})}}}},734:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("h2",{staticStyle:{color:"red"}},[e._v("\n      注意：此页面使用了本地api接口，若想正常运行，请下载另外一个node项目（https://github.com/lss5270/vue-admin-spa-api），并且在本地启动该node项目。\n  ")]),e._v(" "),n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"学生姓名"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.handleFilter(t)}},model:{value:e.listQuery.studentName,callback:function(t){e.listQuery.studentName=t},expression:"listQuery.studentName"}}),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"edit"},on:{click:e.handleCreate}},[e._v("添加")]),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"edit"},on:{click:e.handleDelAll}},[e._v("批量删除")]),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"document"},on:{click:e.handleDownload}},[e._v("导出")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],ref:"multipleTable",attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"65"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"序号",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.$index)+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"学生姓名",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.studentName)+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"性别",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return["man"==t.row.sex?n("span",[e._v("男")]):n("span",[e._v("女")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"民族",align:"center",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return["10010"==t.row.minzu?n("span",[e._v("汉族")]):e._e(),e._v(" "),"10011"==t.row.minzu?n("span",[e._v("壮族")]):e._e(),e._v(" "),"10012"==t.row.minzu?n("span",[e._v("奶佬族")]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"二级学院",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return["40010"==t.row.xueyuan?n("span",[e._v("文学院")]):e._e(),e._v(" "),"40011"==t.row.xueyuan?n("span",[e._v("外国语学院")]):e._e(),e._v(" "),"40013"==t.row.xueyuan?n("span",[e._v("法学院")]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"入校时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.ruxiaodate))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"家庭住址"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.address))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"是否全日制"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.quanrizhi?n("span",[e._v("是")]):n("span",[e._v("否")])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":e.listQuery.currPage,"page-sizes":[10,20,30,50],"page-size":e.listQuery.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.listQuery.currPage=t}}})],1),e._v(" "),n("el-dialog",{attrs:{title:"表单新增",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{staticClass:"small-space",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:e.temp,"label-position":"left","label-width":"70px"}},[n("el-form-item",{attrs:{label:"字段1"}},[n("el-input",{model:{value:e.temp.chnlId,callback:function(t){e.temp.chnlId=t},expression:"temp.chnlId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"字段2"}},[n("el-input",{model:{value:e.temp.hisChnlId,callback:function(t){e.temp.hisChnlId=t},expression:"temp.hisChnlId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"字段3"}},[n("el-input",{model:{value:e.temp.chnlName,callback:function(t){e.temp.chnlName=t},expression:"temp.chnlName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"字段4"}},[n("el-input",{model:{value:e.temp.state,callback:function(t){e.temp.state=t},expression:"temp.state"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.handleCreateSubmit}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}}});