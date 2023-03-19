function User({details}) {
    return(<>
    <div className=" bg-gray-800 text-white  w-80 p-2 flex flex-col rounded-lg  shadow-inner shadow-lg shadow-white duration-300">
        <img className="w-72 h-72 border-2 border-black self-center hover:-translate-y-7 duration-200 rounded-lg" src={details.picture?.large} alt="" />
        <pre className="pt-2">Name   : {details.name?.title} {details.name?.first} {details.name?.last}</pre>
        <pre>Sex    : {details.gender}</pre>
        <pre>Email  : {details.email}</pre>
        <pre>Mobile : {details.phone}</pre>
        <pre>Age    : {details.dob?.age}</pre></div>
    </>)
}
export default User;