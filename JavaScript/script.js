
/********************APPELLE D'ELLEMENTS******************************/
body = document.querySelector("body");
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
head11_div.style.backgroundColor = "rgba(0,128,105,255)"

head12_div = document.createElement("div");
head12_div.style.justifyContent= "center"
head12_div.style.alignItems= "center"
head12_div.style.display="flex"
iconphoto = document.createElement("img");
iconphoto.setAttribute("src","/Photos/icons8-photo-material-filled/icons8-photo-48.png")
head12_div.appendChild(iconphoto)
head12_div.style.backgroundColor = "rgba(0,128,105,255)"



head13_div = document.createElement("div");
iconrecherche = document.createElement("img");
iconrecherche.setAttribute("src","/Photos/icons8-chercher-material-filled/icons8-chercher-48.png")
head13_div.appendChild(iconrecherche)
head13_div.style.backgroundColor = "rgba(0,128,105,255)"
head13_div.style.display="flex"
head13_div.style.justifyContent= "center"
head13_div.style.alignItems= "center"


head14_div = document.createElement("div");
iconmenu = document.createElement("img");
iconmenu.setAttribute("src","/Photos/icons8-menu-2-material-filled/icons8-menu-2-48.png")
head14_div.appendChild(iconmenu)
head14_div.style.backgroundColor = "rgba(0,128,105,255)"
head14_div.style.display="flex"
head14_div.style.justifyContent= "center"
head14_div.style.alignItems= "center"

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
span1.style.position = "relative";
h35.style.bottom = "-22px"
h35.style.color="rgba(0,128,105,255)"

h35.innerHTML = "35"
h35.setAttribute("class", "h35")
h35.style.position = "absolute";

body=document.querySelector('body')
body.style.display='flex'
//body.style.backgroundColor='rgb(13, 11, 27)'
/*******************************************************/
man_div=document.createElement('div')
man_div.style.display='flex'
man_div.style.flexDirection='column'
man_div.style.border='2px solid blue'
man_div.style.width='100%'
man_div.style.height='97vh'
body.appendChild(man_div)
/*******************************************************/
man1_div=document.createElement('div')
man1_div.style.display='flex'
man1_div.style.flexDirection='column'
man1_div.style.border='1.5px solid red'
man1_div.style.width='100%'
man1_div.style.height='87vh'
man_div.appendChild(man1_div)
/********************************************************/
man2_div=document.createElement('div')
man2_div.style.border='1.5px solid green'
man2_div.style.width='6vw'
man2_div.style.height='13vh'
man2_div.style.marginLeft='77rem'
man_div.appendChild(man2_div)
/******************************************************/
man11_div=document.createElement('div')
man11_div.style.display='flex'
man11_div.style.border='1.5px solid grey'
man11_div.style.width='100%'
man11_div.style.height='20vh'
man1_div.appendChild(man11_div)
/*******************************************************/
man111_div=document.createElement('div')
man111_div.style.display='flex'
man111_div.style.border='1.5px solid red'
man111_div.style.width='6vw'
man111_div.style.height='12vh'
man111_div.style.borderRadius='50%'
man11_div.appendChild(man111_div)
/**********************PHOTO PROFILE*********************************/
photos_p_1=document.createElement('img')
photos_p_1.setAttribute('src','Photos/Logo.png')
photos_p_1.style.width='6vw'
photos_p_1.style.height='12vh'
photos_p_1.style.borderRadius='50%'
man111_div.appendChild(photos_p_1)
/*******************************************************/
/*******************************************************/
/*******************************************************/
man112_div=document.createElement('div')
man112_div.style.display='flex'
man112_div.style.flexDirection='column'
man112_div.style.border='1.5px solid blue'
man112_div.style.width='84vw'
man112_div.style.height='20vh'
man11_div.appendChild(man112_div)
/*******************************************************/
name1_div=document.createElement('div')
name1_div.style.border='1.5px solid green'
name1_div.style.width='84vw'
name1_div.style.height='10vh'
man112_div.appendChild(name1_div)
/**********************USER NAME*********************************/
name1=document.createElement('H2')
name1.textContent='User Name'
name1.style.color='white'
name1_div.appendChild(name1)
name1.style.marginLeft='2em'
/*******************************************************/
message1_div=document.createElement('div')
message1_div.style.border='1.5px solid green'
message1_div.style.width='84vw'
message1_div.style.height='10vh'
man112_div.appendChild(message1_div)
/**********************USER MESSAGE*********************************/
message1=document.createElement('H3')
message1.textContent='nouveau messages'
message1.style.color='white'
message1_div.appendChild(message1)
message1.style.marginLeft='1.5em'
/*******************************************************/
/*******************************************************/
/*******************************************************/
man113_div=document.createElement('div')
man113_div.style.display='flex'
man113_div.style.flexDirection='column'
man113_div.style.border='1.5px solid red'
man113_div.style.width='7vw'
man113_div.style.height='20vh'
man11_div.appendChild(man113_div)
/*******************************************************/
time1_div=document.createElement('div')
time1_div.style.border='1.5px solid green'
time1_div.style.width='7vw'
time1_div.style.height='10vh'
man113_div.appendChild(time1_div)
/***********************MESSAGE TIMES********************************/
time1=document.createElement('H3')
time1.textContent='22h:07'
time1.style.color='white'
time1_div.appendChild(time1)
time1.style.marginLeft='1em'
/*******************************************************/
number1_div=document.createElement('div')
number1_div.style.border='1.5px solid green'
number1_div.style.width='7vw'
number1_div.style.height='10vh'
man113_div.appendChild(number1_div)
/**********************MESSAGES NUMBER*********************************/
number1=document.createElement('H3')
number1.textContent='2'
number1.style.color='green'
number1_div.appendChild(number1)
number1.style.marginLeft='2em'
/*******************************************************/
/*******************************************************/
/*******************************************************/
man12_div=document.createElement('div')
man12_div.style.display='flex'
man12_div.style.border='1.5px solid grey'
man12_div.style.width='100%'
man12_div.style.height='20vh'
man1_div.appendChild(man12_div)
/*******************************************************/

/*******************************************************/
man13_div=document.createElement('div')
man13_div.style.display='flex'
man13_div.style.border='1.5px solid grey'
man13_div.style.width='100%'
man13_div.style.height='20vh'
man1_div.appendChild(man13_div)
/*******************************************************/

/*******************************************************/
man14_div=document.createElement('div')
man14_div.style.display='flex'
man14_div.style.border='1.5px solid grey'
man14_div.style.width='100%'
man14_div.style.height='20vh'
man1_div.appendChild(man14_div)
/*******************************************************/
man15_div=document.createElement('div')
man15_div.style.display='flex'
man15_div.style.border='1.5px solid grey'
man15_div.style.width='100%'
man15_div.style.height='20vh'
man1_div.appendChild(man15_div)
/*******************************************************/

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
