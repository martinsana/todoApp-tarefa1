import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../assets/img/avatar.png';
import './Usuario.css';
function Usuario() {
  return (
    <div className="usuario-box">
      <img className="usuario-img" width={40} height={40} src={avatar} />
      <span className="usuario-nome">Ana</span>
    </div>
  );
}
export default Usuario;
