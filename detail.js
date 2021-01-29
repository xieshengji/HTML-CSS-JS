new Vue
(
    {
        el:"#comment",
        data(){
            return{
            list:[],
            list2:[],
            commentvalue:" ",
            commentvalue2:" ",
            movie_id:0,
            average1:0
            }
        },
        methods:{
            inputcomment:function()
            {
                var that=this;
                var url = location.search; //获取url中"?"符后的字串
                if (url.indexOf("?") != -1) {    //判断是否有参数
                    var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
                    strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
         //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
                    this.movie_id=strs[1]
                this.list.push(this.commentvalue)
                this.list2.push(this.commentvalue2)
                var score = this.commentvalue2;
        var mid = this.movie_id;
        var uid = 1;
        var judge = 1;
        $.get("http://192.168.10.63:8088/submitScore",{"m_id":mid,"u_id":uid,"score":score,"judge":judge},function (data){
            $("#Newscore").val(data);})  // 前端更新数据，不用刷新
                console.log(this.list2)
                console.log(this.movie_id)
                
                var len=this.list2.length
                var sum=0
                for(var i = 0; i < len ; i++){
                    sum +=parseFloat(this.list2[i]);
                }        
                this.average1=sum/len
            }   
            }
        }
    }
)
new Vue
(
    {
        el:'#header',
        data(){
            return{
                movieid:"",
                movie_name:"",
            
            }
        },
         mounted () {
        var that=this;
        var url = location.search; //获取url中"?"符后的字串
        if (url.indexOf("?") != -1) {    //判断是否有参数
            var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
            strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
            this.movieid=strs[1]
            axios.get("http://192.168.10.63:8088//movie_detail?m_id="+this.movieid).then(function(moviedetail){
            console.log(moviedetail.data);
            that.movie_name=moviedetail.data.m_name;
            },function(err){ })
        }

    }  
    }
)
new Vue
(
    {
        el:'#content',
        data(){
            return{
                movie_picture:"C:/Users/Administrator/Desktop/work/photo1.webp",
                movie_director:"彼特·道格特 / 凯普·鲍尔斯",
                movie_wirter:"彼特·道格特 / 麦克·琼斯 / 凯普·鲍尔斯",
                movie_actor:"杰米·福克斯 / 蒂娜·菲 / 菲利西亚·拉斯海德 / 阿米尔-卡利布·汤普森 / 戴维德·迪格斯",
                movie_introduce:"究竟是什么塑造了真正的你？电影将聚焦乔伊·高纳（杰米·福克斯配音）。这位中学音乐老师获得了梦寐以求的机会——在纽约最好的爵士俱乐部演奏。但一个小失误把他从纽约的街道带到了一个奇幻的地方“生之来处”（the Great Before）。在那里，灵魂们获得培训，在前往地球之前将获得他们的个性特点和兴趣。决心要回到地球生活的乔伊认识了一个早熟的灵魂“二十二”（蒂娜·菲 配音），二十二一直找不到自己对于人类生活的兴趣。随着乔伊不断试图向二十二展示生命的精彩之处，他也将领悟一些人生终极问题的答案。",
                movie_data:"2020-12-25(中国大陆/美国网络) / 2020-10-11(伦敦电影节)"
            }
        },
        mounted(){

            var that=this;
        var url = location.search; //获取url中"?"符后的字串
        if (url.indexOf("?") != -1) {    //判断是否有参数
            var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
            strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
         //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
            this.movieid=strs[1]
            axios.get("http://192.168.10.63:8088//movie_detail?m_id="+this.movieid).then(function(moviedetail){
            that.movie_introduce=moviedetail.data.m_introduce;
            that.movie_picture=moviedetail.data.m_photo
            },function(err){ })
        }

        }

        
    }

)

