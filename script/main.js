function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();

}
getfile("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data.career);
  career(data.career);
})

var main=document.querySelector(".flex_main");
var right_child=document.createElement("div");
right_child.classList.add("content_child");
main.appendChild(right_child);

function career(info){
var h2=document.createElement("h2");
h2.textContent="Career Objective";
right_child.appendChild(h2);
var hr=document.createElement("hr");
right_child.appendChild(hr);
var career_info=document.createElement("p");
career_info.textContent=info.objective;
right_child.appendChild(career_info);
}
