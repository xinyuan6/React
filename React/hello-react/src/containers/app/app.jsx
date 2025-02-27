import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CommentAdd from '../../components/comment-add/comment-add'
import CommentList from '../../components/comment-list/comment-list'
import { addComment, deleteComment, getComments } from '../../redux/actions'


class App extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired,
        getComments: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getComments()
        // 订阅消息（deleteComment'）
        PubSub.subscribe('deleteComment', (msg, index) => {
            this.props.deleteComment(index)
        })
    }

    render() {
        const { comments, addComment } = this.props

        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={addComment} />
                    <CommentList comments={comments} />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({ comments: state.comments }),
    { addComment, deleteComment, getComments }
)(App)