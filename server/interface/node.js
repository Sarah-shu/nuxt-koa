const fs = require('fs')

const dataUrl='../../assets/data'
const arr=[]

const files =  fs.readdirSync(dataUrl)

// console.log(files)
for (const file of files){
  if(file.split('.').length>1)continue
  let obj={
    name:file,
    list:[]
  }
  // obj.list
  let list = fs.readdirSync(dataUrl+'/'+file)
  // console.log(list)
  for (const item of list){
    // console.log(item,'item')
    fs.readFile(dataUrl+'/'+file+'/'+item,'utf-8', (err, data) => {
      if (err) throw err
      // console.log(data)
      // console.log('file')
      let sub={}
      sub.name=item.split('.')[0]
      sub.subList=data
      // console.log(sub,'sub')
      obj.list.push(sub)
    })
  }
  setTimeout(()=>{
    arr.push(obj)
  },2000)
}
setTimeout(()=>{
  console.log(arr)
  fs.writeFile(dataUrl+'/write.json', arr, (err) => {
    if (err) throw err;
    console.log('文件已被保存');
  });
},4000)

// fs.readFile('/etc/passwd', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
