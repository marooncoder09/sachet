export default function SideBar() {
  return (
    <>
    <div className="flex h-screen flex-col justify-between border-e bg-white absolute left-0 md:w-1/6">
        <div className="px-4 py-6">
          <div className="flex items-center justify-center rounded-lg bg-gray-100 text-2xl text-gray-600">
            <div className="w-16 h-16 flex items-center justify-center">
              F&AI
            </div>
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src="/FAI_logo.png"
                alt="FAI Logo"
                className="max-w-full max-h-full h-auto"
              />
            </div>
          </div>
          <div className="px-4 py-6">
            <div className="flex justify-between">
             
            <a href="/explore-bots" className="flex flex-1 flex-col items-start p-4 mb-4 rounded-lg hover:bg-gray-100 md:mb-0 font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <span className="text-sm mr-2">Explore Bots</span>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg> */}
            </a>

            <a href="/create-bot" className="flex flex-1 flex-col items-start p-4 rounded-lg hover:bg-gray-100 font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>

            <span className="text-sm mr-2">Create Bot</span>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg> */}
            </a>
            </div>
          </div>


          <div className="space-y-2">

          {/* Chat row 1 */}
        <div className="flex items-center p-2 rounded hover:bg-gray-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Midjourney_Emblem_—_June.png" className="w-10 h-10 rounded-full mr-3" />
        <div>
        <div className="text-sm font-medium text-gray-900">MidJourney</div>  
        <div className="text-xs text-gray-500">/imagine prompt</div>
          </div>
        </div>

        {/* Chat row 2 */}
        <div className="flex items-center p-2 rounded hover:bg-gray-100">
        <img src="https://static.vecteezy.com/system/resources/previews/021/059/825/original/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg" className="w-10 h-10 rounded-full mr-3" />
        <div>
        <div className="text-sm font-medium text-gray-900">ChatGPT</div>
        <div className="text-xs text-gray-500">Top 5 ideas for ed-Tech videos </div>
        </div>
        </div>


        {/* Chat row 3 */}
        <div className="flex items-center p-2 rounded hover:bg-gray-100">
        <img src="https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1675531888/marketplaces/ckhg56iu1mkpc0b66vj7fsj3o/listings/anthropic-logo_fb47aaa7-9725-42fb-9aeb-889c99cdccf0_r4xcuu.png" className="w-10 h-10 rounded-full mr-3" />
        <div>
        <div className="text-sm font-medium text-gray-900">Claude</div>
        <div className="text-xs text-gray-500">Give youtube recommendation </div>
        </div>
        </div>

        

        {/* Chat row 4 */}
        <div className="flex items-center p-2 rounded hover:bg-gray-100">
        <img src="https://img.freepik.com/premium-vector/cute-smiley-robot-illustration-vector-icon-mascotflat-cartoon-design-style_461200-205.jpg" className="w-10 h-10 rounded-full mr-3" />
        <div>
        <div className="text-sm font-medium text-gray-900">Custom Bot</div>
        <div className="text-xs text-gray-500">Newsletter Headlines recommend </div>
        </div>
        </div>

  {/* More chat rows */}

</div>

          <ul className="mt-6 space-y-1 divide-y-2 divide-solid">
            <li>
              <a
                href=""
                className="flex items-center block rounded-lg bg-gray-100 px-4 py-2 text-xl  text-gray-500 font-medium  "
              >
               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                </svg>
                <span>Your Bots </span> 
              </a>
            </li>

            {/* <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Teams </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Banned Users
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
              </details>
            </li> */}

            <li>
              <a
                href=""
                className="flex items-center block rounded-lg bg-gray-100 px-4 py-2 text-xl  text-gray-500 font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>

                Subscribe
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center block rounded-lg bg-gray-100 px-4 py-2 text-xl  text-gray-500 font-medium"
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>

                Profile
              </a>
            </li>

            <li>
              <a
                href=""
                className="flex items-center block rounded-lg bg-gray-100 px-4 py-2 text-xl  text-gray-500 font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                 <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                Setting
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-xl font-medium"> Account </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Details
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Security
                    </a>
                  </li>

                  <li>
                    <form action="/logout">
                      <button
                        type="submit"
                        className="w-full rounded-lg px-4 py-2 text-lg font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                      >
                        Logout
                      </button>
                    </form>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>


        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p className="text-sm">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
