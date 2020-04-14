import React from 'react';
import './card.css';
import Placeholder from './placeholder.jpg';


function NewsCard(props){
    return (
        <article className={"card-container mb-10 col-12-12"}>
            <div className={"news-content-wrap flex-row"}>
                    <section className={"col-9-12"}>
                            <h3 className={"col-12-12"}>
                                <a href={props.url} className={"news-link"}>
                                {props.title}
                                </a>
                            </h3>

                            <small className={"text-gray p-2"}>{props.source}   .  {props.date}</small>

                            <div className={"short-description"}>
                                <small>
                                    {props.shortText}
                                </small>
                            </div>
                    </section>

                    <section className={"col-3-12 flex-row js-ctr al-ctr"}>
                            <img src={props.imageSource} alt={props.title} className={"news-card-img"}/>
                    </section>
            </div>
        </article>
    );
}

export default NewsCard;