let b = ''
function countChar(str,char){
    
    for(let a=0;a<str.length;a++){
        if(str[a]==char){
            b += str[a]
        }
    }
    console.log(b.length)
}
countChar("bootcamp","o")