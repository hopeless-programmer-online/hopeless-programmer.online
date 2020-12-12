import React from 'react'
import Model from '../classes/person'

type Props = { model : Model }

export default class PersonComponent extends React.Component<Props> {
    public render() {
        const { firstName, lastName, nickname, mail } = this.props.model
        const text = [
            ...(firstName ? [ firstName ] : []),
            ...(nickname ? [ nickname ] : []),
            ...(lastName ? [ lastName ] : []),
        ]

        return mail !== null
            ? <a href={`mailto:${mail}`}>{text}</a>
            : text
    }
}
