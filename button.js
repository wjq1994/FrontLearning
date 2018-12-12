/**
 * Created by li.liu on 2015/9/14.
 */
(function() {
    var main;

    main = function(window, document, version, callback) {
        var compatible, d, j, jMajor, jMinor, loaded, ref, script, vMajor, vMinor;
        ref = [null, null, false], j = ref[0], d = ref[1], loaded = ref[2];
        if (j = window.jQuery) {
            vMajor = parseInt(version.split('.')[0]) || 0;
            vMinor = parseInt(version.split('.')[1]) || 0;
            jMajor = parseInt(j.fn.jquery.split('.')[0]) || 0;
            jMinor = parseInt(j.fn.jquery.split('.')[1]) || 0;
            compatible = (jMajor > vMajor) || (jMajor === vMajor && jMinor >= vMinor);
        }
        if (!j || !compatible || callback(j, loaded)) {
            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://www.payssion.com/static/v2/vendor/jquery/jquery-1.11.1.min.js";
            script.onload = script.onreadystatechange = function() {
                if (!loaded && (!(d = this.readyState) || d === "loaded" || d === "complete")) {
                    callback((j = window.jQuery).noConflict(1), loaded = true);
                    return j(script).remove();
                }
            };
            //<link type="text/css" rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css">

            bootstrap_css = document.createElement("link");
            bootstrap_css.rel = "stylesheet";
            bootstrap_css.href = "https://www.payssion.com/static/css/bootstrap/bootstrap.css";

            return (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(bootstrap_css)&&(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script);
        }
    };

    main(window, document, "1.7", function($, jquery_loaded) {

        function IFrameReSize(iframename) {

            var pTar = document.getElementById(iframename);

            if (pTar) {  //ff

                if (pTar.contentDocument && pTar.contentDocument.body.offsetHeight) {

                    pTar.height = pTar.contentDocument.body.offsetHeight;

                } //ie

                else if (pTar.Document && pTar.Document.body.scrollHeight) {

                    pTar.height = pTar.Document.body.scrollHeight;

                }

            }

        }
        //��ֹ��ҳ�����?
        !function () {
            var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

            function preventDefault(e) {
                e = e || window.event;
                if (e.preventDefault)
                    e.preventDefault();
                e.returnValue = false;
            }

            function preventDefaultForScrollKeys(e) {
                if (keys[e.keyCode]) {
                    preventDefault(e);
                    return false;
                }
            }
            var oldonwheel, oldonmousewheel1, oldonmousewheel2, oldontouchmove, oldonkeydown
                , isDisabled;
            function disableScroll() {
                //���ù�����
                $(document.body).css({
                    "overflow-x":"hidden",
                    "overflow-y":"hidden"
                });
                if (window.addEventListener) // older FF
                    window.addEventListener('DOMMouseScroll', preventDefault, false);
                oldonwheel = window.onwheel;
                window.onwheel = preventDefault; // modern standard

                oldonmousewheel1 = window.onmousewheel;
                window.onmousewheel = preventDefault; // older browsers, IE
                oldonmousewheel2 = document.onmousewheel;
                document.onmousewheel = preventDefault; // older browsers, IE

                oldontouchmove = window.ontouchmove;
                window.ontouchmove = preventDefault; // mobile

                oldonkeydown = document.onkeydown;
                document.onkeydown = preventDefaultForScrollKeys;
                isDisabled = true;
            }

            function enableScroll() {
                //���ù�����
                $(document.body).css({
                    "overflow-x":"auto",
                    "overflow-y":"auto"
                });
                if (!isDisabled) return;
                if (window.removeEventListener)
                    window.removeEventListener('DOMMouseScroll', preventDefault, false);

                window.onwheel = oldonwheel; // modern standard

                window.onmousewheel = oldonmousewheel1; // older browsers, IE
                document.onmousewheel = oldonmousewheel2; // older browsers, IE

                window.ontouchmove = oldontouchmove; // mobile

                document.onkeydown = oldonkeydown;
                isDisabled = false;
            }
            window.scrollHanlder = {
                disableScroll: disableScroll,
                enableScroll: enableScroll
            };
        }();
        window.addEventListener('message',function(e){
            var msg=e.data;
            if(msg){
                var iframe_divs = document.getElementsByClassName('iframe_div');
                for(var i=0;i<iframe_divs.length;i++){
                    iframe_divs[i].style.display = "none";
                }
                window.scrollHanlder.enableScroll();
            }else{
                window.location.href = msg;
            }

        },false);

        $("head").append($("<link rel=\"stylesheet\" type=\"text/css\" href=\"https://www.payssion.com/static/css/v2/btn_style.css\"/>"));
        $(".payssion-button").on("click",function(){
            window.scrollHanlder.disableScroll();
            var p_btn = $(this);
            p_btn.removeData();
            var key = p_btn.data("key")||"";
            var logo = p_btn.data("logo")||"";
            var order_id = p_btn.data("order-id")||"";
            var description = p_btn.data("description")||"";
            var amount = p_btn.data("amount")||"";
            var currency = p_btn.data("currency")||"";
            var payer_email = p_btn.data("payer-email")||"";
            var return_url = p_btn.data("return-url")||"";
            var api_sig = p_btn.data("api-sig")||"";
            
            var checkout_url = 'https://www.payssion.com/checkout/'+key+'?order_id='+order_id+'&logo='+logo+'&description='+description+'&amount='+amount+'&currency='+currency+'&payer_email='+payer_email+'&return_url='+return_url+'&api_sig='+api_sig;
            if (navigator.userAgent.match(/.*Mobile.*/)) { // 来自手机
                window.location.href = checkout_url;
                window.scrollHanlder.enableScroll();
            }else{
            	checkout_url += '&from_btn=yes';
                var iframe_div = "<div class='iframe_div' id='"+key+"' style='overflow:hidden;border: 0px none transparent;visibility: visible;position: fixed;top: 0px;left: 0px;z-index: 10010;word-wrap: break-word;background-color:rgba(0,0,0,0.6);height: 100%;width: 100%;'>"+
                    "<iframe id='iframe_main_"+key+"' scrolling='no' allowtransparency='true' frameborder='0' name='frameElement'" +
                    " src='"+checkout_url+"'" +
                    " style='overflow:hidden;border: 0px none transparent;visibility: visible;position: fixed;top: 0px;left: 0px;z-index: 10010;word-wrap: break-word;background-color:transparent;height: 100%;width: 100%;' ></iframe>"+
                    "</div>";
            }
            if(!document.getElementById(key)){
                $("body").append($(iframe_div));
            }else{
                $("#"+key).css("display","block");
            }
        });
        //return false;
    });

}).call(this);

