"use strict";(self["webpackChunkvue_router"]=self["webpackChunkvue_router"]||[]).push([[53],{289:function(t,a,e){e.d(a,{Z:function(){return v}});var s=e(6252),i=e(3577),o=e(9963);const n={"aria-label":"Page navigation example mb-5"},c={class:"pagination"},l=(0,s._)("span",{"aria-hidden":"true"},"«",-1),r=[l],d=["onClick"],g=(0,s._)("span",{"aria-hidden":"true"},"»",-1),p=[g];function u(t,a,e,l,g,u){return(0,s.wg)(),(0,s.iD)("nav",n,[(0,s._)("ul",c,[(0,s._)("li",{class:(0,i.C_)(["page-item",{disabled:!e.pages.has_pre}])},[(0,s._)("a",{class:"page-link text-primary",href:"#","aria-label":"Previous",onClick:a[0]||(a[0]=(0,o.iM)((t=>u.changePage(e.pages.current_page-1)),["prevent"]))},r)],2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.pages.total_pages,(t=>((0,s.wg)(),(0,s.iD)("li",{class:(0,i.C_)(["page-item",{active:e.pages.current_page===t}]),key:t+1},[(0,s._)("a",{class:"page-link text-danger",href:"#",onClick:(0,o.iM)((a=>u.changePage(t)),["prevent"])},(0,i.zw)(t),9,d)],2)))),128)),(0,s._)("li",{class:(0,i.C_)(["page-item",{disabled:!e.pages.has_next}])},[(0,s._)("a",{class:"page-link text-primary",href:"#","aria-label":"Next",onClick:a[1]||(a[1]=(0,o.iM)((t=>u.changePage(e.pages.current_page+1)),["prevent"]))},p)],2)])])}var h={props:["pages"],methods:{changePage(t){this.$emit("change-page",t)}}},_=e(3744);const m=(0,_.Z)(h,[["render",u]]);var v=m},5053:function(t,a,e){e.r(a),e.d(a,{default:function(){return U}});var s=e(6252),i=e(3577);const o={class:"container mt-5"},n={class:"row row-sm"},c={class:"col-sm-3"},l=(0,s._)("h5",{class:"h5"},"產品類別 Category ❉",-1),r={class:"mt-3 category list-unstyled d-flex d-sm-block justify-content-around"},d={class:"mb-3"},g=(0,s._)("span",null,"全部商品",-1),p=[g],u={class:"mb-3"},h={class:"mb-3"},_={class:"mb-3"},m={class:"mb-3"},v={class:"col-sm-9"},k={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 h-100"},b={class:"card-cus h-100 position-relative"},w={class:"card-content"},C={class:"d-flex pt-3 px-4 justify-content-between align-items-start"},f={class:"fs-5-5"},P={key:0},x={key:1,class:"text-danger"},y=(0,s._)("br",null,null,-1),$={class:"text-secondary fs-7"},D=["onClick"],z=(0,s._)("i",{class:"bi bi-cart3 fs-5 me-1"},null,-1),L=(0,s.Uk)(" 加入購物車 "),T=[z,L];function j(t,a,e,g,z,L){const j=(0,s.up)("LoadingOverlay"),N=(0,s.up)("router-link"),Z=(0,s.up)("PaginationCom");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(j,{active:z.isLoading,"z-indes":1e3},null,8,["active"]),(0,s._)("div",o,[(0,s._)("div",n,[(0,s._)("div",c,[l,(0,s._)("ul",r,[(0,s._)("li",d,[(0,s._)("a",{class:"text-decoration-none pointer d-block",onClick:a[0]||(a[0]=t=>L.getProducts(""))},p)]),(0,s._)("li",u,[(0,s._)("a",{class:"text-decoration-none pointer d-block",onClick:a[1]||(a[1]=t=>L.getProducts("項鍊"))},"項鍊")]),(0,s._)("li",h,[(0,s._)("a",{to:"",class:"text-decoration-none pointer d-block",onClick:a[2]||(a[2]=t=>L.getProducts("戒指"))},"戒指")]),(0,s._)("li",_,[(0,s._)("a",{to:"",class:"text-decoration-none pointer d-block",onClick:a[3]||(a[3]=t=>L.getProducts("耳環"))},"耳環")]),(0,s._)("li",m,[(0,s._)("a",{to:"",class:"text-decoration-none pointer d-block",onClick:a[4]||(a[4]=t=>L.getProducts("手鍊"))},"手鍊")])])]),(0,s._)("div",v,[(0,s._)("div",k,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(z.products,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"col",key:t.id},[(0,s._)("div",b,[(0,s._)("div",{class:"card-img",style:(0,i.j5)({backgroundImage:`url(${t.imageUrl})`})},[(0,s.Wm)(N,{to:`/product/${t.id}`,class:"router-link"},null,8,["to"])],4),(0,s._)("div",w,[(0,s._)("div",C,[(0,s._)("div",null,[(0,s._)("h6",f,(0,i.zw)(t.title),1),t.price===t.origin_price?((0,s.wg)(),(0,s.iD)("p",P," NT$ "+(0,i.zw)(t.price),1)):((0,s.wg)(),(0,s.iD)("p",x,[(0,s.Uk)(" NT$ "+(0,i.zw)(t.price)+" ",1),y,(0,s._)("del",$,"NT$ "+(0,i.zw)(t.origin_price),1)]))])]),(0,s._)("button",{type:"button",class:"btn btn-danger w-100 card-btn fs-5-5",onClick:a=>L.addToCart(t.id)},T,8,D)])])])))),128))]),(0,s.Wm)(Z,{pages:z.pagination,onChangePage:L.getProducts,class:"mt-5 justify-content-center"},null,8,["pages","onChangePage"])])])])],64)}var N=e(289),Z={components:{PaginationCom:N.Z},data(){return{isLoading:!1,products:[],pagination:{},product:{},cartData:[],currentPage:1}},methods:{getProducts(t,a=1){this.isLoading=!0,this.currentPage=a;let e=`https://vue3-course-api.hexschool.io/v2/api/hsiaoi/products?page=${a}`;t&&(e=`https://vue3-course-api.hexschool.io/v2/api/hsiaoi/products?category=${t}&page=${a}`),this.$http.get(e).then((t=>{console.log(t,this.pagination),console.log(this.products),this.products=t.data.products,this.pagination=t.data.pagination,this.isLoading=!1})).catch((t=>{alert(t.data)}))},addToCart(t,a=1){const e="https://vue3-course-api.hexschool.io/v2/api/hsiaoi/cart",s={product_id:t,qty:a};this.$http.post(e,{data:s}).then((t=>{this.product=t.data,console.log(t),alert("成功加入購物車")})).catch((t=>{console.log(t),alert(t.response.message)}))}},mounted(){this.getProducts()}},H=e(3744);const M=(0,H.Z)(Z,[["render",j]]);var U=M}}]);
//# sourceMappingURL=53.e5f3174a.js.map