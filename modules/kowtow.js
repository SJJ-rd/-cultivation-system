const $=id=>document.getElementById(id);

const vows=[
'殺生','偷盜','邪淫','妄言','惡口','兩舌','綺語','貪','瞋','痴','慢','疑'
];

let i=0;

function update(){
 $('kowtowVow').textContent=vows[i];
}

$('kowtowOne').onclick=()=>{
 i=(i+1)%vows.length;
 update();
};

update();
