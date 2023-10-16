//! Callbacks

const array = [
    {
        name: 'item 1',
        body: 'body of item 1',
    },
    {
        name: 'item 2',
        body: 'body of item 2',
    },
    {
        name: 'item 3',
        body: 'body of item 3',
    },
];

function addPost(post) {
    setTimeout(() => {
        array.push(post);
    }, 1000);
}

function getPosts() {
    setTimeout(() => {
        array.forEach(function (post) {
            const div = document.createElement('div');
            div.style.display = 'flex';
            div.style.flexDirection = 'column';
            div.innerHTML = `<strong>${post.name}</strong> - ${post.body}<br>`;
            document.querySelector('.form').appendChild(div);
        });
    }, 2000);
}
addPost({ name: 'blah', body: 'buhahahaha' });
getPosts();
//! setinterval and clearinterval
//! Kann adich povm
// const startbtn = document.querySelector('.submit')
// const stopbtn = document.querySelector('.clear')

// let intervalID

// function shuffleStart() {
//     if (!intervalID) {
//         intervalID = setInterval(colorShuffle,100)
//     }
// }
// function colorShuffle() {
//     // document.querySelector('.main').classList.toggle('main-color')
//     const randomcolor = Math.floor(Math.random() * 16777215).toString(16)
//     document.body.style.backgroundColor=`#${randomcolor}`
// }
// function shuffleStop() {
//     clearInterval(intervalID);
//  }
// // console.log(document.querySelector('.main-color').className)
// startbtn.addEventListener('click', shuffleStart)
// stopbtn.addEventListener('click',shuffleStop)
//!Asynchronous JS
// const fun = console.log('hey suckers');
// const time = setTimeout(fun, 10000);

// document.querySelector('.button').addEventListener('click', () => {
//     console.log(time);
//     clearTimeout(time);
//     console.log('timer cancelled');
//});
//! To stop event bubbling, use stopPropogation() & stopImmediatePropogation()!!!

//! Keyboard events
//! keypress, keyup,keydown,key,keycode,code
// const form_element=document.querySelector('.form-ele')
// const key = (e) => { console.log(e.key) }

// form_element.addEventListener('keydown',key)
//!Event Object
//! target,currentTarget,type,timeStamp,clientX,clientY,preventDefault(),
// const submit = document.querySelector('.button')
// const heading = document.querySelector('.main h1')

// onClick = (e) => console.log(e.target)
// onDrag=(e)=>document.querySelector('.child2').textContent=`X=${e.offsetX} Y=${e.offsetY}`

// submit.addEventListener('click',onClick)
// heading.addEventListener('drag',onDrag)
//!click,dblclick,contextmenu(rigth click),mousedown(hold),mouseup(release)
//!wheel,mouse over,mouseout,drag start,drag,dragend

//!Event handlers
// const clear = document.querySelector('.clear')
// const submit = document.querySelector('.submit')
// const form_things=document.querySelectorAll('.form-ele')
// const onClear = () => alert('clearing form')
// const removeAll = ()=> document.querySelector('.form').innerHTML='' //!cool
// const removeAll = () => form_things.forEach((item)=>item.remove())
// clear.addEventListener('click', onClear)
// submit.addEventListener('click', removeAll)
// setTimeout(()=>clear.click(),5000) //! Timed alerts

//! Styling using DOM

// const para = document.querySelector('.para')
// function onth() {
// if (para.className === 'para') {
//     para.className='para dark'
// } else if (para.className === 'para dark') {
//     para.className='para'
// }//!OR
//     para.classList.toggle('dark')//!Amazing alternative toggle,add,remove,replace
// }

// document.querySelector('.button').onclick = onth;

//! Remove

// ul.removeChild(li)
// function removeThis(itemno) {
//     const parent = document.querySelector('.parent')
//     const child = document.querySelector(`.child:nth-child(${itemno})`)

//     parent.removeChild(child)
// }
// removeThis(2)

