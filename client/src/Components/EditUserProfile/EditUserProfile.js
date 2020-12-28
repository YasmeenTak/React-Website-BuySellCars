import './style.css';

function EditUserProfile() {
  return (
    <div>
      <div className='profilImgDiv'>
        <div className='container-fulid userCover'></div>
        <img
          src='assets/img/profileImg.jpg'
          alt='Avatar'
          className='userImg img-responsive'
        />
      </div>

      <form action='/action_page.php'>
        <fieldset>
          <legend>Personalia:</legend>
          <label for='fname'>First name:</label>
          <input type='text' id='fname' name='fname' />

          <input type='submit' value='Submit' />
        </fieldset>
      </form>
    </div>
  );
}
export default EditUserProfile;
