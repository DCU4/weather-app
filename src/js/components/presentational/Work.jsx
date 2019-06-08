import React, { Component } from 'react';
// export {esther} from './img/esther.gif';

export const Work = (props) => {

    return (

            <div className="work info">
                <section>
                    <h1><a className={props.darkMode} data-text="__________________" href={props.link}>{props.title}</a></h1>
                    <p>{props.info}</p>
                    <div className="project">
                        <a href={props.link}><img src={props.img} /></a>
                    </div>
                </section>
            </div>

    );

}