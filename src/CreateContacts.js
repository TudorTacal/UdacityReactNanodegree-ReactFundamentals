import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'

class CreateContacts extends React.Component {
    render () {
        return (
            <div>
                <Link classname="close-create-contact" to="/">Close</Link>
                <form className="create-contact-form">
                    <ImageInput
                        className="create-contact-avatar-input"
                        name="avatarURL"
                        maxHeight={64}
                    />
                </form>
                <div className="create-contact-details">
                    <input type="text" name="name"  placeholder="Name"/>
                    <input type="text" name="name"  placeholder="Email"/>
                    <button>Add Contact</button>
                </div>
            </div>
        ) 
    }
}

export default CreateContacts