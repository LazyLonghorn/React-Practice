import { createContext, useState } from 'react';

const ColorContext = createContext({ 
    // color: 'black' 
    state: { color: 'black', subColor: 'red' },
    act: {
        setColor: () => {},
        setSubColor: () => {},
    }
});

const ColorProvider = ( {children} ) => {
    const [color, setColor] = useState('black');
    const [subColor, setSubColor] = useState('red');

    const value = {
        state: {color, subColor},
        act: {setColor, setSubColor}
    }

    return (
        <ColorContext.Provider value={value}>
            {children}
        </ColorContext.Provider>
    );
}

// ColorConsumer = ColorContext.Consumer
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;