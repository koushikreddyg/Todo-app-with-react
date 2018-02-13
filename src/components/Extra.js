
let arr=[];
class Extra{
    //add item
    static addData=(item)=>{
         arr.push(item);
         return item;
    }

    //delete data  
    static deleteData=(id)=>{
        arr=arr.filter(data => id!==data.id);
        return arr;
    }

    static findById=(id)=>{
        return arr.find(item=>item.id===Number(id));
    }

    
    //get all the data
    static getAllData=()=>arr;
    
    //edit item 
    static editData(item){
        for(var index in arr){
            if(arr[index].id===item.id){
                arr[index]=item;
                return item;
            }
        }
    }
}


export default Extra;