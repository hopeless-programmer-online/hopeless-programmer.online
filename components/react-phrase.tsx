import React from 'react'
import Model from '../classes/react-phrase'

type Props = { model : Model }

export default class ReactPhraseComponent extends React.Component<Props> {
    public render() {
        const Target = this.props.model.target

        return (
            <Target/>
        )
    }
}
