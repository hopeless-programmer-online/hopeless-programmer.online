import React from 'react'
import Model from '../classes/article-details'
import PersonComponent from './person'
import YearMonthDate from './year-month-date'

type Props = { model : Model }

export default class ArticleDetailsComponent extends React.Component<Props> {
    public render() {
        const { model } = this.props

        return (
            <details>
                <summary>Деталі</summary>
                <dl>
                    <dt>Опубліковано</dt>
                    <dd>
                        <YearMonthDate model={model.created}/>
                    </dd>
                    <dt>Автор</dt>
                    <dd>
                        <PersonComponent model={model.author}/>
                    </dd>
                    {/* <dt>Переклад</dt>
                    <dd>Безнадійний Програміст</dd>
                    <dt>Редагування</dt>
                    <dd>Безнадійний Програміст</dd> */}
                </dl>
                {/* <h4>Історія правок</h4>
                <ol>
                    <li>Правка</li>
                    <li>Правка</li>
                    <li>Правка</li>
                </ol> */}
            </details>
        )
    }
}
