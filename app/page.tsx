export default function Home() {
  return (
    <main className="bg-gray-100 w-screen h-screen px-8 py-4 font-mono">
      <nav className="bg-black p-8 rounded-2xl flex items-center">
        <div>
          <h1 className="text-4xl text-gray-200 font-bold cursor-default">$ ./compiler.directory</h1>
        </div>
        <div className="ml-auto">
          <ul className="flex text-lg">
            <li className="ml-4">
              <a href="/" className="text-gray-200 hover:text-gray-400">--home</a>
            </li>
            <li className="ml-4">
              <a href="https://github.com/compiler-directory" className="text-gray-200 hover:text-gray-400">--github</a>
            </li>
            <li className="ml-4">
              <a href="https://wiki.compiler.directory" className="text-gray-300 hover:text-gray-500">--wiki=IN_PROGRESS</a>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  )
}
