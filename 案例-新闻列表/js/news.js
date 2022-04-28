$(function() {
    //获取新闻列表
    function getNewList() {
        $.get('http://www.liulongbin.top:3006/api/news', function(res) {
            if (res.status !== 200) return alert('获取新闻失败')

            for(var i=0;i<res.length;i++){
                //把每一项的tags属性从字符串改造成字符串的数组
                res.data[i].tags=res.data[i].tags.split(',')
            }
            console.log(res);
            var htmlStr=template('tpl-news',res)
            $('#news-list').html(htmlStr)
        })
    }

    getNewList()
})