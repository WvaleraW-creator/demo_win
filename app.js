let state=[" Work","xCoffe 2","xWork 2 3","xPlay 4"," Play game ","xДействие 4"," Действие 7"," Действие 8"," Действие 9",
] /*начальные значения*/
let state_string=document.getElementById('show')
let state_wind=document.getElementById('state')
let a=0
let state_show_work=[]


function start_state(state) {
    state_show_work=[]
    if (state.length!=0) {
        let i2 = 0
        for (i = 0; i <= state.length - 1; i++) {
            if (state[i][0]==' ')
            {
                state_show_work[i2]=[[]]
                state_show_work[i2][0] = state[i]
                state_show_work[i2][1]=i
                i2++
            }
        }
    }

}

/*функция удаления сообщений*/
function x() {
    if(state_show_work.length==0){}
    else {
        if (a == 0) {a=0}
        else {
            a--
        }
        state[state_show_work[a][1]] = state[state_show_work[a][1]].trim()
        state[state_show_work[a][1]] = "x" + state[state_show_work[a][1]]
        start_state(state)
        show_state(1, 1, 1, 1)
        a = 0
    }
}
/*добавление сообщений*/
function aplly_state() {
    let b=document.getElementById("input")
    b=b.value
    if (b.length===0 || !b.trim() ){}
    else {
        state.push(" "+b)
        state_show_work[state_show_work.length]=[[]]
        state_show_work[state_show_work.length-1][0]=" "+b
        state_show_work[state_show_work.length-1][1]=state.length
        start_state(state)
        show_state(1,0,1,1)
    }
}
/*перерисовка */
function show_state(a,b,c,d)
{
    if (a==1) {document.getElementById('state').innerHTML = ""}
    if (b==1) {document.getElementById('show').innerHTML = ""}
    if (c==1){document.getElementById('input').value = ""}
    if (d==1) {for (i=0;i<state.length;i++) {
        text_wind=state[i]
        state_wind.innerHTML +=text_wind+'<br>'}
    }
}

function JSCstartdrag(t, e) { //mouse down on dragged DIV element

    e.cancelBubble = true;
    window.document.onmousemoveOld = window.document.onmousemove;
    window.document.onmouseupOld = window.document.onmouseup;
    window.document.onmousemove=JSCdodrag;
    window.document.onmouseup=JSCstopdrag;
    window.document.draged = t;
    t.dragX = e.clientX;
    t.dragY = e.clientY;
    return false;
}

function JSCdodrag(e) { //move the DIV

    var t = window.document.draged;
    t.style.opacity=0.5
    t.style.left = (t.offsetLeft + e.clientX - t.dragX)+"px";
    t.style.top = (t.offsetTop + e.clientY - t.dragY)+"px";
    t.dragX = e.clientX;
    t.dragY = e.clientY;
    return false;
}

function JSCstopdrag() {

    window.document.onmousemove=window.document.onmousemoveOld;
    window.document.onmouseup=window.document.onmouseupOld;
    window.document.draged.style.opacity=1
}





start_state(state)
show_state(1,1,1,1)
/*отображение сообщений*/
setInterval(function () {
    if (state_show_work.length==0){
        state_string.innerHTML = "В ведите сообщения"
    }else {
        state_string.innerHTML = state_show_work[a][0]
        a++
        if (a > state_show_work.length - 1) {
            a = 0
        }
    }
}, 2000)