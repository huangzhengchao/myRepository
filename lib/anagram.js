function anagram(str){
    var result = []
    if(!str){
        return result
    }

    if(str.length === 1){
        return [str]
    }

    if(str.length === 2){
        return [str[0] + str[1], str[1] + str[0]]
    }

    var result = []
    for(var i=0; i<str.length; i++){
        
    }

    result.push(str)
    return result
}

module.exports = anagram