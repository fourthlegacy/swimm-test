
const Link = (props: Props) => {
  return (
    <>
      <Link href={`https://www.github.com/${message.user?.name}`}>
        <span className="mb-2 cursor-pointer rounded-lg text-sm underline ">
          {message.user?.name}
        </span>
      </Link>
    </>
  );
};

export default Link;
