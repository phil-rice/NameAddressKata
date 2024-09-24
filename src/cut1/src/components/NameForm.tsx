import React, {useState} from "react";

/**
 * Very ugly code. The way the rendering is done is very hard-coded, doesn't react at all to changes.
 * Any changes made to anything will
 *
 * Code is big, it doesn't need a lot of tabs because everything is only in one place
 * so there is no need to navigate to any more file.
 */
export const NameForm: React.FC = () => {

    /**
     * using the useState hook, we control the formData, in this case the name data and the way it updates.
     */
    const [formData, setFormData] = useState(
        {
            title: '',
            firstName: '',
            lastName: ''
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    };

    return (
        <form>
            <div>
                <label htmlFor="title">Title</label>
                <select
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}>
                    <option value="">Select Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Dr">Dr</option>
                    <option value="Prof">Prof</option>
                </select>
            </div>

            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}/>
            </div>
        </form>
    )

}