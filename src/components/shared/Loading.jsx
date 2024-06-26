import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



const Loading =() => {

  return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="flex flex-col items-center">
                <img className="w-1/2 h-1/2" loading="lazy" src="./Logo_AceroCorp.svg" />
                <Spinner className="text-AceroCorp mt-5"animation="border" ></Spinner>
            </div>
        </div>
    );
}

export default Loading;