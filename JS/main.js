var siteName = document.getElementById("name")
var siteUrl = document.getElementById("url")
siteList = [];
const regexName=/^[a-zA-Z0-9-]+$/
const regexUrl=/\b(?:(?:https?|ftp):\/\/|www\.)[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/
if(localStorage.getItem("site")!=null){
    siteList=JSON.parse(localStorage.getItem("site"))
    displayData();
}

function addSite() {
    site = {
        name: siteName.value,
        url: siteUrl.value
    }
    if(regexName.test(site.name)&&regexUrl.test(site.url)){
        document.getElementById('wrong').classList.add('d-none')
        siteList.push(site);
        localStorage.setItem("site" , JSON.stringify(siteList))
        clear();
        displayData();

    }
    else{
       
        document.getElementById('wrong').classList.remove('d-none')
        document.getElementById('wrong').innerHTML='invalid website'
   
    }
   
}
function clear() {
    siteName.value = '';
    siteUrl.value = '';
}
function displayData(){
    var cartona = "";
    for (var i = 0; i < siteList.length; i++) {
        cartona += `
        <tr>
<td>${i+1}</td>
<td>${siteList[i].name}</td>
<td>${siteList[i].url}</td>
<td><button class="btn btn-sm btn-danger" onclick="deleteData(${i})">Delete</button></td>

</tr>
        `
    }
    document.getElementById("tbody").innerHTML = cartona;
}
 function deleteData(element){
siteList.splice(element,1)
localStorage.setItem("site",JSON.stringify(siteList))
displayData()
}

