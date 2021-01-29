new Vue({
    el: '#get',
    data () {
        return {
          joke1:[{}],
          joke2:[{}],
          joke3:[{}],
          del1:true,
          change1:false,
          change2:false,
          change3:false,
          n:0
        }
      },
    mounted () {
        var that=this;
        axios.get("http://192.168.10.63:8088/index").then(function(response){
         console.log(response.data);
         that.joke1=response.data[0];
         that.joke2=response.data[1];
         that.joke3=response.data[2];
         },function(err){ })

        
    },
    //按钮删除功能实现
    
    methods:{
       delete1:function(n)
       {
        var that=this;
        axios.get("http://192.168.10.63:8088/deleteMovie?m_id=1").then(function(){
          alter("删除成功")
         },function(err){ })
       },
       delete2:function()
       {
        var that=this;
        axios.get("http://192.168.10.63:8088/deleteMovie?m_id=2").then(function(){
          alter("删除成功")
         },function(err){ })
       },
       delete3:function()
       {
        var that=this;
        axios.get("http://192.168.10.63:8088/deleteMovie?m_id=3").then(function(){
          alter("删除成功")
        },function(err){ })
       },
       //按钮修改功能实现
      changeit1:function(n)
      {
        var that=this;
        that.change1=!that.change1;
        var element = document.getElementById("tst1");
        console.log(element.innerHTML)
        console.log(that.joke1.m_introduce)
        var m_id = that.joke1.m_id;
        var m_introduce=element.innerHTML;
        $.get("http://192.168.10.63:8088/editMovie",{"m_id":m_id,"m_introduce":m_introduce},function (data){
            $("#Newscore").val(data);// 前端更新数据，不用刷新
      })
      },
      changeit2:function(n)
      {
        var that=this;
        that.change2=!that.change2;
        var element = document.getElementById("tst2");
        console.log(element.innerHTML)
        console.log(that.joke2.m_introduce)
        var m_id = that.joke2.m_id;
        var m_introduce=element.innerHTML;
        $.get("http://192.168.10.63:8088/editMovie",{"m_id":m_id,"m_introduce":m_introduce},function (data){
            $("#Newscore").val(data);// 前端更新数据，不用刷新
      })
      },
      changeit3:function(n)
      {
        var that=this;
        that.change3=!that.change3;
        var element = document.getElementById("tst3");
        console.log(element.innerHTML)
        console.log(that.joke3.m_introduce)
        var m_id = that.joke3.m_id;
        var m_introduce=element.innerHTML;
        $.get("http://192.168.10.63:8088/editMovie",{"m_id":m_id,"m_introduce":m_introduce},function (data){
            $("#Newscore").val(data);// 前端更新数据，不用刷新
      })
      },
      //跳转至详情功能实现
      jump1:function(){
        window.location.href="detail.html?movie_id="+this.joke1.m_id;
       },
       jump2:function(){
        window.location.href="detail.html?movie_id="+this.joke2.m_id;
       },
       jump3:function(){
        window.location.href="detail.html?movie_id="+this.joke3.m_id;
       }
    }
  })
  var header=new Vue
(
{
    el:"#header",
    methods:{

    jump :function() 
    {
        alert("call 18856355072")
    }  
            } 
            
}
) 
