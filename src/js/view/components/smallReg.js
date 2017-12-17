import {hashHistory} from "react-router";

export default  React.createClass({
	submitFun(){
		
	
			var data ={
				telephone:this.refs.tele.value,
				password:this.refs.pass.value
			};
			console.log( data.telephone);
			var Tele =data.telephone;
			var reg =/^1(3|4|5|7|8)\d{9}$/;
			var Pass =data.password;
			console.log(Pass.length);
			if(reg.test(Tele)){
				var Obj ={
					telephone:Tele,
					pwd:Pass
	
				}
	
				if(Pass.length>6){
	
					// alert("可以注册");
				

					$.ajax({
						url:"youzi/register.php",
						type:"get",
						data:Obj,
						success:function(result){
							console.log( typeof result);
							
							switch(result){
								case "0":
								alert("注册失败");
								break;
								case "1":
								 alert("注册成功");
								hashHistory.push({pathname:"mine/set"});
								break;
								case "2":
								alert("该用户名已经存在");
								break;
						}
					}
			
					})

				}else{
					alert("请输入6位以上的密码");
				}
			}else{
	
				alert("请输入正确的手机号码");
			}

			

		
	
		},
		componentWillMount(){
		
	
		},
	render(){
          return(

            <div className="iphone">
			
			
			<div className="iphoneText">
			
			<span>手机号</span>
			<input type="text"  placeholder="请输入手机号" ref="tele"/>
			
			</div>
			<div className="iphoneText2">
			
			<span>密码</span>
			<input type="text"  placeholder="请输入密码"   ref="pass"/>
			
			</div>
			
			<div className="lrBTn">
				
				<span onTouchStart={this.submitFun}>获取验证码</span>
				
			</div>
		</div>
		
            )


    }
  




})