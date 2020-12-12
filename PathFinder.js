const PF = require('pathfinding')
class PathFinder{
    constructor() {
        this.result=[]
        this.start={}
    }
    #checkDir=(x,y,firstX,firstY)=>{

        if (x > firstX&&y===firstY) {
             this.result.push({x: x, y:y, DIR: 'LEFT'})
            return

        }
        if (x < firstX&&y===firstY) {
              this.result.push({x: x, y:y, DIR: 'RIGHT'})
            return
        }
        if (y < firstY&&x===firstX) {
             this.result.push({x: x, y:y, DIR: 'UP'})
            return

        }
        if (y > firstY&&x===firstX) {
              this.result.push({x: x, y:y, DIR: 'DOWN'})
            return;
        }
        else {
            this.result.push({x: x, y:y, DIR: 'STOP'})
        }
    }
    #refactorResult=(matrix)=>{
        this.result=[]
        if(matrix.length>0&&typeof matrix!=='undefined') {
            let nextX=matrix[0][0]
            let nextY=matrix[0][1]

            for (let i = 0; i < matrix.length ; i++) {
                if(typeof matrix[i+1]!=='undefined'&&typeof matrix[i+1]!=='undefined'){
                    nextX=matrix[i+1][0]
                    nextY=matrix[i+1][1]
                this.#checkDir(matrix[i][0],matrix[i][1],nextX,nextY)
                }
            }
        }
        return this.result;
    }
    #createMatrix=(arr)=>{
        try {
            var path = new PF.Grid(20, 20)
            arr.map(allObjects => {
                if (Array.isArray(allObjects) && allObjects.length > 0) {
                    allObjects.map(data => {
                        path.setWalkableAt(data.x, data.y, false);
                    })
                }
            })
            return path;
        }catch (e) {
            console.log(e)
        }
    }
    #checkSavePath=()=>{

    }
    checkResult(str,me,size,goTo,boxes, holes,barier,savePath = false){
        try {


            //Init
            this.result = []
            const {x, y} = me
            this.start = {x: x, y: y}

            //create Matrix without holes and boxes
            var easyPath = new PF.Grid(20, 20)
            for (let i = 0; i < str.length; i++) {
                easyPath.setWalkableAt(str[i].x, str[i].y, false);
            }

            //create Matrix with holes and boxes and bariere

            var finder = new PF.AStarFinder({diagonalMovement: PF.DiagonalMovement.Never})
            var array = finder.findPath(this.start.x, this.start.y, goTo.x, goTo.y, this.#createMatrix([str, holes, boxes, barier]))
            if(!savePath)
            {
                if (array.length === 0) {
                    array = finder.findPath(this.start.x, this.start.y, goTo.x, goTo.y, this.#createMatrix([str, holes, boxes]))
                    if (array.length === 0) {
                        array = finder.findPath(this.start.x, this.start.y, goTo.x, goTo.y, this.#createMatrix([str, holes]))
                    }
                    if (array.length === 0) {
                        array = finder.findPath(this.start.x, this.start.y, goTo.x, goTo.y, this.#createMatrix([str]))
                        console.log(array)
                    }
                }
            }
            console.log(array)
            if (Array.isArray(array) && array.length > 0 && typeof array !== 'undefined') {
                return this.#refactorResult(array)
            } else {
                return undefined;
            }
        }catch (e) {
            console.log(e)
        }
    }

}




module.exports=PathFinder















//Render field as matrix
/* */