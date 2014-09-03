if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.util')) {
goog.provide('lt.objs.langs.julia.util');
goog.require('cljs.core');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('crate.core');
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
var widget__delegate = function (editor,line,p__9033){var vec__9035 = p__9033;var type = cljs.core.nth.call(null,vec__9035,0,null);return cljs.core.get.call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.editor.line_handle.call(null,editor,line),(function (){var or__6371__auto__ = type;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return new cljs.core.Keyword(null,"inline","inline",4124874251);
}
})()], null));
};
var widget = function (editor,line,var_args){
var p__9033 = null;if (arguments.length > 2) {
  p__9033 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return widget__delegate.call(this,editor,line,p__9033);};
widget.cljs$lang$maxFixedArity = 2;
widget.cljs$lang$applyTo = (function (arglist__9055){
var editor = cljs.core.first(arglist__9055);
arglist__9055 = cljs.core.next(arglist__9055);
var line = cljs.core.first(arglist__9055);
var p__9033 = cljs.core.rest(arglist__9055);
return widget__delegate(editor,line,p__9033);
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
return (function (p1__9036_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"text/javascript",null], null), null),p1__9036_SHARP_.type);
});})(scripts))
,scripts));
});
lt.objs.langs.julia.util.eval_scripts = (function eval_scripts(scripts){var seq__9041 = cljs.core.seq.call(null,scripts);var chunk__9042 = null;var count__9043 = 0;var i__9044 = 0;while(true){
if((i__9044 < count__9043))
{var script = cljs.core._nth.call(null,chunk__9042,i__9044);window.eval(script);
{
var G__9056 = seq__9041;
var G__9057 = chunk__9042;
var G__9058 = count__9043;
var G__9059 = (i__9044 + 1);
seq__9041 = G__9056;
chunk__9042 = G__9057;
count__9043 = G__9058;
i__9044 = G__9059;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9041);if(temp__4092__auto__)
{var seq__9041__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9041__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__9041__$1);{
var G__9060 = cljs.core.chunk_rest.call(null,seq__9041__$1);
var G__9061 = c__7119__auto__;
var G__9062 = cljs.core.count.call(null,c__7119__auto__);
var G__9063 = 0;
seq__9041 = G__9060;
chunk__9042 = G__9061;
count__9043 = G__9062;
i__9044 = G__9063;
continue;
}
} else
{var script = cljs.core.first.call(null,seq__9041__$1);window.eval(script);
{
var G__9064 = cljs.core.next.call(null,seq__9041__$1);
var G__9065 = null;
var G__9066 = 0;
var G__9067 = 0;
seq__9041 = G__9064;
chunk__9042 = G__9065;
count__9043 = G__9066;
i__9044 = G__9067;
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
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia')) {
goog.provide('lt.objs.langs.julia');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.popup');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.objs.langs.julia.__BEH__commands = (function __BEH__commands(editor,res){var pred__8238 = cljs.core._EQ_;var expr__8239 = res.call(null,new cljs.core.Keyword(null,"cmd","cmd",1014002860));if(cljs.core.truth_(pred__8238.call(null,"popup",expr__8239)))
{return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),res.call(null,new cljs.core.Keyword(null,"header","header",4087600639)),new cljs.core.Keyword(null,"body","body",1016933652),res.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"buttons","buttons",1255256819),res.call(null,new cljs.core.Keyword(null,"buttons","buttons",1255256819))], null));
} else
{if(cljs.core.truth_(pred__8238.call(null,"print",expr__8239)))
{return lt.objs.console.log.call(null,res.call(null,new cljs.core.Keyword(null,"value","value",1125876963)),(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))?"error":null));
} else
{if(cljs.core.truth_(pred__8238.call(null,"done",expr__8239)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659))))
{return lt.objs.notifos.done_working.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)));
} else
{return lt.objs.notifos.done_working.call(null);
}
} else
{if(cljs.core.truth_(pred__8238.call(null,"notify",expr__8239)))
{return lt.objs.notifos.set_msg_BANG_.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),res.call(null,new cljs.core.Keyword(null,"class","class",1108647146))], null));
} else
{if(cljs.core.truth_(pred__8238.call(null,"console",expr__8239)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469))))
{var val = crate.raw.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));var scripts = lt.objs.langs.julia.util.get_scripts.call(null,val);lt.objs.console.verbatim.call(null,val);
return lt.objs.langs.julia.util.eval_scripts.call(null,scripts);
} else
{return lt.objs.console.log.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));
}
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8239)].join('')));
}
}
}
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","commands","lt.objs.langs.julia/commands",666378463),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__commands,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.julia.command","editor.eval.julia.command",3568027511),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","julia-lang","lt.objs.langs.julia/julia-lang",1798349361),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.lang","julia.lang",1405919445),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia","commands","lt.objs.langs.julia/commands",666378463)], null));
lt.objs.langs.julia.julia = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia","julia-lang","lt.objs.langs.julia/julia-lang",1798349361));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.interrupt-clients","editor.interrupt-clients",3910900175),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Interrupt the current client",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var seq__8241_8259 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.map.call(null,cljs.core.deref,cljs.core.vals.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))))));var chunk__8242_8260 = null;var count__8243_8261 = 0;var i__8244_8262 = 0;while(true){
if((i__8244_8262 < count__8243_8261))
{var proc_8263 = cljs.core._nth.call(null,chunk__8242_8260,i__8244_8262);proc_8263.kill("SIGINT");
{
var G__8264 = seq__8241_8259;
var G__8265 = chunk__8242_8260;
var G__8266 = count__8243_8261;
var G__8267 = (i__8244_8262 + 1);
seq__8241_8259 = G__8264;
chunk__8242_8260 = G__8265;
count__8243_8261 = G__8266;
i__8244_8262 = G__8267;
continue;
}
} else
{var temp__4092__auto___8268__$1 = cljs.core.seq.call(null,seq__8241_8259);if(temp__4092__auto___8268__$1)
{var seq__8241_8269__$1 = temp__4092__auto___8268__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8241_8269__$1))
{var c__7119__auto___8270 = cljs.core.chunk_first.call(null,seq__8241_8269__$1);{
var G__8271 = cljs.core.chunk_rest.call(null,seq__8241_8269__$1);
var G__8272 = c__7119__auto___8270;
var G__8273 = cljs.core.count.call(null,c__7119__auto___8270);
var G__8274 = 0;
seq__8241_8259 = G__8271;
chunk__8242_8260 = G__8272;
count__8243_8261 = G__8273;
i__8244_8262 = G__8274;
continue;
}
} else
{var proc_8275 = cljs.core.first.call(null,seq__8241_8269__$1);proc_8275.kill("SIGINT");
{
var G__8276 = cljs.core.next.call(null,seq__8241_8269__$1);
var G__8277 = null;
var G__8278 = 0;
var G__8279 = 0;
seq__8241_8259 = G__8276;
chunk__8242_8260 = G__8277;
count__8243_8261 = G__8278;
i__8244_8262 = G__8279;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.kill-clients","editor.kill-clients",916643052),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Kill the current client",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var seq__8245_8280 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.map.call(null,cljs.core.deref,cljs.core.vals.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))))));var chunk__8246_8281 = null;var count__8247_8282 = 0;var i__8248_8283 = 0;while(true){
if((i__8248_8283 < count__8247_8282))
{var proc_8284 = cljs.core._nth.call(null,chunk__8246_8281,i__8248_8283);proc_8284.kill();
{
var G__8285 = seq__8245_8280;
var G__8286 = chunk__8246_8281;
var G__8287 = count__8247_8282;
var G__8288 = (i__8248_8283 + 1);
seq__8245_8280 = G__8285;
chunk__8246_8281 = G__8286;
count__8247_8282 = G__8287;
i__8248_8283 = G__8288;
continue;
}
} else
{var temp__4092__auto___8289__$1 = cljs.core.seq.call(null,seq__8245_8280);if(temp__4092__auto___8289__$1)
{var seq__8245_8290__$1 = temp__4092__auto___8289__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8245_8290__$1))
{var c__7119__auto___8291 = cljs.core.chunk_first.call(null,seq__8245_8290__$1);{
var G__8292 = cljs.core.chunk_rest.call(null,seq__8245_8290__$1);
var G__8293 = c__7119__auto___8291;
var G__8294 = cljs.core.count.call(null,c__7119__auto___8291);
var G__8295 = 0;
seq__8245_8280 = G__8292;
chunk__8246_8281 = G__8293;
count__8247_8282 = G__8294;
i__8248_8283 = G__8295;
continue;
}
} else
{var proc_8296 = cljs.core.first.call(null,seq__8245_8290__$1);proc_8296.kill();
{
var G__8297 = cljs.core.next.call(null,seq__8245_8290__$1);
var G__8298 = null;
var G__8299 = 0;
var G__8300 = 0;
seq__8245_8280 = G__8297;
chunk__8246_8281 = G__8298;
count__8247_8282 = G__8299;
i__8248_8283 = G__8300;
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
lt.objs.langs.julia.__BEH__julia_path = (function __BEH__julia_path(this$,exe){return lt.object.merge_BANG_.call(null,lt.objs.langs.julia.julia,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),exe], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","julia-path","lt.objs.langs.julia/julia-path",1798520688),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__julia_path,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Set the path to the Julia executable",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"path",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"path","path",1017337751)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.objs.langs.julia.__BEH__dark_theme = (function __BEH__dark_theme(app){return lt.util.dom.add_class.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"julia-dark","julia-dark",1404757724));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","dark-theme","lt.objs.langs.julia/dark-theme",2540019457),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__dark_theme,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Use a dark theme",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.objs.langs.julia.__BEH__light_theme = (function __BEH__light_theme(app){return lt.util.dom.remove_class.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"julia-dark","julia-dark",1404757724));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","light-theme","lt.objs.langs.julia/light-theme",2033198497),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__light_theme,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Use a light theme",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.proc')) {
goog.provide('lt.objs.langs.julia.proc');
goog.require('cljs.core');
goog.require('lt.objs.langs.julia');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
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
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.langs.julia');
lt.objs.langs.julia.proc.__BEH__proc_out = (function __BEH__proc_out(this$,data){if(cljs.core.truth_(cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"connected","connected",4729661051))))
{return null;
} else
{var out = data.toString();lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,out);
if(cljs.core._EQ_.call(null,out,"connected"))
{if(cljs.core.truth_(cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"notify","notify",4269181627))))
{lt.objs.notifos.done_working.call(null,"Connected to Julia");
} else
{}
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"connected","connected",4729661051),true,new cljs.core.Keyword(null,"just-connected","just-connected",2130151130),true], null));
} else
{return null;
}
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
lt.objs.langs.julia.proc.__BEH__proc_exit = (function __BEH__proc_exit(this$,data){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
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
lt.objs.langs.julia.proc.__BEH__pipe_out = (function __BEH__pipe_out(this$,data){if(cljs.core.truth_(new cljs.core.Keyword(null,"just-connected","just-connected",2130151130).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"just-connected","just-connected",2130151130),false], null));
} else
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633)], null),cljs.core.str,data);
}
var out = cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633));if(cljs.core._EQ_.call(null,cljs.core.last.call(null,out),"\n"))
{lt.objs.console.log.call(null,out);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633),""], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-out","lt.objs.langs.julia.proc/pipe-out",2913224961),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__pipe_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.objs.langs.julia.proc.__BEH__pipe_err = (function __BEH__pipe_err(this$,data){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106)], null),cljs.core.str,data);
var out = cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106));if(cljs.core._EQ_.call(null,cljs.core.last.call(null,out),"\n"))
{lt.objs.console.log.call(null,out,"error");
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106),""], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-err","lt.objs.langs.julia.proc/pipe-err",2913231640),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__pipe_err,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.objs.langs.julia.proc.__BEH__flush = (function __BEH__flush(this$){var temp__4092__auto___8813 = cljs.core.not_empty.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633)));if(cljs.core.truth_(temp__4092__auto___8813))
{var out_8814 = temp__4092__auto___8813;lt.objs.console.log.call(null,out_8814);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633),""], null));
} else
{}
var temp__4092__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106)));if(cljs.core.truth_(temp__4092__auto__))
{var out = temp__4092__auto__;lt.objs.console.log.call(null,out,"error");
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106),""], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","flush","lt.objs.langs.julia.proc/flush",4458423382),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__flush,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null,new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),500);
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connecting-notifier","lt.objs.langs.julia.proc/connecting-notifier",4154824301),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-out","lt.objs.langs.julia.proc/proc-out",3354081193),new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-error","lt.objs.langs.julia.proc/proc-error",3670223651),new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-exit","lt.objs.langs.julia.proc/proc-exit",3482355335),new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-out","lt.objs.langs.julia.proc/pipe-out",2913224961),new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-err","lt.objs.langs.julia.proc/pipe-err",2913231640),new cljs.core.Keyword("lt.objs.langs.julia.proc","flush","lt.objs.langs.julia.proc/flush",4458423382)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return null;
}));
lt.objs.langs.julia.proc.with_dir = (function with_dir(dir,f){var dir_SINGLEQUOTE_ = process.cwd();process.chdir(dir);
f.call(null);
return process.chdir(dir_SINGLEQUOTE_);
});
lt.objs.langs.julia.proc.init = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"jl","init.jl");
lt.objs.langs.julia.proc.julia_path = (function julia_path(){var or__6371__auto__ = cljs.core.deref.call(null,lt.objs.langs.julia.julia).call(null,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return "julia";
}
});
/**
* @param {...*} var_args
*/
lt.objs.langs.julia.proc.connect = (function() { 
var connect__delegate = function (p__8790){var map__8792 = p__8790;var map__8792__$1 = ((cljs.core.seq_QMARK_.call(null,map__8792))?cljs.core.apply.call(null,cljs.core.hash_map,map__8792):map__8792);var complain = cljs.core.get.call(null,map__8792__$1,new cljs.core.Keyword(null,"complain","complain",4709422171),true);var notify = cljs.core.get.call(null,map__8792__$1,new cljs.core.Keyword(null,"notify","notify",4269181627),false);if(cljs.core.truth_(notify))
{lt.objs.notifos.working.call(null,"Spinning up a Julia client...");
} else
{}
var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"julia.client","julia.client",3830708594));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connecting-notifier","lt.objs.langs.julia.proc/connecting-notifier",4154824301),client);lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"notify","notify",4269181627),notify,new cljs.core.Keyword(null,"complain","complain",4709422171),complain], null));
lt.objs.langs.julia.proc.with_dir.call(null,lt.objs.files.home.call(null),((function (client,obj,map__8792,map__8792__$1,complain,notify){
return (function (){return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),lt.objs.langs.julia.proc.julia_path.call(null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.langs.julia.proc.init,lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client)], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});})(client,obj,map__8792,map__8792__$1,complain,notify))
);
lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.first.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))], null));
lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"julia.set-global-client","julia.set-global-client",3983623463),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"only","only",1017320222),lt.objs.langs.julia.julia);
lt.objs.langs.julia.proc.set_default_client.call(null,client);
return client;
};
var connect = function (var_args){
var p__8790 = null;if (arguments.length > 0) {
  p__8790 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return connect__delegate.call(this,p__8790);};
connect.cljs$lang$maxFixedArity = 0;
connect.cljs$lang$applyTo = (function (arglist__8815){
var p__8790 = cljs.core.seq(arglist__8815);
return connect__delegate(p__8790);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
lt.objs.langs.julia.proc.connect_manual = (function connect_manual(){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"julia.client","julia.client",3830708594));lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Connect Julia to Light Table",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("@async Jewel.server("),cljs.core.str(lt.objs.clients.tcp.port),cljs.core.str(", "),cljs.core.str(lt.objs.clients.__GT_id.call(null,client)),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null));
lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"julia.set-default-client","julia.set-default-client",1406462921),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"only","only",1017320222),lt.objs.langs.julia.julia);
lt.objs.langs.julia.proc.set_default_client.call(null,client);
return client;
});
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Julia (manual)",new cljs.core.Keyword(null,"desc","desc",1016984067),"Manually connect to Julia.",new cljs.core.Keyword(null,"connect","connect",1965255772),lt.objs.langs.julia.proc.connect_manual], null));
lt.objs.langs.julia.proc.wait_until = (function wait_until(cond,callback){if(cljs.core.truth_(cond.call(null)))
{return callback.call(null);
} else
{return setTimeout((function (){return wait_until.call(null,cond,callback);
}),100);
}
});
lt.objs.langs.julia.proc.when_connect = (function when_connect(cb){return lt.objs.langs.julia.proc.wait_until.call(null,(function (){return cljs.core.not_EQ_.call(null,lt.objs.clients.tcp.port,0);
}),cb);
});
lt.objs.langs.julia.proc.__BEH__connect_on_startup = (function __BEH__connect_on_startup(){return lt.objs.langs.julia.proc.when_connect.call(null,(function (){return lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.eval","editor.julia.eval",4568286884),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"origin","origin",4300251800),lt.objs.langs.julia.julia,new cljs.core.Keyword(null,"create","create",3956577390),(function (){return lt.objs.langs.julia.proc.connect.call(null,new cljs.core.Keyword(null,"notify","notify",4269181627),true);
})], null));
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connect-on-startup","lt.objs.langs.julia.proc/connect-on-startup",4556282532),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__connect_on_startup,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Spin up a client when Light Table starts",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
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
var seq__8797 = cljs.core.seq.call(null,lt.objs.editor.pool.get_all.call(null));var chunk__8798 = null;var count__8799 = 0;var i__8800 = 0;while(true){
if((i__8800 < count__8799))
{var editor = cljs.core._nth.call(null,chunk__8798,i__8800);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),client);
{
var G__8816 = seq__8797;
var G__8817 = chunk__8798;
var G__8818 = count__8799;
var G__8819 = (i__8800 + 1);
seq__8797 = G__8816;
chunk__8798 = G__8817;
count__8799 = G__8818;
i__8800 = G__8819;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8797);if(temp__4092__auto__)
{var seq__8797__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8797__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8797__$1);{
var G__8820 = cljs.core.chunk_rest.call(null,seq__8797__$1);
var G__8821 = c__7119__auto__;
var G__8822 = cljs.core.count.call(null,c__7119__auto__);
var G__8823 = 0;
seq__8797 = G__8820;
chunk__8798 = G__8821;
count__8799 = G__8822;
i__8800 = G__8823;
continue;
}
} else
{var editor = cljs.core.first.call(null,seq__8797__$1);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),client);
{
var G__8824 = cljs.core.next.call(null,seq__8797__$1);
var G__8825 = null;
var G__8826 = 0;
var G__8827 = 0;
seq__8797 = G__8824;
chunk__8798 = G__8825;
count__8799 = G__8826;
i__8800 = G__8827;
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
lt.objs.langs.julia.proc.connect_client = (function connect_client(editor,client){if(cljs.core.truth_((function (){var G__8802 = cljs.core.deref.call(null,editor);var G__8802__$1 = (((G__8802 == null))?null:new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(G__8802));var G__8802__$2 = (((G__8802__$1 == null))?null:new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(G__8802__$1));var G__8802__$3 = (((G__8802__$2 == null))?null:cljs.core.deref.call(null,G__8802__$2));var G__8802__$4 = (((G__8802__$3 == null))?null:new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(G__8802__$3));return G__8802__$4;
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
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.display')) {
goog.provide('lt.objs.langs.julia.display');
goog.require('cljs.core');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.object');
goog.require('lt.object');
lt.objs.langs.julia.display.process_collapsible_BANG_ = (function process_collapsible_BANG_(res,dom){var header = lt.util.dom.$.call(null,new cljs.core.Keyword(null,".collapsible-header",".collapsible-header",3333398992),dom);var content = $(lt.util.dom.$.call(null,new cljs.core.Keyword(null,".collapsible-content",".collapsible-content",4354987578),dom));content.hide();
return header.onclick = ((function (header,content){
return (function (){content.toggle(200);
setTimeout(((function (header,content){
return (function (){return lt.objs.editor.refresh.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,res)));
});})(header,content))
,200);
return lt.object.update_BANG_.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia.display","open","lt.objs.langs.julia.display/open",1271832698)], null),cljs.core.not);
});})(header,content))
;
});
lt.objs.langs.julia.display.process_collapsibles_BANG_ = (function process_collapsibles_BANG_(res){var seq__8576_8603 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,new cljs.core.Keyword(null,".collapsible",".collapsible",1331862158),cljs.core.deref.call(null,res).call(null,new cljs.core.Keyword(null,"result","result",4374444943))));var chunk__8577_8604 = null;var count__8578_8605 = 0;var i__8579_8606 = 0;while(true){
if((i__8579_8606 < count__8578_8605))
{var collapsible_8607 = cljs.core._nth.call(null,chunk__8577_8604,i__8579_8606);lt.objs.langs.julia.display.process_collapsible_BANG_.call(null,res,collapsible_8607);
{
var G__8608 = seq__8576_8603;
var G__8609 = chunk__8577_8604;
var G__8610 = count__8578_8605;
var G__8611 = (i__8579_8606 + 1);
seq__8576_8603 = G__8608;
chunk__8577_8604 = G__8609;
count__8578_8605 = G__8610;
i__8579_8606 = G__8611;
continue;
}
} else
{var temp__4092__auto___8612 = cljs.core.seq.call(null,seq__8576_8603);if(temp__4092__auto___8612)
{var seq__8576_8613__$1 = temp__4092__auto___8612;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8576_8613__$1))
{var c__7119__auto___8614 = cljs.core.chunk_first.call(null,seq__8576_8613__$1);{
var G__8615 = cljs.core.chunk_rest.call(null,seq__8576_8613__$1);
var G__8616 = c__7119__auto___8614;
var G__8617 = cljs.core.count.call(null,c__7119__auto___8614);
var G__8618 = 0;
seq__8576_8603 = G__8615;
chunk__8577_8604 = G__8616;
count__8578_8605 = G__8617;
i__8579_8606 = G__8618;
continue;
}
} else
{var collapsible_8619 = cljs.core.first.call(null,seq__8576_8613__$1);lt.objs.langs.julia.display.process_collapsible_BANG_.call(null,res,collapsible_8619);
{
var G__8620 = cljs.core.next.call(null,seq__8576_8613__$1);
var G__8621 = null;
var G__8622 = 0;
var G__8623 = 0;
seq__8576_8603 = G__8620;
chunk__8577_8604 = G__8621;
count__8578_8605 = G__8622;
i__8579_8606 = G__8623;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.langs.julia.display.dom;
});
lt.objs.langs.julia.display.show_collapsibles_BANG_ = (function show_collapsibles_BANG_(dom){if(typeof dom === 'string')
{return null;
} else
{return $(lt.util.dom.$$.call(null,new cljs.core.Keyword(null,".collapsible-content",".collapsible-content",4354987578),dom)).show();
}
});
lt.objs.langs.julia.display.__BEH__inline_results = (function __BEH__inline_results(this$,res,loc,opts){var ed = new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var type = (function (){var or__6371__auto__ = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return new cljs.core.Keyword(null,"inline","inline",4124874251);
}
})();var line = lt.objs.editor.line_handle.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));var res_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.eval","inline-result","lt.objs.eval/inline-result",1807255869),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ed","ed",1013907473),this$,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,type),new cljs.core.Keyword(null,"opts","opts",1017322386),opts,new cljs.core.Keyword(null,"result","result",4374444943),res,new cljs.core.Keyword(null,"loc","loc",1014011570),loc,new cljs.core.Keyword(null,"line","line",1017226086),line], null));if(typeof res === 'string')
{} else
{lt.objs.langs.julia.display.process_collapsibles_BANG_.call(null,res_obj);
}
var temp__4092__auto___8624 = cljs.core.get.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,type], null));if(cljs.core.truth_(temp__4092__auto___8624))
{var prev_8625 = temp__4092__auto___8624;if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prev_8625))))
{lt.object.merge_BANG_.call(null,res_obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),true], null));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword("lt.objs.langs.julia.display","open","lt.objs.langs.julia.display/open",1271832698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prev_8625))))
{lt.object.merge_BANG_.call(null,res_obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.display","open","lt.objs.langs.julia.display/open",1271832698),true], null));
lt.objs.langs.julia.display.show_collapsibles_BANG_.call(null,res);
} else
{}
lt.object.raise.call(null,prev_8625,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"start-line","start-line",3689311729).cljs$core$IFn$_invoke$arity$1(loc)))
{var seq__8587_8626 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (ed,type,line,res_obj){
return (function (p1__8580_SHARP_){return cljs.core.get.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.editor.line_handle.call(null,ed,p1__8580_SHARP_),type], null));
});})(ed,type,line,res_obj))
,cljs.core.range.call(null,new cljs.core.Keyword(null,"start-line","start-line",3689311729).cljs$core$IFn$_invoke$arity$1(loc),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc))));var chunk__8589_8627 = null;var count__8590_8628 = 0;var i__8591_8629 = 0;while(true){
if((i__8591_8629 < count__8590_8628))
{var widget_8630 = cljs.core._nth.call(null,chunk__8589_8627,i__8591_8629);if(cljs.core.truth_(widget_8630))
{lt.object.raise.call(null,widget_8630,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
{
var G__8631 = seq__8587_8626;
var G__8632 = chunk__8589_8627;
var G__8633 = count__8590_8628;
var G__8634 = (i__8591_8629 + 1);
seq__8587_8626 = G__8631;
chunk__8589_8627 = G__8632;
count__8590_8628 = G__8633;
i__8591_8629 = G__8634;
continue;
}
} else
{{
var G__8635 = seq__8587_8626;
var G__8636 = chunk__8589_8627;
var G__8637 = count__8590_8628;
var G__8638 = (i__8591_8629 + 1);
seq__8587_8626 = G__8635;
chunk__8589_8627 = G__8636;
count__8590_8628 = G__8637;
i__8591_8629 = G__8638;
continue;
}
}
} else
{var temp__4092__auto___8639 = cljs.core.seq.call(null,seq__8587_8626);if(temp__4092__auto___8639)
{var seq__8587_8640__$1 = temp__4092__auto___8639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8587_8640__$1))
{var c__7119__auto___8641 = cljs.core.chunk_first.call(null,seq__8587_8640__$1);{
var G__8642 = cljs.core.chunk_rest.call(null,seq__8587_8640__$1);
var G__8643 = c__7119__auto___8641;
var G__8644 = cljs.core.count.call(null,c__7119__auto___8641);
var G__8645 = 0;
seq__8587_8626 = G__8642;
chunk__8589_8627 = G__8643;
count__8590_8628 = G__8644;
i__8591_8629 = G__8645;
continue;
}
} else
{var widget_8646 = cljs.core.first.call(null,seq__8587_8640__$1);if(cljs.core.truth_(widget_8646))
{lt.object.raise.call(null,widget_8646,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
{
var G__8647 = cljs.core.next.call(null,seq__8587_8640__$1);
var G__8648 = null;
var G__8649 = 0;
var G__8650 = 0;
seq__8587_8626 = G__8647;
chunk__8589_8627 = G__8648;
count__8590_8628 = G__8649;
i__8591_8629 = G__8650;
continue;
}
} else
{{
var G__8651 = cljs.core.next.call(null,seq__8587_8640__$1);
var G__8652 = null;
var G__8653 = 0;
var G__8654 = 0;
seq__8587_8626 = G__8651;
chunk__8589_8627 = G__8652;
count__8590_8628 = G__8653;
i__8591_8629 = G__8654;
continue;
}
}
}
} else
{}
}
break;
}
} else
{}
return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",2354242081)], null),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,type], null),res_obj);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.display","inline-results","lt.objs.langs.julia.display/inline-results",2670505730),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.display.__BEH__inline_results,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),null], null), null));
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
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8384 = cljs.core.seq.call(null,self__.watches);var chunk__8385 = null;var count__8386 = 0;var i__8387 = 0;while(true){
if((i__8387 < count__8386))
{var vec__8388 = cljs.core._nth.call(null,chunk__8385,i__8387);var key__$1 = cljs.core.nth.call(null,vec__8388,0,null);var f = cljs.core.nth.call(null,vec__8388,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8463 = seq__8384;
var G__8464 = chunk__8385;
var G__8465 = count__8386;
var G__8466 = (i__8387 + 1);
seq__8384 = G__8463;
chunk__8385 = G__8464;
count__8386 = G__8465;
i__8387 = G__8466;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8384);if(temp__4092__auto__)
{var seq__8384__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8384__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8384__$1);{
var G__8467 = cljs.core.chunk_rest.call(null,seq__8384__$1);
var G__8468 = c__7119__auto__;
var G__8469 = cljs.core.count.call(null,c__7119__auto__);
var G__8470 = 0;
seq__8384 = G__8467;
chunk__8385 = G__8468;
count__8386 = G__8469;
i__8387 = G__8470;
continue;
}
} else
{var vec__8389 = cljs.core.first.call(null,seq__8384__$1);var key__$1 = cljs.core.nth.call(null,vec__8389,0,null);var f = cljs.core.nth.call(null,vec__8389,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8471 = cljs.core.next.call(null,seq__8384__$1);
var G__8472 = null;
var G__8473 = 0;
var G__8474 = 0;
seq__8384 = G__8471;
chunk__8385 = G__8472;
count__8386 = G__8473;
i__8387 = G__8474;
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
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__8391 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__8391,0,null);var path__$2 = cljs.core.nth.call(null,vec__8391,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__8391,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__8391,atm__$1,path__$2,k,sa))
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
var G__8475__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8475 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__8475__delegate.call(this,sa,f,x,y,z,more);};
G__8475.cljs$lang$maxFixedArity = 5;
G__8475.cljs$lang$applyTo = (function (arglist__8476){
var sa = cljs.core.first(arglist__8476);
arglist__8476 = cljs.core.next(arglist__8476);
var f = cljs.core.first(arglist__8476);
arglist__8476 = cljs.core.next(arglist__8476);
var x = cljs.core.first(arglist__8476);
arglist__8476 = cljs.core.next(arglist__8476);
var y = cljs.core.first(arglist__8476);
arglist__8476 = cljs.core.next(arglist__8476);
var z = cljs.core.first(arglist__8476);
var more = cljs.core.rest(arglist__8476);
return G__8475__delegate(sa,f,x,y,z,more);
});
G__8475.cljs$core$IFn$_invoke$arity$variadic = G__8475__delegate;
return G__8475;
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
crate.binding.computable = (function (){var obj8393 = {};return obj8393;
})();
crate.binding._depend = (function _depend(this$,atm){if((function (){var and__6359__auto__ = this$;if(and__6359__auto__)
{return this$.crate$binding$computable$_depend$arity$2;
} else
{return and__6359__auto__;
}
})())
{return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else
{var x__6998__auto__ = (((this$ == null))?null:this$);return (function (){var or__6371__auto__ = (crate.binding._depend[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (crate.binding._depend["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-depend",this$);
}
}
})().call(null,this$,atm);
}
});
crate.binding._compute = (function _compute(this$){if((function (){var and__6359__auto__ = this$;if(and__6359__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__6359__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__6998__auto__ = (((this$ == null))?null:this$);return (function (){var or__6371__auto__ = (crate.binding._compute[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (crate.binding._compute["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
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
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"crate.binding/Computed");
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
var this$__$1 = this;var seq__8394 = cljs.core.seq.call(null,self__.watches);var chunk__8395 = null;var count__8396 = 0;var i__8397 = 0;while(true){
if((i__8397 < count__8396))
{var vec__8398 = cljs.core._nth.call(null,chunk__8395,i__8397);var key__$1 = cljs.core.nth.call(null,vec__8398,0,null);var f = cljs.core.nth.call(null,vec__8398,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8477 = seq__8394;
var G__8478 = chunk__8395;
var G__8479 = count__8396;
var G__8480 = (i__8397 + 1);
seq__8394 = G__8477;
chunk__8395 = G__8478;
count__8396 = G__8479;
i__8397 = G__8480;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8394);if(temp__4092__auto__)
{var seq__8394__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8394__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8394__$1);{
var G__8481 = cljs.core.chunk_rest.call(null,seq__8394__$1);
var G__8482 = c__7119__auto__;
var G__8483 = cljs.core.count.call(null,c__7119__auto__);
var G__8484 = 0;
seq__8394 = G__8481;
chunk__8395 = G__8482;
count__8396 = G__8483;
i__8397 = G__8484;
continue;
}
} else
{var vec__8399 = cljs.core.first.call(null,seq__8394__$1);var key__$1 = cljs.core.nth.call(null,vec__8399,0,null);var f = cljs.core.nth.call(null,vec__8399,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8485 = cljs.core.next.call(null,seq__8394__$1);
var G__8486 = null;
var G__8487 = 0;
var G__8488 = 0;
seq__8394 = G__8485;
chunk__8395 = G__8486;
count__8396 = G__8487;
i__8397 = G__8488;
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
var seq__8404_8489 = cljs.core.seq.call(null,atms);var chunk__8405_8490 = null;var count__8406_8491 = 0;var i__8407_8492 = 0;while(true){
if((i__8407_8492 < count__8406_8491))
{var atm_8493 = cljs.core._nth.call(null,chunk__8405_8490,i__8407_8492);crate.binding._depend.call(null,neue,atm_8493);
{
var G__8494 = seq__8404_8489;
var G__8495 = chunk__8405_8490;
var G__8496 = count__8406_8491;
var G__8497 = (i__8407_8492 + 1);
seq__8404_8489 = G__8494;
chunk__8405_8490 = G__8495;
count__8406_8491 = G__8496;
i__8407_8492 = G__8497;
continue;
}
} else
{var temp__4092__auto___8498 = cljs.core.seq.call(null,seq__8404_8489);if(temp__4092__auto___8498)
{var seq__8404_8499__$1 = temp__4092__auto___8498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8404_8499__$1))
{var c__7119__auto___8500 = cljs.core.chunk_first.call(null,seq__8404_8499__$1);{
var G__8501 = cljs.core.chunk_rest.call(null,seq__8404_8499__$1);
var G__8502 = c__7119__auto___8500;
var G__8503 = cljs.core.count.call(null,c__7119__auto___8500);
var G__8504 = 0;
seq__8404_8489 = G__8501;
chunk__8405_8490 = G__8502;
count__8406_8491 = G__8503;
i__8407_8492 = G__8504;
continue;
}
} else
{var atm_8505 = cljs.core.first.call(null,seq__8404_8499__$1);crate.binding._depend.call(null,neue,atm_8505);
{
var G__8506 = cljs.core.next.call(null,seq__8404_8499__$1);
var G__8507 = null;
var G__8508 = 0;
var G__8509 = 0;
seq__8404_8489 = G__8506;
chunk__8405_8490 = G__8507;
count__8406_8491 = G__8508;
i__8407_8492 = G__8509;
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
crate.binding.bindable_coll = (function (){var obj8409 = {};return obj8409;
})();
crate.binding.bindable = (function (){var obj8411 = {};return obj8411;
})();
crate.binding._value = (function _value(this$){if((function (){var and__6359__auto__ = this$;if(and__6359__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__6359__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__6998__auto__ = (((this$ == null))?null:this$);return (function (){var or__6371__auto__ = (crate.binding._value[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (crate.binding._value["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__6359__auto__ = this$;if(and__6359__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__6359__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__6998__auto__ = (((this$ == null))?null:this$);return (function (){var or__6371__auto__ = (crate.binding._on_change[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (crate.binding._on_change["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
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
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"crate.binding/atom-binding");
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
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8412 = cljs.core.seq.call(null,self__.watches);var chunk__8413 = null;var count__8414 = 0;var i__8415 = 0;while(true){
if((i__8415 < count__8414))
{var vec__8416 = cljs.core._nth.call(null,chunk__8413,i__8415);var key = cljs.core.nth.call(null,vec__8416,0,null);var f = cljs.core.nth.call(null,vec__8416,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8510 = seq__8412;
var G__8511 = chunk__8413;
var G__8512 = count__8414;
var G__8513 = (i__8415 + 1);
seq__8412 = G__8510;
chunk__8413 = G__8511;
count__8414 = G__8512;
i__8415 = G__8513;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8412);if(temp__4092__auto__)
{var seq__8412__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8412__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8412__$1);{
var G__8514 = cljs.core.chunk_rest.call(null,seq__8412__$1);
var G__8515 = c__7119__auto__;
var G__8516 = cljs.core.count.call(null,c__7119__auto__);
var G__8517 = 0;
seq__8412 = G__8514;
chunk__8413 = G__8515;
count__8414 = G__8516;
i__8415 = G__8517;
continue;
}
} else
{var vec__8417 = cljs.core.first.call(null,seq__8412__$1);var key = cljs.core.nth.call(null,vec__8417,0,null);var f = cljs.core.nth.call(null,vec__8417,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8518 = cljs.core.next.call(null,seq__8412__$1);
var G__8519 = null;
var G__8520 = 0;
var G__8521 = 0;
seq__8412 = G__8518;
chunk__8413 = G__8519;
count__8414 = G__8520;
i__8415 = G__8521;
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
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__8418){var vec__8419 = p__8418;var event = cljs.core.nth.call(null,vec__8419,0,null);var el = cljs.core.nth.call(null,vec__8419,1,null);var v = cljs.core.nth.call(null,vec__8419,2,null);return func.call(null,event,el,v);
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
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__6371__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
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
__GT_path.cljs$lang$applyTo = (function (arglist__8522){
var bc = cljs.core.first(arglist__8522);
var segs = cljs.core.rest(arglist__8522);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__8428_8523 = cljs.core.seq.call(null,added);var chunk__8429_8524 = null;var count__8430_8525 = 0;var i__8431_8526 = 0;while(true){
if((i__8431_8526 < count__8430_8525))
{var a_8527 = cljs.core._nth.call(null,chunk__8429_8524,i__8431_8526);crate.binding.bc_add.call(null,bc,a_8527,a_8527);
{
var G__8528 = seq__8428_8523;
var G__8529 = chunk__8429_8524;
var G__8530 = count__8430_8525;
var G__8531 = (i__8431_8526 + 1);
seq__8428_8523 = G__8528;
chunk__8429_8524 = G__8529;
count__8430_8525 = G__8530;
i__8431_8526 = G__8531;
continue;
}
} else
{var temp__4092__auto___8532 = cljs.core.seq.call(null,seq__8428_8523);if(temp__4092__auto___8532)
{var seq__8428_8533__$1 = temp__4092__auto___8532;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8428_8533__$1))
{var c__7119__auto___8534 = cljs.core.chunk_first.call(null,seq__8428_8533__$1);{
var G__8535 = cljs.core.chunk_rest.call(null,seq__8428_8533__$1);
var G__8536 = c__7119__auto___8534;
var G__8537 = cljs.core.count.call(null,c__7119__auto___8534);
var G__8538 = 0;
seq__8428_8523 = G__8535;
chunk__8429_8524 = G__8536;
count__8430_8525 = G__8537;
i__8431_8526 = G__8538;
continue;
}
} else
{var a_8539 = cljs.core.first.call(null,seq__8428_8533__$1);crate.binding.bc_add.call(null,bc,a_8539,a_8539);
{
var G__8540 = cljs.core.next.call(null,seq__8428_8533__$1);
var G__8541 = null;
var G__8542 = 0;
var G__8543 = 0;
seq__8428_8523 = G__8540;
chunk__8429_8524 = G__8541;
count__8430_8525 = G__8542;
i__8431_8526 = G__8543;
continue;
}
}
} else
{}
}
break;
}
var seq__8432 = cljs.core.seq.call(null,removed);var chunk__8433 = null;var count__8434 = 0;var i__8435 = 0;while(true){
if((i__8435 < count__8434))
{var r = cljs.core._nth.call(null,chunk__8433,i__8435);crate.binding.bc_remove.call(null,bc,r);
{
var G__8544 = seq__8432;
var G__8545 = chunk__8433;
var G__8546 = count__8434;
var G__8547 = (i__8435 + 1);
seq__8432 = G__8544;
chunk__8433 = G__8545;
count__8434 = G__8546;
i__8435 = G__8547;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8432);if(temp__4092__auto__)
{var seq__8432__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8432__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8432__$1);{
var G__8548 = cljs.core.chunk_rest.call(null,seq__8432__$1);
var G__8549 = c__7119__auto__;
var G__8550 = cljs.core.count.call(null,c__7119__auto__);
var G__8551 = 0;
seq__8432 = G__8548;
chunk__8433 = G__8549;
count__8434 = G__8550;
i__8435 = G__8551;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8432__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__8552 = cljs.core.next.call(null,seq__8432__$1);
var G__8553 = null;
var G__8554 = 0;
var G__8555 = 0;
seq__8432 = G__8552;
chunk__8433 = G__8553;
count__8434 = G__8554;
i__8435 = G__8555;
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
var bound_coll__delegate = function (atm,p__8436){var vec__8439 = p__8436;var path = cljs.core.nth.call(null,vec__8439,0,null);var opts = cljs.core.nth.call(null,vec__8439,1,null);var vec__8440 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__8440,0,null);var opts__$1 = cljs.core.nth.call(null,vec__8440,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__8440,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8439,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__8440,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8439,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__8436 = null;if (arguments.length > 1) {
  p__8436 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__8436);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8556){
var atm = cljs.core.first(arglist__8556);
var p__8436 = cljs.core.rest(arglist__8556);
return bound_coll__delegate(atm,p__8436);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8441){var vec__8443 = p__8441;var opts = cljs.core.nth.call(null,vec__8443,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__8443,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__8443,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__8441 = null;if (arguments.length > 2) {
  p__8441 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__8441);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8557){
var as = cljs.core.first(arglist__8557);
arglist__8557 = cljs.core.next(arglist__8557);
var atm = cljs.core.first(arglist__8557);
var p__8441 = cljs.core.rest(arglist__8557);
return map_bound__delegate(as,atm,p__8441);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__8445 = b;if(G__8445)
{var bit__7021__auto__ = null;if(cljs.core.truth_((function (){var or__6371__auto__ = bit__7021__auto__;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return G__8445.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8445.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8445);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8445);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__8447 = b;if(G__8447)
{var bit__7021__auto__ = null;if(cljs.core.truth_((function (){var or__6371__auto__ = bit__7021__auto__;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return G__8447.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8447.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8447);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8447);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__8449 = atm;if(G__8449)
{var bit__7021__auto__ = (G__8449.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7021__auto__) || (G__8449.cljs$core$IDeref$))
{return true;
} else
{if((!G__8449.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8449);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8449);
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
var bound__delegate = function (atm,p__8450){var vec__8452 = p__8450;var func = cljs.core.nth.call(null,vec__8452,0,null);var func__$1 = (function (){var or__6371__auto__ = func;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__8450 = null;if (arguments.length > 1) {
  p__8450 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__8450);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8558){
var atm = cljs.core.first(arglist__8558);
var p__8450 = cljs.core.rest(arglist__8558);
return bound__delegate(atm,p__8450);
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
lt.objs.highlights.refresh_line = (function refresh_line(p__8145,default_class){var map__8147 = p__8145;var map__8147__$1 = ((cljs.core.seq_QMARK_.call(null,map__8147))?cljs.core.apply.call(null,cljs.core.hash_map,map__8147):map__8147);var l = map__8147__$1;var class$ = cljs.core.get.call(null,map__8147__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle = cljs.core.get.call(null,map__8147__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));var line = cljs.core.get.call(null,map__8147__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__8147__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_(handle))
{return l;
} else
{var temp__4090__auto__ = lt.objs.highlights.editor_for_file.call(null,file);if(cljs.core.truth_(temp__4090__auto__))
{var ed = temp__4090__auto__;var handle__$1 = lt.objs.editor.line_handle.call(null,ed,(line - 1));var class$__$1 = (function (){var or__6371__auto__ = class$;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return default_class;
}
})();lt.objs.highlights.toggle_background.call(null,ed,handle__$1,new cljs.core.Keyword(null,"light-line","light-line",758926781),true);
lt.objs.highlights.toggle_background.call(null,ed,handle__$1,class$__$1,true);
return cljs.core.assoc.call(null,l,new cljs.core.Keyword(null,"handle","handle",4084294042),handle__$1,new cljs.core.Keyword(null,"ed","ed",1013907473),ed);
} else
{return l;
}
}
});
lt.objs.highlights.refresh_lines = (function refresh_lines(p__8149){var map__8151 = p__8149;var map__8151__$1 = ((cljs.core.seq_QMARK_.call(null,map__8151))?cljs.core.apply.call(null,cljs.core.hash_map,map__8151):map__8151);var class$ = cljs.core.get.call(null,map__8151__$1,new cljs.core.Keyword(null,"class","class",1108647146));var lines = cljs.core.get.call(null,map__8151__$1,new cljs.core.Keyword(null,"lines","lines",1116881521));return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (map__8151,map__8151__$1,class$,lines){
return (function (p1__8148_SHARP_){return lt.objs.highlights.refresh_line.call(null,p1__8148_SHARP_,class$);
});})(map__8151,map__8151__$1,class$,lines))
,lines));
});
lt.objs.highlights.__BEH__refresh = (function __BEH__refresh(this$){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",1116881521),lt.objs.highlights.refresh_lines.call(null,cljs.core.deref.call(null,this$))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.highlights","refresh","lt.objs.highlights/refresh",3576234382),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.highlights.__BEH__refresh,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));
lt.objs.highlights.__BEH__highlight = (function __BEH__highlight(this$,lines){var lines__$1 = ((cljs.core.sequential_QMARK_.call(null,lines))?lines:cljs.core.PersistentHashSet.fromArray([lines], true));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",1116881521),cljs.core.into.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"lines","lines",1116881521)),lines__$1)], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.highlights","highlight","lt.objs.highlights/highlight",1032059829),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.highlights.__BEH__highlight,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlight","highlight",4627660838),null], null), null));
lt.objs.highlights.__BEH__clear = (function __BEH__clear(this$){var seq__8160_8186 = cljs.core.seq.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"lines","lines",1116881521)));var chunk__8162_8187 = null;var count__8163_8188 = 0;var i__8164_8189 = 0;while(true){
if((i__8164_8189 < count__8163_8188))
{var map__8166_8190 = cljs.core._nth.call(null,chunk__8162_8187,i__8164_8189);var map__8166_8191__$1 = ((cljs.core.seq_QMARK_.call(null,map__8166_8190))?cljs.core.apply.call(null,cljs.core.hash_map,map__8166_8190):map__8166_8190);var ed_8192 = cljs.core.get.call(null,map__8166_8191__$1,new cljs.core.Keyword(null,"ed","ed",1013907473));var class_8193 = cljs.core.get.call(null,map__8166_8191__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle_8194 = cljs.core.get.call(null,map__8166_8191__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_8194))
{lt.objs.highlights.toggle_background.call(null,ed_8192,handle_8194,(function (){var or__6371__auto__ = class_8193;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"class","class",1108647146));
}
})(),false);
{
var G__8195 = seq__8160_8186;
var G__8196 = chunk__8162_8187;
var G__8197 = count__8163_8188;
var G__8198 = (i__8164_8189 + 1);
seq__8160_8186 = G__8195;
chunk__8162_8187 = G__8196;
count__8163_8188 = G__8197;
i__8164_8189 = G__8198;
continue;
}
} else
{{
var G__8199 = seq__8160_8186;
var G__8200 = chunk__8162_8187;
var G__8201 = count__8163_8188;
var G__8202 = (i__8164_8189 + 1);
seq__8160_8186 = G__8199;
chunk__8162_8187 = G__8200;
count__8163_8188 = G__8201;
i__8164_8189 = G__8202;
continue;
}
}
} else
{var temp__4092__auto___8203 = cljs.core.seq.call(null,seq__8160_8186);if(temp__4092__auto___8203)
{var seq__8160_8204__$1 = temp__4092__auto___8203;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8160_8204__$1))
{var c__7119__auto___8205 = cljs.core.chunk_first.call(null,seq__8160_8204__$1);{
var G__8206 = cljs.core.chunk_rest.call(null,seq__8160_8204__$1);
var G__8207 = c__7119__auto___8205;
var G__8208 = cljs.core.count.call(null,c__7119__auto___8205);
var G__8209 = 0;
seq__8160_8186 = G__8206;
chunk__8162_8187 = G__8207;
count__8163_8188 = G__8208;
i__8164_8189 = G__8209;
continue;
}
} else
{var map__8167_8210 = cljs.core.first.call(null,seq__8160_8204__$1);var map__8167_8211__$1 = ((cljs.core.seq_QMARK_.call(null,map__8167_8210))?cljs.core.apply.call(null,cljs.core.hash_map,map__8167_8210):map__8167_8210);var ed_8212 = cljs.core.get.call(null,map__8167_8211__$1,new cljs.core.Keyword(null,"ed","ed",1013907473));var class_8213 = cljs.core.get.call(null,map__8167_8211__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle_8214 = cljs.core.get.call(null,map__8167_8211__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_8214))
{lt.objs.highlights.toggle_background.call(null,ed_8212,handle_8214,(function (){var or__6371__auto__ = class_8213;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"class","class",1108647146));
}
})(),false);
{
var G__8215 = cljs.core.next.call(null,seq__8160_8204__$1);
var G__8216 = null;
var G__8217 = 0;
var G__8218 = 0;
seq__8160_8186 = G__8215;
chunk__8162_8187 = G__8216;
count__8163_8188 = G__8217;
i__8164_8189 = G__8218;
continue;
}
} else
{{
var G__8219 = cljs.core.next.call(null,seq__8160_8204__$1);
var G__8220 = null;
var G__8221 = 0;
var G__8222 = 0;
seq__8160_8186 = G__8219;
chunk__8162_8187 = G__8220;
count__8163_8188 = G__8221;
i__8164_8189 = G__8222;
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
lt.objs.highlights.__BEH__refresh_on_open = (function __BEH__refresh_on_open(editor){var seq__8172 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"highlights","highlights",1371209137)));var chunk__8173 = null;var count__8174 = 0;var i__8175 = 0;while(true){
if((i__8175 < count__8174))
{var highlights = cljs.core._nth.call(null,chunk__8173,i__8175);lt.object.raise.call(null,highlights,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
{
var G__8223 = seq__8172;
var G__8224 = chunk__8173;
var G__8225 = count__8174;
var G__8226 = (i__8175 + 1);
seq__8172 = G__8223;
chunk__8173 = G__8224;
count__8174 = G__8225;
i__8175 = G__8226;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8172);if(temp__4092__auto__)
{var seq__8172__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8172__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8172__$1);{
var G__8227 = cljs.core.chunk_rest.call(null,seq__8172__$1);
var G__8228 = c__7119__auto__;
var G__8229 = cljs.core.count.call(null,c__7119__auto__);
var G__8230 = 0;
seq__8172 = G__8227;
chunk__8173 = G__8228;
count__8174 = G__8229;
i__8175 = G__8230;
continue;
}
} else
{var highlights = cljs.core.first.call(null,seq__8172__$1);lt.object.raise.call(null,highlights,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
{
var G__8231 = cljs.core.next.call(null,seq__8172__$1);
var G__8232 = null;
var G__8233 = 0;
var G__8234 = 0;
seq__8172 = G__8231;
chunk__8173 = G__8232;
count__8174 = G__8233;
i__8175 = G__8234;
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
lt.objs.file_links.sqr = (function sqr(p1__8051_SHARP_){return Math.pow(p1__8051_SHARP_,2);
});
lt.objs.file_links.hypot = (function hypot(p__8052,p__8053){var vec__8056 = p__8052;var x = cljs.core.nth.call(null,vec__8056,0,null);var y = cljs.core.nth.call(null,vec__8056,1,null);var vec__8057 = p__8053;var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8057,0,null);var y_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8057,1,null);return lt.objs.file_links.sqrt.call(null,(lt.objs.file_links.sqr.call(null,(x_SINGLEQUOTE_ - x)) + lt.objs.file_links.sqr.call(null,(y_SINGLEQUOTE_ - y))));
});
lt.objs.file_links.left_click_QMARK_ = (function left_click_QMARK_(e){return cljs.core._EQ_.call(null,e.which,1);
});
lt.objs.file_links.click = (function click(node,f){var pos = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null));node.onmousedown = ((function (pos){
return (function (p1__8058_SHARP_){if(lt.objs.file_links.left_click_QMARK_.call(null,p1__8058_SHARP_))
{return cljs.core.reset_BANG_.call(null,pos,lt.objs.file_links.__GT_pos.call(null,p1__8058_SHARP_));
} else
{return null;
}
});})(pos))
;
return node.onmouseup = ((function (pos){
return (function (p1__8059_SHARP_){if((lt.objs.file_links.left_click_QMARK_.call(null,p1__8059_SHARP_)) && ((lt.objs.file_links.hypot.call(null,cljs.core.deref.call(null,pos),lt.objs.file_links.__GT_pos.call(null,p1__8059_SHARP_)) < 5)))
{return f.call(null,p1__8059_SHARP_);
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
var highlight__delegate = function (p__8060){var vec__8062 = p__8060;var line = cljs.core.nth.call(null,vec__8062,0,null);if(cljs.core.truth_(lt.objs.file_links.tm_STAR_))
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
var p__8060 = null;if (arguments.length > 0) {
  p__8060 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return highlight__delegate.call(this,p__8060);};
highlight.cljs$lang$maxFixedArity = 0;
highlight.cljs$lang$applyTo = (function (arglist__8092){
var p__8060 = cljs.core.seq(arglist__8092);
return highlight__delegate(p__8060);
});
highlight.cljs$core$IFn$_invoke$arity$variadic = highlight__delegate;
return highlight;
})()
;
lt.objs.file_links.url_pattern = (cljs.core.truth_(lt.objs.platform.win_QMARK_.call(null))?/^\s*((?:\w+:)[\/\\][A-Za-z0-9_ \\/\/\.\-]*?\.jl)(?::([0-9]+))?\s*$/:/^\s*(\/[A-Za-z0-9_ \\/\/\.\-]*?\.jl)(?::([0-9]+))?\s*$/);
lt.objs.file_links.__GT_line = (function __GT_line(s){var vec__8064 = cljs.core.re_find.call(null,lt.objs.file_links.url_pattern,s);var _ = cljs.core.nth.call(null,vec__8064,0,null);var file = cljs.core.nth.call(null,vec__8064,1,null);var line = cljs.core.nth.call(null,vec__8064,2,null);if(cljs.core.truth_(file))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),file,new cljs.core.Keyword(null,"line","line",1017226086),(cljs.core.truth_(line)?parseInt(line):null)], null);
} else
{return null;
}
});
lt.objs.file_links.open = (function open(line){if(typeof line === 'string')
{return lt.objs.platform.open.call(null,line);
} else
{return lt.objs.jump_stack.jump_to.call(null,line.call(null,new cljs.core.Keyword(null,"file","file",1017047278)),((function (){var or__6371__auto__ = line.call(null,new cljs.core.Keyword(null,"line","line",1017226086));if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
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
if(cljs.core.truth_((function (){var and__6359__auto__ = !(typeof line === 'string');if(and__6359__auto__)
{return line.call(null,new cljs.core.Keyword(null,"line","line",1017226086));
} else
{return and__6359__auto__;
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
lt.objs.file_links.process_nodes_BANG_ = (function process_nodes_BANG_(dom){var seq__8069_8093 = cljs.core.seq.call(null,lt.objs.file_links.file_links.call(null,dom));var chunk__8070_8094 = null;var count__8071_8095 = 0;var i__8072_8096 = 0;while(true){
if((i__8072_8096 < count__8071_8095))
{var link_8097 = cljs.core._nth.call(null,chunk__8070_8094,i__8072_8096);lt.objs.file_links.process_node_BANG_.call(null,link_8097,(function (){var or__6371__auto__ = lt.objs.file_links.data_url.call(null,link_8097);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return lt.objs.file_links.__GT_line.call(null,lt.objs.file_links.data_file.call(null,link_8097));
}
})());
{
var G__8098 = seq__8069_8093;
var G__8099 = chunk__8070_8094;
var G__8100 = count__8071_8095;
var G__8101 = (i__8072_8096 + 1);
seq__8069_8093 = G__8098;
chunk__8070_8094 = G__8099;
count__8071_8095 = G__8100;
i__8072_8096 = G__8101;
continue;
}
} else
{var temp__4092__auto___8102 = cljs.core.seq.call(null,seq__8069_8093);if(temp__4092__auto___8102)
{var seq__8069_8103__$1 = temp__4092__auto___8102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8069_8103__$1))
{var c__7119__auto___8104 = cljs.core.chunk_first.call(null,seq__8069_8103__$1);{
var G__8105 = cljs.core.chunk_rest.call(null,seq__8069_8103__$1);
var G__8106 = c__7119__auto___8104;
var G__8107 = cljs.core.count.call(null,c__7119__auto___8104);
var G__8108 = 0;
seq__8069_8093 = G__8105;
chunk__8070_8094 = G__8106;
count__8071_8095 = G__8107;
i__8072_8096 = G__8108;
continue;
}
} else
{var link_8109 = cljs.core.first.call(null,seq__8069_8103__$1);lt.objs.file_links.process_node_BANG_.call(null,link_8109,(function (){var or__6371__auto__ = lt.objs.file_links.data_url.call(null,link_8109);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return lt.objs.file_links.__GT_line.call(null,lt.objs.file_links.data_file.call(null,link_8109));
}
})());
{
var G__8110 = cljs.core.next.call(null,seq__8069_8103__$1);
var G__8111 = null;
var G__8112 = 0;
var G__8113 = 0;
seq__8069_8093 = G__8110;
chunk__8070_8094 = G__8111;
count__8071_8095 = G__8112;
i__8072_8096 = G__8113;
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
lt.objs.file_links.process_anchors_BANG_ = (function process_anchors_BANG_(dom){cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__8073_SHARP_){return lt.objs.file_links.process_anchor_BANG_.call(null,p1__8073_SHARP_);
}),lt.objs.file_links.all_anchors.call(null,dom)));
var seq__8078_8114 = cljs.core.seq.call(null,lt.objs.file_links.all_anchors.call(null,dom));var chunk__8079_8115 = null;var count__8080_8116 = 0;var i__8081_8117 = 0;while(true){
if((i__8081_8117 < count__8080_8116))
{var anchor_8118 = cljs.core._nth.call(null,chunk__8079_8115,i__8081_8117);lt.objs.file_links.process_anchor_BANG_.call(null,anchor_8118);
{
var G__8119 = seq__8078_8114;
var G__8120 = chunk__8079_8115;
var G__8121 = count__8080_8116;
var G__8122 = (i__8081_8117 + 1);
seq__8078_8114 = G__8119;
chunk__8079_8115 = G__8120;
count__8080_8116 = G__8121;
i__8081_8117 = G__8122;
continue;
}
} else
{var temp__4092__auto___8123 = cljs.core.seq.call(null,seq__8078_8114);if(temp__4092__auto___8123)
{var seq__8078_8124__$1 = temp__4092__auto___8123;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8078_8124__$1))
{var c__7119__auto___8125 = cljs.core.chunk_first.call(null,seq__8078_8124__$1);{
var G__8126 = cljs.core.chunk_rest.call(null,seq__8078_8124__$1);
var G__8127 = c__7119__auto___8125;
var G__8128 = cljs.core.count.call(null,c__7119__auto___8125);
var G__8129 = 0;
seq__8078_8114 = G__8126;
chunk__8079_8115 = G__8127;
count__8080_8116 = G__8128;
i__8081_8117 = G__8129;
continue;
}
} else
{var anchor_8130 = cljs.core.first.call(null,seq__8078_8124__$1);lt.objs.file_links.process_anchor_BANG_.call(null,anchor_8130);
{
var G__8131 = cljs.core.next.call(null,seq__8078_8124__$1);
var G__8132 = null;
var G__8133 = 0;
var G__8134 = 0;
seq__8078_8114 = G__8131;
chunk__8079_8115 = G__8132;
count__8080_8116 = G__8133;
i__8081_8117 = G__8134;
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
goog.require('lt.plugins.june');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.langs.julia.util');
goog.require('crate.core');
goog.require('lt.objs.file_links');
goog.require('lt.util.dom');
goog.require('lt.plugins.june');
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
lt.objs.langs.julia.browser.__BEH__set_objects = (function __BEH__set_objects(browser,p__8313){var map__8315 = p__8313;var map__8315__$1 = ((cljs.core.seq_QMARK_.call(null,map__8315))?cljs.core.apply.call(null,cljs.core.hash_map,map__8315):map__8315);var objs = cljs.core.get.call(null,map__8315__$1,new cljs.core.Keyword(null,"objs","objs",1017308622));return lt.object.merge_BANG_.call(null,browser,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"objs","objs",1017308622),objs], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.browser","set-objects","lt.objs.langs.julia.browser/set-objects",1694283112),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.browser.__BEH__set_objects,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update","update",4470025275),null], null), null));
lt.objs.langs.julia.browser.browser_ui = (function browser_ui(p__8316){var map__8332 = p__8316;var map__8332__$1 = ((cljs.core.seq_QMARK_.call(null,map__8332))?cljs.core.apply.call(null,cljs.core.hash_map,map__8332):map__8332);var objs = cljs.core.get.call(null,map__8332__$1,new cljs.core.Keyword(null,"objs","objs",1017308622));var e__7952__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.langs.julia.browser.join_theme.call(null,new cljs.core.Keyword(null,"div.CodeMirror","div.CodeMirror",3436950811)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.julia.browser","div.julia.browser",1862942824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.data-frame","table.data-frame",1770442524),(function (){var iter__7088__auto__ = ((function (map__8332,map__8332__$1,objs){
return (function iter__8333(s__8334){return (new cljs.core.LazySeq(null,((function (map__8332,map__8332__$1,objs){
return (function (){var s__8334__$1 = s__8334;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8334__$1);if(temp__4092__auto__)
{var s__8334__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8334__$2))
{var c__7086__auto__ = cljs.core.chunk_first.call(null,s__8334__$2);var size__7087__auto__ = cljs.core.count.call(null,c__7086__auto__);var b__8336 = cljs.core.chunk_buffer.call(null,size__7087__auto__);if((function (){var i__8335 = 0;while(true){
if((i__8335 < size__7087__auto__))
{var vec__8339 = cljs.core._nth.call(null,c__7086__auto__,i__8335);var k = cljs.core.nth.call(null,vec__8339,0,null);var v = cljs.core.nth.call(null,vec__8339,1,null);cljs.core.chunk_append.call(null,b__8336,lt.plugins.june.highlight.call(null,".variable",null,null,lt.objs.file_links.process_BANG_.call(null,lt.objs.langs.julia.browser.process_collapsible_BANG_.call(null,crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",4416891401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.variable","span.variable",2064274450),cljs.core.name.call(null,k)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),crate.core.raw.call(null,v)], null)], null))))));
{
var G__8358 = (i__8335 + 1);
i__8335 = G__8358;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8336),iter__8333.call(null,cljs.core.chunk_rest.call(null,s__8334__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8336),null);
}
} else
{var vec__8340 = cljs.core.first.call(null,s__8334__$2);var k = cljs.core.nth.call(null,vec__8340,0,null);var v = cljs.core.nth.call(null,vec__8340,1,null);return cljs.core.cons.call(null,lt.plugins.june.highlight.call(null,".variable",null,null,lt.objs.file_links.process_BANG_.call(null,lt.objs.langs.julia.browser.process_collapsible_BANG_.call(null,crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",4416891401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.variable","span.variable",2064274450),cljs.core.name.call(null,k)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),crate.core.raw.call(null,v)], null)], null))))),iter__8333.call(null,cljs.core.rest.call(null,s__8334__$2)));
}
} else
{return null;
}
break;
}
});})(map__8332,map__8332__$1,objs))
,null,null));
});})(map__8332,map__8332__$1,objs))
;return iter__7088__auto__.call(null,objs);
})()], null)], null)], null));var seq__8341_8359 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8342_8360 = null;var count__8343_8361 = 0;var i__8344_8362 = 0;while(true){
if((i__8344_8362 < count__8343_8361))
{var vec__8345_8363 = cljs.core._nth.call(null,chunk__8342_8360,i__8344_8362);var ev__7953__auto___8364 = cljs.core.nth.call(null,vec__8345_8363,0,null);var func__7954__auto___8365 = cljs.core.nth.call(null,vec__8345_8363,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8364,func__7954__auto___8365);
{
var G__8366 = seq__8341_8359;
var G__8367 = chunk__8342_8360;
var G__8368 = count__8343_8361;
var G__8369 = (i__8344_8362 + 1);
seq__8341_8359 = G__8366;
chunk__8342_8360 = G__8367;
count__8343_8361 = G__8368;
i__8344_8362 = G__8369;
continue;
}
} else
{var temp__4092__auto___8370 = cljs.core.seq.call(null,seq__8341_8359);if(temp__4092__auto___8370)
{var seq__8341_8371__$1 = temp__4092__auto___8370;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8341_8371__$1))
{var c__7119__auto___8372 = cljs.core.chunk_first.call(null,seq__8341_8371__$1);{
var G__8373 = cljs.core.chunk_rest.call(null,seq__8341_8371__$1);
var G__8374 = c__7119__auto___8372;
var G__8375 = cljs.core.count.call(null,c__7119__auto___8372);
var G__8376 = 0;
seq__8341_8359 = G__8373;
chunk__8342_8360 = G__8374;
count__8343_8361 = G__8375;
i__8344_8362 = G__8376;
continue;
}
} else
{var vec__8346_8377 = cljs.core.first.call(null,seq__8341_8371__$1);var ev__7953__auto___8378 = cljs.core.nth.call(null,vec__8346_8377,0,null);var func__7954__auto___8379 = cljs.core.nth.call(null,vec__8346_8377,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8378,func__7954__auto___8379);
{
var G__8380 = cljs.core.next.call(null,seq__8341_8371__$1);
var G__8381 = null;
var G__8382 = 0;
var G__8383 = 0;
seq__8341_8359 = G__8380;
chunk__8342_8360 = G__8381;
count__8343_8361 = G__8382;
i__8344_8362 = G__8383;
continue;
}
}
} else
{}
}
break;
}
return e__7952__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.browser","browser","lt.objs.langs.julia.browser/browser",916384999),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.browser","julia.browser",1725846277),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia.browser","on-close","lt.objs.langs.julia.browser/on-close",664516101),new cljs.core.Keyword("lt.objs.langs.julia.browser","set-objects","lt.objs.langs.julia.browser/set-objects",1694283112)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Browser",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return crate.binding.bound.call(null,this$,lt.objs.langs.julia.browser.browser_ui);
}));
lt.objs.langs.julia.browser.browser = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.browser","browser","lt.objs.langs.julia.browser/browser",916384999));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"browser-tab","browser-tab",4532633314),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Open the object browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.objs.langs.julia.browser.browser);
})], null));
lt.objs.langs.julia.browser.tag_behaviour = (function tag_behaviour(tag,name){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8347_SHARP_){return cljs.core._EQ_.call(null,((cljs.core.seq_QMARK_.call(null,p1__8347_SHARP_))?cljs.core.first.call(null,p1__8347_SHARP_):p1__8347_SHARP_),name);
}),tag.call(null,cljs.core.deref.call(null,lt.object.tags))));
});
lt.objs.langs.julia.browser.theme = (function theme(tag){return cljs.core.second.call(null,lt.objs.langs.julia.browser.tag_behaviour.call(null,tag,new cljs.core.Keyword("lt.objs.style","set-theme","lt.objs.style/set-theme",1439387910)));
});
lt.objs.langs.julia.browser.julia_theme = (function julia_theme(){var or__6371__auto__ = lt.objs.langs.julia.browser.theme.call(null,new cljs.core.Keyword(null,"editor.julia","editor.julia",3182496010));if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = lt.objs.langs.julia.browser.theme.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679));if(cljs.core.truth_(or__6371__auto____$1))
{return or__6371__auto____$1;
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
goog.require('crate.core');
goog.require('crate.core');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
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
return lt.plugins.flow.callback.call(null,200,(function (){if(cljs.core.truth_(lt.plugins.flow.has_valid_editor_QMARK_.call(null,result)))
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
}catch (e9022){if((e9022 instanceof Error))
{var e = e9022;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9022;
} else
{return null;
}
}
}});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.stats","metrics","lt.objs.langs.julia.stats/metrics",1111343317),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (){return lt.objs.langs.julia.stats.hit.call(null,[cljs.core.str("http://mikeinn.es/hit?id="),cljs.core.str(cljs.core.deref.call(null,lt.objs.cache.settings).call(null,new cljs.core.Keyword(null,"uid","uid",1014020034)))].join(''));
}),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
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
lt.objs.langs.julia.patch.__GT_inline_exception = (function __GT_inline_exception(this$,info){var e__7952__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,lt.objs.eval.__GT_exception_class)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),lt.objs.eval.__GT_spacing.call(null,lt.objs.editor.line.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(info))))], null),((typeof new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)], null))], null));var seq__8740_8763 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7952__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"click","click",1108654330));
});})(e__7952__auto__))
,new cljs.core.Keyword(null,"contextmenu","contextmenu",911789824),((function (e__7952__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"menu!","menu!",1117686292),e);
});})(e__7952__auto__))
,new cljs.core.Keyword(null,"dblclick","dblclick",3463991820),((function (e__7952__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"double-click","double-click",956590078));
});})(e__7952__auto__))
], null)));var chunk__8741_8764 = null;var count__8742_8765 = 0;var i__8743_8766 = 0;while(true){
if((i__8743_8766 < count__8742_8765))
{var vec__8744_8767 = cljs.core._nth.call(null,chunk__8741_8764,i__8743_8766);var ev__7953__auto___8768 = cljs.core.nth.call(null,vec__8744_8767,0,null);var func__7954__auto___8769 = cljs.core.nth.call(null,vec__8744_8767,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8768,func__7954__auto___8769);
{
var G__8770 = seq__8740_8763;
var G__8771 = chunk__8741_8764;
var G__8772 = count__8742_8765;
var G__8773 = (i__8743_8766 + 1);
seq__8740_8763 = G__8770;
chunk__8741_8764 = G__8771;
count__8742_8765 = G__8772;
i__8743_8766 = G__8773;
continue;
}
} else
{var temp__4092__auto___8774 = cljs.core.seq.call(null,seq__8740_8763);if(temp__4092__auto___8774)
{var seq__8740_8775__$1 = temp__4092__auto___8774;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8740_8775__$1))
{var c__7119__auto___8776 = cljs.core.chunk_first.call(null,seq__8740_8775__$1);{
var G__8777 = cljs.core.chunk_rest.call(null,seq__8740_8775__$1);
var G__8778 = c__7119__auto___8776;
var G__8779 = cljs.core.count.call(null,c__7119__auto___8776);
var G__8780 = 0;
seq__8740_8763 = G__8777;
chunk__8741_8764 = G__8778;
count__8742_8765 = G__8779;
i__8743_8766 = G__8780;
continue;
}
} else
{var vec__8745_8781 = cljs.core.first.call(null,seq__8740_8775__$1);var ev__7953__auto___8782 = cljs.core.nth.call(null,vec__8745_8781,0,null);var func__7954__auto___8783 = cljs.core.nth.call(null,vec__8745_8781,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8782,func__7954__auto___8783);
{
var G__8784 = cljs.core.next.call(null,seq__8740_8775__$1);
var G__8785 = null;
var G__8786 = 0;
var G__8787 = 0;
seq__8740_8763 = G__8784;
chunk__8741_8764 = G__8785;
count__8742_8765 = G__8786;
i__8743_8766 = G__8787;
continue;
}
}
} else
{}
}
break;
}
return e__7952__auto__;
});
lt.objs.eval.__GT_inline_exception = lt.objs.langs.julia.patch.__GT_inline_exception;
/**
* @param {...*} var_args
*/
lt.objs.langs.julia.patch.keyboard_raise = (function() { 
var keyboard_raise__delegate = function (obj,k,args){var reactions = k.call(null,new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));while(true){
if(cljs.core.seq.call(null,reactions))
{lt.objs.keyboard._STAR_capture_STAR_ = true;
lt.object.raise_STAR_.call(null,obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,reactions)], null),args,k);
if(cljs.core.truth_(lt.objs.keyboard._STAR_capture_STAR_))
{return null;
} else
{{
var G__8788 = cljs.core.rest.call(null,reactions);
reactions = G__8788;
continue;
}
}
} else
{return null;
}
break;
}
};
var keyboard_raise = function (obj,k,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return keyboard_raise__delegate.call(this,obj,k,args);};
keyboard_raise.cljs$lang$maxFixedArity = 2;
keyboard_raise.cljs$lang$applyTo = (function (arglist__8789){
var obj = cljs.core.first(arglist__8789);
arglist__8789 = cljs.core.next(arglist__8789);
var k = cljs.core.first(arglist__8789);
var args = cljs.core.rest(arglist__8789);
return keyboard_raise__delegate(obj,k,args);
});
keyboard_raise.cljs$core$IFn$_invoke$arity$variadic = keyboard_raise__delegate;
return keyboard_raise;
})()
;
lt.objs.keyboard.raise = lt.objs.langs.julia.patch.keyboard_raise;
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.backspace-pair","editor.backspace-pair",3593263483),new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Smart backspace",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (c){return lt.objs.keyboard.raise.call(null,lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"editor.keys.normal","editor.keys.normal",2927389330)),new cljs.core.Keyword(null,"backspace!","backspace!",4317945588),c);
})], null));
lt.objs.langs.julia.patch.adjust_loc = (function adjust_loc(loc,dir){return cljs.core.update_in.call(null,loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core._PLUS_,dir);
});
lt.objs.langs.julia.patch.pre_cursor_indent = (function pre_cursor_indent(ed,p__8746){var map__8748 = p__8746;var map__8748__$1 = ((cljs.core.seq_QMARK_.call(null,map__8748))?cljs.core.apply.call(null,cljs.core.hash_map,map__8748):map__8748);var ch = cljs.core.get.call(null,map__8748__$1,new cljs.core.Keyword(null,"ch","ch",1013907415));var line = cljs.core.get.call(null,map__8748__$1,new cljs.core.Keyword(null,"line","line",1017226086));var tabs = lt.objs.editor.option.call(null,ed,new cljs.core.Keyword(null,"indentWithTabs","indentWithTabs",4541079970));var unit = lt.objs.editor.option.call(null,ed,new cljs.core.Keyword(null,"indentUnit","indentUnit",1493236674));var precursor = lt.objs.editor.line.call(null,ed,line).substring(0,ch);var whitespace = cljs.core.count.call(null,cljs.core.re_find.call(null,(cljs.core.truth_(tabs)?/^\t*$/:/^ *$/),precursor));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot.call(null,whitespace,unit),cljs.core.mod.call(null,whitespace,unit)], null);
});
lt.objs.langs.julia.patch.__BEH__backspace_indent = (function __BEH__backspace_indent(ed){if(cljs.core.not.call(null,(function (){var or__6371__auto__ = lt.objs.editor.selection_QMARK_.call(null,ed);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return (lt.objs.editor.__GT_cm_ed.call(null,ed).getSelections().length > 1);
}
})()))
{var cursor = lt.objs.editor.__GT_cursor.call(null,ed);var unit = lt.objs.editor.option.call(null,ed,new cljs.core.Keyword(null,"indentUnit","indentUnit",1493236674));var vec__8751 = lt.objs.langs.julia.patch.pre_cursor_indent.call(null,ed,cursor);var indent = cljs.core.nth.call(null,vec__8751,0,null);var rem = cljs.core.nth.call(null,vec__8751,1,null);var cursor__$1 = (((rem > 0))?lt.objs.langs.julia.patch.adjust_loc.call(null,lt.objs.editor.__GT_cursor.call(null,ed),(unit - rem)):cursor);var vec__8752 = (((rem > 0))?lt.objs.langs.julia.patch.pre_cursor_indent.call(null,ed,cursor__$1):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [indent,rem], null));var indent__$1 = cljs.core.nth.call(null,vec__8752,0,null);var rem__$1 = cljs.core.nth.call(null,vec__8752,1,null);if(((indent__$1 > 0)) && ((rem__$1 === 0)))
{return lt.objs.editor.replace.call(null,ed,lt.objs.langs.julia.patch.adjust_loc.call(null,cursor__$1,(- unit)),cursor__$1,"");
} else
{return lt.objs.keyboard.passthrough.call(null);
}
} else
{return lt.objs.keyboard.passthrough.call(null);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.patch","backspace-indent","lt.objs.langs.julia.patch/backspace-indent",2806848333),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.patch.__BEH__backspace_indent,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backspace!","backspace!",4317945588),null], null), null));
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
lt.objs.langs.julia.profiler.refresh_line = (function refresh_line(p__8828){var map__8830 = p__8828;var map__8830__$1 = ((cljs.core.seq_QMARK_.call(null,map__8830))?cljs.core.apply.call(null,cljs.core.hash_map,map__8830):map__8830);var l = map__8830__$1;var handle = cljs.core.get.call(null,map__8830__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));var percent = cljs.core.get.call(null,map__8830__$1,new cljs.core.Keyword(null,"percent","percent",4629944247));var line = cljs.core.get.call(null,map__8830__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__8830__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_(handle))
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
lt.objs.langs.julia.profiler.refresh_and_update = (function refresh_and_update(lines){var lines__$1 = lt.objs.langs.julia.profiler.refresh_lines.call(null,lines);var seq__8837_8901 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.editors.call(null,lines__$1));var chunk__8839_8902 = null;var count__8840_8903 = 0;var i__8841_8904 = 0;while(true){
if((i__8841_8904 < count__8840_8903))
{var ed_8905 = cljs.core._nth.call(null,chunk__8839_8902,i__8841_8904);if(cljs.core.truth_((function (){var and__6359__auto__ = ed_8905;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.deref.call(null,ed_8905);
} else
{return and__6359__auto__;
}
})()))
{lt.objs.editor.refresh.call(null,ed_8905);
{
var G__8906 = seq__8837_8901;
var G__8907 = chunk__8839_8902;
var G__8908 = count__8840_8903;
var G__8909 = (i__8841_8904 + 1);
seq__8837_8901 = G__8906;
chunk__8839_8902 = G__8907;
count__8840_8903 = G__8908;
i__8841_8904 = G__8909;
continue;
}
} else
{{
var G__8910 = seq__8837_8901;
var G__8911 = chunk__8839_8902;
var G__8912 = count__8840_8903;
var G__8913 = (i__8841_8904 + 1);
seq__8837_8901 = G__8910;
chunk__8839_8902 = G__8911;
count__8840_8903 = G__8912;
i__8841_8904 = G__8913;
continue;
}
}
} else
{var temp__4092__auto___8914 = cljs.core.seq.call(null,seq__8837_8901);if(temp__4092__auto___8914)
{var seq__8837_8915__$1 = temp__4092__auto___8914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8837_8915__$1))
{var c__7119__auto___8916 = cljs.core.chunk_first.call(null,seq__8837_8915__$1);{
var G__8917 = cljs.core.chunk_rest.call(null,seq__8837_8915__$1);
var G__8918 = c__7119__auto___8916;
var G__8919 = cljs.core.count.call(null,c__7119__auto___8916);
var G__8920 = 0;
seq__8837_8901 = G__8917;
chunk__8839_8902 = G__8918;
count__8840_8903 = G__8919;
i__8841_8904 = G__8920;
continue;
}
} else
{var ed_8921 = cljs.core.first.call(null,seq__8837_8915__$1);if(cljs.core.truth_((function (){var and__6359__auto__ = ed_8921;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.deref.call(null,ed_8921);
} else
{return and__6359__auto__;
}
})()))
{lt.objs.editor.refresh.call(null,ed_8921);
{
var G__8922 = cljs.core.next.call(null,seq__8837_8915__$1);
var G__8923 = null;
var G__8924 = 0;
var G__8925 = 0;
seq__8837_8901 = G__8922;
chunk__8839_8902 = G__8923;
count__8840_8903 = G__8924;
i__8841_8904 = G__8925;
continue;
}
} else
{{
var G__8926 = cljs.core.next.call(null,seq__8837_8915__$1);
var G__8927 = null;
var G__8928 = 0;
var G__8929 = 0;
seq__8837_8901 = G__8926;
chunk__8839_8902 = G__8927;
count__8840_8903 = G__8928;
i__8841_8904 = G__8929;
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
{var seq__8855_8930 = cljs.core.seq.call(null,cljs.core.deref.call(null,lt.objs.langs.julia.profiler.lines));var chunk__8857_8931 = null;var count__8858_8932 = 0;var i__8859_8933 = 0;while(true){
if((i__8859_8933 < count__8858_8932))
{var map__8861_8934 = cljs.core._nth.call(null,chunk__8857_8931,i__8859_8933);var map__8861_8935__$1 = ((cljs.core.seq_QMARK_.call(null,map__8861_8934))?cljs.core.apply.call(null,cljs.core.hash_map,map__8861_8934):map__8861_8934);var handle_8936 = cljs.core.get.call(null,map__8861_8935__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_8936))
{handle_8936.percent = null;
{
var G__8937 = seq__8855_8930;
var G__8938 = chunk__8857_8931;
var G__8939 = count__8858_8932;
var G__8940 = (i__8859_8933 + 1);
seq__8855_8930 = G__8937;
chunk__8857_8931 = G__8938;
count__8858_8932 = G__8939;
i__8859_8933 = G__8940;
continue;
}
} else
{{
var G__8941 = seq__8855_8930;
var G__8942 = chunk__8857_8931;
var G__8943 = count__8858_8932;
var G__8944 = (i__8859_8933 + 1);
seq__8855_8930 = G__8941;
chunk__8857_8931 = G__8942;
count__8858_8932 = G__8943;
i__8859_8933 = G__8944;
continue;
}
}
} else
{var temp__4092__auto___8945 = cljs.core.seq.call(null,seq__8855_8930);if(temp__4092__auto___8945)
{var seq__8855_8946__$1 = temp__4092__auto___8945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8855_8946__$1))
{var c__7119__auto___8947 = cljs.core.chunk_first.call(null,seq__8855_8946__$1);{
var G__8948 = cljs.core.chunk_rest.call(null,seq__8855_8946__$1);
var G__8949 = c__7119__auto___8947;
var G__8950 = cljs.core.count.call(null,c__7119__auto___8947);
var G__8951 = 0;
seq__8855_8930 = G__8948;
chunk__8857_8931 = G__8949;
count__8858_8932 = G__8950;
i__8859_8933 = G__8951;
continue;
}
} else
{var map__8862_8952 = cljs.core.first.call(null,seq__8855_8946__$1);var map__8862_8953__$1 = ((cljs.core.seq_QMARK_.call(null,map__8862_8952))?cljs.core.apply.call(null,cljs.core.hash_map,map__8862_8952):map__8862_8952);var handle_8954 = cljs.core.get.call(null,map__8862_8953__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_8954))
{handle_8954.percent = null;
{
var G__8955 = cljs.core.next.call(null,seq__8855_8946__$1);
var G__8956 = null;
var G__8957 = 0;
var G__8958 = 0;
seq__8855_8930 = G__8955;
chunk__8857_8931 = G__8956;
count__8858_8932 = G__8957;
i__8859_8933 = G__8958;
continue;
}
} else
{{
var G__8959 = cljs.core.next.call(null,seq__8855_8946__$1);
var G__8960 = null;
var G__8961 = 0;
var G__8962 = 0;
seq__8855_8930 = G__8959;
chunk__8857_8931 = G__8960;
count__8858_8932 = G__8961;
i__8859_8933 = G__8962;
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
var seq__8863 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.dom_bars.call(null));var chunk__8864 = null;var count__8865 = 0;var i__8866 = 0;while(true){
if((i__8866 < count__8865))
{var bar = cljs.core._nth.call(null,chunk__8864,i__8866);bar.remove();
{
var G__8963 = seq__8863;
var G__8964 = chunk__8864;
var G__8965 = count__8865;
var G__8966 = (i__8866 + 1);
seq__8863 = G__8963;
chunk__8864 = G__8964;
count__8865 = G__8965;
i__8866 = G__8966;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8863);if(temp__4092__auto__)
{var seq__8863__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8863__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8863__$1);{
var G__8967 = cljs.core.chunk_rest.call(null,seq__8863__$1);
var G__8968 = c__7119__auto__;
var G__8969 = cljs.core.count.call(null,c__7119__auto__);
var G__8970 = 0;
seq__8863 = G__8967;
chunk__8864 = G__8968;
count__8865 = G__8969;
i__8866 = G__8970;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__8863__$1);bar.remove();
{
var G__8971 = cljs.core.next.call(null,seq__8863__$1);
var G__8972 = null;
var G__8973 = 0;
var G__8974 = 0;
seq__8863 = G__8971;
chunk__8864 = G__8972;
count__8865 = G__8973;
i__8866 = G__8974;
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
lt.objs.langs.julia.profiler.animate_in = (function animate_in(){var bars = lt.objs.langs.julia.profiler.dom_bars.call(null);var seq__8875_8975 = cljs.core.seq.call(null,bars);var chunk__8876_8976 = null;var count__8877_8977 = 0;var i__8878_8978 = 0;while(true){
if((i__8878_8978 < count__8877_8977))
{var bar_8979 = cljs.core._nth.call(null,chunk__8876_8976,i__8878_8978);lt.util.dom.remove_class.call(null,bar_8979,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.add_class.call(null,bar_8979,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__8980 = seq__8875_8975;
var G__8981 = chunk__8876_8976;
var G__8982 = count__8877_8977;
var G__8983 = (i__8878_8978 + 1);
seq__8875_8975 = G__8980;
chunk__8876_8976 = G__8981;
count__8877_8977 = G__8982;
i__8878_8978 = G__8983;
continue;
}
} else
{var temp__4092__auto___8984 = cljs.core.seq.call(null,seq__8875_8975);if(temp__4092__auto___8984)
{var seq__8875_8985__$1 = temp__4092__auto___8984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8875_8985__$1))
{var c__7119__auto___8986 = cljs.core.chunk_first.call(null,seq__8875_8985__$1);{
var G__8987 = cljs.core.chunk_rest.call(null,seq__8875_8985__$1);
var G__8988 = c__7119__auto___8986;
var G__8989 = cljs.core.count.call(null,c__7119__auto___8986);
var G__8990 = 0;
seq__8875_8975 = G__8987;
chunk__8876_8976 = G__8988;
count__8877_8977 = G__8989;
i__8878_8978 = G__8990;
continue;
}
} else
{var bar_8991 = cljs.core.first.call(null,seq__8875_8985__$1);lt.util.dom.remove_class.call(null,bar_8991,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.add_class.call(null,bar_8991,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__8992 = cljs.core.next.call(null,seq__8875_8985__$1);
var G__8993 = null;
var G__8994 = 0;
var G__8995 = 0;
seq__8875_8975 = G__8992;
chunk__8876_8976 = G__8993;
count__8877_8977 = G__8994;
i__8878_8978 = G__8995;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.langs.julia.profiler.callback.call(null,((function (bars){
return (function (){var seq__8879 = cljs.core.seq.call(null,bars);var chunk__8880 = null;var count__8881 = 0;var i__8882 = 0;while(true){
if((i__8882 < count__8881))
{var bar = cljs.core._nth.call(null,chunk__8880,i__8882);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.remove_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__8996 = seq__8879;
var G__8997 = chunk__8880;
var G__8998 = count__8881;
var G__8999 = (i__8882 + 1);
seq__8879 = G__8996;
chunk__8880 = G__8997;
count__8881 = G__8998;
i__8882 = G__8999;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8879);if(temp__4092__auto__)
{var seq__8879__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8879__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8879__$1);{
var G__9000 = cljs.core.chunk_rest.call(null,seq__8879__$1);
var G__9001 = c__7119__auto__;
var G__9002 = cljs.core.count.call(null,c__7119__auto__);
var G__9003 = 0;
seq__8879 = G__9000;
chunk__8880 = G__9001;
count__8881 = G__9002;
i__8882 = G__9003;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__8879__$1);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.remove_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9004 = cljs.core.next.call(null,seq__8879__$1);
var G__9005 = null;
var G__9006 = 0;
var G__9007 = 0;
seq__8879 = G__9004;
chunk__8880 = G__9005;
count__8881 = G__9006;
i__8882 = G__9007;
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
lt.objs.langs.julia.profiler.animate_out = (function animate_out(){var seq__8887 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.dom_bars.call(null));var chunk__8888 = null;var count__8889 = 0;var i__8890 = 0;while(true){
if((i__8890 < count__8889))
{var bar = cljs.core._nth.call(null,chunk__8888,i__8890);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9008 = seq__8887;
var G__9009 = chunk__8888;
var G__9010 = count__8889;
var G__9011 = (i__8890 + 1);
seq__8887 = G__9008;
chunk__8888 = G__9009;
count__8889 = G__9010;
i__8890 = G__9011;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8887);if(temp__4092__auto__)
{var seq__8887__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8887__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8887__$1);{
var G__9012 = cljs.core.chunk_rest.call(null,seq__8887__$1);
var G__9013 = c__7119__auto__;
var G__9014 = cljs.core.count.call(null,c__7119__auto__);
var G__9015 = 0;
seq__8887 = G__9012;
chunk__8888 = G__9013;
count__8889 = G__9014;
i__8890 = G__9015;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__8887__$1);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9016 = cljs.core.next.call(null,seq__8887__$1);
var G__9017 = null;
var G__9018 = 0;
var G__9019 = 0;
seq__8887 = G__9016;
chunk__8888 = G__9017;
count__8889 = G__9018;
i__8890 = G__9019;
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
var res_obj_9020 = lt.objs.langs.julia.util.widget.call(null,editor,(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(res) - 1),new cljs.core.Keyword(null,"underline","underline",4281907774));lt.objs.langs.julia.profiler.listen_BANG_.call(null,res_obj_9020);
lt.object.add_tags.call(null,res_obj_9020,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"julia.profile-result","julia.profile-result",1163667816)], null));
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
var set_gutter_node__delegate = function (ed,line,p__8036){var vec__8038 = p__8036;var node = cljs.core.nth.call(null,vec__8038,0,null);return lt.objs.editor.__GT_cm_ed.call(null,ed).setGutterMarker((line - 1),"CodeMirror-linenumbers",node);
};
var set_gutter_node = function (ed,line,var_args){
var p__8036 = null;if (arguments.length > 2) {
  p__8036 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_gutter_node__delegate.call(this,ed,line,p__8036);};
set_gutter_node.cljs$lang$maxFixedArity = 2;
set_gutter_node.cljs$lang$applyTo = (function (arglist__8049){
var ed = cljs.core.first(arglist__8049);
arglist__8049 = cljs.core.next(arglist__8049);
var line = cljs.core.first(arglist__8049);
var p__8036 = cljs.core.rest(arglist__8049);
return set_gutter_node__delegate(ed,line,p__8036);
});
set_gutter_node.cljs$core$IFn$_invoke$arity$variadic = set_gutter_node__delegate;
return set_gutter_node;
})()
;
lt.objs.breakpoint.show_gutter_menu = (function show_gutter_menu(ed,l,e){var items_8050 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",1119910592),lt.object.raise_reduce.call(null,ed,new cljs.core.Keyword(null,"gutter-menu+","gutter-menu+",521043692),cljs.core.PersistentVector.EMPTY,l));lt.objs.menu.show_menu.call(null,lt.objs.menu.menu.call(null,items_8050),e.clientX,e.clientY);
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
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.eval')) {
goog.provide('lt.objs.langs.julia.eval');
goog.require('cljs.core');
goog.require('lt.objs.highlights');
goog.require('lt.objs.langs.julia.util');
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
lt.objs.langs.julia.eval.__BEH__eval__DOT__one = (function __BEH__eval__DOT__one(editor){var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null));lt.objs.notifos.working.call(null);
return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"start","start",1123661780),lt.objs.langs.julia.util.cursor.call(null,editor,"start"),new cljs.core.Keyword(null,"end","end",1014004813),lt.objs.langs.julia.util.cursor.call(null,editor,"end"),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.eval","eval.one","lt.objs.langs.julia.eval/eval.one",4466424305),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.eval.__BEH__eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.objs.langs.julia.eval.__BEH__eval__DOT__all = (function __BEH__eval__DOT__all(editor){var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null));lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"clear-inline-results","clear-inline-results",1542062004));
lt.objs.notifos.working.call(null);
return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"editor.eval.julia.all","editor.eval.julia.all",1138937549),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.eval","eval.all","lt.objs.langs.julia.eval/eval.all",4466413240),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.eval.__BEH__eval__DOT__all,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.objs.langs.julia.eval.__BEH__result = (function __BEH__result(editor,res){lt.objs.notifos.done_working.call(null);
var val = (cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469)))?crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.julia.result","div.julia.result",3981322241),crate.core.raw.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res))], null)):new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));var scripts = (cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469)))?lt.objs.langs.julia.util.get_scripts.call(null,val):null);if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469))))
{lt.objs.file_links.process_BANG_.call(null,val);
} else
{}
lt.object.raise.call(null,editor,(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"under","under",1125332554)))?new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758):new cljs.core.Keyword(null,"editor.result","editor.result",4030217008)),val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(res) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(res) - 1)], null));
if(cljs.core.truth_(scripts))
{return lt.objs.langs.julia.util.eval_scripts.call(null,scripts);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.eval","result","lt.objs.langs.julia.eval/result",3379654010),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.eval.__BEH__result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.result","julia.result",4253994436),null], null), null));
lt.objs.langs.julia.eval.get_error_line = (function get_error_line(link){var vec__8666 = cljs.core.re_find.call(null,lt.objs.file_links.url_pattern,lt.objs.file_links.data_file.call(null,link));var _ = cljs.core.nth.call(null,vec__8666,0,null);var file = cljs.core.nth.call(null,vec__8666,1,null);var line = cljs.core.nth.call(null,vec__8666,2,null);if(cljs.core.truth_((function (){var and__6359__auto__ = file;if(cljs.core.truth_(and__6359__auto__))
{return line;
} else
{return and__6359__auto__;
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
return lt.object.raise.call(null,lt.objs.langs.julia.eval.error_lines,new cljs.core.Keyword(null,"listen","listen",4206362937),lt.objs.langs.julia.util.widget.call(null,editor,line));
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
lt.objs.langs.julia.completions.__BEH__update_hints = (function __BEH__update_hints(editor,p__8559){var map__8561 = p__8559;var map__8561__$1 = ((cljs.core.seq_QMARK_.call(null,map__8561))?cljs.core.apply.call(null,cljs.core.hash_map,map__8561):map__8561);var res = map__8561__$1;var pattern = cljs.core.get.call(null,map__8561__$1,new cljs.core.Keyword(null,"pattern","pattern",4517781250));var notextual = cljs.core.get.call(null,map__8561__$1,new cljs.core.Keyword(null,"notextual","notextual",2817977764));var hints = cljs.core.get.call(null,map__8561__$1,new cljs.core.Keyword(null,"hints","hints",1113187902));lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token-pattern","token-pattern",4483347246),(cljs.core.truth_(pattern)?(new RegExp([cljs.core.str(pattern),cljs.core.str("$")].join(''))):null)], null));
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
mathjax_queue.cljs$lang$applyTo = (function (arglist__8312){
var args = cljs.core.seq(arglist__8312);
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
lt.plugins.touchdown.editor_for_file = (function editor_for_file(file){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8301_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8301_SHARP_))),file);
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
lt.objs.langs.julia.module.__GT_module_str = (function __GT_module_str(p__8677){var map__8685 = p__8677;var map__8685__$1 = ((cljs.core.seq_QMARK_.call(null,map__8685))?cljs.core.apply.call(null,cljs.core.hash_map,map__8685):map__8685);var module = cljs.core.get.call(null,map__8685__$1,new cljs.core.Keyword(null,"module","module",4240087518));var e__7952__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.module.clickable","span.module.clickable",3384694646),[cljs.core.str(module),cljs.core.str("\t")].join('')], null));var seq__8686_8708 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7952__auto__,map__8685,map__8685__$1,module){
return (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"julia.set-module","julia.set-module",3617383774));
});})(e__7952__auto__,map__8685,map__8685__$1,module))
], null)));var chunk__8687_8709 = null;var count__8688_8710 = 0;var i__8689_8711 = 0;while(true){
if((i__8689_8711 < count__8688_8710))
{var vec__8690_8712 = cljs.core._nth.call(null,chunk__8687_8709,i__8689_8711);var ev__7953__auto___8713 = cljs.core.nth.call(null,vec__8690_8712,0,null);var func__7954__auto___8714 = cljs.core.nth.call(null,vec__8690_8712,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8713,func__7954__auto___8714);
{
var G__8715 = seq__8686_8708;
var G__8716 = chunk__8687_8709;
var G__8717 = count__8688_8710;
var G__8718 = (i__8689_8711 + 1);
seq__8686_8708 = G__8715;
chunk__8687_8709 = G__8716;
count__8688_8710 = G__8717;
i__8689_8711 = G__8718;
continue;
}
} else
{var temp__4092__auto___8719 = cljs.core.seq.call(null,seq__8686_8708);if(temp__4092__auto___8719)
{var seq__8686_8720__$1 = temp__4092__auto___8719;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8686_8720__$1))
{var c__7119__auto___8721 = cljs.core.chunk_first.call(null,seq__8686_8720__$1);{
var G__8722 = cljs.core.chunk_rest.call(null,seq__8686_8720__$1);
var G__8723 = c__7119__auto___8721;
var G__8724 = cljs.core.count.call(null,c__7119__auto___8721);
var G__8725 = 0;
seq__8686_8708 = G__8722;
chunk__8687_8709 = G__8723;
count__8688_8710 = G__8724;
i__8689_8711 = G__8725;
continue;
}
} else
{var vec__8691_8726 = cljs.core.first.call(null,seq__8686_8720__$1);var ev__7953__auto___8727 = cljs.core.nth.call(null,vec__8691_8726,0,null);var func__7954__auto___8728 = cljs.core.nth.call(null,vec__8691_8726,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8727,func__7954__auto___8728);
{
var G__8729 = cljs.core.next.call(null,seq__8686_8720__$1);
var G__8730 = null;
var G__8731 = 0;
var G__8732 = 0;
seq__8686_8708 = G__8729;
chunk__8687_8709 = G__8730;
count__8688_8710 = G__8731;
i__8689_8711 = G__8732;
continue;
}
}
} else
{}
}
break;
}
return e__7952__auto__;
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
var get_module__delegate = function (editor,p__8692){var vec__8694 = p__8692;var client = cljs.core.nth.call(null,vec__8694,0,null);var temp__4092__auto__ = (function (){var or__6371__auto__ = client;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
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
var p__8692 = null;if (arguments.length > 1) {
  p__8692 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get_module__delegate.call(this,editor,p__8692);};
get_module.cljs$lang$maxFixedArity = 1;
get_module.cljs$lang$applyTo = (function (arglist__8733){
var editor = cljs.core.first(arglist__8733);
var p__8692 = cljs.core.rest(arglist__8733);
return get_module__delegate(editor,p__8692);
});
get_module.cljs$core$IFn$_invoke$arity$variadic = get_module__delegate;
return get_module;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","get-module","lt.objs.langs.julia.module/get-module",2880297552),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.get_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null,new cljs.core.Keyword(null,"active","active",3885920888),null,new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","get-module-on-connect","lt.objs.langs.julia.module/get-module-on-connect",3837887435),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.get_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),null], null), null));
lt.objs.langs.julia.module.__BEH__set_module = (function __BEH__set_module(editor,module,force){if(cljs.core.truth_((function (){var or__6371__auto__ = force;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.not.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","forced","lt.objs.langs.julia.module/forced",3467050042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));
}
})()))
{lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lt.objs.langs.julia.module","module","lt.objs.langs.julia.module/module",3266506741),module,new cljs.core.Keyword("lt.objs.langs.julia.module","forced","lt.objs.langs.julia.module/forced",3467050042),force], null));
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"module-update","module-update",2454986428));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","set-module","lt.objs.langs.julia.module/set-module",956127132),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.__BEH__set_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.set-module","julia.set-module",3617383774),null], null), null));
lt.objs.langs.julia.module.__BEH__set_modules = (function __BEH__set_modules(julia,p__8695){var map__8697 = p__8695;var map__8697__$1 = ((cljs.core.seq_QMARK_.call(null,map__8697))?cljs.core.apply.call(null,cljs.core.hash_map,map__8697):map__8697);var modules = cljs.core.get.call(null,map__8697__$1,new cljs.core.Keyword(null,"modules","modules",2241338105));lt.object.merge_BANG_.call(null,julia,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.module","modules","lt.objs.langs.julia.module/modules",1256091916),cljs.core.sort.call(null,modules)], null));
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
lt.objs.langs.julia.module.set_module = (function set_module(ed,module){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"julia.set-module","julia.set-module",3617383774),module,true);
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