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
var widget__delegate = function (editor,line,p__8791){var vec__8793 = p__8791;var type = cljs.core.nth.call(null,vec__8793,0,null);return cljs.core.get.call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.editor.line_handle.call(null,editor,line),(function (){var or__6371__auto__ = type;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return new cljs.core.Keyword(null,"inline","inline",4124874251);
}
})()], null));
};
var widget = function (editor,line,var_args){
var p__8791 = null;if (arguments.length > 2) {
  p__8791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return widget__delegate.call(this,editor,line,p__8791);};
widget.cljs$lang$maxFixedArity = 2;
widget.cljs$lang$applyTo = (function (arglist__8813){
var editor = cljs.core.first(arglist__8813);
arglist__8813 = cljs.core.next(arglist__8813);
var line = cljs.core.first(arglist__8813);
var p__8791 = cljs.core.rest(arglist__8813);
return widget__delegate(editor,line,p__8791);
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
return (function (p1__8794_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"text/javascript",null], null), null),p1__8794_SHARP_.type);
});})(scripts))
,scripts));
});
lt.objs.langs.julia.util.eval_scripts = (function eval_scripts(scripts){var seq__8799 = cljs.core.seq.call(null,scripts);var chunk__8800 = null;var count__8801 = 0;var i__8802 = 0;while(true){
if((i__8802 < count__8801))
{var script = cljs.core._nth.call(null,chunk__8800,i__8802);window.eval(script);
{
var G__8814 = seq__8799;
var G__8815 = chunk__8800;
var G__8816 = count__8801;
var G__8817 = (i__8802 + 1);
seq__8799 = G__8814;
chunk__8800 = G__8815;
count__8801 = G__8816;
i__8802 = G__8817;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8799);if(temp__4092__auto__)
{var seq__8799__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8799__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8799__$1);{
var G__8818 = cljs.core.chunk_rest.call(null,seq__8799__$1);
var G__8819 = c__7119__auto__;
var G__8820 = cljs.core.count.call(null,c__7119__auto__);
var G__8821 = 0;
seq__8799 = G__8818;
chunk__8800 = G__8819;
count__8801 = G__8820;
i__8802 = G__8821;
continue;
}
} else
{var script = cljs.core.first.call(null,seq__8799__$1);window.eval(script);
{
var G__8822 = cljs.core.next.call(null,seq__8799__$1);
var G__8823 = null;
var G__8824 = 0;
var G__8825 = 0;
seq__8799 = G__8822;
chunk__8800 = G__8823;
count__8801 = G__8824;
i__8802 = G__8825;
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
goog.require('lt.objs.popup');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.objs.langs.julia.__BEH__commands = (function __BEH__commands(editor,res){var pred__8829 = cljs.core._EQ_;var expr__8830 = res.call(null,new cljs.core.Keyword(null,"cmd","cmd",1014002860));if(cljs.core.truth_(pred__8829.call(null,"popup",expr__8830)))
{return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),res.call(null,new cljs.core.Keyword(null,"header","header",4087600639)),new cljs.core.Keyword(null,"body","body",1016933652),res.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"buttons","buttons",1255256819),res.call(null,new cljs.core.Keyword(null,"buttons","buttons",1255256819))], null));
} else
{if(cljs.core.truth_(pred__8829.call(null,"print",expr__8830)))
{return lt.objs.console.log.call(null,res.call(null,new cljs.core.Keyword(null,"value","value",1125876963)),(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))?"error":null));
} else
{if(cljs.core.truth_(pred__8829.call(null,"done",expr__8830)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659))))
{return lt.objs.notifos.done_working.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)));
} else
{return lt.objs.notifos.done_working.call(null);
}
} else
{if(cljs.core.truth_(pred__8829.call(null,"notify",expr__8830)))
{return lt.objs.notifos.set_msg_BANG_.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),res.call(null,new cljs.core.Keyword(null,"class","class",1108647146))], null));
} else
{if(cljs.core.truth_(pred__8829.call(null,"console",expr__8830)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469))))
{var val = crate.raw.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));var scripts = lt.objs.langs.julia.util.get_scripts.call(null,val);lt.objs.console.verbatim.call(null,val);
return lt.objs.langs.julia.util.eval_scripts.call(null,scripts);
} else
{return lt.objs.console.log.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));
}
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8830)].join('')));
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
{var ed = temp__4092__auto__;var seq__8832_8840 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.map.call(null,cljs.core.deref,cljs.core.vals.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))))));var chunk__8833_8841 = null;var count__8834_8842 = 0;var i__8835_8843 = 0;while(true){
if((i__8835_8843 < count__8834_8842))
{var proc_8844 = cljs.core._nth.call(null,chunk__8833_8841,i__8835_8843);proc_8844.kill("SIGINT");
{
var G__8845 = seq__8832_8840;
var G__8846 = chunk__8833_8841;
var G__8847 = count__8834_8842;
var G__8848 = (i__8835_8843 + 1);
seq__8832_8840 = G__8845;
chunk__8833_8841 = G__8846;
count__8834_8842 = G__8847;
i__8835_8843 = G__8848;
continue;
}
} else
{var temp__4092__auto___8849__$1 = cljs.core.seq.call(null,seq__8832_8840);if(temp__4092__auto___8849__$1)
{var seq__8832_8850__$1 = temp__4092__auto___8849__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8832_8850__$1))
{var c__7119__auto___8851 = cljs.core.chunk_first.call(null,seq__8832_8850__$1);{
var G__8852 = cljs.core.chunk_rest.call(null,seq__8832_8850__$1);
var G__8853 = c__7119__auto___8851;
var G__8854 = cljs.core.count.call(null,c__7119__auto___8851);
var G__8855 = 0;
seq__8832_8840 = G__8852;
chunk__8833_8841 = G__8853;
count__8834_8842 = G__8854;
i__8835_8843 = G__8855;
continue;
}
} else
{var proc_8856 = cljs.core.first.call(null,seq__8832_8850__$1);proc_8856.kill("SIGINT");
{
var G__8857 = cljs.core.next.call(null,seq__8832_8850__$1);
var G__8858 = null;
var G__8859 = 0;
var G__8860 = 0;
seq__8832_8840 = G__8857;
chunk__8833_8841 = G__8858;
count__8834_8842 = G__8859;
i__8835_8843 = G__8860;
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
{var ed = temp__4092__auto__;var seq__8836_8861 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.map.call(null,cljs.core.deref,cljs.core.vals.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))))));var chunk__8837_8862 = null;var count__8838_8863 = 0;var i__8839_8864 = 0;while(true){
if((i__8839_8864 < count__8838_8863))
{var proc_8865 = cljs.core._nth.call(null,chunk__8837_8862,i__8839_8864);proc_8865.kill();
{
var G__8866 = seq__8836_8861;
var G__8867 = chunk__8837_8862;
var G__8868 = count__8838_8863;
var G__8869 = (i__8839_8864 + 1);
seq__8836_8861 = G__8866;
chunk__8837_8862 = G__8867;
count__8838_8863 = G__8868;
i__8839_8864 = G__8869;
continue;
}
} else
{var temp__4092__auto___8870__$1 = cljs.core.seq.call(null,seq__8836_8861);if(temp__4092__auto___8870__$1)
{var seq__8836_8871__$1 = temp__4092__auto___8870__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8836_8871__$1))
{var c__7119__auto___8872 = cljs.core.chunk_first.call(null,seq__8836_8871__$1);{
var G__8873 = cljs.core.chunk_rest.call(null,seq__8836_8871__$1);
var G__8874 = c__7119__auto___8872;
var G__8875 = cljs.core.count.call(null,c__7119__auto___8872);
var G__8876 = 0;
seq__8836_8861 = G__8873;
chunk__8837_8862 = G__8874;
count__8838_8863 = G__8875;
i__8839_8864 = G__8876;
continue;
}
} else
{var proc_8877 = cljs.core.first.call(null,seq__8836_8871__$1);proc_8877.kill();
{
var G__8878 = cljs.core.next.call(null,seq__8836_8871__$1);
var G__8879 = null;
var G__8880 = 0;
var G__8881 = 0;
seq__8836_8861 = G__8878;
chunk__8837_8862 = G__8879;
count__8838_8863 = G__8880;
i__8839_8864 = G__8881;
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
lt.objs.langs.julia.proc.__BEH__flush = (function __BEH__flush(this$){var temp__4092__auto___8573 = cljs.core.not_empty.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633)));if(cljs.core.truth_(temp__4092__auto___8573))
{var out_8574 = temp__4092__auto___8573;lt.objs.console.log.call(null,out_8574);
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
var connect__delegate = function (p__8550){var map__8552 = p__8550;var map__8552__$1 = ((cljs.core.seq_QMARK_.call(null,map__8552))?cljs.core.apply.call(null,cljs.core.hash_map,map__8552):map__8552);var complain = cljs.core.get.call(null,map__8552__$1,new cljs.core.Keyword(null,"complain","complain",4709422171),true);var notify = cljs.core.get.call(null,map__8552__$1,new cljs.core.Keyword(null,"notify","notify",4269181627),false);if(cljs.core.truth_(notify))
{lt.objs.notifos.working.call(null,"Spinning up a Julia client...");
} else
{}
var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"julia.client","julia.client",3830708594));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connecting-notifier","lt.objs.langs.julia.proc/connecting-notifier",4154824301),client);lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"notify","notify",4269181627),notify,new cljs.core.Keyword(null,"complain","complain",4709422171),complain], null));
lt.objs.langs.julia.proc.with_dir.call(null,lt.objs.files.home.call(null),((function (client,obj,map__8552,map__8552__$1,complain,notify){
return (function (){return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),lt.objs.langs.julia.proc.julia_path.call(null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.langs.julia.proc.init,lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client)], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});})(client,obj,map__8552,map__8552__$1,complain,notify))
);
lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.first.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))], null));
lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"julia.set-global-client","julia.set-global-client",3983623463),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"only","only",1017320222),lt.objs.langs.julia.julia);
lt.objs.langs.julia.proc.set_default_client.call(null,client);
return client;
};
var connect = function (var_args){
var p__8550 = null;if (arguments.length > 0) {
  p__8550 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return connect__delegate.call(this,p__8550);};
connect.cljs$lang$maxFixedArity = 0;
connect.cljs$lang$applyTo = (function (arglist__8575){
var p__8550 = cljs.core.seq(arglist__8575);
return connect__delegate(p__8550);
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
var seq__8557 = cljs.core.seq.call(null,lt.objs.editor.pool.get_all.call(null));var chunk__8558 = null;var count__8559 = 0;var i__8560 = 0;while(true){
if((i__8560 < count__8559))
{var editor = cljs.core._nth.call(null,chunk__8558,i__8560);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),client);
{
var G__8576 = seq__8557;
var G__8577 = chunk__8558;
var G__8578 = count__8559;
var G__8579 = (i__8560 + 1);
seq__8557 = G__8576;
chunk__8558 = G__8577;
count__8559 = G__8578;
i__8560 = G__8579;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8557);if(temp__4092__auto__)
{var seq__8557__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8557__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8557__$1);{
var G__8580 = cljs.core.chunk_rest.call(null,seq__8557__$1);
var G__8581 = c__7119__auto__;
var G__8582 = cljs.core.count.call(null,c__7119__auto__);
var G__8583 = 0;
seq__8557 = G__8580;
chunk__8558 = G__8581;
count__8559 = G__8582;
i__8560 = G__8583;
continue;
}
} else
{var editor = cljs.core.first.call(null,seq__8557__$1);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),client);
{
var G__8584 = cljs.core.next.call(null,seq__8557__$1);
var G__8585 = null;
var G__8586 = 0;
var G__8587 = 0;
seq__8557 = G__8584;
chunk__8558 = G__8585;
count__8559 = G__8586;
i__8560 = G__8587;
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
lt.objs.langs.julia.proc.connect_client = (function connect_client(editor,client){if(cljs.core.truth_((function (){var G__8562 = cljs.core.deref.call(null,editor);var G__8562__$1 = (((G__8562 == null))?null:new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(G__8562));var G__8562__$2 = (((G__8562__$1 == null))?null:new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(G__8562__$1));var G__8562__$3 = (((G__8562__$2 == null))?null:cljs.core.deref.call(null,G__8562__$2));var G__8562__$4 = (((G__8562__$3 == null))?null:new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(G__8562__$3));return G__8562__$4;
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
var this$__$1 = this;var seq__8328 = cljs.core.seq.call(null,self__.watches);var chunk__8329 = null;var count__8330 = 0;var i__8331 = 0;while(true){
if((i__8331 < count__8330))
{var vec__8332 = cljs.core._nth.call(null,chunk__8329,i__8331);var key__$1 = cljs.core.nth.call(null,vec__8332,0,null);var f = cljs.core.nth.call(null,vec__8332,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8407 = seq__8328;
var G__8408 = chunk__8329;
var G__8409 = count__8330;
var G__8410 = (i__8331 + 1);
seq__8328 = G__8407;
chunk__8329 = G__8408;
count__8330 = G__8409;
i__8331 = G__8410;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8328);if(temp__4092__auto__)
{var seq__8328__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8328__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8328__$1);{
var G__8411 = cljs.core.chunk_rest.call(null,seq__8328__$1);
var G__8412 = c__7119__auto__;
var G__8413 = cljs.core.count.call(null,c__7119__auto__);
var G__8414 = 0;
seq__8328 = G__8411;
chunk__8329 = G__8412;
count__8330 = G__8413;
i__8331 = G__8414;
continue;
}
} else
{var vec__8333 = cljs.core.first.call(null,seq__8328__$1);var key__$1 = cljs.core.nth.call(null,vec__8333,0,null);var f = cljs.core.nth.call(null,vec__8333,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8415 = cljs.core.next.call(null,seq__8328__$1);
var G__8416 = null;
var G__8417 = 0;
var G__8418 = 0;
seq__8328 = G__8415;
chunk__8329 = G__8416;
count__8330 = G__8417;
i__8331 = G__8418;
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
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__8335 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__8335,0,null);var path__$2 = cljs.core.nth.call(null,vec__8335,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__8335,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__8335,atm__$1,path__$2,k,sa))
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
var G__8419__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8419 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__8419__delegate.call(this,sa,f,x,y,z,more);};
G__8419.cljs$lang$maxFixedArity = 5;
G__8419.cljs$lang$applyTo = (function (arglist__8420){
var sa = cljs.core.first(arglist__8420);
arglist__8420 = cljs.core.next(arglist__8420);
var f = cljs.core.first(arglist__8420);
arglist__8420 = cljs.core.next(arglist__8420);
var x = cljs.core.first(arglist__8420);
arglist__8420 = cljs.core.next(arglist__8420);
var y = cljs.core.first(arglist__8420);
arglist__8420 = cljs.core.next(arglist__8420);
var z = cljs.core.first(arglist__8420);
var more = cljs.core.rest(arglist__8420);
return G__8419__delegate(sa,f,x,y,z,more);
});
G__8419.cljs$core$IFn$_invoke$arity$variadic = G__8419__delegate;
return G__8419;
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
crate.binding.computable = (function (){var obj8337 = {};return obj8337;
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
var this$__$1 = this;var seq__8338 = cljs.core.seq.call(null,self__.watches);var chunk__8339 = null;var count__8340 = 0;var i__8341 = 0;while(true){
if((i__8341 < count__8340))
{var vec__8342 = cljs.core._nth.call(null,chunk__8339,i__8341);var key__$1 = cljs.core.nth.call(null,vec__8342,0,null);var f = cljs.core.nth.call(null,vec__8342,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8421 = seq__8338;
var G__8422 = chunk__8339;
var G__8423 = count__8340;
var G__8424 = (i__8341 + 1);
seq__8338 = G__8421;
chunk__8339 = G__8422;
count__8340 = G__8423;
i__8341 = G__8424;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8338);if(temp__4092__auto__)
{var seq__8338__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8338__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8338__$1);{
var G__8425 = cljs.core.chunk_rest.call(null,seq__8338__$1);
var G__8426 = c__7119__auto__;
var G__8427 = cljs.core.count.call(null,c__7119__auto__);
var G__8428 = 0;
seq__8338 = G__8425;
chunk__8339 = G__8426;
count__8340 = G__8427;
i__8341 = G__8428;
continue;
}
} else
{var vec__8343 = cljs.core.first.call(null,seq__8338__$1);var key__$1 = cljs.core.nth.call(null,vec__8343,0,null);var f = cljs.core.nth.call(null,vec__8343,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8429 = cljs.core.next.call(null,seq__8338__$1);
var G__8430 = null;
var G__8431 = 0;
var G__8432 = 0;
seq__8338 = G__8429;
chunk__8339 = G__8430;
count__8340 = G__8431;
i__8341 = G__8432;
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
var seq__8348_8433 = cljs.core.seq.call(null,atms);var chunk__8349_8434 = null;var count__8350_8435 = 0;var i__8351_8436 = 0;while(true){
if((i__8351_8436 < count__8350_8435))
{var atm_8437 = cljs.core._nth.call(null,chunk__8349_8434,i__8351_8436);crate.binding._depend.call(null,neue,atm_8437);
{
var G__8438 = seq__8348_8433;
var G__8439 = chunk__8349_8434;
var G__8440 = count__8350_8435;
var G__8441 = (i__8351_8436 + 1);
seq__8348_8433 = G__8438;
chunk__8349_8434 = G__8439;
count__8350_8435 = G__8440;
i__8351_8436 = G__8441;
continue;
}
} else
{var temp__4092__auto___8442 = cljs.core.seq.call(null,seq__8348_8433);if(temp__4092__auto___8442)
{var seq__8348_8443__$1 = temp__4092__auto___8442;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8348_8443__$1))
{var c__7119__auto___8444 = cljs.core.chunk_first.call(null,seq__8348_8443__$1);{
var G__8445 = cljs.core.chunk_rest.call(null,seq__8348_8443__$1);
var G__8446 = c__7119__auto___8444;
var G__8447 = cljs.core.count.call(null,c__7119__auto___8444);
var G__8448 = 0;
seq__8348_8433 = G__8445;
chunk__8349_8434 = G__8446;
count__8350_8435 = G__8447;
i__8351_8436 = G__8448;
continue;
}
} else
{var atm_8449 = cljs.core.first.call(null,seq__8348_8443__$1);crate.binding._depend.call(null,neue,atm_8449);
{
var G__8450 = cljs.core.next.call(null,seq__8348_8443__$1);
var G__8451 = null;
var G__8452 = 0;
var G__8453 = 0;
seq__8348_8433 = G__8450;
chunk__8349_8434 = G__8451;
count__8350_8435 = G__8452;
i__8351_8436 = G__8453;
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
crate.binding.bindable_coll = (function (){var obj8353 = {};return obj8353;
})();
crate.binding.bindable = (function (){var obj8355 = {};return obj8355;
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
var this$__$1 = this;var seq__8356 = cljs.core.seq.call(null,self__.watches);var chunk__8357 = null;var count__8358 = 0;var i__8359 = 0;while(true){
if((i__8359 < count__8358))
{var vec__8360 = cljs.core._nth.call(null,chunk__8357,i__8359);var key = cljs.core.nth.call(null,vec__8360,0,null);var f = cljs.core.nth.call(null,vec__8360,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8454 = seq__8356;
var G__8455 = chunk__8357;
var G__8456 = count__8358;
var G__8457 = (i__8359 + 1);
seq__8356 = G__8454;
chunk__8357 = G__8455;
count__8358 = G__8456;
i__8359 = G__8457;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8356);if(temp__4092__auto__)
{var seq__8356__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8356__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8356__$1);{
var G__8458 = cljs.core.chunk_rest.call(null,seq__8356__$1);
var G__8459 = c__7119__auto__;
var G__8460 = cljs.core.count.call(null,c__7119__auto__);
var G__8461 = 0;
seq__8356 = G__8458;
chunk__8357 = G__8459;
count__8358 = G__8460;
i__8359 = G__8461;
continue;
}
} else
{var vec__8361 = cljs.core.first.call(null,seq__8356__$1);var key = cljs.core.nth.call(null,vec__8361,0,null);var f = cljs.core.nth.call(null,vec__8361,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8462 = cljs.core.next.call(null,seq__8356__$1);
var G__8463 = null;
var G__8464 = 0;
var G__8465 = 0;
seq__8356 = G__8462;
chunk__8357 = G__8463;
count__8358 = G__8464;
i__8359 = G__8465;
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
return (function (_,___$1,___$2,p__8362){var vec__8363 = p__8362;var event = cljs.core.nth.call(null,vec__8363,0,null);var el = cljs.core.nth.call(null,vec__8363,1,null);var v = cljs.core.nth.call(null,vec__8363,2,null);return func.call(null,event,el,v);
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
__GT_path.cljs$lang$applyTo = (function (arglist__8466){
var bc = cljs.core.first(arglist__8466);
var segs = cljs.core.rest(arglist__8466);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__8372_8467 = cljs.core.seq.call(null,added);var chunk__8373_8468 = null;var count__8374_8469 = 0;var i__8375_8470 = 0;while(true){
if((i__8375_8470 < count__8374_8469))
{var a_8471 = cljs.core._nth.call(null,chunk__8373_8468,i__8375_8470);crate.binding.bc_add.call(null,bc,a_8471,a_8471);
{
var G__8472 = seq__8372_8467;
var G__8473 = chunk__8373_8468;
var G__8474 = count__8374_8469;
var G__8475 = (i__8375_8470 + 1);
seq__8372_8467 = G__8472;
chunk__8373_8468 = G__8473;
count__8374_8469 = G__8474;
i__8375_8470 = G__8475;
continue;
}
} else
{var temp__4092__auto___8476 = cljs.core.seq.call(null,seq__8372_8467);if(temp__4092__auto___8476)
{var seq__8372_8477__$1 = temp__4092__auto___8476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8372_8477__$1))
{var c__7119__auto___8478 = cljs.core.chunk_first.call(null,seq__8372_8477__$1);{
var G__8479 = cljs.core.chunk_rest.call(null,seq__8372_8477__$1);
var G__8480 = c__7119__auto___8478;
var G__8481 = cljs.core.count.call(null,c__7119__auto___8478);
var G__8482 = 0;
seq__8372_8467 = G__8479;
chunk__8373_8468 = G__8480;
count__8374_8469 = G__8481;
i__8375_8470 = G__8482;
continue;
}
} else
{var a_8483 = cljs.core.first.call(null,seq__8372_8477__$1);crate.binding.bc_add.call(null,bc,a_8483,a_8483);
{
var G__8484 = cljs.core.next.call(null,seq__8372_8477__$1);
var G__8485 = null;
var G__8486 = 0;
var G__8487 = 0;
seq__8372_8467 = G__8484;
chunk__8373_8468 = G__8485;
count__8374_8469 = G__8486;
i__8375_8470 = G__8487;
continue;
}
}
} else
{}
}
break;
}
var seq__8376 = cljs.core.seq.call(null,removed);var chunk__8377 = null;var count__8378 = 0;var i__8379 = 0;while(true){
if((i__8379 < count__8378))
{var r = cljs.core._nth.call(null,chunk__8377,i__8379);crate.binding.bc_remove.call(null,bc,r);
{
var G__8488 = seq__8376;
var G__8489 = chunk__8377;
var G__8490 = count__8378;
var G__8491 = (i__8379 + 1);
seq__8376 = G__8488;
chunk__8377 = G__8489;
count__8378 = G__8490;
i__8379 = G__8491;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8376);if(temp__4092__auto__)
{var seq__8376__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8376__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8376__$1);{
var G__8492 = cljs.core.chunk_rest.call(null,seq__8376__$1);
var G__8493 = c__7119__auto__;
var G__8494 = cljs.core.count.call(null,c__7119__auto__);
var G__8495 = 0;
seq__8376 = G__8492;
chunk__8377 = G__8493;
count__8378 = G__8494;
i__8379 = G__8495;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8376__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__8496 = cljs.core.next.call(null,seq__8376__$1);
var G__8497 = null;
var G__8498 = 0;
var G__8499 = 0;
seq__8376 = G__8496;
chunk__8377 = G__8497;
count__8378 = G__8498;
i__8379 = G__8499;
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
var bound_coll__delegate = function (atm,p__8380){var vec__8383 = p__8380;var path = cljs.core.nth.call(null,vec__8383,0,null);var opts = cljs.core.nth.call(null,vec__8383,1,null);var vec__8384 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__8384,0,null);var opts__$1 = cljs.core.nth.call(null,vec__8384,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__8384,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8383,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__8384,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8383,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__8380 = null;if (arguments.length > 1) {
  p__8380 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__8380);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8500){
var atm = cljs.core.first(arglist__8500);
var p__8380 = cljs.core.rest(arglist__8500);
return bound_coll__delegate(atm,p__8380);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8385){var vec__8387 = p__8385;var opts = cljs.core.nth.call(null,vec__8387,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__8387,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__8387,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__8385 = null;if (arguments.length > 2) {
  p__8385 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__8385);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8501){
var as = cljs.core.first(arglist__8501);
arglist__8501 = cljs.core.next(arglist__8501);
var atm = cljs.core.first(arglist__8501);
var p__8385 = cljs.core.rest(arglist__8501);
return map_bound__delegate(as,atm,p__8385);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__8389 = b;if(G__8389)
{var bit__7021__auto__ = null;if(cljs.core.truth_((function (){var or__6371__auto__ = bit__7021__auto__;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return G__8389.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8389.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8389);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8389);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__8391 = b;if(G__8391)
{var bit__7021__auto__ = null;if(cljs.core.truth_((function (){var or__6371__auto__ = bit__7021__auto__;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return G__8391.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8391.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8391);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8391);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__8393 = atm;if(G__8393)
{var bit__7021__auto__ = (G__8393.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7021__auto__) || (G__8393.cljs$core$IDeref$))
{return true;
} else
{if((!G__8393.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8393);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8393);
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
var bound__delegate = function (atm,p__8394){var vec__8396 = p__8394;var func = cljs.core.nth.call(null,vec__8396,0,null);var func__$1 = (function (){var or__6371__auto__ = func;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__8394 = null;if (arguments.length > 1) {
  p__8394 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__8394);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8502){
var atm = cljs.core.first(arglist__8502);
var p__8394 = cljs.core.rest(arglist__8502);
return bound__delegate(atm,p__8394);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.stats')) {
goog.provide('lt.objs.langs.julia.stats');
goog.require('cljs.core');
goog.require('lt.objs.cache');
goog.require('lt.objs.cache');
lt.objs.langs.julia.stats.http = require("http");
lt.objs.langs.julia.stats.hit = (function hit(page){return lt.objs.langs.julia.stats.http.get(page);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.stats","metrics","lt.objs.langs.julia.stats/metrics",1111343317),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (){return lt.objs.langs.julia.stats.hit.call(null,[cljs.core.str("http://mikeinn.es/hit?id="),cljs.core.str(cljs.core.deref.call(null,lt.objs.cache.settings).call(null,new cljs.core.Keyword(null,"uid","uid",1014020034)))].join(''));
}),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.patch')) {
goog.provide('lt.objs.langs.julia.patch');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.eval');
goog.require('lt.objs.eval');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.langs.julia.util');
lt.objs.langs.julia.patch.__GT_inline_exception = (function __GT_inline_exception(this$,info){var e__7846__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,lt.objs.eval.__GT_exception_class)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),lt.objs.eval.__GT_spacing.call(null,lt.objs.editor.line.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(info))))], null),((typeof new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)], null))], null));var seq__8509_8525 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7846__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"click","click",1108654330));
});})(e__7846__auto__))
,new cljs.core.Keyword(null,"contextmenu","contextmenu",911789824),((function (e__7846__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"menu!","menu!",1117686292),e);
});})(e__7846__auto__))
,new cljs.core.Keyword(null,"dblclick","dblclick",3463991820),((function (e__7846__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"double-click","double-click",956590078));
});})(e__7846__auto__))
], null)));var chunk__8510_8526 = null;var count__8511_8527 = 0;var i__8512_8528 = 0;while(true){
if((i__8512_8528 < count__8511_8527))
{var vec__8513_8529 = cljs.core._nth.call(null,chunk__8510_8526,i__8512_8528);var ev__7847__auto___8530 = cljs.core.nth.call(null,vec__8513_8529,0,null);var func__7848__auto___8531 = cljs.core.nth.call(null,vec__8513_8529,1,null);lt.util.dom.on.call(null,e__7846__auto__,ev__7847__auto___8530,func__7848__auto___8531);
{
var G__8532 = seq__8509_8525;
var G__8533 = chunk__8510_8526;
var G__8534 = count__8511_8527;
var G__8535 = (i__8512_8528 + 1);
seq__8509_8525 = G__8532;
chunk__8510_8526 = G__8533;
count__8511_8527 = G__8534;
i__8512_8528 = G__8535;
continue;
}
} else
{var temp__4092__auto___8536 = cljs.core.seq.call(null,seq__8509_8525);if(temp__4092__auto___8536)
{var seq__8509_8537__$1 = temp__4092__auto___8536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8509_8537__$1))
{var c__7119__auto___8538 = cljs.core.chunk_first.call(null,seq__8509_8537__$1);{
var G__8539 = cljs.core.chunk_rest.call(null,seq__8509_8537__$1);
var G__8540 = c__7119__auto___8538;
var G__8541 = cljs.core.count.call(null,c__7119__auto___8538);
var G__8542 = 0;
seq__8509_8525 = G__8539;
chunk__8510_8526 = G__8540;
count__8511_8527 = G__8541;
i__8512_8528 = G__8542;
continue;
}
} else
{var vec__8514_8543 = cljs.core.first.call(null,seq__8509_8537__$1);var ev__7847__auto___8544 = cljs.core.nth.call(null,vec__8514_8543,0,null);var func__7848__auto___8545 = cljs.core.nth.call(null,vec__8514_8543,1,null);lt.util.dom.on.call(null,e__7846__auto__,ev__7847__auto___8544,func__7848__auto___8545);
{
var G__8546 = cljs.core.next.call(null,seq__8509_8537__$1);
var G__8547 = null;
var G__8548 = 0;
var G__8549 = 0;
seq__8509_8525 = G__8546;
chunk__8510_8526 = G__8547;
count__8511_8527 = G__8548;
i__8512_8528 = G__8549;
continue;
}
}
} else
{}
}
break;
}
return e__7846__auto__;
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
lt.objs.langs.julia.profiler.refresh_line = (function refresh_line(p__8588){var map__8590 = p__8588;var map__8590__$1 = ((cljs.core.seq_QMARK_.call(null,map__8590))?cljs.core.apply.call(null,cljs.core.hash_map,map__8590):map__8590);var l = map__8590__$1;var handle = cljs.core.get.call(null,map__8590__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));var percent = cljs.core.get.call(null,map__8590__$1,new cljs.core.Keyword(null,"percent","percent",4629944247));var line = cljs.core.get.call(null,map__8590__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__8590__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_(handle))
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
lt.objs.langs.julia.profiler.refresh_and_update = (function refresh_and_update(lines){var lines__$1 = lt.objs.langs.julia.profiler.refresh_lines.call(null,lines);var seq__8597_8661 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.editors.call(null,lines__$1));var chunk__8599_8662 = null;var count__8600_8663 = 0;var i__8601_8664 = 0;while(true){
if((i__8601_8664 < count__8600_8663))
{var ed_8665 = cljs.core._nth.call(null,chunk__8599_8662,i__8601_8664);if(cljs.core.truth_((function (){var and__6359__auto__ = ed_8665;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.deref.call(null,ed_8665);
} else
{return and__6359__auto__;
}
})()))
{lt.objs.editor.refresh.call(null,ed_8665);
{
var G__8666 = seq__8597_8661;
var G__8667 = chunk__8599_8662;
var G__8668 = count__8600_8663;
var G__8669 = (i__8601_8664 + 1);
seq__8597_8661 = G__8666;
chunk__8599_8662 = G__8667;
count__8600_8663 = G__8668;
i__8601_8664 = G__8669;
continue;
}
} else
{{
var G__8670 = seq__8597_8661;
var G__8671 = chunk__8599_8662;
var G__8672 = count__8600_8663;
var G__8673 = (i__8601_8664 + 1);
seq__8597_8661 = G__8670;
chunk__8599_8662 = G__8671;
count__8600_8663 = G__8672;
i__8601_8664 = G__8673;
continue;
}
}
} else
{var temp__4092__auto___8674 = cljs.core.seq.call(null,seq__8597_8661);if(temp__4092__auto___8674)
{var seq__8597_8675__$1 = temp__4092__auto___8674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8597_8675__$1))
{var c__7119__auto___8676 = cljs.core.chunk_first.call(null,seq__8597_8675__$1);{
var G__8677 = cljs.core.chunk_rest.call(null,seq__8597_8675__$1);
var G__8678 = c__7119__auto___8676;
var G__8679 = cljs.core.count.call(null,c__7119__auto___8676);
var G__8680 = 0;
seq__8597_8661 = G__8677;
chunk__8599_8662 = G__8678;
count__8600_8663 = G__8679;
i__8601_8664 = G__8680;
continue;
}
} else
{var ed_8681 = cljs.core.first.call(null,seq__8597_8675__$1);if(cljs.core.truth_((function (){var and__6359__auto__ = ed_8681;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.deref.call(null,ed_8681);
} else
{return and__6359__auto__;
}
})()))
{lt.objs.editor.refresh.call(null,ed_8681);
{
var G__8682 = cljs.core.next.call(null,seq__8597_8675__$1);
var G__8683 = null;
var G__8684 = 0;
var G__8685 = 0;
seq__8597_8661 = G__8682;
chunk__8599_8662 = G__8683;
count__8600_8663 = G__8684;
i__8601_8664 = G__8685;
continue;
}
} else
{{
var G__8686 = cljs.core.next.call(null,seq__8597_8675__$1);
var G__8687 = null;
var G__8688 = 0;
var G__8689 = 0;
seq__8597_8661 = G__8686;
chunk__8599_8662 = G__8687;
count__8600_8663 = G__8688;
i__8601_8664 = G__8689;
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
{var seq__8615_8690 = cljs.core.seq.call(null,cljs.core.deref.call(null,lt.objs.langs.julia.profiler.lines));var chunk__8617_8691 = null;var count__8618_8692 = 0;var i__8619_8693 = 0;while(true){
if((i__8619_8693 < count__8618_8692))
{var map__8621_8694 = cljs.core._nth.call(null,chunk__8617_8691,i__8619_8693);var map__8621_8695__$1 = ((cljs.core.seq_QMARK_.call(null,map__8621_8694))?cljs.core.apply.call(null,cljs.core.hash_map,map__8621_8694):map__8621_8694);var handle_8696 = cljs.core.get.call(null,map__8621_8695__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_8696))
{handle_8696.percent = null;
{
var G__8697 = seq__8615_8690;
var G__8698 = chunk__8617_8691;
var G__8699 = count__8618_8692;
var G__8700 = (i__8619_8693 + 1);
seq__8615_8690 = G__8697;
chunk__8617_8691 = G__8698;
count__8618_8692 = G__8699;
i__8619_8693 = G__8700;
continue;
}
} else
{{
var G__8701 = seq__8615_8690;
var G__8702 = chunk__8617_8691;
var G__8703 = count__8618_8692;
var G__8704 = (i__8619_8693 + 1);
seq__8615_8690 = G__8701;
chunk__8617_8691 = G__8702;
count__8618_8692 = G__8703;
i__8619_8693 = G__8704;
continue;
}
}
} else
{var temp__4092__auto___8705 = cljs.core.seq.call(null,seq__8615_8690);if(temp__4092__auto___8705)
{var seq__8615_8706__$1 = temp__4092__auto___8705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8615_8706__$1))
{var c__7119__auto___8707 = cljs.core.chunk_first.call(null,seq__8615_8706__$1);{
var G__8708 = cljs.core.chunk_rest.call(null,seq__8615_8706__$1);
var G__8709 = c__7119__auto___8707;
var G__8710 = cljs.core.count.call(null,c__7119__auto___8707);
var G__8711 = 0;
seq__8615_8690 = G__8708;
chunk__8617_8691 = G__8709;
count__8618_8692 = G__8710;
i__8619_8693 = G__8711;
continue;
}
} else
{var map__8622_8712 = cljs.core.first.call(null,seq__8615_8706__$1);var map__8622_8713__$1 = ((cljs.core.seq_QMARK_.call(null,map__8622_8712))?cljs.core.apply.call(null,cljs.core.hash_map,map__8622_8712):map__8622_8712);var handle_8714 = cljs.core.get.call(null,map__8622_8713__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_8714))
{handle_8714.percent = null;
{
var G__8715 = cljs.core.next.call(null,seq__8615_8706__$1);
var G__8716 = null;
var G__8717 = 0;
var G__8718 = 0;
seq__8615_8690 = G__8715;
chunk__8617_8691 = G__8716;
count__8618_8692 = G__8717;
i__8619_8693 = G__8718;
continue;
}
} else
{{
var G__8719 = cljs.core.next.call(null,seq__8615_8706__$1);
var G__8720 = null;
var G__8721 = 0;
var G__8722 = 0;
seq__8615_8690 = G__8719;
chunk__8617_8691 = G__8720;
count__8618_8692 = G__8721;
i__8619_8693 = G__8722;
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
var seq__8623 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.dom_bars.call(null));var chunk__8624 = null;var count__8625 = 0;var i__8626 = 0;while(true){
if((i__8626 < count__8625))
{var bar = cljs.core._nth.call(null,chunk__8624,i__8626);bar.remove();
{
var G__8723 = seq__8623;
var G__8724 = chunk__8624;
var G__8725 = count__8625;
var G__8726 = (i__8626 + 1);
seq__8623 = G__8723;
chunk__8624 = G__8724;
count__8625 = G__8725;
i__8626 = G__8726;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8623);if(temp__4092__auto__)
{var seq__8623__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8623__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8623__$1);{
var G__8727 = cljs.core.chunk_rest.call(null,seq__8623__$1);
var G__8728 = c__7119__auto__;
var G__8729 = cljs.core.count.call(null,c__7119__auto__);
var G__8730 = 0;
seq__8623 = G__8727;
chunk__8624 = G__8728;
count__8625 = G__8729;
i__8626 = G__8730;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__8623__$1);bar.remove();
{
var G__8731 = cljs.core.next.call(null,seq__8623__$1);
var G__8732 = null;
var G__8733 = 0;
var G__8734 = 0;
seq__8623 = G__8731;
chunk__8624 = G__8732;
count__8625 = G__8733;
i__8626 = G__8734;
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
lt.objs.langs.julia.profiler.animate_in = (function animate_in(){var bars = lt.objs.langs.julia.profiler.dom_bars.call(null);var seq__8635_8735 = cljs.core.seq.call(null,bars);var chunk__8636_8736 = null;var count__8637_8737 = 0;var i__8638_8738 = 0;while(true){
if((i__8638_8738 < count__8637_8737))
{var bar_8739 = cljs.core._nth.call(null,chunk__8636_8736,i__8638_8738);lt.util.dom.remove_class.call(null,bar_8739,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.add_class.call(null,bar_8739,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__8740 = seq__8635_8735;
var G__8741 = chunk__8636_8736;
var G__8742 = count__8637_8737;
var G__8743 = (i__8638_8738 + 1);
seq__8635_8735 = G__8740;
chunk__8636_8736 = G__8741;
count__8637_8737 = G__8742;
i__8638_8738 = G__8743;
continue;
}
} else
{var temp__4092__auto___8744 = cljs.core.seq.call(null,seq__8635_8735);if(temp__4092__auto___8744)
{var seq__8635_8745__$1 = temp__4092__auto___8744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8635_8745__$1))
{var c__7119__auto___8746 = cljs.core.chunk_first.call(null,seq__8635_8745__$1);{
var G__8747 = cljs.core.chunk_rest.call(null,seq__8635_8745__$1);
var G__8748 = c__7119__auto___8746;
var G__8749 = cljs.core.count.call(null,c__7119__auto___8746);
var G__8750 = 0;
seq__8635_8735 = G__8747;
chunk__8636_8736 = G__8748;
count__8637_8737 = G__8749;
i__8638_8738 = G__8750;
continue;
}
} else
{var bar_8751 = cljs.core.first.call(null,seq__8635_8745__$1);lt.util.dom.remove_class.call(null,bar_8751,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.add_class.call(null,bar_8751,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__8752 = cljs.core.next.call(null,seq__8635_8745__$1);
var G__8753 = null;
var G__8754 = 0;
var G__8755 = 0;
seq__8635_8735 = G__8752;
chunk__8636_8736 = G__8753;
count__8637_8737 = G__8754;
i__8638_8738 = G__8755;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.langs.julia.profiler.callback.call(null,((function (bars){
return (function (){var seq__8639 = cljs.core.seq.call(null,bars);var chunk__8640 = null;var count__8641 = 0;var i__8642 = 0;while(true){
if((i__8642 < count__8641))
{var bar = cljs.core._nth.call(null,chunk__8640,i__8642);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.remove_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__8756 = seq__8639;
var G__8757 = chunk__8640;
var G__8758 = count__8641;
var G__8759 = (i__8642 + 1);
seq__8639 = G__8756;
chunk__8640 = G__8757;
count__8641 = G__8758;
i__8642 = G__8759;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8639);if(temp__4092__auto__)
{var seq__8639__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8639__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8639__$1);{
var G__8760 = cljs.core.chunk_rest.call(null,seq__8639__$1);
var G__8761 = c__7119__auto__;
var G__8762 = cljs.core.count.call(null,c__7119__auto__);
var G__8763 = 0;
seq__8639 = G__8760;
chunk__8640 = G__8761;
count__8641 = G__8762;
i__8642 = G__8763;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__8639__$1);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"animated","animated",4513668373));
lt.util.dom.remove_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__8764 = cljs.core.next.call(null,seq__8639__$1);
var G__8765 = null;
var G__8766 = 0;
var G__8767 = 0;
seq__8639 = G__8764;
chunk__8640 = G__8765;
count__8641 = G__8766;
i__8642 = G__8767;
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
lt.objs.langs.julia.profiler.animate_out = (function animate_out(){var seq__8647 = cljs.core.seq.call(null,lt.objs.langs.julia.profiler.dom_bars.call(null));var chunk__8648 = null;var count__8649 = 0;var i__8650 = 0;while(true){
if((i__8650 < count__8649))
{var bar = cljs.core._nth.call(null,chunk__8648,i__8650);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__8768 = seq__8647;
var G__8769 = chunk__8648;
var G__8770 = count__8649;
var G__8771 = (i__8650 + 1);
seq__8647 = G__8768;
chunk__8648 = G__8769;
count__8649 = G__8770;
i__8650 = G__8771;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8647);if(temp__4092__auto__)
{var seq__8647__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8647__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8647__$1);{
var G__8772 = cljs.core.chunk_rest.call(null,seq__8647__$1);
var G__8773 = c__7119__auto__;
var G__8774 = cljs.core.count.call(null,c__7119__auto__);
var G__8775 = 0;
seq__8647 = G__8772;
chunk__8648 = G__8773;
count__8649 = G__8774;
i__8650 = G__8775;
continue;
}
} else
{var bar = cljs.core.first.call(null,seq__8647__$1);lt.util.dom.add_class.call(null,bar,new cljs.core.Keyword(null,"hidden","hidden",4091384092));
{
var G__8776 = cljs.core.next.call(null,seq__8647__$1);
var G__8777 = null;
var G__8778 = 0;
var G__8779 = 0;
seq__8647 = G__8776;
chunk__8648 = G__8777;
count__8649 = G__8778;
i__8650 = G__8779;
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
var res_obj_8780 = lt.objs.langs.julia.util.widget.call(null,editor,(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(res) - 1),new cljs.core.Keyword(null,"underline","underline",4281907774));lt.objs.langs.julia.profiler.listen_BANG_.call(null,res_obj_8780);
lt.object.add_tags.call(null,res_obj_8780,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"julia.profile-result","julia.profile-result",1163667816)], null));
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
lt.objs.highlights.refresh_line = (function refresh_line(p__7930,default_class){var map__7932 = p__7930;var map__7932__$1 = ((cljs.core.seq_QMARK_.call(null,map__7932))?cljs.core.apply.call(null,cljs.core.hash_map,map__7932):map__7932);var l = map__7932__$1;var class$ = cljs.core.get.call(null,map__7932__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle = cljs.core.get.call(null,map__7932__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));var line = cljs.core.get.call(null,map__7932__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__7932__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_(handle))
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
lt.objs.highlights.refresh_lines = (function refresh_lines(p__7934){var map__7936 = p__7934;var map__7936__$1 = ((cljs.core.seq_QMARK_.call(null,map__7936))?cljs.core.apply.call(null,cljs.core.hash_map,map__7936):map__7936);var class$ = cljs.core.get.call(null,map__7936__$1,new cljs.core.Keyword(null,"class","class",1108647146));var lines = cljs.core.get.call(null,map__7936__$1,new cljs.core.Keyword(null,"lines","lines",1116881521));return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (map__7936,map__7936__$1,class$,lines){
return (function (p1__7933_SHARP_){return lt.objs.highlights.refresh_line.call(null,p1__7933_SHARP_,class$);
});})(map__7936,map__7936__$1,class$,lines))
,lines));
});
lt.objs.highlights.__BEH__refresh = (function __BEH__refresh(this$){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",1116881521),lt.objs.highlights.refresh_lines.call(null,cljs.core.deref.call(null,this$))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.highlights","refresh","lt.objs.highlights/refresh",3576234382),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.highlights.__BEH__refresh,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));
lt.objs.highlights.__BEH__highlight = (function __BEH__highlight(this$,lines){var lines__$1 = ((cljs.core.sequential_QMARK_.call(null,lines))?lines:cljs.core.PersistentHashSet.fromArray([lines], true));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",1116881521),cljs.core.into.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"lines","lines",1116881521)),lines__$1)], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.highlights","highlight","lt.objs.highlights/highlight",1032059829),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.highlights.__BEH__highlight,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlight","highlight",4627660838),null], null), null));
lt.objs.highlights.__BEH__clear = (function __BEH__clear(this$){var seq__7945_7971 = cljs.core.seq.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"lines","lines",1116881521)));var chunk__7947_7972 = null;var count__7948_7973 = 0;var i__7949_7974 = 0;while(true){
if((i__7949_7974 < count__7948_7973))
{var map__7951_7975 = cljs.core._nth.call(null,chunk__7947_7972,i__7949_7974);var map__7951_7976__$1 = ((cljs.core.seq_QMARK_.call(null,map__7951_7975))?cljs.core.apply.call(null,cljs.core.hash_map,map__7951_7975):map__7951_7975);var ed_7977 = cljs.core.get.call(null,map__7951_7976__$1,new cljs.core.Keyword(null,"ed","ed",1013907473));var class_7978 = cljs.core.get.call(null,map__7951_7976__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle_7979 = cljs.core.get.call(null,map__7951_7976__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_7979))
{lt.objs.highlights.toggle_background.call(null,ed_7977,handle_7979,(function (){var or__6371__auto__ = class_7978;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"class","class",1108647146));
}
})(),false);
{
var G__7980 = seq__7945_7971;
var G__7981 = chunk__7947_7972;
var G__7982 = count__7948_7973;
var G__7983 = (i__7949_7974 + 1);
seq__7945_7971 = G__7980;
chunk__7947_7972 = G__7981;
count__7948_7973 = G__7982;
i__7949_7974 = G__7983;
continue;
}
} else
{{
var G__7984 = seq__7945_7971;
var G__7985 = chunk__7947_7972;
var G__7986 = count__7948_7973;
var G__7987 = (i__7949_7974 + 1);
seq__7945_7971 = G__7984;
chunk__7947_7972 = G__7985;
count__7948_7973 = G__7986;
i__7949_7974 = G__7987;
continue;
}
}
} else
{var temp__4092__auto___7988 = cljs.core.seq.call(null,seq__7945_7971);if(temp__4092__auto___7988)
{var seq__7945_7989__$1 = temp__4092__auto___7988;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7945_7989__$1))
{var c__7119__auto___7990 = cljs.core.chunk_first.call(null,seq__7945_7989__$1);{
var G__7991 = cljs.core.chunk_rest.call(null,seq__7945_7989__$1);
var G__7992 = c__7119__auto___7990;
var G__7993 = cljs.core.count.call(null,c__7119__auto___7990);
var G__7994 = 0;
seq__7945_7971 = G__7991;
chunk__7947_7972 = G__7992;
count__7948_7973 = G__7993;
i__7949_7974 = G__7994;
continue;
}
} else
{var map__7952_7995 = cljs.core.first.call(null,seq__7945_7989__$1);var map__7952_7996__$1 = ((cljs.core.seq_QMARK_.call(null,map__7952_7995))?cljs.core.apply.call(null,cljs.core.hash_map,map__7952_7995):map__7952_7995);var ed_7997 = cljs.core.get.call(null,map__7952_7996__$1,new cljs.core.Keyword(null,"ed","ed",1013907473));var class_7998 = cljs.core.get.call(null,map__7952_7996__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle_7999 = cljs.core.get.call(null,map__7952_7996__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));if(cljs.core.truth_(handle_7999))
{lt.objs.highlights.toggle_background.call(null,ed_7997,handle_7999,(function (){var or__6371__auto__ = class_7998;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"class","class",1108647146));
}
})(),false);
{
var G__8000 = cljs.core.next.call(null,seq__7945_7989__$1);
var G__8001 = null;
var G__8002 = 0;
var G__8003 = 0;
seq__7945_7971 = G__8000;
chunk__7947_7972 = G__8001;
count__7948_7973 = G__8002;
i__7949_7974 = G__8003;
continue;
}
} else
{{
var G__8004 = cljs.core.next.call(null,seq__7945_7989__$1);
var G__8005 = null;
var G__8006 = 0;
var G__8007 = 0;
seq__7945_7971 = G__8004;
chunk__7947_7972 = G__8005;
count__7948_7973 = G__8006;
i__7949_7974 = G__8007;
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
lt.objs.highlights.__BEH__refresh_on_open = (function __BEH__refresh_on_open(editor){var seq__7957 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"highlights","highlights",1371209137)));var chunk__7958 = null;var count__7959 = 0;var i__7960 = 0;while(true){
if((i__7960 < count__7959))
{var highlights = cljs.core._nth.call(null,chunk__7958,i__7960);lt.object.raise.call(null,highlights,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
{
var G__8008 = seq__7957;
var G__8009 = chunk__7958;
var G__8010 = count__7959;
var G__8011 = (i__7960 + 1);
seq__7957 = G__8008;
chunk__7958 = G__8009;
count__7959 = G__8010;
i__7960 = G__8011;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7957);if(temp__4092__auto__)
{var seq__7957__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7957__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__7957__$1);{
var G__8012 = cljs.core.chunk_rest.call(null,seq__7957__$1);
var G__8013 = c__7119__auto__;
var G__8014 = cljs.core.count.call(null,c__7119__auto__);
var G__8015 = 0;
seq__7957 = G__8012;
chunk__7958 = G__8013;
count__7959 = G__8014;
i__7960 = G__8015;
continue;
}
} else
{var highlights = cljs.core.first.call(null,seq__7957__$1);lt.object.raise.call(null,highlights,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
{
var G__8016 = cljs.core.next.call(null,seq__7957__$1);
var G__8017 = null;
var G__8018 = 0;
var G__8019 = 0;
seq__7957 = G__8016;
chunk__7958 = G__8017;
count__7959 = G__8018;
i__7960 = G__8019;
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
lt.objs.file_links.sqr = (function sqr(p1__7742_SHARP_){return Math.pow(p1__7742_SHARP_,2);
});
lt.objs.file_links.hypot = (function hypot(p__7743,p__7744){var vec__7747 = p__7743;var x = cljs.core.nth.call(null,vec__7747,0,null);var y = cljs.core.nth.call(null,vec__7747,1,null);var vec__7748 = p__7744;var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__7748,0,null);var y_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__7748,1,null);return lt.objs.file_links.sqrt.call(null,(lt.objs.file_links.sqr.call(null,(x_SINGLEQUOTE_ - x)) + lt.objs.file_links.sqr.call(null,(y_SINGLEQUOTE_ - y))));
});
lt.objs.file_links.left_click_QMARK_ = (function left_click_QMARK_(e){return cljs.core._EQ_.call(null,e.which,1);
});
lt.objs.file_links.click = (function click(node,f){var pos = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null));node.onmousedown = ((function (pos){
return (function (p1__7749_SHARP_){if(lt.objs.file_links.left_click_QMARK_.call(null,p1__7749_SHARP_))
{return cljs.core.reset_BANG_.call(null,pos,lt.objs.file_links.__GT_pos.call(null,p1__7749_SHARP_));
} else
{return null;
}
});})(pos))
;
return node.onmouseup = ((function (pos){
return (function (p1__7750_SHARP_){if((lt.objs.file_links.left_click_QMARK_.call(null,p1__7750_SHARP_)) && ((lt.objs.file_links.hypot.call(null,cljs.core.deref.call(null,pos),lt.objs.file_links.__GT_pos.call(null,p1__7750_SHARP_)) < 5)))
{return f.call(null,p1__7750_SHARP_);
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
var highlight__delegate = function (p__7751){var vec__7753 = p__7751;var line = cljs.core.nth.call(null,vec__7753,0,null);if(cljs.core.truth_(lt.objs.file_links.tm_STAR_))
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
var p__7751 = null;if (arguments.length > 0) {
  p__7751 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return highlight__delegate.call(this,p__7751);};
highlight.cljs$lang$maxFixedArity = 0;
highlight.cljs$lang$applyTo = (function (arglist__7783){
var p__7751 = cljs.core.seq(arglist__7783);
return highlight__delegate(p__7751);
});
highlight.cljs$core$IFn$_invoke$arity$variadic = highlight__delegate;
return highlight;
})()
;
lt.objs.file_links.url_pattern = (cljs.core.truth_(lt.objs.platform.win_QMARK_.call(null))?/^\s*((?:\w+:)[\/\\][A-Za-z0-9_ \\/\/\.\-]*?\.jl)(?::([0-9]+))?\s*$/:/^\s*(\/[A-Za-z0-9_ \\/\/\.\-]*?\.jl)(?::([0-9]+))?\s*$/);
lt.objs.file_links.__GT_line = (function __GT_line(s){var vec__7755 = cljs.core.re_find.call(null,lt.objs.file_links.url_pattern,s);var _ = cljs.core.nth.call(null,vec__7755,0,null);var file = cljs.core.nth.call(null,vec__7755,1,null);var line = cljs.core.nth.call(null,vec__7755,2,null);if(cljs.core.truth_(file))
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
lt.objs.file_links.process_nodes_BANG_ = (function process_nodes_BANG_(dom){var seq__7760_7784 = cljs.core.seq.call(null,lt.objs.file_links.file_links.call(null,dom));var chunk__7761_7785 = null;var count__7762_7786 = 0;var i__7763_7787 = 0;while(true){
if((i__7763_7787 < count__7762_7786))
{var link_7788 = cljs.core._nth.call(null,chunk__7761_7785,i__7763_7787);lt.objs.file_links.process_node_BANG_.call(null,link_7788,(function (){var or__6371__auto__ = lt.objs.file_links.data_url.call(null,link_7788);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return lt.objs.file_links.__GT_line.call(null,lt.objs.file_links.data_file.call(null,link_7788));
}
})());
{
var G__7789 = seq__7760_7784;
var G__7790 = chunk__7761_7785;
var G__7791 = count__7762_7786;
var G__7792 = (i__7763_7787 + 1);
seq__7760_7784 = G__7789;
chunk__7761_7785 = G__7790;
count__7762_7786 = G__7791;
i__7763_7787 = G__7792;
continue;
}
} else
{var temp__4092__auto___7793 = cljs.core.seq.call(null,seq__7760_7784);if(temp__4092__auto___7793)
{var seq__7760_7794__$1 = temp__4092__auto___7793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7760_7794__$1))
{var c__7119__auto___7795 = cljs.core.chunk_first.call(null,seq__7760_7794__$1);{
var G__7796 = cljs.core.chunk_rest.call(null,seq__7760_7794__$1);
var G__7797 = c__7119__auto___7795;
var G__7798 = cljs.core.count.call(null,c__7119__auto___7795);
var G__7799 = 0;
seq__7760_7784 = G__7796;
chunk__7761_7785 = G__7797;
count__7762_7786 = G__7798;
i__7763_7787 = G__7799;
continue;
}
} else
{var link_7800 = cljs.core.first.call(null,seq__7760_7794__$1);lt.objs.file_links.process_node_BANG_.call(null,link_7800,(function (){var or__6371__auto__ = lt.objs.file_links.data_url.call(null,link_7800);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return lt.objs.file_links.__GT_line.call(null,lt.objs.file_links.data_file.call(null,link_7800));
}
})());
{
var G__7801 = cljs.core.next.call(null,seq__7760_7794__$1);
var G__7802 = null;
var G__7803 = 0;
var G__7804 = 0;
seq__7760_7784 = G__7801;
chunk__7761_7785 = G__7802;
count__7762_7786 = G__7803;
i__7763_7787 = G__7804;
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
lt.objs.file_links.process_anchors_BANG_ = (function process_anchors_BANG_(dom){cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__7764_SHARP_){return lt.objs.file_links.process_anchor_BANG_.call(null,p1__7764_SHARP_);
}),lt.objs.file_links.all_anchors.call(null,dom)));
var seq__7769_7805 = cljs.core.seq.call(null,lt.objs.file_links.all_anchors.call(null,dom));var chunk__7770_7806 = null;var count__7771_7807 = 0;var i__7772_7808 = 0;while(true){
if((i__7772_7808 < count__7771_7807))
{var anchor_7809 = cljs.core._nth.call(null,chunk__7770_7806,i__7772_7808);lt.objs.file_links.process_anchor_BANG_.call(null,anchor_7809);
{
var G__7810 = seq__7769_7805;
var G__7811 = chunk__7770_7806;
var G__7812 = count__7771_7807;
var G__7813 = (i__7772_7808 + 1);
seq__7769_7805 = G__7810;
chunk__7770_7806 = G__7811;
count__7771_7807 = G__7812;
i__7772_7808 = G__7813;
continue;
}
} else
{var temp__4092__auto___7814 = cljs.core.seq.call(null,seq__7769_7805);if(temp__4092__auto___7814)
{var seq__7769_7815__$1 = temp__4092__auto___7814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7769_7815__$1))
{var c__7119__auto___7816 = cljs.core.chunk_first.call(null,seq__7769_7815__$1);{
var G__7817 = cljs.core.chunk_rest.call(null,seq__7769_7815__$1);
var G__7818 = c__7119__auto___7816;
var G__7819 = cljs.core.count.call(null,c__7119__auto___7816);
var G__7820 = 0;
seq__7769_7805 = G__7817;
chunk__7770_7806 = G__7818;
count__7771_7807 = G__7819;
i__7772_7808 = G__7820;
continue;
}
} else
{var anchor_7821 = cljs.core.first.call(null,seq__7769_7815__$1);lt.objs.file_links.process_anchor_BANG_.call(null,anchor_7821);
{
var G__7822 = cljs.core.next.call(null,seq__7769_7815__$1);
var G__7823 = null;
var G__7824 = 0;
var G__7825 = 0;
seq__7769_7805 = G__7822;
chunk__7770_7806 = G__7823;
count__7771_7807 = G__7824;
i__7772_7808 = G__7825;
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
lt.objs.langs.julia.eval.get_error_line = (function get_error_line(link){var vec__8300 = cljs.core.re_find.call(null,lt.objs.file_links.url_pattern,lt.objs.file_links.data_file.call(null,link));var _ = cljs.core.nth.call(null,vec__8300,0,null);var file = cljs.core.nth.call(null,vec__8300,1,null);var line = cljs.core.nth.call(null,vec__8300,2,null);if(cljs.core.truth_((function (){var and__6359__auto__ = file;if(cljs.core.truth_(and__6359__auto__))
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
{return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.hints","editor.julia.hints",3827979880),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null)),new cljs.core.Keyword(null,"editor.julia.hints","editor.julia.hints",3827979880),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),lt.objs.langs.julia.util.cursor.call(null,editor),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
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
lt.objs.langs.julia.completions.__BEH__update_hints = (function __BEH__update_hints(editor,p__8086){var map__8088 = p__8086;var map__8088__$1 = ((cljs.core.seq_QMARK_.call(null,map__8088))?cljs.core.apply.call(null,cljs.core.hash_map,map__8088):map__8088);var res = map__8088__$1;var pattern = cljs.core.get.call(null,map__8088__$1,new cljs.core.Keyword(null,"pattern","pattern",4517781250));var notextual = cljs.core.get.call(null,map__8088__$1,new cljs.core.Keyword(null,"notextual","notextual",2817977764));var hints = cljs.core.get.call(null,map__8088__$1,new cljs.core.Keyword(null,"hints","hints",1113187902));lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token-pattern","token-pattern",4483347246),(cljs.core.truth_(pattern)?(new RegExp([cljs.core.str(pattern),cljs.core.str("$")].join(''))):null)], null));
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
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.module')) {
goog.provide('lt.objs.langs.julia.module');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.statusbar');
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
lt.objs.langs.julia.module.__GT_module_str = (function __GT_module_str(p__8311){var map__8313 = p__8311;var map__8313__$1 = ((cljs.core.seq_QMARK_.call(null,map__8313))?cljs.core.apply.call(null,cljs.core.hash_map,map__8313):map__8313);var module = cljs.core.get.call(null,map__8313__$1,new cljs.core.Keyword(null,"module","module",4240087518));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.module","span.module",4591083778),[cljs.core.str(module),cljs.core.str("\t")].join('')], null);
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
var get_module__delegate = function (editor,p__8314){var vec__8316 = p__8314;var client = cljs.core.nth.call(null,vec__8316,0,null);var temp__4092__auto__ = (function (){var or__6371__auto__ = client;if(cljs.core.truth_(or__6371__auto__))
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
var p__8314 = null;if (arguments.length > 1) {
  p__8314 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get_module__delegate.call(this,editor,p__8314);};
get_module.cljs$lang$maxFixedArity = 1;
get_module.cljs$lang$applyTo = (function (arglist__8327){
var editor = cljs.core.first(arglist__8327);
var p__8314 = cljs.core.rest(arglist__8327);
return get_module__delegate(editor,p__8314);
});
get_module.cljs$core$IFn$_invoke$arity$variadic = get_module__delegate;
return get_module;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","get-module","lt.objs.langs.julia.module/get-module",2880297552),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.get_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null,new cljs.core.Keyword(null,"active","active",3885920888),null,new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","get-module-on-connect","lt.objs.langs.julia.module/get-module-on-connect",3837887435),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.get_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.connected","julia.connected",2686299174),null], null), null));
lt.objs.langs.julia.module.__BEH__update_module = (function __BEH__update_module(editor,module){lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.module","module","lt.objs.langs.julia.module/module",3266506741),module], null));
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"module-update","module-update",2454986428));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","update-module","lt.objs.langs.julia.module/update-module",849755505),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.__BEH__update_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.julia.module.update","editor.julia.module.update",3704946727),null], null), null));
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

//# sourceMappingURL=jewel_compiled.js.map