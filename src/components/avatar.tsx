function Avatar() {
  const avatar = "https://api.dicebear.com/6.x/adventurer/svg?seed=Socks";

  return (
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={avatar} />
      </div>
    </label>
  );
}

export default Avatar;
