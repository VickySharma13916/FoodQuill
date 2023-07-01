import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
    };
  }

  // when component is render successfully 1st time
  async componentDidMount() {
    //API Call after render the component
    const { name } = this.props;
    const data = await fetch(`https://api.github.com/users/${name}`);
    const json = await data.json();
    this.setState({
      userInfo: [json],
    });
  }

  // when component is update successfully
  componentDidUpdate() {
    console.log("component did update");
  }

  // when component is unmounted successfully
  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    //Never update state variable directly
    const { userInfo } = this.state;
    return (
      <>
        {userInfo &&
          userInfo?.map((item) => (
            <div className="border rounded p-4" key={item?.id}>
              <img
                src={item?.avatar_url}
                alt="user"
                loading="lazy"
                className="rounded"
              />
              <div className="h-36">
                <h2 className="font-semibold text-2xl">{item?.name}</h2>
                <div>
                  Github Id:-
                  <a className="no-underline" href={item?.html_url}>
                    <span className="text-blue-600 font-medium">
                      {item?.html_url}
                    </span>
                  </a>
                </div>
                <div>Followers:- {item?.followers}</div>
                <div>Following:- {item?.following}</div>
                <div>Repositories:- {item?.public_repos}</div>
              </div>
            </div>
          ))}
      </>
    );
  }
}

export default UserClass;
