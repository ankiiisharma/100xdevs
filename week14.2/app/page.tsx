import axios from "axios";

async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <>
      <div className="flex flex-col justify-center h-screen shadow-lg shadow-gray-500">
        <div className="flex justify-center">
          <div className="border p-8 rounded-xl">
            <div>Name: {userDetails?.name}</div>
            <div>Email: {userDetails?.email}</div>
          </div>
        </div>
      </div>
    </>
  );
}
