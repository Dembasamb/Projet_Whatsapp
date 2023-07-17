/********************APPELLE D'ELLEMENTS******************************/
body = document.querySelector("body");
//body.style.backgroundColor='rgb(11, 11, 23)'
/**************************************************/
header_div = document.createElement("div");
man_div = document.createElement("div");
body.appendChild(header_div);
body.appendChild(man_div);
body.style.display = "flex";
body.style.flexDirection = "column";
/**************************************************/
head1_div = document.createElement("div");
head2_div = document.createElement("div");
header_div.appendChild(head1_div);
header_div.appendChild(head2_div);
header_div.style.display = "flex";
header_div.style.flexDirection = "column";
/**************************************************/
head11_div = document.createElement("div");
head12_div = document.createElement("div");
head13_div = document.createElement("div");
head14_div = document.createElement("div");
head1_div.appendChild(head11_div);
head1_div.appendChild(head12_div);
head1_div.appendChild(head13_div);
head1_div.appendChild(head14_div);
head1_div.style.display = "flex";
/**************************************************/
head21_div = document.createElement("div");
head22_div = document.createElement("div");
head23_div = document.createElement("div");
head24_div = document.createElement("div");
/**************************************************/
head211_div = document.createElement("div");
head212_div = document.createElement("div");

head2_div.appendChild(head24_div);
head2_div.appendChild(head21_div);
head2_div.appendChild(head22_div);
head2_div.appendChild(head23_div);
head2_div.style.display = "flex";

/**************************************************/
head11_div.style.width = "70%";
head12_div.style.width = "10%";
head13_div.style.width = "10%";
head14_div.style.width = "10%";
head1_div.style.height = "20vh";
head1_div.style.width = "100%";
head1_div.style.border = "2px solid";
head11_div.style.border = "1.5px solid blue";
head12_div.style.border = "1.5px solid blue";
head13_div.style.border = "1.5px solid blue";
head14_div.style.border = "1.5px solid blue";
/**************************************************/
head21_div.style.width = "33%";
head21_div.justifyContent = "center";
head21_div.alignItems = "center";

head22_div.style.width = "33%";
head22_div.style.backgroundColor = "rgba(0,128,105,255)";

head23_div.style.width = "33%";
head23_div.style.backgroundColor = "rgba(0,128,105,255)";

head24_div.style.width = "5%";
head24_div.style.display = "flex";
head24_div.style.alignItems = "center";
head24_div.justifyContent = "center";

head2_div.style.height = "10vh";
head2_div.style.width = "100%";

head21_div.style.display = "flex";
head21_div.style.flexDirection = "column";
head21_div.appendChild(head211_div);
head21_div.appendChild(head212_div);

head212_div.style.border = "5px solid white";
head211_div.style.flex = "10";
head212_div.style.flex = "0";
head211_div.style.display = "flex";
head211_div.style.justifyContent = "center";
head211_div.style.alignItems = "center";
head211_div.style.backgroundColor = "rgba(0,128,105,255)";

/**************************************************/
man_div.style.border = "2px solid green";
man_div.style.width = "100%";
man_div.style.height = "70vh";
/**************************************************/

/**************************************************/
iconImage = document.createElement("img");
head24_div.appendChild(iconImage);

head24_div.style.backgroundColor = "rgba(0,128,105,255)";

iconImage.setAttribute(
  "src",
  "/Photos/icons8-management-en-développement-commercial-material-filled/iconManage1.png"
);
/**************************************************/

/**************************************************/
h1 = document.createElement("h1");

head11_div.appendChild(h1);
h1.textContent = "Whatsaap";
h1.style.color = "lightgrey";
/**************************************************/
h3 = document.createElement("h3");
h35 = document.createElement("h4");

span1 = document.createElement("span");
span1.appendChild(h35);
h35.innerHTML = "35"



head211_div.appendChild(h3);
head211_div.appendChild(span1);
span1.style.marginLeft = "10px";
span1.style.border = "3px solid white";
span1.style.width = "20px";
span1.style.height = "20px";
head211_div.backgroundColor = "white";

head24_div.style.backgroundColor = "rgba(0,128,105,255)";
span1.style.backgroundColor = "white";
span1.style.borderRadius = "50%"

h3.textContent = "Disc.";
h3.style.color = "lightgrey";

/**************************************************/
h3 = document.createElement("h3");
head22_div.appendChild(h3);
h3.textContent = "Statut .";
h3.style.color = "lightgrey";
h3.style.marginLeft = "3em";
h3.style.marginTop = "2em";
/**************************************************/
h3 = document.createElement("h3");
head23_div.appendChild(h3);
h3.textContent = "Appels";
h3.style.color = "lightgrey";
h3.style.marginLeft = "3em";
h3.style.marginTop = "2em";
/**************************************************/

h3 = document.createElement("h3");
man1212_div.appendChild(h3);
h3.textContent = "14:37";
h3.style.color = "lightgrey";
h3.style.marginLeft = "1em";
/**************************************************/
h4 = document.createElement("h3");
man1212_div.appendChild(h4);
h4.textContent = "2";
h4.style.color = "green";
h4.style.marginLeft = "2em";
h4.style.marginTop = "2em";
/**************************************************/
/**************************************************/
