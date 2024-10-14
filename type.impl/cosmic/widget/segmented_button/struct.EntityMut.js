(function() {var type_impls = {
"cosmic":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EntityMut%3C'a,+SelectionMode%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#18-146\">source</a><a href=\"#impl-EntityMut%3C'a,+SelectionMode%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, SelectionMode: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"struct\" href=\"cosmic/widget/segmented_button/struct.EntityMut.html\" title=\"struct cosmic::widget::segmented_button::EntityMut\">EntityMut</a>&lt;'a, SelectionMode&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"cosmic/widget/segmented_button/struct.Model.html\" title=\"struct cosmic::widget::segmented_button::Model\">Model</a>&lt;SelectionMode&gt;: <a class=\"trait\" href=\"cosmic/widget/segmented_button/trait.Selectable.html\" title=\"trait cosmic::widget::segmented_button::Selectable\">Selectable</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.activate\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#28-31\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/segmented_button/struct.EntityMut.html#tymethod.activate\" class=\"fn\">activate</a>(self) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Activates the newly-inserted item.</p>\n\n<div class=\"example-wrap ignore\"><a href=\"#\" class=\"tooltip\" title=\"This example is not tested\">ⓘ</a><pre class=\"rust rust-example-rendered\"><code>model.insert().text(<span class=\"string\">\"Item A\"</span>).activate();</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.secondary\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#43-46\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/segmented_button/struct.EntityMut.html#tymethod.secondary\" class=\"fn\">secondary</a>&lt;Data&gt;(\n    self,\n    map: &amp;mut <a class=\"struct\" href=\"slotmap/secondary/struct.SecondaryMap.html\" title=\"struct slotmap::secondary::SecondaryMap\">SecondaryMap</a>&lt;<a class=\"struct\" href=\"cosmic/widget/segmented_button/struct.Entity.html\" title=\"struct cosmic::widget::segmented_button::Entity\">Entity</a>, Data&gt;,\n    data: Data,\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Associates extra data with an external secondary map.</p>\n<p>The secondary map internally uses a <code>Vec</code>, so should only be used for data that\nis commonly associated.</p>\n\n<div class=\"example-wrap ignore\"><a href=\"#\" class=\"tooltip\" title=\"This example is not tested\">ⓘ</a><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>secondary_data = segmented_button::SecondaryMap::default();\nmodel.insert().text(<span class=\"string\">\"Item A\"</span>).secondary(<span class=\"kw-2\">&amp;mut </span>secondary_data, String::new(<span class=\"string\">\"custom data\"</span>));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.secondary_sparse\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#57-64\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/segmented_button/struct.EntityMut.html#tymethod.secondary_sparse\" class=\"fn\">secondary_sparse</a>&lt;Data&gt;(\n    self,\n    map: &amp;mut <a class=\"struct\" href=\"slotmap/sparse_secondary/struct.SparseSecondaryMap.html\" title=\"struct slotmap::sparse_secondary::SparseSecondaryMap\">SparseSecondaryMap</a>&lt;<a class=\"struct\" href=\"cosmic/widget/segmented_button/struct.Entity.html\" title=\"struct cosmic::widget::segmented_button::Entity\">Entity</a>, Data&gt;,\n    data: Data,\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Associates extra data with an external sparse secondary map.</p>\n<p>Sparse maps internally use a <code>HashMap</code>, for data that is sparsely associated.</p>\n\n<div class=\"example-wrap ignore\"><a href=\"#\" class=\"tooltip\" title=\"This example is not tested\">ⓘ</a><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>secondary_data = segmented_button::SparseSecondaryMap::default();\nmodel.insert().text(<span class=\"string\">\"Item A\"</span>).secondary(<span class=\"kw-2\">&amp;mut </span>secondary_data, String::new(<span class=\"string\">\"custom data\"</span>));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.closable\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#68-71\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/segmented_button/struct.EntityMut.html#tymethod.closable\" class=\"fn\">closable</a>(self) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Shows a close button for this item.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#81-84\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/segmented_button/struct.EntityMut.html#tymethod.data\" class=\"fn\">data</a>&lt;Data: 'static&gt;(self, data: Data) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Associates data with the item.</p>\n<p>There may only be one data component per Rust type.</p>\n\n<div class=\"example-wrap ignore\"><a href=\"#\" class=\"tooltip\" title=\"This example is not tested\">ⓘ</a><pre class=\"rust rust-example-rendered\"><code>model.insert().text(<span class=\"string\">\"Item A\"</span>).data(String::from(<span class=\"string\">\"custom string\"</span>));</code></pre></div>\n</div></details><section id=\"method.divider_above\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#87-90\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/segmented_button/struct.EntityMut.html#tymethod.divider_above\" class=\"fn\">divider_above</a>(self, divider_above: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a>) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.icon\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#98-101\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/segmented_button/struct.EntityMut.html#tymethod.icon\" class=\"fn\">icon</a>(self, icon: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"cosmic/widget/struct.Icon.html\" title=\"struct cosmic::widget::Icon\">Icon</a>&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Define an icon for the item.</p>\n\n<div class=\"example-wrap ignore\"><a href=\"#\" class=\"tooltip\" title=\"This example is not tested\">ⓘ</a><pre class=\"rust rust-example-rendered\"><code>model.insert().text(<span class=\"string\">\"Item A\"</span>).icon(IconSource::from(<span class=\"string\">\"icon-a\"</span>));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.id\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#109-111\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/segmented_button/struct.EntityMut.html#tymethod.id\" class=\"fn\">id</a>(self) -&gt; <a class=\"struct\" href=\"cosmic/widget/segmented_button/struct.Entity.html\" title=\"struct cosmic::widget::segmented_button::Entity\">Entity</a></h4></section></summary><div class=\"docblock\"><p>Returns the ID of the item that was inserted.</p>\n\n<div class=\"example-wrap ignore\"><a href=\"#\" class=\"tooltip\" title=\"This example is not tested\">ⓘ</a><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>id = model.insert(<span class=\"string\">\"Item A\"</span>).id();</code></pre></div>\n</div></details><section id=\"method.indent\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#114-117\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/segmented_button/struct.EntityMut.html#tymethod.indent\" class=\"fn\">indent</a>(self, indent: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u16.html\">u16</a>) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.position\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#121-124\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/segmented_button/struct.EntityMut.html#tymethod.position\" class=\"fn\">position</a>(self, position: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u16.html\">u16</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Define the position of the item.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.position_swap\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#128-131\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/segmented_button/struct.EntityMut.html#tymethod.position_swap\" class=\"fn\">position_swap</a>(self, other: <a class=\"struct\" href=\"cosmic/widget/segmented_button/struct.Entity.html\" title=\"struct cosmic::widget::segmented_button::Entity\">Entity</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Swap the position with another item in the model.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.text\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#135-138\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/segmented_button/struct.EntityMut.html#tymethod.text\" class=\"fn\">text</a>(self, text: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.str.html\">str</a>&gt;&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Defines the text for the item.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_id\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/segmented_button/model/entity.rs.html#142-145\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/segmented_button/struct.EntityMut.html#tymethod.with_id\" class=\"fn\">with_id</a>(self, func: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"struct\" href=\"cosmic/widget/segmented_button/struct.Entity.html\" title=\"struct cosmic::widget::segmented_button::Entity\">Entity</a>)) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Calls a function with the ID without consuming the wrapper.</p>\n</div></details></div></details>",0,"cosmic::widget::segmented_button::model::SingleSelectEntityMut","cosmic::widget::segmented_button::model::MultiSelectEntityMut"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()