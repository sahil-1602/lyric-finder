import { useState } from 'react';
export default initialVal => {
    const [value, setValue] = useState(initialVal);
    const toggleChange = () => {
        setValue((value) => !value);
    };
    return [value, toggleChange];
};