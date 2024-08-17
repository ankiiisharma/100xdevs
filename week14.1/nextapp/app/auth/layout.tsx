export default function Layout({ children }) {
  return (
    <>
      <div className="border-b flex justify-center">
        <h1> 20%off till 12 Aug </h1>
      </div>
      {children}
    </>
  );
}
