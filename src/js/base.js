new Vue({
    el:"#app",
    data:{
        msg:"hello vue!",
        arr:[1,2,3]
    }
});
new Vue({
    el:"#commond",
    data:{
        href:"#"
    }
});
new Vue({
    el:"#text",
    data:{
        msg:"v-text测试"
    }
});
new Vue({
    el:"#cloak",
    data:{
        msg:"v-text测试"
    }
});
new Vue({
    el:"#model",
    data:{
        a:0,
        b:0
    }
});

//v-model的实现方式
let data={
    msg:""
}

var opi = document.getElementById("ing");
opi.addEventListener("input",function(){
    console.log(this.value);
    let va=this.value;
    data.msg=va;
});
/*
    * 参数1：对象
    * 参数2：属性
    * 参数3：描述对象属性
    * */
var infValue=data.msg;
Object.defineProperty(data,"msg",{
    //获取当前属性触发该方法
    get(){
        console.log("获取属性值")
        return  infValue;
    },
    //更改后的值
    set(val){
        console.log("设置属性值")
        infValue=val;
        opi.value=infValue;
    }
})
new Vue({
    el:"#on",
    data:{
    },
    methods:{
        fun1(v){
            alert(v)
        }
    }
});