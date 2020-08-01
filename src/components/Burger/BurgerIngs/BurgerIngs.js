import React from 'react';
import classe from './BurgerIngs.module.css';

const burgerIngs=(props)=>{

    let ings=null;


    switch(props.type){

        case('bread-bottom'):
            ings=<div className={classe.BreadBottom}></div>;
            break;

        case('bread-top'):
            ings=(
                <div className={classe.BreadTop} >
                    <div className={classe.Seeds1} ></div>
                    <div className={classe.Seeds2} ></div>
                </div>
            );
            break;
        
        case('meat'):
                ings=<div className={classe.Meat}></div>
                break;
        case('salad'):
                ings=<div className={classe.Salad}></div>
                break;
        case('cheese'):
                ings=<div className={classe.Cheese}></div>
                break;
        case('bacon'):
                ings=<div className={classe.Bacon}></div>
                break;
        default:
            ings=null;


    }

    return ings;

    
}

export default burgerIngs;