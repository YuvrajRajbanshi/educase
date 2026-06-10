import "../styles/pages.css";

export default function AccountSettings() {
  return (
    <div className="page-container account-page">
      <div className="page-content">
        <div className="settings-header">
          <h2 className="settings-title">Account Settings</h2>
        </div>

        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar-wrapper">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                alt="Profile"
                className="avatar-image"
              />
              <div className="avatar-badge" />
            </div>

            <div className="profile-info">
              <h3 className="profile-name">Harry Doe</h3>
              <p className="profile-email">Harry@Gmail.Com</p>
            </div>
          </div>

          <p className="profile-description">
            Lorem ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}
