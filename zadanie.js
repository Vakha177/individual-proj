const vakha = {
    name: 'Vakha' ,
    age: 20 ,
    money: 1000 ,
    city : {
        city1 : 'Grozn' ,
        city2: 'khasavyurt' ,
    },
mood: 'good' ,
print: function() {
    if(this.money--) {
        return 'настроение снижается'
    } else {
        return 'четко все'
    }
    
} ,
age : 20 ,
ageMinus: function(){
    if(this.age++) {
        return 'Становишься стариком'
    } else {
        return 'Хорош'
    }
},
cityAll: function(){
    if(this.city1){
        return 'nokhchi'
    }else {
        return 'Сюли'
    }
}
}  
vakha.print()
vakha.ageMinus()
vakha.cityAll()