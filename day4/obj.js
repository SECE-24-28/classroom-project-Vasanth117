let student={sna:"praveen",age:19,demo:function(){
    console.log("hello I am "+this.sna);
}
}
student.demo();
//--------------------
let student2 = {sna:"vasanthh",age:19,smap:()=>
{
    console.log("hello I am "+this.sna);
}
}
student2.smap();