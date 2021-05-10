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
            language === 'L0'            ? [ <L0/>,                                                          'l0'   ] :
                                           [ <icons.Default    theme='default'         render="maskImage"/>, 'txt'  ]

        return (
            <article className={styles.code}>
                <header>
                    <figure>
                        {icon}
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

class L0 extends React.Component {
    public render() {
        return (
            <span
                style={{
                    backgroundColor : 'crimson',
                    backgroundPosition : 'center',
                    backgroundRepeat : 'no-repeat',
                    display : 'inline-block',
                    maskImage : `url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><path d=\\"M 167.59,152.20 C 167.59,152.20 222.41,152.20 222.41,152.20 222.41,152.20 179.20,367.00 179.20,367.00 179.20,367.00 278.00,367.00 278.00,367.00 278.00,367.00 269.20,413.00 269.20,413.00 269.20,413.00 115.20,413.00 115.20,413.00 115.20,413.00 167.59,152.20 167.59,152.20 Z M 325.25,275.00 C 318.75,275.00 312.79,273.79 307.38,271.38 301.96,268.96 297.25,265.38 293.25,260.62 289.25,255.88 286.12,249.92 283.88,242.75 281.62,235.59 280.50,227.34 280.50,218.00 280.50,200.50 282.54,185.04 286.62,171.62 290.71,158.21 296.04,146.96 302.62,137.88 309.21,128.79 316.66,121.92 325.00,117.25 333.33,112.59 341.75,110.25 350.25,110.25 356.75,110.25 362.71,111.46 368.12,113.88 373.54,116.29 378.21,119.92 382.12,124.75 386.04,129.59 389.12,135.59 391.38,142.75 393.62,149.92 394.75,158.25 394.75,167.75 394.75,185.25 392.71,200.71 388.62,214.12 384.54,227.54 379.25,238.75 372.75,247.75 366.25,256.75 358.83,263.54 350.50,268.12 342.16,272.71 333.75,275.00 325.25,275.00 Z M 327.50,248.75 C 332.00,248.75 336.41,246.54 340.75,242.12 345.08,237.71 348.91,231.67 352.25,224.00 355.58,216.34 358.29,207.38 360.38,197.12 362.46,186.88 363.50,175.92 363.50,164.25 363.50,154.42 362.16,147.34 359.50,143.00 356.83,138.67 353.08,136.50 348.25,136.50 343.75,136.50 339.33,138.75 335.00,143.25 330.66,147.75 326.83,153.84 323.50,161.50 320.16,169.17 317.46,178.17 315.38,188.50 313.29,198.84 312.25,209.84 312.25,221.50 312.25,231.34 313.58,238.34 316.25,242.50 318.91,246.67 322.66,248.75 327.50,248.75 Z\\"/></svg>")`,
                }}
            />
        )
    }
}
