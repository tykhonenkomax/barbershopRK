import { useSelector } from "react-redux";
import loader from "../../assets/images/loader.svg"
import './spinner.scss'

const Spinner = () => {
    const isLoader = useSelector(state => state.loader.loader);

    return (
        <>
            {
                isLoader && <div className='spinner'>
                    <img src={loader} alt="spinner" />
                </div>
            }
        </>

    )
}

export default Spinner