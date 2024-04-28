import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const HomePage = () => {
  const navigate=useNavigate();
  const handleSearchSubmit=(searchFormValues:SearchForm)=>{
    navigate({
      pathname:`/search/${searchFormValues.searchQuery}`,
    })
  }

  return (
    <div className='flex flex-col gap-12'>
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
        Directly to your doorstep.
        </h1>
        <span className ="text-xl" >Food is just a click away!</span>
        <SearchBar placeHolder="Search by City or Town" onSubmit={handleSearchSubmit}/>
      </div>
    </div>
  )
}

export default HomePage;
