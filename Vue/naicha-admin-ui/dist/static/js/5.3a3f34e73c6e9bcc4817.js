webpackJsonp([5],{VJ8i:function(e,t,a){"use strict";t.c=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o="/orderInfoAdmin/page?pageNo=";o=(o+=e||"")+"&pageSize="+(t||""),a&&(o+="&orderStatus="+a);return Object(r.a)({url:o,method:"get"})},t.e=function(e,t){return Object(r.a)({url:"/orderInfoAdmin/nextStatus/"+e+"/"+t,method:"post"})},t.d=function(e){return Object(r.a)({url:"/orderInfoAdmin/wxPayStatus/"+e})},t.b=function(e){return Object(r.a)({url:"/orderInfoAdmin/cancelOrderNotPay/"+e,method:"put"})},t.a=function(e,t){return Object(r.a)({url:"/orderInfoAdmin/cancelAndRefund/"+e+"?reason="+t,method:"put"})};var r=a("dca+")},n4LD:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("VJ8i"),o={name:"orderInfoAdminComponent",data:function(){return{searchParams:{searchParam1:null,pageNo:1,pageSize:10},total:0,orderInfoAdmins:[]}},mounted:function(){this.getOrderInfoAdmins()},methods:{getOrderInfoAdmins:function(){var e=this;Object(r.c)(e.searchParams.pageNo,e.searchParams.pageSize).then(function(t){e.orderInfoAdmins=t.data.records,e.total=t.data.total})},changePageNo:function(e){this.searchParams.pageNo=e,this.getOrderInfoAdmins()},changePageSize:function(e){this.searchParams.pageSize=e,this.getOrderInfoAdmins()},clearSearchParams:function(){this.searchParams.searchParam1=null}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{"text-align":"left",margin:"5px 10px"}}),e._v(" "),a("div",{staticStyle:{margin:"0px 10px","text-align":"left"}},[a("el-table",{attrs:{data:e.orderInfoAdmins,stripe:"","default-sort":{prop:"createTime",order:"descending"}}},[a("el-table-column",{attrs:{prop:"orderNo",label:"订单号",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderStatus",label:"订单状态",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"takeType",label:"取餐方式",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"addressDetail",label:"收货地址","show-overflow-tooltip":"",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsPreview",label:"商品信息"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsTotalNum",label:"商品总数",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalPrice",label:"总价格",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s("￥"+t.row.totalPrice/100))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"payPrice",label:"支付金额",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s("￥"+t.row.payPrice/100))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"verifyNum",label:"取单号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"wxPayTransactionId",label:"微信订单号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"下单时间",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"payTime",label:"支付时间","show-overflow-tooltip":"",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"finishTime",label:"完成时间","show-overflow-tooltip":"",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"userPhone",label:"用户联系电话","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"receiver",label:"取餐人","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"extraInfo",label:"订单备注","show-overflow-tooltip":""}})],1),e._v(" "),a("el-row",{staticStyle:{float:"right"}},[a("el-pagination",{attrs:{"current-page":e.searchParams.pageNo,"page-sizes":[5,10,20,30,50,100],"page-size":e.searchParams.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.changePageNo,"size-change":e.changePageSize,"update:currentPage":function(t){return e.$set(e.searchParams,"pageNo",t)},"update:current-page":function(t){return e.$set(e.searchParams,"pageNo",t)},"update:pageSize":function(t){return e.$set(e.searchParams,"pageSize",t)},"update:page-size":function(t){return e.$set(e.searchParams,"pageSize",t)}}})],1)],1)])},staticRenderFns:[]},n=a("VU/8")(o,l,!1,null,null,null);t.default=n.exports}});
//# sourceMappingURL=5.3a3f34e73c6e9bcc4817.js.map