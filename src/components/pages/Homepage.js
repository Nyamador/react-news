import React, {Component} from 'react';
import Header from '../common/Header'
import NewsCard from '../common/NewsCard'


class Homepage extends Component{

    constructor(props){
        super(props);

        this.state = {
            headlines: [],
            isLoading: true,
            error : false
        }

        this.getHeadlines = this.getHeadlines.bind(this);
    }


    componentDidMount(){
        this.getHeadlines();
        this.setState({isLoading: false})
    }

    getHeadlines(){
        const API_KEY = process.env.REACT_APP_NEWS_API_KEY
        fetch(`https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(data => this.setState({headlines: data.articles }))
        .catch(err => this.setState({ error: true }));
    }

    render () {
       
        const { isLoading } = this.state;
        const {error}  = this.state;
        const {headlines} = this.state;
       return (
        <>  
            <Header/>
                <main className={"main-content"}>
                    <h2 className={"mb-20"}>Headlines</h2>

                    { 


                    // ? If fetch() promise was not resolved raise error
                    error ? "There was an error" :
                    //  ? else if isloading is true return loading signal, otherwise return data
                    isLoading ? "Loading..."
                    : 
                    
                    headlines.map( headline => 
                        
                        <NewsCard 
                        key={Math.random()}
                        url = {headline.url}
                        title={headline.title}  
                        source={headline.source.name} 
                        date={Date(`${headline.date}`)}
                        shortText={headline.description}
                        imageSource={headline.urlToImage}
                         />

                        )
                     
                    }

                </main>
        </>
       );
    }
}

export default Homepage