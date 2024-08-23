import {  } from "../../Dropdown";
import {
  DropdownMenuContent,
  Dropdown,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "../../Dropdown/Dropdown";
import { ChevronDown } from "lucide-react";
export const AddVariablesDropdown = (props) => {
  return (
    <Dropdown>
      <DropdownMenuTrigger className="focus:bg-muted pt-[6px]">
        <div className="items-center ">
          {props.isTextEditor ? (
            <>
              <div className="hidden sm:flex">
               add var
                <ChevronDown className="ml-1 mt-[2px] h-4 w-4" />
              </div>
              <div className="block sm:hidden">+</div>
            </>
          ) : (
            <div className="flex">
              Add variables
              <ChevronDown className="ml-1 mt-[2px] h-4 w-4" />
            </div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="pb-1 pt-4">
          <div className="text-subtle mb-2 px-4 text-left text-xs">
           Add Variables
          </div>
          <div className="h-64 overflow-scroll md:h-80">
            {props.variables.map((variable) => (
              <DropdownMenuItem key={variable} className="hover:ring-0">
                <button
                  key={variable}
                  type="button"
                  className="w-full px-4 py-2"
                  onClick={() => props.addVariable("add")}
                >
                  <div className="sm:grid sm:grid-cols-2">
                    <div className="mr-3 text-left md:col-span-1">
                      variables
                    </div>
                    <div className="text-default hidden text-left sm:col-span-1 sm:flex">
                     Info
                    </div>
                  </div>
                </button>
              </DropdownMenuItem>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    </Dropdown>
  );
};
