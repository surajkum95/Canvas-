 export class Util {
    getColors(){
        let colorArray = ['red', 'green', 'blue', 'yellow', 'black', 'orange', 'pink'];
        return colorArray;
    }
    getRandomColor(colors){
        return colors[Math.floor(Math.random()*colors.length)];
    }
}