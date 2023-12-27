function vowels(str){
    let str =['a' ,'u' ,'o', 'i', 'e', 'A', 'U', 'O', 'I', 'E'];
    let count = 0;

    for(let a=0; str.length > 0; a++){
        if(vowels.indexof(str[1])!==-1 ){
            count++            
        }
    }
    return count;
}

console.log(vowels('Ai makes me smile.'));

function vowels(str){
    let vowels = ['a', 'u', 'o', 'i', 'e', 'A', 'U', 'O', 'I', 'E'];
    let count = str.split('').filter(char => vowels.includes(char));
    return count;
}
console.log(vowels('Ai makes me smile.'));