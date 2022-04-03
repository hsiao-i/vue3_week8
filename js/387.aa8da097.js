"use strict";(self["webpackChunkvue_router"]=self["webpackChunkvue_router"]||[]).push([[387],{9725:function(o,e,t){t.d(e,{Z:function(){return M}});var l=t(6252),n=t(3577);const a={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},s={class:"modal-dialog"},d={class:"modal-content border-0"},i={class:"modal-header bg-danger text-white"},u={id:"delProductModalLabel",class:"modal-title"},p=(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),c={class:"modal-body"},r=(0,l.Uk)(" 是否刪除 "),m={class:"text-danger"},h=(0,l.Uk)(" 商品(刪除後將無法恢復)。 "),b={class:"modal-footer"},_=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function C(o,e,t,C,g,f){return(0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("div",s,[(0,l._)("div",d,[(0,l._)("div",i,[(0,l._)("h5",u,[(0,l._)("span",null,"刪除 "+(0,n.zw)(t.delproduct.title)+" 產品",1)]),p]),(0,l._)("div",c,[r,(0,l._)("strong",m,(0,n.zw)(t.delproduct.title),1),h]),(0,l._)("div",b,[_,(0,l._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=e=>o.$emit("del-product"))}," 確認刪除 ")])])])],512)}var g=t(7424),f=t.n(g),v={props:{delproduct:{}},emits:["del-product"],data(){return{modal:""}},methods:{openModal(){this.modal.show()},closeModal(){this.modal.hide()}},mounted(){this.modal=new(f())(this.$refs.delProductModal),console.log(this.delproduct.id)}},w=t(3744);const y=(0,w.Z)(v,[["render",C]]);var M=y},9387:function(o,e,t){t.r(e),t.d(e,{default:function(){return E}});var l=t(6252),n=t(3577);const a=(0,l._)("h2",null,"後台優惠券",-1),s={class:"text-end my-3"},d={class:"table"},i=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"名稱"),(0,l._)("th",{scope:"col"},"折扣百分比"),(0,l._)("th",{scope:"col"},"到期日"),(0,l._)("th",{scope:"col"},"是否啟用"),(0,l._)("th",{scope:"col"},"編輯")])],-1),u={key:0,class:"text-success"},p={key:1},c={class:"btn-group",role:"group","aria-label":"Basic outlined example"},r=["onClick"],m=["onClick"];function h(o,e,t,h,b,_){const C=(0,l.up)("LoadingOverlay"),g=(0,l.up)("CouponModal"),f=(0,l.up)("DelModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(C,{active:b.isLoading,"z-index":1e3},null,8,["active"]),a,(0,l._)("div",s,[(0,l._)("button",{class:"btn btn-primary text-end",onClick:e[0]||(e[0]=o=>_.openCouponModal(!0))}," 建立新的優惠券 ")]),(0,l._)("table",d,[i,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(b.coupons,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,n.zw)(e.title),1),(0,l._)("td",null,(0,n.zw)(e.percent)+" %",1),(0,l._)("td",null,(0,n.zw)(o.$filters.date(e.due_date)),1),(0,l._)("td",null,[1===e.is_enabled?((0,l.wg)(),(0,l.iD)("span",u,"啟用")):((0,l.wg)(),(0,l.iD)("span",p,"未啟用"))]),(0,l._)("td",null,[(0,l._)("div",c,[(0,l._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:o=>_.openCouponModal(!1,e)}," 編輯 ",8,r),(0,l._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:o=>_.openDelModal(e)}," 刪除 ",8,m)])])])))),128))])]),(0,l.Wm)(g,{ref:"couponModal",coupon:b.tempCoupon,"is-new":b.isNew,onUpdateCoupon:e[1]||(e[1]=o=>_.updateCoupon(b.tempCoupon))},null,8,["coupon","is-new"]),(0,l.Wm)(f,{ref:"delModal",delproduct:b.tempCoupon,onDelProduct:_.delCoupon},null,8,["delproduct","onDelProduct"])],64)}var b=t(9963);const _={class:"modal",tabindex:"-1",ref:"productModal"},C={class:"modal-dialog"},g={class:"modal-content"},f={class:"modal-header"},v={class:"modal-title"},w={key:0},y={key:1},M=(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),k={class:"modal-body"},D={class:"mb-3"},x=(0,l._)("label",{for:"title",class:"form-label"},"標題",-1),L={class:"mb-3"},$=(0,l._)("label",{for:"coupon_code",class:"form-label"},"優惠碼",-1),U={class:"mb-3"},N=(0,l._)("label",{for:"coupon_date",class:"form-label"},"到期日",-1),P={class:"mb-3"},z=(0,l._)("label",{for:"coupon_percent",class:"form-label"},"折扣百分比",-1),Z={class:"form-check"},V=(0,l._)("label",{class:"form-check-label",for:"flexCheckDefault"}," 是否啟用 ",-1),O={class:"modal-footer"},W=(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),B={type:"button",class:"btn btn-primary"};function H(o,e,t,n,a,s){return(0,l.wg)(),(0,l.iD)("div",_,[(0,l._)("div",C,[(0,l._)("div",g,[(0,l._)("div",f,[(0,l._)("h5",v,[t.isNew?((0,l.wg)(),(0,l.iD)("span",w,"新增優惠券")):((0,l.wg)(),(0,l.iD)("span",y,"編輯優惠券"))]),M]),(0,l._)("div",k,[(0,l._)("div",D,[x,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[0]||(e[0]=o=>a.tempCoupon.title=o)},null,512),[[b.nr,a.tempCoupon.title]])]),(0,l._)("div",L,[$,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"coupon_code",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[1]||(e[1]=o=>a.tempCoupon.code=o)},null,512),[[b.nr,a.tempCoupon.code]])]),(0,l._)("div",U,[N,(0,l.wy)((0,l._)("input",{type:"date",class:"form-control",id:"coupon_date",placeholder:"請輸入日期","onUpdate:modelValue":e[2]||(e[2]=o=>a.due_date=o)},null,512),[[b.nr,a.due_date]])]),(0,l._)("div",P,[z,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"coupon_percent",placeholder:"請輸入折扣百分比",min:"0","onUpdate:modelValue":e[3]||(e[3]=o=>a.tempCoupon.percent=o)},null,512),[[b.nr,a.tempCoupon.percent,void 0,{number:!0}]])]),(0,l._)("div",Z,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=o=>a.tempCoupon.is_enabled=o)},null,512),[[b.e8,a.tempCoupon.is_enabled]]),V])]),(0,l._)("div",O,[W,(0,l._)("button",B,[t.isNew?((0,l.wg)(),(0,l.iD)("span",{key:0,onClick:e[5]||(e[5]=e=>o.$emit("update-coupon",a.tempCoupon))},"新增優惠券")):((0,l.wg)(),(0,l.iD)("span",{key:1,onClick:e[6]||(e[6]=e=>o.$emit("update-coupon",a.tempCoupon))},"更新優惠券"))])])])])],512)}var S=t(2703),T={props:{coupon:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1}},emits:["update-coupon"],mixins:[S.Z],data(){return{tempCoupon:{},due_date:""}},watch:{coupon(){this.tempCoupon=this.coupon;const o=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=o,console.log(this.due_date)},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3),console.log(this.tempCoupon.due_date)}}},Y=t(3744);const j=(0,Y.Z)(T,[["render",H]]);var I=j,K=t(9725),q={components:{CouponModal:I,DelModal:K.Z},data(){return{isNew:!1,coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1}},methods:{getCoupon(){this.isLoading=!0;const o="https://vue3-course-api.hexschool.io/v2/api/hsiaoi/admin/coupons";this.$http.get(o).then((o=>{console.log(o),this.coupons=o.data.coupons,this.isLoading=!1})).catch((o=>{alert(o.response.message),this.isLoading=!1}))},openCouponModal(o,e){this.isNew=o,this.tempCoupon=o?{due_date:(new Date).getTime()/1e3}:{...e};const t=this.$refs.couponModal;t.openModal()},updateCoupon(o){this.isLoading=!0;let e="https://vue3-course-api.hexschool.io/v2/api/hsiaoi/admin/coupon",t="post",l=o;this.isNew||(e=`https://vue3-course-api.hexschool.io/v2/api/hsiaoi/admin/coupon/${this.tempCoupon.id}`,t="put",l=this.tempCoupon),this.$http[t](e,{data:l}).then((o=>{console.log(o),alert(o.data.message),this.getCoupon(),this.isLoading=!1;const e=this.$refs.couponModal;e.closeModal()})).catch((o=>{alert(o.response.data),this.isLoading=!1}))},openDelModal(o){this.tempCoupon={...o};const e=this.$refs.delModal;e.openModal()},delCoupon(){this.isLoading=!0;const o=`https://vue3-course-api.hexschool.io/v2/api/hsiaoi/admin/coupon/${this.tempCoupon.id}`;this.$http.delete(o).then((o=>{alert(o.data.message),this.getCoupon(),this.isLoading=!1;const e=this.$refs.delModal;e.closeModal()})).catch((o=>{alert(o.response.data),this.isLoading=!1}))}},mounted(){this.getCoupon()}};const A=(0,Y.Z)(q,[["render",h]]);var E=A}}]);
//# sourceMappingURL=387.aa8da097.js.map