//!Replace
// const firstItem = document.querySelector('li:first-child');
// const li = document.createElement('li');
// li.textContent = 'Inserted using replace function';
// firstItem.replaceWith(li)
//! Using outer html
// const secondItem = document.querySelector('li:nth-child(2)')
// secondItem.outerHTML = '<li>inserted via outer html</li>'
//!Replacing all elements in list
// const li_all = document.querySelectorAll('li')
// li_all.forEach(function (item) {
//     item.outerHTML='<li>Replaced all of it</li>'
// })
//! ReplaceChild
// const parent = document.querySelector('#main')
// const child = document.querySelector('#main h1')

// const h2 = document.createElement('h2')
// h2.textContent = 'Kochu heading aan'
// parent.replaceChild(h2,child)

//! Challenge#9 custom insertAfter function.
// function insertAfter(new_element, reference_element) {
//     const next_ele = reference_element.nextElementSibling;
//     const parent = reference_element.parentElement;
//     parent.insertBefore(new_element, next_ele);
//! OR reference_element.parentElement.insertBefore(new_element, reference_element.nextElementSibling);
//}
// const li = document.createElement('li');
// li.textContent = 'Inserted using custom function';

// const firstItem = document.querySelector('li:first-child');
// console.log(firstItem)
//! I did it bitches!
// insertAfter(li, firstItem);

//! insertAdjacentElement/Text/HTML
// function insertElement() {
//     const list = document.querySelector('.list');

//     const h2 = document.createElement('h2');
//     h2.textContent = 'inserted here!!';

//     list.insertAdjacentElement('afterbegin', h2);
// }

// function insertElement2() {
//     const child = document.querySelector('li:first-child');
//     child.insertAdjacentText('beforebegin', 'blaaah');
// }
// insertElement();
// insertElement2();
// console.log(document.querySelector('li:first-child'))
//! createElement()
// function addListItem(item) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item))

//     const button = document.createElement('button');
//     button.className = 'remove-item btn-link'

//     const i = document.createElement('i')
//     i.className = 'fa-solid fa-xmark'
//     button.appendChild(i)
//     li.appendChild(button)

//     document.querySelector('.list ul').appendChild(li)
//     console.log(li.innerHTML)
// }

// addListItem('donkey')
// ! Create and append elements
// const div = document.createElement('div')
// div.className = 'js-element'
// div.setAttribute('title', 'JS element')
// // div.innerText = 'This is done via JS' <- //!Not that good.Instead use createTextNode
// const text = document.createTextNode('This is also done via JS')
// div.appendChild(text)
// div.style.color = 'green'

// console.log(div)

// document.querySelector('.child2').appendChild(div)
//! More on DOM

// const parent = document.querySelector('.parent');
// console.log(parent.children[1].innerText);
// // innerText
// // className
// // nodeName
// parent.firstElementChild.innerText = 'changed first child';
// parent.lastElementChild.innerText = 'changed last child';

// const child = document.querySelector('.child');
// console.log(child.parentElement);
// child.parentElement.style.border = '2px solid #ccc';
// child.parentElement.style.borderRadius = '10px';

// // Second Child
// const sec_child = document.querySelector('.child:nth-child(2)');
// sec_child.nextElementSibling.style.border = '2px solid #ccc';

// output=parent.childNodes
// console.log(output[3]);
// parent.childNodes[5].style.color = 'red'
// child.parentNode.style.padding = '10px'
// child.parentNode.style.backgroundColor='#ccc'
// innerHTML
// outerHTML

//! DOM selectors

// console.log(document.getElementById('main'))
// console.log(document.getElementById('main').getAttribute('class'))

// document.getElementById('main').id = 'mein'
// document.getElementById('mein').setAttribute('class','buhahahaha')

// let output
// output = document.all

// output = document.head
// output = document.body
// output=document.links
// console.log(output)
// output = document.links[0].className = 'blehbleh'

//! DOM
// console.log(document.getElementById('main'))

// const main = document.getElementById('main')
// // main.innerHTML = '<h1>We changed it via js</h1>'

// document.querySelector('#main h1').innerText = 'Helloo'
