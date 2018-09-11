//헤더 푸터 퀵매뉴 호출(공통 레이아웃) //추후 삭제
ajaxHtmlCall('#header','GET','layout/header.html','html', true, headerFunctions);
ajaxHtmlCall('#footer','GET','layout/footer.html','html', true, footerFunctions);
// 퀵매뉴 호출
ajaxHtmlCall('#quick','GET','layout/quick.html','html', true, quickFunctions);

$('#container').show();
controlFunctions();


//Layout Html CallBack Functions
function headerFunctions() {
	uiLoop();
}
function footerFunctions() {
}
function quickFunctions() {
}

//form element controller
function controlFunctions() {
	//크로스브라우징용
	iePlaceHolder();
}
