// JavaScript source code
//UserForm.js
function UserForm({ setValue, handleSubmit }) {
    return (
        <div>
            <h3>User Name</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' onChange={e => setValue(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form>
            <h3>Password</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Password' onChange={e => setValue(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form>
        </div >
    )
}
export default UserForm