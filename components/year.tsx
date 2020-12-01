import React from 'react'

type Props = { date : Date }

export default class Year extends React.Component<Props> {
    public render() {
        const { date } = this.props

        return (
            <time dateTime={date.toISOString()}>
                {date.getFullYear()}
            </time>
        )
    }
}
