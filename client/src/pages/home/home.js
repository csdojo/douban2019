import React, { Component } from "react";
import Slider from 'react-slick';
import { Icon, Col, Row } from 'antd';
import Loading from '../../assets/loading.svg';
import { Rate } from 'antd';
import { Button } from 'antd';
import './homestyle.css';

// custom prev arrow
const SamplePrevArrow = (props) => {
    const { className, onClick } = props
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <Icon type="left-circle" />
        </div>
    )
}

// custom next arrow
const SampleNextArrow = (props) => {
    const { className, onClick } = props
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <Icon type="right-circle" />
        </div>
    )
}


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: "",
            movies: [],
            weeklyBest: [],
            inbox: [],
            weeklyB: [],
            images: [],
            comingSoon:[],
            settings: {
                dots: true,
                slidesToShow: 5,
                slidesToScroll: 5,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />

                // centerPadding: '10px'

            }
        }
    }

    componentDidMount() {
        this.inTheaterMovie();
        this.weeklyBest();
        this.comingSoon();
    }

    // method to handle on change
    // handleChange = event => {
    //     const { name, value } = event.target;

    //     this.setState({ [name]: value });
    // }


    // save movie
    // saveMovie = movieId => {
    //     // find movie in this.state.movies by it's id
    //     const selectedMovie = this
    //         .state
    //         .movies
    //         .find(({ id }) => id === movieId);

    //     API
    //         .saveMovie(selectedMovie)
    //         .then(({ data }) => console.log(data))
    //         .catch(err => console.log(err));
    // }

    inTheaterMovie = () => {
        const movies = [];
        this.setState({ movies });
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var targetUrl = 'https://api.douban.com/v2/movie/us_box?apikey=0b2bdeda43b5688921839c8ecb20399b'
        fetch(proxyUrl + targetUrl)
            .then(response => response.json())
            .then(data => {
                const inbox = data["subjects"].map(movie => {
                    return {
                        title: movie.subject.title,
                        rating: movie.subject.rating.average,
                        images: "https://images.weserv.nl/?url=" + movie.subject.images.small,
                        date: movie.subject.year
                    }
                });

                this.setState({ inbox });


            })
            .catch(e => {
                console.log(e);
                return e;
            })
    }


    weeklyBest = () => {

        fetch("https://cors-anywhere.herokuapp.com/https://api.douban.com/v2/movie/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b")
            .then(result => {
                return result.json();
            })
            .then(data => {
                const weeklyB = data["subjects"].map(movie => {
                    return {
                        rank: movie.rank,
                        weeklyTitle: movie.subject.title
                    }
                });

                this.setState({ weeklyB });
            })

    }

    comingSoon = () => {

        fetch("https://cors-anywhere.herokuapp.com/https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b")
            .then(result => {
                return result.json();
            })
            .then(data => {

                const comingSoon = data["subjects"].map(movie => {
                    return {
                        title: movie.title,
                        rating: movie.rating.average,
                        images: "https://images.weserv.nl/?url=" + movie.images.small
                    }
                });

                this.setState({ comingSoon });
            })

    }

    render() {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div className="row">
                                <div className="container">
                                    <h6 className="intheaterHeader">
                                        正在热映
                                    <a href="/" className="intheader">全部正在热映»</a>
                                        <a href="/" className="intheader">即将上映»</a>
                                    </h6>
                                    <Slider {...this.state.settings}>
                                        {!this.state.inbox.length ?
                                            (<img src={Loading} alt='loading'/>)
                                            :
                                            this.state.inbox.map(movie => {
                                                return (
                                                    <div className="col-12" key={movie.id}>
                                                        <div className="shadowbox">

                                                            <div className="card border-light">

                                                                <img className="movieImage" src={movie.images} alt={movie.title} referrerpolicy="never" />
                                                                <div >
                                                                    <p className="nowrapTitle">{movie.title}</p>

                                                                    <p>{movie.rating}</p>
                                                                    <p></p>
                                                                    {/* <div className="btn-group" role="group">
                                                                        <button type="button" className="btn" onClick={() => this.saveMovie(movie.id)}>Save Movie</button>

                                                                    </div> */}


                                                                    <Button type="primary" className="ant-btn ant-btn-primary">
                                                                        <a className="btnA" href="https://www.amctheatres.com/" target="_blank" rel="noopener noreferrer">选座购票</a>
                                                                    </Button>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </Slider>
                                </div>
                            </div>
                            <div className="row">
                            <div className="container">
                                    <h6 className="intheaterHeader">
                                    即将上映
                                    </h6>
                                    <Slider {...this.state.settings}>
                                        {!this.state.comingSoon.length ?
                                            (<img src={Loading} alt='loading'/>):
                                            this.state.comingSoon.map(movie => {
                                                return (
                                                    <div className="col-12" key={movie.id}>
                                                        <div className="shadowbox">

                                                            <div className="card border-light">

                                                                <img className="movieImage" src={movie.images} alt={movie.title} referrerpolicy="never"/>
                                                                <div >
                                                                    <p className="nowrapTitle">{movie.title}</p>

                                                                    <p>{movie.rating}</p>
                                                                    <p></p>
                                                                    {/* <div className="btn-group" role="group">
                                                                        <button type="button" className="btn" onClick={() => this.saveMovie(movie.id)}>Save Movie</button>

                                                                    </div> */}
                                                                    <Button type="primary" className="ant-btn ant-btn-primary">
                                                                        <a className="btnA" href="https://www.amctheatres.com/" target="_blank" rel="noopener noreferrer">选座购票</a>
                                                                    </Button>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>

                            </div>
                        </div>
                        <div className="col-3">
                            <div className="weeklyBox">
                                <h6 className="weeklyHeader">
                                    本周口碑榜
                                </h6>
                                {!this.state.weeklyB.length ?
                                            (<img src={Loading} alt='loading'/>)
                                            :
                                            this.state.weeklyB.map(movie => {
                                                return (
                                                    <div className="weeklyList">
                                                        <span>{movie.rank}</span>
                                                        <a href="/"><span className="weeklyTitle">{movie.weeklyTitle}</span> </a>
                                                    </div>
                                                )}
                                                )}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container footerContainer">
                <div className="footer">
                <span className="doubanCom">© 2005－2019 douban.com, all rights reserved 北京豆网科技有限公司</span>
                <span className="salute" role = "img" aria-label="">💌 Salute to Douban.com / 2018-2019 Made by 
                <a className="dojoA" href="https://github.com/csdojo" target="_blank" rel="noopener noreferrer">DOJO9</a>
                </span>
                </div>
                </div>
            </div>

        )
    }
}


export default Home;