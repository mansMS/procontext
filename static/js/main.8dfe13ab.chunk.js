(this.webpackJsonpprocontext=this.webpackJsonpprocontext||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(13),s=a.n(o),u=a(4),l=a(7),c=a(8),i=a(11),p=a(10),m=a(9),h=a(12),d=a(1),E=a(2),b=a.n(E),g={photographersData:[],photographersLoading:!1,photographersError:null},f={userId:null,albumId:null},A=(a(31),function(e){var t=e.photographersData,a=e.photographerClickHandler,r=e.userId;return n.a.createElement("section",{className:"PhotographersList"},n.a.createElement("ul",{className:"PhotographersItemList"},t.map((function(e){return n.a.createElement("li",{key:e.id,onClick:function(){return a(e.id)},className:e.id===r?["PhotographerItem","activeItem"].join(" "):"PhotographerItem"},e.name)}))))}),I=(a(32),function(){return n.a.createElement("div",{className:"Spinner"},n.a.createElement("div",{className:"SpinnerElements"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null)))}),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).photographerClickHandler=a.photographerClickHandler.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.setPhotographersList()}},{key:"photographerClickHandler",value:function(e){this.props.setShowAlbum(e)}},{key:"render",value:function(){return this.props.photographersError?n.a.createElement("p",null,this.props.photographersError):this.props.photographersLoading?n.a.createElement(I,null):this.props.photographersData.length?n.a.createElement(A,{photographersData:this.props.photographersData,photographerClickHandler:this.photographerClickHandler,userId:this.props.userId}):null}}]),t}(r.Component),v=Object(u.b)((function(e){var t=e.photographersData;return{photographersData:t.photographersData,photographersLoading:t.photographersLoading,photographersError:t.photographersError,userId:e.appData.userId}}),{setPhotographersList:function(){return function(e){e({type:"FETCH_PHOTOGRAPHERS_DATA_REQUEST"}),function(){var e;return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.awrap(fetch("https://jsonplaceholder.typicode.com/users"));case 3:if((e=t.sent).ok){t.next=8;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 ".concat(e.status));case 8:return t.next=10,b.a.awrap(e.json());case 10:return t.abrupt("return",t.sent);case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",t.t0),t.abrupt("return","\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435");case 17:case"end":return t.stop()}}),null,null,[[0,13]])}().then((function(t){return e({type:"FETCH_PHOTOGRAPHERS_DATA_SUCCESS",payload:t})})).catch((function(t){return e(function(e){return{type:"FETCH_PHOTOGRAPHERS_DATA_FAILURE",payload:e}}(t.message))}))}},setShowAlbum:function(e){return function(t){t(function(e){return{type:"SHOW_ALBUM",payload:e}}(e))}}})(_),S={albumsData:[],albumsLoading:!1,albumsError:null},D=(a(33),function(e){var t=e.albumsData,a=e.albumClickHandler,r=e.albumId;return n.a.createElement("section",{className:"AlbumsList"},n.a.createElement("ul",{className:"AlbumsItemList"},t.map((function(e){return n.a.createElement("li",{key:e.id,onClick:function(){return a(e.id)},className:e.id===r?["AlbumItem","activeItem"].join(" "):"AlbumItem"},e.title)}))))}),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).albumClickHandler=a.albumClickHandler.bind(Object(m.a)(a)),a.state={userId:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.props.userId!==this.state.userId&&(this.setState({userId:this.props.userId}),this.props.setAlbumsList(this.props.userId))}},{key:"albumClickHandler",value:function(e){this.props.setShowImages(e)}},{key:"render",value:function(){return this.props.albumsError?n.a.createElement("p",null,this.props.albumsError):this.props.albumsLoading?n.a.createElement(I,null):this.props.albumsData.length?n.a.createElement(D,{albumsData:this.props.albumsData,albumClickHandler:this.albumClickHandler,albumId:this.props.albumId}):null}}]),t}(r.Component),O=Object(u.b)((function(e){var t=e.albumsData,a=t.albumsData,r=t.albumsLoading,n=t.albumsError,o=e.appData;return{albumsData:a,albumsLoading:r,albumsError:n,userId:o.userId,albumId:o.albumId}}),{setAlbumsList:function(e){return function(t){t({type:"FETCH_ALBUMS_DATA_REQUEST"}),function(e){var t;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.a.awrap(fetch("".concat("http://jsonplaceholder.typicode.com/albums/?userId=").concat(e)));case 3:if((t=a.sent).ok){a.next=8;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 ".concat(t.status));case 8:return a.next=10,b.a.awrap(t.json());case 10:return a.abrupt("return",a.sent);case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",a.t0),a.abrupt("return","\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435");case 17:case"end":return a.stop()}}),null,null,[[0,13]])}(e).then((function(e){return t({type:"FETCH_ALBUMS_DATA_SUCCESS",payload:e})})).catch((function(e){return t(function(e){return{type:"FETCH_ALBUMS_DATA_FAILURE",payload:e}}(e.message))}))}},setShowImages:function(e){return function(t){t(function(e){return{type:"SHOW_IMAGES",payload:e}}(e))}}})(y),T={imagesData:[],imagesLoading:!1,imagesError:null},C=(a(34),function(e){var t=e.imagesData;return n.a.createElement("section",{className:"ImageList"},t.map((function(e){return n.a.createElement("div",{key:e.id,className:"ItemBlock"},n.a.createElement("img",{src:e.thumbnailUrl,alt:"thumbnailImage",className:"ImageItem"}))})))}),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={albumId:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.props.albumId!==this.state.albumId&&(this.setState({albumId:this.props.albumId}),this.props.setImagesList(this.props.albumId))}},{key:"render",value:function(){return this.props.imagesError?n.a.createElement("p",null,this.props.imagesError):this.props.imagesLoading?n.a.createElement("div",{className:"ImageList"},n.a.createElement(I,null)):this.props.imagesData.length?n.a.createElement(C,{imagesData:this.props.imagesData}):null}}]),t}(r.Component),H=Object(u.b)((function(e){var t=e.imagesData;return{imagesData:t.imagesData,imagesLoading:t.imagesLoading,imagesError:t.imagesError,albumId:e.appData.albumId}}),{setImagesList:function(e){return function(t){t({type:"FETCH_IMAGES_DATA_REQUEST"}),function(e){var t;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.a.awrap(fetch("".concat("http://jsonplaceholder.typicode.com/photos?albumId=").concat(e)));case 3:if((t=a.sent).ok){a.next=8;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 ".concat(t.status));case 8:return a.next=10,b.a.awrap(t.json());case 10:return a.abrupt("return",a.sent);case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",a.t0),a.abrupt("return","\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435");case 17:case"end":return a.stop()}}),null,null,[[0,13]])}(e).then((function(e){return t({type:"FETCH_IMAGES_DATA_SUCCESS",payload:e})})).catch((function(e){return t(function(e){return{type:"FETCH_IMAGES_DATA_FAILURE",payload:e}}(e.message))}))}}})(L),j=(a(35),function(){return n.a.createElement("div",{className:"App"},n.a.createElement(v,null),n.a.createElement(O,null),n.a.createElement(H,null))}),k=a(5),U=Object(k.c)({appData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_ALBUM":return{userId:t.payload,albumId:null};case"SHOW_IMAGES":return Object(d.a)({},e,{albumId:t.payload});default:return e}},albumsData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALBUMS_DATA_REQUEST":return Object(d.a)({},e,{albumsLoading:!0,albumsError:null});case"FETCH_ALBUMS_DATA_SUCCESS":return Object(d.a)({},e,{albumsData:t.payload,albumsLoading:!1,albumsError:null});case"FETCH_ALBUMS_DATA_FAILURE":return Object(d.a)({},e,{albumsLoading:!1,albumsError:t.payload});default:return e}},imagesData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_IMAGES_DATA_REQUEST":return Object(d.a)({},e,{imagesLoading:!0,imagesError:null});case"FETCH_IMAGES_DATA_SUCCESS":return Object(d.a)({},e,{imagesData:t.payload,imagesLoading:!1,imagesError:null});case"FETCH_IMAGES_DATA_FAILURE":return Object(d.a)({},e,{imagesLoading:!1,imagesError:t.payload});default:return e}},photographersData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PHOTOGRAPHERS_DATA_REQUEST":return Object(d.a)({},e,{photographersLoading:!0,photographersError:null});case"FETCH_PHOTOGRAPHERS_DATA_SUCCESS":return Object(d.a)({},e,{photographersData:t.payload,photographersLoading:!1,photographersError:null});case"FETCH_PHOTOGRAPHERS_DATA_FAILURE":return Object(d.a)({},e,{photographersLoading:!1,photographersError:t.payload});default:return e}}}),w=a(19),F=Object(k.d)(U,Object(k.a)(w.a)),R=(a(36),n.a.createElement(u.a,{store:F},n.a.createElement(j,null)));s.a.render(R,document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.8dfe13ab.chunk.js.map