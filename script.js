document.querySelector(".banners").style.display = 'none' 

let prev_page = 'type'
let info = {
    'type':'noset',
    'tech':'noset',
    'band':0
}

let init = document.getElementsByClassName(prev_page)[0]
init.style.display = 'flex'

page = (page='type',change=undefined) => {
    a = document.getElementsByClassName(page)[0]
    if (a != undefined) {
        document.getElementsByClassName(prev_page)[0].classList.remove('apear')
        setTimeout(() => {
            document.querySelectorAll('body>article').forEach(a=>{a.style.display = 'none'})
            a.style.display='flex'
            setTimeout(()=>{
                a.classList.add('apear')
            },201)
        }, 201);

        if (change!=undefined) {
            info[prev_page]=change
        }
        prev_page = page
    }
}

setTimeout(() => {
    init.classList.add('apear')
}, 200);