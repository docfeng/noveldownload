post=function(path,str,fun) {  
  var xmlHttp=null; 
  try { // Firefox, Opera 8.0+, Safari 
   xmlHttp=new XMLHttpRequest();
  }catch (e) { // Internet Explorer 
    try { 
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP"); 
    }catch (e) { 
      xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
      } 
    } 
  if (xmlHttp==null) { 
      alert ("您的浏览器不支持AJAX！"); 
       return; 
  }
  xmlHttp.onreadystatechange=function(){
    if(xmlHttp.readyState==4) { 
     fun(xmlHttp.responseText)
    }
  }
  xmlHttp.open("POST",path,true); 
  xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xmlHttp.send(str); 
  //xmlHttp=null;
  }

get=function(path,fun) {  
  var xmlHttp=null; 
  try { // Firefox, Opera 8.0+, Safari 
   xmlHttp=new XMLHttpRequest();
  }catch (e) { // Internet Explorer 
    try { 
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP"); 
    }catch (e) { 
      xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
      } 
    } 
  if (xmlHttp==null) { 
      alert ("您的浏览器不支持AJAX！"); 
       return; 
  }
  xmlHttp.onreadystatechange=function(){
    if(xmlHttp.readyState==4) { 
     fun(xmlHttp.responseText)
    }
  }
  xmlHttp.open("GET",path,true); 
  xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xmlHttp.send(); 
  //xmlHttp=null;
  }

get_js=function(js){
  post(js,"",function(a){
    eval(a);
  });
}

