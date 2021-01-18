import React, {useState} from 'react';
import InputField from '../common/InputField';
import ButtonElipse from '../common/ButtonElipse';
import './CreateWishlist.scss';

// Image imports
import bday1 from '../../images/bday1.jpg';
import bday2 from '../../images/bday2.jpg';
import bday3 from '../../images/bday3.jpg';
import wedding1 from '../../images/wedding1.jpg';
import holiday1 from '../../images/holiday1.jpg';

function CreateWishlist(props) {
  const initialState = {
    name: null,
    image: null
  }
  const imageArray = [
    {src: bday1, name: 'bday1'},
    {src: bday2, name: 'bday2'}, 
    {src: bday3, name: 'bday3'}, 
    {src: wedding1, name: 'wedding1'}, 
    {src: holiday1, name: 'holiday1'}
  ];

  const [listSpec, setListSpec] = useState(initialState);
  const [listName, setListName] = useState(undefined);
  const [page, setPage] = useState('pickname');

  const handleInputChange = (e) => {
    setListName(e);
  };

  const handleRadioChange = (e) => {
    setListSpec({...listSpec, image: e.target.value});
  }

  const handleNextClick = () => {
    if(
      listName === '' || 
      listName === null || 
      listName === undefined) {
      console.log('Input is empty');
    } else {
      setListSpec({...listSpec, name: listName});
      setPage('pickimg');  
    }
  }

  const handleAddClick = () => {
    if(
      listSpec.image === '' || 
      listSpec.image === null || 
      listSpec.image === undefined) {
      console.log('No image has been picked');
    } else {
      props.onAddList(listSpec);
    } 
  }

  const createImageLink = imageArray.map((image) => 
    <label className="create-list-img-button" key={image.name}>
      <input type="radio" className="create-list-img-radio" name="img-radio" value={image.name} onChange={handleRadioChange} />
      <img src={image.src} alt={image.name} />
    </label>
  );
  
  return (
    <div className="create-list-container">
      <div className="create-list">
        { page === 'pickname' ? 
          <article className="create-list-pick-name">
            <h2>Give your list a name</h2>
            <InputField 
              name="newListName"
              placeholder="Our Wedding..."  
              className="create-list-input"
              required={true}
              onInputChange={handleInputChange}
            ></InputField>
            <ButtonElipse
              classname="fl-ag-r"
              onclick={handleNextClick}
              icon="chevron-right"
            />
          </article>
        :
          <article className="create-list-pick-img">
            <h2>Pick an image for your new list</h2>
            <div className="create-list-img-wrapper">
              {createImageLink}
            </div>
            <ButtonElipse
              icon="check"
              classname="create-list-add-button"
              onclick={handleAddClick}
            />
          </article>
        }
      </div>
    </div>
  )
}

export default CreateWishlist;