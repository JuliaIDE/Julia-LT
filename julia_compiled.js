if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.util')) {
goog.provide('lt.objs.langs.julia.util');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('crate.core');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('crate.core');
lt.objs.langs.julia.util.cursor = (function() {
var cursor = null;
var cursor__1 = (function (editor){return cursor.call(null,editor,"start");
});
var cursor__2 = (function (editor,pos){var cursor__$1 = lt.objs.editor.__GT_cursor.call(null,editor,pos);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cursor__$1) + 1),new cljs.core.Keyword(null,"col","col",1014002930),(new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(cursor__$1) + 1)], null);
});
cursor = function(editor,pos){
switch(arguments.length){
case 1:
return cursor__1.call(this,editor);
case 2:
return cursor__2.call(this,editor,pos);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$core$IFn$_invoke$arity$1 = cursor__1;
cursor.cljs$core$IFn$_invoke$arity$2 = cursor__2;
return cursor;
})()
;
lt.objs.langs.julia.util.module = (function module__$1(editor){return cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","module","lt.objs.langs.julia.module/module",3266506741));
});
/**
* @param {...*} var_args
*/
lt.objs.langs.julia.util.widget = (function() { 
var widget__delegate = function (editor,line,p__9333){var vec__9335 = p__9333;var type = cljs.core.nth.call(null,vec__9335,0,null);return cljs.core.get.call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.editor.line_handle.call(null,editor,(line - 1)),(function (){var or__6378__auto__ = type;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return new cljs.core.Keyword(null,"inline","inline",4124874251);
}
})()], null));
};
var widget = function (editor,line,var_args){
var p__9333 = null;if (arguments.length > 2) {
  p__9333 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return widget__delegate.call(this,editor,line,p__9333);};
widget.cljs$lang$maxFixedArity = 2;
widget.cljs$lang$applyTo = (function (arglist__9367){
var editor = cljs.core.first(arglist__9367);
arglist__9367 = cljs.core.next(arglist__9367);
var line = cljs.core.first(arglist__9367);
var p__9333 = cljs.core.rest(arglist__9367);
return widget__delegate(editor,line,p__9333);
});
widget.cljs$core$IFn$_invoke$arity$variadic = widget__delegate;
return widget;
})()
;
lt.objs.langs.julia.util.inner_text = (function inner_text(dom){var children = dom.childNodes;if((children.length > 0))
{return cljs.core.nth.call(null,children,0).wholeText;
} else
{return "";
}
});
lt.objs.langs.julia.util.get_scripts = (function get_scripts(dom){var scripts = (cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([HTMLScriptElement,SVGScriptElement], true).call(null,cljs.core.type.call(null,dom)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom], null):dom.querySelectorAll("script"));return cljs.core.map.call(null,lt.objs.langs.julia.util.inner_text,cljs.core.filter.call(null,((function (scripts){
return (function (p1__9336_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"text/javascript",null], null), null),p1__9336_SHARP_.type);
});})(scripts))
,scripts));
});
lt.objs.langs.julia.util.eval_scripts = (function eval_scripts(scripts){var seq__9341 = cljs.core.seq.call(null,scripts);var chunk__9342 = null;var count__9343 = 0;var i__9344 = 0;while(true){
if((i__9344 < count__9343))
{var script = cljs.core._nth.call(null,chunk__9342,i__9344);window.eval(script);
{
var G__9368 = seq__9341;
var G__9369 = chunk__9342;
var G__9370 = count__9343;
var G__9371 = (i__9344 + 1);
seq__9341 = G__9368;
chunk__9342 = G__9369;
count__9343 = G__9370;
i__9344 = G__9371;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9341);if(temp__4092__auto__)
{var seq__9341__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9341__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__9341__$1);{
var G__9372 = cljs.core.chunk_rest.call(null,seq__9341__$1);
var G__9373 = c__7126__auto__;
var G__9374 = cljs.core.count.call(null,c__7126__auto__);
var G__9375 = 0;
seq__9341 = G__9372;
chunk__9342 = G__9373;
count__9343 = G__9374;
i__9344 = G__9375;
continue;
}
} else
{var script = cljs.core.first.call(null,seq__9341__$1);window.eval(script);
{
var G__9376 = cljs.core.next.call(null,seq__9341__$1);
var G__9377 = null;
var G__9378 = 0;
var G__9379 = 0;
seq__9341 = G__9376;
chunk__9342 = G__9377;
count__9343 = G__9378;
i__9344 = G__9379;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.objs.langs.julia.util.into_div = (function into_div(dom){return crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),dom], null));
});
lt.objs.langs.julia.util.parse_div = (function parse_div(html){return lt.objs.langs.julia.util.into_div.call(null,crate.core.raw.call(null,html));
});
/**
* @param {...*} var_args
*/
lt.objs.langs.julia.util.plugin_dir = (function() { 
var plugin_dir__delegate = function (names){return cljs.core.first.call(null,(function (){var iter__7095__auto__ = (function iter__9351(s__9352){return (new cljs.core.LazySeq(null,(function (){var s__9352__$1 = s__9352;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9352__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var dir = cljs.core.first.call(null,xs__4579__auto__);var iterys__7091__auto__ = ((function (s__9352__$1,dir,xs__4579__auto__,temp__4092__auto__){
return (function iter__9353(s__9354){return (new cljs.core.LazySeq(null,((function (s__9352__$1,dir,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__9354__$1 = s__9354;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9354__$1);if(temp__4092__auto____$1)
{var s__9354__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9354__$2))
{var c__7093__auto__ = cljs.core.chunk_first.call(null,s__9354__$2);var size__7094__auto__ = cljs.core.count.call(null,c__7093__auto__);var b__9356 = cljs.core.chunk_buffer.call(null,size__7094__auto__);if((function (){var i__9355 = 0;while(true){
if((i__9355 < size__7094__auto__))
{var name = cljs.core._nth.call(null,c__7093__auto__,i__9355);var path = lt.objs.files.join.call(null,dir,name);if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,path)))
{cljs.core.chunk_append.call(null,b__9356,path);
{
var G__9380 = (i__9355 + 1);
i__9355 = G__9380;
continue;
}
} else
{{
var G__9381 = (i__9355 + 1);
i__9355 = G__9381;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9356),iter__9353.call(null,cljs.core.chunk_rest.call(null,s__9354__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9356),null);
}
} else
{var name = cljs.core.first.call(null,s__9354__$2);var path = lt.objs.files.join.call(null,dir,name);if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,path)))
{return cljs.core.cons.call(null,path,iter__9353.call(null,cljs.core.rest.call(null,s__9354__$2)));
} else
{{
var G__9382 = cljs.core.rest.call(null,s__9354__$2);
s__9354__$1 = G__9382;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__9352__$1,dir,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__9352__$1,dir,xs__4579__auto__,temp__4092__auto__))
;var fs__7092__auto__ = cljs.core.seq.call(null,iterys__7091__auto__.call(null,names));if(fs__7092__auto__)
{return cljs.core.concat.call(null,fs__7092__auto__,iter__9351.call(null,cljs.core.rest.call(null,s__9352__$1)));
} else
{{
var G__9383 = cljs.core.rest.call(null,s__9352__$1);
s__9352__$1 = G__9383;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7095__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.plugins.user_plugins_dir,lt.objs.plugins.plugins_dir], null));
})());
};
var plugin_dir = function (var_args){
var names = null;if (arguments.length > 0) {
  names = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return plugin_dir__delegate.call(this,names);};
plugin_dir.cljs$lang$maxFixedArity = 0;
plugin_dir.cljs$lang$applyTo = (function (arglist__9384){
var names = cljs.core.seq(arglist__9384);
return plugin_dir__delegate(names);
});
plugin_dir.cljs$core$IFn$_invoke$arity$variadic = plugin_dir__delegate;
return plugin_dir;
})()
;
lt.objs.langs.julia.util.jl_plugin_dir = lt.objs.langs.julia.util.plugin_dir.call(null,"Julia-LT","Julia");
lt.objs.langs.julia.util.call_me_maybe = (function call_me_maybe(f){if(cljs.core.truth_(f))
{return f.call(null);
} else
{return null;
}
});
lt.objs.langs.julia.util.exec = (function exec(sh){return require("child_process").exec(sh,(function (err,stdout,stderr){if(cljs.core.truth_(err))
{return lt.objs.console.log.call(null,err,"error");
} else
{return null;
}
}));
});
lt.objs.langs.julia.util.escape_quotes = (function escape_quotes(s){return clojure.string.replace.call(null,s,"\"","\\\"");
});
if(cljs.core.truth_(lt.objs.platform.mac_QMARK_.call(null)))
{lt.objs.langs.julia.util.escape_path = (function escape_path(path){return [cljs.core.str("\""),cljs.core.str(path),cljs.core.str("\"")].join('');
});
lt.objs.langs.julia.util.activate_term = (function activate_term(){return lt.objs.langs.julia.util.exec.call(null,"osascript -e 'tell application \"Terminal\" to activate'");
});
lt.objs.langs.julia.util.term_sh = (function term_sh(sh){return [cljs.core.str("osascript -e 'tell application \"Terminal\" to do script \""),cljs.core.str(lt.objs.langs.julia.util.escape_quotes.call(null,sh)),cljs.core.str("\"'")].join('');
});
lt.objs.langs.julia.util.term = (function term(sh){lt.objs.langs.julia.util.activate_term.call(null);
return lt.objs.langs.julia.util.exec.call(null,lt.objs.langs.julia.util.term_sh.call(null,sh));
});
} else
{}
if(cljs.core.truth_(lt.objs.platform.win_QMARK_.call(null)))
{lt.objs.langs.julia.util.escape_path = (function escape_path(path){return clojure.string.replace.call(null,path,/([^\\\/]* [^\\\/]*)/,"\"$1\"");
});
lt.objs.langs.julia.util.term_sh = (function term_sh(sh){return [cljs.core.str("cmd /C start cmd /C "),cljs.core.str(sh)].join('');
});
lt.objs.langs.julia.util.term = (function term(sh){return lt.objs.langs.julia.util.exec.call(null,lt.objs.langs.julia.util.term_sh.call(null,sh));
});
} else
{}
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia')) {
goog.provide('lt.objs.langs.julia');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.popup');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.popup');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.objs.langs.julia.__BEH__commands = (function __BEH__commands(editor,res){var pred__8245 = cljs.core._EQ_;var expr__8246 = res.call(null,new cljs.core.Keyword(null,"cmd","cmd",1014002860));if(cljs.core.truth_(pred__8245.call(null,"popup",expr__8246)))
{return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),res.call(null,new cljs.core.Keyword(null,"header","header",4087600639)),new cljs.core.Keyword(null,"body","body",1016933652),res.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"buttons","buttons",1255256819),res.call(null,new cljs.core.Keyword(null,"buttons","buttons",1255256819))], null));
} else
{if(cljs.core.truth_(pred__8245.call(null,"print",expr__8246)))
{return lt.objs.console.log.call(null,res.call(null,new cljs.core.Keyword(null,"value","value",1125876963)),(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))?"error":null));
} else
{if(cljs.core.truth_(pred__8245.call(null,"done",expr__8246)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659))))
{return lt.objs.notifos.done_working.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)));
} else
{return lt.objs.notifos.done_working.call(null);
}
} else
{if(cljs.core.truth_(pred__8245.call(null,"notify",expr__8246)))
{return lt.objs.notifos.set_msg_BANG_.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),res.call(null,new cljs.core.Keyword(null,"class","class",1108647146))], null));
} else
{if(cljs.core.truth_(pred__8245.call(null,"console",expr__8246)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469))))
{var val = crate.core.raw.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));var scripts = lt.objs.langs.julia.util.get_scripts.call(null,val);lt.objs.console.verbatim.call(null,val);
return lt.objs.langs.julia.util.eval_scripts.call(null,scripts);
} else
{return lt.objs.console.log.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));
}
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8246)].join('')));
}
}
}
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","commands","lt.objs.langs.julia/commands",666378463),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__commands,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.julia.command","editor.eval.julia.command",3568027511),null], null), null));
lt.objs.langs.julia.__BEH__popup = (function __BEH__popup(this$,res){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),res.call(null,new cljs.core.Keyword(null,"header","header",4087600639)),new cljs.core.Keyword(null,"body","body",1016933652),res.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"buttons","buttons",1255256819),res.call(null,new cljs.core.Keyword(null,"buttons","buttons",1255256819))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","popup","lt.objs.langs.julia/popup",1577076475),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__popup,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"popup","popup",1120756766),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","julia-lang","lt.objs.langs.julia/julia-lang",1798349361),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.lang","julia.lang",1405919445),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia","commands","lt.objs.langs.julia/commands",666378463),new cljs.core.Keyword("lt.objs.langs.julia","popup","lt.objs.langs.julia/popup",1577076475)], null));
lt.objs.langs.julia.julia = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia","julia-lang","lt.objs.langs.julia/julia-lang",1798349361));
lt.objs.langs.julia.__BEH__julia_path = (function __BEH__julia_path(this$,exe){return lt.object.merge_BANG_.call(null,lt.objs.langs.julia.julia,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),exe], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","julia-path","lt.objs.langs.julia/julia-path",1798520688),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__julia_path,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Set the path to the Julia executable",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"path",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"path","path",1017337751)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.objs.langs.julia.__BEH__dark_theme = (function __BEH__dark_theme(app){return lt.util.dom.add_class.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"julia-dark","julia-dark",1404757724));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","dark-theme","lt.objs.langs.julia/dark-theme",2540019457),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__dark_theme,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Use a dark theme",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia","light-theme","lt.objs.langs.julia/light-theme",2033198497)], null));
lt.objs.langs.julia.__BEH__light_theme = (function __BEH__light_theme(app){return lt.util.dom.remove_class.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"julia-dark","julia-dark",1404757724));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","light-theme","lt.objs.langs.julia/light-theme",2033198497),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__light_theme,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Use a light theme",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia","dark-theme","lt.objs.langs.julia/dark-theme",2540019457)], null));
lt.objs.langs.julia.process = (function process__$1(node){return lt.plugins.runmode.process_BANG_.call(null,lt.objs.file_links.process_BANG_.call(null,node));
});
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.proc')) {
goog.provide('lt.objs.langs.julia.proc');
goog.require('cljs.core');
goog.require('lt.objs.langs.julia');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.popup');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.langs.julia');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.langs.julia');
lt.objs.langs.julia.proc.__BEH__proc_out = (function __BEH__proc_out(this$,data){if(cljs.core.truth_(cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"connected","connected",4729661051))))
{return null;
} else
{var out = data.toString();return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,out);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-out","lt.objs.langs.julia.proc/proc-out",3354081193),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__proc_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.objs.langs.julia.proc.__BEH__proc_error = (function __BEH__proc_error(this$,data){if(cljs.core.truth_(cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"connected","connected",4729661051))))
{return null;
} else
{var out = data.toString();return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,out);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-error","lt.objs.langs.julia.proc/proc-error",3670223651),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__proc_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.objs.langs.julia.proc.__BEH__proc_exit = (function __BEH__proc_exit(this$,data){if(cljs.core.truth_(cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"connected","connected",4729661051))))
{} else
{lt.objs.notifos.done_working.call(null,"");
if(cljs.core.truth_(new cljs.core.Keyword(null,"complain","complain",4709422171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Couldn't connect to Julia",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Close"], null)], null)], null));
} else
{}
lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
lt.objs.proc.kill_all.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-exit","lt.objs.langs.julia.proc/proc-exit",3482355335),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__proc_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
/**
* @param {...*} var_args
*/
lt.objs.langs.julia.proc.log = (function() { 
var log__delegate = function (l,p__9019){var vec__9021 = p__9019;var class$ = cljs.core.nth.call(null,vec__9021,0,null);return lt.objs.console.log.call(null,l,class$);
};
var log = function (l,var_args){
var p__9019 = null;if (arguments.length > 1) {
  p__9019 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,l,p__9019);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__9053){
var l = cljs.core.first(arglist__9053);
var p__9019 = cljs.core.rest(arglist__9053);
return log__delegate(l,p__9019);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
lt.objs.langs.julia.proc.__BEH__pipe_out = (function __BEH__pipe_out(this$,data){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633)], null),cljs.core.str,data);
var out = cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633));if(cljs.core._EQ_.call(null,cljs.core.last.call(null,out),"\n"))
{lt.objs.langs.julia.proc.log.call(null,out);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633),""], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-out","lt.objs.langs.julia.proc/pipe-out",2913224961),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__pipe_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.objs.langs.julia.proc.__BEH__pipe_err = (function __BEH__pipe_err(this$,data){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106)], null),cljs.core.str,data);
var out = cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106));if(cljs.core._EQ_.call(null,cljs.core.last.call(null,out),"\n"))
{lt.objs.langs.julia.proc.log.call(null,out,"error");
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106),""], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-err","lt.objs.langs.julia.proc/pipe-err",2913231640),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__pipe_err,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.objs.langs.julia.proc.__BEH__flush = (function __BEH__flush(this$){if(cljs.core.truth_(cljs.core.deref.call(null,this$)))
{var temp__4092__auto___9054 = cljs.core.not_empty.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633)));if(cljs.core.truth_(temp__4092__auto___9054))
{var out_9055 = temp__4092__auto___9054;lt.objs.langs.julia.proc.log.call(null,out_9055);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633),""], null));
} else
{}
var temp__4092__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106)));if(cljs.core.truth_(temp__4092__auto__))
{var out = temp__4092__auto__;lt.objs.langs.julia.proc.log.call(null,out,"error");
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106),""], null));
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","flush","lt.objs.langs.julia.proc/flush",4458423382),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__flush,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null,new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),500);
lt.objs.langs.julia.proc.__BEH__connected = (function __BEH__connected(this$){if(cljs.core.truth_(cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"notify","notify",4269181627))))
{lt.objs.notifos.done_working.call(null,"Connected to Julia");
} else
{}
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
return lt.objs.langs.julia.proc.set_default_client.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"client","client",3951159101)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connected","lt.objs.langs.julia.proc/connected",2976410715),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__connected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connecting-notifier","lt.objs.langs.julia.proc/connecting-notifier",4154824301),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.connection-watch","julia.connection-watch",2982527111),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-out","lt.objs.langs.julia.proc/proc-out",3354081193),new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-error","lt.objs.langs.julia.proc/proc-error",3670223651),new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-exit","lt.objs.langs.julia.proc/proc-exit",3482355335),new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-out","lt.objs.langs.julia.proc/pipe-out",2913224961),new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-err","lt.objs.langs.julia.proc/pipe-err",2913231640),new cljs.core.Keyword("lt.objs.langs.julia.proc","flush","lt.objs.langs.julia.proc/flush",4458423382),new cljs.core.Keyword("lt.objs.langs.julia.proc","connected","lt.objs.langs.julia.proc/connected",2976410715)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return null;
}));
lt.objs.langs.julia.proc.with_dir = (function with_dir(dir,f){var dir_SINGLEQUOTE_ = process.cwd();process.chdir(dir);
f.call(null);
return process.chdir(dir_SINGLEQUOTE_);
});
lt.objs.langs.julia.proc.init = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"jl","init.jl");
lt.objs.langs.julia.proc.built_in_path = (function built_in_path(){var path = lt.objs.files.join.call(null,lt.objs.files.lt_home.call(null),"julia","bin",(cljs.core.truth_(lt.objs.platform.win_QMARK_.call(null))?"julia.exe":"julia"));if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,path)))
{return path;
} else
{return null;
}
});
lt.objs.langs.julia.proc.julia_path = (function julia_path(){var or__6378__auto__ = cljs.core.deref.call(null,lt.objs.langs.julia.julia).call(null,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{var or__6378__auto____$1 = lt.objs.langs.julia.proc.built_in_path.call(null);if(cljs.core.truth_(or__6378__auto____$1))
{return or__6378__auto____$1;
} else
{return "julia";
}
}
});
lt.objs.langs.julia.proc.init_client = (function init_client(client,event_obj){lt.object.merge_BANG_.call(null,event_obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client","client",3951159101),client], null));
lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"notify-connected","notify-connected",2327812343),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"only","only",1017320222),event_obj);
return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"julia.set-global-client","julia.set-global-client",3983623463),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"only","only",1017320222),lt.objs.langs.julia.julia);
});
/**
* @param {...*} var_args
*/
lt.objs.langs.julia.proc.connect = (function() { 
var connect__delegate = function (p__9022){var map__9024 = p__9022;var map__9024__$1 = ((cljs.core.seq_QMARK_.call(null,map__9024))?cljs.core.apply.call(null,cljs.core.hash_map,map__9024):map__9024);var complain = cljs.core.get.call(null,map__9024__$1,new cljs.core.Keyword(null,"complain","complain",4709422171),true);var notify = cljs.core.get.call(null,map__9024__$1,new cljs.core.Keyword(null,"notify","notify",4269181627),false);if(cljs.core.truth_(notify))
{lt.objs.notifos.working.call(null,"Spinning up Julia...");
} else
{}
var path = lt.objs.langs.julia.proc.julia_path.call(null);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"julia.client","julia.client",3830708594));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connecting-notifier","lt.objs.langs.julia.proc/connecting-notifier",4154824301),client);lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"notify","notify",4269181627),notify,new cljs.core.Keyword(null,"complain","complain",4709422171),complain], null));
lt.objs.langs.julia.proc.with_dir.call(null,lt.objs.files.home.call(null),((function (path,client,obj,map__9024,map__9024__$1,complain,notify){
return (function (){return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),path,new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-i",lt.objs.langs.julia.proc.init,lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client)], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});})(path,client,obj,map__9024,map__9024__$1,complain,notify))
);
lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.first.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))], null));
lt.objs.langs.julia.proc.init_client.call(null,client,obj);
return client;
};
var connect = function (var_args){
var p__9022 = null;if (arguments.length > 0) {
  p__9022 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return connect__delegate.call(this,p__9022);};
connect.cljs$lang$maxFixedArity = 0;
connect.cljs$lang$applyTo = (function (arglist__9056){
var p__9022 = cljs.core.seq(arglist__9056);
return connect__delegate(p__9022);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
lt.objs.langs.julia.proc.manual_notifier = (function (){var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connecting-notifier","lt.objs.langs.julia.proc/connecting-notifier",4154824301));lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notify","notify",4269181627),true], null));
return obj;
})();
lt.objs.langs.julia.proc.connect_manual = (function connect_manual(){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"julia.client","julia.client",3830708594));var connect_str = [cljs.core.str("using Jewel; @async Jewel.server("),cljs.core.str(lt.objs.clients.tcp.port),cljs.core.str(", "),cljs.core.str(lt.objs.clients.__GT_id.call(null,client)),cljs.core.str(")")].join('');lt.objs.notifos.working.call(null);
lt.objs.platform.copy.call(null,connect_str);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Connect Julia to Light Table",new cljs.core.Keyword(null,"body","body",1016933652),crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),connect_str], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"(This has been copied to your clipboard)"], null)),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null));
lt.objs.langs.julia.proc.init_client.call(null,client,lt.objs.langs.julia.proc.manual_notifier);
return client;
});
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Julia (manual)",new cljs.core.Keyword(null,"desc","desc",1016984067),"Connect to a running Julia session",new cljs.core.Keyword(null,"connect","connect",1965255772),lt.objs.langs.julia.proc.connect_manual], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"julia.connect-manual","julia.connect-manual",2800017072),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Connect to a running session",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.objs.langs.julia.proc.connect_manual], null));
if(cljs.core.truth_(lt.objs.langs.julia.util.term))
{lt.objs.langs.julia.proc.spawn_terminal = (function spawn_terminal(){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"julia.client","julia.client",3830708594));lt.objs.notifos.working.call(null);
lt.objs.langs.julia.util.term.call(null,[cljs.core.str(lt.objs.langs.julia.util.escape_path.call(null,lt.objs.langs.julia.proc.julia_path.call(null))),cljs.core.str(" -P \"using Jewel; @async Jewel.server("),cljs.core.str(lt.objs.clients.tcp.port),cljs.core.str(", "),cljs.core.str(lt.objs.clients.__GT_id.call(null,client)),cljs.core.str(")\"")].join(''));
lt.objs.langs.julia.proc.init_client.call(null,client,lt.objs.langs.julia.proc.manual_notifier);
return client;
});
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"julia.terminal-client.new","julia.terminal-client.new",2922527819),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Spawn a Terminal-based client",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.objs.langs.julia.proc.spawn_terminal], null));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Julia REPL",new cljs.core.Keyword(null,"desc","desc",1016984067),"Spawn a connected Julia REPL",new cljs.core.Keyword(null,"connect","connect",1965255772),lt.objs.langs.julia.proc.connect_manual], null));
} else
{}
lt.objs.langs.julia.proc.wait_until = (function wait_until(cond,callback){if(cljs.core.truth_(cond.call(null)))
{return callback.call(null);
} else
{return setTimeout((function (){return wait_until.call(null,cond,callback);
}),100);
}
});
lt.objs.langs.julia.proc.when_connect = (function when_connect(cb){return lt.objs.langs.julia.proc.wait_until.call(null,(function (){return (cljs.core.not_EQ_.call(null,lt.objs.clients.tcp.port,0)) && ((cljs.core.not.call(null,lt.objs.platform.mac_QMARK_.call(null))) || ((process.env.PATH.indexOf("local") > -1)));
}),cb);
});
lt.objs.langs.julia.proc.__BEH__connect_on_startup = (function __BEH__connect_on_startup(){return lt.objs.langs.julia.proc.when_connect.call(null,(function (){return lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.eval","editor.julia.eval",4568286884),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"origin","origin",4300251800),lt.objs.langs.julia.julia,new cljs.core.Keyword(null,"create","create",3956577390),(function (){return lt.objs.langs.julia.proc.connect.call(null,new cljs.core.Keyword(null,"notify","notify",4269181627),true);
})], null));
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connect-on-startup","lt.objs.langs.julia.proc/connect-on-startup",4556282532),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__connect_on_startup,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Spin up a client when Light Table starts",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-init","post-init",2970371471),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.objs.langs.julia.proc.default_client_STAR_ = null;
lt.objs.langs.julia.proc.default_client = (function default_client(){var temp__4092__auto__ = lt.objs.langs.julia.proc.default_client_STAR_;if(cljs.core.truth_(temp__4092__auto__))
{var client = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return client;
} else
{return null;
}
} else
{return null;
}
});
lt.objs.langs.julia.proc.set_default_client = (function set_default_client(client){if(cljs.core.truth_(lt.objs.langs.julia.proc.default_client.call(null)))
{return null;
} else
{lt.objs.langs.julia.proc.default_client_STAR_ = client;
var seq__9029 = cljs.core.seq.call(null,lt.objs.editor.pool.get_all.call(null));var chunk__9030 = null;var count__9031 = 0;var i__9032 = 0;while(true){
if((i__9032 < count__9031))
{var editor = cljs.core._nth.call(null,chunk__9030,i__9032);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),client);
{
var G__9057 = seq__9029;
var G__9058 = chunk__9030;
var G__9059 = count__9031;
var G__9060 = (i__9032 + 1);
seq__9029 = G__9057;
chunk__9030 = G__9058;
count__9031 = G__9059;
i__9032 = G__9060;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9029);if(temp__4092__auto__)
{var seq__9029__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9029__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__9029__$1);{
var G__9061 = cljs.core.chunk_rest.call(null,seq__9029__$1);
var G__9062 = c__7126__auto__;
var G__9063 = cljs.core.count.call(null,c__7126__auto__);
var G__9064 = 0;
seq__9029 = G__9061;
chunk__9030 = G__9062;
count__9031 = G__9063;
i__9032 = G__9064;
continue;
}
} else
{var editor = cljs.core.first.call(null,seq__9029__$1);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),client);
{
var G__9065 = cljs.core.next.call(null,seq__9029__$1);
var G__9066 = null;
var G__9067 = 0;
var G__9068 = 0;
seq__9029 = G__9065;
chunk__9030 = G__9066;
count__9031 = G__9067;
i__9032 = G__9068;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});
lt.objs.langs.julia.proc.connect_client = (function connect_client(editor,client){if(cljs.core.truth_((function (){var G__9034 = cljs.core.deref.call(null,editor);var G__9034__$1 = (((G__9034 == null))?null:new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(G__9034));var G__9034__$2 = (((G__9034__$1 == null))?null:new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(G__9034__$1));var G__9034__$3 = (((G__9034__$2 == null))?null:cljs.core.deref.call(null,G__9034__$2));var G__9034__$4 = (((G__9034__$3 == null))?null:new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(G__9034__$3));return G__9034__$4;
})()))
{return null;
} else
{lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",3951159101),new cljs.core.Keyword(null,"default","default",2558708147)], null),cljs.core.constantly.call(null,client));
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"set-client","set-client",2248164104),client);
}
});
lt.objs.langs.julia.proc.connect_default_client = (function connect_default_client(editor){var temp__4092__auto__ = lt.objs.langs.julia.proc.default_client.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var client = temp__4092__auto__;return lt.objs.langs.julia.proc.connect_client.call(null,editor,client);
} else
{return null;
}
});
lt.objs.langs.julia.proc.__BEH__connect_on_open = (function __BEH__connect_on_open(editor){return lt.objs.langs.julia.proc.connect_default_client.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connect-on-open","lt.objs.langs.julia.proc/connect-on-open",3288500199),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__connect_on_open,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Connect new editors to the default Julia client",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.langs.julia.proc.__BEH__attach_on_connect = (function __BEH__attach_on_connect(editor,client){return lt.objs.langs.julia.proc.connect_client.call(null,editor,client);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","attach-on-connect","lt.objs.langs.julia.proc/attach-on-connect",3664507862),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__attach_on_connect,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Connect editors when a default Julia client is created",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.langs.julia.proc.get_proc = (function get_proc(ed){var or__6378__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.map.call(null,cljs.core.deref,cljs.core.vals.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))))));if(or__6378__auto__)
{return or__6378__auto__;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.julia.proc.default_client.call(null)))], null);
}
});
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.interrupt-clients","editor.interrupt-clients",3910900175),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Interrupt the current client",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var seq__9035_9069 = cljs.core.seq.call(null,lt.objs.langs.julia.proc.get_proc.call(null,ed));var chunk__9036_9070 = null;var count__9037_9071 = 0;var i__9038_9072 = 0;while(true){
if((i__9038_9072 < count__9037_9071))
{var proc_9073 = cljs.core._nth.call(null,chunk__9036_9070,i__9038_9072);proc_9073.kill("SIGINT");
{
var G__9074 = seq__9035_9069;
var G__9075 = chunk__9036_9070;
var G__9076 = count__9037_9071;
var G__9077 = (i__9038_9072 + 1);
seq__9035_9069 = G__9074;
chunk__9036_9070 = G__9075;
count__9037_9071 = G__9076;
i__9038_9072 = G__9077;
continue;
}
} else
{var temp__4092__auto___9078__$1 = cljs.core.seq.call(null,seq__9035_9069);if(temp__4092__auto___9078__$1)
{var seq__9035_9079__$1 = temp__4092__auto___9078__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9035_9079__$1))
{var c__7126__auto___9080 = cljs.core.chunk_first.call(null,seq__9035_9079__$1);{
var G__9081 = cljs.core.chunk_rest.call(null,seq__9035_9079__$1);
var G__9082 = c__7126__auto___9080;
var G__9083 = cljs.core.count.call(null,c__7126__auto___9080);
var G__9084 = 0;
seq__9035_9069 = G__9081;
chunk__9036_9070 = G__9082;
count__9037_9071 = G__9083;
i__9038_9072 = G__9084;
continue;
}
} else
{var proc_9085 = cljs.core.first.call(null,seq__9035_9079__$1);proc_9085.kill("SIGINT");
{
var G__9086 = cljs.core.next.call(null,seq__9035_9079__$1);
var G__9087 = null;
var G__9088 = 0;
var G__9089 = 0;
seq__9035_9069 = G__9086;
chunk__9036_9070 = G__9087;
count__9037_9071 = G__9088;
i__9038_9072 = G__9089;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.notifos.done_working.call(null);
} else
{return null;
}
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.kill-clients","editor.kill-clients",916643052),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Kill the current client",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var seq__9039_9090 = cljs.core.seq.call(null,lt.objs.langs.julia.proc.get_proc.call(null,ed));var chunk__9040_9091 = null;var count__9041_9092 = 0;var i__9042_9093 = 0;while(true){
if((i__9042_9093 < count__9041_9092))
{var proc_9094 = cljs.core._nth.call(null,chunk__9040_9091,i__9042_9093);proc_9094.kill();
{
var G__9095 = seq__9039_9090;
var G__9096 = chunk__9040_9091;
var G__9097 = count__9041_9092;
var G__9098 = (i__9042_9093 + 1);
seq__9039_9090 = G__9095;
chunk__9040_9091 = G__9096;
count__9041_9092 = G__9097;
i__9042_9093 = G__9098;
continue;
}
} else
{var temp__4092__auto___9099__$1 = cljs.core.seq.call(null,seq__9039_9090);if(temp__4092__auto___9099__$1)
{var seq__9039_9100__$1 = temp__4092__auto___9099__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9039_9100__$1))
{var c__7126__auto___9101 = cljs.core.chunk_first.call(null,seq__9039_9100__$1);{
var G__9102 = cljs.core.chunk_rest.call(null,seq__9039_9100__$1);
var G__9103 = c__7126__auto___9101;
var G__9104 = cljs.core.count.call(null,c__7126__auto___9101);
var G__9105 = 0;
seq__9039_9090 = G__9102;
chunk__9040_9091 = G__9103;
count__9041_9092 = G__9104;
i__9042_9093 = G__9105;
continue;
}
} else
{var proc_9106 = cljs.core.first.call(null,seq__9039_9100__$1);proc_9106.kill();
{
var G__9107 = cljs.core.next.call(null,seq__9039_9100__$1);
var G__9108 = null;
var G__9109 = 0;
var G__9110 = 0;
seq__9039_9090 = G__9107;
chunk__9040_9091 = G__9108;
count__9041_9092 = G__9109;
i__9042_9093 = G__9110;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.notifos.done_working.call(null);
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.julia.commands')) {
goog.provide('lt.objs.julia.commands');
goog.require('cljs.core');
goog.require('lt.objs.langs.julia');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.langs.julia');
lt.objs.julia.commands.cb_id = cljs.core.atom.call(null,0);
lt.objs.julia.commands.cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.objs.julia.commands.__BEH__get_block = (function __BEH__get_block(editor,cb){var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.block","editor.block",3174842430),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null));var id = cljs.core.swap_BANG_.call(null,lt.objs.julia.commands.cb_id,cljs.core.inc);cljs.core.swap_BANG_.call(null,lt.objs.julia.commands.cbs,cljs.core.assoc,id,cb);
return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"editor.block","editor.block",3174842430),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor)) + 1),new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.julia.commands","get-block","lt.objs.julia.commands/get-block",4604158297),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.julia.commands.__BEH__get_block,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"get-block","get-block",713229000),null], null), null));
lt.objs.julia.commands.__BEH__return_block = (function __BEH__return_block(editor,p__8690){var map__8692 = p__8690;var map__8692__$1 = ((cljs.core.seq_QMARK_.call(null,map__8692))?cljs.core.apply.call(null,cljs.core.hash_map,map__8692):map__8692);var block = cljs.core.get.call(null,map__8692__$1,new cljs.core.Keyword(null,"block","block",1107736575));var bounds = cljs.core.get.call(null,map__8692__$1,new cljs.core.Keyword(null,"bounds","bounds",3925666343));var id = cljs.core.get.call(null,map__8692__$1,new cljs.core.Keyword(null,"id","id",1013907597));var cb = cljs.core.deref.call(null,lt.objs.julia.commands.cbs).call(null,id);cljs.core.swap_BANG_.call(null,lt.objs.julia.commands.cbs,cljs.core.dissoc,id);
return cb.call(null,bounds,block);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.julia.commands","return-block","lt.objs.julia.commands/return-block",4630789891),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.julia.commands.__BEH__return_block,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return-block","return-block",736650530),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.get-block","editor.get-block",2200720263),new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: get the current code block",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (cb){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"get-block","get-block",713229000),cb);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.select-block","editor.select-block",4624668367),new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Select the current code block",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.get-block","editor.get-block",2200720263),((function (ed,temp__4092__auto__){
return (function (p__8693,block){var vec__8694 = p__8693;var start = cljs.core.nth.call(null,vec__8694,0,null);var end = cljs.core.nth.call(null,vec__8694,1,null);return lt.objs.editor.set_selection.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(start - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(end - 1)], null));
});})(ed,temp__4092__auto__))
);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"eval.one.move","eval.one.move",1956051677),new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Eval and go to next block",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),true);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"julia.new","julia.new",610909949),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Open a blank file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"new-file","new-file",2344641787));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"set-syntax","set-syntax",2718399264),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"Julia",new cljs.core.Keyword(null,"exts","exts",1017032164),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jl","jl",1013907636)], null),new cljs.core.Keyword(null,"mime","mime",1017255846),"text/julia",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.julia","editor.julia",3182496010)], null)], null));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"bio.blog.open","bio.blog.open",1582612258),new cljs.core.Keyword(null,"desc","desc",1016984067),"Biology: Open a blog",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.platform.open_url.call(null,"http://wormchurn.wordpress.com/");
})], null));
if(cljs.core.truth_(lt.objs.langs.julia.util.term))
{lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"julia.repl.new","julia.repl.new",793242376),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Open a new Terminal REPL",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.langs.julia.util.term.call(null,lt.objs.langs.julia.util.escape_path.call(null,lt.objs.langs.julia.proc.julia_path.call(null)));
})], null));
} else
{}
lt.objs.julia.commands.touch_me_maybe = (function touch_me_maybe(path){if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,path)))
{} else
{lt.objs.files.save.call(null,path,"");
}
return path;
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"juliarc.open","juliarc.open",3994347488),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Open Julia startup code (juliarc.jl)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),lt.objs.julia.commands.touch_me_maybe.call(null,lt.objs.files.home.call(null,".juliarc.jl")));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user-dir.open","user-dir.open",1438468671),new cljs.core.Keyword(null,"desc","desc",1016984067),"Settings: Open Settings Directory",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.platform.open.call(null,lt.objs.files.lt_user_dir.call(null));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"julia.pkg-dir.open","julia.pkg-dir.open",4062284755),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Open Package Directory",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.platform.open.call(null,lt.objs.files.home.call(null,".julia"));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"julia.cwd","julia.cwd",610899917),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Set the current working directory here",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (path){var ed = lt.objs.editor.pool.last_active.call(null);var client = (cljs.core.truth_(new cljs.core.Keyword(null,"julia","julia",1115390155).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))?lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"julia.cwd","julia.cwd",610899917),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null)):lt.objs.langs.julia.proc.default_client.call(null));return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"cwd","cwd",1014003170),(function (){var or__6378__auto__ = path;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
}
})());
})], null));
}
if(!lt.util.load.provided_QMARK_('crate.binding')) {
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__6945__auto__,writer__6946__auto__,opt__6947__auto__){return cljs.core._write.call(null,writer__6946__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8515 = cljs.core.seq.call(null,self__.watches);var chunk__8516 = null;var count__8517 = 0;var i__8518 = 0;while(true){
if((i__8518 < count__8517))
{var vec__8519 = cljs.core._nth.call(null,chunk__8516,i__8518);var key__$1 = cljs.core.nth.call(null,vec__8519,0,null);var f = cljs.core.nth.call(null,vec__8519,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8594 = seq__8515;
var G__8595 = chunk__8516;
var G__8596 = count__8517;
var G__8597 = (i__8518 + 1);
seq__8515 = G__8594;
chunk__8516 = G__8595;
count__8517 = G__8596;
i__8518 = G__8597;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8515);if(temp__4092__auto__)
{var seq__8515__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8515__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8515__$1);{
var G__8598 = cljs.core.chunk_rest.call(null,seq__8515__$1);
var G__8599 = c__7126__auto__;
var G__8600 = cljs.core.count.call(null,c__7126__auto__);
var G__8601 = 0;
seq__8515 = G__8598;
chunk__8516 = G__8599;
count__8517 = G__8600;
i__8518 = G__8601;
continue;
}
} else
{var vec__8520 = cljs.core.first.call(null,seq__8515__$1);var key__$1 = cljs.core.nth.call(null,vec__8520,0,null);var f = cljs.core.nth.call(null,vec__8520,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8602 = cljs.core.next.call(null,seq__8515__$1);
var G__8603 = null;
var G__8604 = 0;
var G__8605 = 0;
seq__8515 = G__8602;
chunk__8516 = G__8603;
count__8517 = G__8604;
i__8518 = G__8605;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.atm))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__8522 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__8522,0,null);var path__$2 = cljs.core.nth.call(null,vec__8522,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__8522,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__8522,atm__$1,path__$2,k,sa))
);
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__8606__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8606 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__8606__delegate.call(this,sa,f,x,y,z,more);};
G__8606.cljs$lang$maxFixedArity = 5;
G__8606.cljs$lang$applyTo = (function (arglist__8607){
var sa = cljs.core.first(arglist__8607);
arglist__8607 = cljs.core.next(arglist__8607);
var f = cljs.core.first(arglist__8607);
arglist__8607 = cljs.core.next(arglist__8607);
var x = cljs.core.first(arglist__8607);
arglist__8607 = cljs.core.next(arglist__8607);
var y = cljs.core.first(arglist__8607);
arglist__8607 = cljs.core.next(arglist__8607);
var z = cljs.core.first(arglist__8607);
var more = cljs.core.rest(arglist__8607);
return G__8606__delegate(sa,f,x,y,z,more);
});
G__8606.cljs$core$IFn$_invoke$arity$variadic = G__8606__delegate;
return G__8606;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj8524 = {};return obj8524;
})();
crate.binding._depend = (function _depend(this$,atm){if((function (){var and__6366__auto__ = this$;if(and__6366__auto__)
{return this$.crate$binding$computable$_depend$arity$2;
} else
{return and__6366__auto__;
}
})())
{return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else
{var x__7005__auto__ = (((this$ == null))?null:this$);return (function (){var or__6378__auto__ = (crate.binding._depend[goog.typeOf(x__7005__auto__)]);if(or__6378__auto__)
{return or__6378__auto__;
} else
{var or__6378__auto____$1 = (crate.binding._depend["_"]);if(or__6378__auto____$1)
{return or__6378__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-depend",this$);
}
}
})().call(null,this$,atm);
}
});
crate.binding._compute = (function _compute(this$){if((function (){var and__6366__auto__ = this$;if(and__6366__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__6366__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__7005__auto__ = (((this$ == null))?null:this$);return (function (){var or__6378__auto__ = (crate.binding._compute[goog.typeOf(x__7005__auto__)]);if(or__6378__auto__)
{return or__6378__auto__;
} else
{var or__6378__auto____$1 = (crate.binding._compute["_"]);if(or__6378__auto____$1)
{return or__6378__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key,meta){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__6945__auto__,writer__6946__auto__,opt__6947__auto__){return cljs.core._write.call(null,writer__6946__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_depend$arity$2 = (function (this$,atm){var self__ = this;
var this$__$1 = this;this$__$1.atms = cljs.core.conj.call(null,this$__$1.atms,atm);
return cljs.core.add_watch.call(null,atm,self__.key,((function (this$__$1){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,this$__$1);
});})(this$__$1))
);
});
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;var nv = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));this$__$1.value = nv;
return cljs.core._notify_watches.call(null,this$__$1,old,nv);
});
crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8525 = cljs.core.seq.call(null,self__.watches);var chunk__8526 = null;var count__8527 = 0;var i__8528 = 0;while(true){
if((i__8528 < count__8527))
{var vec__8529 = cljs.core._nth.call(null,chunk__8526,i__8528);var key__$1 = cljs.core.nth.call(null,vec__8529,0,null);var f = cljs.core.nth.call(null,vec__8529,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8608 = seq__8525;
var G__8609 = chunk__8526;
var G__8610 = count__8527;
var G__8611 = (i__8528 + 1);
seq__8525 = G__8608;
chunk__8526 = G__8609;
count__8527 = G__8610;
i__8528 = G__8611;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8525);if(temp__4092__auto__)
{var seq__8525__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8525__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8525__$1);{
var G__8612 = cljs.core.chunk_rest.call(null,seq__8525__$1);
var G__8613 = c__7126__auto__;
var G__8614 = cljs.core.count.call(null,c__7126__auto__);
var G__8615 = 0;
seq__8525 = G__8612;
chunk__8526 = G__8613;
count__8527 = G__8614;
i__8528 = G__8615;
continue;
}
} else
{var vec__8530 = cljs.core.first.call(null,seq__8525__$1);var key__$1 = cljs.core.nth.call(null,vec__8530,0,null);var f = cljs.core.nth.call(null,vec__8530,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8616 = cljs.core.next.call(null,seq__8525__$1);
var G__8617 = null;
var G__8618 = 0;
var G__8619 = 0;
seq__8525 = G__8616;
chunk__8526 = G__8617;
count__8527 = G__8618;
i__8528 = G__8619;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key,meta){return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));crate.binding._compute.call(null,neue);
var seq__8535_8620 = cljs.core.seq.call(null,atms);var chunk__8536_8621 = null;var count__8537_8622 = 0;var i__8538_8623 = 0;while(true){
if((i__8538_8623 < count__8537_8622))
{var atm_8624 = cljs.core._nth.call(null,chunk__8536_8621,i__8538_8623);crate.binding._depend.call(null,neue,atm_8624);
{
var G__8625 = seq__8535_8620;
var G__8626 = chunk__8536_8621;
var G__8627 = count__8537_8622;
var G__8628 = (i__8538_8623 + 1);
seq__8535_8620 = G__8625;
chunk__8536_8621 = G__8626;
count__8537_8622 = G__8627;
i__8538_8623 = G__8628;
continue;
}
} else
{var temp__4092__auto___8629 = cljs.core.seq.call(null,seq__8535_8620);if(temp__4092__auto___8629)
{var seq__8535_8630__$1 = temp__4092__auto___8629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8535_8630__$1))
{var c__7126__auto___8631 = cljs.core.chunk_first.call(null,seq__8535_8630__$1);{
var G__8632 = cljs.core.chunk_rest.call(null,seq__8535_8630__$1);
var G__8633 = c__7126__auto___8631;
var G__8634 = cljs.core.count.call(null,c__7126__auto___8631);
var G__8635 = 0;
seq__8535_8620 = G__8632;
chunk__8536_8621 = G__8633;
count__8537_8622 = G__8634;
i__8538_8623 = G__8635;
continue;
}
} else
{var atm_8636 = cljs.core.first.call(null,seq__8535_8630__$1);crate.binding._depend.call(null,neue,atm_8636);
{
var G__8637 = cljs.core.next.call(null,seq__8535_8630__$1);
var G__8638 = null;
var G__8639 = 0;
var G__8640 = 0;
seq__8535_8620 = G__8637;
chunk__8536_8621 = G__8638;
count__8537_8622 = G__8639;
i__8538_8623 = G__8640;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.compute = (function compute(compu){return crate.binding._compute.call(null,compu);
});
crate.binding.depend_on = (function depend_on(compu,atm){return crate.binding._depend.call(null,compu,atm);
});
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj8540 = {};return obj8540;
})();
crate.binding.bindable = (function (){var obj8542 = {};return obj8542;
})();
crate.binding._value = (function _value(this$){if((function (){var and__6366__auto__ = this$;if(and__6366__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__6366__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__7005__auto__ = (((this$ == null))?null:this$);return (function (){var or__6378__auto__ = (crate.binding._value[goog.typeOf(x__7005__auto__)]);if(or__6378__auto__)
{return or__6378__auto__;
} else
{var or__6378__auto____$1 = (crate.binding._value["_"]);if(or__6378__auto____$1)
{return or__6378__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__6366__auto__ = this$;if(and__6366__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__6366__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__7005__auto__ = (((this$ == null))?null:this$);return (function (){var or__6378__auto__ = (crate.binding._on_change[goog.typeOf(x__7005__auto__)]);if(or__6378__auto__)
{return or__6378__auto__;
} else
{var or__6378__auto____$1 = (crate.binding._on_change["_"]);if(or__6378__auto____$1)
{return or__6378__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__6945__auto__,writer__6946__auto__,opt__6947__auto__){return cljs.core._write.call(null,writer__6946__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__6945__auto__,writer__6946__auto__,opt__6947__auto__){return cljs.core._write.call(null,writer__6946__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8543 = cljs.core.seq.call(null,self__.watches);var chunk__8544 = null;var count__8545 = 0;var i__8546 = 0;while(true){
if((i__8546 < count__8545))
{var vec__8547 = cljs.core._nth.call(null,chunk__8544,i__8546);var key = cljs.core.nth.call(null,vec__8547,0,null);var f = cljs.core.nth.call(null,vec__8547,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8641 = seq__8543;
var G__8642 = chunk__8544;
var G__8643 = count__8545;
var G__8644 = (i__8546 + 1);
seq__8543 = G__8641;
chunk__8544 = G__8642;
count__8545 = G__8643;
i__8546 = G__8644;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8543);if(temp__4092__auto__)
{var seq__8543__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8543__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8543__$1);{
var G__8645 = cljs.core.chunk_rest.call(null,seq__8543__$1);
var G__8646 = c__7126__auto__;
var G__8647 = cljs.core.count.call(null,c__7126__auto__);
var G__8648 = 0;
seq__8543 = G__8645;
chunk__8544 = G__8646;
count__8545 = G__8647;
i__8546 = G__8648;
continue;
}
} else
{var vec__8548 = cljs.core.first.call(null,seq__8543__$1);var key = cljs.core.nth.call(null,vec__8548,0,null);var f = cljs.core.nth.call(null,vec__8548,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8649 = cljs.core.next.call(null,seq__8543__$1);
var G__8650 = null;
var G__8651 = 0;
var G__8652 = 0;
seq__8543 = G__8649;
chunk__8544 = G__8650;
count__8545 = G__8651;
i__8546 = G__8652;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__6945__auto__,writer__6946__auto__,opt__6947__auto__){return cljs.core._write.call(null,writer__6946__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__8549){var vec__8550 = p__8549;var event = cljs.core.nth.call(null,vec__8550,0,null);var el = cljs.core.nth.call(null,vec__8550,1,null);var v = cljs.core.nth.call(null,vec__8550,2,null);return func.call(null,event,el,v);
});})(this$__$1))
);
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__6378__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__8653){
var bc = cljs.core.first(arglist__8653);
var segs = cljs.core.rest(arglist__8653);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__8559_8654 = cljs.core.seq.call(null,added);var chunk__8560_8655 = null;var count__8561_8656 = 0;var i__8562_8657 = 0;while(true){
if((i__8562_8657 < count__8561_8656))
{var a_8658 = cljs.core._nth.call(null,chunk__8560_8655,i__8562_8657);crate.binding.bc_add.call(null,bc,a_8658,a_8658);
{
var G__8659 = seq__8559_8654;
var G__8660 = chunk__8560_8655;
var G__8661 = count__8561_8656;
var G__8662 = (i__8562_8657 + 1);
seq__8559_8654 = G__8659;
chunk__8560_8655 = G__8660;
count__8561_8656 = G__8661;
i__8562_8657 = G__8662;
continue;
}
} else
{var temp__4092__auto___8663 = cljs.core.seq.call(null,seq__8559_8654);if(temp__4092__auto___8663)
{var seq__8559_8664__$1 = temp__4092__auto___8663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8559_8664__$1))
{var c__7126__auto___8665 = cljs.core.chunk_first.call(null,seq__8559_8664__$1);{
var G__8666 = cljs.core.chunk_rest.call(null,seq__8559_8664__$1);
var G__8667 = c__7126__auto___8665;
var G__8668 = cljs.core.count.call(null,c__7126__auto___8665);
var G__8669 = 0;
seq__8559_8654 = G__8666;
chunk__8560_8655 = G__8667;
count__8561_8656 = G__8668;
i__8562_8657 = G__8669;
continue;
}
} else
{var a_8670 = cljs.core.first.call(null,seq__8559_8664__$1);crate.binding.bc_add.call(null,bc,a_8670,a_8670);
{
var G__8671 = cljs.core.next.call(null,seq__8559_8664__$1);
var G__8672 = null;
var G__8673 = 0;
var G__8674 = 0;
seq__8559_8654 = G__8671;
chunk__8560_8655 = G__8672;
count__8561_8656 = G__8673;
i__8562_8657 = G__8674;
continue;
}
}
} else
{}
}
break;
}
var seq__8563 = cljs.core.seq.call(null,removed);var chunk__8564 = null;var count__8565 = 0;var i__8566 = 0;while(true){
if((i__8566 < count__8565))
{var r = cljs.core._nth.call(null,chunk__8564,i__8566);crate.binding.bc_remove.call(null,bc,r);
{
var G__8675 = seq__8563;
var G__8676 = chunk__8564;
var G__8677 = count__8565;
var G__8678 = (i__8566 + 1);
seq__8563 = G__8675;
chunk__8564 = G__8676;
count__8565 = G__8677;
i__8566 = G__8678;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8563);if(temp__4092__auto__)
{var seq__8563__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8563__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8563__$1);{
var G__8679 = cljs.core.chunk_rest.call(null,seq__8563__$1);
var G__8680 = c__7126__auto__;
var G__8681 = cljs.core.count.call(null,c__7126__auto__);
var G__8682 = 0;
seq__8563 = G__8679;
chunk__8564 = G__8680;
count__8565 = G__8681;
i__8566 = G__8682;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8563__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__8683 = cljs.core.next.call(null,seq__8563__$1);
var G__8684 = null;
var G__8685 = 0;
var G__8686 = 0;
seq__8563 = G__8683;
chunk__8564 = G__8684;
count__8565 = G__8685;
i__8566 = G__8686;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__8567){var vec__8570 = p__8567;var path = cljs.core.nth.call(null,vec__8570,0,null);var opts = cljs.core.nth.call(null,vec__8570,1,null);var vec__8571 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__8571,0,null);var opts__$1 = cljs.core.nth.call(null,vec__8571,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__8571,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8570,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__8571,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8570,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__8567 = null;if (arguments.length > 1) {
  p__8567 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__8567);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8687){
var atm = cljs.core.first(arglist__8687);
var p__8567 = cljs.core.rest(arglist__8687);
return bound_coll__delegate(atm,p__8567);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8572){var vec__8574 = p__8572;var opts = cljs.core.nth.call(null,vec__8574,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__8574,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__8574,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__8572 = null;if (arguments.length > 2) {
  p__8572 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__8572);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8688){
var as = cljs.core.first(arglist__8688);
arglist__8688 = cljs.core.next(arglist__8688);
var atm = cljs.core.first(arglist__8688);
var p__8572 = cljs.core.rest(arglist__8688);
return map_bound__delegate(as,atm,p__8572);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__8576 = b;if(G__8576)
{var bit__7028__auto__ = null;if(cljs.core.truth_((function (){var or__6378__auto__ = bit__7028__auto__;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return G__8576.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8576.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8576);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8576);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__8578 = b;if(G__8578)
{var bit__7028__auto__ = null;if(cljs.core.truth_((function (){var or__6378__auto__ = bit__7028__auto__;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return G__8578.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8578.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8578);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8578);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__8580 = atm;if(G__8580)
{var bit__7028__auto__ = (G__8580.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7028__auto__) || (G__8580.cljs$core$IDeref$))
{return true;
} else
{if((!G__8580.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8580);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8580);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__8581){var vec__8583 = p__8581;var func = cljs.core.nth.call(null,vec__8583,0,null);var func__$1 = (function (){var or__6378__auto__ = func;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__8581 = null;if (arguments.length > 1) {
  p__8581 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__8581);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8689){
var atm = cljs.core.first(arglist__8689);
var p__8581 = cljs.core.rest(arglist__8689);
return bound__delegate(atm,p__8581);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.objs.highlights')) {
goog.provide('lt.objs.highlights');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
lt.objs.highlights.editor_for_file = (function editor_for_file(file){return cljs.core.first.call(null,lt.objs.editor.pool.by_path.call(null,file));
});
lt.objs.highlights.toggle_background = (function toggle_background(ed,handle,class$,toggle){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var ed__$1 = temp__4092__auto__;return (cljs.core.truth_(toggle)?lt.objs.editor._PLUS_line_class:lt.objs.editor._line_class).call(null,ed__$1,handle,new cljs.core.Keyword(null,"background","background",3976677536),class$);
} else
{return null;
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.highlights","highlights","lt.objs.highlights/highlights",4220450818),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlights","highlights",1371209137),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.highlights","refresh","lt.objs.highlights/refresh",3576234382),new cljs.core.Keyword("lt.objs.highlights","clear","lt.objs.highlights/clear",4492370964),new cljs.core.Keyword("lt.objs.highlights","highlight","lt.objs.highlights/highlight",1032059829),new cljs.core.Keyword("lt.objs.highlights","listen","lt.objs.highlights/listen",1386183802)], null),new cljs.core.Keyword(null,"lines","lines",1116881521),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,class$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),class$], null));
return null;
}));
lt.objs.highlights.obj = (function obj(class$){return lt.object.create.call(null,new cljs.core.Keyword("lt.objs.highlights","highlights","lt.objs.highlights/highlights",4220450818),class$);
});
lt.objs.highlights.refresh_line = (function refresh_line(p__8152,default_class){var map__8154 = p__8152;var map__8154__$1 = ((cljs.core.seq_QMARK_.call(null,map__8154))?cljs.core.apply.call(null,cljs.core.hash_map,map__8154):map__8154);var l = map__8154__$1;var class$ = cljs.core.get.call(null,map__8154__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle = cljs.core.get.call(null,map__8154__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));var line = cljs.core.get.call(null,map__8154__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__8154__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_(handle))
{return l;
} else
{var temp__4090__auto__ = lt.objs.highlights.editor_for_file.call(null,file);if(cljs.core.truth_(temp__4090__auto__))
{var ed = temp__4090__auto__;var handle__$1 = lt.objs.editor.line_handle.call(null,ed,(line - 1));var class$__$1 = (function (){var or__6378__auto__ = class$;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return default_class;
}
})();if(cljs.core.truth_(handle__$1))
{lt.objs.highlights.toggle_background.call(null,ed,handle__$1,new cljs.core.Keyword(null,"light-line","light-line",758926781),true);
lt.objs.highlights.toggle_background.call(null,ed,handle__$1,class$__$1,true);
return cljs.core.assoc.call(null,l,new cljs.core.Keyword(null,"handle","handle",4084294042),handle__$1,new cljs.core.Keyword(null,"ed","ed",1013907473),ed);
} else
{return l;
}
} else
{return l;
}
}
});
lt.objs.highlights.refresh_lines = (function refresh_lines(p__8156){var map__8158 = p__8156;var map__8158__$1 = ((cljs.core.seq_QMARK_.call(null,map__8158))?cljs.core.apply.call(null,cljs.core.hash_map,map__8158):map__8158);var class$ = cljs.core.get.call(null,map__8158__$1,new cljs.core.Keyword(null,"class","class",1108647146));var lines = cljs.core.get.call(null,map__8158__$1,new cljs.core.Keyword(null,"lines","lines",1116881521));return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (map__8158,map__8158__$1,class$,lines){
return (function (p1__8155_SHARP_){return lt.objs.highlights.refresh_line.call(null,p1__8155_SHARP_,class$);
});})(map__8158,map__8158__$1,class$,lines))
,lines));
});
lt.objs.highlights.__BEH__refresh = (function __BEH__refresh(this$){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",1116881521),lt.objs.highlights.refresh_lines.call(null,cljs.core.deref.call(null,this$))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.highlights","refresh","lt.objs.highlights/refresh",3576234382),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.highlights.__BEH__refresh,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));
lt.objs.highlights.__BEH__highlight = (function __BEH__highlight(this$,lines){var lines__$1 = ((cljs.core.sequential_QMARK_.call(null,lines))?lines:cljs.core.PersistentHashSet.fromArray([lines], true));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",1116881521),cljs.core.into.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"lines","lines",1116881521)),lines__$1)], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.highlights","highlight","lt.objs.highlights/highlight",1032059829),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.highlights.__BEH__highlight,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlight","highlight",4627660838),null], null), null));
lt.objs.highlights.__BEH__clear = (function __BEH__clear(this$){var seq__8167_8193 = cljs.core.seq.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"lines","lines",1116881521)));var chunk__8169_8194 = null;var count__8170_8195 = 0;var i__8171_8196 = 0;while(true){
if((i__8171_8196 < count__8170_8195))
{var map__8173_8197 = cljs.core._nth.call(null,chunk__8169_8194,i__8171_8196);var map__8173_8198__$1 = ((cljs.core.seq_QMARK_.call(null,map__8173_8197))?cljs.core.apply.call(null,cljs.core.hash_map,map__8173_8197):map__8173_8197);var ed_8199 = cljs.core.get.call(null,map__8173_8198__$1,new cljs.core.Keyword(null,"ed","ed",1013907473));var class_8200 = cljs.core.get.call(null,map__8173_8198__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle_8201 = cljs.core.get.call(null,map__8173_8198__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_8201))
{lt.objs.highlights.toggle_background.call(null,ed_8199,handle_8201,(function (){var or__6378__auto__ = class_8200;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"class","class",1108647146));
}
})(),false);
{
var G__8202 = seq__8167_8193;
var G__8203 = chunk__8169_8194;
var G__8204 = count__8170_8195;
var G__8205 = (i__8171_8196 + 1);
seq__8167_8193 = G__8202;
chunk__8169_8194 = G__8203;
count__8170_8195 = G__8204;
i__8171_8196 = G__8205;
continue;
}
} else
{{
var G__8206 = seq__8167_8193;
var G__8207 = chunk__8169_8194;
var G__8208 = count__8170_8195;
var G__8209 = (i__8171_8196 + 1);
seq__8167_8193 = G__8206;
chunk__8169_8194 = G__8207;
count__8170_8195 = G__8208;
i__8171_8196 = G__8209;
continue;
}
}
} else
{var temp__4092__auto___8210 = cljs.core.seq.call(null,seq__8167_8193);if(temp__4092__auto___8210)
{var seq__8167_8211__$1 = temp__4092__auto___8210;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8167_8211__$1))
{var c__7126__auto___8212 = cljs.core.chunk_first.call(null,seq__8167_8211__$1);{
var G__8213 = cljs.core.chunk_rest.call(null,seq__8167_8211__$1);
var G__8214 = c__7126__auto___8212;
var G__8215 = cljs.core.count.call(null,c__7126__auto___8212);
var G__8216 = 0;
seq__8167_8193 = G__8213;
chunk__8169_8194 = G__8214;
count__8170_8195 = G__8215;
i__8171_8196 = G__8216;
continue;
}
} else
{var map__8174_8217 = cljs.core.first.call(null,seq__8167_8211__$1);var map__8174_8218__$1 = ((cljs.core.seq_QMARK_.call(null,map__8174_8217))?cljs.core.apply.call(null,cljs.core.hash_map,map__8174_8217):map__8174_8217);var ed_8219 = cljs.core.get.call(null,map__8174_8218__$1,new cljs.core.Keyword(null,"ed","ed",1013907473));var class_8220 = cljs.core.get.call(null,map__8174_8218__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle_8221 = cljs.core.get.call(null,map__8174_8218__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_8221))
{lt.objs.highlights.toggle_background.call(null,ed_8219,handle_8221,(function (){var or__6378__auto__ = class_8220;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"class","class",1108647146));
}
})(),false);
{
var G__8222 = cljs.core.next.call(null,seq__8167_8211__$1);
var G__8223 = null;
var G__8224 = 0;
var G__8225 = 0;
seq__8167_8193 = G__8222;
chunk__8169_8194 = G__8223;
count__8170_8195 = G__8224;
i__8171_8196 = G__8225;
continue;
}
} else
{{
var G__8226 = cljs.core.next.call(null,seq__8167_8211__$1);
var G__8227 = null;
var G__8228 = 0;
var G__8229 = 0;
seq__8167_8193 = G__8226;
chunk__8169_8194 = G__8227;
count__8170_8195 = G__8228;
i__8171_8196 = G__8229;
continue;
}
}
}
} else
{}
}
break;
}
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",1116881521),cljs.core.PersistentHashSet.EMPTY], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.highlights","clear","lt.objs.highlights/clear",4492370964),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.highlights.__BEH__clear,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1108650431),null], null), null));
lt.objs.highlights.__BEH__listen = (function __BEH__listen(this$,obj){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-object","clear-object",3879995953),obj], null));
lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.highlights","listener","lt.objs.highlights/listener",3298767797),this$], null));
return lt.object.add_behavior_BANG_.call(null,obj,new cljs.core.Keyword("lt.objs.highlights","clear-lights","lt.objs.highlights/clear-lights",1783812260));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.highlights","listen","lt.objs.highlights/listen",1386183802),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.highlights.__BEH__listen,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listen","listen",4206362937),null], null), null));
lt.objs.highlights.__BEH__clear_lights = (function __BEH__clear_lights(this$){var lights = new cljs.core.Keyword("lt.objs.highlights","listener","lt.objs.highlights/listener",3298767797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core._EQ_.call(null,this$,new cljs.core.Keyword(null,"clear-object","clear-object",3879995953).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lights))))
{return lt.object.raise.call(null,lights,new cljs.core.Keyword(null,"clear","clear",1108650431));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.highlights","clear-lights","lt.objs.highlights/clear-lights",1783812260),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.highlights.__BEH__clear_lights,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null));
lt.objs.highlights.__BEH__refresh_on_open = (function __BEH__refresh_on_open(editor){var seq__8179 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"highlights","highlights",1371209137)));var chunk__8180 = null;var count__8181 = 0;var i__8182 = 0;while(true){
if((i__8182 < count__8181))
{var highlights = cljs.core._nth.call(null,chunk__8180,i__8182);lt.object.raise.call(null,highlights,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
{
var G__8230 = seq__8179;
var G__8231 = chunk__8180;
var G__8232 = count__8181;
var G__8233 = (i__8182 + 1);
seq__8179 = G__8230;
chunk__8180 = G__8231;
count__8181 = G__8232;
i__8182 = G__8233;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8179);if(temp__4092__auto__)
{var seq__8179__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8179__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8179__$1);{
var G__8234 = cljs.core.chunk_rest.call(null,seq__8179__$1);
var G__8235 = c__7126__auto__;
var G__8236 = cljs.core.count.call(null,c__7126__auto__);
var G__8237 = 0;
seq__8179 = G__8234;
chunk__8180 = G__8235;
count__8181 = G__8236;
i__8182 = G__8237;
continue;
}
} else
{var highlights = cljs.core.first.call(null,seq__8179__$1);lt.object.raise.call(null,highlights,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
{
var G__8238 = cljs.core.next.call(null,seq__8179__$1);
var G__8239 = null;
var G__8240 = 0;
var G__8241 = 0;
seq__8179 = G__8238;
chunk__8180 = G__8239;
count__8181 = G__8240;
i__8182 = G__8241;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.highlights","refresh-on-open","lt.objs.highlights/refresh-on-open",3549587259),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.highlights.__BEH__refresh_on_open,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
}
if(!lt.util.load.provided_QMARK_('lt.objs.file-links')) {
goog.provide('lt.objs.file_links');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.platform');
goog.require('lt.objs.highlights');
goog.require('lt.util.dom');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.highlights');
lt.objs.file_links.anchor_QMARK_ = (function anchor_QMARK_(node){return cljs.core._EQ_.call(null,node.tagName,"A");
});
lt.objs.file_links.__GT_pos = (function __GT_pos(e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});
lt.objs.file_links.sqrt = Math.sqrt;
lt.objs.file_links.sqr = (function sqr(p1__8058_SHARP_){return Math.pow(p1__8058_SHARP_,2);
});
lt.objs.file_links.hypot = (function hypot(p__8059,p__8060){var vec__8063 = p__8059;var x = cljs.core.nth.call(null,vec__8063,0,null);var y = cljs.core.nth.call(null,vec__8063,1,null);var vec__8064 = p__8060;var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8064,0,null);var y_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8064,1,null);return lt.objs.file_links.sqrt.call(null,(lt.objs.file_links.sqr.call(null,(x_SINGLEQUOTE_ - x)) + lt.objs.file_links.sqr.call(null,(y_SINGLEQUOTE_ - y))));
});
lt.objs.file_links.left_click_QMARK_ = (function left_click_QMARK_(e){return cljs.core._EQ_.call(null,e.which,1);
});
lt.objs.file_links.click = (function click(node,f){var pos = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null));node.onmousedown = ((function (pos){
return (function (p1__8065_SHARP_){if(lt.objs.file_links.left_click_QMARK_.call(null,p1__8065_SHARP_))
{return cljs.core.reset_BANG_.call(null,pos,lt.objs.file_links.__GT_pos.call(null,p1__8065_SHARP_));
} else
{return null;
}
});})(pos))
;
return node.onmouseup = ((function (pos){
return (function (p1__8066_SHARP_){if((lt.objs.file_links.left_click_QMARK_.call(null,p1__8066_SHARP_)) && ((lt.objs.file_links.hypot.call(null,cljs.core.deref.call(null,pos),lt.objs.file_links.__GT_pos.call(null,p1__8066_SHARP_)) < 5)))
{p1__8066_SHARP_.preventDefault();
p1__8066_SHARP_.stopPropagation();
return f.call(null,p1__8066_SHARP_);
} else
{return null;
}
});})(pos))
;
});
lt.objs.file_links.highlighter = lt.objs.highlights.obj.call(null,new cljs.core.Keyword(null,"highlight","highlight",4627660838));
lt.objs.file_links.clear = (function clear(){return lt.object.raise.call(null,lt.objs.file_links.highlighter,new cljs.core.Keyword(null,"clear","clear",1108650431));
});
/**
* @param {...*} var_args
*/
lt.objs.file_links.highlight = (function() { 
var highlight__delegate = function (p__8067){var vec__8069 = p__8067;var line = cljs.core.nth.call(null,vec__8069,0,null);if(cljs.core.truth_(lt.objs.file_links.tm_STAR_))
{clearTimeout(lt.objs.file_links.tm_STAR_);
} else
{}
lt.objs.file_links.clear.call(null);
if(cljs.core.truth_(line))
{lt.object.raise.call(null,lt.objs.file_links.highlighter,new cljs.core.Keyword(null,"highlight","highlight",4627660838),line);
return lt.objs.file_links.tm_STAR_ = setTimeout(lt.objs.file_links.clear,1000);
} else
{return null;
}
};
var highlight = function (var_args){
var p__8067 = null;if (arguments.length > 0) {
  p__8067 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return highlight__delegate.call(this,p__8067);};
highlight.cljs$lang$maxFixedArity = 0;
highlight.cljs$lang$applyTo = (function (arglist__8099){
var p__8067 = cljs.core.seq(arglist__8099);
return highlight__delegate(p__8067);
});
highlight.cljs$core$IFn$_invoke$arity$variadic = highlight__delegate;
return highlight;
})()
;
lt.objs.file_links.url_pattern = (cljs.core.truth_(lt.objs.platform.win_QMARK_.call(null))?/^\s*((?:\w+:)[\/\\][A-Za-z0-9_ \\/\/\.\-]*?\.jl)(?::([0-9]+))?\s*$/:/^\s*(\/[A-Za-z0-9_ \\/\/\.\-]*?\.jl)(?::([0-9]+))?\s*$/);
lt.objs.file_links.__GT_line = (function __GT_line(s){var vec__8071 = cljs.core.re_find.call(null,lt.objs.file_links.url_pattern,s);var _ = cljs.core.nth.call(null,vec__8071,0,null);var file = cljs.core.nth.call(null,vec__8071,1,null);var line = cljs.core.nth.call(null,vec__8071,2,null);if(cljs.core.truth_(file))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),file,new cljs.core.Keyword(null,"line","line",1017226086),(cljs.core.truth_(line)?parseInt(line):null)], null);
} else
{return null;
}
});
lt.objs.file_links.open = (function open(line){if(typeof line === 'string')
{return lt.objs.platform.open.call(null,line);
} else
{return lt.objs.jump_stack.jump_to.call(null,line.call(null,new cljs.core.Keyword(null,"file","file",1017047278)),((function (){var or__6378__auto__ = line.call(null,new cljs.core.Keyword(null,"line","line",1017226086));if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return 1;
}
})() - 1));
}
});
lt.objs.file_links.process_node_BANG_ = (function process_node_BANG_(node,line){if(cljs.core.truth_(line))
{if(lt.objs.file_links.anchor_QMARK_.call(null,node))
{node.href = "javascript:void(0);";
} else
{}
lt.objs.file_links.click.call(null,node,(function (){return lt.objs.file_links.open.call(null,line);
}));
if(cljs.core.truth_((function (){var and__6366__auto__ = !(typeof line === 'string');if(and__6366__auto__)
{return line.call(null,new cljs.core.Keyword(null,"line","line",1017226086));
} else
{return and__6366__auto__;
}
})()))
{node.onmouseover = (function (){return lt.objs.file_links.highlight.call(null,line);
});
node.onmouseout = lt.objs.file_links.highlight;
} else
{}
} else
{}
return node;
});
lt.objs.file_links.file_links = (function file_links(dom){return dom.getElementsByClassName("file-link");
});
lt.objs.file_links.data_file = (function data_file(dom){return lt.util.dom.attr.call(null,dom,new cljs.core.Keyword(null,"data-file","data-file",603936049));
});
lt.objs.file_links.data_url = (function data_url(dom){return lt.util.dom.attr.call(null,dom,new cljs.core.Keyword(null,"data-url","data-url",2801809470));
});
lt.objs.file_links.process_nodes_BANG_ = (function process_nodes_BANG_(dom){var seq__8076_8100 = cljs.core.seq.call(null,lt.objs.file_links.file_links.call(null,dom));var chunk__8077_8101 = null;var count__8078_8102 = 0;var i__8079_8103 = 0;while(true){
if((i__8079_8103 < count__8078_8102))
{var link_8104 = cljs.core._nth.call(null,chunk__8077_8101,i__8079_8103);lt.objs.file_links.process_node_BANG_.call(null,link_8104,(function (){var or__6378__auto__ = lt.objs.file_links.data_url.call(null,link_8104);if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return lt.objs.file_links.__GT_line.call(null,lt.objs.file_links.data_file.call(null,link_8104));
}
})());
{
var G__8105 = seq__8076_8100;
var G__8106 = chunk__8077_8101;
var G__8107 = count__8078_8102;
var G__8108 = (i__8079_8103 + 1);
seq__8076_8100 = G__8105;
chunk__8077_8101 = G__8106;
count__8078_8102 = G__8107;
i__8079_8103 = G__8108;
continue;
}
} else
{var temp__4092__auto___8109 = cljs.core.seq.call(null,seq__8076_8100);if(temp__4092__auto___8109)
{var seq__8076_8110__$1 = temp__4092__auto___8109;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8076_8110__$1))
{var c__7126__auto___8111 = cljs.core.chunk_first.call(null,seq__8076_8110__$1);{
var G__8112 = cljs.core.chunk_rest.call(null,seq__8076_8110__$1);
var G__8113 = c__7126__auto___8111;
var G__8114 = cljs.core.count.call(null,c__7126__auto___8111);
var G__8115 = 0;
seq__8076_8100 = G__8112;
chunk__8077_8101 = G__8113;
count__8078_8102 = G__8114;
i__8079_8103 = G__8115;
continue;
}
} else
{var link_8116 = cljs.core.first.call(null,seq__8076_8110__$1);lt.objs.file_links.process_node_BANG_.call(null,link_8116,(function (){var or__6378__auto__ = lt.objs.file_links.data_url.call(null,link_8116);if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return lt.objs.file_links.__GT_line.call(null,lt.objs.file_links.data_file.call(null,link_8116));
}
})());
{
var G__8117 = cljs.core.next.call(null,seq__8076_8110__$1);
var G__8118 = null;
var G__8119 = 0;
var G__8120 = 0;
seq__8076_8100 = G__8117;
chunk__8077_8101 = G__8118;
count__8078_8102 = G__8119;
i__8079_8103 = G__8120;
continue;
}
}
} else
{}
}
break;
}
return dom;
});
lt.objs.file_links.all_anchors = (function all_anchors(dom){return dom.getElementsByTagName("a");
});
lt.objs.file_links.process_anchor_BANG_ = (function process_anchor_BANG_(node){return lt.objs.file_links.process_node_BANG_.call(null,node,cljs.core.some.call(null,lt.objs.file_links.__GT_line,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.text,node.href], null)));
});
lt.objs.file_links.process_anchors_BANG_ = (function process_anchors_BANG_(dom){cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__8080_SHARP_){return lt.objs.file_links.process_anchor_BANG_.call(null,p1__8080_SHARP_);
}),lt.objs.file_links.all_anchors.call(null,dom)));
var seq__8085_8121 = cljs.core.seq.call(null,lt.objs.file_links.all_anchors.call(null,dom));var chunk__8086_8122 = null;var count__8087_8123 = 0;var i__8088_8124 = 0;while(true){
if((i__8088_8124 < count__8087_8123))
{var anchor_8125 = cljs.core._nth.call(null,chunk__8086_8122,i__8088_8124);lt.objs.file_links.process_anchor_BANG_.call(null,anchor_8125);
{
var G__8126 = seq__8085_8121;
var G__8127 = chunk__8086_8122;
var G__8128 = count__8087_8123;
var G__8129 = (i__8088_8124 + 1);
seq__8085_8121 = G__8126;
chunk__8086_8122 = G__8127;
count__8087_8123 = G__8128;
i__8088_8124 = G__8129;
continue;
}
} else
{var temp__4092__auto___8130 = cljs.core.seq.call(null,seq__8085_8121);if(temp__4092__auto___8130)
{var seq__8085_8131__$1 = temp__4092__auto___8130;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8085_8131__$1))
{var c__7126__auto___8132 = cljs.core.chunk_first.call(null,seq__8085_8131__$1);{
var G__8133 = cljs.core.chunk_rest.call(null,seq__8085_8131__$1);
var G__8134 = c__7126__auto___8132;
var G__8135 = cljs.core.count.call(null,c__7126__auto___8132);
var G__8136 = 0;
seq__8085_8121 = G__8133;
chunk__8086_8122 = G__8134;
count__8087_8123 = G__8135;
i__8088_8124 = G__8136;
continue;
}
} else
{var anchor_8137 = cljs.core.first.call(null,seq__8085_8131__$1);lt.objs.file_links.process_anchor_BANG_.call(null,anchor_8137);
{
var G__8138 = cljs.core.next.call(null,seq__8085_8131__$1);
var G__8139 = null;
var G__8140 = 0;
var G__8141 = 0;
seq__8085_8121 = G__8138;
chunk__8086_8122 = G__8139;
count__8087_8123 = G__8140;
i__8088_8124 = G__8141;
continue;
}
}
} else
{}
}
break;
}
return dom;
});
lt.objs.file_links.process_BANG_ = (function process_BANG_(dom){return lt.objs.file_links.process_nodes_BANG_.call(null,lt.objs.file_links.process_anchors_BANG_.call(null,dom));
});
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.browser')) {
goog.provide('lt.objs.langs.julia.browser');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.langs.julia.util');
goog.require('crate.core');
goog.require('lt.objs.file_links');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.clients');
goog.require('crate.binding');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('crate.core');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.clients');
goog.require('lt.objs.command');
goog.require('lt.objs.file_links');
lt.objs.langs.julia.browser.process_collapsible_BANG_ = (function process_collapsible_BANG_(dom){var header = lt.util.dom.$.call(null,new cljs.core.Keyword(null,".collapsible-header",".collapsible-header",3333398992),dom);var content = $(lt.util.dom.$.call(null,new cljs.core.Keyword(null,".collapsible-content",".collapsible-content",4354987578),dom));if(cljs.core.truth_(header))
{content.hide();
header.onclick = ((function (header,content){
return (function (){return content.toggle(200);
});})(header,content))
;
} else
{}
return dom;
});
lt.objs.langs.julia.browser.highlight = (function highlight(selector,cm,line,dom){if(cljs.core.truth_(lt.plugins.june))
{return lt.plugins.june.highlight.call(null,selector,cm,line,dom);
} else
{return dom;
}
});
lt.objs.langs.julia.browser.__BEH__on_close = (function __BEH__on_close(this$){return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.browser","on-close","lt.objs.langs.julia.browser/on-close",664516101),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.browser.__BEH__on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.objs.langs.julia.browser.get_objects = (function get_objects(client,module){return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"browser.get-objects","browser.get-objects",3205684041),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"module","module",4240087518),module], null),new cljs.core.Keyword(null,"only","only",1017320222),lt.objs.langs.julia.browser.browser);
});
lt.objs.langs.julia.browser.__BEH__get_objects = (function __BEH__get_objects(editor){if(cljs.core.truth_(new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.julia.browser.browser))))
{var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));if(cljs.core.truth_(temp__4092__auto__))
{var client = temp__4092__auto__;if(cljs.core.truth_(cljs.core.deref.call(null,client)))
{return lt.objs.langs.julia.browser.get_objects.call(null,client,lt.objs.langs.julia.util.module.call(null,editor));
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.browser","get-objects","lt.objs.langs.julia.browser/get-objects",1744049268),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.browser.__BEH__get_objects,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),null,new cljs.core.Keyword(null,"active","active",3885920888),null,new cljs.core.Keyword(null,"module-update","module-update",2454986428),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.objs.langs.julia.browser.__BEH__set_objects = (function __BEH__set_objects(browser,p__8444){var map__8446 = p__8444;var map__8446__$1 = ((cljs.core.seq_QMARK_.call(null,map__8446))?cljs.core.apply.call(null,cljs.core.hash_map,map__8446):map__8446);var objs = cljs.core.get.call(null,map__8446__$1,new cljs.core.Keyword(null,"objs","objs",1017308622));return lt.object.merge_BANG_.call(null,browser,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"objs","objs",1017308622),objs], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.browser","set-objects","lt.objs.langs.julia.browser/set-objects",1694283112),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.browser.__BEH__set_objects,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update","update",4470025275),null], null), null));
lt.objs.langs.julia.browser.browser_ui = (function browser_ui(p__8447){var map__8463 = p__8447;var map__8463__$1 = ((cljs.core.seq_QMARK_.call(null,map__8463))?cljs.core.apply.call(null,cljs.core.hash_map,map__8463):map__8463);var objs = cljs.core.get.call(null,map__8463__$1,new cljs.core.Keyword(null,"objs","objs",1017308622));var e__7959__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.langs.julia.browser.join_theme.call(null,new cljs.core.Keyword(null,"div.CodeMirror","div.CodeMirror",3436950811)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.julia.browser","div.julia.browser",1862942824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.data-frame","table.data-frame",1770442524),(function (){var iter__7095__auto__ = ((function (map__8463,map__8463__$1,objs){
return (function iter__8464(s__8465){return (new cljs.core.LazySeq(null,((function (map__8463,map__8463__$1,objs){
return (function (){var s__8465__$1 = s__8465;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8465__$1);if(temp__4092__auto__)
{var s__8465__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8465__$2))
{var c__7093__auto__ = cljs.core.chunk_first.call(null,s__8465__$2);var size__7094__auto__ = cljs.core.count.call(null,c__7093__auto__);var b__8467 = cljs.core.chunk_buffer.call(null,size__7094__auto__);if((function (){var i__8466 = 0;while(true){
if((i__8466 < size__7094__auto__))
{var vec__8470 = cljs.core._nth.call(null,c__7093__auto__,i__8466);var k = cljs.core.nth.call(null,vec__8470,0,null);var v = cljs.core.nth.call(null,vec__8470,1,null);cljs.core.chunk_append.call(null,b__8467,lt.objs.langs.julia.browser.highlight.call(null,".variable",null,null,lt.objs.file_links.process_BANG_.call(null,lt.objs.langs.julia.browser.process_collapsible_BANG_.call(null,crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",4416891401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.variable","span.variable",2064274450),cljs.core.name.call(null,k)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),crate.core.raw.call(null,v)], null)], null))))));
{
var G__8489 = (i__8466 + 1);
i__8466 = G__8489;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8467),iter__8464.call(null,cljs.core.chunk_rest.call(null,s__8465__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8467),null);
}
} else
{var vec__8471 = cljs.core.first.call(null,s__8465__$2);var k = cljs.core.nth.call(null,vec__8471,0,null);var v = cljs.core.nth.call(null,vec__8471,1,null);return cljs.core.cons.call(null,lt.objs.langs.julia.browser.highlight.call(null,".variable",null,null,lt.objs.file_links.process_BANG_.call(null,lt.objs.langs.julia.browser.process_collapsible_BANG_.call(null,crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",4416891401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.variable","span.variable",2064274450),cljs.core.name.call(null,k)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),crate.core.raw.call(null,v)], null)], null))))),iter__8464.call(null,cljs.core.rest.call(null,s__8465__$2)));
}
} else
{return null;
}
break;
}
});})(map__8463,map__8463__$1,objs))
,null,null));
});})(map__8463,map__8463__$1,objs))
;return iter__7095__auto__.call(null,objs);
})()], null)], null)], null));var seq__8472_8490 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8473_8491 = null;var count__8474_8492 = 0;var i__8475_8493 = 0;while(true){
if((i__8475_8493 < count__8474_8492))
{var vec__8476_8494 = cljs.core._nth.call(null,chunk__8473_8491,i__8475_8493);var ev__7960__auto___8495 = cljs.core.nth.call(null,vec__8476_8494,0,null);var func__7961__auto___8496 = cljs.core.nth.call(null,vec__8476_8494,1,null);lt.util.dom.on.call(null,e__7959__auto__,ev__7960__auto___8495,func__7961__auto___8496);
{
var G__8497 = seq__8472_8490;
var G__8498 = chunk__8473_8491;
var G__8499 = count__8474_8492;
var G__8500 = (i__8475_8493 + 1);
seq__8472_8490 = G__8497;
chunk__8473_8491 = G__8498;
count__8474_8492 = G__8499;
i__8475_8493 = G__8500;
continue;
}
} else
{var temp__4092__auto___8501 = cljs.core.seq.call(null,seq__8472_8490);if(temp__4092__auto___8501)
{var seq__8472_8502__$1 = temp__4092__auto___8501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8472_8502__$1))
{var c__7126__auto___8503 = cljs.core.chunk_first.call(null,seq__8472_8502__$1);{
var G__8504 = cljs.core.chunk_rest.call(null,seq__8472_8502__$1);
var G__8505 = c__7126__auto___8503;
var G__8506 = cljs.core.count.call(null,c__7126__auto___8503);
var G__8507 = 0;
seq__8472_8490 = G__8504;
chunk__8473_8491 = G__8505;
count__8474_8492 = G__8506;
i__8475_8493 = G__8507;
continue;
}
} else
{var vec__8477_8508 = cljs.core.first.call(null,seq__8472_8502__$1);var ev__7960__auto___8509 = cljs.core.nth.call(null,vec__8477_8508,0,null);var func__7961__auto___8510 = cljs.core.nth.call(null,vec__8477_8508,1,null);lt.util.dom.on.call(null,e__7959__auto__,ev__7960__auto___8509,func__7961__auto___8510);
{
var G__8511 = cljs.core.next.call(null,seq__8472_8502__$1);
var G__8512 = null;
var G__8513 = 0;
var G__8514 = 0;
seq__8472_8490 = G__8511;
chunk__8473_8491 = G__8512;
count__8474_8492 = G__8513;
i__8475_8493 = G__8514;
continue;
}
}
} else
{}
}
break;
}
return e__7959__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.browser","browser","lt.objs.langs.julia.browser/browser",916384999),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.browser","julia.browser",1725846277),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia.browser","on-close","lt.objs.langs.julia.browser/on-close",664516101),new cljs.core.Keyword("lt.objs.langs.julia.browser","set-objects","lt.objs.langs.julia.browser/set-objects",1694283112)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Browser",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return crate.binding.bound.call(null,this$,lt.objs.langs.julia.browser.browser_ui);
}));
lt.objs.langs.julia.browser.browser = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.browser","browser","lt.objs.langs.julia.browser/browser",916384999));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"julia.browser","julia.browser",1725846277),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Open the object browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.objs.langs.julia.browser.browser);
})], null));
lt.objs.langs.julia.browser.tag_behaviour = (function tag_behaviour(tag,name){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8478_SHARP_){return cljs.core._EQ_.call(null,((cljs.core.seq_QMARK_.call(null,p1__8478_SHARP_))?cljs.core.first.call(null,p1__8478_SHARP_):p1__8478_SHARP_),name);
}),tag.call(null,cljs.core.deref.call(null,lt.object.tags))));
});
lt.objs.langs.julia.browser.theme = (function theme(tag){return cljs.core.second.call(null,lt.objs.langs.julia.browser.tag_behaviour.call(null,tag,new cljs.core.Keyword("lt.objs.style","set-theme","lt.objs.style/set-theme",1439387910)));
});
lt.objs.langs.julia.browser.julia_theme = (function julia_theme(){var or__6378__auto__ = lt.objs.langs.julia.browser.theme.call(null,new cljs.core.Keyword(null,"editor.julia","editor.julia",3182496010));if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{var or__6378__auto____$1 = lt.objs.langs.julia.browser.theme.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679));if(cljs.core.truth_(or__6378__auto____$1))
{return or__6378__auto____$1;
} else
{return "default";
}
}
});
lt.objs.langs.julia.browser.join_theme = (function join_theme(class$){return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,class$)),cljs.core.str(".cm-s-"),cljs.core.str(lt.objs.langs.julia.browser.julia_theme.call(null))].join(''));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.flow')) {
goog.provide('lt.plugins.flow');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.langs.julia.util');
goog.require('crate.core');
goog.require('lt.util.dom');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('crate.core');
goog.require('lt.objs.langs.julia.util');
$ = require(lt.objs.files.join.call(null,lt.objs.langs.julia.util.jl_plugin_dir,"js/jquery-2.1.1.min.js"));
lt.plugins.flow.callback = (function callback(s,f){return setTimeout(f,(s * 1000));
});
lt.plugins.flow.show = (function show(dom){return $(dom).show(200);
});
lt.plugins.flow.hide = (function hide(dom){return $(dom).hide(200);
});
lt.plugins.flow.has_valid_editor_QMARK_ = (function has_valid_editor_QMARK_(result){return lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,result)));
});
lt.plugins.flow.__BEH__animate_on_show = (function __BEH__animate_on_show(result){$(lt.object.__GT_content.call(null,result)).hide();
lt.plugins.flow.callback.call(null,0,(function (){return lt.plugins.flow.show.call(null,lt.object.__GT_content.call(null,result));
}));
return lt.plugins.flow.callback.call(null,0.2,(function (){if(cljs.core.truth_(lt.plugins.flow.has_valid_editor_QMARK_.call(null,result)))
{return lt.objs.editor.refresh.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,result)));
} else
{return null;
}
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.flow","animate-on-show","lt.plugins.flow/animate-on-show",3222768235),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.flow.__BEH__animate_on_show,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.plugins.flow.__BEH__clear_mark = (function __BEH__clear_mark(result){lt.plugins.flow.hide.call(null,lt.object.__GT_content.call(null,result));
return lt.plugins.flow.callback.call(null,0.2,(function (){if(cljs.core.truth_(lt.plugins.flow.has_valid_editor_QMARK_.call(null,result)))
{CodeMirror.off(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,result)),"change",new cljs.core.Keyword(null,"listener","listener",2360064038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,result)));
CodeMirror.off(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,result)),"delete",new cljs.core.Keyword(null,"delete","delete",3973413149).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,result)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,result))))
{new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,result)).clear();
} else
{}
lt.object.raise.call(null,result,new cljs.core.Keyword(null,"clear","clear",1108650431));
return lt.object.raise.call(null,result,new cljs.core.Keyword(null,"cleared","cleared",1870681886));
} else
{return null;
}
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.flow","clear-mark","lt.plugins.flow/clear-mark",2987949941),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.flow.__BEH__clear_mark,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null));
lt.plugins.flow.__BEH__ex_clear = (function __BEH__ex_clear(ex){lt.plugins.flow.hide.call(null,lt.object.__GT_content.call(null,ex));
return lt.plugins.flow.callback.call(null,0.2,(function (){if(cljs.core.truth_(lt.plugins.flow.has_valid_editor_QMARK_.call(null,ex)))
{lt.objs.editor.remove_line_widget.call(null,lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ex))),new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ex)));
} else
{}
lt.object.raise.call(null,ex,new cljs.core.Keyword(null,"clear","clear",1108650431));
return lt.object.raise.call(null,ex,new cljs.core.Keyword(null,"cleared","cleared",1870681886));
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.flow","ex-clear","lt.plugins.flow/ex-clear",4169443295),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.flow.__BEH__ex_clear,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.stats')) {
goog.provide('lt.objs.langs.julia.stats');
goog.require('cljs.core');
goog.require('lt.objs.cache');
goog.require('lt.objs.cache');
lt.objs.langs.julia.stats.http = require("http");
lt.objs.langs.julia.stats.hit = (function hit(page){try{return lt.objs.langs.julia.stats.http.get(page);
}catch (e9386){if((e9386 instanceof Error))
{var e = e9386;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9386;
} else
{return null;
}
}
}});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.stats","metrics","lt.objs.langs.julia.stats/metrics",1111343317),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (){return lt.objs.langs.julia.stats.hit.call(null,[cljs.core.str("http://data.junolab.org/hit?id="),cljs.core.str(cljs.core.deref.call(null,lt.objs.cache.settings).call(null,new cljs.core.Keyword(null,"uid","uid",1014020034)))].join(''));
}),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.menu')) {
goog.provide('lt.objs.langs.julia.menu');
goog.require('cljs.core');
goog.require('lt.objs.menu');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.platform');
goog.require('lt.objs.platform');
goog.require('lt.objs.menu');
goog.require('lt.objs.menu');
lt.objs.langs.julia.menu.__BEH__ed_menu_PLUS_ = (function __BEH__ed_menu_PLUS_(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Evaluate",new cljs.core.Keyword(null,"order","order",1119910592),-2,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"eval-editor-form","eval-editor-form",4138964197));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"separator",new cljs.core.Keyword(null,"order","order",1119910592),-1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1116631654),"Show methods",new cljs.core.Keyword(null,"order","order",1119910592),0.15,new cljs.core.Keyword(null,"enabled","enabled",3699277491),cljs.core.not.call(null,lt.objs.editor.selection_QMARK_.call(null,this$)),new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.methods.toggle","editor.methods.toggle",3152358179));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Select block",new cljs.core.Keyword(null,"order","order",1119910592),4.5,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.select-block","editor.select-block",4624668367));
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.menu","ed-menu+","lt.objs.langs.julia.menu/ed-menu+",4767238921),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.menu.__BEH__ed_menu_PLUS_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu+","menu+",1117686302),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.results')) {
goog.provide('lt.objs.langs.julia.results');
goog.require('cljs.core');
goog.require('lt.objs.langs.julia');
goog.require('lt.util.dom');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.clients');
goog.require('lt.objs.langs.julia');
lt.objs.langs.julia.results.results = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.objs.langs.julia.results.__GT_ed = (function __GT_ed(thing){if(typeof thing === 'string')
{var G__9305 = cljs.core.deref.call(null,lt.objs.langs.julia.results.results);var G__9305__$1 = (((G__9305 == null))?null:cljs.core.get.call(null,G__9305,thing));var G__9305__$2 = (((G__9305__$1 == null))?null:cljs.core.deref.call(null,G__9305__$1));var G__9305__$3 = (((G__9305__$2 == null))?null:new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(G__9305__$2));return G__9305__$3;
} else
{if(cljs.core.integer_QMARK_.call(null,thing))
{return cljs.core.deref.call(null,lt.object.instances).call(null,lt.objs.langs.julia.results.ed);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return thing;
} else
{return null;
}
}
}
});
lt.objs.langs.julia.results.__GT_client = (function __GT_client(id){var G__9307 = id;var G__9307__$1 = (((G__9307 == null))?null:lt.objs.langs.julia.results.__GT_ed.call(null,G__9307));var G__9307__$2 = (((G__9307__$1 == null))?null:cljs.core.deref.call(null,G__9307__$1));var G__9307__$3 = (((G__9307__$2 == null))?null:new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(G__9307__$2));var G__9307__$4 = (((G__9307__$3 == null))?null:new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(G__9307__$3));return G__9307__$4;
});
lt.objs.langs.julia.results.jlcall = (function jlcall(id,code){var ed = lt.objs.langs.julia.results.__GT_ed.call(null,id);var client = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(client))
{return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"eval.julia","eval.julia",4143069433),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"id","id",1013907597),((typeof id === 'string')?id:null)], null),new cljs.core.Keyword(null,"only","only",1017320222),ed);
} else
{return null;
}
});
jlcall = lt.objs.langs.julia.results.jlcall;
lt.objs.langs.julia.results.id = (function id(result){return new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",1017322386).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,result)));
});
lt.objs.langs.julia.results.__BEH__register_result = (function __BEH__register_result(this$){var temp__4092__auto__ = lt.objs.langs.julia.results.id.call(null,this$);if(cljs.core.truth_(temp__4092__auto__))
{var id = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.objs.langs.julia.results.results,cljs.core.assoc,id,this$);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.results","register-result","lt.objs.langs.julia.results/register-result",3073439976),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.results.__BEH__register_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null));
lt.objs.langs.julia.results.__BEH__unregister_result = (function __BEH__unregister_result(this$){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));if(cljs.core.truth_(temp__4092__auto__))
{var client = temp__4092__auto__;var temp__4092__auto____$1 = lt.objs.langs.julia.results.id.call(null,this$);if(cljs.core.truth_(temp__4092__auto____$1))
{var id = temp__4092__auto____$1;cljs.core.swap_BANG_.call(null,lt.objs.langs.julia.results.results,cljs.core.dissoc,id);
return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"result.clear","result.clear",4420801710),id);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.results","unregister-result","lt.objs.langs.julia.results/unregister-result",4051741983),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.results.__BEH__unregister_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null));
lt.objs.langs.julia.results.__BEH__raise = (function __BEH__raise(this$,p__9308){var map__9310 = p__9308;var map__9310__$1 = ((cljs.core.seq_QMARK_.call(null,map__9310))?cljs.core.apply.call(null,cljs.core.hash_map,map__9310):map__9310);var args = cljs.core.get.call(null,map__9310__$1,new cljs.core.Keyword(null,"args","args",1016906831));var event = cljs.core.get.call(null,map__9310__$1,new cljs.core.Keyword(null,"event","event",1110795788));var id = cljs.core.get.call(null,map__9310__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(cljs.core.deref.call(null,lt.objs.langs.julia.results.results).call(null,id)))
{return cljs.core.apply.call(null,lt.object.raise,cljs.core.deref.call(null,lt.objs.langs.julia.results.results).call(null,id),cljs.core.keyword.call(null,event),args);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.results","raise","lt.objs.langs.julia.results/raise",1547641661),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.results.__BEH__raise,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raise","raise",1122179934),null], null), null));
lt.objs.langs.julia.results.eval_with = (function eval_with(obj,code){return eval([cljs.core.str("(function () {"),cljs.core.str(code),cljs.core.str("})")].join('')).call(obj);
});
lt.objs.langs.julia.results.__BEH__eval = (function __BEH__eval(this$,code){return lt.objs.langs.julia.results.eval_with.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),code);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.results","eval","lt.objs.langs.julia.results/eval",1048222445),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.results.__BEH__eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.object.add_behavior_BANG_.call(null,lt.objs.langs.julia.julia,new cljs.core.Keyword("lt.objs.langs.julia.results","raise","lt.objs.langs.julia.results/raise",1547641661));
lt.objs.langs.julia.results.__BEH__reval = (function __BEH__reval(result,vals){var id = lt.objs.langs.julia.results.id.call(null,result);var client = lt.objs.langs.julia.results.__GT_client.call(null,id);if(cljs.core.truth_(client))
{return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"result.reval","result.reval",4434462319),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"vals","vals",1017516260),cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",1125876963),vals),new cljs.core.Keyword(null,"locs","locs",1017231525),cljs.core.map.call(null,new cljs.core.Keyword(null,"loc","loc",1014011570),vals)], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.results","reval","lt.objs.langs.julia.results/reval",1547510623),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.results.__BEH__reval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",1123155132),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.patch')) {
goog.provide('lt.objs.langs.julia.patch');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.context');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.context');
goog.require('lt.objs.command');
goog.require('lt.objs.eval');
goog.require('crate.binding');
goog.require('lt.objs.keyboard');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.eval');
goog.require('lt.objs.command');
goog.require('lt.objs.keyboard');
lt.objs.langs.julia.patch.__GT_inline_exception = (function __GT_inline_exception(this$,info){var e__7959__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,lt.objs.eval.__GT_exception_class)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),lt.objs.eval.__GT_spacing.call(null,lt.objs.editor.line.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(info))))], null),((typeof new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)], null))], null));var seq__8978_8994 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7959__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"click","click",1108654330));
});})(e__7959__auto__))
,new cljs.core.Keyword(null,"contextmenu","contextmenu",911789824),((function (e__7959__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"menu!","menu!",1117686292),e);
});})(e__7959__auto__))
,new cljs.core.Keyword(null,"dblclick","dblclick",3463991820),((function (e__7959__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"double-click","double-click",956590078));
});})(e__7959__auto__))
], null)));var chunk__8979_8995 = null;var count__8980_8996 = 0;var i__8981_8997 = 0;while(true){
if((i__8981_8997 < count__8980_8996))
{var vec__8982_8998 = cljs.core._nth.call(null,chunk__8979_8995,i__8981_8997);var ev__7960__auto___8999 = cljs.core.nth.call(null,vec__8982_8998,0,null);var func__7961__auto___9000 = cljs.core.nth.call(null,vec__8982_8998,1,null);lt.util.dom.on.call(null,e__7959__auto__,ev__7960__auto___8999,func__7961__auto___9000);
{
var G__9001 = seq__8978_8994;
var G__9002 = chunk__8979_8995;
var G__9003 = count__8980_8996;
var G__9004 = (i__8981_8997 + 1);
seq__8978_8994 = G__9001;
chunk__8979_8995 = G__9002;
count__8980_8996 = G__9003;
i__8981_8997 = G__9004;
continue;
}
} else
{var temp__4092__auto___9005 = cljs.core.seq.call(null,seq__8978_8994);if(temp__4092__auto___9005)
{var seq__8978_9006__$1 = temp__4092__auto___9005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8978_9006__$1))
{var c__7126__auto___9007 = cljs.core.chunk_first.call(null,seq__8978_9006__$1);{
var G__9008 = cljs.core.chunk_rest.call(null,seq__8978_9006__$1);
var G__9009 = c__7126__auto___9007;
var G__9010 = cljs.core.count.call(null,c__7126__auto___9007);
var G__9011 = 0;
seq__8978_8994 = G__9008;
chunk__8979_8995 = G__9009;
count__8980_8996 = G__9010;
i__8981_8997 = G__9011;
continue;
}
} else
{var vec__8983_9012 = cljs.core.first.call(null,seq__8978_9006__$1);var ev__7960__auto___9013 = cljs.core.nth.call(null,vec__8983_9012,0,null);var func__7961__auto___9014 = cljs.core.nth.call(null,vec__8983_9012,1,null);lt.util.dom.on.call(null,e__7959__auto__,ev__7960__auto___9013,func__7961__auto___9014);
{
var G__9015 = cljs.core.next.call(null,seq__8978_9006__$1);
var G__9016 = null;
var G__9017 = 0;
var G__9018 = 0;
seq__8978_8994 = G__9015;
chunk__8979_8995 = G__9016;
count__8980_8996 = G__9017;
i__8981_8997 = G__9018;
continue;
}
}
} else
{}
}
break;
}
return e__7959__auto__;
});
lt.objs.eval.__GT_inline_exception = lt.objs.langs.julia.patch.__GT_inline_exception;
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.profiler')) {
goog.provide('lt.objs.langs.julia.profiler');
goog.require('cljs.core');
goog.require('lt.objs.menu');
goog.require('lt.util.dom');
goog.require('lt.objs.langs.julia.util');
goog.require('crate.core');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.menu');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('crate.core');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.editor.pool');
lt.objs.langs.julia.profiler.__BEH__render_bars = (function __BEH__render_bars(editor){return lt.objs.editor.on.call(null,editor,new cljs.core.Keyword(null,"renderLine","renderLine",2207751708),lt.objs.langs.julia.profiler.render_bar);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.profiler","render-bars","lt.objs.langs.julia.profiler/render-bars",4767838464),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.profiler.__BEH__render_bars,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.objs.langs.julia.profiler.render_bar = (function render_bar(cm,line,dom){var temp__4092__auto__ = line.percent;if(cljs.core.truth_(temp__4092__auto__))
{var percent = temp__4092__auto__;return lt.util.dom.append.call(null,dom,crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress","div.progress",1377547868),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width:"),cljs.core.str(percent)].join('')], null)], null)));
} else
{return null;
}
});
lt.objs.langs.julia.profiler._PERCENT_ = (function _PERCENT_(x){return [cljs.core.str((x * 100)),cljs.core.str("%")].join('');
});
lt.objs.langs.julia.profiler.editor_for_file = (function editor_for_file(file){return cljs.core.first.call(null,lt.objs.editor.pool.by_path.call(null,file));
});
lt.objs.langs.julia.profiler.lines = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
lt.objs.langs.julia.profiler.refresh_line = (function refresh_line(p__9111){var map__9113 = p__9111;var map__9113__$1 = ((cljs.core.seq_QMARK_.call(null,map__9113))?cljs.core.apply.call(null,cljs.core.hash_map,map__9113):map__9113);var l = map__9113__$1;var handle = cljs.core.get.call(null,map__9113__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));var percent = cljs.core.get.call(null,map__9113__$1,new cljs.core.Keyword(null,"percent","percent",4629944247));var line = cljs.core.get.call(null,map__9113__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__9113__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_(handle))
{return l;
} else
{var temp__4090__auto__ = lt.objs.langs.julia.profiler.editor_for_file.call(null,file);if(cljs.core.truth_(temp__4090__auto__))
{var ed = temp__4090__auto__;var handle__$1 = lt.objs.editor.line_handle.call(null,ed,(line - 1));if(cljs.core.truth_(handle__$1))
{handle__$1.percent = lt.objs.langs.julia.profiler._PERCENT_.call(null,percent);
} else
{}
return cljs.core.assoc.call(null,l,new cljs.core.Keyword(null,"handle","handle",4084294042),handle__$1,new cljs.core.Keyword(null,"ed","ed",1013907473),ed);
} else
{return l;
}
}
});
lt.objs.langs.julia.profiler.refresh_lines = (function refresh_lines(lines){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,lt.objs.langs.julia.profiler.refresh_line,lines));
});
lt.objs.langs.julia.profiler.editors = (function editors(lines){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473),lines));
});
lt.objs.langs.julia.profiler.refresh_and_update = (function refresh_and_update(lines){var lines__$1 = lt.objs.langs.julia.profiler.refresh_lines.call(null,lines);var seq__9120_9184 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.editors.call(null,lines__$1));var chunk__9122_9185 = null;var count__9123_9186 = 0;var i__9124_9187 = 0;while(true){
if((i__9124_9187 < count__9123_9186))
{var ed_9188 = cljs.core._nth.call(null,chunk__9122_9185,i__9124_9187);if(cljs.core.truth_((function (){var and__6366__auto__ = ed_9188;if(cljs.core.truth_(and__6366__auto__))
{return cljs.core.deref.call(null,ed_9188);
} else
{return and__6366__auto__;
}
})()))
{lt.objs.editor.refresh.call(null,ed_9188);
{
var G__9189 = seq__9120_9184;
var G__9190 = chunk__9122_9185;
var G__9191 = count__9123_9186;
var G__9192 = (i__9124_9187 + 1);
seq__9120_9184 = G__9189;
chunk__9122_9185 = G__9190;
count__9123_9186 = G__9191;
i__9124_9187 = G__9192;
continue;
}
} else
{{
var G__9193 = seq__9120_9184;
var G__9194 = chunk__9122_9185;
var G__9195 = count__9123_9186;
var G__9196 = (i__9124_9187 + 1);
seq__9120_9184 = G__9193;
chunk__9122_9185 = G__9194;
count__9123_9186 = G__9195;
i__9124_9187 = G__9196;
continue;
}
}
} else
{var temp__4092__auto___9197 = cljs.core.seq.call(null,seq__9120_9184);if(temp__4092__auto___9197)
{var seq__9120_9198__$1 = temp__4092__auto___9197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9120_9198__$1))
{var c__7126__auto___9199 = cljs.core.chunk_first.call(null,seq__9120_9198__$1);{
var G__9200 = cljs.core.chunk_rest.call(null,seq__9120_9198__$1);
var G__9201 = c__7126__auto___9199;
var G__9202 = cljs.core.count.call(null,c__7126__auto___9199);
var G__9203 = 0;
seq__9120_9184 = G__9200;
chunk__9122_9185 = G__9201;
count__9123_9186 = G__9202;
i__9124_9187 = G__9203;
continue;
}
} else
{var ed_9204 = cljs.core.first.call(null,seq__9120_9198__$1);if(cljs.core.truth_((function (){var and__6366__auto__ = ed_9204;if(cljs.core.truth_(and__6366__auto__))
{return cljs.core.deref.call(null,ed_9204);
} else
{return and__6366__auto__;
}
})()))
{lt.objs.editor.refresh.call(null,ed_9204);
{
var G__9205 = cljs.core.next.call(null,seq__9120_9198__$1);
var G__9206 = null;
var G__9207 = 0;
var G__9208 = 0;
seq__9120_9184 = G__9205;
chunk__9122_9185 = G__9206;
count__9123_9186 = G__9207;
i__9124_9187 = G__9208;
continue;
}
} else
{{
var G__9209 = cljs.core.next.call(null,seq__9120_9198__$1);
var G__9210 = null;
var G__9211 = 0;
var G__9212 = 0;
seq__9120_9184 = G__9209;
chunk__9122_9185 = G__9210;
count__9123_9186 = G__9211;
i__9124_9187 = G__9212;
continue;
}
}
}
} else
{}
}
break;
}
return lines__$1;
});
lt.objs.langs.julia.profiler.dom_bars = (function dom_bars(){return lt.util.dom.$$.call(null,".CodeMirror-code .progress");
});
lt.objs.langs.julia.profiler._STAR_clearing_STAR_ = false;
lt.objs.langs.julia.profiler.clear = (function clear(){if(cljs.core.truth_(lt.objs.langs.julia.profiler._STAR_clearing_STAR_))
{return null;
} else
{var seq__9138_9213 = cljs.core.seq.call(null,cljs.core.deref.call(null,lt.objs.langs.julia.profiler.lines));var chunk__9140_9214 = null;var count__9141_9215 = 0;var i__9142_9216 = 0;while(true){
if((i__9142_9216 < count__9141_9215))
{var map__9144_9217 = cljs.core._nth.call(null,chunk__9140_9214,i__9142_9216);var map__9144_9218__$1 = ((cljs.core.seq_QMARK_.call(null,map__9144_9217))?cljs.core.apply.call(null,cljs.core.hash_map,map__9144_9217):map__9144_9217);var handle_9219 = cljs.core.get.call(null,map__9144_9218__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_9219))
{handle_9219.percent = null;
{
var G__9220 = seq__9138_9213;
var G__9221 = chunk__9140_9214;
var G__9222 = count__9141_9215;
var G__9223 = (i__9142_9216 + 1);
seq__9138_9213 = G__9220;
chunk__9140_9214 = G__9221;
count__9141_9215 = G__9222;
i__9142_9216 = G__9223;
continue;
}
} else
{{
var G__9224 = seq__9138_9213;
var G__9225 = chunk__9140_9214;
var G__9226 = count__9141_9215;
var G__9227 = (i__9142_9216 + 1);
seq__9138_9213 = G__9224;
chunk__9140_9214 = G__9225;
count__9141_9215 = G__9226;
i__9142_9216 = G__9227;
continue;
}
}
} else
{var temp__4092__auto___9228 = cljs.core.seq.call(null,seq__9138_9213);if(temp__4092__auto___9228)
{var seq__9138_9229__$1 = temp__4092__auto___9228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9138_9229__$1))
{var c__7126__auto___9230 = cljs.core.chunk_first.call(null,seq__9138_9229__$1);{
var G__9231 = cljs.core.chunk_rest.call(null,seq__9138_9229__$1);
var G__9232 = c__7126__auto___9230;
var G__9233 = cljs.core.count.call(null,c__7126__auto___9230);
var G__9234 = 0;
seq__9138_9213 = G__9231;
chunk__9140_9214 = G__9232;
count__9141_9215 = G__9233;
i__9142_9216 = G__9234;
continue;
}
} else
{var map__9145_9235 = cljs.core.first.call(null,seq__9138_9229__$1);var map__9145_9236__$1 = ((cljs.core.seq_QMARK_.call(null,map__9145_9235))?cljs.core.apply.call(null,cljs.core.hash_map,map__9145_9235):map__9145_9235);var handle_9237 = cljs.core.get.call(null,map__9145_9236__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_9237))
{handle_9237.percent = null;
{
var G__9238 = cljs.core.next.call(null,seq__9138_9229__$1);
var G__9239 = null;
var G__9240 = 0;
var G__9241 = 0;
seq__9138_9213 = G__9238;
chunk__9140_9214 = G__9239;
count__9141_9215 = G__9240;
i__9142_9216 = G__9241;
continue;
}
} else
{{
var G__9242 = cljs.core.next.call(null,seq__9138_9229__$1);
var G__9243 = null;
var G__9244 = 0;
var G__9245 = 0;
seq__9138_9213 = G__9242;
chunk__9140_9214 = G__9243;
count__9141_9215 = G__9244;
i__9142_9216 = G__9245;
continue;
}
}
}
} else
{}
}
break;
}
cljs.core.reset_BANG_.call(null,lt.objs.langs.julia.profiler.lines,cljs.core.PersistentHashSet.EMPTY);
var seq__9146 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.dom_bars.call(null));var chunk__9147 = null;var count__9148 = 0;var i__9149 = 0;while(true){
if((i__9149 < count__9148))
{var bar = cljs.core._nth.call(null,chunk__9147,i__9149);bar.remove();
{
var G__9246 = seq__9146;
var G__9247 = chunk__9147;
var G__9248 = count__9148;
var G__9249 = (i__9149 + 1);
seq__9146 = G__9246;
chunk__9147 = G__9247;
count__9148 = G__9248;
i__9149 = G__9249;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9146);if(temp__4092__auto__)
{var seq__9146__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9146__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__9146__$1);{
var G__9250 = cljs.core.chunk_rest.call(null,seq__9146__$1);
var G__9251 = c__7126__auto__;
var G__9252 = cljs.core.count.call(null,c__7126__auto__);
var G__9253 = 0;
seq__9146 = G__9250;
chunk__9147 = G__9251;
count__9148 = G__9252;
i__9149 = G__9253;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__9146__$1);bar.remove();
{
var G__9254 = cljs.core.next.call(null,seq__9146__$1);
var G__9255 = null;
var G__9256 = 0;
var G__9257 = 0;
seq__9146 = G__9254;
chunk__9147 = G__9255;
count__9148 = G__9256;
i__9149 = G__9257;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});
lt.objs.langs.julia.profiler.callback = (function callback(f){return setTimeout(f,0);
});
lt.objs.langs.julia.profiler.animate_in = (function animate_in(){var bars = lt.objs.langs.julia.profiler.dom_bars.call(null);var seq__9158_9258 = cljs.core.seq.call(null,bars);var chunk__9159_9259 = null;var count__9160_9260 = 0;var i__9161_9261 = 0;while(true){
if((i__9161_9261 < count__9160_9260))
{var bar_9262 = cljs.core._nth.call(null,chunk__9159_9259,i__9161_9261);lt.util.dom.remove_class.call(null,bar_9262,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.add_class.call(null,bar_9262,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9263 = seq__9158_9258;
var G__9264 = chunk__9159_9259;
var G__9265 = count__9160_9260;
var G__9266 = (i__9161_9261 + 1);
seq__9158_9258 = G__9263;
chunk__9159_9259 = G__9264;
count__9160_9260 = G__9265;
i__9161_9261 = G__9266;
continue;
}
} else
{var temp__4092__auto___9267 = cljs.core.seq.call(null,seq__9158_9258);if(temp__4092__auto___9267)
{var seq__9158_9268__$1 = temp__4092__auto___9267;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9158_9268__$1))
{var c__7126__auto___9269 = cljs.core.chunk_first.call(null,seq__9158_9268__$1);{
var G__9270 = cljs.core.chunk_rest.call(null,seq__9158_9268__$1);
var G__9271 = c__7126__auto___9269;
var G__9272 = cljs.core.count.call(null,c__7126__auto___9269);
var G__9273 = 0;
seq__9158_9258 = G__9270;
chunk__9159_9259 = G__9271;
count__9160_9260 = G__9272;
i__9161_9261 = G__9273;
continue;
}
} else
{var bar_9274 = cljs.core.first.call(null,seq__9158_9268__$1);lt.util.dom.remove_class.call(null,bar_9274,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.add_class.call(null,bar_9274,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9275 = cljs.core.next.call(null,seq__9158_9268__$1);
var G__9276 = null;
var G__9277 = 0;
var G__9278 = 0;
seq__9158_9258 = G__9275;
chunk__9159_9259 = G__9276;
count__9160_9260 = G__9277;
i__9161_9261 = G__9278;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.langs.julia.profiler.callback.call(null,((function (bars){
return (function (){var seq__9162 = cljs.core.seq.call(null,bars);var chunk__9163 = null;var count__9164 = 0;var i__9165 = 0;while(true){
if((i__9165 < count__9164))
{var bar = cljs.core._nth.call(null,chunk__9163,i__9165);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.remove_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9279 = seq__9162;
var G__9280 = chunk__9163;
var G__9281 = count__9164;
var G__9282 = (i__9165 + 1);
seq__9162 = G__9279;
chunk__9163 = G__9280;
count__9164 = G__9281;
i__9165 = G__9282;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9162);if(temp__4092__auto__)
{var seq__9162__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9162__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__9162__$1);{
var G__9283 = cljs.core.chunk_rest.call(null,seq__9162__$1);
var G__9284 = c__7126__auto__;
var G__9285 = cljs.core.count.call(null,c__7126__auto__);
var G__9286 = 0;
seq__9162 = G__9283;
chunk__9163 = G__9284;
count__9164 = G__9285;
i__9165 = G__9286;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__9162__$1);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.remove_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9287 = cljs.core.next.call(null,seq__9162__$1);
var G__9288 = null;
var G__9289 = 0;
var G__9290 = 0;
seq__9162 = G__9287;
chunk__9163 = G__9288;
count__9164 = G__9289;
i__9165 = G__9290;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(bars))
);
});
lt.objs.langs.julia.profiler.animate_out = (function animate_out(){var seq__9170 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.dom_bars.call(null));var chunk__9171 = null;var count__9172 = 0;var i__9173 = 0;while(true){
if((i__9173 < count__9172))
{var bar = cljs.core._nth.call(null,chunk__9171,i__9173);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9291 = seq__9170;
var G__9292 = chunk__9171;
var G__9293 = count__9172;
var G__9294 = (i__9173 + 1);
seq__9170 = G__9291;
chunk__9171 = G__9292;
count__9172 = G__9293;
i__9173 = G__9294;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9170);if(temp__4092__auto__)
{var seq__9170__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9170__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__9170__$1);{
var G__9295 = cljs.core.chunk_rest.call(null,seq__9170__$1);
var G__9296 = c__7126__auto__;
var G__9297 = cljs.core.count.call(null,c__7126__auto__);
var G__9298 = 0;
seq__9170 = G__9295;
chunk__9171 = G__9296;
count__9172 = G__9297;
i__9173 = G__9298;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__9170__$1);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9299 = cljs.core.next.call(null,seq__9170__$1);
var G__9300 = null;
var G__9301 = 0;
var G__9302 = 0;
seq__9170 = G__9299;
chunk__9171 = G__9300;
count__9172 = G__9301;
i__9173 = G__9302;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.objs.langs.julia.profiler.set_lines = (function set_lines(lines_SINGLEQUOTE_){lt.objs.langs.julia.profiler.clear.call(null);
cljs.core.reset_BANG_.call(null,lt.objs.langs.julia.profiler.lines,lt.objs.langs.julia.profiler.refresh_and_update.call(null,lines_SINGLEQUOTE_));
return lt.objs.langs.julia.profiler.animate_in.call(null);
});
lt.objs.langs.julia.profiler.clear_lines = (function clear_lines(){lt.objs.langs.julia.profiler._STAR_clearing_STAR_ = true;
lt.objs.langs.julia.profiler.animate_out.call(null);
return setTimeout((function (){lt.objs.langs.julia.profiler._STAR_clearing_STAR_ = false;
return lt.objs.langs.julia.profiler.clear.call(null);
}),200);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.profiler","refresh-on-open","lt.objs.langs.julia.profiler/refresh-on-open",2060217609),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (){return lt.objs.langs.julia.profiler.refresh_and_update.call(null,cljs.core.deref.call(null,lt.objs.langs.julia.profiler.lines));
}),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.objs.langs.julia.profiler.__BEH__result = (function __BEH__result(editor,res){lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"julia.result","julia.result",4253994436),cljs.core.merge.call(null,res,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",1017117469),true,new cljs.core.Keyword(null,"under","under",1125332554),true], null)));
var res_obj_9303 = lt.objs.langs.julia.util.widget.call(null,editor,cljs.core.second.call(null,new cljs.core.Keyword(null,"bounds","bounds",3925666343).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"underline","underline",4281907774));lt.objs.langs.julia.profiler.listen_BANG_.call(null,res_obj_9303);
lt.object.add_tags.call(null,res_obj_9303,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"julia.profile-result","julia.profile-result",1163667816)], null));
return lt.objs.langs.julia.profiler.set_lines.call(null,res.call(null,new cljs.core.Keyword(null,"lines","lines",1116881521)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.profiler","result","lt.objs.langs.julia.profiler/result",3754302082),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.profiler.__BEH__result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.profile-result","julia.profile-result",1163667816),null], null), null));
lt.objs.langs.julia.profiler.listen_BANG_ = (function listen_BANG_(obj){return lt.objs.langs.julia.profiler.listen_object = obj;
});
lt.objs.langs.julia.profiler.__BEH__clear = (function __BEH__clear(this$){if(cljs.core._EQ_.call(null,this$,lt.objs.langs.julia.profiler.listen_object))
{return lt.objs.langs.julia.profiler.clear.call(null);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.profiler","clear","lt.objs.langs.julia.profiler/clear",2778606290),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.profiler.__BEH__clear,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null));
lt.objs.langs.julia.profiler.reset_zoom = (function reset_zoom(svg){var svg__$1 = Snap(lt.util.dom.$.call(null,new cljs.core.Keyword(null,".root",".root",1059892610),svg));return svg__$1.animate({"transform": Snap.matrix()},200);
});
lt.objs.langs.julia.profiler.__BEH__menu = (function __BEH__menu(this$,ev){lt.objs.menu.show_menu.call(null,lt.objs.menu.menu.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Remove Profile Tree",new cljs.core.Keyword(null,"click","click",1108654330),(function (){lt.objs.langs.julia.profiler.clear_lines.call(null);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Reset Zoom",new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.langs.julia.profiler.reset_zoom.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})], null)], null)),ev.clientX,ev.clientY);
lt.util.dom.prevent.call(null,ev);
return lt.util.dom.stop_propagation.call(null,ev);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.profiler","menu","lt.objs.langs.julia.profiler/menu",3089665992),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.profiler.__BEH__menu,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu!","menu!",1117686292),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.runmode')) {
goog.provide('lt.plugins.runmode');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
lt.plugins.runmode.process_one = (function process_one(node){var code = node.innerText;var mode = node.dataset.lang;if(cljs.core.truth_(mode))
{node.innerText = "";
CodeMirror.runMode(code,mode,node);
} else
{}
return node;
});
lt.plugins.runmode.process_BANG_ = (function process_BANG_(node){lt.plugins.runmode.process_one.call(null,node);
var seq__8397_8411 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,new cljs.core.Keyword(null,".code",".code",1059445389),node));var chunk__8398_8412 = null;var count__8399_8413 = 0;var i__8400_8414 = 0;while(true){
if((i__8400_8414 < count__8399_8413))
{var node_8415__$1 = cljs.core._nth.call(null,chunk__8398_8412,i__8400_8414);lt.plugins.runmode.process_one.call(null,node_8415__$1);
{
var G__8416 = seq__8397_8411;
var G__8417 = chunk__8398_8412;
var G__8418 = count__8399_8413;
var G__8419 = (i__8400_8414 + 1);
seq__8397_8411 = G__8416;
chunk__8398_8412 = G__8417;
count__8399_8413 = G__8418;
i__8400_8414 = G__8419;
continue;
}
} else
{var temp__4092__auto___8420 = cljs.core.seq.call(null,seq__8397_8411);if(temp__4092__auto___8420)
{var seq__8397_8421__$1 = temp__4092__auto___8420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8397_8421__$1))
{var c__7126__auto___8422 = cljs.core.chunk_first.call(null,seq__8397_8421__$1);{
var G__8423 = cljs.core.chunk_rest.call(null,seq__8397_8421__$1);
var G__8424 = c__7126__auto___8422;
var G__8425 = cljs.core.count.call(null,c__7126__auto___8422);
var G__8426 = 0;
seq__8397_8411 = G__8423;
chunk__8398_8412 = G__8424;
count__8399_8413 = G__8425;
i__8400_8414 = G__8426;
continue;
}
} else
{var node_8427__$1 = cljs.core.first.call(null,seq__8397_8421__$1);lt.plugins.runmode.process_one.call(null,node_8427__$1);
{
var G__8428 = cljs.core.next.call(null,seq__8397_8421__$1);
var G__8429 = null;
var G__8430 = 0;
var G__8431 = 0;
seq__8397_8411 = G__8428;
chunk__8398_8412 = G__8429;
count__8399_8413 = G__8430;
i__8400_8414 = G__8431;
continue;
}
}
} else
{}
}
break;
}
return node;
});
}
if(!lt.util.load.provided_QMARK_('lt.objs.breakpoint')) {
goog.provide('lt.objs.breakpoint');
goog.require('cljs.core');
goog.require('lt.objs.menu');
goog.require('lt.util.dom');
goog.require('crate.core');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.menu');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('crate.core');
goog.require('lt.objs.editor.pool');
lt.objs.breakpoint.gutter_node = (function gutter_node(ed,line){var markers = lt.objs.editor.__GT_cm_ed.call(null,ed).lineInfo((line - 1)).gutterMarkers;if(cljs.core.truth_(markers))
{return (markers["CodeMirror-linenumbers"]);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
lt.objs.breakpoint.set_gutter_node = (function() { 
var set_gutter_node__delegate = function (ed,line,p__8043){var vec__8045 = p__8043;var node = cljs.core.nth.call(null,vec__8045,0,null);return lt.objs.editor.__GT_cm_ed.call(null,ed).setGutterMarker((line - 1),"CodeMirror-linenumbers",node);
};
var set_gutter_node = function (ed,line,var_args){
var p__8043 = null;if (arguments.length > 2) {
  p__8043 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_gutter_node__delegate.call(this,ed,line,p__8043);};
set_gutter_node.cljs$lang$maxFixedArity = 2;
set_gutter_node.cljs$lang$applyTo = (function (arglist__8056){
var ed = cljs.core.first(arglist__8056);
arglist__8056 = cljs.core.next(arglist__8056);
var line = cljs.core.first(arglist__8056);
var p__8043 = cljs.core.rest(arglist__8056);
return set_gutter_node__delegate(ed,line,p__8043);
});
set_gutter_node.cljs$core$IFn$_invoke$arity$variadic = set_gutter_node__delegate;
return set_gutter_node;
})()
;
lt.objs.breakpoint.show_gutter_menu = (function show_gutter_menu(ed,l,e){var items_8057 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",1119910592),lt.object.raise_reduce.call(null,ed,new cljs.core.Keyword(null,"gutter-menu+","gutter-menu+",521043692),cljs.core.PersistentVector.EMPTY,l));lt.objs.menu.show_menu.call(null,lt.objs.menu.menu.call(null,items_8057),e.clientX,e.clientY);
lt.util.dom.prevent.call(null,e);
return lt.util.dom.stop_propagation.call(null,e);
});
lt.objs.breakpoint.__BEH__gutter_menu = (function __BEH__gutter_menu(ed){return lt.objs.editor.on.call(null,ed,new cljs.core.Keyword(null,"gutterContextMenu","gutterContextMenu",3161414405),(function (cm,l,gutter,e){if(cljs.core._EQ_.call(null,gutter,"CodeMirror-linenumbers"))
{return lt.objs.breakpoint.show_gutter_menu.call(null,ed,(l + 1),e);
} else
{return null;
}
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.breakpoint","gutter-menu","lt.objs.breakpoint/gutter-menu",3028409845),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.breakpoint.__BEH__gutter_menu,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.objs.breakpoint.__BEH__breakpoint_menu = (function __BEH__breakpoint_menu(ed,items,line){var has_bp = lt.objs.breakpoint.gutter_node.call(null,ed,line);return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1116631654),"Add \u25CF breakpoint",new cljs.core.Keyword(null,"order","order",1119910592),1,new cljs.core.Keyword(null,"enabled","enabled",3699277491),cljs.core.not.call(null,has_bp),new cljs.core.Keyword(null,"click","click",1108654330),((function (has_bp){
return (function (){return lt.objs.breakpoint.set_gutter_node.call(null,ed,line,crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.CodeMirror-linenumber.warn","div.CodeMirror-linenumber.warn",2805360869),"\u25CF"], null)));
});})(has_bp))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1116631654),"Add \u25A0 breakpoint",new cljs.core.Keyword(null,"order","order",1119910592),2,new cljs.core.Keyword(null,"enabled","enabled",3699277491),cljs.core.not.call(null,has_bp),new cljs.core.Keyword(null,"click","click",1108654330),((function (has_bp){
return (function (){return lt.objs.breakpoint.set_gutter_node.call(null,ed,line,crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.CodeMirror-linenumber.stop","div.CodeMirror-linenumber.stop",2805259873),"\u25A0"], null)));
});})(has_bp))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1116631654),"Clear breakpoints",new cljs.core.Keyword(null,"order","order",1119910592),3,new cljs.core.Keyword(null,"enabled","enabled",3699277491),has_bp,new cljs.core.Keyword(null,"click","click",1108654330),((function (has_bp){
return (function (){return lt.objs.breakpoint.set_gutter_node.call(null,ed,line);
});})(has_bp))
], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.breakpoint","breakpoint-menu","lt.objs.breakpoint/breakpoint-menu",2782389455),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.breakpoint.__BEH__breakpoint_menu,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutter-menu+","gutter-menu+",521043692),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.package')) {
goog.provide('lt.objs.langs.julia.package$');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.platform');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
lt.objs.langs.julia.package$.package_ui = (function package_ui(){var e__7959__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",4117657110),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),"http://pkg.julialang.org"], null)], null));var seq__8911_8935 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8912_8936 = null;var count__8913_8937 = 0;var i__8914_8938 = 0;while(true){
if((i__8914_8938 < count__8913_8937))
{var vec__8915_8939 = cljs.core._nth.call(null,chunk__8912_8936,i__8914_8938);var ev__7960__auto___8940 = cljs.core.nth.call(null,vec__8915_8939,0,null);var func__7961__auto___8941 = cljs.core.nth.call(null,vec__8915_8939,1,null);lt.util.dom.on.call(null,e__7959__auto__,ev__7960__auto___8940,func__7961__auto___8941);
{
var G__8942 = seq__8911_8935;
var G__8943 = chunk__8912_8936;
var G__8944 = count__8913_8937;
var G__8945 = (i__8914_8938 + 1);
seq__8911_8935 = G__8942;
chunk__8912_8936 = G__8943;
count__8913_8937 = G__8944;
i__8914_8938 = G__8945;
continue;
}
} else
{var temp__4092__auto___8946 = cljs.core.seq.call(null,seq__8911_8935);if(temp__4092__auto___8946)
{var seq__8911_8947__$1 = temp__4092__auto___8946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8911_8947__$1))
{var c__7126__auto___8948 = cljs.core.chunk_first.call(null,seq__8911_8947__$1);{
var G__8949 = cljs.core.chunk_rest.call(null,seq__8911_8947__$1);
var G__8950 = c__7126__auto___8948;
var G__8951 = cljs.core.count.call(null,c__7126__auto___8948);
var G__8952 = 0;
seq__8911_8935 = G__8949;
chunk__8912_8936 = G__8950;
count__8913_8937 = G__8951;
i__8914_8938 = G__8952;
continue;
}
} else
{var vec__8916_8953 = cljs.core.first.call(null,seq__8911_8947__$1);var ev__7960__auto___8954 = cljs.core.nth.call(null,vec__8916_8953,0,null);var func__7961__auto___8955 = cljs.core.nth.call(null,vec__8916_8953,1,null);lt.util.dom.on.call(null,e__7959__auto__,ev__7960__auto___8954,func__7961__auto___8955);
{
var G__8956 = cljs.core.next.call(null,seq__8911_8947__$1);
var G__8957 = null;
var G__8958 = 0;
var G__8959 = 0;
seq__8911_8935 = G__8956;
chunk__8912_8936 = G__8957;
count__8913_8937 = G__8958;
i__8914_8938 = G__8959;
continue;
}
}
} else
{}
}
break;
}
return e__7959__auto__;
});
lt.objs.langs.julia.package$.process_link = (function process_link(a){var target = lt.util.dom.attr.call(null,a,new cljs.core.Keyword(null,"href","href",1017115293));a.onclick = ((function (target){
return (function (e){return lt.objs.platform.open_url.call(null,target);
});})(target))
;
return lt.util.dom.attr.call(null,a,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"javascript:void(0);"], null));
});
lt.objs.langs.julia.package$.init_ui = (function init_ui(frame){lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,".titlebox",".titlebox",1900347923),frame.contentDocument),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),new cljs.core.Keyword(null,"none","none",1017291434)], null));
var seq__8921 = cljs.core.seq.call(null,lt.util.dom.lazy_nl_via_item.call(null,lt.util.dom.$$.call(null,new cljs.core.Keyword(null,"a","a",1013904339),frame.contentDocument)));var chunk__8922 = null;var count__8923 = 0;var i__8924 = 0;while(true){
if((i__8924 < count__8923))
{var a = cljs.core._nth.call(null,chunk__8922,i__8924);lt.objs.langs.julia.package$.process_link.call(null,a);
{
var G__8960 = seq__8921;
var G__8961 = chunk__8922;
var G__8962 = count__8923;
var G__8963 = (i__8924 + 1);
seq__8921 = G__8960;
chunk__8922 = G__8961;
count__8923 = G__8962;
i__8924 = G__8963;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8921);if(temp__4092__auto__)
{var seq__8921__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8921__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8921__$1);{
var G__8964 = cljs.core.chunk_rest.call(null,seq__8921__$1);
var G__8965 = c__7126__auto__;
var G__8966 = cljs.core.count.call(null,c__7126__auto__);
var G__8967 = 0;
seq__8921 = G__8964;
chunk__8922 = G__8965;
count__8923 = G__8966;
i__8924 = G__8967;
continue;
}
} else
{var a = cljs.core.first.call(null,seq__8921__$1);lt.objs.langs.julia.package$.process_link.call(null,a);
{
var G__8968 = cljs.core.next.call(null,seq__8921__$1);
var G__8969 = null;
var G__8970 = 0;
var G__8971 = 0;
seq__8921 = G__8968;
chunk__8922 = G__8969;
count__8923 = G__8970;
i__8924 = G__8971;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.objs.langs.julia.package$.__BEH__on_close = (function __BEH__on_close(this$){return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.package","on-close","lt.objs.langs.julia.package/on-close",1030318367),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.package$.__BEH__on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.package","packages","lt.objs.langs.julia.package/packages",514515066),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.packages","julia.packages",1975951700),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia.package","on-close","lt.objs.langs.julia.package/on-close",1030318367)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){var frame = lt.objs.langs.julia.package$.package_ui.call(null);frame.onload = ((function (frame){
return (function (){return lt.objs.langs.julia.package$.init_ui.call(null,frame);
});})(frame))
;
return frame;
}));
lt.objs.langs.julia.package$.packages = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.package","packages","lt.objs.langs.julia.package/packages",514515066));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"julia.package-manager","julia.package-manager",3448442371),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Open the package manager",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.objs.langs.julia.package$.packages);
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.reptile')) {
goog.provide('lt.plugins.reptile');
goog.require('cljs.core');
goog.require('lt.util.js');
goog.require('lt.util.js');
goog.require('lt.util.dom');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('crate.core');
lt.plugins.reptile.line_handle = (function line_handle(ed,line){return lt.objs.editor.line_handle.call(null,ed,(line - 1));
});
lt.plugins.reptile.each_line = (function each_line(ed,start,end,f){return lt.objs.editor.__GT_cm_ed.call(null,ed).eachLine((start - 1),end,f);
});
lt.plugins.reptile.mark_text = (function mark_text(ed,line,p__8258,opts){var vec__8260 = p__8258;var start = cljs.core.nth.call(null,vec__8260,0,null);var end = cljs.core.nth.call(null,vec__8260,1,null);return lt.objs.editor.__GT_cm_ed.call(null,ed).markText({"ch": start, "line": (line - 1)},{"ch": end, "line": (line - 1)},cljs.core.clj__GT_js.call(null,opts));
});
lt.plugins.reptile.content = (function content(ed,line,p__8261){var vec__8263 = p__8261;var start = cljs.core.nth.call(null,vec__8263,0,null);var end = cljs.core.nth.call(null,vec__8263,1,null);return lt.objs.editor.__GT_cm_ed.call(null,ed).getRange({"ch": start, "line": (line - 1)},{"ch": end, "line": (line - 1)});
});
lt.plugins.reptile.here_SINGLEQUOTE_s_my_number = (function here_SINGLEQUOTE_s_my_number(handle){return (handle.lineNo() + 1);
});
/**
* @param {...*} var_args
*/
lt.plugins.reptile.call_me_maybe = (function() { 
var call_me_maybe__delegate = function (this$,f,args){var temp__4092__auto__ = (this$[cljs.core.name.call(null,f)]);if(cljs.core.truth_(temp__4092__auto__))
{var f__$1 = temp__4092__auto__;return f__$1.apply(this$,cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var call_me_maybe = function (this$,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return call_me_maybe__delegate.call(this,this$,f,args);};
call_me_maybe.cljs$lang$maxFixedArity = 2;
call_me_maybe.cljs$lang$applyTo = (function (arglist__8321){
var this$ = cljs.core.first(arglist__8321);
arglist__8321 = cljs.core.next(arglist__8321);
var f = cljs.core.first(arglist__8321);
var args = cljs.core.rest(arglist__8321);
return call_me_maybe__delegate(this$,f,args);
});
call_me_maybe.cljs$core$IFn$_invoke$arity$variadic = call_me_maybe__delegate;
return call_me_maybe;
})()
;
lt.plugins.reptile.line_styles = (function line_styles(lh){return cljs.core.vec.call(null,lh.styles);
});
/**
* @param {...*} var_args
*/
lt.plugins.reptile.conj_vec = (function() { 
var conj_vec__delegate = function (vec,args){return cljs.core.apply.call(null,cljs.core.conj,(function (){var or__6378__auto__ = vec;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),args);
};
var conj_vec = function (vec,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return conj_vec__delegate.call(this,vec,args);};
conj_vec.cljs$lang$maxFixedArity = 1;
conj_vec.cljs$lang$applyTo = (function (arglist__8322){
var vec = cljs.core.first(arglist__8322);
var args = cljs.core.rest(arglist__8322);
return conj_vec__delegate(vec,args);
});
conj_vec.cljs$core$IFn$_invoke$arity$variadic = conj_vec__delegate;
return conj_vec;
})()
;
lt.plugins.reptile.process_line_styles = (function process_line_styles(vec){var start = 0;var G__8269 = cljs.core.rest.call(null,vec);var vec__8270 = G__8269;var end = cljs.core.nth.call(null,vec__8270,0,null);var token = cljs.core.nth.call(null,vec__8270,1,null);var vec__$1 = cljs.core.nthnext.call(null,vec__8270,2);var tokens = cljs.core.PersistentArrayMap.EMPTY;var start__$1 = start;var G__8269__$1 = G__8269;var tokens__$1 = tokens;while(true){
var start__$2 = start__$1;var vec__8271 = G__8269__$1;var end__$1 = cljs.core.nth.call(null,vec__8271,0,null);var token__$1 = cljs.core.nth.call(null,vec__8271,1,null);var vec__$2 = cljs.core.nthnext.call(null,vec__8271,2);var tokens__$2 = tokens__$1;if(cljs.core.truth_(end__$1))
{{
var G__8323 = end__$1;
var G__8324 = vec__$2;
var G__8325 = cljs.core.update_in.call(null,tokens__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,token__$1)], null),lt.plugins.reptile.conj_vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$2,end__$1], null));
start__$1 = G__8323;
G__8269__$1 = G__8324;
tokens__$1 = G__8325;
continue;
}
} else
{return tokens__$2;
}
break;
}
});
lt.plugins.reptile.line_tokens = (function line_tokens(lh){return lt.plugins.reptile.process_line_styles.call(null,lt.plugins.reptile.line_styles.call(null,lh));
});
lt.plugins.reptile.numbers = (function numbers(lh){return new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(lt.plugins.reptile.line_tokens.call(null,lh));
});
/**
* @param {...*} var_args
*/
lt.plugins.reptile.listen_drag_BANG_ = (function() { 
var listen_drag_BANG___delegate = function (drag,p__8273){var vec__8275 = p__8273;var up = cljs.core.nth.call(null,vec__8275,0,null);window.onmousemove = ((function (vec__8275,up){
return (function (p1__8272_SHARP_){return drag.call(null,p1__8272_SHARP_.clientX,p1__8272_SHARP_.clientY);
});})(vec__8275,up))
;
return window.onmouseup = ((function (vec__8275,up){
return (function (e){window.onmousemove = null;
window.onmouseup = null;
if(cljs.core.truth_(up))
{return up.call(null,e.clientX,e.clientY);
} else
{return null;
}
});})(vec__8275,up))
;
};
var listen_drag_BANG_ = function (drag,var_args){
var p__8273 = null;if (arguments.length > 1) {
  p__8273 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_drag_BANG___delegate.call(this,drag,p__8273);};
listen_drag_BANG_.cljs$lang$maxFixedArity = 1;
listen_drag_BANG_.cljs$lang$applyTo = (function (arglist__8326){
var drag = cljs.core.first(arglist__8326);
var p__8273 = cljs.core.rest(arglist__8326);
return listen_drag_BANG___delegate(drag,p__8273);
});
listen_drag_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_drag_BANG___delegate;
return listen_drag_BANG_;
})()
;
lt.plugins.reptile.slider = (function slider(n){var e__7959__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-number.reptile.slider","span.cm-number.reptile.slider",698673436),n], null));var seq__8282_8327 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8283_8328 = null;var count__8284_8329 = 0;var i__8285_8330 = 0;while(true){
if((i__8285_8330 < count__8284_8329))
{var vec__8286_8331 = cljs.core._nth.call(null,chunk__8283_8328,i__8285_8330);var ev__7960__auto___8332 = cljs.core.nth.call(null,vec__8286_8331,0,null);var func__7961__auto___8333 = cljs.core.nth.call(null,vec__8286_8331,1,null);lt.util.dom.on.call(null,e__7959__auto__,ev__7960__auto___8332,func__7961__auto___8333);
{
var G__8334 = seq__8282_8327;
var G__8335 = chunk__8283_8328;
var G__8336 = count__8284_8329;
var G__8337 = (i__8285_8330 + 1);
seq__8282_8327 = G__8334;
chunk__8283_8328 = G__8335;
count__8284_8329 = G__8336;
i__8285_8330 = G__8337;
continue;
}
} else
{var temp__4092__auto___8338 = cljs.core.seq.call(null,seq__8282_8327);if(temp__4092__auto___8338)
{var seq__8282_8339__$1 = temp__4092__auto___8338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8282_8339__$1))
{var c__7126__auto___8340 = cljs.core.chunk_first.call(null,seq__8282_8339__$1);{
var G__8341 = cljs.core.chunk_rest.call(null,seq__8282_8339__$1);
var G__8342 = c__7126__auto___8340;
var G__8343 = cljs.core.count.call(null,c__7126__auto___8340);
var G__8344 = 0;
seq__8282_8327 = G__8341;
chunk__8283_8328 = G__8342;
count__8284_8329 = G__8343;
i__8285_8330 = G__8344;
continue;
}
} else
{var vec__8287_8345 = cljs.core.first.call(null,seq__8282_8339__$1);var ev__7960__auto___8346 = cljs.core.nth.call(null,vec__8287_8345,0,null);var func__7961__auto___8347 = cljs.core.nth.call(null,vec__8287_8345,1,null);lt.util.dom.on.call(null,e__7959__auto__,ev__7960__auto___8346,func__7961__auto___8347);
{
var G__8348 = cljs.core.next.call(null,seq__8282_8339__$1);
var G__8349 = null;
var G__8350 = 0;
var G__8351 = 0;
seq__8282_8327 = G__8348;
chunk__8283_8328 = G__8349;
count__8284_8329 = G__8350;
i__8285_8330 = G__8351;
continue;
}
}
} else
{}
}
break;
}
return e__7959__auto__;
});
lt.plugins.reptile.set_content_SINGLEQUOTE_ = (function set_content_SINGLEQUOTE_(mark_STAR_,content){var mark = cljs.core.deref.call(null,mark_STAR_);var node = mark.replacedWith;var loc = mark.find();var content__$1 = [cljs.core.str(content)].join('');mark.clear();
node.innerText = content__$1;
mark.doc.replaceRange(content__$1,loc.from,loc.to);
loc.to.ch = (loc.from.ch + content__$1.length);
return cljs.core.reset_BANG_.call(null,mark_STAR_,mark.doc.markText(loc.from,loc.to,{"replacedWith": node, "clearOnEnter": true}));
});
lt.plugins.reptile.set_content = lt.util.js.debounce.call(null,500,lt.plugins.reptile.set_content_SINGLEQUOTE_);
lt.plugins.reptile.mark_slider = (function mark_slider(ed,line,span,cb){var node = lt.plugins.reptile.slider.call(null,lt.plugins.reptile.content.call(null,ed,line,span));var mark = cljs.core.atom.call(null,lt.plugins.reptile.mark_text.call(null,ed,line,span,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clearOnEnter","clearOnEnter",3935072414),true,new cljs.core.Keyword(null,"replacedWith","replacedWith",1478763656),node], null)));node.onmousedown = ((function (node,mark){
return (function (e){e.preventDefault();
var current = node.innerText;return lt.plugins.reptile.listen_drag_BANG_.call(null,((function (current,node,mark){
return (function (x,y){var x__$1 = (x - e.clientX);var result = cb.call(null,current,x__$1);node.innerText = result;
return lt.plugins.reptile.set_content.call(null,mark,result);
});})(current,node,mark))
,((function (current,node,mark){
return (function (x,y){if((Math.abs((x - e.clientX)) < 1))
{return cljs.core.deref.call(null,mark).doc.setCursor(cljs.core.deref.call(null,mark).find().to);
} else
{return null;
}
});})(current,node,mark))
);
});})(node,mark))
;
return mark;
});
lt.plugins.reptile.valid_number_QMARK_ = (function valid_number_QMARK_(s){return cljs.core.re_find.call(null,/^[0-9]+$/,s);
});
lt.plugins.reptile.div = (function div(x,y){return Math.floor.call(null,(x / y));
});
lt.plugins.reptile.transform = (function transform(start,x){var start__$1 = parseInt(start);return (start__$1 + lt.plugins.reptile.div.call(null,x,5));
});
lt.plugins.reptile.__BEH__clear = (function __BEH__clear(this$){var seq__8292_8352 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8293_8353 = null;var count__8294_8354 = 0;var i__8295_8355 = 0;while(true){
if((i__8295_8355 < count__8294_8354))
{var scale_8356 = cljs.core._nth.call(null,chunk__8293_8353,i__8295_8355);cljs.core.deref.call(null,new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(scale_8356)).clear();
{
var G__8357 = seq__8292_8352;
var G__8358 = chunk__8293_8353;
var G__8359 = count__8294_8354;
var G__8360 = (i__8295_8355 + 1);
seq__8292_8352 = G__8357;
chunk__8293_8353 = G__8358;
count__8294_8354 = G__8359;
i__8295_8355 = G__8360;
continue;
}
} else
{var temp__4092__auto___8361 = cljs.core.seq.call(null,seq__8292_8352);if(temp__4092__auto___8361)
{var seq__8292_8362__$1 = temp__4092__auto___8361;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8292_8362__$1))
{var c__7126__auto___8363 = cljs.core.chunk_first.call(null,seq__8292_8362__$1);{
var G__8364 = cljs.core.chunk_rest.call(null,seq__8292_8362__$1);
var G__8365 = c__7126__auto___8363;
var G__8366 = cljs.core.count.call(null,c__7126__auto___8363);
var G__8367 = 0;
seq__8292_8352 = G__8364;
chunk__8293_8353 = G__8365;
count__8294_8354 = G__8366;
i__8295_8355 = G__8367;
continue;
}
} else
{var scale_8368 = cljs.core.first.call(null,seq__8292_8362__$1);cljs.core.deref.call(null,new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(scale_8368)).clear();
{
var G__8369 = cljs.core.next.call(null,seq__8292_8362__$1);
var G__8370 = null;
var G__8371 = 0;
var G__8372 = 0;
seq__8292_8352 = G__8369;
chunk__8293_8353 = G__8370;
count__8294_8354 = G__8371;
i__8295_8355 = G__8372;
continue;
}
}
} else
{}
}
break;
}
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reptile","clear","lt.plugins.reptile/clear",3002414485),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reptile.__BEH__clear,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null));
lt.plugins.reptile.__BEH__self_destruct = (function __BEH__self_destruct(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"obj","obj",1014014057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reptile","self-destruct","lt.plugins.reptile/self-destruct",1178979355),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reptile.__BEH__self_destruct,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),500);
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reptile","reptile","lt.plugins.reptile/reptile",1716384791),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reptile","reptile",2108647485)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.reptile","clear","lt.plugins.reptile/clear",3002414485),new cljs.core.Keyword("lt.plugins.reptile","self-destruct","lt.plugins.reptile/self-destruct",1178979355)], null),new cljs.core.Keyword(null,"scales","scales",4400681947),cljs.core.PersistentVector.EMPTY);
lt.plugins.reptile.reptile = (function reptile(ed,p__8296){var vec__8304 = p__8296;var start = cljs.core.nth.call(null,vec__8304,0,null);var end = cljs.core.nth.call(null,vec__8304,1,null);var this$ = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.reptile","reptile","lt.plugins.reptile/reptile",1716384791));lt.plugins.reptile.each_line.call(null,ed,start,end,((function (this$,vec__8304,start,end){
return (function (handle){var seq__8305 = cljs.core.seq.call(null,lt.plugins.reptile.numbers.call(null,handle));var chunk__8307 = null;var count__8308 = 0;var i__8309 = 0;while(true){
if((i__8309 < count__8308))
{var span = cljs.core._nth.call(null,chunk__8307,i__8309);var line_8373 = lt.plugins.reptile.here_SINGLEQUOTE_s_my_number.call(null,handle);var idx_8374 = cljs.core.count.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(lt.plugins.reptile.valid_number_QMARK_.call(null,lt.plugins.reptile.content.call(null,ed,line_8373,span))))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scales","scales",4400681947)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mark","mark",1017248319),lt.plugins.reptile.mark_slider.call(null,ed,line_8373,span,((function (seq__8305,chunk__8307,count__8308,i__8309,line_8373,idx_8374,span,this$,vec__8304,start,end){
return (function (start__$1,x){var val = lt.plugins.reptile.transform.call(null,start__$1,x);if(cljs.core.not_EQ_.call(null,val,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),idx_8374))))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scales","scales",4400681947),idx_8374,new cljs.core.Keyword(null,"value","value",1125876963)], null),cljs.core.constantly.call(null,val));
var temp__4092__auto___8375 = new cljs.core.Keyword(null,"obj","obj",1014014057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8375))
{var obj_8376 = temp__4092__auto___8375;lt.object.raise.call(null,obj_8376,new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{}
} else
{}
return val;
});})(seq__8305,chunk__8307,count__8308,i__8309,line_8373,idx_8374,span,this$,vec__8304,start,end))
),new cljs.core.Keyword(null,"value","value",1125876963),lt.plugins.reptile.transform.call(null,lt.plugins.reptile.content.call(null,ed,line_8373,span),0),new cljs.core.Keyword(null,"loc","loc",1014011570),cljs.core.apply.call(null,cljs.core.vector,line_8373,span)], null));
} else
{}
{
var G__8377 = seq__8305;
var G__8378 = chunk__8307;
var G__8379 = count__8308;
var G__8380 = (i__8309 + 1);
seq__8305 = G__8377;
chunk__8307 = G__8378;
count__8308 = G__8379;
i__8309 = G__8380;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8305);if(temp__4092__auto__)
{var seq__8305__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8305__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8305__$1);{
var G__8381 = cljs.core.chunk_rest.call(null,seq__8305__$1);
var G__8382 = c__7126__auto__;
var G__8383 = cljs.core.count.call(null,c__7126__auto__);
var G__8384 = 0;
seq__8305 = G__8381;
chunk__8307 = G__8382;
count__8308 = G__8383;
i__8309 = G__8384;
continue;
}
} else
{var span = cljs.core.first.call(null,seq__8305__$1);var line_8385 = lt.plugins.reptile.here_SINGLEQUOTE_s_my_number.call(null,handle);var idx_8386 = cljs.core.count.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(lt.plugins.reptile.valid_number_QMARK_.call(null,lt.plugins.reptile.content.call(null,ed,line_8385,span))))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scales","scales",4400681947)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mark","mark",1017248319),lt.plugins.reptile.mark_slider.call(null,ed,line_8385,span,((function (seq__8305,chunk__8307,count__8308,i__8309,line_8385,idx_8386,span,seq__8305__$1,temp__4092__auto__,this$,vec__8304,start,end){
return (function (start__$1,x){var val = lt.plugins.reptile.transform.call(null,start__$1,x);if(cljs.core.not_EQ_.call(null,val,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),idx_8386))))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scales","scales",4400681947),idx_8386,new cljs.core.Keyword(null,"value","value",1125876963)], null),cljs.core.constantly.call(null,val));
var temp__4092__auto___8387__$1 = new cljs.core.Keyword(null,"obj","obj",1014014057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8387__$1))
{var obj_8388 = temp__4092__auto___8387__$1;lt.object.raise.call(null,obj_8388,new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{}
} else
{}
return val;
});})(seq__8305,chunk__8307,count__8308,i__8309,line_8385,idx_8386,span,seq__8305__$1,temp__4092__auto__,this$,vec__8304,start,end))
),new cljs.core.Keyword(null,"value","value",1125876963),lt.plugins.reptile.transform.call(null,lt.plugins.reptile.content.call(null,ed,line_8385,span),0),new cljs.core.Keyword(null,"loc","loc",1014011570),cljs.core.apply.call(null,cljs.core.vector,line_8385,span)], null));
} else
{}
{
var G__8389 = cljs.core.next.call(null,seq__8305__$1);
var G__8390 = null;
var G__8391 = 0;
var G__8392 = 0;
seq__8305 = G__8389;
chunk__8307 = G__8390;
count__8308 = G__8391;
i__8309 = G__8392;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(this$,vec__8304,start,end))
);
return this$;
});
lt.plugins.reptile.__BEH__attach_reptile = (function __BEH__attach_reptile(result){cljs.core.reset_BANG_.call(null,lt.plugins.reptile.busy,0);
var temp__4092__auto__ = new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",1017322386).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,result)));if(cljs.core.truth_(temp__4092__auto__))
{var span = temp__4092__auto__;var reptile = lt.plugins.reptile.reptile.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,result)),span);lt.object.merge_BANG_.call(null,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scales","scales",4400681947),reptile], null));
return lt.object.merge_BANG_.call(null,reptile,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",1014014057),result], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reptile","attach-reptile","lt.plugins.reptile/attach-reptile",4043784335),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reptile.__BEH__attach_reptile,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null));
lt.plugins.reptile.__BEH__clear_reptile = (function __BEH__clear_reptile(result){var temp__4092__auto__ = cljs.core.deref.call(null,result).call(null,new cljs.core.Keyword(null,"scales","scales",4400681947));if(cljs.core.truth_(temp__4092__auto__))
{var reptile = temp__4092__auto__;return lt.object.raise.call(null,reptile,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reptile","clear-reptile","lt.plugins.reptile/clear-reptile",2241822871),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reptile.__BEH__clear_reptile,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null));
lt.plugins.reptile.busy = cljs.core.atom.call(null,0);
lt.plugins.reptile.busy_shown = false;
lt.plugins.reptile.reset_busy = lt.util.js.debounce.call(null,5000,(function (){return cljs.core.reset_BANG_.call(null,lt.plugins.reptile.busy,0);
}));
lt.plugins.reptile.working_STAR_ = lt.util.js.debounce.call(null,50,(function (){if((cljs.core.not.call(null,lt.plugins.reptile.busy_shown)) && ((cljs.core.deref.call(null,lt.plugins.reptile.busy) > 0)))
{lt.plugins.reptile.busy_shown = true;
return lt.objs.notifos.working.call(null);
} else
{return null;
}
}));
lt.plugins.reptile.working = (function working(){cljs.core.swap_BANG_.call(null,lt.plugins.reptile.busy,cljs.core.inc);
if(cljs.core.not.call(null,lt.plugins.reptile.busy_shown))
{return lt.plugins.reptile.working_STAR_.call(null);
} else
{return null;
}
});
lt.plugins.reptile.done_working = (function done_working(){cljs.core.swap_BANG_.call(null,lt.plugins.reptile.busy,cljs.core.dec);
if(cljs.core.truth_((function (){var and__6366__auto__ = lt.plugins.reptile.busy_shown;if(cljs.core.truth_(and__6366__auto__))
{return (cljs.core.deref.call(null,lt.plugins.reptile.busy) <= 0);
} else
{return and__6366__auto__;
}
})()))
{lt.plugins.reptile.busy_shown = false;
return lt.objs.notifos.done_working.call(null);
} else
{return null;
}
});
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.eval')) {
goog.provide('lt.objs.langs.julia.eval');
goog.require('cljs.core');
goog.require('lt.plugins.reptile');
goog.require('lt.objs.highlights');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.plugins.reptile');
goog.require('crate.core');
goog.require('lt.objs.file_links');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.command');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.langs.julia.proc');
goog.require('crate.core');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.command');
goog.require('lt.objs.highlights');
goog.require('lt.objs.file_links');
lt.objs.langs.julia.eval.clear_results = (function clear_results(ed,p__8728){var vec__8742 = p__8728;var start = cljs.core.nth.call(null,vec__8742,0,null);var end = cljs.core.nth.call(null,vec__8742,1,null);var seq__8743 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,lt.objs.editor.line_handle,ed),cljs.core.range.call(null,(start - 1),end)));var chunk__8748 = null;var count__8749 = 0;var i__8750 = 0;while(true){
if((i__8750 < count__8749))
{var lh = cljs.core._nth.call(null,chunk__8748,i__8750);var seq__8751_8775 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",4124874251),new cljs.core.Keyword(null,"underline","underline",4281907774)], null));var chunk__8752_8776 = null;var count__8753_8777 = 0;var i__8754_8778 = 0;while(true){
if((i__8754_8778 < count__8753_8777))
{var type_8779 = cljs.core._nth.call(null,chunk__8752_8776,i__8754_8778);var temp__4092__auto___8780 = cljs.core.get.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lh,type_8779], null));if(cljs.core.truth_(temp__4092__auto___8780))
{var widget_8781 = temp__4092__auto___8780;lt.object.raise.call(null,widget_8781,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{}
{
var G__8782 = seq__8751_8775;
var G__8783 = chunk__8752_8776;
var G__8784 = count__8753_8777;
var G__8785 = (i__8754_8778 + 1);
seq__8751_8775 = G__8782;
chunk__8752_8776 = G__8783;
count__8753_8777 = G__8784;
i__8754_8778 = G__8785;
continue;
}
} else
{var temp__4092__auto___8786 = cljs.core.seq.call(null,seq__8751_8775);if(temp__4092__auto___8786)
{var seq__8751_8787__$1 = temp__4092__auto___8786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8751_8787__$1))
{var c__7126__auto___8788 = cljs.core.chunk_first.call(null,seq__8751_8787__$1);{
var G__8789 = cljs.core.chunk_rest.call(null,seq__8751_8787__$1);
var G__8790 = c__7126__auto___8788;
var G__8791 = cljs.core.count.call(null,c__7126__auto___8788);
var G__8792 = 0;
seq__8751_8775 = G__8789;
chunk__8752_8776 = G__8790;
count__8753_8777 = G__8791;
i__8754_8778 = G__8792;
continue;
}
} else
{var type_8793 = cljs.core.first.call(null,seq__8751_8787__$1);var temp__4092__auto___8794__$1 = cljs.core.get.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lh,type_8793], null));if(cljs.core.truth_(temp__4092__auto___8794__$1))
{var widget_8795 = temp__4092__auto___8794__$1;lt.object.raise.call(null,widget_8795,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{}
{
var G__8796 = cljs.core.next.call(null,seq__8751_8787__$1);
var G__8797 = null;
var G__8798 = 0;
var G__8799 = 0;
seq__8751_8775 = G__8796;
chunk__8752_8776 = G__8797;
count__8753_8777 = G__8798;
i__8754_8778 = G__8799;
continue;
}
}
} else
{}
}
break;
}
{
var G__8800 = seq__8743;
var G__8801 = chunk__8748;
var G__8802 = count__8749;
var G__8803 = (i__8750 + 1);
seq__8743 = G__8800;
chunk__8748 = G__8801;
count__8749 = G__8802;
i__8750 = G__8803;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8743);if(temp__4092__auto__)
{var seq__8743__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8743__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8743__$1);{
var G__8804 = cljs.core.chunk_rest.call(null,seq__8743__$1);
var G__8805 = c__7126__auto__;
var G__8806 = cljs.core.count.call(null,c__7126__auto__);
var G__8807 = 0;
seq__8743 = G__8804;
chunk__8748 = G__8805;
count__8749 = G__8806;
i__8750 = G__8807;
continue;
}
} else
{var lh = cljs.core.first.call(null,seq__8743__$1);var seq__8744_8808 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",4124874251),new cljs.core.Keyword(null,"underline","underline",4281907774)], null));var chunk__8745_8809 = null;var count__8746_8810 = 0;var i__8747_8811 = 0;while(true){
if((i__8747_8811 < count__8746_8810))
{var type_8812 = cljs.core._nth.call(null,chunk__8745_8809,i__8747_8811);var temp__4092__auto___8813__$1 = cljs.core.get.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lh,type_8812], null));if(cljs.core.truth_(temp__4092__auto___8813__$1))
{var widget_8814 = temp__4092__auto___8813__$1;lt.object.raise.call(null,widget_8814,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{}
{
var G__8815 = seq__8744_8808;
var G__8816 = chunk__8745_8809;
var G__8817 = count__8746_8810;
var G__8818 = (i__8747_8811 + 1);
seq__8744_8808 = G__8815;
chunk__8745_8809 = G__8816;
count__8746_8810 = G__8817;
i__8747_8811 = G__8818;
continue;
}
} else
{var temp__4092__auto___8819__$1 = cljs.core.seq.call(null,seq__8744_8808);if(temp__4092__auto___8819__$1)
{var seq__8744_8820__$1 = temp__4092__auto___8819__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8744_8820__$1))
{var c__7126__auto___8821 = cljs.core.chunk_first.call(null,seq__8744_8820__$1);{
var G__8822 = cljs.core.chunk_rest.call(null,seq__8744_8820__$1);
var G__8823 = c__7126__auto___8821;
var G__8824 = cljs.core.count.call(null,c__7126__auto___8821);
var G__8825 = 0;
seq__8744_8808 = G__8822;
chunk__8745_8809 = G__8823;
count__8746_8810 = G__8824;
i__8747_8811 = G__8825;
continue;
}
} else
{var type_8826 = cljs.core.first.call(null,seq__8744_8820__$1);var temp__4092__auto___8827__$2 = cljs.core.get.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lh,type_8826], null));if(cljs.core.truth_(temp__4092__auto___8827__$2))
{var widget_8828 = temp__4092__auto___8827__$2;lt.object.raise.call(null,widget_8828,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{}
{
var G__8829 = cljs.core.next.call(null,seq__8744_8820__$1);
var G__8830 = null;
var G__8831 = 0;
var G__8832 = 0;
seq__8744_8808 = G__8829;
chunk__8745_8809 = G__8830;
count__8746_8810 = G__8831;
i__8747_8811 = G__8832;
continue;
}
}
} else
{}
}
break;
}
{
var G__8833 = cljs.core.next.call(null,seq__8743__$1);
var G__8834 = null;
var G__8835 = 0;
var G__8836 = 0;
seq__8743 = G__8833;
chunk__8748 = G__8834;
count__8749 = G__8835;
i__8750 = G__8836;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.objs.langs.julia.eval.blank_QMARK_ = (function blank_QMARK_(l){return cljs.core.re_find.call(null,/^\s*$/,l);
});
lt.objs.langs.julia.eval.next_line = (function next_line(ed,line){var l = lt.objs.editor.line.call(null,ed,line);if(cljs.core.truth_(l))
{if(cljs.core.not.call(null,lt.objs.langs.julia.eval.blank_QMARK_.call(null,l)))
{return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line], null));
} else
{if(cljs.core.truth_(lt.objs.editor.line.call(null,ed,(line + 1))))
{return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(line + 1)], null));
} else
{lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line], null));
return lt.objs.editor.insert_at_cursor.call(null,ed,"\n");
}
}
} else
{lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line], null));
return lt.objs.editor.insert_at_cursor.call(null,ed,"\n\n");
}
});
lt.objs.langs.julia.eval.single_selection_QMARK_ = (function single_selection_QMARK_(editor){return cljs.core._EQ_.call(null,cljs.core.count.call(null,lt.objs.editor.__GT_cm_ed.call(null,editor).getSelections()),1);
});
lt.objs.langs.julia.eval.eval_selection = (function eval_selection(editor,client){if(lt.objs.langs.julia.eval.single_selection_QMARK_.call(null,editor))
{return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"eval.selection","eval.selection",2198492716),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"start","start",1123661780),lt.objs.langs.julia.util.cursor.call(null,editor,"start"),new cljs.core.Keyword(null,"end","end",1014004813),lt.objs.langs.julia.util.cursor.call(null,editor,"end"),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
} else
{return null;
}
});
lt.objs.langs.julia.eval.eval_block = (function eval_block(editor,client,move){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"get-block","get-block",713229000),(function (bounds,block){if(cljs.core._EQ_.call(null,block,""))
{return lt.objs.notifos.done_working.call(null);
} else
{lt.objs.langs.julia.eval.clear_results.call(null,editor,bounds);
if(cljs.core.truth_(move))
{lt.objs.langs.julia.eval.next_line.call(null,editor,cljs.core.last.call(null,bounds));
} else
{}
return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"eval.block","eval.block",4135415853),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"block","block",1107736575),block,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
}
}));
});
/**
* @param {...*} var_args
*/
lt.objs.langs.julia.eval.__BEH__eval__DOT__one = (function() { 
var __BEH__eval__DOT__one__delegate = function (editor,p__8755){var vec__8757 = p__8755;var move = cljs.core.nth.call(null,vec__8757,0,null);var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null));lt.objs.notifos.working.call(null);
return (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?lt.objs.langs.julia.eval.eval_selection:lt.objs.langs.julia.eval.eval_block).call(null,editor,client,move);
};
var __BEH__eval__DOT__one = function (editor,var_args){
var p__8755 = null;if (arguments.length > 1) {
  p__8755 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__eval__DOT__one__delegate.call(this,editor,p__8755);};
__BEH__eval__DOT__one.cljs$lang$maxFixedArity = 1;
__BEH__eval__DOT__one.cljs$lang$applyTo = (function (arglist__8837){
var editor = cljs.core.first(arglist__8837);
var p__8755 = cljs.core.rest(arglist__8837);
return __BEH__eval__DOT__one__delegate(editor,p__8755);
});
__BEH__eval__DOT__one.cljs$core$IFn$_invoke$arity$variadic = __BEH__eval__DOT__one__delegate;
return __BEH__eval__DOT__one;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.eval","eval.one","lt.objs.langs.julia.eval/eval.one",4466424305),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.eval.__BEH__eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.objs.langs.julia.eval.__BEH__eval__DOT__all = (function __BEH__eval__DOT__all(editor){var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null));lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"clear-inline-results","clear-inline-results",1542062004));
lt.objs.notifos.working.call(null);
return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"eval.all","eval.all",1173575873),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.eval","eval.all","lt.objs.langs.julia.eval/eval.all",4466413240),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.eval.__BEH__eval__DOT__all,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.objs.langs.julia.eval.__BEH__result = (function __BEH__result(editor,p__8758){var map__8761 = p__8758;var map__8761__$1 = ((cljs.core.seq_QMARK_.call(null,map__8761))?cljs.core.apply.call(null,cljs.core.hash_map,map__8761):map__8761);var info = cljs.core.get.call(null,map__8761__$1,new cljs.core.Keyword(null,"info","info",1017141280));var under = cljs.core.get.call(null,map__8761__$1,new cljs.core.Keyword(null,"under","under",1125332554));var html = cljs.core.get.call(null,map__8761__$1,new cljs.core.Keyword(null,"html","html",1017117469));var value = cljs.core.get.call(null,map__8761__$1,new cljs.core.Keyword(null,"value","value",1125876963));var vec__8762 = cljs.core.get.call(null,map__8761__$1,new cljs.core.Keyword(null,"bounds","bounds",3925666343));var start = cljs.core.nth.call(null,vec__8762,0,null);var end = cljs.core.nth.call(null,vec__8762,1,null);lt.objs.notifos.done_working.call(null);
var val = (cljs.core.truth_(html)?crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.julia.result","div.julia.result",3981322241),crate.core.raw.call(null,value)], null)):value);var scripts = (cljs.core.truth_(html)?lt.objs.langs.julia.util.get_scripts.call(null,val):null);if(cljs.core.truth_(html))
{lt.objs.langs.julia.process.call(null,val);
} else
{}
lt.object.raise.call(null,editor,(cljs.core.truth_(under)?new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758):new cljs.core.Keyword(null,"editor.result","editor.result",4030217008)),val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-line","start-line",3689311729),(start - 1),new cljs.core.Keyword(null,"line","line",1017226086),(end - 1)], null),info);
if(cljs.core.truth_(scripts))
{return lt.objs.langs.julia.util.eval_scripts.call(null,scripts);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.eval","result","lt.objs.langs.julia.eval/result",3379654010),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.eval.__BEH__result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.result","julia.result",4253994436),null], null), null));
lt.objs.langs.julia.eval.get_error_line = (function get_error_line(link){var vec__8764 = cljs.core.re_find.call(null,lt.objs.file_links.url_pattern,lt.objs.file_links.data_file.call(null,link));var _ = cljs.core.nth.call(null,vec__8764,0,null);var file = cljs.core.nth.call(null,vec__8764,1,null);var line = cljs.core.nth.call(null,vec__8764,2,null);if(cljs.core.truth_((function (){var and__6366__auto__ = file;if(cljs.core.truth_(and__6366__auto__))
{return line;
} else
{return and__6366__auto__;
}
})()))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),file,new cljs.core.Keyword(null,"line","line",1017226086),parseInt(line)], null);
} else
{return null;
}
});
lt.objs.langs.julia.eval.get_error_lines = (function get_error_lines(dom){return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,lt.objs.langs.julia.eval.get_error_line,lt.objs.file_links.file_links.call(null,dom)));
});
lt.objs.langs.julia.eval.error_lines = lt.objs.highlights.obj.call(null,new cljs.core.Keyword(null,"error","error",1110689146));
lt.objs.langs.julia.eval.__BEH__error = (function __BEH__error(editor,res){lt.objs.notifos.done_working.call(null);
var dom = lt.objs.langs.julia.util.parse_div.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));var line = (new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(res) - 1);lt.objs.file_links.process_BANG_.call(null,dom);
lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),dom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(res) - 1),new cljs.core.Keyword(null,"line","line",1017226086),line], null));
lt.object.raise.call(null,lt.objs.langs.julia.eval.error_lines,new cljs.core.Keyword(null,"clear","clear",1108650431));
lt.object.raise.call(null,lt.objs.langs.julia.eval.error_lines,new cljs.core.Keyword(null,"highlight","highlight",4627660838),lt.objs.langs.julia.eval.get_error_lines.call(null,dom));
return lt.object.raise.call(null,lt.objs.langs.julia.eval.error_lines,new cljs.core.Keyword(null,"listen","listen",4206362937),lt.objs.langs.julia.util.widget.call(null,editor,(line + 1)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.eval","error","lt.objs.langs.julia.eval/error",4428689901),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.eval.__BEH__error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.error","julia.error",4570486949),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.completions')) {
goog.provide('lt.objs.langs.julia.completions');
goog.require('cljs.core');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
lt.objs.langs.julia.completions.__BEH__trigger_update_hints = (function __BEH__trigger_update_hints(editor,res){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;if(cljs.core.truth_(cljs.core.deref.call(null,default_client)))
{return lt.objs.clients.send.call(null,default_client,new cljs.core.Keyword(null,"editor.julia.hints","editor.julia.hints",3827979880),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),lt.objs.langs.julia.util.cursor.call(null,editor),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","trigger-update-hints","lt.objs.langs.julia.completions/trigger-update-hints",2864848773),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.completions.__BEH__trigger_update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.julia.hints.trigger-update","editor.julia.hints.trigger-update",1239387112),null,new cljs.core.Keyword(null,"input","input",1114262332),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.objs.langs.julia.completions.__BEH__use_local_hints = (function __BEH__use_local_hints(editor,hints,token){lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.julia.hints.trigger-update","editor.julia.hints.trigger-update",1239387112));
return cljs.core.concat.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","hints","lt.objs.langs.julia.completions/hints",1982368662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),hints);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","use-local-hints","lt.objs.langs.julia.completions/use-local-hints",2093633438),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.completions.__BEH__use_local_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hints+","hints+",4091697745),null], null), null));
lt.objs.langs.julia.completions.process_hint = (function process_hint(hint){if(typeof hint === 'string')
{return {"completion": hint};
} else
{return cljs.core.clj__GT_js.call(null,hint);
}
});
lt.objs.langs.julia.completions.__BEH__update_hints = (function __BEH__update_hints(editor,p__8705){var map__8707 = p__8705;var map__8707__$1 = ((cljs.core.seq_QMARK_.call(null,map__8707))?cljs.core.apply.call(null,cljs.core.hash_map,map__8707):map__8707);var res = map__8707__$1;var pattern = cljs.core.get.call(null,map__8707__$1,new cljs.core.Keyword(null,"pattern","pattern",4517781250));var notextual = cljs.core.get.call(null,map__8707__$1,new cljs.core.Keyword(null,"notextual","notextual",2817977764));var hints = cljs.core.get.call(null,map__8707__$1,new cljs.core.Keyword(null,"hints","hints",1113187902));lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token-pattern","token-pattern",4483347246),(cljs.core.truth_(pattern)?(new RegExp([cljs.core.str(pattern),cljs.core.str("$")].join(''))):null)], null));
var pos = lt.objs.editor.__GT_cursor.call(null,editor);var token = lt.plugins.auto_complete.get_token.call(null,editor,pos);lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.completions","hints","lt.objs.langs.julia.completions/hints",1982368662),cljs.core.map.call(null,lt.objs.langs.julia.completions.process_hint,hints)], null));
return lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","update-hints","lt.objs.langs.julia.completions/update-hints",4122081658),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.completions.__BEH__update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.julia.hints.update","editor.julia.hints.update",3510718003),null], null), null));
lt.objs.langs.julia.completions._get_token = lt.plugins.auto_complete.get_token;
lt.plugins.auto_complete.get_token = (function (ed,pos){var temp__4090__auto__ = cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"token-pattern","token-pattern",4483347246));if(cljs.core.truth_(temp__4090__auto__))
{var pattern = temp__4090__auto__;var line = lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)).substring(0,new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(pos));var match = cljs.core.re_find.call(null,pattern,line);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",1123661780),(cljs.core.count.call(null,line) - cljs.core.count.call(null,match)),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"string","string",4416885635),match], null);
} else
{return lt.objs.langs.julia.completions._get_token.call(null,ed,pos);
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.touchdown')) {
goog.provide('lt.plugins.touchdown');
goog.require('cljs.core');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('crate.core');
goog.require('crate.core');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
lt.plugins.touchdown.load_script = (function load_script(url){var script = document.createElement("script");lt.util.dom.attr.call(null,script,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),url,new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript"], null));
return lt.util.dom.append.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"head","head",1017102674)),script);
});
lt.plugins.touchdown.load_script.call(null,"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML");
/**
* @param {...*} var_args
*/
lt.plugins.touchdown.mathjax_queue = (function() { 
var mathjax_queue__delegate = function (args){return MathJax.Hub.Queue(cljs.core.clj__GT_js.call(null,args));
};
var mathjax_queue = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mathjax_queue__delegate.call(this,args);};
mathjax_queue.cljs$lang$maxFixedArity = 0;
mathjax_queue.cljs$lang$applyTo = (function (arglist__8443){
var args = cljs.core.seq(arglist__8443);
return mathjax_queue__delegate(args);
});
mathjax_queue.cljs$core$IFn$_invoke$arity$variadic = mathjax_queue__delegate;
return mathjax_queue;
})()
;
lt.plugins.touchdown.typeset = (function typeset(dom){lt.plugins.touchdown.mathjax_queue.call(null,"Typeset",MathJax.Hub,dom);
return dom;
});
lt.plugins.touchdown.__GT_math = (function __GT_math(tex){return lt.plugins.touchdown.typeset.call(null,crate.core.raw.call(null,[cljs.core.str("<span class=\"latex\">\\("),cljs.core.str(tex),cljs.core.str("\\)</span>")].join('')));
});
lt.plugins.touchdown.editor_for_file = (function editor_for_file(file){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8432_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8432_SHARP_))),file);
}),lt.objs.editor.pool.get_all.call(null)));
});
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.module')) {
goog.provide('lt.objs.langs.julia.module');
goog.require('cljs.core');
goog.require('lt.objs.langs.julia');
goog.require('crate.binding');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('crate.binding');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.langs.julia');
lt.objs.langs.julia.module.__GT_module_str = (function __GT_module_str(p__8848){var map__8856 = p__8848;var map__8856__$1 = ((cljs.core.seq_QMARK_.call(null,map__8856))?cljs.core.apply.call(null,cljs.core.hash_map,map__8856):map__8856);var module = cljs.core.get.call(null,map__8856__$1,new cljs.core.Keyword(null,"module","module",4240087518));var e__7959__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.module.clickable","span.module.clickable",3384694646),[cljs.core.str(module),cljs.core.str("\t")].join('')], null));var seq__8857_8879 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7959__auto__,map__8856,map__8856__$1,module){
return (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"julia.set-module","julia.set-module",3617383774));
});})(e__7959__auto__,map__8856,map__8856__$1,module))
], null)));var chunk__8858_8880 = null;var count__8859_8881 = 0;var i__8860_8882 = 0;while(true){
if((i__8860_8882 < count__8859_8881))
{var vec__8861_8883 = cljs.core._nth.call(null,chunk__8858_8880,i__8860_8882);var ev__7960__auto___8884 = cljs.core.nth.call(null,vec__8861_8883,0,null);var func__7961__auto___8885 = cljs.core.nth.call(null,vec__8861_8883,1,null);lt.util.dom.on.call(null,e__7959__auto__,ev__7960__auto___8884,func__7961__auto___8885);
{
var G__8886 = seq__8857_8879;
var G__8887 = chunk__8858_8880;
var G__8888 = count__8859_8881;
var G__8889 = (i__8860_8882 + 1);
seq__8857_8879 = G__8886;
chunk__8858_8880 = G__8887;
count__8859_8881 = G__8888;
i__8860_8882 = G__8889;
continue;
}
} else
{var temp__4092__auto___8890 = cljs.core.seq.call(null,seq__8857_8879);if(temp__4092__auto___8890)
{var seq__8857_8891__$1 = temp__4092__auto___8890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8857_8891__$1))
{var c__7126__auto___8892 = cljs.core.chunk_first.call(null,seq__8857_8891__$1);{
var G__8893 = cljs.core.chunk_rest.call(null,seq__8857_8891__$1);
var G__8894 = c__7126__auto___8892;
var G__8895 = cljs.core.count.call(null,c__7126__auto___8892);
var G__8896 = 0;
seq__8857_8879 = G__8893;
chunk__8858_8880 = G__8894;
count__8859_8881 = G__8895;
i__8860_8882 = G__8896;
continue;
}
} else
{var vec__8862_8897 = cljs.core.first.call(null,seq__8857_8891__$1);var ev__7960__auto___8898 = cljs.core.nth.call(null,vec__8862_8897,0,null);var func__7961__auto___8899 = cljs.core.nth.call(null,vec__8862_8897,1,null);lt.util.dom.on.call(null,e__7959__auto__,ev__7960__auto___8898,func__7961__auto___8899);
{
var G__8900 = cljs.core.next.call(null,seq__8857_8891__$1);
var G__8901 = null;
var G__8902 = 0;
var G__8903 = 0;
seq__8857_8879 = G__8900;
chunk__8858_8880 = G__8901;
count__8859_8881 = G__8902;
i__8860_8882 = G__8903;
continue;
}
}
} else
{}
}
break;
}
return e__7959__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","statusbar.module","lt.objs.langs.julia.module/statusbar.module",830137210),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.module","update-module-status","lt.objs.langs.julia.module/update-module-status",2710240756),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.objs.statusbar.statusbar_item.call(null,crate.binding.bound.call(null,this$,lt.objs.langs.julia.module.__GT_module_str),"");
}));
lt.objs.langs.julia.module.statusbar_module = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","statusbar.module","lt.objs.langs.julia.module/statusbar.module",830137210));
lt.objs.statusbar.add_statusbar_item.call(null,lt.objs.langs.julia.module.statusbar_module);
lt.objs.langs.julia.module.__GT_module = (function __GT_module(editor){return new cljs.core.Keyword("lt.objs.langs.julia.module","module","lt.objs.langs.julia.module/module",3266506741).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));
});
lt.objs.langs.julia.module.__BEH__update_module_statusbar = (function __BEH__update_module_statusbar(editor){return lt.object.merge_BANG_.call(null,lt.objs.langs.julia.module.statusbar_module,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.module.__GT_module.call(null,editor)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","update-module-statusbar","lt.objs.langs.julia.module/update-module-statusbar",1924546253),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.__BEH__update_module_statusbar,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",3885920888),null,new cljs.core.Keyword(null,"module-update","module-update",2454986428),null], null), null));
/**
* @param {...*} var_args
*/
lt.objs.langs.julia.module.get_module = (function() { 
var get_module__delegate = function (editor,p__8863){var vec__8865 = p__8863;var client = cljs.core.nth.call(null,vec__8865,0,null);var temp__4092__auto__ = (function (){var or__6378__auto__ = client;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return lt.objs.langs.julia.proc.default_client.call(null);
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var client__$1 = temp__4092__auto__;return lt.objs.clients.send.call(null,client__$1,new cljs.core.Keyword(null,"editor.julia.module.update","editor.julia.module.update",3704946727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
} else
{return null;
}
};
var get_module = function (editor,var_args){
var p__8863 = null;if (arguments.length > 1) {
  p__8863 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get_module__delegate.call(this,editor,p__8863);};
get_module.cljs$lang$maxFixedArity = 1;
get_module.cljs$lang$applyTo = (function (arglist__8904){
var editor = cljs.core.first(arglist__8904);
var p__8863 = cljs.core.rest(arglist__8904);
return get_module__delegate(editor,p__8863);
});
get_module.cljs$core$IFn$_invoke$arity$variadic = get_module__delegate;
return get_module;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","get-module","lt.objs.langs.julia.module/get-module",2880297552),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.get_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),null,new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.module-refresh","editor.julia.module-refresh",2408907522),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Refresh the module for the current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.langs.julia.module.get_module.call(null,ed);
} else
{return null;
}
})], null));
lt.objs.langs.julia.module.__BEH__set_module = (function __BEH__set_module(editor,module){lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.module","module","lt.objs.langs.julia.module/module",3266506741),module], null));
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"module-update","module-update",2454986428));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","set-module","lt.objs.langs.julia.module/set-module",956127132),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.__BEH__set_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.set-module","julia.set-module",3617383774),null], null), null));
lt.objs.langs.julia.module.__BEH__set_modules = (function __BEH__set_modules(julia,p__8866){var map__8868 = p__8866;var map__8868__$1 = ((cljs.core.seq_QMARK_.call(null,map__8868))?cljs.core.apply.call(null,cljs.core.hash_map,map__8868):map__8868);var modules = cljs.core.get.call(null,map__8868__$1,new cljs.core.Keyword(null,"modules","modules",2241338105));lt.object.merge_BANG_.call(null,julia,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.module","modules","lt.objs.langs.julia.module/modules",1256091916),cljs.core.sort.call(null,modules)], null));
return lt.object.raise.call(null,lt.objs.langs.julia.module.module_selector,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","set-modules","lt.objs.langs.julia.module/set-modules",2219281029),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.__BEH__set_modules,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.set-modules","julia.set-modules",4412358521),null], null), null));
lt.object.add_behavior_BANG_.call(null,lt.objs.langs.julia.julia,new cljs.core.Keyword("lt.objs.langs.julia.module","set-modules","lt.objs.langs.julia.module/set-modules",2219281029));
lt.objs.langs.julia.module.module_selector = lt.objs.sidebar.command.filter_list.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.deref.call(null,lt.objs.langs.julia.julia).call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","modules","lt.objs.langs.julia.module/modules",1256091916));
}),new cljs.core.Keyword(null,"key","key",1014010321),cljs.core.identity,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Module"], null));
lt.objs.langs.julia.module.__BEH__select_module = (function __BEH__select_module(this$,mod){return lt.objs.sidebar.command.exec_active_BANG_.call(null,mod);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","select-module","lt.objs.langs.julia.module/select-module",2925252038),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.__BEH__select_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.object.add_behavior_BANG_.call(null,lt.objs.langs.julia.module.module_selector,new cljs.core.Keyword("lt.objs.langs.julia.module","select-module","lt.objs.langs.julia.module/select-module",2925252038));
lt.objs.langs.julia.module.set_module = (function set_module(ed,module){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"julia.set-module","julia.set-module",3617383774),module);
});
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"julia.set-module","julia.set-module",3617383774),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Set the module for the current editor",new cljs.core.Keyword(null,"options","options",4059396624),lt.objs.langs.julia.module.module_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (mod){var temp__4090__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4090__auto__))
{var last = temp__4090__auto__;return lt.objs.langs.julia.module.set_module.call(null,last,mod);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Set module requires an active editor");
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.doc')) {
goog.provide('lt.objs.langs.julia.doc');
goog.require('cljs.core');
goog.require('lt.objs.langs.julia.util');
goog.require('crate.core');
goog.require('lt.objs.file_links');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('crate.core');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.file_links');
goog.require('lt.plugins.doc');
goog.require('lt.plugins.doc');
lt.objs.langs.julia.doc.__BEH__doc = (function __BEH__doc(editor){lt.objs.notifos.working.call(null,"Loading docs...");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.doc.connect], null)),new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),lt.objs.langs.julia.util.cursor.call(null,editor),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.doc","doc","lt.objs.langs.julia.doc/doc",1422122211),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.doc.__BEH__doc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.doc","editor.doc",3751347369),null], null), null));
lt.objs.langs.julia.doc.__BEH__methods = (function __BEH__methods(editor){lt.objs.notifos.working.call(null,"Loading methods...");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.doc.connect], null)),new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),lt.objs.langs.julia.util.cursor.call(null,editor),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"methods","methods",1969438500)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.doc","methods","lt.objs.langs.julia.doc/methods",2648121929),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.doc.__BEH__methods,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.methods","editor.methods",4183274403),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.methods.toggle","editor.methods.toggle",3152358179),new cljs.core.Keyword(null,"desc","desc",1016984067),"Docs: Toggle methods at cursor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var loc = lt.objs.editor.__GT_cursor.call(null,ed);var temp__4090__auto__ = lt.plugins.doc.doc_on_line_QMARK_.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));if(cljs.core.truth_(temp__4090__auto__))
{var cur = temp__4090__auto__;return lt.plugins.doc.remove_BANG_.call(null,ed,cur);
} else
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.methods","editor.methods",4183274403));
}
} else
{return null;
}
})], null));
lt.objs.langs.julia.doc.__BEH__show_doc = (function __BEH__show_doc(editor,res){return lt.plugins.doc.inline_doc.call(null,editor,crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-doc","div.inline-doc",3323486451),(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469)))?lt.objs.file_links.process_BANG_.call(null,lt.objs.langs.julia.util.parse_div.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(res))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),res.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882))], null))], null)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(res));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.doc","show-doc","lt.objs.langs.julia.doc/show-doc",730818451),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.doc.__BEH__show_doc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),null], null), null));
}

//# sourceMappingURL=julia_compiled.js.map