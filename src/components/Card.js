import React from 'react';

const Card = ({id, name, email}) => {
    return (      
        <div className='tc white bg-black dib br4 pa3 ma2 grow ba bw3 b--gold shadow-5'>
            <img alt="robots" src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
