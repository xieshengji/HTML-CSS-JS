new Vue({
    el: '#get',
    data () {
        return {
          joke: null
        }
      },
    mounted () {
        var that=this;
        axios.get("http://192.168.10.63:8088/index").then(function(response){
         console.log(response.data);
         that.joke=response.data;
         for(var i=0;i<that.joke.length;i++)
             that.joke[i].m_photo;
         },function(err){ })
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
