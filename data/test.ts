import Article from "../classes/article";
import Paragraph from "../classes/paragraph";
import Section from "../classes/section";
import Sentence from "../classes/sentence";
import Sentences from "../classes/sentences";
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
            ],
        }),
    ],
})
