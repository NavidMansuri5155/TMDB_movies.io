import React, { Component } from 'react';
import axios from "axios";
import "./Home.css"


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: ""
        }
    }
    



    async componentDidMount() {
        try {
            const resp = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=d435de067b84dba86d86c2e375391140");
            this.setState({ posts: resp.data })
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        const { posts } = this.state
        // console.log(posts.id);
        return (
            <>
                {
                    <div key={posts.id}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 sm-4 mt-3">
                                    <div className="card">
                                        <div style={{ backgroundColor: "lightblue", display: "flex" }} className="card-horizontal">
                                            <div className="img-square-wrapper">
                                                <img className="photo" src="https://images3.alphacoders.com/263/thumb-1920-263577.jpg   " alt="Flag image" />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title"><b>Original_Title : </b>{posts.original_title}</h4>
                                                <p className="card-text"><b>popularity : </b>{posts.popularity}</p>
                                                <p className="card-text"><b>Original_Language : </b>{posts.original_language}</p>
                                                <p className="card-text"><b>Imdb_id : </b>{posts.imdb_id}</p>
                                                <p className="card-text"><b>Movies_id : </b>{posts.id}</p>
                                                <p className="card-text"><b>overview : </b>{posts.overview}</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button style={{ marginLeft: "80rem" }} type="button" className="btn btn-primary"><a href={posts.homepage}>movies</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                
            </>
        );
    }
}

export default Home;
