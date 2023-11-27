"use client"

import { ShowMoreProps } from "@/types/Index"
import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter();
  
    const handleNavigation = () => {
        // Calculate the new limit based on the page number and navigation type
        const newLimit = (pageNumber + 1) * 4;
    
        // Update the "limit" search parameter in the URL with the new value
        const newPathname = updateSearchParams("limit", `${newLimit}`);
        
        router.push(newPathname);

        console.log("BUTTON CLICKED");
        
      };
  
    return (
        <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <>
          {/* <CustomButton
            title="Show More"
            btnType="button"
            containerStyle="bg-primary-blue rounded-full text-white"
            handleClick={() => handleNavigation}
          /> */}

          <button type="button" className="bg-primary-blue rounded-full text-white p-3 px-5 mt-4" onClick={handleNavigation}>Show More</button>
          </>
        )}
      </div>
  )
}

export default ShowMore
