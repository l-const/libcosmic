(function() {var type_impls = {
"read_fonts":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-TableRef%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/table_ref.rs.html#9\">source</a><a href=\"#impl-Clone-for-TableRef%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"read_fonts/struct.TableRef.html\" title=\"struct read_fonts::TableRef\">TableRef</a>&lt;'a, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/read_fonts/table_ref.rs.html#9\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"read_fonts/struct.TableRef.html\" title=\"struct read_fonts::TableRef\">TableRef</a>&lt;'a, T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","read_fonts::tables::aat::Lookup0","read_fonts::tables::aat::Lookup2","read_fonts::tables::aat::Lookup4","read_fonts::tables::aat::Lookup6","read_fonts::tables::aat::Lookup8","read_fonts::tables::aat::Lookup10","read_fonts::tables::aat::StateHeader","read_fonts::tables::aat::ClassSubtable","read_fonts::tables::aat::RawBytes","read_fonts::tables::aat::StxHeader","read_fonts::tables::aat::RawWords","read_fonts::tables::ankr::Ankr","read_fonts::tables::ankr::GlyphDataEntry","read_fonts::tables::avar::Avar","read_fonts::tables::base::Base","read_fonts::tables::base::Axis","read_fonts::tables::base::BaseTagList","read_fonts::tables::base::BaseScriptList","read_fonts::tables::base::BaseScript","read_fonts::tables::base::BaseValues","read_fonts::tables::base::MinMax","read_fonts::tables::base::BaseCoordFormat1","read_fonts::tables::base::BaseCoordFormat2","read_fonts::tables::base::BaseCoordFormat3","read_fonts::tables::bitmap::IndexSubtableArray","read_fonts::tables::bitmap::IndexSubtable1","read_fonts::tables::bitmap::IndexSubtable2","read_fonts::tables::bitmap::IndexSubtable3","read_fonts::tables::bitmap::IndexSubtable4","read_fonts::tables::bitmap::IndexSubtable5","read_fonts::tables::cbdt::Cbdt","read_fonts::tables::cblc::Cblc","read_fonts::tables::cff::CffHeader","read_fonts::tables::cff2::Cff2Header","read_fonts::tables::cmap::Cmap","read_fonts::tables::cmap::Cmap0","read_fonts::tables::cmap::Cmap2","read_fonts::tables::cmap::Cmap4","read_fonts::tables::cmap::Cmap6","read_fonts::tables::cmap::Cmap8","read_fonts::tables::cmap::Cmap10","read_fonts::tables::cmap::Cmap12","read_fonts::tables::cmap::Cmap13","read_fonts::tables::cmap::Cmap14","read_fonts::tables::cmap::DefaultUvs","read_fonts::tables::cmap::NonDefaultUvs","read_fonts::tables::colr::Colr","read_fonts::tables::colr::BaseGlyphList","read_fonts::tables::colr::LayerList","read_fonts::tables::colr::ClipList","read_fonts::tables::colr::ClipBoxFormat1","read_fonts::tables::colr::ClipBoxFormat2","read_fonts::tables::colr::ColorLine","read_fonts::tables::colr::VarColorLine","read_fonts::tables::colr::PaintColrLayers","read_fonts::tables::colr::PaintSolid","read_fonts::tables::colr::PaintVarSolid","read_fonts::tables::colr::PaintLinearGradient","read_fonts::tables::colr::PaintVarLinearGradient","read_fonts::tables::colr::PaintRadialGradient","read_fonts::tables::colr::PaintVarRadialGradient","read_fonts::tables::colr::PaintSweepGradient","read_fonts::tables::colr::PaintVarSweepGradient","read_fonts::tables::colr::PaintGlyph","read_fonts::tables::colr::PaintColrGlyph","read_fonts::tables::colr::PaintTransform","read_fonts::tables::colr::PaintVarTransform","read_fonts::tables::colr::Affine2x3","read_fonts::tables::colr::VarAffine2x3","read_fonts::tables::colr::PaintTranslate","read_fonts::tables::colr::PaintVarTranslate","read_fonts::tables::colr::PaintScale","read_fonts::tables::colr::PaintVarScale","read_fonts::tables::colr::PaintScaleAroundCenter","read_fonts::tables::colr::PaintVarScaleAroundCenter","read_fonts::tables::colr::PaintScaleUniform","read_fonts::tables::colr::PaintVarScaleUniform","read_fonts::tables::colr::PaintScaleUniformAroundCenter","read_fonts::tables::colr::PaintVarScaleUniformAroundCenter","read_fonts::tables::colr::PaintRotate","read_fonts::tables::colr::PaintVarRotate","read_fonts::tables::colr::PaintRotateAroundCenter","read_fonts::tables::colr::PaintVarRotateAroundCenter","read_fonts::tables::colr::PaintSkew","read_fonts::tables::colr::PaintVarSkew","read_fonts::tables::colr::PaintSkewAroundCenter","read_fonts::tables::colr::PaintVarSkewAroundCenter","read_fonts::tables::colr::PaintComposite","read_fonts::tables::cpal::Cpal","read_fonts::tables::cvar::Cvar","read_fonts::tables::ebdt::Ebdt","read_fonts::tables::eblc::Eblc","read_fonts::tables::feat::Feat","read_fonts::tables::feat::SettingNameArray","read_fonts::tables::fvar::Fvar","read_fonts::tables::fvar::AxisInstanceArrays","read_fonts::tables::gasp::Gasp","read_fonts::tables::gdef::Gdef","read_fonts::tables::gdef::AttachList","read_fonts::tables::gdef::AttachPoint","read_fonts::tables::gdef::LigCaretList","read_fonts::tables::gdef::LigGlyph","read_fonts::tables::gdef::CaretValueFormat1","read_fonts::tables::gdef::CaretValueFormat2","read_fonts::tables::gdef::CaretValueFormat3","read_fonts::tables::gdef::MarkGlyphSets","read_fonts::tables::glyf::Glyf","read_fonts::tables::glyf::SimpleGlyph","read_fonts::tables::glyf::CompositeGlyph","read_fonts::tables::gpos::Gpos","read_fonts::tables::gpos::AnchorFormat1","read_fonts::tables::gpos::AnchorFormat2","read_fonts::tables::gpos::AnchorFormat3","read_fonts::tables::gpos::MarkArray","read_fonts::tables::gpos::SinglePosFormat1","read_fonts::tables::gpos::SinglePosFormat2","read_fonts::tables::gpos::PairPosFormat1","read_fonts::tables::gpos::PairSet","read_fonts::tables::gpos::PairPosFormat2","read_fonts::tables::gpos::CursivePosFormat1","read_fonts::tables::gpos::MarkBasePosFormat1","read_fonts::tables::gpos::BaseArray","read_fonts::tables::gpos::MarkLigPosFormat1","read_fonts::tables::gpos::LigatureArray","read_fonts::tables::gpos::LigatureAttach","read_fonts::tables::gpos::MarkMarkPosFormat1","read_fonts::tables::gpos::Mark2Array","read_fonts::tables::gpos::ExtensionPosFormat1","read_fonts::tables::gsub::Gsub","read_fonts::tables::gsub::SingleSubstFormat1","read_fonts::tables::gsub::SingleSubstFormat2","read_fonts::tables::gsub::MultipleSubstFormat1","read_fonts::tables::gsub::Sequence","read_fonts::tables::gsub::AlternateSubstFormat1","read_fonts::tables::gsub::AlternateSet","read_fonts::tables::gsub::LigatureSubstFormat1","read_fonts::tables::gsub::LigatureSet","read_fonts::tables::gsub::Ligature","read_fonts::tables::gsub::ExtensionSubstFormat1","read_fonts::tables::gsub::ReverseChainSingleSubstFormat1","read_fonts::tables::gvar::Gvar","read_fonts::tables::gvar::SharedTuples","read_fonts::tables::gvar::GlyphVariationDataHeader","read_fonts::tables::hdmx::Hdmx","read_fonts::tables::head::Head","read_fonts::tables::hhea::Hhea","read_fonts::tables::hmtx::Hmtx","read_fonts::tables::hvar::Hvar","read_fonts::tables::ift::PatchMapFormat1","read_fonts::tables::ift::GlyphMap","read_fonts::tables::ift::FeatureMap","read_fonts::tables::ift::PatchMapFormat2","read_fonts::tables::ift::MappingEntries","read_fonts::tables::ift::EntryData","read_fonts::tables::ift::IdStringData","read_fonts::tables::layout::ScriptList","read_fonts::tables::layout::Script","read_fonts::tables::layout::LangSys","read_fonts::tables::layout::FeatureList","read_fonts::tables::layout::Feature","read_fonts::tables::layout::LookupList","read_fonts::tables::layout::Lookup","read_fonts::tables::layout::CoverageFormat1","read_fonts::tables::layout::CoverageFormat2","read_fonts::tables::layout::ClassDefFormat1","read_fonts::tables::layout::ClassDefFormat2","read_fonts::tables::layout::SequenceContextFormat1","read_fonts::tables::layout::SequenceRuleSet","read_fonts::tables::layout::SequenceRule","read_fonts::tables::layout::SequenceContextFormat2","read_fonts::tables::layout::ClassSequenceRuleSet","read_fonts::tables::layout::ClassSequenceRule","read_fonts::tables::layout::SequenceContextFormat3","read_fonts::tables::layout::ChainedSequenceContextFormat1","read_fonts::tables::layout::ChainedSequenceRuleSet","read_fonts::tables::layout::ChainedSequenceRule","read_fonts::tables::layout::ChainedSequenceContextFormat2","read_fonts::tables::layout::ChainedClassSequenceRuleSet","read_fonts::tables::layout::ChainedClassSequenceRule","read_fonts::tables::layout::ChainedSequenceContextFormat3","read_fonts::tables::layout::Device","read_fonts::tables::layout::VariationIndex","read_fonts::tables::layout::FeatureVariations","read_fonts::tables::layout::ConditionSet","read_fonts::tables::layout::ConditionFormat1","read_fonts::tables::layout::ConditionFormat2","read_fonts::tables::layout::ConditionFormat3","read_fonts::tables::layout::ConditionFormat4","read_fonts::tables::layout::ConditionFormat5","read_fonts::tables::layout::FeatureTableSubstitution","read_fonts::tables::layout::SizeParams","read_fonts::tables::layout::StylisticSetParams","read_fonts::tables::layout::CharacterVariantParams","read_fonts::tables::ltag::Ltag","read_fonts::tables::maxp::Maxp","read_fonts::tables::mvar::Mvar","read_fonts::tables::name::Name","read_fonts::tables::os2::Os2","read_fonts::tables::post::Post","read_fonts::tables::postscript::Index1","read_fonts::tables::postscript::Index2","read_fonts::tables::postscript::FdSelectFormat0","read_fonts::tables::postscript::FdSelectFormat3","read_fonts::tables::postscript::FdSelectFormat4","read_fonts::tables::sbix::Sbix","read_fonts::tables::sbix::Strike","read_fonts::tables::sbix::GlyphData","read_fonts::tables::stat::Stat","read_fonts::tables::stat::AxisValueArray","read_fonts::tables::stat::AxisValueFormat1","read_fonts::tables::stat::AxisValueFormat2","read_fonts::tables::stat::AxisValueFormat3","read_fonts::tables::stat::AxisValueFormat4","read_fonts::tables::svg::Svg","read_fonts::tables::svg::SVGDocumentList","read_fonts::tables::varc::Varc","read_fonts::tables::varc::MultiItemVariationStore","read_fonts::tables::varc::SparseVariationRegionList","read_fonts::tables::varc::SparseVariationRegion","read_fonts::tables::varc::MultiItemVariationData","read_fonts::tables::varc::ConditionList","read_fonts::tables::variations::TupleVariationHeader","read_fonts::tables::variations::DeltaSetIndexMapFormat0","read_fonts::tables::variations::DeltaSetIndexMapFormat1","read_fonts::tables::variations::VariationRegionList","read_fonts::tables::variations::ItemVariationStore","read_fonts::tables::variations::ItemVariationData","read_fonts::tables::vhea::Vhea","read_fonts::tables::vmtx::Vmtx","read_fonts::tables::vorg::Vorg","read_fonts::tables::vvar::Vvar","read_fonts::TableDirectory","read_fonts::TTCHeader"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TableRef%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/table_ref.rs.html#16-28\">source</a><a href=\"#impl-TableRef%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; <a class=\"struct\" href=\"read_fonts/struct.TableRef.html\" title=\"struct read_fonts::TableRef\">TableRef</a>&lt;'a, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.resolve_offset\" class=\"method\"><a class=\"src rightside\" href=\"src/read_fonts/table_ref.rs.html#18-20\">source</a><h4 class=\"code-header\">pub fn <a href=\"read_fonts/struct.TableRef.html#tymethod.resolve_offset\" class=\"fn\">resolve_offset</a>&lt;O: <a class=\"trait\" href=\"read_fonts/trait.Offset.html\" title=\"trait read_fonts::Offset\">Offset</a>, R: <a class=\"trait\" href=\"read_fonts/trait.FontRead.html\" title=\"trait read_fonts::FontRead\">FontRead</a>&lt;'a&gt;&gt;(\n    &amp;self,\n    offset: O,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;R, <a class=\"enum\" href=\"read_fonts/enum.ReadError.html\" title=\"enum read_fonts::ReadError\">ReadError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Resolve the provided offset from the start of this table.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.offset_data\" class=\"method\"><a class=\"src rightside\" href=\"src/read_fonts/table_ref.rs.html#25-27\">source</a><h4 class=\"code-header\">pub fn <a href=\"read_fonts/struct.TableRef.html#tymethod.offset_data\" class=\"fn\">offset_data</a>(&amp;self) -&gt; <a class=\"struct\" href=\"read_fonts/struct.FontData.html\" title=\"struct read_fonts::FontData\">FontData</a>&lt;'a&gt;</h4></section></summary><div class=\"docblock\"><p>Return a reference to this table’s raw data.</p>\n<p>We use this in the compile crate to resolve offsets.</p>\n</div></details></div></details>",0,"read_fonts::tables::aat::Lookup0","read_fonts::tables::aat::Lookup2","read_fonts::tables::aat::Lookup4","read_fonts::tables::aat::Lookup6","read_fonts::tables::aat::Lookup8","read_fonts::tables::aat::Lookup10","read_fonts::tables::aat::StateHeader","read_fonts::tables::aat::ClassSubtable","read_fonts::tables::aat::RawBytes","read_fonts::tables::aat::StxHeader","read_fonts::tables::aat::RawWords","read_fonts::tables::ankr::Ankr","read_fonts::tables::ankr::GlyphDataEntry","read_fonts::tables::avar::Avar","read_fonts::tables::base::Base","read_fonts::tables::base::Axis","read_fonts::tables::base::BaseTagList","read_fonts::tables::base::BaseScriptList","read_fonts::tables::base::BaseScript","read_fonts::tables::base::BaseValues","read_fonts::tables::base::MinMax","read_fonts::tables::base::BaseCoordFormat1","read_fonts::tables::base::BaseCoordFormat2","read_fonts::tables::base::BaseCoordFormat3","read_fonts::tables::bitmap::IndexSubtableArray","read_fonts::tables::bitmap::IndexSubtable1","read_fonts::tables::bitmap::IndexSubtable2","read_fonts::tables::bitmap::IndexSubtable3","read_fonts::tables::bitmap::IndexSubtable4","read_fonts::tables::bitmap::IndexSubtable5","read_fonts::tables::cbdt::Cbdt","read_fonts::tables::cblc::Cblc","read_fonts::tables::cff::CffHeader","read_fonts::tables::cff2::Cff2Header","read_fonts::tables::cmap::Cmap","read_fonts::tables::cmap::Cmap0","read_fonts::tables::cmap::Cmap2","read_fonts::tables::cmap::Cmap4","read_fonts::tables::cmap::Cmap6","read_fonts::tables::cmap::Cmap8","read_fonts::tables::cmap::Cmap10","read_fonts::tables::cmap::Cmap12","read_fonts::tables::cmap::Cmap13","read_fonts::tables::cmap::Cmap14","read_fonts::tables::cmap::DefaultUvs","read_fonts::tables::cmap::NonDefaultUvs","read_fonts::tables::colr::Colr","read_fonts::tables::colr::BaseGlyphList","read_fonts::tables::colr::LayerList","read_fonts::tables::colr::ClipList","read_fonts::tables::colr::ClipBoxFormat1","read_fonts::tables::colr::ClipBoxFormat2","read_fonts::tables::colr::ColorLine","read_fonts::tables::colr::VarColorLine","read_fonts::tables::colr::PaintColrLayers","read_fonts::tables::colr::PaintSolid","read_fonts::tables::colr::PaintVarSolid","read_fonts::tables::colr::PaintLinearGradient","read_fonts::tables::colr::PaintVarLinearGradient","read_fonts::tables::colr::PaintRadialGradient","read_fonts::tables::colr::PaintVarRadialGradient","read_fonts::tables::colr::PaintSweepGradient","read_fonts::tables::colr::PaintVarSweepGradient","read_fonts::tables::colr::PaintGlyph","read_fonts::tables::colr::PaintColrGlyph","read_fonts::tables::colr::PaintTransform","read_fonts::tables::colr::PaintVarTransform","read_fonts::tables::colr::Affine2x3","read_fonts::tables::colr::VarAffine2x3","read_fonts::tables::colr::PaintTranslate","read_fonts::tables::colr::PaintVarTranslate","read_fonts::tables::colr::PaintScale","read_fonts::tables::colr::PaintVarScale","read_fonts::tables::colr::PaintScaleAroundCenter","read_fonts::tables::colr::PaintVarScaleAroundCenter","read_fonts::tables::colr::PaintScaleUniform","read_fonts::tables::colr::PaintVarScaleUniform","read_fonts::tables::colr::PaintScaleUniformAroundCenter","read_fonts::tables::colr::PaintVarScaleUniformAroundCenter","read_fonts::tables::colr::PaintRotate","read_fonts::tables::colr::PaintVarRotate","read_fonts::tables::colr::PaintRotateAroundCenter","read_fonts::tables::colr::PaintVarRotateAroundCenter","read_fonts::tables::colr::PaintSkew","read_fonts::tables::colr::PaintVarSkew","read_fonts::tables::colr::PaintSkewAroundCenter","read_fonts::tables::colr::PaintVarSkewAroundCenter","read_fonts::tables::colr::PaintComposite","read_fonts::tables::cpal::Cpal","read_fonts::tables::cvar::Cvar","read_fonts::tables::ebdt::Ebdt","read_fonts::tables::eblc::Eblc","read_fonts::tables::feat::Feat","read_fonts::tables::feat::SettingNameArray","read_fonts::tables::fvar::Fvar","read_fonts::tables::fvar::AxisInstanceArrays","read_fonts::tables::gasp::Gasp","read_fonts::tables::gdef::Gdef","read_fonts::tables::gdef::AttachList","read_fonts::tables::gdef::AttachPoint","read_fonts::tables::gdef::LigCaretList","read_fonts::tables::gdef::LigGlyph","read_fonts::tables::gdef::CaretValueFormat1","read_fonts::tables::gdef::CaretValueFormat2","read_fonts::tables::gdef::CaretValueFormat3","read_fonts::tables::gdef::MarkGlyphSets","read_fonts::tables::glyf::Glyf","read_fonts::tables::glyf::SimpleGlyph","read_fonts::tables::glyf::CompositeGlyph","read_fonts::tables::gpos::Gpos","read_fonts::tables::gpos::AnchorFormat1","read_fonts::tables::gpos::AnchorFormat2","read_fonts::tables::gpos::AnchorFormat3","read_fonts::tables::gpos::MarkArray","read_fonts::tables::gpos::SinglePosFormat1","read_fonts::tables::gpos::SinglePosFormat2","read_fonts::tables::gpos::PairPosFormat1","read_fonts::tables::gpos::PairSet","read_fonts::tables::gpos::PairPosFormat2","read_fonts::tables::gpos::CursivePosFormat1","read_fonts::tables::gpos::MarkBasePosFormat1","read_fonts::tables::gpos::BaseArray","read_fonts::tables::gpos::MarkLigPosFormat1","read_fonts::tables::gpos::LigatureArray","read_fonts::tables::gpos::LigatureAttach","read_fonts::tables::gpos::MarkMarkPosFormat1","read_fonts::tables::gpos::Mark2Array","read_fonts::tables::gpos::ExtensionPosFormat1","read_fonts::tables::gsub::Gsub","read_fonts::tables::gsub::SingleSubstFormat1","read_fonts::tables::gsub::SingleSubstFormat2","read_fonts::tables::gsub::MultipleSubstFormat1","read_fonts::tables::gsub::Sequence","read_fonts::tables::gsub::AlternateSubstFormat1","read_fonts::tables::gsub::AlternateSet","read_fonts::tables::gsub::LigatureSubstFormat1","read_fonts::tables::gsub::LigatureSet","read_fonts::tables::gsub::Ligature","read_fonts::tables::gsub::ExtensionSubstFormat1","read_fonts::tables::gsub::ReverseChainSingleSubstFormat1","read_fonts::tables::gvar::Gvar","read_fonts::tables::gvar::SharedTuples","read_fonts::tables::gvar::GlyphVariationDataHeader","read_fonts::tables::hdmx::Hdmx","read_fonts::tables::head::Head","read_fonts::tables::hhea::Hhea","read_fonts::tables::hmtx::Hmtx","read_fonts::tables::hvar::Hvar","read_fonts::tables::ift::PatchMapFormat1","read_fonts::tables::ift::GlyphMap","read_fonts::tables::ift::FeatureMap","read_fonts::tables::ift::PatchMapFormat2","read_fonts::tables::ift::MappingEntries","read_fonts::tables::ift::EntryData","read_fonts::tables::ift::IdStringData","read_fonts::tables::layout::ScriptList","read_fonts::tables::layout::Script","read_fonts::tables::layout::LangSys","read_fonts::tables::layout::FeatureList","read_fonts::tables::layout::Feature","read_fonts::tables::layout::LookupList","read_fonts::tables::layout::Lookup","read_fonts::tables::layout::CoverageFormat1","read_fonts::tables::layout::CoverageFormat2","read_fonts::tables::layout::ClassDefFormat1","read_fonts::tables::layout::ClassDefFormat2","read_fonts::tables::layout::SequenceContextFormat1","read_fonts::tables::layout::SequenceRuleSet","read_fonts::tables::layout::SequenceRule","read_fonts::tables::layout::SequenceContextFormat2","read_fonts::tables::layout::ClassSequenceRuleSet","read_fonts::tables::layout::ClassSequenceRule","read_fonts::tables::layout::SequenceContextFormat3","read_fonts::tables::layout::ChainedSequenceContextFormat1","read_fonts::tables::layout::ChainedSequenceRuleSet","read_fonts::tables::layout::ChainedSequenceRule","read_fonts::tables::layout::ChainedSequenceContextFormat2","read_fonts::tables::layout::ChainedClassSequenceRuleSet","read_fonts::tables::layout::ChainedClassSequenceRule","read_fonts::tables::layout::ChainedSequenceContextFormat3","read_fonts::tables::layout::Device","read_fonts::tables::layout::VariationIndex","read_fonts::tables::layout::FeatureVariations","read_fonts::tables::layout::ConditionSet","read_fonts::tables::layout::ConditionFormat1","read_fonts::tables::layout::ConditionFormat2","read_fonts::tables::layout::ConditionFormat3","read_fonts::tables::layout::ConditionFormat4","read_fonts::tables::layout::ConditionFormat5","read_fonts::tables::layout::FeatureTableSubstitution","read_fonts::tables::layout::SizeParams","read_fonts::tables::layout::StylisticSetParams","read_fonts::tables::layout::CharacterVariantParams","read_fonts::tables::ltag::Ltag","read_fonts::tables::maxp::Maxp","read_fonts::tables::mvar::Mvar","read_fonts::tables::name::Name","read_fonts::tables::os2::Os2","read_fonts::tables::post::Post","read_fonts::tables::postscript::Index1","read_fonts::tables::postscript::Index2","read_fonts::tables::postscript::FdSelectFormat0","read_fonts::tables::postscript::FdSelectFormat3","read_fonts::tables::postscript::FdSelectFormat4","read_fonts::tables::sbix::Sbix","read_fonts::tables::sbix::Strike","read_fonts::tables::sbix::GlyphData","read_fonts::tables::stat::Stat","read_fonts::tables::stat::AxisValueArray","read_fonts::tables::stat::AxisValueFormat1","read_fonts::tables::stat::AxisValueFormat2","read_fonts::tables::stat::AxisValueFormat3","read_fonts::tables::stat::AxisValueFormat4","read_fonts::tables::svg::Svg","read_fonts::tables::svg::SVGDocumentList","read_fonts::tables::varc::Varc","read_fonts::tables::varc::MultiItemVariationStore","read_fonts::tables::varc::SparseVariationRegionList","read_fonts::tables::varc::SparseVariationRegion","read_fonts::tables::varc::MultiItemVariationData","read_fonts::tables::varc::ConditionList","read_fonts::tables::variations::TupleVariationHeader","read_fonts::tables::variations::DeltaSetIndexMapFormat0","read_fonts::tables::variations::DeltaSetIndexMapFormat1","read_fonts::tables::variations::VariationRegionList","read_fonts::tables::variations::ItemVariationStore","read_fonts::tables::variations::ItemVariationData","read_fonts::tables::vhea::Vhea","read_fonts::tables::vmtx::Vmtx","read_fonts::tables::vorg::Vorg","read_fonts::tables::vvar::Vvar","read_fonts::TableDirectory","read_fonts::TTCHeader"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()