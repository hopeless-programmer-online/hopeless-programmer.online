import Article from "../classes/article";
import Code from "../classes/code";
import CommentLexeme from "../classes/comment-lexeme";
import IdentifierLexeme from "../classes/identifier-lexeme";
import Illustration from "../classes/illustration";
import KeywordLexeme from "../classes/keyword-lexeme";
import Lexemes from "../classes/lexemes";
import Paragraph from "../classes/paragraph";
import Section from "../classes/section";
import Sentence from "../classes/sentence";
import Sentences from "../classes/sentences";
import TextLexeme from "../classes/text-lexeme";
import TextPhrase from "../classes/text-phrase";

export default new Article({
    title : new Sentences({ array : [
        new Sentence({
            phrases : [
                new TextPhrase({
                    text : 'Назва статті. ',
                }),
            ],
        }),
        new Sentence({
            phrases : [
                new TextPhrase({
                    text : 'Назва статті #2. ',
                }),
            ],
        }),
    ] }),
    sections : [
        new Section({
            title : new Sentences({ array : [
                new Sentence({
                    phrases : [
                        new TextPhrase({
                            text : 'Частина №1. ',
                        }),
                    ],
                }),
                new Sentence({
                    phrases : [
                        new TextPhrase({
                            text : 'Друге речення заголовку. ',
                        }),
                    ],
                }),
            ] }),
            parts : [
                new Paragraph({
                    sentences : new Sentences({ array : [
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                                }),
                            ],
                        }),
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                                }),
                            ],
                        }),
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
                                }),
                            ],
                        }),
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
                                }),
                            ],
                        }),
                    ] }),
                }),
                new Paragraph({
                    sentences : new Sentences({ array : [
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                                }),
                            ],
                        }),
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                                }),
                            ],
                        }),
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
                                }),
                            ],
                        }),
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
                                }),
                            ],
                        }),
                    ] }),
                }),
                new Illustration({
                    title : new Sentences({ array : [
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Ілюстрація №1. ',
                                }),
                            ],
                        }),
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Друге речення заголовку. ',
                                }),
                            ],
                        }),
                    ] }),
                    description : new Paragraph({
                        sentences : new Sentences({ array : [
                            new Sentence({
                                phrases : [
                                    new TextPhrase({
                                        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                                    }),
                                ],
                            }),
                            new Sentence({
                                phrases : [
                                    new TextPhrase({
                                        text : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                                    }),
                                ],
                            }),
                        ] }),
                    }),
                    target : new Code({
                        language : 'JavaScript',
                        lines : [
                            new Lexemes({ array : [
                                new KeywordLexeme({
                                    text : 'if',
                                }),
                                new TextLexeme({
                                    text : ' (',
                                }),
                                new IdentifierLexeme({
                                    text : 'x',
                                    role : 'variable',
                                }),
                                new TextLexeme({
                                    text : ') {',
                                }),
                            ] }),
                            new Lexemes({ array : [
                                new CommentLexeme({
                                    text : 'line #2',
                                }),
                            ] }),
                            new Lexemes({ array : [
                                new TextLexeme({
                                    text : 'line #3',
                                }),
                            ] }),
                        ],
                    }),
                }),
                new Illustration({
                    title : new Sentences({ array : [
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Ілюстрація №1. ',
                                }),
                            ],
                        }),
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Друге речення заголовку. ',
                                }),
                            ],
                        }),
                    ] }),
                    description : new Paragraph({
                        sentences : new Sentences({ array : [
                            new Sentence({
                                phrases : [
                                    new TextPhrase({
                                        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                                    }),
                                ],
                            }),
                            new Sentence({
                                phrases : [
                                    new TextPhrase({
                                        text : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                                    }),
                                ],
                            }),
                        ] }),
                    }),
                    target : new Code({
                        language : 'JavaScript',
                        lines : [
                            new Lexemes({ array : [
                                new KeywordLexeme({
                                    text : 'if',
                                }),
                                new TextLexeme({
                                    text : ' (',
                                }),
                                new IdentifierLexeme({
                                    text : 'x',
                                    role : 'variable',
                                }),
                                new TextLexeme({
                                    text : ') {',
                                }),
                            ] }),
                            new Lexemes({ array : [
                                new CommentLexeme({
                                    text : 'line #2',
                                }),
                            ] }),
                            new Lexemes({ array : [
                                new TextLexeme({
                                    text : 'line #3',
                                }),
                            ] }),
                        ],
                    }),
                }),
                new Paragraph({
                    sentences : new Sentences({ array : [
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                                }),
                            ],
                        }),
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                                }),
                            ],
                        }),
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
                                }),
                            ],
                        }),
                        new Sentence({
                            phrases : [
                                new TextPhrase({
                                    text : 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
                                }),
                            ],
                        }),
                    ] }),
                }),
            ],
        }),
    ],
})


