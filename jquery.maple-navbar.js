 /** 下拉菜单插件 */
~function($, undefined) {
    /** jquery插件定义 */
    //获取/设置被激活的元素
    $.fn.sub_active = function(_setActive) {
        var node = $(this);
        if(_setActive === undefined) {
            return node.data("sub_active_node");
        }
        else {
            node.data("sub_active_node", _setActive);
        }
    };
    
    //清除所有匹配的已激活元素
    $.fn.sub_clearActive = function() {
        $(this).each(function(){
            var nav = $(this);
            nav.data("sub_active_node", null);
        });
    };

    $('body').on('click', '.supsing-nav-toggle-btn', function() {
        $('ul.supsing-nav-with-sub').slideToggle();
        $('.supsing-nav-toggle-btn').find('span').toggleClass('opend');
    });
    
    
    
    // var _active = null;
    (function() {
        
        
        $('.nav').on('click', function(e){
            //导航栏
            var nav = $(this);
            //被按下的按钮
            var btn = $(e.target);
            //如果被按下的是sub菜单则返回
            //console.log(btn,btn.parents('.supsing-sub'));
            if(btn.parents('.supsing-sub')[0]) {
                return;
            }
            btn = btn.parents('[data-action="sub-toggle"]');
            //对齐模式, 按钮的模式覆盖导航的模式
            var mode = nav.attr('sub-align');
            mode = btn.attr('sub-align');
            //取消所有active
            $('[data-action="sub-toggle"]').removeClass("active");
            
            $('.supsing-sub').hide();
            
            if(nav.sub_active() !== btn[0]) {
                
                //根据对齐模式对齐
                if(mode === "right") {
                    //console.log(btn.width()*(nav.find('li').length-btn.index()-1));
                    $(btn).find('.supsing-sub').css("right", '0px');
                }
                else {
                    $(btn).find('.supsing-sub').css("left", '0px');
                }
                $(btn).find('.supsing-sub').fadeIn(130);
                
                btn.addClass("active");
                
                
                nav.sub_active(btn[0]);
            }
            else {
                
                
                nav.sub_clearActive();
            }

        });
        
        $(document).on('click', function(e){
            var btn = $(e.target);
            if(btn.parents('.supsing-sub')[0] || btn.parents('[data-action="sub-toggle"]')[0]) {
                return;
            }
            //取消所有active
            $('[data-action="sub-toggle"]').removeClass("active");
            
            $('.supsing-sub').hide();
            
            
            
            $(".nav").sub_clearActive();
            
        });
        
        
        $('.nav').on('mousemove',function(e){
            var nav = $(this);
            var btn = $(e.target);
            //如果被按下的是sub菜单则返回
            //console.log(btn,btn.parents('.supsing-sub'));
            if (nav.attr('sub-mode') !== 'hover') {
                return;
            }
            
            if(btn.parents('.supsing-sub')[0]) {
                return;
            }
            btn = btn.parents('[data-action="sub-toggle"]');
            /** 若hover为当前的active则终止mousemove事件的执行 */
            if(nav.sub_active() === btn[0]) {
                return;
            }
            //对齐模式, 按钮的模式覆盖导航的模式
            var mode = nav.attr('sub-align');
            mode = btn.attr('sub-align');
            //取消所有active
            $('.nav[sub-mode="hover"] [data-action="sub-toggle"]').removeClass("active");
            
            $('.nav[sub-mode="hover"] .supsing-sub').hide();
            
            if(nav.sub_active() !== btn[0]) {
                
                //根据对齐模式对齐
                if(mode === "right") {
                    //console.log(btn.width()*(nav.find('li').length-btn.index()-1));
                    $(btn).find('.supsing-sub').css("right", '0px');
                }
                else {
                    $(btn).find('.supsing-sub').css("left", '0px');
                }
                $(btn).find('.supsing-sub').fadeIn(130);
                
                btn.addClass("active");
                
                
                nav.sub_active(btn[0]);
            }
            else {
                
                
                nav.sub_clearActive();
            }
        });
        
        
        $(document).on('mousemove', function(e){
            var btn = $(e.target);
            if(btn.parents('.supsing-sub')[0] || btn.parents('[data-action="sub-toggle"]')[0]) {
                return;
            }
            //取消所有active
            $('.nav[sub-mode="hover"] [data-action="sub-toggle"]').removeClass("active");
            
            $('.nav[sub-mode="hover"] .supsing-sub').fadeOut(80);
            
            
            
            $(".nav").sub_clearActive();
            
        });
        
    })();
}(jQuery);
