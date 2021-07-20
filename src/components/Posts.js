import React, { Component } from 'react'

export default class Posts extends Component {
    
    state  = {
        posts:[]
    }
    
    async componentWillMount() {
        const rest = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await rest.json()
        this.setState({posts:data})
        //console.log(data);
    }


    render() {
        return (
            <div>
                <h1>Publicaciones</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
