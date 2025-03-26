(function(){"use strict";var e={7744:function(e,t,i){e.exports=i.p+"img/facebook-icon.8e6fd841.png"},8997:function(e,t,i){var s=i(6848),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("NavBar"),t("router-view")],1)},r=[],o=function(){var e=this,t=e._self._c;return t("div",[t("button",{staticClass:"toggle-btn",on:{click:function(t){e.isOpen=!e.isOpen}}},[e._v(" "+e._s(e.isOpen?"×":"☰")+" ")]),e.isOpen?t("div",{staticClass:"sidebar",on:{mouseleave:e.handleSidebarLeave}},[t("div",{staticClass:"sidebar-content"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Home")]),t("router-link",{staticClass:"nav-link",attrs:{to:"/saved"}},[e._v("Saved Recipes")]),t("router-link",{staticClass:"nav-link",attrs:{to:"/addrecipe"}},[e._v("My Recipe")]),t("div",{staticClass:"auth-section"},[e.user?t("div",{staticClass:"user-profile"},[t("img",{staticClass:"profile-pic",attrs:{src:e.user.photoURL||e.defaultProfilePic}}),t("span",{staticClass:"username"},[e._v(e._s(e.user.displayName||e.user.email))]),t("button",{staticClass:"logout-btn",on:{click:e.confirmLogout}},[e._v("Logout")]),e.showLogoutConfirmation?t("div",{staticClass:"overlay",on:{click:e.cancelLogout}}):e._e(),e.showLogoutConfirmation?t("div",{staticClass:"confirmation-dialog"},[t("p",[e._v("Are you sure you want to logout?")]),t("div",{staticClass:"dialog-buttons"},[t("button",{staticClass:"confirm-btn",on:{click:e.logout}},[e._v("Yes")]),t("button",{staticClass:"cancel-btn",on:{click:e.cancelLogout}},[e._v("No")])])]):e._e()]):t("button",{staticClass:"login-btn",on:{click:e.login}},[e._v("Login")])])],1)]):e._e()])},n=[],c=(i(4114),i(1708)),l=i(3660),u=i(989);const d={apiKey:"AIzaSyBDIChHGyvSdtSKnm-r7g81zI5-9u_IE3U",authDomain:"sample-firebase-ai-app-6dba9.firebaseapp.com",projectId:"sample-firebase-ai-app-6dba9",storageBucket:"sample-firebase-ai-app-6dba9.appspot.com",messagingSenderId:"461818069656",appId:"1:461818069656:web:d181eb2ca0e252298246ed"},p=(0,c.Wp)(d),v=(0,l.xI)(p),g=(0,u.aU)(p);var h={props:["user"],data(){return{isOpen:!1,showLogoutConfirmation:!1,defaultProfilePic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}},methods:{handleSidebarLeave(){this.showLogoutConfirmation||(this.isOpen=!1)},async logout(){try{await(0,l.CI)(v),this.isOpen=!1}catch(e){console.error(e)}},login(){this.$router.push("/login"),this.isOpen=!1},confirmLogout(){this.showLogoutConfirmation=!0},cancelLogout(){this.showLogoutConfirmation=!1}}},m=h,f=i(1656),_=(0,f.A)(m,o,n,!1,null,"2e4d3522",null),b=_.exports,C={name:"App",components:{NavBar:b},data(){return{user:null}},mounted(){v.onAuthStateChanged((e=>{this.user=e}))}},y=C,R=(0,f.A)(y,a,r,!1,null,null,null),w=R.exports,S=i(6178),k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-container"},[e.user?t("div",{staticClass:"logged-in-box"},[t("p",{staticClass:"logged-in-text"},[e._v("You are already logged in.")]),t("button",{staticClass:"logout-button",on:{click:e.logout}},[e._v("Logout")])]):t("div",{staticClass:"login-box"},[t("h2",{staticClass:"login-title"},[e._v("Welcome to Recipe App")]),t("p",{staticClass:"login-subtitle"},[e._v("Log in to explore delicious recipes")]),t("button",{staticClass:"login-button",on:{click:e.loginWithFacebook}},[t("img",{staticClass:"icon",attrs:{src:i(7744),alt:"Facebook Icon"}}),e._v(" Login with Facebook ")])])])},I=[],P={data(){return{user:null}},mounted(){v.onAuthStateChanged((e=>{this.user=e,e&&"/login"===this.$route.path&&this.$router.replace("/recipes")}))},methods:{async loginWithFacebook(){const e=new l.sk;try{await(0,l.df)(v,e),"/recipes"!==this.$route.path&&this.$router.replace("/recipes")}catch(t){console.error("Login error:",t)}},async logout(){try{await(0,l.CI)(v),this.user=null,this.$router.replace("/login")}catch(e){console.error("Logout error:",e)}}}},x=P,A=(0,f.A)(x,k,I,!1,null,"7050e7d6",null),O=A.exports,D=(i(8111),i(1701),function(){var e=this,t=e._self._c;return t("div",[t("Navbar",{attrs:{user:e.user}}),t("div",{staticClass:"container"},[t("h1",[e._v("All Recipes")]),t("div",{staticClass:"search-filter-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"search-box",attrs:{type:"text",placeholder:"Search recipes..."},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCategory,expression:"selectedCategory"}],staticClass:"filter-dropdown",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedCategory=t.target.multiple?i:i[0]}}},[t("option",{attrs:{value:""}},[e._v("All Categories")]),e._l(e.categories,(function(i){return t("option",{key:i,domProps:{value:i}},[e._v(" "+e._s(i)+" ")])}))],2)]),t("div",{staticClass:"recipe-grid"},e._l(e.filteredRecipes,(function(i){return t("div",{key:i.id,staticClass:"recipe-card",on:{click:function(t){return e.openModal(i)}}},[t("img",{attrs:{src:i.imageUrl,alt:i.title}}),t("h3",[e._v(e._s(i.title))]),t("h3",{staticClass:"small-title"},[e._v("ingredient")]),t("p",[e._v(e._s(i.ingredients.substring(0,100)))]),t("h3",{staticClass:"small-title"},[e._v("instructions")]),t("p",[e._v(e._s(i.instructions.substring(0,100)))])])})),0)]),e.selectedRecipe?t("div",{staticClass:"modal"},[t("div",{staticClass:"modal-content"},[t("span",{staticClass:"close",on:{click:function(t){e.selectedRecipe=null}}},[e._v("×")]),t("img",{attrs:{src:e.selectedRecipe.imageUrl,alt:e.selectedRecipe.title}}),t("h2",[e._v(e._s(e.selectedRecipe.title))]),t("h3",[e._v("Ingredients")]),t("p",[e._v(e._s(e.selectedRecipe.ingredients))]),t("h3",[e._v("Instructions")]),t("p",[e._v(e._s(e.selectedRecipe.instructions))]),t("button",{on:{click:function(t){return e.saveRecipe(e.selectedRecipe)}}},[e._v(" "+e._s(e.isSaved(e.selectedRecipe.id)?"Unsave":"Save")+" ")])])]):e._e()],1)}),N=[],L=(i(2489),i(3579),i(7642),i(8004),i(3853),i(5876),i(2475),i(5024),i(1698),{components:{Navbar:b},data(){return{user:null,selectedRecipe:null,searchQuery:"",selectedCategory:"",recipes:[]}},computed:{categories(){return[...new Set(this.recipes.map((e=>e.category)))]},filteredRecipes(){return this.recipes.filter((e=>{const t=e.title.toLowerCase().includes(this.searchQuery.toLowerCase()),i=!this.selectedCategory||e.category===this.selectedCategory;return t&&i}))}},async created(){(0,l.hg)(v,(e=>{this.user=e})),await this.fetchRecipes()},methods:{async fetchRecipes(){const e=(0,u.aU)(),t=await(0,u.GG)((0,u.rJ)(e,"recipes"));this.recipes=t.docs.map((e=>({id:e.id,...e.data()})))},openModal(e){this.selectedRecipe=e},isSaved(e){if(this.user)return!1;{const t=JSON.parse(localStorage.getItem("savedRecipes")||"[]");return t.some((t=>t.id===e))}},async saveRecipe(e){if(this.user){const t=(0,u.aU)();await(0,u.BN)((0,u.H9)(t,"users",this.user.uid),{savedRecipes:(0,u.hq)(e)},{merge:!0})}else{const t=JSON.parse(localStorage.getItem("savedRecipes")||"[]");this.isSaved(e.id)?localStorage.setItem("savedRecipes",JSON.stringify(t.filter((t=>t.id!==e.id)))):localStorage.setItem("savedRecipes",JSON.stringify([...t,e]))}this.selectedRecipe=null}}}),U=L,E=(0,f.A)(U,D,N,!1,null,"6b99544e",null),T=E.exports,F=function(){var e=this,t=e._self._c;return t("div",[t("Navbar",{attrs:{user:e.user}}),t("div",{staticClass:"container"},[t("h1",[e._v("Saved Recipes")]),e.savedRecipes.length>0?t("div",{staticClass:"recipe-grid"},e._l(e.savedRecipes,(function(i){return t("div",{key:i.id,staticClass:"recipe-card",on:{click:function(t){return e.openModal(i)}}},[t("img",{attrs:{src:i.imageUrl,alt:i.title}}),t("h3",[e._v(e._s(i.title))]),t("h3",[e._v("Ingredients")]),t("p",[e._v(e._s(i.ingredients.substring(0,100)))]),t("h3",[e._v("Instructions")]),t("p",[e._v(e._s(i.instructions.substring(0,100)))])])})),0):t("p",[e._v("No saved recipes yet!")])]),e.selectedRecipe?t("div",{staticClass:"modal"},[t("div",{staticClass:"modal-content"},[t("span",{staticClass:"close",on:{click:function(t){e.selectedRecipe=null}}},[e._v("×")]),t("img",{attrs:{src:e.selectedRecipe.imageUrl,alt:e.selectedRecipe.title}}),t("h2",[e._v(e._s(e.selectedRecipe.title))]),t("h3",[e._v("Ingredients")]),t("p",[e._v(e._s(e.selectedRecipe.ingredients))]),t("h3",[e._v("Instructions")]),t("p",[e._v(e._s(e.selectedRecipe.instructions))]),t("button",{on:{click:function(t){return e.removeRecipe(e.selectedRecipe)}}},[e._v("Remove")])])]):e._e()],1)},M=[],B={components:{Navbar:b},data(){return{user:null,selectedRecipe:null,savedRecipes:[]}},created(){(0,l.hg)(v,(async e=>{this.user=e,await this.loadSavedRecipes()}))},methods:{async loadSavedRecipes(){if(this.user){const e=(0,u.aU)(),t=(0,u.H9)(e,"users",this.user.uid),i=await(0,u.x7)(t);i.exists()?this.savedRecipes=i.data().savedRecipes||[]:this.savedRecipes=[]}else{const e=localStorage.getItem("savedRecipes");this.savedRecipes=e?JSON.parse(e):[]}},openModal(e){this.selectedRecipe=e},async removeRecipe(e){if(this.user){const t=(0,u.aU)();await(0,u.BN)((0,u.H9)(t,"users",this.user.uid),{savedRecipes:(0,u.C3)(e)},{merge:!0})}else localStorage.setItem("savedRecipes",JSON.stringify(this.savedRecipes.filter((t=>t.id!==e.id))));await this.loadSavedRecipes(),this.selectedRecipe=null}}},$=B,J=(0,f.A)($,F,M,!1,null,"af0dc260",null),j=J.exports,G=function(){var e=this,t=e._self._c;return t("div",[t("Navbar",{attrs:{user:e.user}}),t("div",{staticClass:"add-recipe-container"},[e.user?t("div",{staticClass:"form-wrapper"},[t("h1",{staticClass:"form-title"},[e._v(e._s(e.isEditing?"Edit Recipe":"Share Your Recipe"))]),t("form",{staticClass:"recipe-form",on:{submit:function(t){return t.preventDefault(),e.submitRecipe.apply(null,arguments)}}},[t("div",{staticClass:"form-columns"},[t("div",{staticClass:"image-upload-section"},[t("div",{staticClass:"drop-zone",class:{dragover:e.dragOver},on:{dragover:function(t){t.preventDefault(),e.dragOver=!0},dragleave:function(t){e.dragOver=!1},drop:e.onDrop}},[t("input",{attrs:{type:"file",id:"image-upload",accept:"image/*",hidden:""},on:{change:e.handleFileSelect}}),t("label",{staticClass:"upload-label",attrs:{for:"image-upload"}},[e.imagePreview?t("img",{staticClass:"preview-image",attrs:{src:e.imagePreview,alt:"Preview"}}):t("div",{staticClass:"upload-content"},[t("i",{staticClass:"fas fa-cloud-upload-alt"}),t("p",[e._v("Drag & drop or click to upload")]),t("small",[e._v("Supported formats: JPG, PNG, WEBP (max 2MB)")])])])]),e.uploadError?t("div",{staticClass:"error-message"},[e._v(e._s(e.uploadError))]):e._e()]),t("div",{staticClass:"form-fields"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"title"}},[e._v("category")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.category,expression:"recipe.category"}],attrs:{type:"text",id:"category",placeholder:"e.g., Mexican, Dessert, Breakfast",required:""},domProps:{value:e.recipe.category},on:{input:function(t){t.target.composing||e.$set(e.recipe,"category",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"title"}},[e._v("Recipe Title")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.title,expression:"recipe.title"}],attrs:{type:"text",id:"title",placeholder:"e.g., Grandma's Apple Pie",required:""},domProps:{value:e.recipe.title},on:{input:function(t){t.target.composing||e.$set(e.recipe,"title",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"ingredients"}},[e._v("Ingredients")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipe.ingredients,expression:"recipe.ingredients"}],attrs:{id:"ingredients",placeholder:"List each ingredient on a new line",rows:"6",required:""},domProps:{value:e.recipe.ingredients},on:{input:function(t){t.target.composing||e.$set(e.recipe,"ingredients",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"instructions"}},[e._v("Cooking Instructions")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipe.instructions,expression:"recipe.instructions"}],attrs:{id:"instructions",placeholder:"Detailed step-by-step instructions",rows:"8",required:""},domProps:{value:e.recipe.instructions},on:{input:function(t){t.target.composing||e.$set(e.recipe,"instructions",t.target.value)}}})])])]),t("div",{staticClass:"form-actions"},[e.isEditing?t("button",{staticClass:"delete-btn",attrs:{type:"button",disabled:e.isSubmitting},on:{click:e.confirmDelete}},[e._v(" Delete Recipe ")]):e._e(),t("button",{staticClass:"submit-btn",attrs:{type:"submit",disabled:e.isSubmitting}},[e.isSubmitting?t("div",{staticClass:"loading-spinner"}):t("span",[e._v(e._s(e.isEditing?"Update Recipe":"Publish Recipe"))])])])])]):t("div",{staticClass:"login-prompt"},[t("h2",[e._v("🍳 Recipe Sharing Requires Login")]),t("p",[e._v("Please sign in to share your culinary creations with the community")]),t("router-link",{staticClass:"login-link",attrs:{to:"/login"}},[t("button",{staticClass:"login-btn"},[e._v("Sign In / Register")])])],1),e.user?t("div",{staticClass:"user-recipes-section"},[t("h2",{staticClass:"section-title"},[e._v("Your Recipes")]),0===e.userRecipes.length?t("div",{staticClass:"empty-state"},[t("p",[e._v("You haven't shared any recipes yet. Create your first recipe above!")])]):t("div",{staticClass:"recipe-grid"},e._l(e.userRecipes,(function(i){return t("div",{key:i.id,staticClass:"recipe-card"},[t("div",{staticClass:"recipe-image-container"},[t("img",{staticClass:"recipe-image",attrs:{src:i.imageUrl,alt:i.title}}),t("div",{staticClass:"recipe-actions"},[t("button",{staticClass:"action-btn edit-btn",on:{click:function(t){return e.editRecipe(i)}}},[t("i",{staticClass:"fas fa-edit"})]),t("button",{staticClass:"action-btn delete-btn",on:{click:function(t){return e.confirmDelete(i.id)}}},[t("i",{staticClass:"fas fa-trash-alt"})])])]),t("div",{staticClass:"recipe-content"},[t("h3",{staticClass:"recipe-title"},[e._v(e._s(i.title))]),t("div",{staticClass:"recipe-meta"},[t("span",{staticClass:"created-date"},[t("i",{staticClass:"far fa-calendar-alt"}),e._v(" "+e._s(e.formatDate(i.createdAt))+" ")])]),t("p",{staticClass:"recipe-description"},[e._v(e._s(i.ingredients.substring(0,100))+"...")]),t("router-link",{staticClass:"view-recipe-btn",attrs:{to:`/recipe/${i.id}`}},[e._v(" View Recipe ")])],1)])})),0)]):e._e(),e.toast.show?t("div",{staticClass:"toast",class:e.toast.type},[e._v(" "+e._s(e.toast.message)+" ")]):e._e(),e.showDeleteModal?t("div",{staticClass:"modal-overlay"},[t("div",{staticClass:"modal-content"},[t("h3",[e._v("Confirm Deletion")]),t("p",[e._v("Are you sure you want to delete this recipe? This action cannot be undone.")]),t("div",{staticClass:"modal-actions"},[t("button",{staticClass:"cancel-btn",on:{click:function(t){e.showDeleteModal=!1}}},[e._v("Cancel")]),t("button",{staticClass:"confirm-delete-btn",on:{click:e.deleteRecipe}},[e._v("Delete")])])])]):e._e()])],1)},H=[],q=i(4373),Q={name:"AddRecipe",components:{Navbar:b},data(){return{user:null,recipe:{title:"",ingredients:"",instructions:"",imageUrl:"",category:""},selectedFile:null,imagePreview:null,uploadError:"",dragOver:!1,isEditing:!1,currentRecipeId:null,isSubmitting:!1,toast:{show:!1,message:"",type:"success"},userRecipes:[],showDeleteModal:!1,recipeToDelete:null}},created(){v.onAuthStateChanged((e=>{this.user=e,e&&this.fetchUserRecipes()}))},methods:{async fetchUserRecipes(){if(this.user)try{const e=(0,u.P)((0,u.rJ)(g,"recipes"),(0,u._M)("userId","==",this.user.uid)),t=await(0,u.GG)(e);this.userRecipes=t.docs.map((e=>({id:e.id,...e.data()}))).sort(((e,t)=>t.createdAt?.seconds-e.createdAt?.seconds))}catch(e){console.error("Error fetching recipes:",e),this.showToast("Failed to fetch recipes","error")}},handleFileSelect(e){const t=e.target.files[0];this.validateAndPreviewImage(t)},onDrop(e){e.preventDefault(),this.dragOver=!1;const t=e.dataTransfer.files[0];this.validateAndPreviewImage(t)},validateAndPreviewImage(e){if(!e)return;const t=["image/jpeg","image/png","image/webp"],i=2097152;if(!t.includes(e.type))return void(this.uploadError="Invalid file type. Please upload JPG, PNG, or WEBP.");if(e.size>i)return void(this.uploadError="File size exceeds 2MB limit.");this.selectedFile=e,this.uploadError="";const s=new FileReader;s.onload=e=>this.imagePreview=e.target.result,s.readAsDataURL(e)},async uploadImageToImageBB(){const e=new FormData;e.append("image",this.selectedFile),e.append("key","a7bdc197854de4411ea1939eeb9be07f");try{const t=await q.A.post("https://api.imgbb.com/1/upload",e);return t.data.data.url}catch(t){throw console.error("Image upload failed:",t),new Error("Failed to upload image. Please try again.")}},async submitRecipe(){if(this.user)try{this.isSubmitting=!0,this.selectedFile&&(this.recipe.imageUrl=await this.uploadImageToImageBB());const e={...this.recipe,userId:this.user.uid,author:this.user.displayName||this.user.email,updatedAt:(0,u.O5)()};this.isEditing?(await(0,u.mZ)((0,u.H9)(g,"recipes",this.currentRecipeId),e),this.showToast("Recipe updated successfully!","success")):(e.createdAt=(0,u.O5)(),e.likes=[],e.views=0,await(0,u.gS)((0,u.rJ)(g,"recipes"),e),this.showToast("Recipe published successfully!","success")),await this.fetchUserRecipes(),this.resetForm()}catch(e){console.error("Error submitting recipe:",e),this.showToast(e.message||"Failed to save recipe","error")}finally{this.isSubmitting=!1}},editRecipe(e){this.recipe={title:e.title,ingredients:e.ingredients,instructions:e.instructions,imageUrl:e.imageUrl},this.imagePreview=e.imageUrl,this.currentRecipeId=e.id,this.isEditing=!0,window.scrollTo({top:0,behavior:"smooth"})},confirmDelete(e){this.recipeToDelete=e,this.showDeleteModal=!0},async deleteRecipe(){try{await(0,u.kd)((0,u.H9)(g,"recipes",this.recipeToDelete)),this.showToast("Recipe deleted successfully","success"),await this.fetchUserRecipes()}catch(e){console.error("Error deleting recipe:",e),this.showToast("Failed to delete recipe","error")}finally{this.showDeleteModal=!1,this.recipeToDelete=null,this.isEditing&&this.currentRecipeId===this.recipeToDelete&&this.resetForm()}},formatDate(e){if(!e)return"";const t=e.toDate();return t.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})},resetForm(){this.recipe={title:"",ingredients:"",instructions:"",imageUrl:""},this.selectedFile=null,this.imagePreview=null,this.uploadError="",this.isEditing=!1,this.currentRecipeId=null},showToast(e,t="success"){this.toast={show:!0,message:e,type:t},setTimeout((()=>{this.toast.show=!1}),3e3)}}},W=Q,z=(0,f.A)(W,G,H,!1,null,"43d73c5f",null),Y=z.exports;s.Ay.use(S.Ay);const K=[{path:"/",redirect:"/recipes"},{path:"/login",component:O},{path:"/recipes",component:T},{path:"/saved",component:j},{path:"/addrecipe",component:Y}],V=new S.Ay({mode:"history",routes:K});var Z=V;s.Ay.config.productionTip=!1,new s.Ay({router:Z,render:e=>e(w)}).$mount("#app")}},t={};function i(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,i),r.exports}i.m=e,function(){var e=[];i.O=function(t,s,a,r){if(!s){var o=1/0;for(u=0;u<e.length;u++){s=e[u][0],a=e[u][1],r=e[u][2];for(var n=!0,c=0;c<s.length;c++)(!1&r||o>=r)&&Object.keys(i.O).every((function(e){return i.O[e](s[c])}))?s.splice(c--,1):(n=!1,r<o&&(o=r));if(n){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,a,r]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,r,o=s[0],n=s[1],c=s[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(a in n)i.o(n,a)&&(i.m[a]=n[a]);if(c)var u=c(i)}for(t&&t(s);l<o.length;l++)r=o[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(u)},s=self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[504],(function(){return i(8997)}));s=i.O(s)})();
//# sourceMappingURL=app.b4cd64ac.js.map