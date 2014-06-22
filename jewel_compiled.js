if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.util')) {
goog.provide('lt.objs.langs.julia.util');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.cache');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.plugins.auto_complete');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.cache');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.plugins.doc');
goog.require('lt.objs.editor');
goog.require('lt.plugins.doc');
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
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia')) {
goog.provide('lt.objs.langs.julia');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.cache');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.plugins.auto_complete');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.cache');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.plugins.doc');
goog.require('lt.objs.editor');
goog.require('lt.plugins.doc');
lt.objs.langs.julia.__BEH__editor_commands = (function __BEH__editor_commands(editor,res){lt.objs.notifos.done_working.call(null);
var pred__9456 = cljs.core._EQ_;var expr__9457 = res.call(null,new cljs.core.Keyword(null,"cmd","cmd",1014002860));if(cljs.core.truth_(pred__9456.call(null,"result",expr__9457)))
{lt.objs.notifos.done_working.call(null,"");
var val_9481 = (cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469)))?crate.core.raw.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res)):new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));lt.object.raise.call(null,editor,(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"under","under",1125332554)))?new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758):new cljs.core.Keyword(null,"editor.result","editor.result",4030217008)),val_9481,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(res) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(res) - 1)], null));
if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469))))
{return lt.objs.langs.julia.eval_scripts.call(null,crate.core.raw.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res)));
} else
{return null;
}
} else
{if(cljs.core.truth_(pred__9456.call(null,"error",expr__9457)))
{lt.objs.notifos.done_working.call(null,"");
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),res.call(null,new cljs.core.Keyword(null,"value","value",1125876963)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(res) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(res) - 1)], null));
} else
{if(cljs.core.truth_(pred__9456.call(null,"doc",expr__9457)))
{return lt.plugins.doc.inline_doc.call(null,editor,crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-doc","div.inline-doc",3323486451),(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469)))?crate.core.raw.call(null,res.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),res.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882))], null))], null)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(res));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__9457)].join('')));
}
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","editor-commands","lt.objs.langs.julia/editor-commands",2182382655),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__editor_commands,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.julia.editor-command","editor.eval.julia.editor-command",3039903843),null], null), null));
lt.objs.langs.julia.__BEH__commands = (function __BEH__commands(editor,res){var pred__9462 = cljs.core._EQ_;var expr__9463 = res.call(null,new cljs.core.Keyword(null,"cmd","cmd",1014002860));if(cljs.core.truth_(pred__9462.call(null,"popup",expr__9463)))
{return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),res.call(null,new cljs.core.Keyword(null,"header","header",4087600639)),new cljs.core.Keyword(null,"body","body",1016933652),res.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"buttons","buttons",1255256819),res.call(null,new cljs.core.Keyword(null,"buttons","buttons",1255256819))], null));
} else
{if(cljs.core.truth_(pred__9462.call(null,"print",expr__9463)))
{return lt.objs.console.log.call(null,res.call(null,new cljs.core.Keyword(null,"value","value",1125876963)),(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))?"error":null));
} else
{if(cljs.core.truth_(pred__9462.call(null,"done",expr__9463)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659))))
{return lt.objs.notifos.done_working.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)));
} else
{return lt.objs.notifos.done_working.call(null);
}
} else
{if(cljs.core.truth_(pred__9462.call(null,"notify",expr__9463)))
{return lt.objs.notifos.set_msg_BANG_.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),res.call(null,new cljs.core.Keyword(null,"class","class",1108647146))], null));
} else
{if(cljs.core.truth_(pred__9462.call(null,"console",expr__9463)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469))))
{var val = crate.core.raw.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));lt.objs.console.verbatim.call(null,val);
return lt.objs.langs.julia.eval_scripts.call(null,crate.core.raw.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res)));
} else
{return lt.objs.console.log.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));
}
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__9463)].join('')));
}
}
}
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","commands","lt.objs.langs.julia/commands",666378463),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__commands,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.julia.command","editor.eval.julia.command",3568027511),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","julia-lang","lt.objs.langs.julia/julia-lang",1798349361),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.lang","julia.lang",1405919445),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia","commands","lt.objs.langs.julia/commands",666378463)], null));
lt.objs.langs.julia.julia = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia","julia-lang","lt.objs.langs.julia/julia-lang",1798349361));
lt.objs.langs.julia.__BEH__doc = (function __BEH__doc(editor){lt.objs.notifos.working.call(null,"Loading docs...");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.connect], null)),new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),lt.objs.langs.julia.util.cursor.call(null,editor),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","doc","lt.objs.langs.julia/doc",1138930319),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__doc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.doc","editor.doc",3751347369),null], null), null));
lt.objs.langs.julia.__BEH__methods = (function __BEH__methods(editor){lt.objs.notifos.working.call(null,"Loading methods...");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.connect], null)),new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),lt.objs.langs.julia.util.cursor.call(null,editor),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"methods","methods",1969438500)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","methods","lt.objs.langs.julia/methods",2296274945),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__methods,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.methods","editor.methods",4183274403),null], null), null));
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.interrupt-clients","editor.interrupt-clients",3910900175),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Interrupt the current client",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var seq__9465_9482 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.map.call(null,cljs.core.deref,cljs.core.vals.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))))));var chunk__9466_9483 = null;var count__9467_9484 = 0;var i__9468_9485 = 0;while(true){
if((i__9468_9485 < count__9467_9484))
{var proc_9486 = cljs.core._nth.call(null,chunk__9466_9483,i__9468_9485);proc_9486.kill("SIGINT");
{
var G__9487 = seq__9465_9482;
var G__9488 = chunk__9466_9483;
var G__9489 = count__9467_9484;
var G__9490 = (i__9468_9485 + 1);
seq__9465_9482 = G__9487;
chunk__9466_9483 = G__9488;
count__9467_9484 = G__9489;
i__9468_9485 = G__9490;
continue;
}
} else
{var temp__4092__auto___9491__$1 = cljs.core.seq.call(null,seq__9465_9482);if(temp__4092__auto___9491__$1)
{var seq__9465_9492__$1 = temp__4092__auto___9491__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9465_9492__$1))
{var c__7119__auto___9493 = cljs.core.chunk_first.call(null,seq__9465_9492__$1);{
var G__9494 = cljs.core.chunk_rest.call(null,seq__9465_9492__$1);
var G__9495 = c__7119__auto___9493;
var G__9496 = cljs.core.count.call(null,c__7119__auto___9493);
var G__9497 = 0;
seq__9465_9482 = G__9494;
chunk__9466_9483 = G__9495;
count__9467_9484 = G__9496;
i__9468_9485 = G__9497;
continue;
}
} else
{var proc_9498 = cljs.core.first.call(null,seq__9465_9492__$1);proc_9498.kill("SIGINT");
{
var G__9499 = cljs.core.next.call(null,seq__9465_9492__$1);
var G__9500 = null;
var G__9501 = 0;
var G__9502 = 0;
seq__9465_9482 = G__9499;
chunk__9466_9483 = G__9500;
count__9467_9484 = G__9501;
i__9468_9485 = G__9502;
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
{var ed = temp__4092__auto__;var seq__9469_9503 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.map.call(null,cljs.core.deref,cljs.core.vals.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))))));var chunk__9470_9504 = null;var count__9471_9505 = 0;var i__9472_9506 = 0;while(true){
if((i__9472_9506 < count__9471_9505))
{var proc_9507 = cljs.core._nth.call(null,chunk__9470_9504,i__9472_9506);proc_9507.kill();
{
var G__9508 = seq__9469_9503;
var G__9509 = chunk__9470_9504;
var G__9510 = count__9471_9505;
var G__9511 = (i__9472_9506 + 1);
seq__9469_9503 = G__9508;
chunk__9470_9504 = G__9509;
count__9471_9505 = G__9510;
i__9472_9506 = G__9511;
continue;
}
} else
{var temp__4092__auto___9512__$1 = cljs.core.seq.call(null,seq__9469_9503);if(temp__4092__auto___9512__$1)
{var seq__9469_9513__$1 = temp__4092__auto___9512__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9469_9513__$1))
{var c__7119__auto___9514 = cljs.core.chunk_first.call(null,seq__9469_9513__$1);{
var G__9515 = cljs.core.chunk_rest.call(null,seq__9469_9513__$1);
var G__9516 = c__7119__auto___9514;
var G__9517 = cljs.core.count.call(null,c__7119__auto___9514);
var G__9518 = 0;
seq__9469_9503 = G__9515;
chunk__9470_9504 = G__9516;
count__9471_9505 = G__9517;
i__9472_9506 = G__9518;
continue;
}
} else
{var proc_9519 = cljs.core.first.call(null,seq__9469_9513__$1);proc_9519.kill();
{
var G__9520 = cljs.core.next.call(null,seq__9469_9513__$1);
var G__9521 = null;
var G__9522 = 0;
var G__9523 = 0;
seq__9469_9503 = G__9520;
chunk__9470_9504 = G__9521;
count__9471_9505 = G__9522;
i__9472_9506 = G__9523;
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
lt.objs.langs.julia.html_string = (function html_string(dom){var el = document.createElement("div");el.appendChild(dom);
return el.innerHTML;
});
lt.objs.langs.julia.eval_scripts = (function eval_scripts(dom){var scripts = ((cljs.core._EQ_.call(null,cljs.core.type.call(null,dom),HTMLScriptElement))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom], null):dom.querySelectorAll("script"));var seq__9477 = cljs.core.seq.call(null,scripts);var chunk__9478 = null;var count__9479 = 0;var i__9480 = 0;while(true){
if((i__9480 < count__9479))
{var script = cljs.core._nth.call(null,chunk__9478,i__9480);if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"text/javascript",null], null), null),script.type))
{window.eval(script.text);
} else
{}
{
var G__9524 = seq__9477;
var G__9525 = chunk__9478;
var G__9526 = count__9479;
var G__9527 = (i__9480 + 1);
seq__9477 = G__9524;
chunk__9478 = G__9525;
count__9479 = G__9526;
i__9480 = G__9527;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9477);if(temp__4092__auto__)
{var seq__9477__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9477__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__9477__$1);{
var G__9528 = cljs.core.chunk_rest.call(null,seq__9477__$1);
var G__9529 = c__7119__auto__;
var G__9530 = cljs.core.count.call(null,c__7119__auto__);
var G__9531 = 0;
seq__9477 = G__9528;
chunk__9478 = G__9529;
count__9479 = G__9530;
i__9480 = G__9531;
continue;
}
} else
{var script = cljs.core.first.call(null,seq__9477__$1);if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"text/javascript",null], null), null),script.type))
{window.eval(script.text);
} else
{}
{
var G__9532 = cljs.core.next.call(null,seq__9477__$1);
var G__9533 = null;
var G__9534 = 0;
var G__9535 = 0;
seq__9477 = G__9532;
chunk__9478 = G__9533;
count__9479 = G__9534;
i__9480 = G__9535;
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
if(cljs.core.truth_(cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"complain","complain",4709422171))))
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connecting-notifier","lt.objs.langs.julia.proc/connecting-notifier",4154824301),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-out","lt.objs.langs.julia.proc/proc-out",3354081193),new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-error","lt.objs.langs.julia.proc/proc-error",3670223651),new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-exit","lt.objs.langs.julia.proc/proc-exit",3482355335),new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-out","lt.objs.langs.julia.proc/pipe-out",2913224961),new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-err","lt.objs.langs.julia.proc/pipe-err",2913231640)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"buffer","buffer",3930752946),""], null));
return null;
}));
lt.objs.langs.julia.proc.init = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"jl","init.jl");
lt.objs.langs.julia.proc.init_script = (function init_script(port,id){return [cljs.core.str("ARGS = [\""),cljs.core.str(port),cljs.core.str("\", \""),cljs.core.str(id),cljs.core.str("\"]; include(\""),cljs.core.str(lt.objs.langs.julia.proc.init),cljs.core.str("\");")].join('');
});
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
var connect__delegate = function (p__8340){var map__8342 = p__8340;var map__8342__$1 = ((cljs.core.seq_QMARK_.call(null,map__8342))?cljs.core.apply.call(null,cljs.core.hash_map,map__8342):map__8342);var complain = cljs.core.get.call(null,map__8342__$1,new cljs.core.Keyword(null,"complain","complain",4709422171),true);var notify = cljs.core.get.call(null,map__8342__$1,new cljs.core.Keyword(null,"notify","notify",4269181627),false);if(cljs.core.truth_(notify))
{lt.objs.notifos.working.call(null,"Spinning up a Julia client...");
} else
{}
var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"julia.client","julia.client",3830708594));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connecting-notifier","lt.objs.langs.julia.proc/connecting-notifier",4154824301),client);lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"notify","notify",4269181627),notify,new cljs.core.Keyword(null,"complain","complain",4709422171),complain], null));
lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),lt.objs.langs.julia.proc.julia_path.call(null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-e",lt.objs.langs.julia.proc.init_script.call(null,lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client))], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.first.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))], null));
lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"julia.set-global-client","julia.set-global-client",3983623463),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"only","only",1017320222),lt.objs.langs.julia.julia);
return client;
};
var connect = function (var_args){
var p__8340 = null;if (arguments.length > 0) {
  p__8340 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return connect__delegate.call(this,p__8340);};
connect.cljs$lang$maxFixedArity = 0;
connect.cljs$lang$applyTo = (function (arglist__8353){
var p__8340 = cljs.core.seq(arglist__8353);
return connect__delegate(p__8340);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
lt.objs.langs.julia.proc.connect_manual = (function connect_manual(){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"julia.client","julia.client",3830708594));lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Connect Julia to Light Table",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("@async Jewel.server("),cljs.core.str(lt.objs.clients.tcp.port),cljs.core.str(", "),cljs.core.str(lt.objs.clients.__GT_id.call(null,client)),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null));
lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"julia.set-global-client","julia.set-global-client",3983623463),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"only","only",1017320222),lt.objs.langs.julia.julia);
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
lt.objs.langs.julia.proc.__BEH__connect_on_startup = (function __BEH__connect_on_startup(){return lt.objs.langs.julia.proc.wait_until.call(null,(function (){return cljs.core.not_EQ_.call(null,lt.objs.clients.tcp.port,0);
}),(function (){return lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.eval","editor.julia.eval",4568286884),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"origin","origin",4300251800),lt.objs.langs.julia.julia,new cljs.core.Keyword(null,"create","create",3956577390),(function (){return lt.objs.langs.julia.proc.connect.call(null,new cljs.core.Keyword(null,"notify","notify",4269181627),true);
})], null));
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connect-on-startup","lt.objs.langs.julia.proc/connect-on-startup",4556282532),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__connect_on_startup,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Spin up a client when Light Table starts",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.objs.langs.julia.proc.__BEH__connect_on_open = (function __BEH__connect_on_open(editor){return lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create","create",3956577390),(function (){return lt.objs.langs.julia.proc.connect.call(null,new cljs.core.Keyword(null,"notify","notify",4269181627),true,new cljs.core.Keyword(null,"complain","complain",4709422171),false);
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connect-on-open","lt.objs.langs.julia.proc/connect-on-open",3288500199),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__connect_on_open,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Automatically connect editors to a Julia client",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
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
var this$__$1 = this;var seq__8165 = cljs.core.seq.call(null,self__.watches);var chunk__8166 = null;var count__8167 = 0;var i__8168 = 0;while(true){
if((i__8168 < count__8167))
{var vec__8169 = cljs.core._nth.call(null,chunk__8166,i__8168);var key__$1 = cljs.core.nth.call(null,vec__8169,0,null);var f = cljs.core.nth.call(null,vec__8169,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8244 = seq__8165;
var G__8245 = chunk__8166;
var G__8246 = count__8167;
var G__8247 = (i__8168 + 1);
seq__8165 = G__8244;
chunk__8166 = G__8245;
count__8167 = G__8246;
i__8168 = G__8247;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8165);if(temp__4092__auto__)
{var seq__8165__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8165__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8165__$1);{
var G__8248 = cljs.core.chunk_rest.call(null,seq__8165__$1);
var G__8249 = c__7119__auto__;
var G__8250 = cljs.core.count.call(null,c__7119__auto__);
var G__8251 = 0;
seq__8165 = G__8248;
chunk__8166 = G__8249;
count__8167 = G__8250;
i__8168 = G__8251;
continue;
}
} else
{var vec__8170 = cljs.core.first.call(null,seq__8165__$1);var key__$1 = cljs.core.nth.call(null,vec__8170,0,null);var f = cljs.core.nth.call(null,vec__8170,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8252 = cljs.core.next.call(null,seq__8165__$1);
var G__8253 = null;
var G__8254 = 0;
var G__8255 = 0;
seq__8165 = G__8252;
chunk__8166 = G__8253;
count__8167 = G__8254;
i__8168 = G__8255;
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
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__8172 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__8172,0,null);var path__$2 = cljs.core.nth.call(null,vec__8172,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__8172,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__8172,atm__$1,path__$2,k,sa))
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
var G__8256__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8256 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__8256__delegate.call(this,sa,f,x,y,z,more);};
G__8256.cljs$lang$maxFixedArity = 5;
G__8256.cljs$lang$applyTo = (function (arglist__8257){
var sa = cljs.core.first(arglist__8257);
arglist__8257 = cljs.core.next(arglist__8257);
var f = cljs.core.first(arglist__8257);
arglist__8257 = cljs.core.next(arglist__8257);
var x = cljs.core.first(arglist__8257);
arglist__8257 = cljs.core.next(arglist__8257);
var y = cljs.core.first(arglist__8257);
arglist__8257 = cljs.core.next(arglist__8257);
var z = cljs.core.first(arglist__8257);
var more = cljs.core.rest(arglist__8257);
return G__8256__delegate(sa,f,x,y,z,more);
});
G__8256.cljs$core$IFn$_invoke$arity$variadic = G__8256__delegate;
return G__8256;
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
crate.binding.computable = (function (){var obj8174 = {};return obj8174;
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
var this$__$1 = this;var seq__8175 = cljs.core.seq.call(null,self__.watches);var chunk__8176 = null;var count__8177 = 0;var i__8178 = 0;while(true){
if((i__8178 < count__8177))
{var vec__8179 = cljs.core._nth.call(null,chunk__8176,i__8178);var key__$1 = cljs.core.nth.call(null,vec__8179,0,null);var f = cljs.core.nth.call(null,vec__8179,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8258 = seq__8175;
var G__8259 = chunk__8176;
var G__8260 = count__8177;
var G__8261 = (i__8178 + 1);
seq__8175 = G__8258;
chunk__8176 = G__8259;
count__8177 = G__8260;
i__8178 = G__8261;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8175);if(temp__4092__auto__)
{var seq__8175__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8175__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8175__$1);{
var G__8262 = cljs.core.chunk_rest.call(null,seq__8175__$1);
var G__8263 = c__7119__auto__;
var G__8264 = cljs.core.count.call(null,c__7119__auto__);
var G__8265 = 0;
seq__8175 = G__8262;
chunk__8176 = G__8263;
count__8177 = G__8264;
i__8178 = G__8265;
continue;
}
} else
{var vec__8180 = cljs.core.first.call(null,seq__8175__$1);var key__$1 = cljs.core.nth.call(null,vec__8180,0,null);var f = cljs.core.nth.call(null,vec__8180,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8266 = cljs.core.next.call(null,seq__8175__$1);
var G__8267 = null;
var G__8268 = 0;
var G__8269 = 0;
seq__8175 = G__8266;
chunk__8176 = G__8267;
count__8177 = G__8268;
i__8178 = G__8269;
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
var seq__8185_8270 = cljs.core.seq.call(null,atms);var chunk__8186_8271 = null;var count__8187_8272 = 0;var i__8188_8273 = 0;while(true){
if((i__8188_8273 < count__8187_8272))
{var atm_8274 = cljs.core._nth.call(null,chunk__8186_8271,i__8188_8273);crate.binding._depend.call(null,neue,atm_8274);
{
var G__8275 = seq__8185_8270;
var G__8276 = chunk__8186_8271;
var G__8277 = count__8187_8272;
var G__8278 = (i__8188_8273 + 1);
seq__8185_8270 = G__8275;
chunk__8186_8271 = G__8276;
count__8187_8272 = G__8277;
i__8188_8273 = G__8278;
continue;
}
} else
{var temp__4092__auto___8279 = cljs.core.seq.call(null,seq__8185_8270);if(temp__4092__auto___8279)
{var seq__8185_8280__$1 = temp__4092__auto___8279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8185_8280__$1))
{var c__7119__auto___8281 = cljs.core.chunk_first.call(null,seq__8185_8280__$1);{
var G__8282 = cljs.core.chunk_rest.call(null,seq__8185_8280__$1);
var G__8283 = c__7119__auto___8281;
var G__8284 = cljs.core.count.call(null,c__7119__auto___8281);
var G__8285 = 0;
seq__8185_8270 = G__8282;
chunk__8186_8271 = G__8283;
count__8187_8272 = G__8284;
i__8188_8273 = G__8285;
continue;
}
} else
{var atm_8286 = cljs.core.first.call(null,seq__8185_8280__$1);crate.binding._depend.call(null,neue,atm_8286);
{
var G__8287 = cljs.core.next.call(null,seq__8185_8280__$1);
var G__8288 = null;
var G__8289 = 0;
var G__8290 = 0;
seq__8185_8270 = G__8287;
chunk__8186_8271 = G__8288;
count__8187_8272 = G__8289;
i__8188_8273 = G__8290;
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
crate.binding.bindable_coll = (function (){var obj8190 = {};return obj8190;
})();
crate.binding.bindable = (function (){var obj8192 = {};return obj8192;
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
var this$__$1 = this;var seq__8193 = cljs.core.seq.call(null,self__.watches);var chunk__8194 = null;var count__8195 = 0;var i__8196 = 0;while(true){
if((i__8196 < count__8195))
{var vec__8197 = cljs.core._nth.call(null,chunk__8194,i__8196);var key = cljs.core.nth.call(null,vec__8197,0,null);var f = cljs.core.nth.call(null,vec__8197,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8291 = seq__8193;
var G__8292 = chunk__8194;
var G__8293 = count__8195;
var G__8294 = (i__8196 + 1);
seq__8193 = G__8291;
chunk__8194 = G__8292;
count__8195 = G__8293;
i__8196 = G__8294;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8193);if(temp__4092__auto__)
{var seq__8193__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8193__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8193__$1);{
var G__8295 = cljs.core.chunk_rest.call(null,seq__8193__$1);
var G__8296 = c__7119__auto__;
var G__8297 = cljs.core.count.call(null,c__7119__auto__);
var G__8298 = 0;
seq__8193 = G__8295;
chunk__8194 = G__8296;
count__8195 = G__8297;
i__8196 = G__8298;
continue;
}
} else
{var vec__8198 = cljs.core.first.call(null,seq__8193__$1);var key = cljs.core.nth.call(null,vec__8198,0,null);var f = cljs.core.nth.call(null,vec__8198,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8299 = cljs.core.next.call(null,seq__8193__$1);
var G__8300 = null;
var G__8301 = 0;
var G__8302 = 0;
seq__8193 = G__8299;
chunk__8194 = G__8300;
count__8195 = G__8301;
i__8196 = G__8302;
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
return (function (_,___$1,___$2,p__8199){var vec__8200 = p__8199;var event = cljs.core.nth.call(null,vec__8200,0,null);var el = cljs.core.nth.call(null,vec__8200,1,null);var v = cljs.core.nth.call(null,vec__8200,2,null);return func.call(null,event,el,v);
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
__GT_path.cljs$lang$applyTo = (function (arglist__8303){
var bc = cljs.core.first(arglist__8303);
var segs = cljs.core.rest(arglist__8303);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__8209_8304 = cljs.core.seq.call(null,added);var chunk__8210_8305 = null;var count__8211_8306 = 0;var i__8212_8307 = 0;while(true){
if((i__8212_8307 < count__8211_8306))
{var a_8308 = cljs.core._nth.call(null,chunk__8210_8305,i__8212_8307);crate.binding.bc_add.call(null,bc,a_8308,a_8308);
{
var G__8309 = seq__8209_8304;
var G__8310 = chunk__8210_8305;
var G__8311 = count__8211_8306;
var G__8312 = (i__8212_8307 + 1);
seq__8209_8304 = G__8309;
chunk__8210_8305 = G__8310;
count__8211_8306 = G__8311;
i__8212_8307 = G__8312;
continue;
}
} else
{var temp__4092__auto___8313 = cljs.core.seq.call(null,seq__8209_8304);if(temp__4092__auto___8313)
{var seq__8209_8314__$1 = temp__4092__auto___8313;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8209_8314__$1))
{var c__7119__auto___8315 = cljs.core.chunk_first.call(null,seq__8209_8314__$1);{
var G__8316 = cljs.core.chunk_rest.call(null,seq__8209_8314__$1);
var G__8317 = c__7119__auto___8315;
var G__8318 = cljs.core.count.call(null,c__7119__auto___8315);
var G__8319 = 0;
seq__8209_8304 = G__8316;
chunk__8210_8305 = G__8317;
count__8211_8306 = G__8318;
i__8212_8307 = G__8319;
continue;
}
} else
{var a_8320 = cljs.core.first.call(null,seq__8209_8314__$1);crate.binding.bc_add.call(null,bc,a_8320,a_8320);
{
var G__8321 = cljs.core.next.call(null,seq__8209_8314__$1);
var G__8322 = null;
var G__8323 = 0;
var G__8324 = 0;
seq__8209_8304 = G__8321;
chunk__8210_8305 = G__8322;
count__8211_8306 = G__8323;
i__8212_8307 = G__8324;
continue;
}
}
} else
{}
}
break;
}
var seq__8213 = cljs.core.seq.call(null,removed);var chunk__8214 = null;var count__8215 = 0;var i__8216 = 0;while(true){
if((i__8216 < count__8215))
{var r = cljs.core._nth.call(null,chunk__8214,i__8216);crate.binding.bc_remove.call(null,bc,r);
{
var G__8325 = seq__8213;
var G__8326 = chunk__8214;
var G__8327 = count__8215;
var G__8328 = (i__8216 + 1);
seq__8213 = G__8325;
chunk__8214 = G__8326;
count__8215 = G__8327;
i__8216 = G__8328;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8213);if(temp__4092__auto__)
{var seq__8213__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8213__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8213__$1);{
var G__8329 = cljs.core.chunk_rest.call(null,seq__8213__$1);
var G__8330 = c__7119__auto__;
var G__8331 = cljs.core.count.call(null,c__7119__auto__);
var G__8332 = 0;
seq__8213 = G__8329;
chunk__8214 = G__8330;
count__8215 = G__8331;
i__8216 = G__8332;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8213__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__8333 = cljs.core.next.call(null,seq__8213__$1);
var G__8334 = null;
var G__8335 = 0;
var G__8336 = 0;
seq__8213 = G__8333;
chunk__8214 = G__8334;
count__8215 = G__8335;
i__8216 = G__8336;
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
var bound_coll__delegate = function (atm,p__8217){var vec__8220 = p__8217;var path = cljs.core.nth.call(null,vec__8220,0,null);var opts = cljs.core.nth.call(null,vec__8220,1,null);var vec__8221 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__8221,0,null);var opts__$1 = cljs.core.nth.call(null,vec__8221,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__8221,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8220,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__8221,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8220,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__8217 = null;if (arguments.length > 1) {
  p__8217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__8217);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8337){
var atm = cljs.core.first(arglist__8337);
var p__8217 = cljs.core.rest(arglist__8337);
return bound_coll__delegate(atm,p__8217);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8222){var vec__8224 = p__8222;var opts = cljs.core.nth.call(null,vec__8224,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__8224,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__8224,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__8222 = null;if (arguments.length > 2) {
  p__8222 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__8222);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8338){
var as = cljs.core.first(arglist__8338);
arglist__8338 = cljs.core.next(arglist__8338);
var atm = cljs.core.first(arglist__8338);
var p__8222 = cljs.core.rest(arglist__8338);
return map_bound__delegate(as,atm,p__8222);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__8226 = b;if(G__8226)
{var bit__7021__auto__ = null;if(cljs.core.truth_((function (){var or__6371__auto__ = bit__7021__auto__;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return G__8226.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8226.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8226);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8226);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__8228 = b;if(G__8228)
{var bit__7021__auto__ = null;if(cljs.core.truth_((function (){var or__6371__auto__ = bit__7021__auto__;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return G__8228.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8228.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8228);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8228);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__8230 = atm;if(G__8230)
{var bit__7021__auto__ = (G__8230.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7021__auto__) || (G__8230.cljs$core$IDeref$))
{return true;
} else
{if((!G__8230.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8230);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8230);
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
var bound__delegate = function (atm,p__8231){var vec__8233 = p__8231;var func = cljs.core.nth.call(null,vec__8233,0,null);var func__$1 = (function (){var or__6371__auto__ = func;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__8231 = null;if (arguments.length > 1) {
  p__8231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__8231);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8339){
var atm = cljs.core.first(arglist__8339);
var p__8231 = cljs.core.rest(arglist__8339);
return bound__delegate(atm,p__8231);
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
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.eval')) {
goog.provide('lt.objs.langs.julia.eval');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.cache');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.plugins.auto_complete');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.cache');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.plugins.doc');
goog.require('lt.objs.editor');
goog.require('lt.plugins.doc');
lt.objs.langs.julia.eval.__BEH__eval__DOT__one = (function __BEH__eval__DOT__one(editor){var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null));lt.objs.notifos.working.call(null,"Running...");
return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"start","start",1123661780),lt.objs.langs.julia.util.cursor.call(null,editor,"start"),new cljs.core.Keyword(null,"end","end",1014004813),lt.objs.langs.julia.util.cursor.call(null,editor,"end"),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.eval","eval.one","lt.objs.langs.julia.eval/eval.one",4466424305),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.eval.__BEH__eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.objs.langs.julia.eval.__BEH__eval__DOT__all = (function __BEH__eval__DOT__all(editor){var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null));lt.objs.notifos.working.call(null,"Loading file...");
return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"all","all",1014000915),true,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.eval","eval.all","lt.objs.langs.julia.eval/eval.all",4466413240),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.eval.__BEH__eval__DOT__all,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
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
{return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.hints","editor.julia.hints",3827979880),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null)),new cljs.core.Keyword(null,"editor.julia.hints","editor.julia.hints",3827979880),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),lt.objs.langs.julia.util.cursor.call(null,editor),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","trigger-update-hints","lt.objs.langs.julia.completions/trigger-update-hints",2864848773),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.completions.__BEH__trigger_update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.julia.hints.trigger-update","editor.julia.hints.trigger-update",1239387112),null], null), null));
lt.objs.langs.julia.completions.__BEH__use_local_hints = (function __BEH__use_local_hints(editor,hints,token){if(cljs.core.truth_(new cljs.core.Keyword("lt.objs.langs.julia.completions","fresh-hints","lt.objs.langs.julia.completions/fresh-hints",1650054773).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))))
{lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.completions","fresh-hints","lt.objs.langs.julia.completions/fresh-hints",1650054773),false], null));
} else
{lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.julia.hints.trigger-update","editor.julia.hints.trigger-update",1239387112));
}
return cljs.core.concat.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","hints","lt.objs.langs.julia.completions/hints",1982368662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),hints);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","use-local-hints","lt.objs.langs.julia.completions/use-local-hints",2093633438),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.completions.__BEH__use_local_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hints+","hints+",4091697745),null], null), null));
lt.objs.langs.julia.completions.__BEH__textual_hints = (function __BEH__textual_hints(editor,hints){if(cljs.core.not.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","no-textual-hints","lt.objs.langs.julia.completions/no-textual-hints",3228951872).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))))
{return cljs.core.concat.call(null,new cljs.core.Keyword("lt.plugins.auto-complete","hints","lt.plugins.auto-complete/hints",3881612567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),hints);
} else
{return hints;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","textual-hints","lt.objs.langs.julia.completions/textual-hints",725908564),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.completions.__BEH__textual_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hints+","hints+",4091697745),null], null), null));
lt.objs.langs.julia.completions.__BEH__line_change = (function __BEH__line_change(hinter,l,c){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hinter))))
{var pos = lt.objs.editor.__GT_cursor.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hinter)));var token = lt.plugins.auto_complete.get_token.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hinter)),pos);if(cljs.core._EQ_.call(null,token.call(null,new cljs.core.Keyword(null,"string","string",4416885635)),null))
{return lt.object.raise.call(null,hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","line-change","lt.objs.langs.julia.completions/line-change",4771727513),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.completions.__BEH__line_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-change","line-change",3952584475),null], null), null));
lt.objs.langs.julia.completions.process_hint = (function process_hint(hint){if(typeof hint === 'string')
{return {"completion": hint};
} else
{return cljs.core.clj__GT_js.call(null,hint);
}
});
lt.objs.langs.julia.completions.__BEH__update_hints = (function __BEH__update_hints(editor,p__8139){var map__8141 = p__8139;var map__8141__$1 = ((cljs.core.seq_QMARK_.call(null,map__8141))?cljs.core.apply.call(null,cljs.core.hash_map,map__8141):map__8141);var res = map__8141__$1;var pattern = cljs.core.get.call(null,map__8141__$1,new cljs.core.Keyword(null,"pattern","pattern",4517781250));var notextual = cljs.core.get.call(null,map__8141__$1,new cljs.core.Keyword(null,"notextual","notextual",2817977764));var hints = cljs.core.get.call(null,map__8141__$1,new cljs.core.Keyword(null,"hints","hints",1113187902));lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lt.objs.langs.julia.completions","hints","lt.objs.langs.julia.completions/hints",1982368662),cljs.core.map.call(null,lt.objs.langs.julia.completions.process_hint,hints),new cljs.core.Keyword("lt.objs.langs.julia.completions","no-textual-hints","lt.objs.langs.julia.completions/no-textual-hints",3228951872),notextual,new cljs.core.Keyword("lt.objs.langs.julia.completions","fresh-hints","lt.objs.langs.julia.completions/fresh-hints",1650054773),true,new cljs.core.Keyword(null,"token-pattern","token-pattern",4483347246),(cljs.core.truth_(pattern)?(new RegExp([cljs.core.str(pattern),cljs.core.str("$")].join(''))):null)], null));
var pos = lt.objs.editor.__GT_cursor.call(null,editor);var token = lt.plugins.auto_complete.get_token.call(null,editor,pos);return lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"change!","change!",1752847843),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token));
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
lt.objs.langs.julia.module.__GT_module_str = (function __GT_module_str(p__8152){var map__8154 = p__8152;var map__8154__$1 = ((cljs.core.seq_QMARK_.call(null,map__8154))?cljs.core.apply.call(null,cljs.core.hash_map,map__8154):map__8154);var module = cljs.core.get.call(null,map__8154__$1,new cljs.core.Keyword(null,"module","module",4240087518));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.module","span.module",4591083778),[cljs.core.str(module),cljs.core.str("\t")].join('')], null);
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","statusbar.module","lt.objs.langs.julia.module/statusbar.module",830137210),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.module","update-module-status","lt.objs.langs.julia.module/update-module-status",2710240756),null], null), null),new cljs.core.Keyword(null,"module","module",4240087518),"Main",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.objs.statusbar.statusbar_item.call(null,crate.binding.bound.call(null,this$,lt.objs.langs.julia.module.__GT_module_str),"");
}));
lt.objs.langs.julia.module.statusbar_module = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","statusbar.module","lt.objs.langs.julia.module/statusbar.module",830137210));
lt.objs.statusbar.add_statusbar_item.call(null,lt.objs.langs.julia.module.statusbar_module);
lt.objs.langs.julia.module.__BEH__update_module_statusbar = (function __BEH__update_module_statusbar(editor){return lt.object.merge_BANG_.call(null,lt.objs.langs.julia.module.statusbar_module,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"module","module",4240087518),new cljs.core.Keyword("lt.objs.langs.julia.module","module","lt.objs.langs.julia.module/module",3266506741).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","update-module-statusbar","lt.objs.langs.julia.module/update-module-statusbar",1924546253),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.__BEH__update_module_statusbar,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",3885920888),null,new cljs.core.Keyword(null,"module-update","module-update",2454986428),null], null), null));
lt.objs.langs.julia.module.__BEH__get_module = (function __BEH__get_module(editor){var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null));return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"editor.julia.module.update","editor.julia.module.update",3704946727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","get-module","lt.objs.langs.julia.module/get-module",2880297552),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.__BEH__get_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.objs.langs.julia.module.__BEH__update_module = (function __BEH__update_module(editor,module){lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.module","module","lt.objs.langs.julia.module/module",3266506741),module], null));
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"module-update","module-update",2454986428));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","update-module","lt.objs.langs.julia.module/update-module",849755505),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.__BEH__update_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.julia.module.update","editor.julia.module.update",3704946727),null], null), null));
}

//# sourceMappingURL=jewel_compiled.js.map