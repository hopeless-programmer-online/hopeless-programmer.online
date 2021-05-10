import React from 'react'
import styles from './badge.module.scss'

type Props = {}
type State = { discovered : boolean }

// @todo: polymorphism
export default abstract class SecretBadge extends React.Component<Props, State> {
    protected abstract get Icon() : React.ComponentType
    protected abstract get Caption() : React.ComponentType
    protected href : string = ''

    public constructor(props : Props) {
        super(props)

        this.state = { discovered : false }
    }

    private discover = () => {
        if (!this.state.discovered) this.setState({ discovered : true })
    }

    public render() {
        const { Icon, Caption, href } = this

        return (
            <a
                className={styles.badge}
                href={href}
                onMouseOver={this.discover}
            >
                <figure
                    style={{
                        visibility : this.state.discovered
                            ? 'visible'
                            : 'hidden'
                    }}
                >
                    <span>
                        <Icon/>
                    </span>
                    <figcaption>
                        <Caption/>
                    </figcaption>
                </figure>
            </a>
        )
    }
}
