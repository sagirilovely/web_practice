let fs=require('fs')

let num=0//用于记录将stream分成了几个chunk
let rs=fs.createReadStream('./11/deathEnd.txt');
let ws=fs.createWriteStream('./11/22.txt');
rs.pipe(ws)
rs.on('end',()=>{
   
})
console.log('hhhh');
