/// analitycs and comments
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-39747273-1']);
_gaq.push(['_trackPageview']);

var disqus_shortname = 'abimaelmartell-blog';

var require = function(source){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = source;
  document.getElementsByTagName('body')[0].appendChild(script)
}

require('//google-analytics.com/ga.js');

if(document.location.pathname == "/")
  require('//' + disqus_shortname + '.disqus.com/count.js');

if(document.location.pathname.indexOf("/blog") == 0)
  require('//' + disqus_shortname + '.disqus.com/embed.js');
