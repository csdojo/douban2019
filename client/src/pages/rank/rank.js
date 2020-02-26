import React, { Component } from "react";
import Slider from 'react-slick';
import { Icon, Col, Row } from 'antd';
import Loading from '../../assets/loading.svg';
import { Rate } from 'antd';
import { Button } from 'antd';
import './rankstyle.css';

class Rank extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weeklyBest: [],
            weeklyB: [],
            usBox: [],
            topHundred: [],
            settings: {
                dots: true
            }
        }
    }

    componentDidMount() {
        this.weeklyBest();
        this.usBox();
        this.topHundred()
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

    usBox = () => {

        fetch("https://cors-anywhere.herokuapp.com/https://api.douban.com/v2/movie/us_box?apikey=0b2bdeda43b5688921839c8ecb20399b")
            .then(result => {
                return result.json();
            })
            .then(data => {
                const usBox = data["subjects"].map(movie => {

                    return {
                        usRank: movie.rank,
                        usBoxTitle: movie.subject.title
                    }
                });

                this.setState({ usBox });
            })
    }


    topHundred = () => {

        fetch("https://cors-anywhere.herokuapp.com/https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b")
            .then(result => {
                return result.json();
            })
            .then(data => {
                const topHundred = data["subjects"].map(movie => {
                    return {
                        topHundredImg: "https://images.weserv.nl/?url=" + movie.images.small,
                        topHundredTitle: movie.title
                    }
                });

                this.setState({ topHundred });
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
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pad">
                            <div className="row">
                                <div className="weeklyBoxRank">
                                    <h6 className="weeklyHeader">
                                        本周口碑榜 · · · · · ·
                                </h6>
                                    {!this.state.weeklyB.length ?
                                        (<img src={Loading} alt='loading' />)
                                        :
                                        this.state.weeklyB.map(movie => {
                                            return (
                                                <div className="weeklyList">
                                                    <span>{movie.rank}</span>
                                                    <a href="/"><span className="weeklyTitle">{movie.weeklyTitle}</span> </a>
                                                </div>
                                            )
                                        }
                                        )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="weeklyBoxRank">
                                    <h6 className="weeklyHeader">
                                        北美票房榜 · · · · · ·
                                    </h6>
                                    {!this.state.usBox.length ?
                                        (<img src={Loading} alt='loading' />)
                                        :
                                        this.state.usBox.map(movie => {
                                            return (
                                                <div className="weeklyList">
                                                    <span>{movie.usRank}</span>
                                                    <a href="/"><span className="weeklyTitle">{movie.usBoxTitle}</span> </a>
                                                </div>
                                            )
                                        }
                                        )}
                                </div>
                            </div>
                            <div className="row">

                                <div className="weeklyBoxRank">
                                <h6 className="topHeader">
                                    豆瓣电影TOP250
                                </h6>
                                </div>

                                <div className = "row">
                                {!this.state.topHundred.length ?
                                    (<img src={Loading} alt='loading' />)
                                    :
                                    this.state.topHundred.map(movie => {
                                        return (
                                            <div className="card mycard">
                                                <img  className="card-img-top myimg" src={movie.topHundredImg} alt="card" referrerpolicy="never" rounded />
                                                <div className="card-body mycardbody">
                                                    <span className="card-text">{movie.topHundredTitle}</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="container footerContainer">
                    <div className="footer">
                        <span className="doubanCom">© 2005－2019 douban.com, all rights reserved 北京豆网科技有限公司</span>
                        <span className="salute" role="img" aria-label="">💌 Salute to Douban.com / 2018-2019 Made by
                <a className="dojoA" href="https://github.com/csdojo" target="_blank" rel="noopener noreferrer">DOJO9</a>
                        </span>
                    </div>
                </div>
            </div>

        )
    }
}

export default Rank;