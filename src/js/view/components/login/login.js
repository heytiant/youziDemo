import { Link, hashHistory } from "react-router";

export default React.createClass({
	

	clcFun(){
		var Tele = this.refs.tele.value;
		var Pass = this.refs.pass.value;
		console.log(Tele);
		console.log(Pass);

		var Odata = {
			telephone: Tele,
			pwd: Pass
		}

		var reg = /^1(3|4|5|7|8)\d{9}$/;


		if (reg.test(Tele)) {
			var Odata = {
				telephone: Tele,
				pwd: Pass
			}

			if (Pass.length > 6) {
				$.ajax({
					type: "get",
					url: "youzi/login.php",
					data: Odata,
					success: function (result) {
						console.log(result);

						switch(result){
							case"2":
							alert("用户名和密码不相符");
							break;
							case"1":
							alert("登录成功!!");
							hashHistory.push({pathname:"mine",query:{username:"login"}});	
							break;
							case"3":
							alert("用户名不存在!!");
							break;
						}


					}


				})

			}else{

				alert("请输入6位以上的密码!!");
			}

		}else{

			alert("请输入11位手机号码!!");
		}

	},	


	render() {
		return (
			<div className="page">

				<img className="bg" src="img/timg.jpg" />

				<div className="page_Con">
					<img src="img/1.png" />
					<p>柚子家居</p>
					<div className="loginText">
						<p className="plot">
							<i className="iconfont icon-iconzhenghe31"></i>
							<input type="text" name="telephone" placeholder="请输入手机号" ref="tele" />
						</p>
						<p className="plot">
							<i className="iconfont icon-suo"></i>
							<input type="text" name="password" placeholder="请输入密码" ref="pass" />

						</p>

						<div  onTouchStart={this.clcFun} className="loginBtn" >
							登录
				</div>
						<p className="rl">
							<Link to="mine/register" className="left">注册</Link>
							<Link className="right">忘记密码</Link>
						</p>
					</div>
				</div>
			</div>
		)
	}

})