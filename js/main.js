var app = new Vue({
	el: '#app',
	data:{
		
	},
	mounted:function(){
		// 实际尺寸
		let userWidth = document.documentElement.clientWidth;
		let fz = userWidth/640*100
		// 给html设置font-size值
		document.documentElement.style.fontSize = fz + "px";
			},
	methods: {
		share:function(){
			//用户类型 :userType 1,货主,2司机
    		//用户ID:userId,
    		//活动ID:actId
    		//
    		console.log(111)
           var searchStr = window.location.search;
		   var qs = searchStr ? searchStr.substring(1) : '';
		    // 要是没有url参数，temp为空数组
		   var temp = qs.length ? qs.split('&') : [];
		   var len = temp.length;
		   var paraObj = {};
		   var item;
		    for (let i = 0; i < len; i++) {
		        item = temp[i].split('=');
		        // 对两项进行解码再保存在对象中
		        paraObj[decodeURIComponent(item[0])] = decodeURIComponent(item[1]);
		    }
			var userType=paraObj.userType
			if(userType=="2"){
				if(!window.postMessage){
            			return;
            		}
            		window.postMessage(JSON.stringify({
            			type:"show_share",
            			data:{
            				url:searchStr,
            				}	
            			}),"*")
			}else if(userType=="1"){
				document.location = "js://webview?url="+searchStr
			}
		}
	}
	
})
