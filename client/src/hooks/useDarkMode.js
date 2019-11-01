import {useEffect, useState} from 'react';

export const useDarkMode = () => {
    const [light, setLight] = useState=(false);

    useEffect(() => {
        if(light){
            if(!document.body.classList.contains('dark-mode')){
                document.body.classList.add('dark-mode');
            }
        }else {
            if(document.body.classList.contains('dark-mode')){
                document.body.classList.remove('dark-mode');
            }
        }
    }, [light])
    return [light, setLight];
}