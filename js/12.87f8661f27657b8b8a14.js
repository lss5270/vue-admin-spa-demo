webpackJsonp([12],{246:function(e,t,l){var n=l(6)(l(264),l(319),null,null,null);e.exports=n.exports},264:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(18),i=l(100);t.default={data:function(){return{list:null,total:null,listLoading:!0,listQuery:{currPage:1,pageSize:10,title:"",type:null},temp:{chnlId:"22",hisChnlId:"",chnlName:"",state:"",isavailable:"",orderNum:10},typeOptions:[{key:"001",display_name:"类型1"},{key:"002",display_name:"类型2"},{key:"003",display_name:"类型3"}],dialogFormVisible:!1,multipleSelection:[]}},mounted:function(){this.getList()},methods:{getList:function(){var e=this;e.listLoading=!0,n.a.get(i.a.tableList,{params:e.listQuery},function(t){var l=t.body;0==l.resultCode?(e.list=l.data.data,console.log("列表数据：",e.list),e.listQuery.currPage=l.data.currPage,e.listQuery.pageSize=l.data.pageSize,e.total=l.data.total,e.listLoading=!1):(Message({showClose:!0,message:t.body.resultMsg,type:"error"}),e.listLoading=!1)},function(t){e.listLoading=!1},!1)},handleEdit:function(e,t){console.log("编辑的row：",e,"-----",t),this.$router.push({path:"/example/form",query:{id:t.chnlId}})},handleDelete:function(e,t){var l=this;console.log("单个删除选择的row：",e,"-----",t),l.list.splice(e,1)},handleDelAll:function(){var e=this;console.log("批量删除选择的row：",e.multipleSelection)},handleFilter:function(){this.getList()},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){console.log("--------",e),this.listQuery.currPage=e,this.getList()},handleCreate:function(){this.dialogFormVisible=!0},handleCreateSubmit:function(){var e=this;console.log("新增入参：",e.temp,e.list),e.list.push(e.temp),console.log("新增后",e.list),this.dialogFormVisible=!1},handleSelectionChange:function(e){this.multipleSelection=e},handleDownload:function(){var e=this;l.e(16).then(function(){var t=l(271),n=t.export_json_to_excel,i=["字段1","字段2","字段3","字段4","字段5"],a=["chnlId","hisChnlId","chnlName","state","isavailable"],s=e.list;n(i,e.formatJson(a,s),"导出的列表excel")}.bind(null,l)).catch(l.oe)},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})}}}},319:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("div",{staticClass:"filter-container"},[l("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"标题"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.listQuery.title=t},expression:"listQuery.title"}}),e._v(" "),l("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:"类型"},model:{value:e.listQuery.type,callback:function(t){e.listQuery.type=t},expression:"listQuery.type"}},e._l(e.typeOptions,function(e){return l("el-option",{key:e.key,attrs:{label:e.display_name+"("+e.key+")",value:e.key}})})),e._v(" "),l("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),l("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"edit"},on:{click:e.handleCreate}},[e._v("添加")]),e._v(" "),l("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"edit"},on:{click:e.handleDelAll}},[e._v("批量删除")]),e._v(" "),l("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"document"},on:{click:e.handleDownload}},[e._v("导出")])],1),e._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],ref:"multipleTable",attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"65"}}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"序号",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.$index)+"\n          ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"字段1",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.chnlId)+"\n          ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"字段2",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.hisChnlId))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"字段3",align:"center",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.chnlName)+"\n          ")]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",prop:"created_at",label:"字段4",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.state))])]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"字段5"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.orderNum))])]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"small"},on:{click:function(l){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),l("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(l){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[l("el-pagination",{attrs:{"current-page":e.listQuery.currPage,"page-sizes":[10,20,30,50],"page-size":e.listQuery.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.listQuery.currPage=t}}})],1),e._v(" "),l("el-dialog",{attrs:{title:"表单新增",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{staticClass:"small-space",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:e.temp,"label-position":"left","label-width":"70px"}},[l("el-form-item",{attrs:{label:"字段1"}},[l("el-input",{model:{value:e.temp.chnlId,callback:function(t){e.temp.chnlId=t},expression:"temp.chnlId"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"字段2"}},[l("el-input",{model:{value:e.temp.hisChnlId,callback:function(t){e.temp.hisChnlId=t},expression:"temp.hisChnlId"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"字段3"}},[l("el-input",{model:{value:e.temp.chnlName,callback:function(t){e.temp.chnlName=t},expression:"temp.chnlName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"字段4"}},[l("el-input",{model:{value:e.temp.state,callback:function(t){e.temp.state=t},expression:"temp.state"}})],1)],1),e._v(" "),l("div",{staticClass:"dialog-footer",slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.handleCreateSubmit}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}}});