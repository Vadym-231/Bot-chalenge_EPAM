const PF = require('pathfinding')
var result =[]
const refactorResult=(matrix)=>{
    result=[]
    if(matrix.length>0&&typeof matrix!=='undefined') {
        let firstX=matrix[0][0]
        let firstY=matrix[0][1]
        result.push({x:matrix[0][0],y:matrix[0][1],DIR:'LEFT'})
        for (let i = 0; i < matrix.length ; i++) {
            if(i===0){
                continue;
            }
            if (matrix[i][0] > firstX&&matrix[i][1]===firstY) {
                result.push({x: matrix[i][0], y: matrix[i][1], DIR: 'LEFT'})
            }
            if (matrix[i][0] < firstX&&matrix[i][1]===firstY) {
                result.push({x: matrix[i][0], y: matrix[i][1], DIR: 'RIGHT'})
            }
            if (matrix[i][1] < firstY&&matrix[i][0]===firstX) {
                result.push({x: matrix[i][0], y: matrix[i][1], DIR: 'DOWN'})

            }
            if (matrix[i][1] > firstY&&matrix[i][0]===firstX) {
                result.push({x: matrix[i][0], y: matrix[i][1], DIR: 'UP'})
            }
            else {

            }
            firstX=matrix[i][0]
            firstY=matrix[i][1]
        }
    }
    return result;
}
const refactorStr=(str,me,size)=>{
    let arr =[]
    const {x,y} = me
    // console.log( str.length)
    let numb =0
    for(let j=0;j<size;j++){
        arr=[]
        for(let i=0;i<=size;i++){

            switch (str[numb]) {
                case '╔':
                    arr.push(1)
                    break;
                case '═':
                    arr.push(1)
                    break;
                case '┐':
                    arr.push(1)
                    break;
                case '│':
                    arr.push(1)
                    break;
                case '┘':
                    arr.push(1)
                    break;
                case '─':
                    arr.push(1)
                    break;
                case '└':
                    arr.push(1)
                    break;
                case '║':
                    arr.push(1)
                    break;
                case '┌':
                    arr.push(1)
                    break;
                case '╗':
                    arr.push(1)
                    break;
                case '╝':
                    arr.push(1)
                    break;

                case '╚':
                    arr.push(1)
                    break;
                case ' ':
                    arr.push(1)
                    break;
                default:
                    arr.push(0)
                    break;
            }
            numb+=1
        }
        result.push(arr)
    }

    return result
}
const checkResult=(str='',me,size,goTo)=>{
    result=[
        [
            1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 1, 0
        ],
        [
            1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 1, 0
        ],
        [
            1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 1, 0
        ],
        [
            1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 1, 0
        ],
        [
            1, 1, 1, 1, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 1, 0
        ],
        [
            0, 0, 0, 0, 0, 1, 1,
            1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 1, 0
        ],
        [
            1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 1, 0
        ],
        [
            1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 1, 0
        ],
        [
            1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0
        ],
        [
            1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0
        ],
        [
            1, 1, 1, 0, 0, 0, 1,
            1, 1, 0, 0, 0, 1, 1,
            1, 1, 1, 1, 1, 0, 0
        ],
        [
            1, 1, 1, 0, 0, 0, 1,
            1, 1, 0, 0, 0, 1, 1,
            1, 1, 1, 1, 1, 0, 0
        ],
        [
            1, 1, 1, 1, 1, 1, 1,
            1, 1, 0, 0, 0, 1, 1,
            1, 1, 1, 1, 1, 0, 0
        ],
        [
            1, 1, 1, 1, 1, 1, 1,
            1, 1, 0, 0, 0, 1, 1,
            1, 1, 1, 1, 1, 0, 0
        ],
        [
            1, 1, 1, 1, 1, 1, 1,
            1, 1, 0, 0, 0, 1, 1,
            1, 1, 0, 0, 0, 0, 0
        ],
        [
            1, 1, 1, 1, 0, 0, 0,
            0, 0, 0, 0, 0, 1, 1,
            1, 1, 0, 0, 0, 0, 0
        ],
        [
            1, 1, 1, 1, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 1, 0
        ],
        [
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1, 1,
            1, 1, 1, 1, 1, 1, 0
        ],
        [
            1, 1, 1, 1, 0, 0, 0,
            0, 0, 0, 0, 0, 1, 1,
            1, 1, 1, 1, 1, 1, 0
        ],
        [
            1, 1, 1, 1, 0, 0, 0,
            0, 0, 0, 0, 0, 1, 1,
            1, 1, 1, 1, 1, 1, 0
        ]
    ]

    //console.log(str)
    const {x,y} = me ;
   // result[4][4]
    console.log(result[4][2])
   // refactorStr(str,me,size)
    let any = ''
    for (let i=0;i<result.length;i++){

        for (let j=0;j<result.length;j++){
            any+=result[i][j];
        }
        any+='\n'
    }
    console.log(any)
    //  console.log(this.result.length,this.result[0].length)
    var grid = new  PF.Grid(21,20,result)


    //console.log(any)

    var finder = new PF.AStarFinder({ diagonalMovement: PF.DiagonalMovement.Never})
    var path = finder.findPath(6,10,4,4,grid)
    // finder.heuristic({manhattan:true})
    // console.log(this.start.x,this.start.y,goTo.x,goTo.y, this.result.length,'x', this.result[0].length)
    console.log(path)
//finder.findPath(x, y, goTo.x, goTo.y, grid)
}
//6,9  4,3
checkResult('',{x:6,y:9},20,{x:4,y:3})