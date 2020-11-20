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
new Vue({
    el:"#ed",
    data:{

    },
    methods:{
        fun1(){
           console.log("fun1")
        },
        fun2(){
            console.log("fun2")
        },
    }
});
new Vue({
    el:"#for",
    data:{
        friut:["B","A","L"]
    }

});
new Vue({
    el:"#entrykey",
    methods:{
        func(){
            console.log(event.code+"  "+event.keyCode+"    "+event.key)
        }
    }

});
new Vue({
    el:"#class_bond",
    data:{
        classStr:"cc"
    }


});
let com=Vue.component("login",{
    template:'<h1>template{{msg}}</h1>',
    data(){
      return {
          msg:"数据data"
      }
    },
    methods:{
        fun(){
            console.log("test")
        }
    }
})
new Vue({
    el:"#com",
    components: {
            'login':com
        }
    }
);

let parent=Vue.component('parent',{
    template:`<div>
                <p>这是{{msg}}</p>
                <p>这是数据son:{{sonMsg}}</p>
                <son @getMsg="fun" :send="info"></son>
               </div>`,
    data(){
        return{
            msg:'parent',
            info:'传递数据到son',
            sonMsg:''
        }
    },
    methods:{
        fun(m){
            console.log("父组件函数激活"+m);
            this.sonMsg=m;
        }
    }
});
let son=Vue.component('son',{
    template:`  <div>
                    <p>这是{{msg}}</p>
                    <p>parent:{{send}}</p>
                    <button @click="sendMsg()">发送数据到parent</button>
                </div>`,
    props:['send'],
    data(){
        return{
            msg:'son'
        }
    },
    methods:{
        sendMsg(){
            //调用this.$emit
            //参数2，传值
            console.log("触发父组件自定义事件")
            this.$emit('getMsg',this.msg)
        }
    }

});
new Vue({
    el:'#ps',
    components:{
        parent,
        son
    }
});
new Vue({
    el:'#ps_msg',
    components:{
        parent,
        son
    }
});