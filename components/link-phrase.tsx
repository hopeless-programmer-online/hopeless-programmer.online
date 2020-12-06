import React from 'react'
import LinkPhrase from '../classes/link-phrase'
import PhrasesComponent from './phrases'

type Props = { model : LinkPhrase }

export default class LinkPhraseComponent extends React.Component<Props> {
    public render() {
        return (
            <a>
                {
                    <PhrasesComponent model={this.props.model.phrases}/>
                }
            </a>
        )
    }
}
