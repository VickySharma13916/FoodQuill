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
            <div className="card" key={item?.id}>
              <img src={item?.avatar_url} alt="user" loading="lazy" className="img-fluid" />
              <div
                className="card-body card-height"
                style={{ minHeight: "200px" }}
              >
                <h2>{item?.name}</h2>
                <div>
                  Github Id:-
                  <a style={{ textDecoration: "none" }} href={item?.html_url}>
                    {item?.html_url}
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
