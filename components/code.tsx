import React from 'react'
import Code from '../classes/code'
import styles from './code.module.scss'
import LexemesComponent from './lexemes'
import * as icons from 'seti-icons-react'

type Props = { model : Code }

export default class CodeComponent extends React.Component<Props> {
    public render() {
        const { language } = this.props.model

        const [ icon, ext ] =
            language === 'C++'           ? [ <icons.Cpp        theme='extension/.c++'  render="maskImage"/>, 'cpp'  ] :
            language === 'C'             ? [ <icons.C          theme='extension/.c'    render="maskImage"/>, 'c'    ] :
            language === 'C#'            ? [ <icons.CSharp     theme='extension/.cs'   render="maskImage"/>, 'cs'   ] :
            language === 'BASIC'         ? [ <icons.Default    theme='default'         render="maskImage"/>, 'txt'  ] :
            language === 'CSS'           ? [ <icons.CSS        theme='extension/.css'  render="maskImage"/>, 'css'  ] :
            language === 'HTML'          ? [ <icons.HTML       theme='extension/.html' render="maskImage"/>, 'html' ] :
            language === 'JavaScript'    ? [ <icons.JavaScript theme='extension/.js'   render="maskImage"/>, 'js'   ] :
            language === 'JavaScriptXML' ? [ <icons.React      theme='extension/.jsx'  render="maskImage"/>, 'jsx'  ] :
            language === 'LLVM'          ? [ <icons.Default    theme='default'         render="maskImage"/>, 'llvm' ] :
            language === 'Lua'           ? [ <icons.Lua        theme='extension/.lua'  render="maskImage"/>, 'lua'  ] :
            language === 'PHP'           ? [ <icons.PHP        theme='extension/.php'  render="maskImage"/>, 'php'  ] :
            language === 'Python'        ? [ <icons.Python     theme='extension/.py'   render="maskImage"/>, 'py'   ] :
            language === 'SASS'          ? [ <icons.SASS       theme='extension/.sass' render="maskImage"/>, 'sass' ] :
            language === 'SCSS'          ? [ <icons.SASS       theme='extension/.scss' render="maskImage"/>, 'scss' ] :
            language === 'TypeScript'    ? [ <icons.TypeScript theme='extension/.ts'   render="maskImage"/>, 'ts'   ] :
            language === 'TypeScriptXML' ? [ <icons.React      theme='extension/.tsx'  render="maskImage"/>, 'tsx'  ] :
                                           [ <icons.Default    theme='default'         render="maskImage"/>, 'txt'  ]

        return (
            <article className={styles.code}>
                <header>
                    <figure>
                        <figcaption>
                            {icon}
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
