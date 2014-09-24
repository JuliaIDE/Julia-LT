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
var widget__delegate = function (editor,line,p__9331){var vec__9333 = p__9331;var type = cljs.core.nth.call(null,vec__9333,0,null);return cljs.core.get.call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.editor.line_handle.call(null,editor,(line - 1)),(function (){var or__6371__auto__ = type;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return new cljs.core.Keyword(null,"inline","inline",4124874251);
}
})()], null));
};
var widget = function (editor,line,var_args){
var p__9331 = null;if (arguments.length > 2) {
  p__9331 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return widget__delegate.call(this,editor,line,p__9331);};
widget.cljs$lang$maxFixedArity = 2;
widget.cljs$lang$applyTo = (function (arglist__9353){
var editor = cljs.core.first(arglist__9353);
arglist__9353 = cljs.core.next(arglist__9353);
var line = cljs.core.first(arglist__9353);
var p__9331 = cljs.core.rest(arglist__9353);
return widget__delegate(editor,line,p__9331);
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
return (function (p1__9334_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"text/javascript",null], null), null),p1__9334_SHARP_.type);
});})(scripts))
,scripts));
});
lt.objs.langs.julia.util.eval_scripts = (function eval_scripts(scripts){var seq__9339 = cljs.core.seq.call(null,scripts);var chunk__9340 = null;var count__9341 = 0;var i__9342 = 0;while(true){
if((i__9342 < count__9341))
{var script = cljs.core._nth.call(null,chunk__9340,i__9342);window.eval(script);
{
var G__9354 = seq__9339;
var G__9355 = chunk__9340;
var G__9356 = count__9341;
var G__9357 = (i__9342 + 1);
seq__9339 = G__9354;
chunk__9340 = G__9355;
count__9341 = G__9356;
i__9342 = G__9357;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9339);if(temp__4092__auto__)
{var seq__9339__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9339__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__9339__$1);{
var G__9358 = cljs.core.chunk_rest.call(null,seq__9339__$1);
var G__9359 = c__7119__auto__;
var G__9360 = cljs.core.count.call(null,c__7119__auto__);
var G__9361 = 0;
seq__9339 = G__9358;
chunk__9340 = G__9359;
count__9341 = G__9360;
i__9342 = G__9361;
continue;
}
} else
{var script = cljs.core.first.call(null,seq__9339__$1);window.eval(script);
{
var G__9362 = cljs.core.next.call(null,seq__9339__$1);
var G__9363 = null;
var G__9364 = 0;
var G__9365 = 0;
seq__9339 = G__9362;
chunk__9340 = G__9363;
count__9341 = G__9364;
i__9342 = G__9365;
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
lt.objs.langs.julia.__BEH__commands = (function __BEH__commands(editor,res){var pred__9375 = cljs.core._EQ_;var expr__9376 = res.call(null,new cljs.core.Keyword(null,"cmd","cmd",1014002860));if(cljs.core.truth_(pred__9375.call(null,"popup",expr__9376)))
{return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),res.call(null,new cljs.core.Keyword(null,"header","header",4087600639)),new cljs.core.Keyword(null,"body","body",1016933652),res.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"buttons","buttons",1255256819),res.call(null,new cljs.core.Keyword(null,"buttons","buttons",1255256819))], null));
} else
{if(cljs.core.truth_(pred__9375.call(null,"print",expr__9376)))
{return lt.objs.console.log.call(null,res.call(null,new cljs.core.Keyword(null,"value","value",1125876963)),(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))?"error":null));
} else
{if(cljs.core.truth_(pred__9375.call(null,"done",expr__9376)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659))))
{return lt.objs.notifos.done_working.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)));
} else
{return lt.objs.notifos.done_working.call(null);
}
} else
{if(cljs.core.truth_(pred__9375.call(null,"notify",expr__9376)))
{return lt.objs.notifos.set_msg_BANG_.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),res.call(null,new cljs.core.Keyword(null,"class","class",1108647146))], null));
} else
{if(cljs.core.truth_(pred__9375.call(null,"console",expr__9376)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469))))
{var val = crate.core.raw.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));var scripts = lt.objs.langs.julia.util.get_scripts.call(null,val);lt.objs.console.verbatim.call(null,val);
return lt.objs.langs.julia.util.eval_scripts.call(null,scripts);
} else
{return lt.objs.console.log.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));
}
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__9376)].join('')));
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","dark-theme","lt.objs.langs.julia/dark-theme",2540019457),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__dark_theme,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Use a dark theme",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.objs.langs.julia.__BEH__light_theme = (function __BEH__light_theme(app){return lt.util.dom.remove_class.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"julia-dark","julia-dark",1404757724));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","light-theme","lt.objs.langs.julia/light-theme",2033198497),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__light_theme,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Use a light theme",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
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
goog.require('lt.objs.sidebar.command');
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
lt.objs.langs.julia.proc.__BEH__flush = (function __BEH__flush(this$){if(cljs.core.truth_(cljs.core.deref.call(null,this$)))
{var temp__4092__auto___9052 = cljs.core.not_empty.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633)));if(cljs.core.truth_(temp__4092__auto___9052))
{var out_9053 = temp__4092__auto___9052;lt.objs.console.log.call(null,out_9053);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633),""], null));
} else
{}
var temp__4092__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106)));if(cljs.core.truth_(temp__4092__auto__))
{var out = temp__4092__auto__;lt.objs.console.log.call(null,out,"error");
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106),""], null));
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","flush","lt.objs.langs.julia.proc/flush",4458423382),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__flush,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null,new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),500);
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connecting-notifier","lt.objs.langs.julia.proc/connecting-notifier",4154824301),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.connection-watch","julia.connection-watch",2982527111),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-out","lt.objs.langs.julia.proc/proc-out",3354081193),new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-error","lt.objs.langs.julia.proc/proc-error",3670223651),new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-exit","lt.objs.langs.julia.proc/proc-exit",3482355335),new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-out","lt.objs.langs.julia.proc/pipe-out",2913224961),new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-err","lt.objs.langs.julia.proc/pipe-err",2913231640),new cljs.core.Keyword("lt.objs.langs.julia.proc","flush","lt.objs.langs.julia.proc/flush",4458423382)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client","client",3951159101),client], null));
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
var connect__delegate = function (p__9021){var map__9023 = p__9021;var map__9023__$1 = ((cljs.core.seq_QMARK_.call(null,map__9023))?cljs.core.apply.call(null,cljs.core.hash_map,map__9023):map__9023);var complain = cljs.core.get.call(null,map__9023__$1,new cljs.core.Keyword(null,"complain","complain",4709422171),true);var notify = cljs.core.get.call(null,map__9023__$1,new cljs.core.Keyword(null,"notify","notify",4269181627),false);if(cljs.core.truth_(notify))
{lt.objs.notifos.working.call(null,"Spinning up Julia...");
} else
{}
var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"julia.client","julia.client",3830708594));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connecting-notifier","lt.objs.langs.julia.proc/connecting-notifier",4154824301),client);lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"notify","notify",4269181627),notify,new cljs.core.Keyword(null,"complain","complain",4709422171),complain], null));
lt.objs.langs.julia.proc.with_dir.call(null,lt.objs.files.home.call(null),((function (client,obj,map__9023,map__9023__$1,complain,notify){
return (function (){return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),lt.objs.langs.julia.proc.julia_path.call(null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.langs.julia.proc.init,lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client)], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});})(client,obj,map__9023,map__9023__$1,complain,notify))
);
lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.first.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))], null));
lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"julia.set-global-client","julia.set-global-client",3983623463),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"only","only",1017320222),lt.objs.langs.julia.julia);
lt.objs.langs.julia.proc.set_default_client.call(null,client);
return client;
};
var connect = function (var_args){
var p__9021 = null;if (arguments.length > 0) {
  p__9021 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return connect__delegate.call(this,p__9021);};
connect.cljs$lang$maxFixedArity = 0;
connect.cljs$lang$applyTo = (function (arglist__9054){
var p__9021 = cljs.core.seq(arglist__9054);
return connect__delegate(p__9021);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
lt.objs.langs.julia.proc.connect_manual = (function connect_manual(){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"julia.client","julia.client",3830708594));lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Connect Julia to Light Table",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("@async Jewel.server("),cljs.core.str(lt.objs.clients.tcp.port),cljs.core.str(", "),cljs.core.str(lt.objs.clients.__GT_id.call(null,client)),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null));
lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"julia.set-global-client","julia.set-global-client",3983623463),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"only","only",1017320222),lt.objs.langs.julia.julia);
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
var seq__9028 = cljs.core.seq.call(null,lt.objs.editor.pool.get_all.call(null));var chunk__9029 = null;var count__9030 = 0;var i__9031 = 0;while(true){
if((i__9031 < count__9030))
{var editor = cljs.core._nth.call(null,chunk__9029,i__9031);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),client);
{
var G__9055 = seq__9028;
var G__9056 = chunk__9029;
var G__9057 = count__9030;
var G__9058 = (i__9031 + 1);
seq__9028 = G__9055;
chunk__9029 = G__9056;
count__9030 = G__9057;
i__9031 = G__9058;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9028);if(temp__4092__auto__)
{var seq__9028__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9028__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__9028__$1);{
var G__9059 = cljs.core.chunk_rest.call(null,seq__9028__$1);
var G__9060 = c__7119__auto__;
var G__9061 = cljs.core.count.call(null,c__7119__auto__);
var G__9062 = 0;
seq__9028 = G__9059;
chunk__9029 = G__9060;
count__9030 = G__9061;
i__9031 = G__9062;
continue;
}
} else
{var editor = cljs.core.first.call(null,seq__9028__$1);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),client);
{
var G__9063 = cljs.core.next.call(null,seq__9028__$1);
var G__9064 = null;
var G__9065 = 0;
var G__9066 = 0;
seq__9028 = G__9063;
chunk__9029 = G__9064;
count__9030 = G__9065;
i__9031 = G__9066;
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
lt.objs.langs.julia.proc.connect_client = (function connect_client(editor,client){if(cljs.core.truth_((function (){var G__9033 = cljs.core.deref.call(null,editor);var G__9033__$1 = (((G__9033 == null))?null:new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(G__9033));var G__9033__$2 = (((G__9033__$1 == null))?null:new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(G__9033__$1));var G__9033__$3 = (((G__9033__$2 == null))?null:cljs.core.deref.call(null,G__9033__$2));var G__9033__$4 = (((G__9033__$3 == null))?null:new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(G__9033__$3));return G__9033__$4;
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
lt.objs.langs.julia.proc.get_proc = (function get_proc(ed){var or__6371__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.map.call(null,cljs.core.deref,cljs.core.vals.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))))));if(or__6371__auto__)
{return or__6371__auto__;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.julia.proc.default_client.call(null)))], null);
}
});
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.interrupt-clients","editor.interrupt-clients",3910900175),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Interrupt the current client",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var seq__9034_9067 = cljs.core.seq.call(null,lt.objs.langs.julia.proc.get_proc.call(null,ed));var chunk__9035_9068 = null;var count__9036_9069 = 0;var i__9037_9070 = 0;while(true){
if((i__9037_9070 < count__9036_9069))
{var proc_9071 = cljs.core._nth.call(null,chunk__9035_9068,i__9037_9070);proc_9071.kill("SIGINT");
{
var G__9072 = seq__9034_9067;
var G__9073 = chunk__9035_9068;
var G__9074 = count__9036_9069;
var G__9075 = (i__9037_9070 + 1);
seq__9034_9067 = G__9072;
chunk__9035_9068 = G__9073;
count__9036_9069 = G__9074;
i__9037_9070 = G__9075;
continue;
}
} else
{var temp__4092__auto___9076__$1 = cljs.core.seq.call(null,seq__9034_9067);if(temp__4092__auto___9076__$1)
{var seq__9034_9077__$1 = temp__4092__auto___9076__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9034_9077__$1))
{var c__7119__auto___9078 = cljs.core.chunk_first.call(null,seq__9034_9077__$1);{
var G__9079 = cljs.core.chunk_rest.call(null,seq__9034_9077__$1);
var G__9080 = c__7119__auto___9078;
var G__9081 = cljs.core.count.call(null,c__7119__auto___9078);
var G__9082 = 0;
seq__9034_9067 = G__9079;
chunk__9035_9068 = G__9080;
count__9036_9069 = G__9081;
i__9037_9070 = G__9082;
continue;
}
} else
{var proc_9083 = cljs.core.first.call(null,seq__9034_9077__$1);proc_9083.kill("SIGINT");
{
var G__9084 = cljs.core.next.call(null,seq__9034_9077__$1);
var G__9085 = null;
var G__9086 = 0;
var G__9087 = 0;
seq__9034_9067 = G__9084;
chunk__9035_9068 = G__9085;
count__9036_9069 = G__9086;
i__9037_9070 = G__9087;
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
{var ed = temp__4092__auto__;var seq__9038_9088 = cljs.core.seq.call(null,lt.objs.langs.julia.proc.get_proc.call(null,ed));var chunk__9039_9089 = null;var count__9040_9090 = 0;var i__9041_9091 = 0;while(true){
if((i__9041_9091 < count__9040_9090))
{var proc_9092 = cljs.core._nth.call(null,chunk__9039_9089,i__9041_9091);proc_9092.kill();
{
var G__9093 = seq__9038_9088;
var G__9094 = chunk__9039_9089;
var G__9095 = count__9040_9090;
var G__9096 = (i__9041_9091 + 1);
seq__9038_9088 = G__9093;
chunk__9039_9089 = G__9094;
count__9040_9090 = G__9095;
i__9041_9091 = G__9096;
continue;
}
} else
{var temp__4092__auto___9097__$1 = cljs.core.seq.call(null,seq__9038_9088);if(temp__4092__auto___9097__$1)
{var seq__9038_9098__$1 = temp__4092__auto___9097__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9038_9098__$1))
{var c__7119__auto___9099 = cljs.core.chunk_first.call(null,seq__9038_9098__$1);{
var G__9100 = cljs.core.chunk_rest.call(null,seq__9038_9098__$1);
var G__9101 = c__7119__auto___9099;
var G__9102 = cljs.core.count.call(null,c__7119__auto___9099);
var G__9103 = 0;
seq__9038_9088 = G__9100;
chunk__9039_9089 = G__9101;
count__9040_9090 = G__9102;
i__9041_9091 = G__9103;
continue;
}
} else
{var proc_9104 = cljs.core.first.call(null,seq__9038_9098__$1);proc_9104.kill();
{
var G__9105 = cljs.core.next.call(null,seq__9038_9098__$1);
var G__9106 = null;
var G__9107 = 0;
var G__9108 = 0;
seq__9038_9088 = G__9105;
chunk__9039_9089 = G__9106;
count__9040_9090 = G__9107;
i__9041_9091 = G__9108;
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
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.objs.julia.commands.cb_id = cljs.core.atom.call(null,0);
lt.objs.julia.commands.cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.objs.julia.commands.__BEH__get_block = (function __BEH__get_block(editor,cb){var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.block","editor.block",3174842430),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null));var id = cljs.core.swap_BANG_.call(null,lt.objs.julia.commands.cb_id,cljs.core.inc);cljs.core.swap_BANG_.call(null,lt.objs.julia.commands.cbs,cljs.core.assoc,id,cb);
return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"editor.block","editor.block",3174842430),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor)) + 1),new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.julia.commands","get-block","lt.objs.julia.commands/get-block",4604158297),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.julia.commands.__BEH__get_block,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"get-block","get-block",713229000),null], null), null));
lt.objs.julia.commands.__BEH__return_block = (function __BEH__return_block(editor,p__8683){var map__8685 = p__8683;var map__8685__$1 = ((cljs.core.seq_QMARK_.call(null,map__8685))?cljs.core.apply.call(null,cljs.core.hash_map,map__8685):map__8685);var block = cljs.core.get.call(null,map__8685__$1,new cljs.core.Keyword(null,"block","block",1107736575));var bounds = cljs.core.get.call(null,map__8685__$1,new cljs.core.Keyword(null,"bounds","bounds",3925666343));var id = cljs.core.get.call(null,map__8685__$1,new cljs.core.Keyword(null,"id","id",1013907597));var cb = cljs.core.deref.call(null,lt.objs.julia.commands.cbs).call(null,id);cljs.core.swap_BANG_.call(null,lt.objs.julia.commands.cbs,cljs.core.dissoc,id);
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
return (function (p__8686,block){var vec__8687 = p__8686;var start = cljs.core.nth.call(null,vec__8687,0,null);var end = cljs.core.nth.call(null,vec__8687,1,null);return lt.objs.editor.set_selection.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(start - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(end - 1)], null));
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
var this$__$1 = this;var seq__8508 = cljs.core.seq.call(null,self__.watches);var chunk__8509 = null;var count__8510 = 0;var i__8511 = 0;while(true){
if((i__8511 < count__8510))
{var vec__8512 = cljs.core._nth.call(null,chunk__8509,i__8511);var key__$1 = cljs.core.nth.call(null,vec__8512,0,null);var f = cljs.core.nth.call(null,vec__8512,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8587 = seq__8508;
var G__8588 = chunk__8509;
var G__8589 = count__8510;
var G__8590 = (i__8511 + 1);
seq__8508 = G__8587;
chunk__8509 = G__8588;
count__8510 = G__8589;
i__8511 = G__8590;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8508);if(temp__4092__auto__)
{var seq__8508__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8508__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8508__$1);{
var G__8591 = cljs.core.chunk_rest.call(null,seq__8508__$1);
var G__8592 = c__7119__auto__;
var G__8593 = cljs.core.count.call(null,c__7119__auto__);
var G__8594 = 0;
seq__8508 = G__8591;
chunk__8509 = G__8592;
count__8510 = G__8593;
i__8511 = G__8594;
continue;
}
} else
{var vec__8513 = cljs.core.first.call(null,seq__8508__$1);var key__$1 = cljs.core.nth.call(null,vec__8513,0,null);var f = cljs.core.nth.call(null,vec__8513,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8595 = cljs.core.next.call(null,seq__8508__$1);
var G__8596 = null;
var G__8597 = 0;
var G__8598 = 0;
seq__8508 = G__8595;
chunk__8509 = G__8596;
count__8510 = G__8597;
i__8511 = G__8598;
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
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__8515 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__8515,0,null);var path__$2 = cljs.core.nth.call(null,vec__8515,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__8515,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__8515,atm__$1,path__$2,k,sa))
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
var G__8599__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8599 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__8599__delegate.call(this,sa,f,x,y,z,more);};
G__8599.cljs$lang$maxFixedArity = 5;
G__8599.cljs$lang$applyTo = (function (arglist__8600){
var sa = cljs.core.first(arglist__8600);
arglist__8600 = cljs.core.next(arglist__8600);
var f = cljs.core.first(arglist__8600);
arglist__8600 = cljs.core.next(arglist__8600);
var x = cljs.core.first(arglist__8600);
arglist__8600 = cljs.core.next(arglist__8600);
var y = cljs.core.first(arglist__8600);
arglist__8600 = cljs.core.next(arglist__8600);
var z = cljs.core.first(arglist__8600);
var more = cljs.core.rest(arglist__8600);
return G__8599__delegate(sa,f,x,y,z,more);
});
G__8599.cljs$core$IFn$_invoke$arity$variadic = G__8599__delegate;
return G__8599;
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
crate.binding.computable = (function (){var obj8517 = {};return obj8517;
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
var this$__$1 = this;var seq__8518 = cljs.core.seq.call(null,self__.watches);var chunk__8519 = null;var count__8520 = 0;var i__8521 = 0;while(true){
if((i__8521 < count__8520))
{var vec__8522 = cljs.core._nth.call(null,chunk__8519,i__8521);var key__$1 = cljs.core.nth.call(null,vec__8522,0,null);var f = cljs.core.nth.call(null,vec__8522,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8601 = seq__8518;
var G__8602 = chunk__8519;
var G__8603 = count__8520;
var G__8604 = (i__8521 + 1);
seq__8518 = G__8601;
chunk__8519 = G__8602;
count__8520 = G__8603;
i__8521 = G__8604;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8518);if(temp__4092__auto__)
{var seq__8518__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8518__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8518__$1);{
var G__8605 = cljs.core.chunk_rest.call(null,seq__8518__$1);
var G__8606 = c__7119__auto__;
var G__8607 = cljs.core.count.call(null,c__7119__auto__);
var G__8608 = 0;
seq__8518 = G__8605;
chunk__8519 = G__8606;
count__8520 = G__8607;
i__8521 = G__8608;
continue;
}
} else
{var vec__8523 = cljs.core.first.call(null,seq__8518__$1);var key__$1 = cljs.core.nth.call(null,vec__8523,0,null);var f = cljs.core.nth.call(null,vec__8523,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8609 = cljs.core.next.call(null,seq__8518__$1);
var G__8610 = null;
var G__8611 = 0;
var G__8612 = 0;
seq__8518 = G__8609;
chunk__8519 = G__8610;
count__8520 = G__8611;
i__8521 = G__8612;
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
var seq__8528_8613 = cljs.core.seq.call(null,atms);var chunk__8529_8614 = null;var count__8530_8615 = 0;var i__8531_8616 = 0;while(true){
if((i__8531_8616 < count__8530_8615))
{var atm_8617 = cljs.core._nth.call(null,chunk__8529_8614,i__8531_8616);crate.binding._depend.call(null,neue,atm_8617);
{
var G__8618 = seq__8528_8613;
var G__8619 = chunk__8529_8614;
var G__8620 = count__8530_8615;
var G__8621 = (i__8531_8616 + 1);
seq__8528_8613 = G__8618;
chunk__8529_8614 = G__8619;
count__8530_8615 = G__8620;
i__8531_8616 = G__8621;
continue;
}
} else
{var temp__4092__auto___8622 = cljs.core.seq.call(null,seq__8528_8613);if(temp__4092__auto___8622)
{var seq__8528_8623__$1 = temp__4092__auto___8622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8528_8623__$1))
{var c__7119__auto___8624 = cljs.core.chunk_first.call(null,seq__8528_8623__$1);{
var G__8625 = cljs.core.chunk_rest.call(null,seq__8528_8623__$1);
var G__8626 = c__7119__auto___8624;
var G__8627 = cljs.core.count.call(null,c__7119__auto___8624);
var G__8628 = 0;
seq__8528_8613 = G__8625;
chunk__8529_8614 = G__8626;
count__8530_8615 = G__8627;
i__8531_8616 = G__8628;
continue;
}
} else
{var atm_8629 = cljs.core.first.call(null,seq__8528_8623__$1);crate.binding._depend.call(null,neue,atm_8629);
{
var G__8630 = cljs.core.next.call(null,seq__8528_8623__$1);
var G__8631 = null;
var G__8632 = 0;
var G__8633 = 0;
seq__8528_8613 = G__8630;
chunk__8529_8614 = G__8631;
count__8530_8615 = G__8632;
i__8531_8616 = G__8633;
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
crate.binding.bindable_coll = (function (){var obj8533 = {};return obj8533;
})();
crate.binding.bindable = (function (){var obj8535 = {};return obj8535;
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
var this$__$1 = this;var seq__8536 = cljs.core.seq.call(null,self__.watches);var chunk__8537 = null;var count__8538 = 0;var i__8539 = 0;while(true){
if((i__8539 < count__8538))
{var vec__8540 = cljs.core._nth.call(null,chunk__8537,i__8539);var key = cljs.core.nth.call(null,vec__8540,0,null);var f = cljs.core.nth.call(null,vec__8540,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8634 = seq__8536;
var G__8635 = chunk__8537;
var G__8636 = count__8538;
var G__8637 = (i__8539 + 1);
seq__8536 = G__8634;
chunk__8537 = G__8635;
count__8538 = G__8636;
i__8539 = G__8637;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8536);if(temp__4092__auto__)
{var seq__8536__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8536__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8536__$1);{
var G__8638 = cljs.core.chunk_rest.call(null,seq__8536__$1);
var G__8639 = c__7119__auto__;
var G__8640 = cljs.core.count.call(null,c__7119__auto__);
var G__8641 = 0;
seq__8536 = G__8638;
chunk__8537 = G__8639;
count__8538 = G__8640;
i__8539 = G__8641;
continue;
}
} else
{var vec__8541 = cljs.core.first.call(null,seq__8536__$1);var key = cljs.core.nth.call(null,vec__8541,0,null);var f = cljs.core.nth.call(null,vec__8541,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8642 = cljs.core.next.call(null,seq__8536__$1);
var G__8643 = null;
var G__8644 = 0;
var G__8645 = 0;
seq__8536 = G__8642;
chunk__8537 = G__8643;
count__8538 = G__8644;
i__8539 = G__8645;
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
return (function (_,___$1,___$2,p__8542){var vec__8543 = p__8542;var event = cljs.core.nth.call(null,vec__8543,0,null);var el = cljs.core.nth.call(null,vec__8543,1,null);var v = cljs.core.nth.call(null,vec__8543,2,null);return func.call(null,event,el,v);
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
__GT_path.cljs$lang$applyTo = (function (arglist__8646){
var bc = cljs.core.first(arglist__8646);
var segs = cljs.core.rest(arglist__8646);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__8552_8647 = cljs.core.seq.call(null,added);var chunk__8553_8648 = null;var count__8554_8649 = 0;var i__8555_8650 = 0;while(true){
if((i__8555_8650 < count__8554_8649))
{var a_8651 = cljs.core._nth.call(null,chunk__8553_8648,i__8555_8650);crate.binding.bc_add.call(null,bc,a_8651,a_8651);
{
var G__8652 = seq__8552_8647;
var G__8653 = chunk__8553_8648;
var G__8654 = count__8554_8649;
var G__8655 = (i__8555_8650 + 1);
seq__8552_8647 = G__8652;
chunk__8553_8648 = G__8653;
count__8554_8649 = G__8654;
i__8555_8650 = G__8655;
continue;
}
} else
{var temp__4092__auto___8656 = cljs.core.seq.call(null,seq__8552_8647);if(temp__4092__auto___8656)
{var seq__8552_8657__$1 = temp__4092__auto___8656;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8552_8657__$1))
{var c__7119__auto___8658 = cljs.core.chunk_first.call(null,seq__8552_8657__$1);{
var G__8659 = cljs.core.chunk_rest.call(null,seq__8552_8657__$1);
var G__8660 = c__7119__auto___8658;
var G__8661 = cljs.core.count.call(null,c__7119__auto___8658);
var G__8662 = 0;
seq__8552_8647 = G__8659;
chunk__8553_8648 = G__8660;
count__8554_8649 = G__8661;
i__8555_8650 = G__8662;
continue;
}
} else
{var a_8663 = cljs.core.first.call(null,seq__8552_8657__$1);crate.binding.bc_add.call(null,bc,a_8663,a_8663);
{
var G__8664 = cljs.core.next.call(null,seq__8552_8657__$1);
var G__8665 = null;
var G__8666 = 0;
var G__8667 = 0;
seq__8552_8647 = G__8664;
chunk__8553_8648 = G__8665;
count__8554_8649 = G__8666;
i__8555_8650 = G__8667;
continue;
}
}
} else
{}
}
break;
}
var seq__8556 = cljs.core.seq.call(null,removed);var chunk__8557 = null;var count__8558 = 0;var i__8559 = 0;while(true){
if((i__8559 < count__8558))
{var r = cljs.core._nth.call(null,chunk__8557,i__8559);crate.binding.bc_remove.call(null,bc,r);
{
var G__8668 = seq__8556;
var G__8669 = chunk__8557;
var G__8670 = count__8558;
var G__8671 = (i__8559 + 1);
seq__8556 = G__8668;
chunk__8557 = G__8669;
count__8558 = G__8670;
i__8559 = G__8671;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8556);if(temp__4092__auto__)
{var seq__8556__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8556__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8556__$1);{
var G__8672 = cljs.core.chunk_rest.call(null,seq__8556__$1);
var G__8673 = c__7119__auto__;
var G__8674 = cljs.core.count.call(null,c__7119__auto__);
var G__8675 = 0;
seq__8556 = G__8672;
chunk__8557 = G__8673;
count__8558 = G__8674;
i__8559 = G__8675;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8556__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__8676 = cljs.core.next.call(null,seq__8556__$1);
var G__8677 = null;
var G__8678 = 0;
var G__8679 = 0;
seq__8556 = G__8676;
chunk__8557 = G__8677;
count__8558 = G__8678;
i__8559 = G__8679;
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
var bound_coll__delegate = function (atm,p__8560){var vec__8563 = p__8560;var path = cljs.core.nth.call(null,vec__8563,0,null);var opts = cljs.core.nth.call(null,vec__8563,1,null);var vec__8564 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__8564,0,null);var opts__$1 = cljs.core.nth.call(null,vec__8564,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__8564,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8563,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__8564,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8563,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__8560 = null;if (arguments.length > 1) {
  p__8560 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__8560);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8680){
var atm = cljs.core.first(arglist__8680);
var p__8560 = cljs.core.rest(arglist__8680);
return bound_coll__delegate(atm,p__8560);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8565){var vec__8567 = p__8565;var opts = cljs.core.nth.call(null,vec__8567,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__8567,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__8567,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__8565 = null;if (arguments.length > 2) {
  p__8565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__8565);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8681){
var as = cljs.core.first(arglist__8681);
arglist__8681 = cljs.core.next(arglist__8681);
var atm = cljs.core.first(arglist__8681);
var p__8565 = cljs.core.rest(arglist__8681);
return map_bound__delegate(as,atm,p__8565);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__8569 = b;if(G__8569)
{var bit__7021__auto__ = null;if(cljs.core.truth_((function (){var or__6371__auto__ = bit__7021__auto__;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return G__8569.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8569.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8569);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8569);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__8571 = b;if(G__8571)
{var bit__7021__auto__ = null;if(cljs.core.truth_((function (){var or__6371__auto__ = bit__7021__auto__;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return G__8571.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8571.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8571);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8571);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__8573 = atm;if(G__8573)
{var bit__7021__auto__ = (G__8573.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7021__auto__) || (G__8573.cljs$core$IDeref$))
{return true;
} else
{if((!G__8573.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8573);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8573);
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
var bound__delegate = function (atm,p__8574){var vec__8576 = p__8574;var func = cljs.core.nth.call(null,vec__8576,0,null);var func__$1 = (function (){var or__6371__auto__ = func;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__8574 = null;if (arguments.length > 1) {
  p__8574 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__8574);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8682){
var atm = cljs.core.first(arglist__8682);
var p__8574 = cljs.core.rest(arglist__8682);
return bound__delegate(atm,p__8574);
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
lt.objs.langs.julia.browser.__BEH__set_objects = (function __BEH__set_objects(browser,p__8437){var map__8439 = p__8437;var map__8439__$1 = ((cljs.core.seq_QMARK_.call(null,map__8439))?cljs.core.apply.call(null,cljs.core.hash_map,map__8439):map__8439);var objs = cljs.core.get.call(null,map__8439__$1,new cljs.core.Keyword(null,"objs","objs",1017308622));return lt.object.merge_BANG_.call(null,browser,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"objs","objs",1017308622),objs], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.browser","set-objects","lt.objs.langs.julia.browser/set-objects",1694283112),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.browser.__BEH__set_objects,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update","update",4470025275),null], null), null));
lt.objs.langs.julia.browser.browser_ui = (function browser_ui(p__8440){var map__8456 = p__8440;var map__8456__$1 = ((cljs.core.seq_QMARK_.call(null,map__8456))?cljs.core.apply.call(null,cljs.core.hash_map,map__8456):map__8456);var objs = cljs.core.get.call(null,map__8456__$1,new cljs.core.Keyword(null,"objs","objs",1017308622));var e__7952__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.langs.julia.browser.join_theme.call(null,new cljs.core.Keyword(null,"div.CodeMirror","div.CodeMirror",3436950811)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.julia.browser","div.julia.browser",1862942824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.data-frame","table.data-frame",1770442524),(function (){var iter__7088__auto__ = ((function (map__8456,map__8456__$1,objs){
return (function iter__8457(s__8458){return (new cljs.core.LazySeq(null,((function (map__8456,map__8456__$1,objs){
return (function (){var s__8458__$1 = s__8458;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8458__$1);if(temp__4092__auto__)
{var s__8458__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8458__$2))
{var c__7086__auto__ = cljs.core.chunk_first.call(null,s__8458__$2);var size__7087__auto__ = cljs.core.count.call(null,c__7086__auto__);var b__8460 = cljs.core.chunk_buffer.call(null,size__7087__auto__);if((function (){var i__8459 = 0;while(true){
if((i__8459 < size__7087__auto__))
{var vec__8463 = cljs.core._nth.call(null,c__7086__auto__,i__8459);var k = cljs.core.nth.call(null,vec__8463,0,null);var v = cljs.core.nth.call(null,vec__8463,1,null);cljs.core.chunk_append.call(null,b__8460,lt.objs.langs.julia.browser.highlight.call(null,".variable",null,null,lt.objs.file_links.process_BANG_.call(null,lt.objs.langs.julia.browser.process_collapsible_BANG_.call(null,crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",4416891401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.variable","span.variable",2064274450),cljs.core.name.call(null,k)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),crate.core.raw.call(null,v)], null)], null))))));
{
var G__8482 = (i__8459 + 1);
i__8459 = G__8482;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8460),iter__8457.call(null,cljs.core.chunk_rest.call(null,s__8458__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8460),null);
}
} else
{var vec__8464 = cljs.core.first.call(null,s__8458__$2);var k = cljs.core.nth.call(null,vec__8464,0,null);var v = cljs.core.nth.call(null,vec__8464,1,null);return cljs.core.cons.call(null,lt.objs.langs.julia.browser.highlight.call(null,".variable",null,null,lt.objs.file_links.process_BANG_.call(null,lt.objs.langs.julia.browser.process_collapsible_BANG_.call(null,crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",4416891401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.variable","span.variable",2064274450),cljs.core.name.call(null,k)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),crate.core.raw.call(null,v)], null)], null))))),iter__8457.call(null,cljs.core.rest.call(null,s__8458__$2)));
}
} else
{return null;
}
break;
}
});})(map__8456,map__8456__$1,objs))
,null,null));
});})(map__8456,map__8456__$1,objs))
;return iter__7088__auto__.call(null,objs);
})()], null)], null)], null));var seq__8465_8483 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8466_8484 = null;var count__8467_8485 = 0;var i__8468_8486 = 0;while(true){
if((i__8468_8486 < count__8467_8485))
{var vec__8469_8487 = cljs.core._nth.call(null,chunk__8466_8484,i__8468_8486);var ev__7953__auto___8488 = cljs.core.nth.call(null,vec__8469_8487,0,null);var func__7954__auto___8489 = cljs.core.nth.call(null,vec__8469_8487,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8488,func__7954__auto___8489);
{
var G__8490 = seq__8465_8483;
var G__8491 = chunk__8466_8484;
var G__8492 = count__8467_8485;
var G__8493 = (i__8468_8486 + 1);
seq__8465_8483 = G__8490;
chunk__8466_8484 = G__8491;
count__8467_8485 = G__8492;
i__8468_8486 = G__8493;
continue;
}
} else
{var temp__4092__auto___8494 = cljs.core.seq.call(null,seq__8465_8483);if(temp__4092__auto___8494)
{var seq__8465_8495__$1 = temp__4092__auto___8494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8465_8495__$1))
{var c__7119__auto___8496 = cljs.core.chunk_first.call(null,seq__8465_8495__$1);{
var G__8497 = cljs.core.chunk_rest.call(null,seq__8465_8495__$1);
var G__8498 = c__7119__auto___8496;
var G__8499 = cljs.core.count.call(null,c__7119__auto___8496);
var G__8500 = 0;
seq__8465_8483 = G__8497;
chunk__8466_8484 = G__8498;
count__8467_8485 = G__8499;
i__8468_8486 = G__8500;
continue;
}
} else
{var vec__8470_8501 = cljs.core.first.call(null,seq__8465_8495__$1);var ev__7953__auto___8502 = cljs.core.nth.call(null,vec__8470_8501,0,null);var func__7954__auto___8503 = cljs.core.nth.call(null,vec__8470_8501,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8502,func__7954__auto___8503);
{
var G__8504 = cljs.core.next.call(null,seq__8465_8495__$1);
var G__8505 = null;
var G__8506 = 0;
var G__8507 = 0;
seq__8465_8483 = G__8504;
chunk__8466_8484 = G__8505;
count__8467_8485 = G__8506;
i__8468_8486 = G__8507;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"julia.browser","julia.browser",1725846277),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Open the object browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.objs.langs.julia.browser.browser);
})], null));
lt.objs.langs.julia.browser.tag_behaviour = (function tag_behaviour(tag,name){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8471_SHARP_){return cljs.core._EQ_.call(null,((cljs.core.seq_QMARK_.call(null,p1__8471_SHARP_))?cljs.core.first.call(null,p1__8471_SHARP_):p1__8471_SHARP_),name);
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
return lt.plugins.flow.callback.call(null,210,(function (){if(cljs.core.truth_(lt.plugins.flow.has_valid_editor_QMARK_.call(null,result)))
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
}catch (e9320){if((e9320 instanceof Error))
{var e = e9320;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9320;
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
lt.objs.langs.julia.menu.__BEH__ed_menu_PLUS_ = (function __BEH__ed_menu_PLUS_(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1116631654),"Evaluate",new cljs.core.Keyword(null,"order","order",1119910592),-2,new cljs.core.Keyword(null,"enabled","enabled",3699277491),cljs.core.not.call(null,lt.objs.editor.selection_QMARK_.call(null,this$)),new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"eval-editor-form","eval-editor-form",4138964197));
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
{var G__9303 = cljs.core.deref.call(null,lt.objs.langs.julia.results.results);var G__9303__$1 = (((G__9303 == null))?null:cljs.core.get.call(null,G__9303,thing));var G__9303__$2 = (((G__9303__$1 == null))?null:cljs.core.deref.call(null,G__9303__$1));var G__9303__$3 = (((G__9303__$2 == null))?null:new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(G__9303__$2));return G__9303__$3;
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
lt.objs.langs.julia.results.__GT_client = (function __GT_client(id){var G__9305 = id;var G__9305__$1 = (((G__9305 == null))?null:lt.objs.langs.julia.results.__GT_ed.call(null,G__9305));var G__9305__$2 = (((G__9305__$1 == null))?null:cljs.core.deref.call(null,G__9305__$1));var G__9305__$3 = (((G__9305__$2 == null))?null:new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(G__9305__$2));var G__9305__$4 = (((G__9305__$3 == null))?null:new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(G__9305__$3));return G__9305__$4;
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
lt.objs.langs.julia.results.__BEH__raise = (function __BEH__raise(this$,p__9306){var map__9308 = p__9306;var map__9308__$1 = ((cljs.core.seq_QMARK_.call(null,map__9308))?cljs.core.apply.call(null,cljs.core.hash_map,map__9308):map__9308);var args = cljs.core.get.call(null,map__9308__$1,new cljs.core.Keyword(null,"args","args",1016906831));var event = cljs.core.get.call(null,map__9308__$1,new cljs.core.Keyword(null,"event","event",1110795788));var id = cljs.core.get.call(null,map__9308__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(cljs.core.deref.call(null,lt.objs.langs.julia.results.results).call(null,id)))
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
lt.objs.langs.julia.patch.__GT_inline_exception = (function __GT_inline_exception(this$,info){var e__7952__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,lt.objs.eval.__GT_exception_class)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),lt.objs.eval.__GT_spacing.call(null,lt.objs.editor.line.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(info))))], null),((typeof new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)], null))], null));var seq__8971_8994 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7952__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"click","click",1108654330));
});})(e__7952__auto__))
,new cljs.core.Keyword(null,"contextmenu","contextmenu",911789824),((function (e__7952__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"menu!","menu!",1117686292),e);
});})(e__7952__auto__))
,new cljs.core.Keyword(null,"dblclick","dblclick",3463991820),((function (e__7952__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"double-click","double-click",956590078));
});})(e__7952__auto__))
], null)));var chunk__8972_8995 = null;var count__8973_8996 = 0;var i__8974_8997 = 0;while(true){
if((i__8974_8997 < count__8973_8996))
{var vec__8975_8998 = cljs.core._nth.call(null,chunk__8972_8995,i__8974_8997);var ev__7953__auto___8999 = cljs.core.nth.call(null,vec__8975_8998,0,null);var func__7954__auto___9000 = cljs.core.nth.call(null,vec__8975_8998,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8999,func__7954__auto___9000);
{
var G__9001 = seq__8971_8994;
var G__9002 = chunk__8972_8995;
var G__9003 = count__8973_8996;
var G__9004 = (i__8974_8997 + 1);
seq__8971_8994 = G__9001;
chunk__8972_8995 = G__9002;
count__8973_8996 = G__9003;
i__8974_8997 = G__9004;
continue;
}
} else
{var temp__4092__auto___9005 = cljs.core.seq.call(null,seq__8971_8994);if(temp__4092__auto___9005)
{var seq__8971_9006__$1 = temp__4092__auto___9005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8971_9006__$1))
{var c__7119__auto___9007 = cljs.core.chunk_first.call(null,seq__8971_9006__$1);{
var G__9008 = cljs.core.chunk_rest.call(null,seq__8971_9006__$1);
var G__9009 = c__7119__auto___9007;
var G__9010 = cljs.core.count.call(null,c__7119__auto___9007);
var G__9011 = 0;
seq__8971_8994 = G__9008;
chunk__8972_8995 = G__9009;
count__8973_8996 = G__9010;
i__8974_8997 = G__9011;
continue;
}
} else
{var vec__8976_9012 = cljs.core.first.call(null,seq__8971_9006__$1);var ev__7953__auto___9013 = cljs.core.nth.call(null,vec__8976_9012,0,null);var func__7954__auto___9014 = cljs.core.nth.call(null,vec__8976_9012,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___9013,func__7954__auto___9014);
{
var G__9015 = cljs.core.next.call(null,seq__8971_9006__$1);
var G__9016 = null;
var G__9017 = 0;
var G__9018 = 0;
seq__8971_8994 = G__9015;
chunk__8972_8995 = G__9016;
count__8973_8996 = G__9017;
i__8974_8997 = G__9018;
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
var G__9019 = cljs.core.rest.call(null,reactions);
reactions = G__9019;
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
keyboard_raise.cljs$lang$applyTo = (function (arglist__9020){
var obj = cljs.core.first(arglist__9020);
arglist__9020 = cljs.core.next(arglist__9020);
var k = cljs.core.first(arglist__9020);
var args = cljs.core.rest(arglist__9020);
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
lt.objs.langs.julia.patch.pre_cursor_indent = (function pre_cursor_indent(ed,p__8977){var map__8979 = p__8977;var map__8979__$1 = ((cljs.core.seq_QMARK_.call(null,map__8979))?cljs.core.apply.call(null,cljs.core.hash_map,map__8979):map__8979);var ch = cljs.core.get.call(null,map__8979__$1,new cljs.core.Keyword(null,"ch","ch",1013907415));var line = cljs.core.get.call(null,map__8979__$1,new cljs.core.Keyword(null,"line","line",1017226086));var tabs = lt.objs.editor.option.call(null,ed,new cljs.core.Keyword(null,"indentWithTabs","indentWithTabs",4541079970));var unit = lt.objs.editor.option.call(null,ed,new cljs.core.Keyword(null,"indentUnit","indentUnit",1493236674));var precursor = lt.objs.editor.line.call(null,ed,line).substring(0,ch);var whitespace = cljs.core.count.call(null,cljs.core.re_find.call(null,(cljs.core.truth_(tabs)?/^\t*$/:/^ *$/),precursor));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot.call(null,whitespace,unit),cljs.core.mod.call(null,whitespace,unit)], null);
});
lt.objs.langs.julia.patch.__BEH__backspace_indent = (function __BEH__backspace_indent(ed){if(cljs.core.not.call(null,(function (){var or__6371__auto__ = lt.objs.editor.selection_QMARK_.call(null,ed);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return (lt.objs.editor.__GT_cm_ed.call(null,ed).getSelections().length > 1);
}
})()))
{var cursor = lt.objs.editor.__GT_cursor.call(null,ed);var unit = lt.objs.editor.option.call(null,ed,new cljs.core.Keyword(null,"indentUnit","indentUnit",1493236674));var vec__8982 = lt.objs.langs.julia.patch.pre_cursor_indent.call(null,ed,cursor);var indent = cljs.core.nth.call(null,vec__8982,0,null);var rem = cljs.core.nth.call(null,vec__8982,1,null);var cursor__$1 = (((rem > 0))?lt.objs.langs.julia.patch.adjust_loc.call(null,lt.objs.editor.__GT_cursor.call(null,ed),(unit - rem)):cursor);var vec__8983 = (((rem > 0))?lt.objs.langs.julia.patch.pre_cursor_indent.call(null,ed,cursor__$1):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [indent,rem], null));var indent__$1 = cljs.core.nth.call(null,vec__8983,0,null);var rem__$1 = cljs.core.nth.call(null,vec__8983,1,null);if(((indent__$1 > 0)) && ((rem__$1 === 0)))
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
lt.objs.langs.julia.profiler.refresh_line = (function refresh_line(p__9109){var map__9111 = p__9109;var map__9111__$1 = ((cljs.core.seq_QMARK_.call(null,map__9111))?cljs.core.apply.call(null,cljs.core.hash_map,map__9111):map__9111);var l = map__9111__$1;var handle = cljs.core.get.call(null,map__9111__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));var percent = cljs.core.get.call(null,map__9111__$1,new cljs.core.Keyword(null,"percent","percent",4629944247));var line = cljs.core.get.call(null,map__9111__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__9111__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_(handle))
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
lt.objs.langs.julia.profiler.refresh_and_update = (function refresh_and_update(lines){var lines__$1 = lt.objs.langs.julia.profiler.refresh_lines.call(null,lines);var seq__9118_9182 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.editors.call(null,lines__$1));var chunk__9120_9183 = null;var count__9121_9184 = 0;var i__9122_9185 = 0;while(true){
if((i__9122_9185 < count__9121_9184))
{var ed_9186 = cljs.core._nth.call(null,chunk__9120_9183,i__9122_9185);if(cljs.core.truth_((function (){var and__6359__auto__ = ed_9186;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.deref.call(null,ed_9186);
} else
{return and__6359__auto__;
}
})()))
{lt.objs.editor.refresh.call(null,ed_9186);
{
var G__9187 = seq__9118_9182;
var G__9188 = chunk__9120_9183;
var G__9189 = count__9121_9184;
var G__9190 = (i__9122_9185 + 1);
seq__9118_9182 = G__9187;
chunk__9120_9183 = G__9188;
count__9121_9184 = G__9189;
i__9122_9185 = G__9190;
continue;
}
} else
{{
var G__9191 = seq__9118_9182;
var G__9192 = chunk__9120_9183;
var G__9193 = count__9121_9184;
var G__9194 = (i__9122_9185 + 1);
seq__9118_9182 = G__9191;
chunk__9120_9183 = G__9192;
count__9121_9184 = G__9193;
i__9122_9185 = G__9194;
continue;
}
}
} else
{var temp__4092__auto___9195 = cljs.core.seq.call(null,seq__9118_9182);if(temp__4092__auto___9195)
{var seq__9118_9196__$1 = temp__4092__auto___9195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9118_9196__$1))
{var c__7119__auto___9197 = cljs.core.chunk_first.call(null,seq__9118_9196__$1);{
var G__9198 = cljs.core.chunk_rest.call(null,seq__9118_9196__$1);
var G__9199 = c__7119__auto___9197;
var G__9200 = cljs.core.count.call(null,c__7119__auto___9197);
var G__9201 = 0;
seq__9118_9182 = G__9198;
chunk__9120_9183 = G__9199;
count__9121_9184 = G__9200;
i__9122_9185 = G__9201;
continue;
}
} else
{var ed_9202 = cljs.core.first.call(null,seq__9118_9196__$1);if(cljs.core.truth_((function (){var and__6359__auto__ = ed_9202;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.deref.call(null,ed_9202);
} else
{return and__6359__auto__;
}
})()))
{lt.objs.editor.refresh.call(null,ed_9202);
{
var G__9203 = cljs.core.next.call(null,seq__9118_9196__$1);
var G__9204 = null;
var G__9205 = 0;
var G__9206 = 0;
seq__9118_9182 = G__9203;
chunk__9120_9183 = G__9204;
count__9121_9184 = G__9205;
i__9122_9185 = G__9206;
continue;
}
} else
{{
var G__9207 = cljs.core.next.call(null,seq__9118_9196__$1);
var G__9208 = null;
var G__9209 = 0;
var G__9210 = 0;
seq__9118_9182 = G__9207;
chunk__9120_9183 = G__9208;
count__9121_9184 = G__9209;
i__9122_9185 = G__9210;
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
{var seq__9136_9211 = cljs.core.seq.call(null,cljs.core.deref.call(null,lt.objs.langs.julia.profiler.lines));var chunk__9138_9212 = null;var count__9139_9213 = 0;var i__9140_9214 = 0;while(true){
if((i__9140_9214 < count__9139_9213))
{var map__9142_9215 = cljs.core._nth.call(null,chunk__9138_9212,i__9140_9214);var map__9142_9216__$1 = ((cljs.core.seq_QMARK_.call(null,map__9142_9215))?cljs.core.apply.call(null,cljs.core.hash_map,map__9142_9215):map__9142_9215);var handle_9217 = cljs.core.get.call(null,map__9142_9216__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_9217))
{handle_9217.percent = null;
{
var G__9218 = seq__9136_9211;
var G__9219 = chunk__9138_9212;
var G__9220 = count__9139_9213;
var G__9221 = (i__9140_9214 + 1);
seq__9136_9211 = G__9218;
chunk__9138_9212 = G__9219;
count__9139_9213 = G__9220;
i__9140_9214 = G__9221;
continue;
}
} else
{{
var G__9222 = seq__9136_9211;
var G__9223 = chunk__9138_9212;
var G__9224 = count__9139_9213;
var G__9225 = (i__9140_9214 + 1);
seq__9136_9211 = G__9222;
chunk__9138_9212 = G__9223;
count__9139_9213 = G__9224;
i__9140_9214 = G__9225;
continue;
}
}
} else
{var temp__4092__auto___9226 = cljs.core.seq.call(null,seq__9136_9211);if(temp__4092__auto___9226)
{var seq__9136_9227__$1 = temp__4092__auto___9226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9136_9227__$1))
{var c__7119__auto___9228 = cljs.core.chunk_first.call(null,seq__9136_9227__$1);{
var G__9229 = cljs.core.chunk_rest.call(null,seq__9136_9227__$1);
var G__9230 = c__7119__auto___9228;
var G__9231 = cljs.core.count.call(null,c__7119__auto___9228);
var G__9232 = 0;
seq__9136_9211 = G__9229;
chunk__9138_9212 = G__9230;
count__9139_9213 = G__9231;
i__9140_9214 = G__9232;
continue;
}
} else
{var map__9143_9233 = cljs.core.first.call(null,seq__9136_9227__$1);var map__9143_9234__$1 = ((cljs.core.seq_QMARK_.call(null,map__9143_9233))?cljs.core.apply.call(null,cljs.core.hash_map,map__9143_9233):map__9143_9233);var handle_9235 = cljs.core.get.call(null,map__9143_9234__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_9235))
{handle_9235.percent = null;
{
var G__9236 = cljs.core.next.call(null,seq__9136_9227__$1);
var G__9237 = null;
var G__9238 = 0;
var G__9239 = 0;
seq__9136_9211 = G__9236;
chunk__9138_9212 = G__9237;
count__9139_9213 = G__9238;
i__9140_9214 = G__9239;
continue;
}
} else
{{
var G__9240 = cljs.core.next.call(null,seq__9136_9227__$1);
var G__9241 = null;
var G__9242 = 0;
var G__9243 = 0;
seq__9136_9211 = G__9240;
chunk__9138_9212 = G__9241;
count__9139_9213 = G__9242;
i__9140_9214 = G__9243;
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
var seq__9144 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.dom_bars.call(null));var chunk__9145 = null;var count__9146 = 0;var i__9147 = 0;while(true){
if((i__9147 < count__9146))
{var bar = cljs.core._nth.call(null,chunk__9145,i__9147);bar.remove();
{
var G__9244 = seq__9144;
var G__9245 = chunk__9145;
var G__9246 = count__9146;
var G__9247 = (i__9147 + 1);
seq__9144 = G__9244;
chunk__9145 = G__9245;
count__9146 = G__9246;
i__9147 = G__9247;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9144);if(temp__4092__auto__)
{var seq__9144__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9144__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__9144__$1);{
var G__9248 = cljs.core.chunk_rest.call(null,seq__9144__$1);
var G__9249 = c__7119__auto__;
var G__9250 = cljs.core.count.call(null,c__7119__auto__);
var G__9251 = 0;
seq__9144 = G__9248;
chunk__9145 = G__9249;
count__9146 = G__9250;
i__9147 = G__9251;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__9144__$1);bar.remove();
{
var G__9252 = cljs.core.next.call(null,seq__9144__$1);
var G__9253 = null;
var G__9254 = 0;
var G__9255 = 0;
seq__9144 = G__9252;
chunk__9145 = G__9253;
count__9146 = G__9254;
i__9147 = G__9255;
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
lt.objs.langs.julia.profiler.animate_in = (function animate_in(){var bars = lt.objs.langs.julia.profiler.dom_bars.call(null);var seq__9156_9256 = cljs.core.seq.call(null,bars);var chunk__9157_9257 = null;var count__9158_9258 = 0;var i__9159_9259 = 0;while(true){
if((i__9159_9259 < count__9158_9258))
{var bar_9260 = cljs.core._nth.call(null,chunk__9157_9257,i__9159_9259);lt.util.dom.remove_class.call(null,bar_9260,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.add_class.call(null,bar_9260,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9261 = seq__9156_9256;
var G__9262 = chunk__9157_9257;
var G__9263 = count__9158_9258;
var G__9264 = (i__9159_9259 + 1);
seq__9156_9256 = G__9261;
chunk__9157_9257 = G__9262;
count__9158_9258 = G__9263;
i__9159_9259 = G__9264;
continue;
}
} else
{var temp__4092__auto___9265 = cljs.core.seq.call(null,seq__9156_9256);if(temp__4092__auto___9265)
{var seq__9156_9266__$1 = temp__4092__auto___9265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9156_9266__$1))
{var c__7119__auto___9267 = cljs.core.chunk_first.call(null,seq__9156_9266__$1);{
var G__9268 = cljs.core.chunk_rest.call(null,seq__9156_9266__$1);
var G__9269 = c__7119__auto___9267;
var G__9270 = cljs.core.count.call(null,c__7119__auto___9267);
var G__9271 = 0;
seq__9156_9256 = G__9268;
chunk__9157_9257 = G__9269;
count__9158_9258 = G__9270;
i__9159_9259 = G__9271;
continue;
}
} else
{var bar_9272 = cljs.core.first.call(null,seq__9156_9266__$1);lt.util.dom.remove_class.call(null,bar_9272,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.add_class.call(null,bar_9272,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9273 = cljs.core.next.call(null,seq__9156_9266__$1);
var G__9274 = null;
var G__9275 = 0;
var G__9276 = 0;
seq__9156_9256 = G__9273;
chunk__9157_9257 = G__9274;
count__9158_9258 = G__9275;
i__9159_9259 = G__9276;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.langs.julia.profiler.callback.call(null,((function (bars){
return (function (){var seq__9160 = cljs.core.seq.call(null,bars);var chunk__9161 = null;var count__9162 = 0;var i__9163 = 0;while(true){
if((i__9163 < count__9162))
{var bar = cljs.core._nth.call(null,chunk__9161,i__9163);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.remove_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9277 = seq__9160;
var G__9278 = chunk__9161;
var G__9279 = count__9162;
var G__9280 = (i__9163 + 1);
seq__9160 = G__9277;
chunk__9161 = G__9278;
count__9162 = G__9279;
i__9163 = G__9280;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9160);if(temp__4092__auto__)
{var seq__9160__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9160__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__9160__$1);{
var G__9281 = cljs.core.chunk_rest.call(null,seq__9160__$1);
var G__9282 = c__7119__auto__;
var G__9283 = cljs.core.count.call(null,c__7119__auto__);
var G__9284 = 0;
seq__9160 = G__9281;
chunk__9161 = G__9282;
count__9162 = G__9283;
i__9163 = G__9284;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__9160__$1);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.remove_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9285 = cljs.core.next.call(null,seq__9160__$1);
var G__9286 = null;
var G__9287 = 0;
var G__9288 = 0;
seq__9160 = G__9285;
chunk__9161 = G__9286;
count__9162 = G__9287;
i__9163 = G__9288;
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
lt.objs.langs.julia.profiler.animate_out = (function animate_out(){var seq__9168 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.dom_bars.call(null));var chunk__9169 = null;var count__9170 = 0;var i__9171 = 0;while(true){
if((i__9171 < count__9170))
{var bar = cljs.core._nth.call(null,chunk__9169,i__9171);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9289 = seq__9168;
var G__9290 = chunk__9169;
var G__9291 = count__9170;
var G__9292 = (i__9171 + 1);
seq__9168 = G__9289;
chunk__9169 = G__9290;
count__9170 = G__9291;
i__9171 = G__9292;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9168);if(temp__4092__auto__)
{var seq__9168__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9168__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__9168__$1);{
var G__9293 = cljs.core.chunk_rest.call(null,seq__9168__$1);
var G__9294 = c__7119__auto__;
var G__9295 = cljs.core.count.call(null,c__7119__auto__);
var G__9296 = 0;
seq__9168 = G__9293;
chunk__9169 = G__9294;
count__9170 = G__9295;
i__9171 = G__9296;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__9168__$1);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__9297 = cljs.core.next.call(null,seq__9168__$1);
var G__9298 = null;
var G__9299 = 0;
var G__9300 = 0;
seq__9168 = G__9297;
chunk__9169 = G__9298;
count__9170 = G__9299;
i__9171 = G__9300;
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
var res_obj_9301 = lt.objs.langs.julia.util.widget.call(null,editor,cljs.core.second.call(null,new cljs.core.Keyword(null,"bounds","bounds",3925666343).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"underline","underline",4281907774));lt.objs.langs.julia.profiler.listen_BANG_.call(null,res_obj_9301);
lt.object.add_tags.call(null,res_obj_9301,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"julia.profile-result","julia.profile-result",1163667816)], null));
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
var seq__8390_8404 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,new cljs.core.Keyword(null,".code",".code",1059445389),node));var chunk__8391_8405 = null;var count__8392_8406 = 0;var i__8393_8407 = 0;while(true){
if((i__8393_8407 < count__8392_8406))
{var node_8408__$1 = cljs.core._nth.call(null,chunk__8391_8405,i__8393_8407);lt.plugins.runmode.process_one.call(null,node_8408__$1);
{
var G__8409 = seq__8390_8404;
var G__8410 = chunk__8391_8405;
var G__8411 = count__8392_8406;
var G__8412 = (i__8393_8407 + 1);
seq__8390_8404 = G__8409;
chunk__8391_8405 = G__8410;
count__8392_8406 = G__8411;
i__8393_8407 = G__8412;
continue;
}
} else
{var temp__4092__auto___8413 = cljs.core.seq.call(null,seq__8390_8404);if(temp__4092__auto___8413)
{var seq__8390_8414__$1 = temp__4092__auto___8413;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8390_8414__$1))
{var c__7119__auto___8415 = cljs.core.chunk_first.call(null,seq__8390_8414__$1);{
var G__8416 = cljs.core.chunk_rest.call(null,seq__8390_8414__$1);
var G__8417 = c__7119__auto___8415;
var G__8418 = cljs.core.count.call(null,c__7119__auto___8415);
var G__8419 = 0;
seq__8390_8404 = G__8416;
chunk__8391_8405 = G__8417;
count__8392_8406 = G__8418;
i__8393_8407 = G__8419;
continue;
}
} else
{var node_8420__$1 = cljs.core.first.call(null,seq__8390_8414__$1);lt.plugins.runmode.process_one.call(null,node_8420__$1);
{
var G__8421 = cljs.core.next.call(null,seq__8390_8414__$1);
var G__8422 = null;
var G__8423 = 0;
var G__8424 = 0;
seq__8390_8404 = G__8421;
chunk__8391_8405 = G__8422;
count__8392_8406 = G__8423;
i__8393_8407 = G__8424;
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
lt.objs.langs.julia.package$.package_ui = (function package_ui(){var e__7952__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",4117657110),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),"http://pkg.julialang.org"], null)], null));var seq__8904_8928 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8905_8929 = null;var count__8906_8930 = 0;var i__8907_8931 = 0;while(true){
if((i__8907_8931 < count__8906_8930))
{var vec__8908_8932 = cljs.core._nth.call(null,chunk__8905_8929,i__8907_8931);var ev__7953__auto___8933 = cljs.core.nth.call(null,vec__8908_8932,0,null);var func__7954__auto___8934 = cljs.core.nth.call(null,vec__8908_8932,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8933,func__7954__auto___8934);
{
var G__8935 = seq__8904_8928;
var G__8936 = chunk__8905_8929;
var G__8937 = count__8906_8930;
var G__8938 = (i__8907_8931 + 1);
seq__8904_8928 = G__8935;
chunk__8905_8929 = G__8936;
count__8906_8930 = G__8937;
i__8907_8931 = G__8938;
continue;
}
} else
{var temp__4092__auto___8939 = cljs.core.seq.call(null,seq__8904_8928);if(temp__4092__auto___8939)
{var seq__8904_8940__$1 = temp__4092__auto___8939;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8904_8940__$1))
{var c__7119__auto___8941 = cljs.core.chunk_first.call(null,seq__8904_8940__$1);{
var G__8942 = cljs.core.chunk_rest.call(null,seq__8904_8940__$1);
var G__8943 = c__7119__auto___8941;
var G__8944 = cljs.core.count.call(null,c__7119__auto___8941);
var G__8945 = 0;
seq__8904_8928 = G__8942;
chunk__8905_8929 = G__8943;
count__8906_8930 = G__8944;
i__8907_8931 = G__8945;
continue;
}
} else
{var vec__8909_8946 = cljs.core.first.call(null,seq__8904_8940__$1);var ev__7953__auto___8947 = cljs.core.nth.call(null,vec__8909_8946,0,null);var func__7954__auto___8948 = cljs.core.nth.call(null,vec__8909_8946,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8947,func__7954__auto___8948);
{
var G__8949 = cljs.core.next.call(null,seq__8904_8940__$1);
var G__8950 = null;
var G__8951 = 0;
var G__8952 = 0;
seq__8904_8928 = G__8949;
chunk__8905_8929 = G__8950;
count__8906_8930 = G__8951;
i__8907_8931 = G__8952;
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
lt.objs.langs.julia.package$.process_link = (function process_link(a){var target = lt.util.dom.attr.call(null,a,new cljs.core.Keyword(null,"href","href",1017115293));a.onclick = ((function (target){
return (function (e){return lt.objs.platform.open.call(null,target);
});})(target))
;
return lt.util.dom.attr.call(null,a,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"javascript:void(0);"], null));
});
lt.objs.langs.julia.package$.init_ui = (function init_ui(frame){lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,".titlebox",".titlebox",1900347923),frame.contentDocument),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),new cljs.core.Keyword(null,"none","none",1017291434)], null));
var seq__8914 = cljs.core.seq.call(null,lt.util.dom.lazy_nl_via_item.call(null,lt.util.dom.$$.call(null,new cljs.core.Keyword(null,"a","a",1013904339),frame.contentDocument)));var chunk__8915 = null;var count__8916 = 0;var i__8917 = 0;while(true){
if((i__8917 < count__8916))
{var a = cljs.core._nth.call(null,chunk__8915,i__8917);lt.objs.langs.julia.package$.process_link.call(null,a);
{
var G__8953 = seq__8914;
var G__8954 = chunk__8915;
var G__8955 = count__8916;
var G__8956 = (i__8917 + 1);
seq__8914 = G__8953;
chunk__8915 = G__8954;
count__8916 = G__8955;
i__8917 = G__8956;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8914);if(temp__4092__auto__)
{var seq__8914__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8914__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8914__$1);{
var G__8957 = cljs.core.chunk_rest.call(null,seq__8914__$1);
var G__8958 = c__7119__auto__;
var G__8959 = cljs.core.count.call(null,c__7119__auto__);
var G__8960 = 0;
seq__8914 = G__8957;
chunk__8915 = G__8958;
count__8916 = G__8959;
i__8917 = G__8960;
continue;
}
} else
{var a = cljs.core.first.call(null,seq__8914__$1);lt.objs.langs.julia.package$.process_link.call(null,a);
{
var G__8961 = cljs.core.next.call(null,seq__8914__$1);
var G__8962 = null;
var G__8963 = 0;
var G__8964 = 0;
seq__8914 = G__8961;
chunk__8915 = G__8962;
count__8916 = G__8963;
i__8917 = G__8964;
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
lt.plugins.reptile.mark_text = (function mark_text(ed,line,p__8251,opts){var vec__8253 = p__8251;var start = cljs.core.nth.call(null,vec__8253,0,null);var end = cljs.core.nth.call(null,vec__8253,1,null);return lt.objs.editor.__GT_cm_ed.call(null,ed).markText({"ch": start, "line": (line - 1)},{"ch": end, "line": (line - 1)},cljs.core.clj__GT_js.call(null,opts));
});
lt.plugins.reptile.content = (function content(ed,line,p__8254){var vec__8256 = p__8254;var start = cljs.core.nth.call(null,vec__8256,0,null);var end = cljs.core.nth.call(null,vec__8256,1,null);return lt.objs.editor.__GT_cm_ed.call(null,ed).getRange({"ch": start, "line": (line - 1)},{"ch": end, "line": (line - 1)});
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
call_me_maybe.cljs$lang$applyTo = (function (arglist__8314){
var this$ = cljs.core.first(arglist__8314);
arglist__8314 = cljs.core.next(arglist__8314);
var f = cljs.core.first(arglist__8314);
var args = cljs.core.rest(arglist__8314);
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
var conj_vec__delegate = function (vec,args){return cljs.core.apply.call(null,cljs.core.conj,(function (){var or__6371__auto__ = vec;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
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
conj_vec.cljs$lang$applyTo = (function (arglist__8315){
var vec = cljs.core.first(arglist__8315);
var args = cljs.core.rest(arglist__8315);
return conj_vec__delegate(vec,args);
});
conj_vec.cljs$core$IFn$_invoke$arity$variadic = conj_vec__delegate;
return conj_vec;
})()
;
lt.plugins.reptile.process_line_styles = (function process_line_styles(vec){var start = 0;var G__8262 = cljs.core.rest.call(null,vec);var vec__8263 = G__8262;var end = cljs.core.nth.call(null,vec__8263,0,null);var token = cljs.core.nth.call(null,vec__8263,1,null);var vec__$1 = cljs.core.nthnext.call(null,vec__8263,2);var tokens = cljs.core.PersistentArrayMap.EMPTY;var start__$1 = start;var G__8262__$1 = G__8262;var tokens__$1 = tokens;while(true){
var start__$2 = start__$1;var vec__8264 = G__8262__$1;var end__$1 = cljs.core.nth.call(null,vec__8264,0,null);var token__$1 = cljs.core.nth.call(null,vec__8264,1,null);var vec__$2 = cljs.core.nthnext.call(null,vec__8264,2);var tokens__$2 = tokens__$1;if(cljs.core.truth_(end__$1))
{{
var G__8316 = end__$1;
var G__8317 = vec__$2;
var G__8318 = cljs.core.update_in.call(null,tokens__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,token__$1)], null),lt.plugins.reptile.conj_vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$2,end__$1], null));
start__$1 = G__8316;
G__8262__$1 = G__8317;
tokens__$1 = G__8318;
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
var listen_drag_BANG___delegate = function (drag,p__8266){var vec__8268 = p__8266;var up = cljs.core.nth.call(null,vec__8268,0,null);window.onmousemove = ((function (vec__8268,up){
return (function (p1__8265_SHARP_){return drag.call(null,p1__8265_SHARP_.clientX,p1__8265_SHARP_.clientY);
});})(vec__8268,up))
;
return window.onmouseup = ((function (vec__8268,up){
return (function (e){window.onmousemove = null;
window.onmouseup = null;
if(cljs.core.truth_(up))
{return up.call(null,e.clientX,e.clientY);
} else
{return null;
}
});})(vec__8268,up))
;
};
var listen_drag_BANG_ = function (drag,var_args){
var p__8266 = null;if (arguments.length > 1) {
  p__8266 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_drag_BANG___delegate.call(this,drag,p__8266);};
listen_drag_BANG_.cljs$lang$maxFixedArity = 1;
listen_drag_BANG_.cljs$lang$applyTo = (function (arglist__8319){
var drag = cljs.core.first(arglist__8319);
var p__8266 = cljs.core.rest(arglist__8319);
return listen_drag_BANG___delegate(drag,p__8266);
});
listen_drag_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_drag_BANG___delegate;
return listen_drag_BANG_;
})()
;
lt.plugins.reptile.slider = (function slider(n){var e__7952__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-number.reptile.slider","span.cm-number.reptile.slider",698673436),n], null));var seq__8275_8320 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8276_8321 = null;var count__8277_8322 = 0;var i__8278_8323 = 0;while(true){
if((i__8278_8323 < count__8277_8322))
{var vec__8279_8324 = cljs.core._nth.call(null,chunk__8276_8321,i__8278_8323);var ev__7953__auto___8325 = cljs.core.nth.call(null,vec__8279_8324,0,null);var func__7954__auto___8326 = cljs.core.nth.call(null,vec__8279_8324,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8325,func__7954__auto___8326);
{
var G__8327 = seq__8275_8320;
var G__8328 = chunk__8276_8321;
var G__8329 = count__8277_8322;
var G__8330 = (i__8278_8323 + 1);
seq__8275_8320 = G__8327;
chunk__8276_8321 = G__8328;
count__8277_8322 = G__8329;
i__8278_8323 = G__8330;
continue;
}
} else
{var temp__4092__auto___8331 = cljs.core.seq.call(null,seq__8275_8320);if(temp__4092__auto___8331)
{var seq__8275_8332__$1 = temp__4092__auto___8331;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8275_8332__$1))
{var c__7119__auto___8333 = cljs.core.chunk_first.call(null,seq__8275_8332__$1);{
var G__8334 = cljs.core.chunk_rest.call(null,seq__8275_8332__$1);
var G__8335 = c__7119__auto___8333;
var G__8336 = cljs.core.count.call(null,c__7119__auto___8333);
var G__8337 = 0;
seq__8275_8320 = G__8334;
chunk__8276_8321 = G__8335;
count__8277_8322 = G__8336;
i__8278_8323 = G__8337;
continue;
}
} else
{var vec__8280_8338 = cljs.core.first.call(null,seq__8275_8332__$1);var ev__7953__auto___8339 = cljs.core.nth.call(null,vec__8280_8338,0,null);var func__7954__auto___8340 = cljs.core.nth.call(null,vec__8280_8338,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8339,func__7954__auto___8340);
{
var G__8341 = cljs.core.next.call(null,seq__8275_8332__$1);
var G__8342 = null;
var G__8343 = 0;
var G__8344 = 0;
seq__8275_8320 = G__8341;
chunk__8276_8321 = G__8342;
count__8277_8322 = G__8343;
i__8278_8323 = G__8344;
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
lt.plugins.reptile.__BEH__clear = (function __BEH__clear(this$){var seq__8285_8345 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8286_8346 = null;var count__8287_8347 = 0;var i__8288_8348 = 0;while(true){
if((i__8288_8348 < count__8287_8347))
{var scale_8349 = cljs.core._nth.call(null,chunk__8286_8346,i__8288_8348);cljs.core.deref.call(null,new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(scale_8349)).clear();
{
var G__8350 = seq__8285_8345;
var G__8351 = chunk__8286_8346;
var G__8352 = count__8287_8347;
var G__8353 = (i__8288_8348 + 1);
seq__8285_8345 = G__8350;
chunk__8286_8346 = G__8351;
count__8287_8347 = G__8352;
i__8288_8348 = G__8353;
continue;
}
} else
{var temp__4092__auto___8354 = cljs.core.seq.call(null,seq__8285_8345);if(temp__4092__auto___8354)
{var seq__8285_8355__$1 = temp__4092__auto___8354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8285_8355__$1))
{var c__7119__auto___8356 = cljs.core.chunk_first.call(null,seq__8285_8355__$1);{
var G__8357 = cljs.core.chunk_rest.call(null,seq__8285_8355__$1);
var G__8358 = c__7119__auto___8356;
var G__8359 = cljs.core.count.call(null,c__7119__auto___8356);
var G__8360 = 0;
seq__8285_8345 = G__8357;
chunk__8286_8346 = G__8358;
count__8287_8347 = G__8359;
i__8288_8348 = G__8360;
continue;
}
} else
{var scale_8361 = cljs.core.first.call(null,seq__8285_8355__$1);cljs.core.deref.call(null,new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(scale_8361)).clear();
{
var G__8362 = cljs.core.next.call(null,seq__8285_8355__$1);
var G__8363 = null;
var G__8364 = 0;
var G__8365 = 0;
seq__8285_8345 = G__8362;
chunk__8286_8346 = G__8363;
count__8287_8347 = G__8364;
i__8288_8348 = G__8365;
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
lt.plugins.reptile.reptile = (function reptile(ed,p__8289){var vec__8297 = p__8289;var start = cljs.core.nth.call(null,vec__8297,0,null);var end = cljs.core.nth.call(null,vec__8297,1,null);var this$ = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.reptile","reptile","lt.plugins.reptile/reptile",1716384791));lt.plugins.reptile.each_line.call(null,ed,start,end,((function (this$,vec__8297,start,end){
return (function (handle){var seq__8298 = cljs.core.seq.call(null,lt.plugins.reptile.numbers.call(null,handle));var chunk__8300 = null;var count__8301 = 0;var i__8302 = 0;while(true){
if((i__8302 < count__8301))
{var span = cljs.core._nth.call(null,chunk__8300,i__8302);var line_8366 = lt.plugins.reptile.here_SINGLEQUOTE_s_my_number.call(null,handle);var idx_8367 = cljs.core.count.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(lt.plugins.reptile.valid_number_QMARK_.call(null,lt.plugins.reptile.content.call(null,ed,line_8366,span))))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scales","scales",4400681947)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mark","mark",1017248319),lt.plugins.reptile.mark_slider.call(null,ed,line_8366,span,((function (seq__8298,chunk__8300,count__8301,i__8302,line_8366,idx_8367,span,this$,vec__8297,start,end){
return (function (start__$1,x){var val = lt.plugins.reptile.transform.call(null,start__$1,x);if(cljs.core.not_EQ_.call(null,val,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),idx_8367))))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scales","scales",4400681947),idx_8367,new cljs.core.Keyword(null,"value","value",1125876963)], null),cljs.core.constantly.call(null,val));
var temp__4092__auto___8368 = new cljs.core.Keyword(null,"obj","obj",1014014057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8368))
{var obj_8369 = temp__4092__auto___8368;lt.object.raise.call(null,obj_8369,new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{}
} else
{}
return val;
});})(seq__8298,chunk__8300,count__8301,i__8302,line_8366,idx_8367,span,this$,vec__8297,start,end))
),new cljs.core.Keyword(null,"value","value",1125876963),lt.plugins.reptile.transform.call(null,lt.plugins.reptile.content.call(null,ed,line_8366,span),0),new cljs.core.Keyword(null,"loc","loc",1014011570),cljs.core.apply.call(null,cljs.core.vector,line_8366,span)], null));
} else
{}
{
var G__8370 = seq__8298;
var G__8371 = chunk__8300;
var G__8372 = count__8301;
var G__8373 = (i__8302 + 1);
seq__8298 = G__8370;
chunk__8300 = G__8371;
count__8301 = G__8372;
i__8302 = G__8373;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8298);if(temp__4092__auto__)
{var seq__8298__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8298__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8298__$1);{
var G__8374 = cljs.core.chunk_rest.call(null,seq__8298__$1);
var G__8375 = c__7119__auto__;
var G__8376 = cljs.core.count.call(null,c__7119__auto__);
var G__8377 = 0;
seq__8298 = G__8374;
chunk__8300 = G__8375;
count__8301 = G__8376;
i__8302 = G__8377;
continue;
}
} else
{var span = cljs.core.first.call(null,seq__8298__$1);var line_8378 = lt.plugins.reptile.here_SINGLEQUOTE_s_my_number.call(null,handle);var idx_8379 = cljs.core.count.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(lt.plugins.reptile.valid_number_QMARK_.call(null,lt.plugins.reptile.content.call(null,ed,line_8378,span))))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scales","scales",4400681947)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mark","mark",1017248319),lt.plugins.reptile.mark_slider.call(null,ed,line_8378,span,((function (seq__8298,chunk__8300,count__8301,i__8302,line_8378,idx_8379,span,seq__8298__$1,temp__4092__auto__,this$,vec__8297,start,end){
return (function (start__$1,x){var val = lt.plugins.reptile.transform.call(null,start__$1,x);if(cljs.core.not_EQ_.call(null,val,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),idx_8379))))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scales","scales",4400681947),idx_8379,new cljs.core.Keyword(null,"value","value",1125876963)], null),cljs.core.constantly.call(null,val));
var temp__4092__auto___8380__$1 = new cljs.core.Keyword(null,"obj","obj",1014014057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8380__$1))
{var obj_8381 = temp__4092__auto___8380__$1;lt.object.raise.call(null,obj_8381,new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.Keyword(null,"scales","scales",4400681947).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{}
} else
{}
return val;
});})(seq__8298,chunk__8300,count__8301,i__8302,line_8378,idx_8379,span,seq__8298__$1,temp__4092__auto__,this$,vec__8297,start,end))
),new cljs.core.Keyword(null,"value","value",1125876963),lt.plugins.reptile.transform.call(null,lt.plugins.reptile.content.call(null,ed,line_8378,span),0),new cljs.core.Keyword(null,"loc","loc",1014011570),cljs.core.apply.call(null,cljs.core.vector,line_8378,span)], null));
} else
{}
{
var G__8382 = cljs.core.next.call(null,seq__8298__$1);
var G__8383 = null;
var G__8384 = 0;
var G__8385 = 0;
seq__8298 = G__8382;
chunk__8300 = G__8383;
count__8301 = G__8384;
i__8302 = G__8385;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(this$,vec__8297,start,end))
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
if(cljs.core.truth_((function (){var and__6359__auto__ = lt.plugins.reptile.busy_shown;if(cljs.core.truth_(and__6359__auto__))
{return (cljs.core.deref.call(null,lt.plugins.reptile.busy) <= 0);
} else
{return and__6359__auto__;
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
lt.objs.langs.julia.eval.clear_results = (function clear_results(ed,p__8721){var vec__8735 = p__8721;var start = cljs.core.nth.call(null,vec__8735,0,null);var end = cljs.core.nth.call(null,vec__8735,1,null);var seq__8736 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,lt.objs.editor.line_handle,ed),cljs.core.range.call(null,(start - 1),end)));var chunk__8741 = null;var count__8742 = 0;var i__8743 = 0;while(true){
if((i__8743 < count__8742))
{var lh = cljs.core._nth.call(null,chunk__8741,i__8743);var seq__8744_8768 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",4124874251),new cljs.core.Keyword(null,"underline","underline",4281907774)], null));var chunk__8745_8769 = null;var count__8746_8770 = 0;var i__8747_8771 = 0;while(true){
if((i__8747_8771 < count__8746_8770))
{var type_8772 = cljs.core._nth.call(null,chunk__8745_8769,i__8747_8771);var temp__4092__auto___8773 = cljs.core.get.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lh,type_8772], null));if(cljs.core.truth_(temp__4092__auto___8773))
{var widget_8774 = temp__4092__auto___8773;lt.object.raise.call(null,widget_8774,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{}
{
var G__8775 = seq__8744_8768;
var G__8776 = chunk__8745_8769;
var G__8777 = count__8746_8770;
var G__8778 = (i__8747_8771 + 1);
seq__8744_8768 = G__8775;
chunk__8745_8769 = G__8776;
count__8746_8770 = G__8777;
i__8747_8771 = G__8778;
continue;
}
} else
{var temp__4092__auto___8779 = cljs.core.seq.call(null,seq__8744_8768);if(temp__4092__auto___8779)
{var seq__8744_8780__$1 = temp__4092__auto___8779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8744_8780__$1))
{var c__7119__auto___8781 = cljs.core.chunk_first.call(null,seq__8744_8780__$1);{
var G__8782 = cljs.core.chunk_rest.call(null,seq__8744_8780__$1);
var G__8783 = c__7119__auto___8781;
var G__8784 = cljs.core.count.call(null,c__7119__auto___8781);
var G__8785 = 0;
seq__8744_8768 = G__8782;
chunk__8745_8769 = G__8783;
count__8746_8770 = G__8784;
i__8747_8771 = G__8785;
continue;
}
} else
{var type_8786 = cljs.core.first.call(null,seq__8744_8780__$1);var temp__4092__auto___8787__$1 = cljs.core.get.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lh,type_8786], null));if(cljs.core.truth_(temp__4092__auto___8787__$1))
{var widget_8788 = temp__4092__auto___8787__$1;lt.object.raise.call(null,widget_8788,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{}
{
var G__8789 = cljs.core.next.call(null,seq__8744_8780__$1);
var G__8790 = null;
var G__8791 = 0;
var G__8792 = 0;
seq__8744_8768 = G__8789;
chunk__8745_8769 = G__8790;
count__8746_8770 = G__8791;
i__8747_8771 = G__8792;
continue;
}
}
} else
{}
}
break;
}
{
var G__8793 = seq__8736;
var G__8794 = chunk__8741;
var G__8795 = count__8742;
var G__8796 = (i__8743 + 1);
seq__8736 = G__8793;
chunk__8741 = G__8794;
count__8742 = G__8795;
i__8743 = G__8796;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8736);if(temp__4092__auto__)
{var seq__8736__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8736__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8736__$1);{
var G__8797 = cljs.core.chunk_rest.call(null,seq__8736__$1);
var G__8798 = c__7119__auto__;
var G__8799 = cljs.core.count.call(null,c__7119__auto__);
var G__8800 = 0;
seq__8736 = G__8797;
chunk__8741 = G__8798;
count__8742 = G__8799;
i__8743 = G__8800;
continue;
}
} else
{var lh = cljs.core.first.call(null,seq__8736__$1);var seq__8737_8801 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",4124874251),new cljs.core.Keyword(null,"underline","underline",4281907774)], null));var chunk__8738_8802 = null;var count__8739_8803 = 0;var i__8740_8804 = 0;while(true){
if((i__8740_8804 < count__8739_8803))
{var type_8805 = cljs.core._nth.call(null,chunk__8738_8802,i__8740_8804);var temp__4092__auto___8806__$1 = cljs.core.get.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lh,type_8805], null));if(cljs.core.truth_(temp__4092__auto___8806__$1))
{var widget_8807 = temp__4092__auto___8806__$1;lt.object.raise.call(null,widget_8807,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{}
{
var G__8808 = seq__8737_8801;
var G__8809 = chunk__8738_8802;
var G__8810 = count__8739_8803;
var G__8811 = (i__8740_8804 + 1);
seq__8737_8801 = G__8808;
chunk__8738_8802 = G__8809;
count__8739_8803 = G__8810;
i__8740_8804 = G__8811;
continue;
}
} else
{var temp__4092__auto___8812__$1 = cljs.core.seq.call(null,seq__8737_8801);if(temp__4092__auto___8812__$1)
{var seq__8737_8813__$1 = temp__4092__auto___8812__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8737_8813__$1))
{var c__7119__auto___8814 = cljs.core.chunk_first.call(null,seq__8737_8813__$1);{
var G__8815 = cljs.core.chunk_rest.call(null,seq__8737_8813__$1);
var G__8816 = c__7119__auto___8814;
var G__8817 = cljs.core.count.call(null,c__7119__auto___8814);
var G__8818 = 0;
seq__8737_8801 = G__8815;
chunk__8738_8802 = G__8816;
count__8739_8803 = G__8817;
i__8740_8804 = G__8818;
continue;
}
} else
{var type_8819 = cljs.core.first.call(null,seq__8737_8813__$1);var temp__4092__auto___8820__$2 = cljs.core.get.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lh,type_8819], null));if(cljs.core.truth_(temp__4092__auto___8820__$2))
{var widget_8821 = temp__4092__auto___8820__$2;lt.object.raise.call(null,widget_8821,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{}
{
var G__8822 = cljs.core.next.call(null,seq__8737_8813__$1);
var G__8823 = null;
var G__8824 = 0;
var G__8825 = 0;
seq__8737_8801 = G__8822;
chunk__8738_8802 = G__8823;
count__8739_8803 = G__8824;
i__8740_8804 = G__8825;
continue;
}
}
} else
{}
}
break;
}
{
var G__8826 = cljs.core.next.call(null,seq__8736__$1);
var G__8827 = null;
var G__8828 = 0;
var G__8829 = 0;
seq__8736 = G__8826;
chunk__8741 = G__8827;
count__8742 = G__8828;
i__8743 = G__8829;
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
var __BEH__eval__DOT__one__delegate = function (editor,p__8748){var vec__8750 = p__8748;var move = cljs.core.nth.call(null,vec__8750,0,null);var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null));lt.objs.notifos.working.call(null);
return (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?lt.objs.langs.julia.eval.eval_selection:lt.objs.langs.julia.eval.eval_block).call(null,editor,client,move);
};
var __BEH__eval__DOT__one = function (editor,var_args){
var p__8748 = null;if (arguments.length > 1) {
  p__8748 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__eval__DOT__one__delegate.call(this,editor,p__8748);};
__BEH__eval__DOT__one.cljs$lang$maxFixedArity = 1;
__BEH__eval__DOT__one.cljs$lang$applyTo = (function (arglist__8830){
var editor = cljs.core.first(arglist__8830);
var p__8748 = cljs.core.rest(arglist__8830);
return __BEH__eval__DOT__one__delegate(editor,p__8748);
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
lt.objs.langs.julia.eval.__BEH__result = (function __BEH__result(editor,p__8751){var map__8754 = p__8751;var map__8754__$1 = ((cljs.core.seq_QMARK_.call(null,map__8754))?cljs.core.apply.call(null,cljs.core.hash_map,map__8754):map__8754);var info = cljs.core.get.call(null,map__8754__$1,new cljs.core.Keyword(null,"info","info",1017141280));var under = cljs.core.get.call(null,map__8754__$1,new cljs.core.Keyword(null,"under","under",1125332554));var html = cljs.core.get.call(null,map__8754__$1,new cljs.core.Keyword(null,"html","html",1017117469));var value = cljs.core.get.call(null,map__8754__$1,new cljs.core.Keyword(null,"value","value",1125876963));var vec__8755 = cljs.core.get.call(null,map__8754__$1,new cljs.core.Keyword(null,"bounds","bounds",3925666343));var start = cljs.core.nth.call(null,vec__8755,0,null);var end = cljs.core.nth.call(null,vec__8755,1,null);lt.objs.notifos.done_working.call(null);
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
lt.objs.langs.julia.eval.get_error_line = (function get_error_line(link){var vec__8757 = cljs.core.re_find.call(null,lt.objs.file_links.url_pattern,lt.objs.file_links.data_file.call(null,link));var _ = cljs.core.nth.call(null,vec__8757,0,null);var file = cljs.core.nth.call(null,vec__8757,1,null);var line = cljs.core.nth.call(null,vec__8757,2,null);if(cljs.core.truth_((function (){var and__6359__auto__ = file;if(cljs.core.truth_(and__6359__auto__))
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
lt.objs.langs.julia.completions.__BEH__update_hints = (function __BEH__update_hints(editor,p__8698){var map__8700 = p__8698;var map__8700__$1 = ((cljs.core.seq_QMARK_.call(null,map__8700))?cljs.core.apply.call(null,cljs.core.hash_map,map__8700):map__8700);var res = map__8700__$1;var pattern = cljs.core.get.call(null,map__8700__$1,new cljs.core.Keyword(null,"pattern","pattern",4517781250));var notextual = cljs.core.get.call(null,map__8700__$1,new cljs.core.Keyword(null,"notextual","notextual",2817977764));var hints = cljs.core.get.call(null,map__8700__$1,new cljs.core.Keyword(null,"hints","hints",1113187902));lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token-pattern","token-pattern",4483347246),(cljs.core.truth_(pattern)?(new RegExp([cljs.core.str(pattern),cljs.core.str("$")].join(''))):null)], null));
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
mathjax_queue.cljs$lang$applyTo = (function (arglist__8436){
var args = cljs.core.seq(arglist__8436);
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
lt.plugins.touchdown.editor_for_file = (function editor_for_file(file){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8425_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8425_SHARP_))),file);
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
lt.objs.langs.julia.module.__GT_module_str = (function __GT_module_str(p__8841){var map__8849 = p__8841;var map__8849__$1 = ((cljs.core.seq_QMARK_.call(null,map__8849))?cljs.core.apply.call(null,cljs.core.hash_map,map__8849):map__8849);var module = cljs.core.get.call(null,map__8849__$1,new cljs.core.Keyword(null,"module","module",4240087518));var e__7952__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.module.clickable","span.module.clickable",3384694646),[cljs.core.str(module),cljs.core.str("\t")].join('')], null));var seq__8850_8872 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7952__auto__,map__8849,map__8849__$1,module){
return (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"julia.set-module","julia.set-module",3617383774));
});})(e__7952__auto__,map__8849,map__8849__$1,module))
], null)));var chunk__8851_8873 = null;var count__8852_8874 = 0;var i__8853_8875 = 0;while(true){
if((i__8853_8875 < count__8852_8874))
{var vec__8854_8876 = cljs.core._nth.call(null,chunk__8851_8873,i__8853_8875);var ev__7953__auto___8877 = cljs.core.nth.call(null,vec__8854_8876,0,null);var func__7954__auto___8878 = cljs.core.nth.call(null,vec__8854_8876,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8877,func__7954__auto___8878);
{
var G__8879 = seq__8850_8872;
var G__8880 = chunk__8851_8873;
var G__8881 = count__8852_8874;
var G__8882 = (i__8853_8875 + 1);
seq__8850_8872 = G__8879;
chunk__8851_8873 = G__8880;
count__8852_8874 = G__8881;
i__8853_8875 = G__8882;
continue;
}
} else
{var temp__4092__auto___8883 = cljs.core.seq.call(null,seq__8850_8872);if(temp__4092__auto___8883)
{var seq__8850_8884__$1 = temp__4092__auto___8883;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8850_8884__$1))
{var c__7119__auto___8885 = cljs.core.chunk_first.call(null,seq__8850_8884__$1);{
var G__8886 = cljs.core.chunk_rest.call(null,seq__8850_8884__$1);
var G__8887 = c__7119__auto___8885;
var G__8888 = cljs.core.count.call(null,c__7119__auto___8885);
var G__8889 = 0;
seq__8850_8872 = G__8886;
chunk__8851_8873 = G__8887;
count__8852_8874 = G__8888;
i__8853_8875 = G__8889;
continue;
}
} else
{var vec__8855_8890 = cljs.core.first.call(null,seq__8850_8884__$1);var ev__7953__auto___8891 = cljs.core.nth.call(null,vec__8855_8890,0,null);var func__7954__auto___8892 = cljs.core.nth.call(null,vec__8855_8890,1,null);lt.util.dom.on.call(null,e__7952__auto__,ev__7953__auto___8891,func__7954__auto___8892);
{
var G__8893 = cljs.core.next.call(null,seq__8850_8884__$1);
var G__8894 = null;
var G__8895 = 0;
var G__8896 = 0;
seq__8850_8872 = G__8893;
chunk__8851_8873 = G__8894;
count__8852_8874 = G__8895;
i__8853_8875 = G__8896;
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
var get_module__delegate = function (editor,p__8856){var vec__8858 = p__8856;var client = cljs.core.nth.call(null,vec__8858,0,null);var temp__4092__auto__ = (function (){var or__6371__auto__ = client;if(cljs.core.truth_(or__6371__auto__))
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
var p__8856 = null;if (arguments.length > 1) {
  p__8856 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get_module__delegate.call(this,editor,p__8856);};
get_module.cljs$lang$maxFixedArity = 1;
get_module.cljs$lang$applyTo = (function (arglist__8897){
var editor = cljs.core.first(arglist__8897);
var p__8856 = cljs.core.rest(arglist__8897);
return get_module__delegate(editor,p__8856);
});
get_module.cljs$core$IFn$_invoke$arity$variadic = get_module__delegate;
return get_module;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","get-module","lt.objs.langs.julia.module/get-module",2880297552),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.get_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),null,new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.objs.langs.julia.module.__BEH__set_module = (function __BEH__set_module(editor,module){lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.module","module","lt.objs.langs.julia.module/module",3266506741),module], null));
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"module-update","module-update",2454986428));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","set-module","lt.objs.langs.julia.module/set-module",956127132),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.__BEH__set_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.set-module","julia.set-module",3617383774),null], null), null));
lt.objs.langs.julia.module.__BEH__set_modules = (function __BEH__set_modules(julia,p__8859){var map__8861 = p__8859;var map__8861__$1 = ((cljs.core.seq_QMARK_.call(null,map__8861))?cljs.core.apply.call(null,cljs.core.hash_map,map__8861):map__8861);var modules = cljs.core.get.call(null,map__8861__$1,new cljs.core.Keyword(null,"modules","modules",2241338105));lt.object.merge_BANG_.call(null,julia,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.module","modules","lt.objs.langs.julia.module/modules",1256091916),cljs.core.sort.call(null,modules)], null));
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