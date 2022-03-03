import { useContext } from "react";
import { useParams } from "react-router-dom";
import PicsContext from "../../context/picsContext";
import './StatusBar.css';
const StatusBar = () => {
  const {state} = useContext(PicsContext);
  const params = useParams();
  
  return (
    <div className='status'>
      <h4 className='status-text'>result of {params.text}</h4>
      <h4 className='status-count'>{state.data.total} resualt found</h4>
    </div>
  );
};

export default StatusBar;
