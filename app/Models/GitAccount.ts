export class GitAccount {
    private _htmlUrl: string;
    public get HtmlUrl() { return this._htmlUrl; }

    private _login: string;
    public get Login() { return this._login; }

    private _email: string;
    public get Email() { return this._email; }

    private _avatarUrl: string;
    public get AvatarUrl() { return this._avatarUrl; }

    private _bio: string;
    public get Bio() { return this._bio; }

    constructor(htmlUrl: string, login: string, email: string, avatarUrl: string, bio: string) {
        this._htmlUrl = htmlUrl;
        this._login = login;
        this._email = email;
        this._avatarUrl = avatarUrl;
        this._bio = bio;
    }

}
