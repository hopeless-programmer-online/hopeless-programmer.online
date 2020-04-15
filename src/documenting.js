`use strict`;


const Document = require(`./documenting/document`);
const Section = require(`./documenting/section`);
const SectionPart = require(`./documenting/section-part`);
const ParagraphSectionPart = require(`./documenting/paragraph-section-part`);
const IllustrationsSectionPart = require(`./documenting/illustrations-section-part`);
const Illustration = require(`./documenting/illustration`);
const CodeIllustration = require(`./documenting/code-illustration`);
const Paragraph = require(`./documenting/paragraph`);
const Sentence = require(`./documenting/sentence`);
const Phrase = require(`./documenting/phrase`);
const TextPhrase = require(`./documenting/text-phrase`);
const CodePhrase = require(`./documenting/code-phrase`);
const Code = require(`./documenting/code`);
const CodeLine = require(`./documenting/code-line`);
const Lexeme = require(`./documenting/lexeme`);
const TextLexeme = require(`./documenting/text-lexeme`);
const CommentLexeme = require(`./documenting/comment-lexeme`);
const shortcuts = require(`./documenting/shortcuts`);


exports.Document = Document;
exports.Section = Section;
exports.SectionPart = SectionPart;
exports.IllustrationsSectionPart = IllustrationsSectionPart;
exports.Illustration = Illustration;
exports.CodeIllustration = CodeIllustration;
exports.ParagraphSectionPart = ParagraphSectionPart;
exports.Paragraph = Paragraph;
exports.Sentence = Sentence;
exports.Phrase = Phrase;
exports.TextPhrase = TextPhrase;
exports.CodePhrase = CodePhrase;
exports.Code = Code;
exports.CodeLine = CodeLine;
exports.Lexeme = Lexeme;
exports.TextLexeme = TextLexeme;
exports.CommentLexeme = CommentLexeme;
exports.shortcuts = shortcuts;
