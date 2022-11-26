import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectedColors = () => {
    return (
        <div>
            <h2>Select Color</h2>
            <ColorConsumer>
                {( {act} ) => (
                    <div style={ {display: 'flex'} }>
                        {colors.map(color => (
                            <div
                                key={color}
                                style={{
                                    background: color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer'
                                }}
                                onClick={() => act.setColor(color)}
                                onContextMenu={e => {
                                    e.preventDefault();
                                    act.setSubColor(color);
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr/>
        </div>
    );
};

export default SelectedColors;