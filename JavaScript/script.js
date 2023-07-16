/********************APPELLE D'ELLEMENTS******************************/
body=document.querySelector('body')
body.style.backgroundColor='rgb(11, 11, 23)'
/**************************************************/
header_div=document.createElement('div')
man_div=document.createElement('div')
body.appendChild(header_div)
body.appendChild(man_div)
body.style.display='flex'
body.style.flexDirection='column'
/**************************************************/
head1_div=document.createElement('div')
head2_div=document.createElement('div')
header_div.appendChild(head1_div)
header_div.appendChild(head2_div)
header_div.style.display='flex'
header_div.style.flexDirection='column'
/**************************************************/
head11_div=document.createElement('div')
head12_div=document.createElement('div')
head13_div=document.createElement('div')
head14_div=document.createElement('div')
head1_div.appendChild(head11_div)
head1_div.appendChild(head12_div)
head1_div.appendChild(head13_div)
head1_div.appendChild(head14_div)
head1_div.style.display='flex'
/**************************************************/
head21_div=document.createElement('div')
head22_div=document.createElement('div')
head23_div=document.createElement('div')
head2_div.appendChild(head21_div)
head2_div.appendChild(head22_div)
head2_div.appendChild(head23_div)
head2_div.style.display='flex'
/**************************************************/
head11_div.style.width='70%'
head12_div.style.width='10%'
head13_div.style.width='10%'
head14_div.style.width='10%'
head1_div.style.height='20vh'
head1_div.style.width='100%'
head1_div.style.border='2px solid'
head11_div.style.border='1.5px solid blue'
head12_div.style.border='1.5px solid blue'
head13_div.style.border='1.5px solid blue'
head14_div.style.border='1.5px solid blue'
/**************************************************/
head21_div.style.width='33%'
head22_div.style.width='33%'
head23_div.style.width='33%'
head2_div.style.height='10vh'
head2_div.style.width='100%'
head2_div.style.border='2px solid grey'
head21_div.style.border='1.5px solid red'
head22_div.style.border='1.5px solid red'
head23_div.style.border='1.5px solid red'
/**************************************************/
man_div.style.border='2px solid green'
man_div.style.width='100%'
man_div.style.height='70vh'
/**************************************************/
man1_div=document.createElement('div')
man2_div=document.createElement('div')
man_div.appendChild(man1_div)
man_div.appendChild(man2_div)
man1_div.style.display='flex'
man2_div.style.display='flex'
man11_div=document.createElement('div')
man12_div=document.createElement('div')
man11_div.style.display='flex'
man12_div.style.display='flex'
man12_div.style.flexDirection='column'
man11_div.style.border='1.5px solid grey'
man11_div.style.width='15vw'
man11_div.style.height='15vh'
man11_div.style.borderRadius='50%'
man11_div.style.backgroundColor='rgb(0, 0, 0)'
man11_div.style.marginTop='0.4em'
man12_div.style.border='1.5px solid yellow'
man12_div.style.width='80vw'
man12_div.style.height='20vh'
man1_div.appendChild(man11_div)
man1_div.appendChild(man12_div)
man121_div=document.createElement('div')
man121_div.style.border='1.5px solid blue'
man121_div.style.width='100%'
man121_div.style.height='10vh'
man121_div.style.display='flex'
man122_div=document.createElement('div')
man122_div.style.border='1.5px solid RED'
man122_div.style.width='100%'
man122_div.style.height='10vh'
man1211_div=document.createElement('div')
man1212_div=document.createElement('div')
man12_div.appendChild(man121_div)
man12_div.appendChild(man122_div)
man121_div.appendChild(man1211_div)
man121_div.appendChild(man1212_div)
man1211_div.style.border='1.5px solid blue'
man1211_div.style.width='80%'
man1211_div.style.height='10vh'
man1212_div.style.border='1.5px solid blue'
man1212_div.style.width='20%'
man1212_div.style.height='10vh'
/**************************************************/

/**************************************************/
man2_div.style.border='2px solid blue'
man2_div.style.width='10%'
man2_div.style.height='10vh'
man2_div.style.marginLeft='33em'
man2_div.style.marginTop='15em'
/**************************************************/
image=document.createElement('img')
image.setAttribute('src','Photos/Logo.png')
image.style.width='15vw'
image.style.height='15vh'
image.style.borderRadius='50%'
man11_div.appendChild(image)
/**************************************************/
h1=document.createElement('h1')
head11_div.appendChild(h1)
h1.textContent='Whatsaap'
h1.style.color='lightgrey'
/**************************************************/
h3=document.createElement('h3')
head21_div.appendChild(h3)
h3.textContent='Discution'
h3.style.color='lightgrey'
h3.style.marginLeft='3em'
h3.style.marginTop='2em'
/**************************************************/
h3=document.createElement('h3')
head22_div.appendChild(h3)
h3.textContent='Statut'
h3.style.color='lightgrey'
h3.style.marginLeft='3em'
h3.style.marginTop='2em'
/**************************************************/
h3=document.createElement('h3')
head23_div.appendChild(h3)
h3.textContent='Appels'
h3.style.color='lightgrey'
h3.style.marginLeft='3em'
h3.style.marginTop='2em'
/**************************************************/
h3=document.createElement('h3')
man1211_div.appendChild(h3)
h3.textContent='Sadio Mane'
h3.style.color='lightgrey'
h3.style.marginLeft='1em'
/**************************************************/
h5=document.createElement('h5')
man122_div.appendChild(h5)
h5.textContent='Stl Demba cc ?'
h5.style.color='lightgrey'
h5.style.marginLeft='1em'
/**************************************************/
h3=document.createElement('h3')
man1212_div.appendChild(h3)
h3.textContent='14:37'
h3.style.color='lightgrey'
h3.style.marginLeft='1em'
/**************************************************/
h4=document.createElement('h3')
man1212_div.appendChild(h4)
h4.textContent='2' 
h4.style.color='green'
h4.style.marginLeft='2em'
h4.style.marginTop='2em'
/**************************************************/
/**************************************************/




