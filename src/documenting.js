`use strict`;


const Document = require(`./documenting/document`);
const Section = require(`./documenting/section`);
const SectionPart = require(`./documenting/section-part`);
const ParagraphSectionPart = require(`./documenting/paragraph-section-part`);
const IllustrationsSectionPart = require(`./documenting/illustrations-section-part`);
const Illustration = require(`./documenting/illustration`);
const Paragraph = require(`./documenting/paragraph`);
const Sentence = require(`./documenting/sentence`);
const Phrase = require(`./documenting/phrase`);
const TextPhrase = require(`./documenting/text-phrase`);
const Code = require(`./documenting/code`);
const CodeLine = require(`./documenting/code-line`);
const Lexeme = require(`./documenting/lexeme`);
const TextLexeme = require(`./documenting/text-lexeme`);


exports.Document = Document;
exports.Section = Section;
exports.SectionPart = SectionPart;
exports.IllustrationsSectionPart = IllustrationsSectionPart;
exports.Illustration = Illustration;
exports.ParagraphSectionPart = ParagraphSectionPart;
exports.Paragraph = Paragraph;
exports.Sentence = Sentence;
exports.Phrase = Phrase;
exports.TextPhrase = TextPhrase;
exports.Code = Code;
exports.CodeLine = CodeLine;
exports.Lexeme = Lexeme;
exports.TextLexeme = TextLexeme;
