// on imoprte le composant react-feather qui nous intéresse et on l'utilise plus bas pour le bouton
import { Send } from 'react-feather';

import { useDispatch, useSelector } from 'react-redux';

import { addNewMessageBis, sendMessage, setNewMessage } from '../../actions';

import './styles.scss';

// Mise en place d'un champ controllé pour le texte du nouveau message :
// Plan d'action :
// x prévoir un emlacement dans le state pour stocker la valeur à afficher dans le champ
// - forcer la value du champ avec la valeur stockée dans le state
//    - lire la valeur courante de newMessageContent (avec useSelector),
//    - forcer la value de l'input avec cette info
// - lors d'une mise à jour du champ, enregister la nouvele valeur dans le state:
//    - écouter la modification du champ (onChange)
//    - réagir dans un gestionnaire d'évènement
//    - dispatcher l'intention 'je veux changer la valeur de newMessageContent
//    - traduire l'intention dans le reducer (produire une nouvelle version du state avec la propriété #newMessageContent mis à jour)

const Form = () => {
  const dispatch = useDispatch();

  const newMessageContent = useSelector(
    (state) => state.newMessageContent,
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('formulaire soumis, on veut ajouter un message');
    // dispatch(addNewMessageBis());
    // à la soumission du formulaire, on emet une intention d'envoyer un message vers le serveur websocket
    // cette action sera interceptée par le middleware websocket
    dispatch(sendMessage());
  };

  const handleChange = (event) => {
    dispatch(setNewMessage(event.target.value));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={newMessageContent}
        type="text"
        placeholder="Saisir un message"
        className="form__message"
        onChange={handleChange}
      />
      <button type="submit" className="form__submit">
        <Send />
      </button>
    </form>
  );
};
export default Form;
