export default function OfferDescription() {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center space-y-8 sm:space-y-0 relative">
      {/* First Image and Text Block */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <img src="/images/landing/content2.svg" className="hidden md:block w-3/4 px-8 sm:px-12" />
        <img src="/images/landing/bowl.svg" className="md:hidden px-6 sm:px-12 w-full" />
      </div>
      
      {/* Second Text Block with Background */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
        <div className="bg-[url('/images/landing/frame2.svg')] bg-cover bg-center bg-no-repeat w-[90%] sm:w-[350px] md:w-[450px] lg:w-[616px] h-auto sm:h-[200px] md:h-[260px] lg:h-[324px] flex items-center justify-center m-auto md:m-0">
          <div className="text-[10px] sm:text-[12px] md:text-base text-black px-4 sm:px-6 md:px-12 py-4 sm:py-6 md:py-8 leading-4 sm:leading-5 md:leading-6 text-center">
            WE ALSO OFFER A HOODYGANG UI FOR HOLDERS TO VIEW AND MANAGE YOUR HOODYGANG NFTS.<br/><br/>
            THE HOODYGANG UI IS A FUN AND SIMPLE WAY FOR YOU <br/><br/>
            TO INTERACT WITH YOUR HOODYGANG NFTS.
          </div>
        </div>
      </div>
    </div>
  );
}
