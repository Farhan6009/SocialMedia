export const initialState = {
    user: {
        _id: "61d9c07a8fe45dbc020335d3",
        username: "farhan",
        email: "mdfarhan001@gmail.com",
        password: "farhan",
        followers: ["61d9da069260b1c1355b9d79"],
        following: ["61d9da069260b1c1355b9d79"],
        isAdmin: "false",
        desc: "This is my updated description",
        profilePicture: "Profile/istockphoto-1285124274-170667a.jpg",
        coverPicture: "ABT21192E2A5E5EDEC000348EB2D75AC226E0D55E743AFF292B278F75E563E02408.jpg"
    },
    isFetching: false,
    error: false
};

export const reducer = (state, action) => {

    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            };

        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload
            };

        default:
            return state;
    }

};
