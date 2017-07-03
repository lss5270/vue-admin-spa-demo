webpackJsonp([8],{244:function(e,r,t){function l(e){t(287)}var o=t(6)(t(264),t(309),l,"data-v-0b7b245a",null);e.exports=o.exports},264:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=t(101),o=t.n(l),a=t(29),s=(t.n(a),t(18)),i=t(100);r.default={data:function(){return{ruleForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"blur"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"blur"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},mounted:function(){this.getFormData()},methods:{getFormData:function(){var e=this,r=this.$route.query;console.log("获取到url参数：",r),s.a.get(i.a.getForm,{params:{id:r.id}},function(r){if(console.log("-------根据id获取表单信息：",o()(r)),0==r.body.resultCode){var r=r.body.data;console.log("=====",r),e.ruleForm=r}else t.i(a.Message)({showClose:!0,message:r.body.resultMsg,type:"error"})},function(e){},!1)},submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("已提交，提交参数请看控制台"),console.log("提交入参：",r.ruleForm),t.i(a.Message)({showClose:!0,message:"提交成功，正在跳转页面……",type:"success"}),setTimeout(function(){r.$router.go(-1)},2e3)})},resetForm:function(e){this.$refs[e].resetFields()}}}},274:function(e,r,t){r=e.exports=t(237)(!1),r.push([e.i,"[v-cloak][data-v-0b7b245a]{display:none}.component-item[data-v-0b7b245a]{margin-top:100px}.code-part[data-v-0b7b245a]{margin-top:20px}",""])},287:function(e,r,t){var l=t(274);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);t(238)("4cdfb4a2",l,!0)},309:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[t("el-col",{attrs:{span:11}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.ruleForm.name=r},expression:"ruleForm.name"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[t("el-col",{attrs:{span:11}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(r){e.ruleForm.region=r},expression:"ruleForm.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"活动时间",required:""}},[t("el-col",{attrs:{span:5}},[t("el-form-item",{attrs:{prop:"date1"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(r){e.ruleForm.date1=r},expression:"ruleForm.date1"}})],1)],1),e._v(" "),t("el-col",{staticClass:"line",attrs:{span:1,align:"center"}},[e._v(" - ")]),e._v(" "),t("el-col",{attrs:{span:5}},[t("el-form-item",{attrs:{prop:"date2"}},[t("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.ruleForm.date2,callback:function(r){e.ruleForm.date2=r},expression:"ruleForm.date2"}})],1)],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[t("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:e.ruleForm.delivery,callback:function(r){e.ruleForm.delivery=r},expression:"ruleForm.delivery"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[t("el-checkbox-group",{model:{value:e.ruleForm.type,callback:function(r){e.ruleForm.type=r},expression:"ruleForm.type"}},[t("el-checkbox",{attrs:{label:"checkbox1",name:"type"}},[e._v("美食/餐厅线上活动")]),e._v(" "),t("el-checkbox",{attrs:{label:"checkbox2",name:"type"}},[e._v("地推活动")]),e._v(" "),t("el-checkbox",{attrs:{label:"checkbox3",name:"type"}},[e._v("线下主题活动")]),e._v(" "),t("el-checkbox",{attrs:{label:"checkbox4",name:"type"}},[e._v("单纯品牌曝光")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[t("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(r){e.ruleForm.resource=r},expression:"ruleForm.resource"}},[t("el-radio",{attrs:{label:"radio1"}},[e._v("线上品牌商赞助")]),e._v(" "),t("el-radio",{attrs:{label:"radio2"}},[e._v("线下场地免费")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[t("el-col",{attrs:{span:11}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(r){e.ruleForm.desc=r},expression:"ruleForm.desc"}})],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]}}});