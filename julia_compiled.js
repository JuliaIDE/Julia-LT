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
var widget__delegate = function (editor,line,p__9338){var vec__9340 = p__9338;var type = cljs.core.nth.call(null,vec__9340,0,null);return cljs.core.get.call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.editor.line_handle.call(null,editor,(line - 1)),(function (){var or__6378__auto__ = type;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return new cljs.core.Keyword(null,"inline","inline",4124874251);
}
})()], null));
};
var widget = function (editor,line,var_args){
var p__9338 = null;if (arguments.length > 2) {
  p__9338 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return widget__delegate.call(this,editor,line,p__9338);};
widget.cljs$lang$maxFixedArity = 2;
widget.cljs$lang$applyTo = (function (arglist__9372){
var editor = cljs.core.first(arglist__9372);
arglist__9372 = cljs.core.next(arglist__9372);
var line = cljs.core.first(arglist__9372);
var p__9338 = cljs.core.rest(arglist__9372);
return widget__delegate(editor,line,p__9338);
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
return (function (p1__9341_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"text/javascript",null], null), null),p1__9341_SHARP_.type);
});})(scripts))
,scripts));
});
lt.objs.langs.julia.util.eval_scripts = (function eval_scripts(scripts){var seq__9346 = cljs.core.seq.call(null,scripts);var chunk__9347 = null;var count__9348 = 0;var i__9349 = 0;while(true){
if((i__9349 < count__9348))
{var script = cljs.core._nth.call(null,chunk__9347,i__9349);window.eval(script);
{
var G__9373 = seq__9346;
var G__9374 = chunk__9347;
var G__9375 = count__9348;
var G__9376 = (i__9349 + 1);
seq__9346 = G__9373;
chunk__9347 = G__9374;
count__9348 = G__9375;
i__9349 = G__9376;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9346);if(temp__4092__auto__)
{var seq__9346__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9346__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__9346__$1);{
var G__9377 = cljs.core.chunk_rest.call(null,seq__9346__$1);
var G__9378 = c__7126__auto__;
var G__9379 = cljs.core.count.call(null,c__7126__auto__);
var G__9380 = 0;
seq__9346 = G__9377;
chunk__9347 = G__9378;
count__9348 = G__9379;
i__9349 = G__9380;
continue;
}
} else
{var script = cljs.core.first.call(null,seq__9346__$1);window.eval(script);
{
var G__9381 = cljs.core.next.call(null,seq__9346__$1);
var G__9382 = null;
var G__9383 = 0;
var G__9384 = 0;
seq__9346 = G__9381;
chunk__9347 = G__9382;
count__9348 = G__9383;
i__9349 = G__9384;
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
var plugin_dir__delegate = function (names){return cljs.core.first.call(null,(function (){var iter__7095__auto__ = (function iter__9356(s__9357){return (new cljs.core.LazySeq(null,(function (){var s__9357__$1 = s__9357;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9357__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var dir = cljs.core.first.call(null,xs__4579__auto__);var iterys__7091__auto__ = ((function (s__9357__$1,dir,xs__4579__auto__,temp__4092__auto__){
return (function iter__9358(s__9359){return (new cljs.core.LazySeq(null,((function (s__9357__$1,dir,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__9359__$1 = s__9359;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9359__$1);if(temp__4092__auto____$1)
{var s__9359__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9359__$2))
{var c__7093__auto__ = cljs.core.chunk_first.call(null,s__9359__$2);var size__7094__auto__ = cljs.core.count.call(null,c__7093__auto__);var b__9361 = cljs.core.chunk_buffer.call(null,size__7094__auto__);if((function (){var i__9360 = 0;while(true){
if((i__9360 < size__7094__auto__))
{var name = cljs.core._nth.call(null,c__7093__auto__,i__9360);var path = lt.objs.files.join.call(null,dir,name);if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,path)))
{cljs.core.chunk_append.call(null,b__9361,path);
{
var G__9385 = (i__9360 + 1);
i__9360 = G__9385;
continue;
}
} else
{{
var G__9386 = (i__9360 + 1);
i__9360 = G__9386;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9361),iter__9358.call(null,cljs.core.chunk_rest.call(null,s__9359__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9361),null);
}
} else
{var name = cljs.core.first.call(null,s__9359__$2);var path = lt.objs.files.join.call(null,dir,name);if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,path)))
{return cljs.core.cons.call(null,path,iter__9358.call(null,cljs.core.rest.call(null,s__9359__$2)));
} else
{{
var G__9387 = cljs.core.rest.call(null,s__9359__$2);
s__9359__$1 = G__9387;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__9357__$1,dir,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__9357__$1,dir,xs__4579__auto__,temp__4092__auto__))
;var fs__7092__auto__ = cljs.core.seq.call(null,iterys__7091__auto__.call(null,names));if(fs__7092__auto__)
{return cljs.core.concat.call(null,fs__7092__auto__,iter__9356.call(null,cljs.core.rest.call(null,s__9357__$1)));
} else
{{
var G__9388 = cljs.core.rest.call(null,s__9357__$1);
s__9357__$1 = G__9388;
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
plugin_dir.cljs$lang$applyTo = (function (arglist__9389){
var names = cljs.core.seq(arglist__9389);
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
lt.objs.langs.julia.__BEH__commands = (function __BEH__commands(editor,res){var pred__8260 = cljs.core._EQ_;var expr__8261 = res.call(null,new cljs.core.Keyword(null,"cmd","cmd",1014002860));if(cljs.core.truth_(pred__8260.call(null,"popup",expr__8261)))
{return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),res.call(null,new cljs.core.Keyword(null,"header","header",4087600639)),new cljs.core.Keyword(null,"body","body",1016933652),res.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"buttons","buttons",1255256819),res.call(null,new cljs.core.Keyword(null,"buttons","buttons",1255256819))], null));
} else
{if(cljs.core.truth_(pred__8260.call(null,"print",expr__8261)))
{return lt.objs.console.log.call(null,res.call(null,new cljs.core.Keyword(null,"value","value",1125876963)),(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))?"error":null));
} else
{if(cljs.core.truth_(pred__8260.call(null,"done",expr__8261)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659))))
{return lt.objs.notifos.done_working.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)));
} else
{return lt.objs.notifos.done_working.call(null);
}
} else
{if(cljs.core.truth_(pred__8260.call(null,"notify",expr__8261)))
{return lt.objs.notifos.set_msg_BANG_.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),res.call(null,new cljs.core.Keyword(null,"class","class",1108647146))], null));
} else
{if(cljs.core.truth_(pred__8260.call(null,"console",expr__8261)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469))))
{var val = crate.core.raw.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));var scripts = lt.objs.langs.julia.util.get_scripts.call(null,val);lt.objs.console.verbatim.call(null,val);
return lt.objs.langs.julia.util.eval_scripts.call(null,scripts);
} else
{return lt.objs.console.log.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));
}
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8261)].join('')));
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
var log__delegate = function (l,p__9024){var vec__9026 = p__9024;var class$ = cljs.core.nth.call(null,vec__9026,0,null);return lt.objs.console.log.call(null,l,class$);
};
var log = function (l,var_args){
var p__9024 = null;if (arguments.length > 1) {
  p__9024 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,l,p__9024);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__9058){
var l = cljs.core.first(arglist__9058);
var p__9024 = cljs.core.rest(arglist__9058);
return log__delegate(l,p__9024);
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
{var temp__4092__auto___9059 = cljs.core.not_empty.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633)));if(cljs.core.truth_(temp__4092__auto___9059))
{var out_9060 = temp__4092__auto___9059;lt.objs.langs.julia.proc.log.call(null,out_9060);
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
var connect__delegate = function (p__9027){var map__9029 = p__9027;var map__9029__$1 = ((cljs.core.seq_QMARK_.call(null,map__9029))?cljs.core.apply.call(null,cljs.core.hash_map,map__9029):map__9029);var complain = cljs.core.get.call(null,map__9029__$1,new cljs.core.Keyword(null,"complain","complain",4709422171),true);var notify = cljs.core.get.call(null,map__9029__$1,new cljs.core.Keyword(null,"notify","notify",4269181627),false);if(cljs.core.truth_(notify))
{lt.objs.notifos.working.call(null,"Spinning up Julia...");
} else
{}
var path = lt.objs.langs.julia.proc.julia_path.call(null);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"julia.client","julia.client",3830708594));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connecting-notifier","lt.objs.langs.julia.proc/connecting-notifier",4154824301),client);lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"notify","notify",4269181627),notify,new cljs.core.Keyword(null,"complain","complain",4709422171),complain], null));
lt.objs.langs.julia.proc.with_dir.call(null,lt.objs.files.home.call(null),((function (path,client,obj,map__9029,map__9029__$1,complain,notify){
return (function (){return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),path,new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.langs.julia.proc.init,lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client)], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});})(path,client,obj,map__9029,map__9029__$1,complain,notify))
);
lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.first.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))], null));
lt.objs.langs.julia.proc.init_client.call(null,client,obj);
return client;
};
var connect = function (var_args){
var p__9027 = null;if (arguments.length > 0) {
  p__9027 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return connect__delegate.call(this,p__9027);};
connect.cljs$lang$maxFixedArity = 0;
connect.cljs$lang$applyTo = (function (arglist__9061){
var p__9027 = cljs.core.seq(arglist__9061);
return connect__delegate(p__9027);
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
var seq__9034 = cljs.core.seq.call(null,lt.objs.editor.pool.get_all.call(null));var chunk__9035 = null;var count__9036 = 0;var i__9037 = 0;while(true){
if((i__9037 < count__9036))
{var editor = cljs.core._nth.call(null,chunk__9035,i__9037);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),client);
{
var G__9062 = seq__9034;
var G__9063 = chunk__9035;
var G__9064 = count__9036;
var G__9065 = (i__9037 + 1);
seq__9034 = G__9062;
chunk__9035 = G__9063;
count__9036 = G__9064;
i__9037 = G__9065;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9034);if(temp__4092__auto__)
{var seq__9034__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9034__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__9034__$1);{
var G__9066 = cljs.core.chunk_rest.call(null,seq__9034__$1);
var G__9067 = c__7126__auto__;
var G__9068 = cljs.core.count.call(null,c__7126__auto__);
var G__9069 = 0;
seq__9034 = G__9066;
chunk__9035 = G__9067;
count__9036 = G__9068;
i__9037 = G__9069;
continue;
}
} else
{var editor = cljs.core.first.call(null,seq__9034__$1);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),client);
{
var G__9070 = cljs.core.next.call(null,seq__9034__$1);
var G__9071 = null;
var G__9072 = 0;
var G__9073 = 0;
seq__9034 = G__9070;
chunk__9035 = G__9071;
count__9036 = G__9072;
i__9037 = G__9073;
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
lt.objs.langs.julia.proc.connect_client = (function connect_client(editor,client){if(cljs.core.truth_((function (){var G__9039 = cljs.core.deref.call(null,editor);var G__9039__$1 = (((G__9039 == null))?null:new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(G__9039));var G__9039__$2 = (((G__9039__$1 == null))?null:new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(G__9039__$1));var G__9039__$3 = (((G__9039__$2 == null))?null:cljs.core.deref.call(null,G__9039__$2));var G__9039__$4 = (((G__9039__$3 == null))?null:new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(G__9039__$3));return G__9039__$4;
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
{var ed = temp__4092__auto__;var seq__9040_9074 = cljs.core.seq.call(null,lt.objs.langs.julia.proc.get_proc.call(null,ed));var chunk__9041_9075 = null;var count__9042_9076 = 0;var i__9043_9077 = 0;while(true){
if((i__9043_9077 < count__9042_9076))
{var proc_9078 = cljs.core._nth.call(null,chunk__9041_9075,i__9043_9077);proc_9078.kill("SIGINT");
{
var G__9079 = seq__9040_9074;
var G__9080 = chunk__9041_9075;
var G__9081 = count__9042_9076;
var G__9082 = (i__9043_9077 + 1);
seq__9040_9074 = G__9079;
chunk__9041_9075 = G__9080;
count__9042_9076 = G__9081;
i__9043_9077 = G__9082;
continue;
}
} else
{var temp__4092__auto___9083__$1 = cljs.core.seq.call(null,seq__9040_9074);if(temp__4092__auto___9083__$1)
{var seq__9040_9084__$1 = temp__4092__auto___9083__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9040_9084__$1))
{var c__7126__auto___9085 = cljs.core.chunk_first.call(null,seq__9040_9084__$1);{
var G__9086 = cljs.core.chunk_rest.call(null,seq__9040_9084__$1);
var G__9087 = c__7126__auto___9085;
var G__9088 = cljs.core.count.call(null,c__7126__auto___9085);
var G__9089 = 0;
seq__9040_9074 = G__9086;
chunk__9041_9075 = G__9087;
count__9042_9076 = G__9088;
i__9043_9077 = G__9089;
continue;
}
} else
{var proc_9090 = cljs.core.first.call(null,seq__9040_9084__$1);proc_9090.kill("SIGINT");
{
var G__9091 = cljs.core.next.call(null,seq__9040_9084__$1);
var G__9092 = null;
var G__9093 = 0;
var G__9094 = 0;
seq__9040_9074 = G__9091;
chunk__9041_9075 = G__9092;
count__9042_9076 = G__9093;
i__9043_9077 = G__9094;
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
{var ed = temp__4092__auto__;var seq__9044_9095 = cljs.core.seq.call(null,lt.objs.langs.julia.proc.get_proc.call(null,ed));var chunk__9045_9096 = null;var count__9046_9097 = 0;var i__9047_9098 = 0;while(true){
if((i__9047_9098 < count__9046_9097))
{var proc_9099 = cljs.core._nth.call(null,chunk__9045_9096,i__9047_9098);proc_9099.kill();
{
var G__9100 = seq__9044_9095;
var G__9101 = chunk__9045_9096;
var G__9102 = count__9046_9097;
var G__9103 = (i__9047_9098 + 1);
seq__9044_9095 = G__9100;
chunk__9045_9096 = G__9101;
count__9046_9097 = G__9102;
i__9047_9098 = G__9103;
continue;
}
} else
{var temp__4092__auto___9104__$1 = cljs.core.seq.call(null,seq__9044_9095);if(temp__4092__auto___9104__$1)
{var seq__9044_9105__$1 = temp__4092__auto___9104__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9044_9105__$1))
{var c__7126__auto___9106 = cljs.core.chunk_first.call(null,seq__9044_9105__$1);{
var G__9107 = cljs.core.chunk_rest.call(null,seq__9044_9105__$1);
var G__9108 = c__7126__auto___9106;
var G__9109 = cljs.core.count.call(null,c__7126__auto___9106);
var G__9110 = 0;
seq__9044_9095 = G__9107;
chunk__9045_9096 = G__9108;
count__9046_9097 = G__9109;
i__9047_9098 = G__9110;
continue;
}
} else
{var proc_9111 = cljs.core.first.call(null,seq__9044_9105__$1);proc_9111.kill();
{
var G__9112 = cljs.core.next.call(null,seq__9044_9105__$1);
var G__9113 = null;
var G__9114 = 0;
var G__9115 = 0;
seq__9044_9095 = G__9112;
chunk__9045_9096 = G__9113;
count__9046_9097 = G__9114;
i__9047_9098 = G__9115;
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
lt.objs.julia.commands.__BEH__return_block = (function __BEH__return_block(editor,p__9405){var map__9407 = p__9405;var map__9407__$1 = ((cljs.core.seq_QMARK_.call(null,map__9407))?cljs.core.apply.call(null,cljs.core.hash_map,map__9407):map__9407);var block = cljs.core.get.call(null,map__9407__$1,new cljs.core.Keyword(null,"block","block",1107736575));var bounds = cljs.core.get.call(null,map__9407__$1,new cljs.core.Keyword(null,"bounds","bounds",3925666343));var id = cljs.core.get.call(null,map__9407__$1,new cljs.core.Keyword(null,"id","id",1013907597));var cb = cljs.core.deref.call(null,lt.objs.julia.commands.cbs).call(null,id);cljs.core.swap_BANG_.call(null,lt.objs.julia.commands.cbs,cljs.core.dissoc,id);
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
return (function (p__9408,block){var vec__9409 = p__9408;var start = cljs.core.nth.call(null,vec__9409,0,null);var end = cljs.core.nth.call(null,vec__9409,1,null);return lt.objs.editor.set_selection.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(start - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(end - 1)], null));
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
var this$__$1 = this;var seq__8530 = cljs.core.seq.call(null,self__.watches);var chunk__8531 = null;var count__8532 = 0;var i__8533 = 0;while(true){
if((i__8533 < count__8532))
{var vec__8534 = cljs.core._nth.call(null,chunk__8531,i__8533);var key__$1 = cljs.core.nth.call(null,vec__8534,0,null);var f = cljs.core.nth.call(null,vec__8534,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8609 = seq__8530;
var G__8610 = chunk__8531;
var G__8611 = count__8532;
var G__8612 = (i__8533 + 1);
seq__8530 = G__8609;
chunk__8531 = G__8610;
count__8532 = G__8611;
i__8533 = G__8612;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8530);if(temp__4092__auto__)
{var seq__8530__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8530__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8530__$1);{
var G__8613 = cljs.core.chunk_rest.call(null,seq__8530__$1);
var G__8614 = c__7126__auto__;
var G__8615 = cljs.core.count.call(null,c__7126__auto__);
var G__8616 = 0;
seq__8530 = G__8613;
chunk__8531 = G__8614;
count__8532 = G__8615;
i__8533 = G__8616;
continue;
}
} else
{var vec__8535 = cljs.core.first.call(null,seq__8530__$1);var key__$1 = cljs.core.nth.call(null,vec__8535,0,null);var f = cljs.core.nth.call(null,vec__8535,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8617 = cljs.core.next.call(null,seq__8530__$1);
var G__8618 = null;
var G__8619 = 0;
var G__8620 = 0;
seq__8530 = G__8617;
chunk__8531 = G__8618;
count__8532 = G__8619;
i__8533 = G__8620;
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
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__8537 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__8537,0,null);var path__$2 = cljs.core.nth.call(null,vec__8537,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__8537,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__8537,atm__$1,path__$2,k,sa))
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
var G__8621__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8621 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__8621__delegate.call(this,sa,f,x,y,z,more);};
G__8621.cljs$lang$maxFixedArity = 5;
G__8621.cljs$lang$applyTo = (function (arglist__8622){
var sa = cljs.core.first(arglist__8622);
arglist__8622 = cljs.core.next(arglist__8622);
var f = cljs.core.first(arglist__8622);
arglist__8622 = cljs.core.next(arglist__8622);
var x = cljs.core.first(arglist__8622);
arglist__8622 = cljs.core.next(arglist__8622);
var y = cljs.core.first(arglist__8622);
arglist__8622 = cljs.core.next(arglist__8622);
var z = cljs.core.first(arglist__8622);
var more = cljs.core.rest(arglist__8622);
return G__8621__delegate(sa,f,x,y,z,more);
});
G__8621.cljs$core$IFn$_invoke$arity$variadic = G__8621__delegate;
return G__8621;
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
crate.binding.computable = (function (){var obj8539 = {};return obj8539;
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
var this$__$1 = this;var seq__8540 = cljs.core.seq.call(null,self__.watches);var chunk__8541 = null;var count__8542 = 0;var i__8543 = 0;while(true){
if((i__8543 < count__8542))
{var vec__8544 = cljs.core._nth.call(null,chunk__8541,i__8543);var key__$1 = cljs.core.nth.call(null,vec__8544,0,null);var f = cljs.core.nth.call(null,vec__8544,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8623 = seq__8540;
var G__8624 = chunk__8541;
var G__8625 = count__8542;
var G__8626 = (i__8543 + 1);
seq__8540 = G__8623;
chunk__8541 = G__8624;
count__8542 = G__8625;
i__8543 = G__8626;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8540);if(temp__4092__auto__)
{var seq__8540__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8540__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8540__$1);{
var G__8627 = cljs.core.chunk_rest.call(null,seq__8540__$1);
var G__8628 = c__7126__auto__;
var G__8629 = cljs.core.count.call(null,c__7126__auto__);
var G__8630 = 0;
seq__8540 = G__8627;
chunk__8541 = G__8628;
count__8542 = G__8629;
i__8543 = G__8630;
continue;
}
} else
{var vec__8545 = cljs.core.first.call(null,seq__8540__$1);var key__$1 = cljs.core.nth.call(null,vec__8545,0,null);var f = cljs.core.nth.call(null,vec__8545,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8631 = cljs.core.next.call(null,seq__8540__$1);
var G__8632 = null;
var G__8633 = 0;
var G__8634 = 0;
seq__8540 = G__8631;
chunk__8541 = G__8632;
count__8542 = G__8633;
i__8543 = G__8634;
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
var seq__8550_8635 = cljs.core.seq.call(null,atms);var chunk__8551_8636 = null;var count__8552_8637 = 0;var i__8553_8638 = 0;while(true){
if((i__8553_8638 < count__8552_8637))
{var atm_8639 = cljs.core._nth.call(null,chunk__8551_8636,i__8553_8638);crate.binding._depend.call(null,neue,atm_8639);
{
var G__8640 = seq__8550_8635;
var G__8641 = chunk__8551_8636;
var G__8642 = count__8552_8637;
var G__8643 = (i__8553_8638 + 1);
seq__8550_8635 = G__8640;
chunk__8551_8636 = G__8641;
count__8552_8637 = G__8642;
i__8553_8638 = G__8643;
continue;
}
} else
{var temp__4092__auto___8644 = cljs.core.seq.call(null,seq__8550_8635);if(temp__4092__auto___8644)
{var seq__8550_8645__$1 = temp__4092__auto___8644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8550_8645__$1))
{var c__7126__auto___8646 = cljs.core.chunk_first.call(null,seq__8550_8645__$1);{
var G__8647 = cljs.core.chunk_rest.call(null,seq__8550_8645__$1);
var G__8648 = c__7126__auto___8646;
var G__8649 = cljs.core.count.call(null,c__7126__auto___8646);
var G__8650 = 0;
seq__8550_8635 = G__8647;
chunk__8551_8636 = G__8648;
count__8552_8637 = G__8649;
i__8553_8638 = G__8650;
continue;
}
} else
{var atm_8651 = cljs.core.first.call(null,seq__8550_8645__$1);crate.binding._depend.call(null,neue,atm_8651);
{
var G__8652 = cljs.core.next.call(null,seq__8550_8645__$1);
var G__8653 = null;
var G__8654 = 0;
var G__8655 = 0;
seq__8550_8635 = G__8652;
chunk__8551_8636 = G__8653;
count__8552_8637 = G__8654;
i__8553_8638 = G__8655;
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
crate.binding.bindable_coll = (function (){var obj8555 = {};return obj8555;
})();
crate.binding.bindable = (function (){var obj8557 = {};return obj8557;
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
var this$__$1 = this;var seq__8558 = cljs.core.seq.call(null,self__.watches);var chunk__8559 = null;var count__8560 = 0;var i__8561 = 0;while(true){
if((i__8561 < count__8560))
{var vec__8562 = cljs.core._nth.call(null,chunk__8559,i__8561);var key = cljs.core.nth.call(null,vec__8562,0,null);var f = cljs.core.nth.call(null,vec__8562,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8656 = seq__8558;
var G__8657 = chunk__8559;
var G__8658 = count__8560;
var G__8659 = (i__8561 + 1);
seq__8558 = G__8656;
chunk__8559 = G__8657;
count__8560 = G__8658;
i__8561 = G__8659;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8558);if(temp__4092__auto__)
{var seq__8558__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8558__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8558__$1);{
var G__8660 = cljs.core.chunk_rest.call(null,seq__8558__$1);
var G__8661 = c__7126__auto__;
var G__8662 = cljs.core.count.call(null,c__7126__auto__);
var G__8663 = 0;
seq__8558 = G__8660;
chunk__8559 = G__8661;
count__8560 = G__8662;
i__8561 = G__8663;
continue;
}
} else
{var vec__8563 = cljs.core.first.call(null,seq__8558__$1);var key = cljs.core.nth.call(null,vec__8563,0,null);var f = cljs.core.nth.call(null,vec__8563,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8664 = cljs.core.next.call(null,seq__8558__$1);
var G__8665 = null;
var G__8666 = 0;
var G__8667 = 0;
seq__8558 = G__8664;
chunk__8559 = G__8665;
count__8560 = G__8666;
i__8561 = G__8667;
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
return (function (_,___$1,___$2,p__8564){var vec__8565 = p__8564;var event = cljs.core.nth.call(null,vec__8565,0,null);var el = cljs.core.nth.call(null,vec__8565,1,null);var v = cljs.core.nth.call(null,vec__8565,2,null);return func.call(null,event,el,v);
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
__GT_path.cljs$lang$applyTo = (function (arglist__8668){
var bc = cljs.core.first(arglist__8668);
var segs = cljs.core.rest(arglist__8668);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__8574_8669 = cljs.core.seq.call(null,added);var chunk__8575_8670 = null;var count__8576_8671 = 0;var i__8577_8672 = 0;while(true){
if((i__8577_8672 < count__8576_8671))
{var a_8673 = cljs.core._nth.call(null,chunk__8575_8670,i__8577_8672);crate.binding.bc_add.call(null,bc,a_8673,a_8673);
{
var G__8674 = seq__8574_8669;
var G__8675 = chunk__8575_8670;
var G__8676 = count__8576_8671;
var G__8677 = (i__8577_8672 + 1);
seq__8574_8669 = G__8674;
chunk__8575_8670 = G__8675;
count__8576_8671 = G__8676;
i__8577_8672 = G__8677;
continue;
}
} else
{var temp__4092__auto___8678 = cljs.core.seq.call(null,seq__8574_8669);if(temp__4092__auto___8678)
{var seq__8574_8679__$1 = temp__4092__auto___8678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8574_8679__$1))
{var c__7126__auto___8680 = cljs.core.chunk_first.call(null,seq__8574_8679__$1);{
var G__8681 = cljs.core.chunk_rest.call(null,seq__8574_8679__$1);
var G__8682 = c__7126__auto___8680;
var G__8683 = cljs.core.count.call(null,c__7126__auto___8680);
var G__8684 = 0;
seq__8574_8669 = G__8681;
chunk__8575_8670 = G__8682;
count__8576_8671 = G__8683;
i__8577_8672 = G__8684;
continue;
}
} else
{var a_8685 = cljs.core.first.call(null,seq__8574_8679__$1);crate.binding.bc_add.call(null,bc,a_8685,a_8685);
{
var G__8686 = cljs.core.next.call(null,seq__8574_8679__$1);
var G__8687 = null;
var G__8688 = 0;
var G__8689 = 0;
seq__8574_8669 = G__8686;
chunk__8575_8670 = G__8687;
count__8576_8671 = G__8688;
i__8577_8672 = G__8689;
continue;
}
}
} else
{}
}
break;
}
var seq__8578 = cljs.core.seq.call(null,removed);var chunk__8579 = null;var count__8580 = 0;var i__8581 = 0;while(true){
if((i__8581 < count__8580))
{var r = cljs.core._nth.call(null,chunk__8579,i__8581);crate.binding.bc_remove.call(null,bc,r);
{
var G__8690 = seq__8578;
var G__8691 = chunk__8579;
var G__8692 = count__8580;
var G__8693 = (i__8581 + 1);
seq__8578 = G__8690;
chunk__8579 = G__8691;
count__8580 = G__8692;
i__8581 = G__8693;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8578);if(temp__4092__auto__)
{var seq__8578__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8578__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8578__$1);{
var G__8694 = cljs.core.chunk_rest.call(null,seq__8578__$1);
var G__8695 = c__7126__auto__;
var G__8696 = cljs.core.count.call(null,c__7126__auto__);
var G__8697 = 0;
seq__8578 = G__8694;
chunk__8579 = G__8695;
count__8580 = G__8696;
i__8581 = G__8697;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8578__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__8698 = cljs.core.next.call(null,seq__8578__$1);
var G__8699 = null;
var G__8700 = 0;
var G__8701 = 0;
seq__8578 = G__8698;
chunk__8579 = G__8699;
count__8580 = G__8700;
i__8581 = G__8701;
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
var bound_coll__delegate = function (atm,p__8582){var vec__8585 = p__8582;var path = cljs.core.nth.call(null,vec__8585,0,null);var opts = cljs.core.nth.call(null,vec__8585,1,null);var vec__8586 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__8586,0,null);var opts__$1 = cljs.core.nth.call(null,vec__8586,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__8586,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8585,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__8586,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8585,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__8582 = null;if (arguments.length > 1) {
  p__8582 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__8582);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8702){
var atm = cljs.core.first(arglist__8702);
var p__8582 = cljs.core.rest(arglist__8702);
return bound_coll__delegate(atm,p__8582);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8587){var vec__8589 = p__8587;var opts = cljs.core.nth.call(null,vec__8589,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__8589,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__8589,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__8587 = null;if (arguments.length > 2) {
  p__8587 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__8587);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8703){
var as = cljs.core.first(arglist__8703);
arglist__8703 = cljs.core.next(arglist__8703);
var atm = cljs.core.first(arglist__8703);
var p__8587 = cljs.core.rest(arglist__8703);
return map_bound__delegate(as,atm,p__8587);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__8591 = b;if(G__8591)
{var bit__7028__auto__ = null;if(cljs.core.truth_((function (){var or__6378__auto__ = bit__7028__auto__;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return G__8591.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8591.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8591);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8591);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__8593 = b;if(G__8593)
{var bit__7028__auto__ = null;if(cljs.core.truth_((function (){var or__6378__auto__ = bit__7028__auto__;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return G__8593.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8593.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8593);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8593);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__8595 = atm;if(G__8595)
{var bit__7028__auto__ = (G__8595.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7028__auto__) || (G__8595.cljs$core$IDeref$))
{return true;
} else
{if((!G__8595.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8595);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8595);
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
var bound__delegate = function (atm,p__8596){var vec__8598 = p__8596;var func = cljs.core.nth.call(null,vec__8598,0,null);var func__$1 = (function (){var or__6378__auto__ = func;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__8596 = null;if (arguments.length > 1) {
  p__8596 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__8596);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8704){
var atm = cljs.core.first(arglist__8704);
var p__8596 = cljs.core.rest(arglist__8704);
return bound__delegate(atm,p__8596);
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
lt.objs.highlights.refresh_line = (function refresh_line(p__8167,default_class){var map__8169 = p__8167;var map__8169__$1 = ((cljs.core.seq_QMARK_.call(null,map__8169))?cljs.core.apply.call(null,cljs.core.hash_map,map__8169):map__8169);var l = map__8169__$1;var class$ = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));var line = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_(handle))
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
lt.objs.highlights.refresh_lines = (function refresh_lines(p__8171){var map__8173 = p__8171;var map__8173__$1 = ((cljs.core.seq_QMARK_.call(null,map__8173))?cljs.core.apply.call(null,cljs.core.hash_map,map__8173):map__8173);var class$ = cljs.core.get.call(null,map__8173__$1,new cljs.core.Keyword(null,"class","class",1108647146));var lines = cljs.core.get.call(null,map__8173__$1,new cljs.core.Keyword(null,"lines","lines",1116881521));return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (map__8173,map__8173__$1,class$,lines){
return (function (p1__8170_SHARP_){return lt.objs.highlights.refresh_line.call(null,p1__8170_SHARP_,class$);
});})(map__8173,map__8173__$1,class$,lines))
,lines));
});
lt.objs.highlights.__BEH__refresh = (function __BEH__refresh(this$){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",1116881521),lt.objs.highlights.refresh_lines.call(null,cljs.core.deref.call(null,this$))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.highlights","refresh","lt.objs.highlights/refresh",3576234382),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.highlights.__BEH__refresh,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));
lt.objs.highlights.__BEH__highlight = (function __BEH__highlight(this$,lines){var lines__$1 = ((cljs.core.sequential_QMARK_.call(null,lines))?lines:cljs.core.PersistentHashSet.fromArray([lines], true));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",1116881521),cljs.core.into.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"lines","lines",1116881521)),lines__$1)], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.highlights","highlight","lt.objs.highlights/highlight",1032059829),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.highlights.__BEH__highlight,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlight","highlight",4627660838),null], null), null));
lt.objs.highlights.__BEH__clear = (function __BEH__clear(this$){var seq__8182_8208 = cljs.core.seq.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"lines","lines",1116881521)));var chunk__8184_8209 = null;var count__8185_8210 = 0;var i__8186_8211 = 0;while(true){
if((i__8186_8211 < count__8185_8210))
{var map__8188_8212 = cljs.core._nth.call(null,chunk__8184_8209,i__8186_8211);var map__8188_8213__$1 = ((cljs.core.seq_QMARK_.call(null,map__8188_8212))?cljs.core.apply.call(null,cljs.core.hash_map,map__8188_8212):map__8188_8212);var ed_8214 = cljs.core.get.call(null,map__8188_8213__$1,new cljs.core.Keyword(null,"ed","ed",1013907473));var class_8215 = cljs.core.get.call(null,map__8188_8213__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle_8216 = cljs.core.get.call(null,map__8188_8213__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_8216))
{lt.objs.highlights.toggle_background.call(null,ed_8214,handle_8216,(function (){var or__6378__auto__ = class_8215;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"class","class",1108647146));
}
})(),false);
{
var G__8217 = seq__8182_8208;
var G__8218 = chunk__8184_8209;
var G__8219 = count__8185_8210;
var G__8220 = (i__8186_8211 + 1);
seq__8182_8208 = G__8217;
chunk__8184_8209 = G__8218;
count__8185_8210 = G__8219;
i__8186_8211 = G__8220;
continue;
}
} else
{{
var G__8221 = seq__8182_8208;
var G__8222 = chunk__8184_8209;
var G__8223 = count__8185_8210;
var G__8224 = (i__8186_8211 + 1);
seq__8182_8208 = G__8221;
chunk__8184_8209 = G__8222;
count__8185_8210 = G__8223;
i__8186_8211 = G__8224;
continue;
}
}
} else
{var temp__4092__auto___8225 = cljs.core.seq.call(null,seq__8182_8208);if(temp__4092__auto___8225)
{var seq__8182_8226__$1 = temp__4092__auto___8225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8182_8226__$1))
{var c__7126__auto___8227 = cljs.core.chunk_first.call(null,seq__8182_8226__$1);{
var G__8228 = cljs.core.chunk_rest.call(null,seq__8182_8226__$1);
var G__8229 = c__7126__auto___8227;
var G__8230 = cljs.core.count.call(null,c__7126__auto___8227);
var G__8231 = 0;
seq__8182_8208 = G__8228;
chunk__8184_8209 = G__8229;
count__8185_8210 = G__8230;
i__8186_8211 = G__8231;
continue;
}
} else
{var map__8189_8232 = cljs.core.first.call(null,seq__8182_8226__$1);var map__8189_8233__$1 = ((cljs.core.seq_QMARK_.call(null,map__8189_8232))?cljs.core.apply.call(null,cljs.core.hash_map,map__8189_8232):map__8189_8232);var ed_8234 = cljs.core.get.call(null,map__8189_8233__$1,new cljs.core.Keyword(null,"ed","ed",1013907473));var class_8235 = cljs.core.get.call(null,map__8189_8233__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle_8236 = cljs.core.get.call(null,map__8189_8233__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_8236))
{lt.objs.highlights.toggle_background.call(null,ed_8234,handle_8236,(function (){var or__6378__auto__ = class_8235;if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"class","class",1108647146));
}
})(),false);
{
var G__8237 = cljs.core.next.call(null,seq__8182_8226__$1);
var G__8238 = null;
var G__8239 = 0;
var G__8240 = 0;
seq__8182_8208 = G__8237;
chunk__8184_8209 = G__8238;
count__8185_8210 = G__8239;
i__8186_8211 = G__8240;
continue;
}
} else
{{
var G__8241 = cljs.core.next.call(null,seq__8182_8226__$1);
var G__8242 = null;
var G__8243 = 0;
var G__8244 = 0;
seq__8182_8208 = G__8241;
chunk__8184_8209 = G__8242;
count__8185_8210 = G__8243;
i__8186_8211 = G__8244;
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
lt.objs.highlights.__BEH__refresh_on_open = (function __BEH__refresh_on_open(editor){var seq__8194 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"highlights","highlights",1371209137)));var chunk__8195 = null;var count__8196 = 0;var i__8197 = 0;while(true){
if((i__8197 < count__8196))
{var highlights = cljs.core._nth.call(null,chunk__8195,i__8197);lt.object.raise.call(null,highlights,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
{
var G__8245 = seq__8194;
var G__8246 = chunk__8195;
var G__8247 = count__8196;
var G__8248 = (i__8197 + 1);
seq__8194 = G__8245;
chunk__8195 = G__8246;
count__8196 = G__8247;
i__8197 = G__8248;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8194);if(temp__4092__auto__)
{var seq__8194__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8194__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8194__$1);{
var G__8249 = cljs.core.chunk_rest.call(null,seq__8194__$1);
var G__8250 = c__7126__auto__;
var G__8251 = cljs.core.count.call(null,c__7126__auto__);
var G__8252 = 0;
seq__8194 = G__8249;
chunk__8195 = G__8250;
count__8196 = G__8251;
i__8197 = G__8252;
continue;
}
} else
{var highlights = cljs.core.first.call(null,seq__8194__$1);lt.object.raise.call(null,highlights,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
{
var G__8253 = cljs.core.next.call(null,seq__8194__$1);
var G__8254 = null;
var G__8255 = 0;
var G__8256 = 0;
seq__8194 = G__8253;
chunk__8195 = G__8254;
count__8196 = G__8255;
i__8197 = G__8256;
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
lt.objs.file_links.sqr = (function sqr(p1__8073_SHARP_){return Math.pow(p1__8073_SHARP_,2);
});
lt.objs.file_links.hypot = (function hypot(p__8074,p__8075){var vec__8078 = p__8074;var x = cljs.core.nth.call(null,vec__8078,0,null);var y = cljs.core.nth.call(null,vec__8078,1,null);var vec__8079 = p__8075;var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8079,0,null);var y_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8079,1,null);return lt.objs.file_links.sqrt.call(null,(lt.objs.file_links.sqr.call(null,(x_SINGLEQUOTE_ - x)) + lt.objs.file_links.sqr.call(null,(y_SINGLEQUOTE_ - y))));
});
lt.objs.file_links.left_click_QMARK_ = (function left_click_QMARK_(e){return cljs.core._EQ_.call(null,e.which,1);
});
lt.objs.file_links.click = (function click(node,f){var pos = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null));node.onmousedown = ((function (pos){
return (function (p1__8080_SHARP_){if(lt.objs.file_links.left_click_QMARK_.call(null,p1__8080_SHARP_))
{return cljs.core.reset_BANG_.call(null,pos,lt.objs.file_links.__GT_pos.call(null,p1__8080_SHARP_));
} else
{return null;
}
});})(pos))
;
return node.onmouseup = ((function (pos){
return (function (p1__8081_SHARP_){if((lt.objs.file_links.left_click_QMARK_.call(null,p1__8081_SHARP_)) && ((lt.objs.file_links.hypot.call(null,cljs.core.deref.call(null,pos),lt.objs.file_links.__GT_pos.call(null,p1__8081_SHARP_)) < 5)))
{p1__8081_SHARP_.preventDefault();
p1__8081_SHARP_.stopPropagation();
return f.call(null,p1__8081_SHARP_);
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
var highlight__delegate = function (p__8082){var vec__8084 = p__8082;var line = cljs.core.nth.call(null,vec__8084,0,null);if(cljs.core.truth_(lt.objs.file_links.tm_STAR_))
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
var p__8082 = null;if (arguments.length > 0) {
  p__8082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return highlight__delegate.call(this,p__8082);};
highlight.cljs$lang$maxFixedArity = 0;
highlight.cljs$lang$applyTo = (function (arglist__8114){
var p__8082 = cljs.core.seq(arglist__8114);
return highlight__delegate(p__8082);
});
highlight.cljs$core$IFn$_invoke$arity$variadic = highlight__delegate;
return highlight;
})()
;
lt.objs.file_links.url_pattern = (cljs.core.truth_(lt.objs.platform.win_QMARK_.call(null))?/^\s*((?:\w+:)[\/\\][A-Za-z0-9_ \\/\/\.\-]*?\.jl)(?::([0-9]+))?\s*$/:/^\s*(\/[A-Za-z0-9_ \\/\/\.\-]*?\.jl)(?::([0-9]+))?\s*$/);
lt.objs.file_links.__GT_line = (function __GT_line(s){var vec__8086 = cljs.core.re_find.call(null,lt.objs.file_links.url_pattern,s);var _ = cljs.core.nth.call(null,vec__8086,0,null);var file = cljs.core.nth.call(null,vec__8086,1,null);var line = cljs.core.nth.call(null,vec__8086,2,null);if(cljs.core.truth_(file))
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
lt.objs.file_links.process_nodes_BANG_ = (function process_nodes_BANG_(dom){var seq__8091_8115 = cljs.core.seq.call(null,lt.objs.file_links.file_links.call(null,dom));var chunk__8092_8116 = null;var count__8093_8117 = 0;var i__8094_8118 = 0;while(true){
if((i__8094_8118 < count__8093_8117))
{var link_8119 = cljs.core._nth.call(null,chunk__8092_8116,i__8094_8118);lt.objs.file_links.process_node_BANG_.call(null,link_8119,(function (){var or__6378__auto__ = lt.objs.file_links.data_url.call(null,link_8119);if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return lt.objs.file_links.__GT_line.call(null,lt.objs.file_links.data_file.call(null,link_8119));
}
})());
{
var G__8120 = seq__8091_8115;
var G__8121 = chunk__8092_8116;
var G__8122 = count__8093_8117;
var G__8123 = (i__8094_8118 + 1);
seq__8091_8115 = G__8120;
chunk__8092_8116 = G__8121;
count__8093_8117 = G__8122;
i__8094_8118 = G__8123;
continue;
}
} else
{var temp__4092__auto___8124 = cljs.core.seq.call(null,seq__8091_8115);if(temp__4092__auto___8124)
{var seq__8091_8125__$1 = temp__4092__auto___8124;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8091_8125__$1))
{var c__7126__auto___8126 = cljs.core.chunk_first.call(null,seq__8091_8125__$1);{
var G__8127 = cljs.core.chunk_rest.call(null,seq__8091_8125__$1);
var G__8128 = c__7126__auto___8126;
var G__8129 = cljs.core.count.call(null,c__7126__auto___8126);
var G__8130 = 0;
seq__8091_8115 = G__8127;
chunk__8092_8116 = G__8128;
count__8093_8117 = G__8129;
i__8094_8118 = G__8130;
continue;
}
} else
{var link_8131 = cljs.core.first.call(null,seq__8091_8125__$1);lt.objs.file_links.process_node_BANG_.call(null,link_8131,(function (){var or__6378__auto__ = lt.objs.file_links.data_url.call(null,link_8131);if(cljs.core.truth_(or__6378__auto__))
{return or__6378__auto__;
} else
{return lt.objs.file_links.__GT_line.call(null,lt.objs.file_links.data_file.call(null,link_8131));
}
})());
{
var G__8132 = cljs.core.next.call(null,seq__8091_8125__$1);
var G__8133 = null;
var G__8134 = 0;
var G__8135 = 0;
seq__8091_8115 = G__8132;
chunk__8092_8116 = G__8133;
count__8093_8117 = G__8134;
i__8094_8118 = G__8135;
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
lt.objs.file_links.process_anchors_BANG_ = (function process_anchors_BANG_(dom){cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__8095_SHARP_){return lt.objs.file_links.process_anchor_BANG_.call(null,p1__8095_SHARP_);
}),lt.objs.file_links.all_anchors.call(null,dom)));
var seq__8100_8136 = cljs.core.seq.call(null,lt.objs.file_links.all_anchors.call(null,dom));var chunk__8101_8137 = null;var count__8102_8138 = 0;var i__8103_8139 = 0;while(true){
if((i__8103_8139 < count__8102_8138))
{var anchor_8140 = cljs.core._nth.call(null,chunk__8101_8137,i__8103_8139);lt.objs.file_links.process_anchor_BANG_.call(null,anchor_8140);
{
var G__8141 = seq__8100_8136;
var G__8142 = chunk__8101_8137;
var G__8143 = count__8102_8138;
var G__8144 = (i__8103_8139 + 1);
seq__8100_8136 = G__8141;
chunk__8101_8137 = G__8142;
count__8102_8138 = G__8143;
i__8103_8139 = G__8144;
continue;
}
} else
{var temp__4092__auto___8145 = cljs.core.seq.call(null,seq__8100_8136);if(temp__4092__auto___8145)
{var seq__8100_8146__$1 = temp__4092__auto___8145;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8100_8146__$1))
{var c__7126__auto___8147 = cljs.core.chunk_first.call(null,seq__8100_8146__$1);{
var G__8148 = cljs.core.chunk_rest.call(null,seq__8100_8146__$1);
var G__8149 = c__7126__auto___8147;
var G__8150 = cljs.core.count.call(null,c__7126__auto___8147);
var G__8151 = 0;
seq__8100_8136 = G__8148;
chunk__8101_8137 = G__8149;
count__8102_8138 = G__8150;
i__8103_8139 = G__8151;
continue;
}
} else
{var anchor_8152 = cljs.core.first.call(null,seq__8100_8146__$1);lt.objs.file_links.process_anchor_BANG_.call(null,anchor_8152);
{
var G__8153 = cljs.core.next.call(null,seq__8100_8146__$1);
var G__8154 = null;
var G__8155 = 0;
var G__8156 = 0;
seq__8100_8136 = G__8153;
chunk__8101_8137 = G__8154;
count__8102_8138 = G__8155;
i__8103_8139 = G__8156;
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
lt.objs.langs.julia.browser.__BEH__set_objects = (function __BEH__set_objects(browser,p__8459){var map__8461 = p__8459;var map__8461__$1 = ((cljs.core.seq_QMARK_.call(null,map__8461))?cljs.core.apply.call(null,cljs.core.hash_map,map__8461):map__8461);var objs = cljs.core.get.call(null,map__8461__$1,new cljs.core.Keyword(null,"objs","objs",1017308622));return lt.object.merge_BANG_.call(null,browser,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"objs","objs",1017308622),objs], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.browser","set-objects","lt.objs.langs.julia.browser/set-objects",1694283112),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.browser.__BEH__set_objects,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update","update",4470025275),null], null), null));
lt.objs.langs.julia.browser.browser_ui = (function browser_ui(p__8462){var map__8478 = p__8462;var map__8478__$1 = ((cljs.core.seq_QMARK_.call(null,map__8478))?cljs.core.apply.call(null,cljs.core.hash_map,map__8478):map__8478);var objs = cljs.core.get.call(null,map__8478__$1,new cljs.core.Keyword(null,"objs","objs",1017308622));var e__7769__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.langs.julia.browser.join_theme.call(null,new cljs.core.Keyword(null,"div.CodeMirror","div.CodeMirror",3436950811)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.julia.browser","div.julia.browser",1862942824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.data-frame","table.data-frame",1770442524),(function (){var iter__7095__auto__ = ((function (map__8478,map__8478__$1,objs){
return (function iter__8479(s__8480){return (new cljs.core.LazySeq(null,((function (map__8478,map__8478__$1,objs){
return (function (){var s__8480__$1 = s__8480;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8480__$1);if(temp__4092__auto__)
{var s__8480__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8480__$2))
{var c__7093__auto__ = cljs.core.chunk_first.call(null,s__8480__$2);var size__7094__auto__ = cljs.core.count.call(null,c__7093__auto__);var b__8482 = cljs.core.chunk_buffer.call(null,size__7094__auto__);if((function (){var i__8481 = 0;while(true){
if((i__8481 < size__7094__auto__))
{var vec__8485 = cljs.core._nth.call(null,c__7093__auto__,i__8481);var k = cljs.core.nth.call(null,vec__8485,0,null);var v = cljs.core.nth.call(null,vec__8485,1,null);cljs.core.chunk_append.call(null,b__8482,lt.objs.langs.julia.browser.highlight.call(null,".variable",null,null,lt.objs.file_links.process_BANG_.call(null,lt.objs.langs.julia.browser.process_collapsible_BANG_.call(null,crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",4416891401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.variable","span.variable",2064274450),cljs.core.name.call(null,k)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),crate.core.raw.call(null,v)], null)], null))))));
{
var G__8504 = (i__8481 + 1);
i__8481 = G__8504;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8482),iter__8479.call(null,cljs.core.chunk_rest.call(null,s__8480__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8482),null);
}
} else
{var vec__8486 = cljs.core.first.call(null,s__8480__$2);var k = cljs.core.nth.call(null,vec__8486,0,null);var v = cljs.core.nth.call(null,vec__8486,1,null);return cljs.core.cons.call(null,lt.objs.langs.julia.browser.highlight.call(null,".variable",null,null,lt.objs.file_links.process_BANG_.call(null,lt.objs.langs.julia.browser.process_collapsible_BANG_.call(null,crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",4416891401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.variable","span.variable",2064274450),cljs.core.name.call(null,k)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),crate.core.raw.call(null,v)], null)], null))))),iter__8479.call(null,cljs.core.rest.call(null,s__8480__$2)));
}
} else
{return null;
}
break;
}
});})(map__8478,map__8478__$1,objs))
,null,null));
});})(map__8478,map__8478__$1,objs))
;return iter__7095__auto__.call(null,objs);
})()], null)], null)], null));var seq__8487_8505 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8488_8506 = null;var count__8489_8507 = 0;var i__8490_8508 = 0;while(true){
if((i__8490_8508 < count__8489_8507))
{var vec__8491_8509 = cljs.core._nth.call(null,chunk__8488_8506,i__8490_8508);var ev__7770__auto___8510 = cljs.core.nth.call(null,vec__8491_8509,0,null);var func__7771__auto___8511 = cljs.core.nth.call(null,vec__8491_8509,1,null);lt.util.dom.on.call(null,e__7769__auto__,ev__7770__auto___8510,func__7771__auto___8511);
{
var G__8512 = seq__8487_8505;
var G__8513 = chunk__8488_8506;
var G__8514 = count__8489_8507;
var G__8515 = (i__8490_8508 + 1);
seq__8487_8505 = G__8512;
chunk__8488_8506 = G__8513;
count__8489_8507 = G__8514;
i__8490_8508 = G__8515;
continue;
}
} else
{var temp__4092__auto___8516 = cljs.core.seq.call(null,seq__8487_8505);if(temp__4092__auto___8516)
{var seq__8487_8517__$1 = temp__4092__auto___8516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8487_8517__$1))
{var c__7126__auto___8518 = cljs.core.chunk_first.call(null,seq__8487_8517__$1);{
var G__8519 = cljs.core.chunk_rest.call(null,seq__8487_8517__$1);
var G__8520 = c__7126__auto___8518;
var G__8521 = cljs.core.count.call(null,c__7126__auto___8518);
var G__8522 = 0;
seq__8487_8505 = G__8519;
chunk__8488_8506 = G__8520;
count__8489_8507 = G__8521;
i__8490_8508 = G__8522;
continue;
}
} else
{var vec__8492_8523 = cljs.core.first.call(null,seq__8487_8517__$1);var ev__7770__auto___8524 = cljs.core.nth.call(null,vec__8492_8523,0,null);var func__7771__auto___8525 = cljs.core.nth.call(null,vec__8492_8523,1,null);lt.util.dom.on.call(null,e__7769__auto__,ev__7770__auto___8524,func__7771__auto___8525);
{
var G__8526 = cljs.core.next.call(null,seq__8487_8517__$1);
var G__8527 = null;
var G__8528 = 0;
var G__8529 = 0;
seq__8487_8505 = G__8526;
chunk__8488_8506 = G__8527;
count__8489_8507 = G__8528;
i__8490_8508 = G__8529;
continue;
}
}
} else
{}
}
break;
}
return e__7769__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.browser","browser","lt.objs.langs.julia.browser/browser",916384999),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.browser","julia.browser",1725846277),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia.browser","on-close","lt.objs.langs.julia.browser/on-close",664516101),new cljs.core.Keyword("lt.objs.langs.julia.browser","set-objects","lt.objs.langs.julia.browser/set-objects",1694283112)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Browser",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return crate.binding.bound.call(null,this$,lt.objs.langs.julia.browser.browser_ui);
}));
lt.objs.langs.julia.browser.browser = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.browser","browser","lt.objs.langs.julia.browser/browser",916384999));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"julia.browser","julia.browser",1725846277),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Open the object browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.objs.langs.julia.browser.browser);
})], null));
lt.objs.langs.julia.browser.tag_behaviour = (function tag_behaviour(tag,name){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8493_SHARP_){return cljs.core._EQ_.call(null,((cljs.core.seq_QMARK_.call(null,p1__8493_SHARP_))?cljs.core.first.call(null,p1__8493_SHARP_):p1__8493_SHARP_),name);
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
}catch (e9327){if((e9327 instanceof Error))
{var e = e9327;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9327;
} else
{return null;
}
}
}});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.stats","metrics","lt.objs.langs.julia.stats/metrics",1111343317),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (){return lt.objs.langs.julia.stats.hit.call(null,[cljs.core.str("http://mikeinn.es/hit?id="),cljs.core.str(cljs.core.deref.call(null,lt.objs.cache.settings).call(null,new cljs.core.Keyword(null,"uid","uid",1014020034)))].join(''));
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
{var G__9310 = cljs.core.deref.call(null,lt.objs.langs.julia.results.results);var G__9310__$1 = (((G__9310 == null))?null:cljs.core.get.call(null,G__9310,thing));var G__9310__$2 = (((G__9310__$1 == null))?null:cljs.core.deref.call(null,G__9310__$1));var G__9310__$3 = (((G__9310__$2 == null))?null:new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(G__9310__$2));return G__9310__$3;
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
lt.objs.langs.julia.results.__GT_client = (function __GT_client(id){var G__9312 = id;var G__9312__$1 = (((G__9312 == null))?null:lt.objs.langs.julia.results.__GT_ed.call(null,G__9312));var G__9312__$2 = (((G__9312__$1 == null))?null:cljs.core.deref.call(null,G__9312__$1));var G__9312__$3 = (((G__9312__$2 == null))?null:new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(G__9312__$2));var G__9312__$4 = (((G__9312__$3 == null))?null:new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(G__9312__$3));return G__9312__$4;
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
lt.objs.langs.julia.results.__BEH__raise = (function __BEH__raise(this$,p__9313){var map__9315 = p__9313;var map__9315__$1 = ((cljs.core.seq_QMARK_.call(null,map__9315))?cljs.core.apply.call(null,cljs.core.hash_map,map__9315):map__9315);var args = cljs.core.get.call(null,map__9315__$1,new cljs.core.Keyword(null,"args","args",1016906831));var event = cljs.core.get.call(null,map__9315__$1,new cljs.core.Keyword(null,"event","event",1110795788));var id = cljs.core.get.call(null,map__9315__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(cljs.core.deref.call(null,lt.objs.langs.julia.results.results).call(null,id)))
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
lt.objs.langs.julia.patch.__GT_inline_exception = (function __GT_inline_exception(this$,info){var e__7769__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,lt.objs.eval.__GT_exception_class)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),lt.objs.eval.__GT_spacing.call(null,lt.objs.editor.line.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(info))))], null),((typeof new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)], null))], null));var seq__8983_8999 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7769__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"click","click",1108654330));
});})(e__7769__auto__))
,new cljs.core.Keyword(null,"contextmenu","contextmenu",911789824),((function (e__7769__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"menu!","menu!",1117686292),e);
});})(e__7769__auto__))
,new cljs.core.Keyword(null,"dblclick","dblclick",3463991820),((function (e__7769__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"double-click","double-click",956590078));
});})(e__7769__auto__))
], null)));var chunk__8984_9000 = null;var count__8985_9001 = 0;var i__8986_9002 = 0;while(true){
if((i__8986_9002 < count__8985_9001))
{var vec__8987_9003 = cljs.core._nth.call(null,chunk__8984_9000,i__8986_9002);var ev__7770__auto___9004 = cljs.core.nth.call(null,vec__8987_9003,0,null);var func__7771__auto___9005 = cljs.core.nth.call(null,vec__8987_9003,1,null);lt.util.dom.on.call(null,e__7769__auto__,ev__7770__auto___9004,func__7771__auto___9005);
{
var G__9006 = seq__8983_8999;
var G__9007 = chunk__8984_9000;
var G__9008 = count__8985_9001;
var G__9009 = (i__8986_9002 + 1);
seq__8983_8999 = G__9006;
chunk__8984_9000 = G__9007;
count__8985_9001 = G__9008;
i__8986_9002 = G__9009;
continue;
}
} else
{var temp__4092__auto___9010 = cljs.core.seq.call(null,seq__8983_8999);if(temp__4092__auto___9010)
{var seq__8983_9011__$1 = temp__4092__auto___9010;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8983_9011__$1))
{var c__7126__auto___9012 = cljs.core.chunk_first.call(null,seq__8983_9011__$1);{
var G__9013 = cljs.core.chunk_rest.call(null,seq__8983_9011__$1);
var G__9014 = c__7126__auto___9012;
var G__9015 = cljs.core.count.call(null,c__7126__auto___9012);
var G__9016 = 0;
seq__8983_8999 = G__9013;
chunk__8984_9000 = G__9014;
count__8985_9001 = G__9015;
i__8986_9002 = G__9016;
continue;
}
} else
{var vec__8988_9017 = cljs.core.first.call(null,seq__8983_9011__$1);var ev__7770__auto___9018 = cljs.core.nth.call(null,vec__8988_9017,0,null);var func__7771__auto___9019 = cljs.core.nth.call(null,vec__8988_9017,1,null);lt.util.dom.on.call(null,e__7769__auto__,ev__7770__auto___9018,func__7771__auto___9019);
{
var G__9020 = cljs.core.next.call(null,seq__8983_9011__$1);
var G__9021 = null;
var G__9022 = 0;
var G__9023 = 0;
seq__8983_8999 = G__9020;
chunk__8984_9000 = G__9021;
count__8985_9001 = G__9022;
i__8986_9002 = G__9023;
continue;
}
}
} else
{}
}
break;
}
return e__7769__auto__;
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
lt.objs.langs.julia.profiler.refresh_line = (function refresh_line(p__9116){var map__9118 = p__9116;var map__9118__$1 = ((cljs.core.seq_QMARK_.call(null,map__9118))?cljs.core.apply.call(null,cljs.core.hash_map,map__9118):map__9118);var l = map__9118__$1;var handle = cljs.core.get.call(null,map__9118__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));var percent = cljs.core.get.call(null,map__9118__$1,new cljs.core.Keyword(null,"percent","percent",4629944247));var line = cljs.core.get.call(null,map__9118__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__9118__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_(handle))
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
lt.objs.langs.julia.profiler.refresh_and_update = (function refresh_and_update(lines){var lines__$1 = lt.objs.langs.julia.profiler.refresh_lines.call(null,lines);var seq__9125_9189 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.editors.call(null,lines__$1));var chunk__9127_9190 = null;var count__9128_9191 = 0;var i__9129_9192 = 0;while(true){
if((i__9129_9192 < count__9128_9191))
{var ed_9193 = cljs.core._nth.call(null,chunk__9127_9190,i__9129_9192);if(cljs.core.truth_((function (){var and__6366__auto__ = ed_9193;if(cljs.core.truth_(and__6366__auto__))
{return cljs.core.deref.call(null,ed_9193);
} else
{return and__6366__auto__;
}
})()))
{lt.objs.editor.refresh.call(null,ed_9193);
{
var G__9194 = seq__9125_9189;
var G__9195 = chunk__9127_9190;
var G__9196 = count__9128_9191;
var G__9197 = (i__9129_9192 + 1);
seq__9125_9189 = G__9194;
chunk__9127_9190 = G__9195;
count__9128_9191 = G__9196;
i__9129_9192 = G__9197;
continue;
}
} else
{{
var G__9198 = seq__9125_9189;
var G__9199 = chunk__9127_9190;
var G__9200 = count__9128_9191;
var G__9201 = (i__9129_9192 + 1);
seq__9125_9189 = G__9198;
chunk__9127_9190 = G__9199;
count__9128_9191 = G__9200;
i__9129_9192 = G__9201;
continue;
}
}
} else
{var temp__4092__auto___9202 = cljs.core.seq.call(null,seq__9125_9189);if(temp__4092__auto___9202)
{var seq__9125_9203__$1 = temp__4092__auto___9202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9125_9203__$1))
{var c__7126__auto___9204 = cljs.core.chunk_first.call(null,seq__9125_9203__$1);{
var G__9205 = cljs.core.chunk_rest.call(null,seq__9125_9203__$1);
var G__9206 = c__7126__auto___9204;
var G__9207 = cljs.core.count.call(null,c__7126__auto___9204);
var G__9208 = 0;
seq__9125_9189 = G__9205;
chunk__9127_9190 = G__9206;
count__9128_9191 = G__9207;
i__9129_9192 = G__9208;
continue;
}
} else
{var ed_9209 = cljs.core.first.call(null,seq__9125_9203__$1);if(cljs.core.truth_((function (){var and__6366__auto__ = ed_9209;if(cljs.core.truth_(and__6366__auto__))
{return cljs.core.deref.call(null,ed_9209);
} else
{return and__6366__auto__;
}
})()))
{lt.objs.editor.refresh.call(null,ed_9209);
{
var G__9210 = cljs.core.next.call(null,seq__9125_9203__$1);
var G__9211 = null;
var G__9212 = 0;
var G__9213 = 0;
seq__9125_9189 = G__9210;
chunk__9127_9190 = G__9211;
count__9128_9191 = G__9212;
i__9129_9192 = G__9213;
continue;
}
} else
{{
var G__9214 = cljs.core.next.call(null,seq__9125_9203__$1);
var G__9215 = null;
var G__9216 = 0;
var G__9217 = 0;
seq__9125_9189 = G__9214;
chunk__9127_9190 = G__9215;
count__9128_9191 = G__9216;
i__9129_9192 = G__9217;
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
{var seq__9143_9218 = cljs.core.seq.call(null,cljs.core.deref.call(null,lt.objs.langs.julia.profiler.lines));var chunk__9145_9219 = null;var count__9146_9220 = 0;var i__9147_9221 = 0;while(true){
if((i__9147_9221 < count__9146_9220))
{var map__9149_9222 = cljs.core._nth.call(null,chunk__9145_9219,i__9147_9221);var map__9149_9223__$1 = ((cljs.core.seq_QMARK_.call(null,map__9149_9222))?cljs.core.apply.call(null,cljs.core.hash_map,map__9149_9222):map__9149_9222);var handle_9224 = cljs.core.get.call(null,map__9149_9223__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_9224))
{handle_9224.percent = null;
{
var G__9225 = seq__9143_9218;
var G__9226 = chunk__9145_9219;
var G__9227 = count__9146_9220;
var G__9228 = (i__9147_9221 + 1);
seq__9143_9218 = G__9225;
chunk__9145_9219 = G__9226;
count__9146_9220 = G__9227;
i__9147_9221 = G__9228;
continue;
}
} else
{{
var G__9229 = seq__9143_9218;
var G__9230 = chunk__9145_9219;
var G__9231 = count__9146_9220;
var G__9232 = (i__9147_9221 + 1);
seq__9143_9218 = G__9229;
chunk__9145_9219 = G__9230;
count__9146_9220 = G__9231;
i__9147_9221 = G__9232;
continue;
}
}
} else
{var temp__4092__auto___9233 = cljs.core.seq.call(null,seq__9143_9218);if(temp__4092__auto___9233)
{var seq__9143_9234__$1 = temp__4092__auto___9233;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9143_9234__$1))
{var c__7126__auto___9235 = cljs.core.chunk_first.call(null,seq__9143_9234__$1);{
var G__9236 = cljs.core.chunk_rest.call(null,seq__9143_9234__$1);
var G__9237 = c__7126__auto___9235;
var G__9238 = cljs.core.count.call(null,c__7126__auto___9235);
var G__9239 = 0;
seq__9143_9218 = G__9236;
chunk__9145_9219 = G__9237;
count__9146_9220 = G__9238;
i__9147_9221 = G__9239;
continue;
}
} else
{var map__9150_9240 = cljs.core.first.call(null,seq__9143_9234__$1);var map__9150_9241__$1 = ((cljs.core.seq_QMARK_.call(null,map__9150_9240))?cljs.core.apply.call(null,cljs.core.hash_map,map__9150_9240):map__9150_9240);var handle_9242 = cljs.core.get.call(null,map__9150_9241__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_9242))
{handle_9242.percent = null;
{
var G__9243 = cljs.core.next.call(null,seq__9143_9234__$1);
var G__9244 = null;
var G__9245 = 0;
var G__9246 = 0;
seq__9143_9218 = G__9243;
chunk__9145_9219 = G__9244;
count__9146_9220 = G__9245;
i__9147_9221 = G__9246;
continue;
}
} else
{{
var G__9247 = cljs.core.next.call(null,seq__9143_9234__$1);
var G__9248 = null;
var G__9249 = 0;
var G__9250 = 0;
seq__9143_9218 = G__9247;
chunk__9145_9219 = G__9248;
count__9146_9220 = G__9249;
i__9147_9221 = G__9250;
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
var seq__9151 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.dom_bars.call(null));var chunk__9152 = null;var count__9153 = 0;var i__9154 = 0;while(true){
if((i__9154 < count__9153))
{var bar = cljs.core._nth.call(null,chunk__9152,i__9154);bar.remove();
{
var G__9251 = seq__9151;
var G__9252 = chunk__9152;
var G__9253 = count__9153;
var G__9254 = (i__9154 + 1);
seq__9151 = G__9251;
chunk__9152 = G__9252;
count__9153 = G__9253;
i__9154 = G__9254;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9151);if(temp__4092__auto__)
{var seq__9151__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9151__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__9151__$1);{
var G__9255 = cljs.core.chunk_rest.call(null,seq__9151__$1);
var G__9256 = c__7126__auto__;
var G__9257 = cljs.core.count.call(null,c__7126__auto__);
var G__9258 = 0;
seq__9151 = G__9255;
chunk__9152 = G__9256;
count__9153 = G__9257;
i__9154 = G__9258;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__9151__$1);bar.remove();
{
var G__9259 = cljs.core.next.call(null,seq__9151__$1);
var G__9260 = null;
var G__9261 = 0;
var G__9262 = 0;
seq__9151 = G__9259;
chunk__9152 = G__9260;
count__9153 = G__9261;
i__9154 = G__9262;
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
lt.objs.langs.julia.profiler.animate_in = (function animate_in(){var bars = lt.objs.langs.julia.profiler.dom_bars.call(null);var seq__9163_9263 = cljs.core.seq.call(null,bars);var chunk__9164_9264 = null;var count__9165_9265 = 0;var i__9166_9266 = 0;while(true){
if((i__9166_9266 < count__9165_9265))
{var bar_9267 = cljs.core._nth.call(null,chunk__9164_9264,i__9166_9266);lt.util.dom.remove_class.call(null,bar_9267,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.add_class.call(null,bar_9267,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9268 = seq__9163_9263;
var G__9269 = chunk__9164_9264;
var G__9270 = count__9165_9265;
var G__9271 = (i__9166_9266 + 1);
seq__9163_9263 = G__9268;
chunk__9164_9264 = G__9269;
count__9165_9265 = G__9270;
i__9166_9266 = G__9271;
continue;
}
} else
{var temp__4092__auto___9272 = cljs.core.seq.call(null,seq__9163_9263);if(temp__4092__auto___9272)
{var seq__9163_9273__$1 = temp__4092__auto___9272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9163_9273__$1))
{var c__7126__auto___9274 = cljs.core.chunk_first.call(null,seq__9163_9273__$1);{
var G__9275 = cljs.core.chunk_rest.call(null,seq__9163_9273__$1);
var G__9276 = c__7126__auto___9274;
var G__9277 = cljs.core.count.call(null,c__7126__auto___9274);
var G__9278 = 0;
seq__9163_9263 = G__9275;
chunk__9164_9264 = G__9276;
count__9165_9265 = G__9277;
i__9166_9266 = G__9278;
continue;
}
} else
{var bar_9279 = cljs.core.first.call(null,seq__9163_9273__$1);lt.util.dom.remove_class.call(null,bar_9279,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.add_class.call(null,bar_9279,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9280 = cljs.core.next.call(null,seq__9163_9273__$1);
var G__9281 = null;
var G__9282 = 0;
var G__9283 = 0;
seq__9163_9263 = G__9280;
chunk__9164_9264 = G__9281;
count__9165_9265 = G__9282;
i__9166_9266 = G__9283;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.langs.julia.profiler.callback.call(null,((function (bars){
return (function (){var seq__9167 = cljs.core.seq.call(null,bars);var chunk__9168 = null;var count__9169 = 0;var i__9170 = 0;while(true){
if((i__9170 < count__9169))
{var bar = cljs.core._nth.call(null,chunk__9168,i__9170);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.remove_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9284 = seq__9167;
var G__9285 = chunk__9168;
var G__9286 = count__9169;
var G__9287 = (i__9170 + 1);
seq__9167 = G__9284;
chunk__9168 = G__9285;
count__9169 = G__9286;
i__9170 = G__9287;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9167);if(temp__4092__auto__)
{var seq__9167__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9167__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__9167__$1);{
var G__9288 = cljs.core.chunk_rest.call(null,seq__9167__$1);
var G__9289 = c__7126__auto__;
var G__9290 = cljs.core.count.call(null,c__7126__auto__);
var G__9291 = 0;
seq__9167 = G__9288;
chunk__9168 = G__9289;
count__9169 = G__9290;
i__9170 = G__9291;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__9167__$1);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.remove_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9292 = cljs.core.next.call(null,seq__9167__$1);
var G__9293 = null;
var G__9294 = 0;
var G__9295 = 0;
seq__9167 = G__9292;
chunk__9168 = G__9293;
count__9169 = G__9294;
i__9170 = G__9295;
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
lt.objs.langs.julia.profiler.animate_out = (function animate_out(){var seq__9175 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.dom_bars.call(null));var chunk__9176 = null;var count__9177 = 0;var i__9178 = 0;while(true){
if((i__9178 < count__9177))
{var bar = cljs.core._nth.call(null,chunk__9176,i__9178);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9296 = seq__9175;
var G__9297 = chunk__9176;
var G__9298 = count__9177;
var G__9299 = (i__9178 + 1);
seq__9175 = G__9296;
chunk__9176 = G__9297;
count__9177 = G__9298;
i__9178 = G__9299;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9175);if(temp__4092__auto__)
{var seq__9175__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9175__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__9175__$1);{
var G__9300 = cljs.core.chunk_rest.call(null,seq__9175__$1);
var G__9301 = c__7126__auto__;
var G__9302 = cljs.core.count.call(null,c__7126__auto__);
var G__9303 = 0;
seq__9175 = G__9300;
chunk__9176 = G__9301;
count__9177 = G__9302;
i__9178 = G__9303;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__9175__$1);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9304 = cljs.core.next.call(null,seq__9175__$1);
var G__9305 = null;
var G__9306 = 0;
var G__9307 = 0;
seq__9175 = G__9304;
chunk__9176 = G__9305;
count__9177 = G__9306;
i__9178 = G__9307;
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
var res_obj_9308 = lt.objs.langs.julia.util.widget.call(null,editor,cljs.core.second.call(null,new cljs.core.Keyword(null,"bounds","bounds",3925666343).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"underline","underline",4281907774));lt.objs.langs.julia.profiler.listen_BANG_.call(null,res_obj_9308);
lt.object.add_tags.call(null,res_obj_9308,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"julia.profile-result","julia.profile-result",1163667816)], null));
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
var seq__8412_8426 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,new cljs.core.Keyword(null,".code",".code",1059445389),node));var chunk__8413_8427 = null;var count__8414_8428 = 0;var i__8415_8429 = 0;while(true){
if((i__8415_8429 < count__8414_8428))
{var node_8430__$1 = cljs.core._nth.call(null,chunk__8413_8427,i__8415_8429);lt.plugins.runmode.process_one.call(null,node_8430__$1);
{
var G__8431 = seq__8412_8426;
var G__8432 = chunk__8413_8427;
var G__8433 = count__8414_8428;
var G__8434 = (i__8415_8429 + 1);
seq__8412_8426 = G__8431;
chunk__8413_8427 = G__8432;
count__8414_8428 = G__8433;
i__8415_8429 = G__8434;
continue;
}
} else
{var temp__4092__auto___8435 = cljs.core.seq.call(null,seq__8412_8426);if(temp__4092__auto___8435)
{var seq__8412_8436__$1 = temp__4092__auto___8435;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8412_8436__$1))
{var c__7126__auto___8437 = cljs.core.chunk_first.call(null,seq__8412_8436__$1);{
var G__8438 = cljs.core.chunk_rest.call(null,seq__8412_8436__$1);
var G__8439 = c__7126__auto___8437;
var G__8440 = cljs.core.count.call(null,c__7126__auto___8437);
var G__8441 = 0;
seq__8412_8426 = G__8438;
chunk__8413_8427 = G__8439;
count__8414_8428 = G__8440;
i__8415_8429 = G__8441;
continue;
}
} else
{var node_8442__$1 = cljs.core.first.call(null,seq__8412_8436__$1);lt.plugins.runmode.process_one.call(null,node_8442__$1);
{
var G__8443 = cljs.core.next.call(null,seq__8412_8436__$1);
var G__8444 = null;
var G__8445 = 0;
var G__8446 = 0;
seq__8412_8426 = G__8443;
chunk__8413_8427 = G__8444;
count__8414_8428 = G__8445;
i__8415_8429 = G__8446;
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
var set_gutter_node__delegate = function (ed,line,p__8058){var vec__8060 = p__8058;var node = cljs.core.nth.call(null,vec__8060,0,null);return lt.objs.editor.__GT_cm_ed.call(null,ed).setGutterMarker((line - 1),"CodeMirror-linenumbers",node);
};
var set_gutter_node = function (ed,line,var_args){
var p__8058 = null;if (arguments.length > 2) {
  p__8058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_gutter_node__delegate.call(this,ed,line,p__8058);};
set_gutter_node.cljs$lang$maxFixedArity = 2;
set_gutter_node.cljs$lang$applyTo = (function (arglist__8071){
var ed = cljs.core.first(arglist__8071);
arglist__8071 = cljs.core.next(arglist__8071);
var line = cljs.core.first(arglist__8071);
var p__8058 = cljs.core.rest(arglist__8071);
return set_gutter_node__delegate(ed,line,p__8058);
});
set_gutter_node.cljs$core$IFn$_invoke$arity$variadic = set_gutter_node__delegate;
return set_gutter_node;
})()
;
lt.objs.breakpoint.show_gutter_menu = (function show_gutter_menu(ed,l,e){var items_8072 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",1119910592),lt.object.raise_reduce.call(null,ed,new cljs.core.Keyword(null,"gutter-menu+","gutter-menu+",521043692),cljs.core.PersistentVector.EMPTY,l));lt.objs.menu.show_menu.call(null,lt.objs.menu.menu.call(null,items_8072),e.clientX,e.clientY);
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
lt.objs.langs.julia.package$.package_ui = (function package_ui(){var e__7769__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",4117657110),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),"http://pkg.julialang.org"], null)], null));var seq__8916_8940 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8917_8941 = null;var count__8918_8942 = 0;var i__8919_8943 = 0;while(true){
if((i__8919_8943 < count__8918_8942))
{var vec__8920_8944 = cljs.core._nth.call(null,chunk__8917_8941,i__8919_8943);var ev__7770__auto___8945 = cljs.core.nth.call(null,vec__8920_8944,0,null);var func__7771__auto___8946 = cljs.core.nth.call(null,vec__8920_8944,1,null);lt.util.dom.on.call(null,e__7769__auto__,ev__7770__auto___8945,func__7771__auto___8946);
{
var G__8947 = seq__8916_8940;
var G__8948 = chunk__8917_8941;
var G__8949 = count__8918_8942;
var G__8950 = (i__8919_8943 + 1);
seq__8916_8940 = G__8947;
chunk__8917_8941 = G__8948;
count__8918_8942 = G__8949;
i__8919_8943 = G__8950;
continue;
}
} else
{var temp__4092__auto___8951 = cljs.core.seq.call(null,seq__8916_8940);if(temp__4092__auto___8951)
{var seq__8916_8952__$1 = temp__4092__auto___8951;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8916_8952__$1))
{var c__7126__auto___8953 = cljs.core.chunk_first.call(null,seq__8916_8952__$1);{
var G__8954 = cljs.core.chunk_rest.call(null,seq__8916_8952__$1);
var G__8955 = c__7126__auto___8953;
var G__8956 = cljs.core.count.call(null,c__7126__auto___8953);
var G__8957 = 0;
seq__8916_8940 = G__8954;
chunk__8917_8941 = G__8955;
count__8918_8942 = G__8956;
i__8919_8943 = G__8957;
continue;
}
} else
{var vec__8921_8958 = cljs.core.first.call(null,seq__8916_8952__$1);var ev__7770__auto___8959 = cljs.core.nth.call(null,vec__8921_8958,0,null);var func__7771__auto___8960 = cljs.core.nth.call(null,vec__8921_8958,1,null);lt.util.dom.on.call(null,e__7769__auto__,ev__7770__auto___8959,func__7771__auto___8960);
{
var G__8961 = cljs.core.next.call(null,seq__8916_8952__$1);
var G__8962 = null;
var G__8963 = 0;
var G__8964 = 0;
seq__8916_8940 = G__8961;
chunk__8917_8941 = G__8962;
count__8918_8942 = G__8963;
i__8919_8943 = G__8964;
continue;
}
}
} else
{}
}
break;
}
return e__7769__auto__;
});
lt.objs.langs.julia.package$.process_link = (function process_link(a){var target = lt.util.dom.attr.call(null,a,new cljs.core.Keyword(null,"href","href",1017115293));a.onclick = ((function (target){
return (function (e){return lt.objs.platform.open_url.call(null,target);
});})(target))
;
return lt.util.dom.attr.call(null,a,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"javascript:void(0);"], null));
});
lt.objs.langs.julia.package$.init_ui = (function init_ui(frame){lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,".titlebox",".titlebox",1900347923),frame.contentDocument),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),new cljs.core.Keyword(null,"none","none",1017291434)], null));
var seq__8926 = cljs.core.seq.call(null,lt.util.dom.lazy_nl_via_item.call(null,lt.util.dom.$$.call(null,new cljs.core.Keyword(null,"a","a",1013904339),frame.contentDocument)));var chunk__8927 = null;var count__8928 = 0;var i__8929 = 0;while(true){
if((i__8929 < count__8928))
{var a = cljs.core._nth.call(null,chunk__8927,i__8929);lt.objs.langs.julia.package$.process_link.call(null,a);
{
var G__8965 = seq__8926;
var G__8966 = chunk__8927;
var G__8967 = count__8928;
var G__8968 = (i__8929 + 1);
seq__8926 = G__8965;
chunk__8927 = G__8966;
count__8928 = G__8967;
i__8929 = G__8968;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8926);if(temp__4092__auto__)
{var seq__8926__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8926__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8926__$1);{
var G__8969 = cljs.core.chunk_rest.call(null,seq__8926__$1);
var G__8970 = c__7126__auto__;
var G__8971 = cljs.core.count.call(null,c__7126__auto__);
var G__8972 = 0;
seq__8926 = G__8969;
chunk__8927 = G__8970;
count__8928 = G__8971;
i__8929 = G__8972;
continue;
}
} else
{var a = cljs.core.first.call(null,seq__8926__$1);lt.objs.langs.julia.package$.process_link.call(null,a);
{
var G__8973 = cljs.core.next.call(null,seq__8926__$1);
var G__8974 = null;
var G__8975 = 0;
var G__8976 = 0;
seq__8926 = G__8973;
chunk__8927 = G__8974;
count__8928 = G__8975;
i__8929 = G__8976;
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
lt.plugins.reptile.mark_text = (function mark_text(ed,line,p__8273,opts){var vec__8275 = p__8273;var start = cljs.core.nth.call(null,vec__8275,0,null);var end = cljs.core.nth.call(null,vec__8275,1,null);return lt.objs.editor.__GT_cm_ed.call(null,ed).markText({"ch": start, "line": (line - 1)},{"ch": end, "line": (line - 1)},cljs.core.clj__GT_js.call(null,opts));
});
lt.plugins.reptile.content = (function content(ed,line,p__8276){var vec__8278 = p__8276;var start = cljs.core.nth.call(null,vec__8278,0,null);var end = cljs.core.nth.call(null,vec__8278,1,null);return lt.objs.editor.__GT_cm_ed.call(null,ed).getRange({"ch": start, "line": (line - 1)},{"ch": end, "line": (line - 1)});
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
call_me_maybe.cljs$lang$applyTo = (function (arglist__8336){
var this$ = cljs.core.first(arglist__8336);
arglist__8336 = cljs.core.next(arglist__8336);
var f = cljs.core.first(arglist__8336);
var args = cljs.core.rest(arglist__8336);
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
conj_vec.cljs$lang$applyTo = (function (arglist__8337){
var vec = cljs.core.first(arglist__8337);
var args = cljs.core.rest(arglist__8337);
return conj_vec__delegate(vec,args);
});
conj_vec.cljs$core$IFn$_invoke$arity$variadic = conj_vec__delegate;
return conj_vec;
})()
;
lt.plugins.reptile.process_line_styles = (function process_line_styles(vec){var start = 0;var G__8284 = cljs.core.rest.call(null,vec);var vec__8285 = G__8284;var end = cljs.core.nth.call(null,vec__8285,0,null);var token = cljs.core.nth.call(null,vec__8285,1,null);var vec__$1 = cljs.core.nthnext.call(null,vec__8285,2);var tokens = cljs.core.PersistentArrayMap.EMPTY;var start__$1 = start;var G__8284__$1 = G__8284;var tokens__$1 = tokens;while(true){
var start__$2 = start__$1;var vec__8286 = G__8284__$1;var end__$1 = cljs.core.nth.call(null,vec__8286,0,null);var token__$1 = cljs.core.nth.call(null,vec__8286,1,null);var vec__$2 = cljs.core.nthnext.call(null,vec__8286,2);var tokens__$2 = tokens__$1;if(cljs.core.truth_(end__$1))
{{
var G__8338 = end__$1;
var G__8339 = vec__$2;
var G__8340 = cljs.core.update_in.call(null,tokens__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,token__$1)], null),lt.plugins.reptile.conj_vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$2,end__$1], null));
start__$1 = G__8338;
G__8284__$1 = G__8339;
tokens__$1 = G__8340;
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
var listen_drag_BANG___delegate = function (drag,p__8288){var vec__8290 = p__8288;var up = cljs.core.nth.call(null,vec__8290,0,null);window.onmousemove = ((function (vec__8290,up){
return (function (p1__8287_SHARP_){return drag.call(null,p1__8287_SHARP_.clientX,p1__8287_SHARP_.clientY);
});})(vec__8290,up))
;
return window.onmouseup = ((function (vec__8290,up){
return (function (e){window.onmousemove = null;
window.onmouseup = null;
if(cljs.core.truth_(up))
{return up.call(null,e.clientX,e.clientY);
} else
{return null;
}
});})(vec__8290,up))
;
};
var listen_drag_BANG_ = function (drag,var_args){
var p__8288 = null;if (arguments.length > 1) {
  p__8288 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_drag_BANG___delegate.call(this,drag,p__8288);};
listen_drag_BANG_.cljs$lang$maxFixedArity = 1;
listen_drag_BANG_.cljs$lang$applyTo = (function (arglist__8341){
var drag = cljs.core.first(arglist__8341);
var p__8288 = cljs.core.rest(arglist__8341);
return listen_drag_BANG___delegate(drag,p__8288);
});
listen_drag_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_drag_BANG___delegate;
return listen_drag_BANG_;
})()
;
lt.plugins.reptile.slider = (function slider(n){var e__7769__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-number.reptile.slider","span.cm-number.reptile.slider",698673436),n], null));var seq__8297_8342 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8298_8343 = null;var count__8299_8344 = 0;var i__8300_8345 = 0;while(true){
if((i__8300_8345 < count__8299_8344))
{var vec__8301_8346 = cljs.core._nth.call(null,chunk__8298_8343,i__8300_8345);var ev__7770__auto___8347 = cljs.core.nth.call(null,vec__8301_8346,0,null);var func__7771__auto___8348 = cljs.core.nth.call(null,vec__8301_8346,1,null);lt.util.dom.on.call(null,e__7769__auto__,ev__7770__auto___8347,func__7771__auto___8348);
{
var G__8349 = seq__8297_8342;
var G__8350 = chunk__8298_8343;
var G__8351 = count__8299_8344;
var G__8352 = (i__8300_8345 + 1);
seq__8297_8342 = G__8349;
chunk__8298_8343 = G__8350;
count__8299_8344 = G__8351;
i__8300_8345 = G__8352;
continue;
}
} else
{var temp__4092__auto___8353 = cljs.core.seq.call(null,seq__8297_8342);if(temp__4092__auto___8353)
{var seq__8297_8354__$1 = temp__4092__auto___8353;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8297_8354__$1))
{var c__7126__auto___8355 = cljs.core.chunk_first.call(null,seq__8297_8354__$1);{
var G__8356 = cljs.core.chunk_rest.call(null,seq__8297_8354__$1);
var G__8357 = c__7126__auto___8355;
var G__8358 = cljs.core.count.call(null,c__7126__auto___8355);
var G__8359 = 0;
seq__8297_8342 = G__8356;
chunk__8298_8343 = G__8357;
count__8299_8344 = G__8358;
i__8300_8345 = G__8359;
continue;
}
} else
{var vec__8302_8360 = cljs.core.first.call(null,seq__8297_8354__$1);var ev__7770__auto___8361 = cljs.core.nth.call(null,vec__8302_8360,0,null);var func__7771__auto___8362 = cljs.core.nth.call(null,vec__8302_8360,1,null);lt.util.dom.on.call(null,e__7769__auto__,ev__7770__auto___8361,func__7771__auto___8362);
{
var G__8363 = cljs.core.next.call(null,seq__8297_8354__$1);
var G__8364 = null;
var G__8365 = 0;
var G__8366 = 0;
seq__8297_8342 = G__8363;
chunk__8298_8343 = G__8364;
count__8299_8344 = G__8365;
i__8300_8345 = G__8366;
continue;
}
}
} else
{}
}
break;
}
return e__7769__auto__;
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
lt.plugins.reptile.__BEH__clear = (function __BEH__clear(this$){var seq__8307_8367 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8308_8368 = null;var count__8309_8369 = 0;var i__8310_8370 = 0;while(true){
if((i__8310_8370 < count__8309_8369))
{var scale_8371 = cljs.core._nth.call(null,chunk__8308_8368,i__8310_8370);cljs.core.deref.call(null,new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(scale_8371)).clear();
{
var G__8372 = seq__8307_8367;
var G__8373 = chunk__8308_8368;
var G__8374 = count__8309_8369;
var G__8375 = (i__8310_8370 + 1);
seq__8307_8367 = G__8372;
chunk__8308_8368 = G__8373;
count__8309_8369 = G__8374;
i__8310_8370 = G__8375;
continue;
}
} else
{var temp__4092__auto___8376 = cljs.core.seq.call(null,seq__8307_8367);if(temp__4092__auto___8376)
{var seq__8307_8377__$1 = temp__4092__auto___8376;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8307_8377__$1))
{var c__7126__auto___8378 = cljs.core.chunk_first.call(null,seq__8307_8377__$1);{
var G__8379 = cljs.core.chunk_rest.call(null,seq__8307_8377__$1);
var G__8380 = c__7126__auto___8378;
var G__8381 = cljs.core.count.call(null,c__7126__auto___8378);
var G__8382 = 0;
seq__8307_8367 = G__8379;
chunk__8308_8368 = G__8380;
count__8309_8369 = G__8381;
i__8310_8370 = G__8382;
continue;
}
} else
{var scale_8383 = cljs.core.first.call(null,seq__8307_8377__$1);cljs.core.deref.call(null,new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(scale_8383)).clear();
{
var G__8384 = cljs.core.next.call(null,seq__8307_8377__$1);
var G__8385 = null;
var G__8386 = 0;
var G__8387 = 0;
seq__8307_8367 = G__8384;
chunk__8308_8368 = G__8385;
count__8309_8369 = G__8386;
i__8310_8370 = G__8387;
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
lt.plugins.reptile.reptile = (function reptile(ed,p__8311){var vec__8319 = p__8311;var start = cljs.core.nth.call(null,vec__8319,0,null);var end = cljs.core.nth.call(null,vec__8319,1,null);var this$ = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.reptile","reptile","lt.plugins.reptile/reptile",1716384791));lt.plugins.reptile.each_line.call(null,ed,start,end,((function (this$,vec__8319,start,end){
return (function (handle){var seq__8320 = cljs.core.seq.call(null,lt.plugins.reptile.numbers.call(null,handle));var chunk__8322 = null;var count__8323 = 0;var i__8324 = 0;while(true){
if((i__8324 < count__8323))
{var span = cljs.core._nth.call(null,chunk__8322,i__8324);var line_8388 = lt.plugins.reptile.here_SINGLEQUOTE_s_my_number.call(null,handle);var idx_8389 = cljs.core.count.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(lt.plugins.reptile.valid_number_QMARK_.call(null,lt.plugins.reptile.content.call(null,ed,line_8388,span))))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scales","scales",4400681947)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mark","mark",1017248319),lt.plugins.reptile.mark_slider.call(null,ed,line_8388,span,((function (seq__8320,chunk__8322,count__8323,i__8324,line_8388,idx_8389,span,this$,vec__8319,start,end){
return (function (start__$1,x){var val = lt.plugins.reptile.transform.call(null,start__$1,x);if(cljs.core.not_EQ_.call(null,val,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),idx_8389))))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scales","scales",4400681947),idx_8389,new cljs.core.Keyword(null,"value","value",1125876963)], null),cljs.core.constantly.call(null,val));
var temp__4092__auto___8390 = new cljs.core.Keyword(null,"obj","obj",1014014057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8390))
{var obj_8391 = temp__4092__auto___8390;lt.object.raise.call(null,obj_8391,new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{}
} else
{}
return val;
});})(seq__8320,chunk__8322,count__8323,i__8324,line_8388,idx_8389,span,this$,vec__8319,start,end))
),new cljs.core.Keyword(null,"value","value",1125876963),lt.plugins.reptile.transform.call(null,lt.plugins.reptile.content.call(null,ed,line_8388,span),0),new cljs.core.Keyword(null,"loc","loc",1014011570),cljs.core.apply.call(null,cljs.core.vector,line_8388,span)], null));
} else
{}
{
var G__8392 = seq__8320;
var G__8393 = chunk__8322;
var G__8394 = count__8323;
var G__8395 = (i__8324 + 1);
seq__8320 = G__8392;
chunk__8322 = G__8393;
count__8323 = G__8394;
i__8324 = G__8395;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8320);if(temp__4092__auto__)
{var seq__8320__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8320__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8320__$1);{
var G__8396 = cljs.core.chunk_rest.call(null,seq__8320__$1);
var G__8397 = c__7126__auto__;
var G__8398 = cljs.core.count.call(null,c__7126__auto__);
var G__8399 = 0;
seq__8320 = G__8396;
chunk__8322 = G__8397;
count__8323 = G__8398;
i__8324 = G__8399;
continue;
}
} else
{var span = cljs.core.first.call(null,seq__8320__$1);var line_8400 = lt.plugins.reptile.here_SINGLEQUOTE_s_my_number.call(null,handle);var idx_8401 = cljs.core.count.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(lt.plugins.reptile.valid_number_QMARK_.call(null,lt.plugins.reptile.content.call(null,ed,line_8400,span))))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scales","scales",4400681947)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mark","mark",1017248319),lt.plugins.reptile.mark_slider.call(null,ed,line_8400,span,((function (seq__8320,chunk__8322,count__8323,i__8324,line_8400,idx_8401,span,seq__8320__$1,temp__4092__auto__,this$,vec__8319,start,end){
return (function (start__$1,x){var val = lt.plugins.reptile.transform.call(null,start__$1,x);if(cljs.core.not_EQ_.call(null,val,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),idx_8401))))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scales","scales",4400681947),idx_8401,new cljs.core.Keyword(null,"value","value",1125876963)], null),cljs.core.constantly.call(null,val));
var temp__4092__auto___8402__$1 = new cljs.core.Keyword(null,"obj","obj",1014014057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8402__$1))
{var obj_8403 = temp__4092__auto___8402__$1;lt.object.raise.call(null,obj_8403,new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{}
} else
{}
return val;
});})(seq__8320,chunk__8322,count__8323,i__8324,line_8400,idx_8401,span,seq__8320__$1,temp__4092__auto__,this$,vec__8319,start,end))
),new cljs.core.Keyword(null,"value","value",1125876963),lt.plugins.reptile.transform.call(null,lt.plugins.reptile.content.call(null,ed,line_8400,span),0),new cljs.core.Keyword(null,"loc","loc",1014011570),cljs.core.apply.call(null,cljs.core.vector,line_8400,span)], null));
} else
{}
{
var G__8404 = cljs.core.next.call(null,seq__8320__$1);
var G__8405 = null;
var G__8406 = 0;
var G__8407 = 0;
seq__8320 = G__8404;
chunk__8322 = G__8405;
count__8323 = G__8406;
i__8324 = G__8407;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(this$,vec__8319,start,end))
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
lt.objs.langs.julia.eval.clear_results = (function clear_results(ed,p__8733){var vec__8747 = p__8733;var start = cljs.core.nth.call(null,vec__8747,0,null);var end = cljs.core.nth.call(null,vec__8747,1,null);var seq__8748 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,lt.objs.editor.line_handle,ed),cljs.core.range.call(null,(start - 1),end)));var chunk__8753 = null;var count__8754 = 0;var i__8755 = 0;while(true){
if((i__8755 < count__8754))
{var lh = cljs.core._nth.call(null,chunk__8753,i__8755);var seq__8756_8780 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",4124874251),new cljs.core.Keyword(null,"underline","underline",4281907774)], null));var chunk__8757_8781 = null;var count__8758_8782 = 0;var i__8759_8783 = 0;while(true){
if((i__8759_8783 < count__8758_8782))
{var type_8784 = cljs.core._nth.call(null,chunk__8757_8781,i__8759_8783);var temp__4092__auto___8785 = cljs.core.get.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lh,type_8784], null));if(cljs.core.truth_(temp__4092__auto___8785))
{var widget_8786 = temp__4092__auto___8785;lt.object.raise.call(null,widget_8786,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{}
{
var G__8787 = seq__8756_8780;
var G__8788 = chunk__8757_8781;
var G__8789 = count__8758_8782;
var G__8790 = (i__8759_8783 + 1);
seq__8756_8780 = G__8787;
chunk__8757_8781 = G__8788;
count__8758_8782 = G__8789;
i__8759_8783 = G__8790;
continue;
}
} else
{var temp__4092__auto___8791 = cljs.core.seq.call(null,seq__8756_8780);if(temp__4092__auto___8791)
{var seq__8756_8792__$1 = temp__4092__auto___8791;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8756_8792__$1))
{var c__7126__auto___8793 = cljs.core.chunk_first.call(null,seq__8756_8792__$1);{
var G__8794 = cljs.core.chunk_rest.call(null,seq__8756_8792__$1);
var G__8795 = c__7126__auto___8793;
var G__8796 = cljs.core.count.call(null,c__7126__auto___8793);
var G__8797 = 0;
seq__8756_8780 = G__8794;
chunk__8757_8781 = G__8795;
count__8758_8782 = G__8796;
i__8759_8783 = G__8797;
continue;
}
} else
{var type_8798 = cljs.core.first.call(null,seq__8756_8792__$1);var temp__4092__auto___8799__$1 = cljs.core.get.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lh,type_8798], null));if(cljs.core.truth_(temp__4092__auto___8799__$1))
{var widget_8800 = temp__4092__auto___8799__$1;lt.object.raise.call(null,widget_8800,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{}
{
var G__8801 = cljs.core.next.call(null,seq__8756_8792__$1);
var G__8802 = null;
var G__8803 = 0;
var G__8804 = 0;
seq__8756_8780 = G__8801;
chunk__8757_8781 = G__8802;
count__8758_8782 = G__8803;
i__8759_8783 = G__8804;
continue;
}
}
} else
{}
}
break;
}
{
var G__8805 = seq__8748;
var G__8806 = chunk__8753;
var G__8807 = count__8754;
var G__8808 = (i__8755 + 1);
seq__8748 = G__8805;
chunk__8753 = G__8806;
count__8754 = G__8807;
i__8755 = G__8808;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8748);if(temp__4092__auto__)
{var seq__8748__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8748__$1))
{var c__7126__auto__ = cljs.core.chunk_first.call(null,seq__8748__$1);{
var G__8809 = cljs.core.chunk_rest.call(null,seq__8748__$1);
var G__8810 = c__7126__auto__;
var G__8811 = cljs.core.count.call(null,c__7126__auto__);
var G__8812 = 0;
seq__8748 = G__8809;
chunk__8753 = G__8810;
count__8754 = G__8811;
i__8755 = G__8812;
continue;
}
} else
{var lh = cljs.core.first.call(null,seq__8748__$1);var seq__8749_8813 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",4124874251),new cljs.core.Keyword(null,"underline","underline",4281907774)], null));var chunk__8750_8814 = null;var count__8751_8815 = 0;var i__8752_8816 = 0;while(true){
if((i__8752_8816 < count__8751_8815))
{var type_8817 = cljs.core._nth.call(null,chunk__8750_8814,i__8752_8816);var temp__4092__auto___8818__$1 = cljs.core.get.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lh,type_8817], null));if(cljs.core.truth_(temp__4092__auto___8818__$1))
{var widget_8819 = temp__4092__auto___8818__$1;lt.object.raise.call(null,widget_8819,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{}
{
var G__8820 = seq__8749_8813;
var G__8821 = chunk__8750_8814;
var G__8822 = count__8751_8815;
var G__8823 = (i__8752_8816 + 1);
seq__8749_8813 = G__8820;
chunk__8750_8814 = G__8821;
count__8751_8815 = G__8822;
i__8752_8816 = G__8823;
continue;
}
} else
{var temp__4092__auto___8824__$1 = cljs.core.seq.call(null,seq__8749_8813);if(temp__4092__auto___8824__$1)
{var seq__8749_8825__$1 = temp__4092__auto___8824__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8749_8825__$1))
{var c__7126__auto___8826 = cljs.core.chunk_first.call(null,seq__8749_8825__$1);{
var G__8827 = cljs.core.chunk_rest.call(null,seq__8749_8825__$1);
var G__8828 = c__7126__auto___8826;
var G__8829 = cljs.core.count.call(null,c__7126__auto___8826);
var G__8830 = 0;
seq__8749_8813 = G__8827;
chunk__8750_8814 = G__8828;
count__8751_8815 = G__8829;
i__8752_8816 = G__8830;
continue;
}
} else
{var type_8831 = cljs.core.first.call(null,seq__8749_8825__$1);var temp__4092__auto___8832__$2 = cljs.core.get.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lh,type_8831], null));if(cljs.core.truth_(temp__4092__auto___8832__$2))
{var widget_8833 = temp__4092__auto___8832__$2;lt.object.raise.call(null,widget_8833,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{}
{
var G__8834 = cljs.core.next.call(null,seq__8749_8825__$1);
var G__8835 = null;
var G__8836 = 0;
var G__8837 = 0;
seq__8749_8813 = G__8834;
chunk__8750_8814 = G__8835;
count__8751_8815 = G__8836;
i__8752_8816 = G__8837;
continue;
}
}
} else
{}
}
break;
}
{
var G__8838 = cljs.core.next.call(null,seq__8748__$1);
var G__8839 = null;
var G__8840 = 0;
var G__8841 = 0;
seq__8748 = G__8838;
chunk__8753 = G__8839;
count__8754 = G__8840;
i__8755 = G__8841;
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
var __BEH__eval__DOT__one__delegate = function (editor,p__8760){var vec__8762 = p__8760;var move = cljs.core.nth.call(null,vec__8762,0,null);var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null));lt.objs.notifos.working.call(null);
return (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?lt.objs.langs.julia.eval.eval_selection:lt.objs.langs.julia.eval.eval_block).call(null,editor,client,move);
};
var __BEH__eval__DOT__one = function (editor,var_args){
var p__8760 = null;if (arguments.length > 1) {
  p__8760 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__eval__DOT__one__delegate.call(this,editor,p__8760);};
__BEH__eval__DOT__one.cljs$lang$maxFixedArity = 1;
__BEH__eval__DOT__one.cljs$lang$applyTo = (function (arglist__8842){
var editor = cljs.core.first(arglist__8842);
var p__8760 = cljs.core.rest(arglist__8842);
return __BEH__eval__DOT__one__delegate(editor,p__8760);
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
lt.objs.langs.julia.eval.__BEH__result = (function __BEH__result(editor,p__8763){var map__8766 = p__8763;var map__8766__$1 = ((cljs.core.seq_QMARK_.call(null,map__8766))?cljs.core.apply.call(null,cljs.core.hash_map,map__8766):map__8766);var info = cljs.core.get.call(null,map__8766__$1,new cljs.core.Keyword(null,"info","info",1017141280));var under = cljs.core.get.call(null,map__8766__$1,new cljs.core.Keyword(null,"under","under",1125332554));var html = cljs.core.get.call(null,map__8766__$1,new cljs.core.Keyword(null,"html","html",1017117469));var value = cljs.core.get.call(null,map__8766__$1,new cljs.core.Keyword(null,"value","value",1125876963));var vec__8767 = cljs.core.get.call(null,map__8766__$1,new cljs.core.Keyword(null,"bounds","bounds",3925666343));var start = cljs.core.nth.call(null,vec__8767,0,null);var end = cljs.core.nth.call(null,vec__8767,1,null);lt.objs.notifos.done_working.call(null);
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
lt.objs.langs.julia.eval.get_error_line = (function get_error_line(link){var vec__8769 = cljs.core.re_find.call(null,lt.objs.file_links.url_pattern,lt.objs.file_links.data_file.call(null,link));var _ = cljs.core.nth.call(null,vec__8769,0,null);var file = cljs.core.nth.call(null,vec__8769,1,null);var line = cljs.core.nth.call(null,vec__8769,2,null);if(cljs.core.truth_((function (){var and__6366__auto__ = file;if(cljs.core.truth_(and__6366__auto__))
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
lt.objs.langs.julia.completions.__BEH__update_hints = (function __BEH__update_hints(editor,p__8710){var map__8712 = p__8710;var map__8712__$1 = ((cljs.core.seq_QMARK_.call(null,map__8712))?cljs.core.apply.call(null,cljs.core.hash_map,map__8712):map__8712);var res = map__8712__$1;var pattern = cljs.core.get.call(null,map__8712__$1,new cljs.core.Keyword(null,"pattern","pattern",4517781250));var notextual = cljs.core.get.call(null,map__8712__$1,new cljs.core.Keyword(null,"notextual","notextual",2817977764));var hints = cljs.core.get.call(null,map__8712__$1,new cljs.core.Keyword(null,"hints","hints",1113187902));lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token-pattern","token-pattern",4483347246),(cljs.core.truth_(pattern)?(new RegExp([cljs.core.str(pattern),cljs.core.str("$")].join(''))):null)], null));
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
mathjax_queue.cljs$lang$applyTo = (function (arglist__8458){
var args = cljs.core.seq(arglist__8458);
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
lt.plugins.touchdown.editor_for_file = (function editor_for_file(file){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8447_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8447_SHARP_))),file);
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
lt.objs.langs.julia.module.__GT_module_str = (function __GT_module_str(p__8853){var map__8861 = p__8853;var map__8861__$1 = ((cljs.core.seq_QMARK_.call(null,map__8861))?cljs.core.apply.call(null,cljs.core.hash_map,map__8861):map__8861);var module = cljs.core.get.call(null,map__8861__$1,new cljs.core.Keyword(null,"module","module",4240087518));var e__7769__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.module.clickable","span.module.clickable",3384694646),[cljs.core.str(module),cljs.core.str("\t")].join('')], null));var seq__8862_8884 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7769__auto__,map__8861,map__8861__$1,module){
return (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"julia.set-module","julia.set-module",3617383774));
});})(e__7769__auto__,map__8861,map__8861__$1,module))
], null)));var chunk__8863_8885 = null;var count__8864_8886 = 0;var i__8865_8887 = 0;while(true){
if((i__8865_8887 < count__8864_8886))
{var vec__8866_8888 = cljs.core._nth.call(null,chunk__8863_8885,i__8865_8887);var ev__7770__auto___8889 = cljs.core.nth.call(null,vec__8866_8888,0,null);var func__7771__auto___8890 = cljs.core.nth.call(null,vec__8866_8888,1,null);lt.util.dom.on.call(null,e__7769__auto__,ev__7770__auto___8889,func__7771__auto___8890);
{
var G__8891 = seq__8862_8884;
var G__8892 = chunk__8863_8885;
var G__8893 = count__8864_8886;
var G__8894 = (i__8865_8887 + 1);
seq__8862_8884 = G__8891;
chunk__8863_8885 = G__8892;
count__8864_8886 = G__8893;
i__8865_8887 = G__8894;
continue;
}
} else
{var temp__4092__auto___8895 = cljs.core.seq.call(null,seq__8862_8884);if(temp__4092__auto___8895)
{var seq__8862_8896__$1 = temp__4092__auto___8895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8862_8896__$1))
{var c__7126__auto___8897 = cljs.core.chunk_first.call(null,seq__8862_8896__$1);{
var G__8898 = cljs.core.chunk_rest.call(null,seq__8862_8896__$1);
var G__8899 = c__7126__auto___8897;
var G__8900 = cljs.core.count.call(null,c__7126__auto___8897);
var G__8901 = 0;
seq__8862_8884 = G__8898;
chunk__8863_8885 = G__8899;
count__8864_8886 = G__8900;
i__8865_8887 = G__8901;
continue;
}
} else
{var vec__8867_8902 = cljs.core.first.call(null,seq__8862_8896__$1);var ev__7770__auto___8903 = cljs.core.nth.call(null,vec__8867_8902,0,null);var func__7771__auto___8904 = cljs.core.nth.call(null,vec__8867_8902,1,null);lt.util.dom.on.call(null,e__7769__auto__,ev__7770__auto___8903,func__7771__auto___8904);
{
var G__8905 = cljs.core.next.call(null,seq__8862_8896__$1);
var G__8906 = null;
var G__8907 = 0;
var G__8908 = 0;
seq__8862_8884 = G__8905;
chunk__8863_8885 = G__8906;
count__8864_8886 = G__8907;
i__8865_8887 = G__8908;
continue;
}
}
} else
{}
}
break;
}
return e__7769__auto__;
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
var get_module__delegate = function (editor,p__8868){var vec__8870 = p__8868;var client = cljs.core.nth.call(null,vec__8870,0,null);var temp__4092__auto__ = (function (){var or__6378__auto__ = client;if(cljs.core.truth_(or__6378__auto__))
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
var p__8868 = null;if (arguments.length > 1) {
  p__8868 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get_module__delegate.call(this,editor,p__8868);};
get_module.cljs$lang$maxFixedArity = 1;
get_module.cljs$lang$applyTo = (function (arglist__8909){
var editor = cljs.core.first(arglist__8909);
var p__8868 = cljs.core.rest(arglist__8909);
return get_module__delegate(editor,p__8868);
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
lt.objs.langs.julia.module.__BEH__set_modules = (function __BEH__set_modules(julia,p__8871){var map__8873 = p__8871;var map__8873__$1 = ((cljs.core.seq_QMARK_.call(null,map__8873))?cljs.core.apply.call(null,cljs.core.hash_map,map__8873):map__8873);var modules = cljs.core.get.call(null,map__8873__$1,new cljs.core.Keyword(null,"modules","modules",2241338105));lt.object.merge_BANG_.call(null,julia,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.module","modules","lt.objs.langs.julia.module/modules",1256091916),cljs.core.sort.call(null,modules)], null));
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