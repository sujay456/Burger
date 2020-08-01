import React from 'react';
import Aux from '../../hoc/Auxilary';
import classe from './layout.module.css';

const layout=(props)=>{

    return (
        <Aux>
            <div>
                Toolbar,Sidedrawer,Backdrop
            </div>

            <main className={classe.Content} >
                {props.children}
            </main>


        </Aux>

    );
}

export default layout;