webpackJsonp([0],{246:function(t,e,n){function i(t){n(294)}var o=n(6)(n(263),n(316),i,"data-v-5818a460",null);t.exports=o.exports},255:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tinymce",props:{id:{type:String,default:"tinymceEditor"},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return["removeformat undo redo |  bullist numlist | outdent indent | forecolor | fullscreen code","bold italic blockquote | h2 p  media link | alignleft aligncenter alignright"]}},data:function(){return{hasChange:!1,hasInit:!1}},menubar:{default:""},height:{type:Number,required:!1,default:360}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return tinymce.get(e.id).setContent(t)})}},mounted:function(){var t=this,e=this;tinymce.init({selector:"#"+this.id,height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar,menubar:this.menubar,plugins:"advlist,autolink,code,paste,textcolor, colorpicker,fullscreen,link,lists,media,wordcount, imagetools,watermark",end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",block_formats:"普通标签=p;小标题=h2;",imagetools_cors_hosts:["wpimg.wallstcn.com","wallstreetcn.com"],imagetools_toolbar:"watermark",default_link_target:"_blank",link_title:!1,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp",function(){t.hasChange=!0,t.$emit("input",n.getContent({format:"raw"}))})},setup:function(t){t.addButton("h2",{title:"小标题",text:"小标题",onclick:function(){t.execCommand("mceToggleFormat",!1,"h2")},onPostRender:function(){var e=this;t.on("init",function(){t.formatter.formatChanged("h2",function(t){e.active(t)})})}}),t.addButton("p",{title:"正文",text:"正文",onclick:function(){t.execCommand("mceToggleFormat",!1,"p")},onPostRender:function(){var e=this;t.on("init",function(){t.formatter.formatChanged("p",function(t){e.active(t)})})}})}})},destroyed:function(){tinymce.get(this.id).destroy()}}},263:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(303),o=n.n(i);e.default={components:{Tinymce:o.a},data:function(){return{content:"Tinymce"}}}},278:function(t,e,n){e=t.exports=n(237)(!1),e.push([t.i,".tinymce-container[data-v-2cce7f42]{position:relative}.tinymce-textarea[data-v-2cce7f42]{visibility:hidden;z-index:-1}.editor-custom-btn-container[data-v-2cce7f42]{position:absolute;right:15px;top:18px}.editor-upload-btn[data-v-2cce7f42]{display:inline-block}",""])},282:function(t,e,n){e=t.exports=n(237)(!1),e.push([t.i,".editor-content[data-v-5818a460]{margin-top:20px}",""])},290:function(t,e,n){var i=n(278);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(238)("4bb241fa",i,!0)},294:function(t,e,n){var i=n(282);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(238)("23c382a6",i,!0)},303:function(t,e,n){function i(t){n(290)}var o=n(6)(n(255),n(312),i,"data-v-2cce7f42",null);t.exports=o.exports},312:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-container editor-container"},[n("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.id}})])},staticRenderFns:[]}},316:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[t._m(0),t._v(" "),n("div",[n("Tinymce",{ref:"editor",attrs:{height:200},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),n("div",{staticClass:"editor-content"},[t._v(" "+t._s(t.content))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("code",[t._v("公司做的后台主要是一个cms系统，公司也是以自媒体为核心的，所以富文本是后台很核心的功能。在选择富文本的过程中也走了不少的弯路，市面上常见的富文本都基本用过了，最终选择了Tinymce"),n("a",{attrs:{target:"_blank",href:"https://segmentfault.com/a/1190000009762198#articleHeader13"}},[t._v(" 相关文章 ")])])}]}}});