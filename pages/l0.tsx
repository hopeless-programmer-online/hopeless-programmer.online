import React from 'react'
import Person from '../classes/person'
import { article, emp, link, neg, paragraph, quote, section, sentence } from '../classes/shortcuts'
import Article from '../components/article'
import Page from '../components/page'

const esoteric = 'https://uk.wikipedia.org/wiki/%D0%95%D0%B7%D0%BE%D1%82%D0%B5%D1%80%D0%B8%D1%87%D0%BD%D1%96_%D0%BC%D0%BE%D0%B2%D0%B8_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F'

class l0 extends React.Component {
    public render() {
        return (
            <i style={{ fontWeight : 'bold', color : 'crimson', fontFamily : 'Helvetica' }}>L<sup>0</sup></i>
        )
    }
}

const model = article(sentence('Мова програмування ', l0, '. '), ...[
    section(sentence('Що таке ', l0, '? '), ...[
        paragraph(...[
            sentence(l0, ' - це мініатюрна мова програмування. '),
            sentence('Хоча ніхто не забороняє писати на ній повсякденні прикладні програми, це все ж може виявитись непомірно важкою роботою, адже ', l0, ' зовсім ', emp('не призначена'), ' для цього. '),
            sentence('Але разом з цим вона також не є жартом чи доведенням до абсурду, на відміну від, наприклад, багатьох ', link('езотеричних мов', esoteric), '. '),
            sentence('Тому в намаганні зрозуміти її марно покладатись на досвід, отриманий в роботі зі звичними мовами, адже основне призначення ', l0, ' - це не написання програм, а виявлення і дослідження меж застосовності штучних мов. '),
        ]),
        paragraph(...[
            sentence('У ', l0, ' немає жодної кінцевої мети, ', neg('лише шлях'), '. '),
            sentence('Причиною її створення були питання, але ', l0, ' не має на меті відповідати на них. '),
            sentence('Ця мова існує виключно тому, що без її існування досліджуваний з її допомогою предмет вислизає з поля зору. '),
            sentence('І це чиста правда, тому що до створення ', l0, ' я не лише не мав жодних припущень щодо можливих відповідей, а навіть не уявляв які питання потрібно ставити. '),
            sentence('Але аби пояснити що саме я маю на увазі і навіщо таки була написана ця мова мені доведеться привести кілька прикладів і ввести вас в курс справи. '),
            sentence('А до того часу навіть не намагайтесь використовувати ', l0, ' як звичайну мову програмування. '),
            sentence('Просто забудьте про це! '),
        ]),
    ]),
    section('Чому мови такі різні? ', ...[
        paragraph(...[
            sentence(''),
            sentence(''),
            sentence(''),
            sentence(''),
            sentence(''),
        ]),
        paragraph(...[
            sentence(''),
            sentence(''),
            sentence(''),
        ]),
    ]),
    section('', ...[
        paragraph(...[
            sentence(''),
        ]),
    ]),
])

export default class L0 extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
