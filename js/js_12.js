class rectangle{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }


area() {
    const area = this.width * this.height;
      return area;
}

paint () {
         console.log(`Painting with color ${this.color}`);
    }
}


const rect = new rectangle(2, 4,"red");
const area = rect.area();
rect.paint();
console.log(area)






class calculator{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }

    add(){
        return this.a+this.b;
    }

    sub(){
        return this.a-this.b;
    }

    div(){
        return this.a/this.b;
    }

    mul(){
        return this.a*this.b;
    }
}

const calc = new calculator(2,3);
console.log(calc.add());
console.log(calc.sub());
console.log(calc.div());
console.log(calc.mul());


const day = new Date();
console.log(day.getDay(),day.getMonth(),day.getFullYear());

//date and time



const map = new Map();
map.set("name","john");
map.set("age",20);
map.set("city","new york");


console.log(map.get("name"));
console.log(map.has("age"));
console.log(map.delete("city"));
