import { FallingLines } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <div style={{display: 'grid',placeContent: 'center',}}>
            <FallingLines
                color="#4FA94D"
                width="100"
                visible={true}
                ariaLabel="falling-lines-loading"
            />
        </div>
    );
};
