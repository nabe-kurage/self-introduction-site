import profile from "../profileIllustration.jpg";

export const Profile = () => {
    return (
        <div className="rpageRoot">
            <h2>Profile</h2>
            <img src={profile} className="App-logo" alt="logo" />
            <p>name:なべくら</p>
            <p>description</p>
            <p>links</p>
            <ul>
                <li>link1</li>
                <li>link2</li>
            </ul>
        </div>
    );
};
