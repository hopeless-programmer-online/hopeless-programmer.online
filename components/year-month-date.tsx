import React from 'react'

type Props = { model : Date }

export default class YearMonthDate extends React.Component<Props> {
    public render() {
        const { model } = this.props

        return (
            <time dateTime={model.toISOString()}>
                {
                    model.getUTCFullYear().toString().padStart(4, '0')
                    + '/' +
                    (model.getUTCMonth() + 1).toString().padStart(2, '0')
                    + '/' +
                    model.getUTCDate().toString().padStart(2, '0')
                }
            </time>
        )
    }
}
