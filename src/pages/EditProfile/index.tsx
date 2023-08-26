import React, { useContext, useEffect } from "react";
import EditForm from "../../components/EditForm";
import { Container, ProfileSide} from "./style";
import UserProfileHeader from '../../components/UserProfileHeader';
import { UserContext } from "../../context/user-context";
import Modal from "../../components/Modal";
import MinimalUserProfileHeader from "../../components/UserProfileHeader/Minimal";
import photo from '../../assets/img/profile-image.png';
import ellipse from "../../assets/img/ellip.svg";
import edit from "../../assets/img/edit.svg";


function EditProfile() {

//The constant retrieves shared functions and variables from the user context in the application to manage the login state and modal visibility.
  const {setUserIsLogged} = useContext(UserContext)!;

//This function serves to set the modalIsVisible state to true, making the modal visible in the user interface.
  

//The useEffect hook sets the userIsLogged state to true when the component mounts or when setUserIsLogged changes, likely initializing or updating the user login status.
  useEffect(() => {
    setUserIsLogged(true);
  }, [setUserIsLogged]);

  return (
    <>
    <Container>
      <ProfileSide>
      <MinimalUserProfileHeader photo={photo} ellipse={ellipse} edit={edit}/>
      </ProfileSide>
      <EditForm />
    </Container>
  
    </>
  );
}

export default EditProfile;