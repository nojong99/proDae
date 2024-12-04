

$(document).ready(function() {
	const id = $.cookie("id");
	const department = $.cookie("department");
	const role = $.cookie("role");
	
	if (id) {
		$("#loginSpan").html( id +"(" + department + "_"+ role +") 님 환영합니다. <div class='slide-button-wrapper flex justify-center'> <button id='logoutBtn' class='slide-button' >logout</button> <a href='http://it.daejin.ac.kr/wslsubjectlist.do?wslID=it&menuCode=006009'>"+department+"</a><div>");
				
	}
	
	
	$("#loginBtn").click(function() {
		const id = $("#id").val();
		const pw = $("#pw").val();
		 
		$.post('../login', { id, pw }, function(data) {
			data = JSON.parse(data);
			if (data.id) {
				$.cookie("id", id);
				$.cookie("department", data.department);
				$.cookie("role", data.role);
				$("#loginSpan").html( data.id +"(" + data.department+ "_"+data.role+") 님 환영합니다. <div class='slide-button-wrapper flex justify-center'> <button id='logoutBtn' class='slide-button' >logout</button> <a href='http://it.daejin.ac.kr/wslsubjectlist.do?wslID=it&menuCode=006009'>"+data.department+"</a><div>");
				
				alert(data.id+"님 환영합니다.")
				
			}else{
				alert(data.msg)
			}
		});
	});
	
		
		
		
		
	});
	
	$(document).on('click','#idCheck',function(){
		const id= $("#id").val();
		$.post('../idCheck',{id},function(data){
			alert(data);
		  
		});
		
	});
	
	
	$(document).on('click','#logoutBtn',function(){
		$.post('../logout',{},function(data){
			data=JSON.parse(data);
			if(data.msg=="ok"){
			
			$.removeCookie("id");
			location.reload();	
			}else{
				alert(data.msg);	
			}
			
		});
	});
	
	
	