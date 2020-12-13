import React from 'react'
import { article, illustration, paragraph, section, sentence, } from "../classes/shortcuts";
import VectorProjector from '../components/vector-projector';

class X extends React.Component {
    public render() {
        return (
            <VectorProjector/>
        )
    }
}

export default article(`Векторна проекція. `, ...[
    section(``, ...[
        paragraph(...[
            sentence(``),
        ]),
        illustration('lol kek', X),
    ]),
])
