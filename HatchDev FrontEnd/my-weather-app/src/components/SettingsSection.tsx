import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SettingsSection = () => {
    const { theme, setTheme } = useContext(ThemeContext)!;

    return (
        <div>
            <h1>Settings</h1>
            <label>
                Background Color:
                <input 
                    type="color" 
                    onChange={(e) => setTheme({ backgroundColor: e.target.value })} 
                    value={theme.backgroundColor} 
                />
            </label>
        </div>
    );
};

export default SettingsSection;
