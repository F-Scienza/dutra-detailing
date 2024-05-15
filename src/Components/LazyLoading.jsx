import { CircularProgress } from '@nextui-org/progress';

function LazyLoading() {
    return (  
        <div className='flex justify-center items-center w-screen h-screen text-white'>
            <CircularProgress 
                color='danger'
                label='Cargando...'
            />
        </div>
    );
}

export default LazyLoading;