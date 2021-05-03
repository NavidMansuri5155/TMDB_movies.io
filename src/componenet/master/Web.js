import React, { Component } from 'react';
import axios from "axios";

class Web extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get("https://api.themoviedb.org/3/movie/550?api_key=d435de067b84dba86d86c2e375391140")
            .then(response => {
                this.setState({ posts: response.data.production_companies })
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { posts } = this.state

        return (
            <div>

                <div className="data">
                    {
                        posts.map(post => <div key={post.id}>{post.body}
                            <div className="main">
                                <h1>{post.name}</h1>
                                <ul className="cards">
                                    <li className="cards_item">
                                        <div className="card">
                                            <div className="card_image"><img src={posts.logo_path} alt="cardpic" /></div>
                                            <div className="card_content">
                                                <h2 className="card_title">{posts.origin_country}  </h2>
                                                <button className="btn card_btn">{posts.id}</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        )}
                </div>

            </div>
        );
    }
}

export default Web;


