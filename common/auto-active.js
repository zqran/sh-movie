!function(t){t.module("moviecat.autoActive",[]).directive("autoActive",["$location",function(t){return{link:function(i,n){i.location=t,i.$watch("location.url()",function(t){n.children().attr("href").indexOf(t)>-1&&(n.parent().children().removeClass("active"),n.addClass("active"))})}}}])}(angular);