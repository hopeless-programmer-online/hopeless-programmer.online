import React from 'react'
import Code from '../classes/code'
import styles from './code.module.scss'
import LexemesComponent from './lexemes'
import * as icons from 'seti-icons-react'

type Props = { model : Code }

export default class CodeComponent extends React.Component<Props> {
    public render() {
        const { language } = this.props.model

        const [ Icon, theme, ext ] =
            language === 'C++'           ? [ icons.Cpp,        'extension/.c++',  'cpp'  ] :
            language === 'C'             ? [ icons.C,          'extension/.c',    'c'    ] :
            language === 'C#'            ? [ icons.CSharp,     'extension/.cs',   'cs'   ] :
            language === 'BASIC'         ? [ icons.Default,    'default',         'txt'  ] :
            language === 'CSS'           ? [ icons.CSS,        'extension/.css',  'css'  ] :
            language === 'HTML'          ? [ icons.HTML,       'extension/.html', 'html' ] :
            language === 'JavaScript'    ? [ icons.JavaScript, 'extension/.js',   'js'   ] :
            language === 'JavaScriptXML' ? [ icons.React,      'extension/.jsx',  'jsx'  ] :
            language === 'LLVM'          ? [ icons.Default,    'default',         'llvm' ] :
            language === 'Lua'           ? [ icons.Lua,        'extension/.lua',  'lua'  ] :
            language === 'PHP'           ? [ icons.PHP,        'extension/.php',  'php'  ] :
            language === 'Python'        ? [ icons.Python,     'extension/.py',   'py'   ] :
            language === 'SASS'          ? [ icons.SASS,       'extension/.sass', 'sass' ] :
            language === 'SCSS'          ? [ icons.SASS,       'extension/.scss', 'scss' ] :
            language === 'TypeScript'    ? [ icons.TypeScript, 'extension/.ts',   'ts'   ] :
            language === 'TypeScriptXML' ? [ icons.React,      'extension/.tsx',  'tsx'  ] :
            [ icons.Default, 'default', 'txt' ]

        return (
            <article className={styles.code}>
                <header>
                    <figure>
                        <Icon theme={theme} render="maskImage"/>
                        <figcaption>
                            example.{ext}
                        </figcaption>
                    </figure>
                </header>
                <code>
                    {
                        this.props.model.lines.reduce((lines, line, key) => [ ...lines,
                            <span key={`${key}-index`}>{key + 1}</span>,
                            <span key={`${key}-content`}>
                                <LexemesComponent model={line}/>
                            </span>,
                            <br key={`${key}-br`}/>
                        ], [])
                    }
                </code>
                <footer>
                    {/* @todo */}
                </footer>
            </article>
        )
    }
}
